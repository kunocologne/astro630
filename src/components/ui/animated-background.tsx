'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedBackgroundProps {
  className?: string
  intensity?: number
  speed?: number
}

export function AnimatedBackground({ 
  className = '', 
  intensity = 0.5, 
  speed = 20 
}: AnimatedBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * intensity,
          y: mousePosition.y * intensity,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
        animate={{
          x: -mousePosition.x * intensity,
          y: -mousePosition.y * intensity,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Floating particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  )
}

// Grid Pattern Background
export function GridPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
    </div>
  )
}

// Dot Pattern Background
export function DotPattern({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <div className="absolute inset-0 bg-dot-pattern opacity-10" />
    </div>
  )
}
