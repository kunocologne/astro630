'use client'

import { motion, type Variants } from 'framer-motion'
import { type ButtonHTMLAttributes, type ReactNode } from 'react'

// Enterprise-grade button animation variants
const buttonVariants: Variants = {
  idle: {
    scale: 1,
    boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)',
  },
  hover: {
    scale: 1.05,
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 25,
    },
  },
  tap: {
    scale: 0.95,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    transition: {
      type: 'spring',
      stiffness: 600,
      damping: 30,
    },
  },
  loading: {
    scale: 0.98,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  },
}

const rippleVariants: Variants = {
  initial: {
    scale: 0,
    opacity: 0.6,
  },
  animate: {
    scale: 4,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  showRipple?: boolean
  className?: string
}

/**
 * Enterprise-grade animated button component
 * Provides smooth hover, tap, loading, and ripple animations
 */
export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  showRipple = true,
  className = '',
  onClick,
  disabled,
  onAnimationStart: _onAnimationStart,
  onAnimationEnd: _onAnimationEnd,
  onDrag: _onDrag,
  onDragStart: _onDragStart,
  onDragEnd: _onDragEnd,
  ...props
}) => {
  const baseClasses = 'relative overflow-hidden rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variantClasses = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 focus:ring-secondary',
    ghost: 'hover:bg-accent hover:text-accent-foreground focus:ring-accent',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 focus:ring-destructive',
  }
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick && !isLoading && !disabled) {
      onClick(e)
    }
  }

  return (
    <motion.button
      variants={buttonVariants}
      initial="idle"
      whileHover={!disabled && !isLoading ? 'hover' : 'idle'}
      whileTap={!disabled && !isLoading ? 'tap' : 'idle'}
      animate={isLoading ? 'loading' : 'idle'}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={handleClick as any}
      disabled={disabled || isLoading}
      // Performance optimizations
      style={{
        willChange: 'transform, box-shadow',
      }}
      {...props}
    >
      {/* Ripple effect */}
      {showRipple && (
        <motion.span
          variants={rippleVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 rounded-full bg-white/20 pointer-events-none"
          style={{
            willChange: 'transform, opacity',
          }}
        />
      )}
      
      {/* Loading spinner */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
          />
        </motion.div>
      )}
      
      {/* Button content */}
      <motion.span
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="relative z-10"
      >
        {children}
      </motion.span>
    </motion.button>
  )
}
