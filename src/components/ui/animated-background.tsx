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
  speed = 20,
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
        className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
        animate={{
          x: mousePosition.x * intensity,
          y: mousePosition.y * intensity,
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/20 blur-3xl"
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
          className="absolute h-2 w-2 rounded-full bg-primary/30"
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
