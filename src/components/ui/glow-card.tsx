'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
  glowColor?: string
  intensity?: number
}

export function GlowCard({
  children,
  className = '',
  glowColor = 'primary',
  intensity = 0.3,
}: GlowCardProps) {
  return (
    <motion.div
      className={`group relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute -inset-0.5 bg-gradient-to-r from-${glowColor}-500/20 to-${glowColor}-600/20 rounded-lg opacity-0 blur transition-opacity duration-300 group-hover:opacity-100`}
        style={{ filter: `blur(8px)` }}
      />

      {/* Card content */}
      <div className="bg-background/80 border-border/50 relative rounded-lg border p-6 backdrop-blur-sm">
        {children}
      </div>
    </motion.div>
  )
}

// Shimmer Effect Card
export function ShimmerCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{
          x: ['-100%', '100%'],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

      <div className="bg-background/80 border-border/50 relative rounded-lg border p-6 backdrop-blur-sm">
        {children}
      </div>
    </motion.div>
  )
}
