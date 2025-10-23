'use client'

import { ReactNode, useState } from 'react'

interface MagneticButtonProps {
  children: ReactNode
  intensity?: number
  className?: string
  onClick?: () => void
}

/**
 * MagneticButton Component
 * Creates magnetic hover effects that follow the cursor
 */
export function MagneticButton({ 
  children, 
  intensity = 0.3, 
  className = '',
  onClick 
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) * intensity
    const y = (e.clientY - rect.top - rect.height / 2) * intensity
    
    setPosition({ x, y })
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <div
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scale(${isHovered ? 1.05 : 1})`
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </div>
  )
}

interface GlowEffectProps {
  children: ReactNode
  color?: string
  intensity?: number
  className?: string
}

/**
 * GlowEffect Component
 * Adds beautiful glow effects on hover
 */
export function GlowEffect({ 
  children, 
  color = '#6366f1', 
  intensity = 0.5,
  className = '' 
}: GlowEffectProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`transition-all duration-300 ${className}`}
      style={{
        boxShadow: isHovered 
          ? `0 0 ${20 * intensity}px ${color}${Math.floor(255 * intensity).toString(16).padStart(2, '0')}` 
          : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </div>
  )
}

interface ShimmerEffectProps {
  children: ReactNode
  className?: string
}

/**
 * ShimmerEffect Component
 * Adds shimmer animation for loading states or highlights
 */
export function ShimmerEffect({ children, className = '' }: ShimmerEffectProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
      {children}
    </div>
  )
}

interface TiltCardProps {
  children: ReactNode
  intensity?: number
  className?: string
}

/**
 * TiltCard Component
 * Creates 3D tilt effects on hover
 */
export function TiltCard({ 
  children, 
  intensity = 0.1, 
  className = '' 
}: TiltCardProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const rotateX = (e.clientY - centerY) * intensity
    const rotateY = (centerX - e.clientX) * intensity
    
    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 })
  }

  return (
    <div
      className={`transition-transform duration-300 ease-out ${className}`}
      style={{
        transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

interface FloatingElementProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}

/**
 * FloatingElement Component
 * Creates floating animation for elements
 */
export function FloatingElement({ 
  children, 
  delay = 0, 
  duration = 3,
  className = '' 
}: FloatingElementProps) {
  return (
    <div
      className={`animate-float ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  )
}

interface TextRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

/**
 * TextReveal Component
 * Creates text reveal animations
 */
export function TextReveal({ 
  children, 
  delay = 0, 
  className = '' 
}: TextRevealProps) {
  return (
    <div
      className={`animate-text-reveal ${className}`}
      style={{
        animationDelay: `${delay}s`
      }}
    >
      {children}
    </div>
  )
}
