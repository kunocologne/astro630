'use client'

import { motion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'

// Enterprise-grade card animation variants
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
    },
  },
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  index?: number
  isStaggered?: boolean
}

/**
 * Enterprise-grade animated card component
 * Provides smooth hover, tap, and entrance animations
 */
export const AnimatedCard: React.FC<AnimatedCardProps> = ({
  children,
  className = '',
  delay = 0,
  index = 0,
  isStaggered = false,
}) => {
  const cardTransition = {
    type: 'spring',
    stiffness: 260,
    damping: 20,
    delay: isStaggered ? index * 0.1 + delay : delay,
  }

  return (
    <motion.div
      variants={isStaggered ? cardVariants : undefined}
      initial={isStaggered ? 'hidden' : { opacity: 0, y: 30, scale: 0.95 }}
      animate={isStaggered ? 'visible' : { opacity: 1, y: 0, scale: 1 }}
      whileHover="hover"
      whileTap="tap"
      transition={cardTransition}
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
 * Staggered container for multiple animated cards
 */
export const AnimatedCardContainer: React.FC<{
  children: ReactNode
  className?: string
}> = ({ children, className = '' }) => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  )
}
