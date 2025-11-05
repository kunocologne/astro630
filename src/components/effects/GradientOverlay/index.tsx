'use client'

import React from 'react'
import { cn } from '@/lib/utils/cn'

type GradientDirection = 'to-t' | 'to-b' | 'to-r' | 'to-l' | 'to-br' | 'to-tr'

interface GradientOverlayProps {
  /**
   * Gradient direction
   * @default 'to-t' (top - dark at bottom, transparent at top)
   */
  direction?: GradientDirection
  /**
   * Starting color opacity (0-100)
   * @default 80
   */
  fromOpacity?: number
  /**
   * Middle color opacity (0-100)
   * @default 20
   */
  viaOpacity?: number
  /**
   * Show middle color (via)
   * @default true
   */
  showVia?: boolean
  /**
   * Transition duration in milliseconds
   * @default 500
   */
  duration?: number
  /**
   * Custom gradient colors (e.g., 'from-orange-600 to-pink-600')
   * If provided, overrides fromOpacity/viaOpacity
   */
  colors?: string
  /**
   * Additional className
   */
  className?: string
}

/**
 * GradientOverlay Component
 *
 * A reusable gradient overlay that appears on hover.
 * Perfect for darkening images and improving text contrast.
 *
 * @example
 * <GradientOverlay direction="to-t" fromOpacity={80} />
 * <GradientOverlay direction="to-b" fromOpacity={70} showVia={false} />
 * <GradientOverlay colors="from-orange-600 to-pink-600" direction="to-r" />
 */
export function GradientOverlay({
  direction = 'to-t',
  fromOpacity = 80,
  viaOpacity = 20,
  showVia = true,
  duration = 500,
  colors,
  className,
}: GradientOverlayProps) {
  // Use static class names that Tailwind can detect
  const directionClasses: Record<GradientDirection, string> = {
    'to-t': 'bg-gradient-to-t',
    'to-b': 'bg-gradient-to-b',
    'to-r': 'bg-gradient-to-r',
    'to-l': 'bg-gradient-to-l',
    'to-br': 'bg-gradient-to-br',
    'to-tr': 'bg-gradient-to-tr',
  }

  // If custom colors provided, use them directly
  if (colors) {
    return (
      <div
        className={cn(
          'absolute inset-0',
          directionClasses[direction],
          colors,
          'opacity-0 transition-opacity group-hover:opacity-100',
          className,
        )}
        style={{ transitionDuration: `${duration}ms` }}
      />
    )
  }

  // Build gradient classes - using common opacity values Tailwind knows
  const getFromColor = () => {
    // Common opacity values that Tailwind JIT supports
    const commonOpacities: Record<number, string> = {
      70: 'from-black/70',
      80: 'from-black/80',
      90: 'from-black/90',
      100: 'from-black',
    }
    return commonOpacities[fromOpacity] || `from-black/[${fromOpacity}%]`
  }

  const getViaColor = () => {
    if (!showVia) return 'via-transparent'
    const commonOpacities: Record<number, string> = {
      10: 'via-black/10',
      20: 'via-black/20',
      30: 'via-black/30',
    }
    return commonOpacities[viaOpacity] || `via-black/[${viaOpacity}%]`
  }

  return (
    <div
      className={cn(
        'absolute inset-0',
        directionClasses[direction],
        getFromColor(),
        getViaColor(),
        'to-transparent',
        'opacity-0 transition-opacity group-hover:opacity-100',
        className,
      )}
      style={{ transitionDuration: `${duration}ms` }}
    />
  )
}
