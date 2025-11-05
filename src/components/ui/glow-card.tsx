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
      <div className="relative rounded-lg border border-border/50 bg-background/80 p-6 backdrop-blur-sm">
        {children}
      </div>
    </motion.div>
  )
}
