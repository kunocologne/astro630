'use client'

import { motion, useInView, type Variants } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

// Enterprise-grade scroll reveal variants
const scrollRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.1,
    },
  },
}

const fadeInVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const slideUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

const slideLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

const slideRightVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

const scaleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  },
}

type AnimationType = 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scale' | 'custom'

interface ScrollRevealProps {
  children: ReactNode
  animation?: AnimationType
  customVariants?: Variants
  threshold?: number
  delay?: number
  className?: string
  once?: boolean
}

/**
 * Enterprise-grade scroll reveal component
 * Provides performant scroll-triggered animations with intersection observer
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'slideUp',
  customVariants,
  threshold = 0.1,
  delay = 0,
  className = '',
  once = true,
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: threshold,
    once,
    margin: '-50px 0px -50px 0px', // Start animation 50px before element comes into view
  })

  const getVariants = (): Variants => {
    if (customVariants) return customVariants

    switch (animation) {
      case 'fadeIn':
        return fadeInVariants
      case 'slideUp':
        return slideUpVariants
      case 'slideLeft':
        return slideLeftVariants
      case 'slideRight':
        return slideRightVariants
      case 'scale':
        return scaleVariants
      default:
        return scrollRevealVariants
    }
  }

  return (
    <motion.div
      ref={ref}
      variants={getVariants()}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ delay }}
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

/**
 * Staggered scroll reveal container for multiple elements
 */
export const ScrollRevealContainer: React.FC<{
  children: ReactNode
  className?: string
  threshold?: number
  once?: boolean
}> = ({ children, className = '', threshold = 0.1, once = true }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: threshold, once })

  return (
    <motion.div
      ref={ref}
      variants={scrollRevealVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
      style={{
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </motion.div>
  )
}
