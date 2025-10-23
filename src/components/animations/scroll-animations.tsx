'use client'

import React, { ReactNode, useEffect, useRef, useState } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  className?: string
}

/**
 * ScrollReveal Component
 * Reveals elements with smooth animations when they come into view
 */
export function ScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0,
  duration = 0.6,
  className = '' 
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translateY(50px)'
        case 'down': return 'translateY(-50px)'
        case 'left': return 'translateX(50px)'
        case 'right': return 'translateX(-50px)'
        default: return 'translateY(50px)'
      }
    }
    return 'translateY(0) translateX(0)'
  }

  return (
    <div
      ref={elementRef}
      className={`transition-all ease-out ${className}`}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${duration}s`
      }}
    >
      {children}
    </div>
  )
}

interface ParallaxElementProps {
  children: ReactNode
  speed?: number
  className?: string
}

/**
 * ParallaxElement Component
 * Creates parallax scrolling effects
 */
export function ParallaxElement({ 
  children, 
  speed = 0.5, 
  className = '' 
}: ParallaxElementProps) {
  const [offset, setOffset] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const rate = scrolled * -speed
        setOffset(rate)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return (
    <div
      ref={elementRef}
      className={`transform ${className}`}
      style={{
        transform: `translateY(${offset}px)`
      }}
    >
      {children}
    </div>
  )
}

interface StaggeredRevealProps {
  children: ReactNode | ReactNode[]
  staggerDelay?: number
  className?: string
}

/**
 * StaggeredReveal Component
 * Reveals children with staggered timing
 */
export function StaggeredReveal({ 
  children, 
  staggerDelay = 0.1,
  className = '' 
}: StaggeredRevealProps) {
  return (
    <div className={className}>
      {React.Children.toArray(children).map((child, index) => (
        <ScrollReveal
          key={index}
          delay={index * staggerDelay}
          className="w-full"
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  )
}

interface CounterAnimationProps {
  end: number
  duration?: number
  className?: string
}

/**
 * CounterAnimation Component
 * Animates numbers counting up
 */
export function CounterAnimation({ 
  end, 
  duration = 2, 
  className = '' 
}: CounterAnimationProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isVisible, end, duration])

  return (
    <div ref={elementRef} className={className}>
      {count}+
    </div>
  )
}

interface ProgressBarProps {
  progress: number
  color?: string
  className?: string
}

/**
 * ProgressBar Component
 * Animated progress bar
 */
export function ProgressBar({ 
  progress, 
  color = '#6366f1',
  className = '' 
}: ProgressBarProps) {
  const [animatedProgress, setAnimatedProgress] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setAnimatedProgress(progress)
          }, 200)
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [progress])

  return (
    <div 
      ref={elementRef}
      className={`w-full bg-gray-200 rounded-full overflow-hidden ${className}`}
    >
      <div
        className="h-full transition-all duration-1000 ease-out"
        style={{
          width: `${animatedProgress}%`,
          backgroundColor: color
        }}
      />
    </div>
  )
}
