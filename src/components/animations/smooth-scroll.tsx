'use client'

import Lenis from '@studio-freight/lenis'
import { ReactNode, useEffect } from 'react'

/**
 * SmoothScroll Provider
 * Provides smooth scrolling throughout the application
 */
export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}

/**
 * SmoothScrollTo Component
 * Smooth scroll to specific elements
 */
export function SmoothScrollTo({
  target,
  children,
  className = '',
}: {
  target: string
  children: ReactNode
  className?: string
}) {
  const handleClick = () => {
    const lenis = (window as any).lenis
    if (lenis) {
      lenis.scrollTo(target, { duration: 1.2 })
    } else {
      // Fallback to native scroll
      const element = document.querySelector(target)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
      className={className}
    >
      {children}
    </div>
  )
}
