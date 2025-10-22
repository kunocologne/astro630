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
  intensity = 0.3 
}: GlowCardProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute -inset-0.5 bg-gradient-to-r from-${glowColor}-500/20 to-${glowColor}-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
        style={{ filter: `blur(8px)` }}
      />
      
      {/* Card content */}
      <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg p-6">
        {children}
      </div>
    </motion.div>
  )
}

// Shimmer Effect Card
export function ShimmerCard({ 
  children, 
  className = '' 
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
      
      <div className="relative bg-background/80 backdrop-blur-sm border border-border/50 rounded-lg p-6">
        {children}
      </div>
    </motion.div>
  )
}
