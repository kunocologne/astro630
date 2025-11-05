'use client'

import { motion, type Variants } from 'framer-motion'
import { type ReactNode, useEffect } from 'react'

// Enterprise-grade page transition variants
const pageVariants: Variants = {
  initial: {
    opacity: 0.3,
    y: 10,
    scale: 0.99,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -20,
    scale: 1.02,
  },
}

const pageTransition = {
  type: 'tween' as const,
  ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], // Custom cubic-bezier for smooth motion
  duration: 0.4,
}

interface AnimatedPageProps {
  children: ReactNode
  className?: string
}

/**
 * Enterprise-grade page transition component
 * Provides smooth, performant page transitions with optimized animations
 */
export const AnimatedPage: React.FC<AnimatedPageProps> = ({ children, className = '' }) => {
  // Fallback to ensure content is visible
  useEffect(() => {
    const timer = setTimeout(() => {
      const element = document.getElementById('main-content')
      if (element) {
        element.style.opacity = '1'
        element.style.transform = 'translateY(0) scale(1)'
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={className}
      // Performance optimizations
      style={{
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </motion.div>
  )
}
