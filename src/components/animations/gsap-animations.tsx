'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactNode, useEffect, useRef } from 'react'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface GSAPScrollRevealProps {
  children: ReactNode
  direction?: 'up' | 'down' | 'left' | 'right'
  delay?: number
  duration?: number
  className?: string
}

/**
 * GSAP ScrollReveal Component
 * High-performance scroll-triggered animations using GSAP
 */
export function GSAPScrollReveal({ 
  children, 
  direction = 'up', 
  delay = 0,
  duration = 1,
  className = '' 
}: GSAPScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current
    const directionMap = {
      up: { y: 100, x: 0 },
      down: { y: -100, x: 0 },
      left: { y: 0, x: 100 },
      right: { y: 0, x: -100 }
    }

    const { x, y } = directionMap[direction]

    // Set initial state
    gsap.set(element, {
      opacity: 0,
      x,
      y
    })

    // Create animation
    const animation = gsap.to(element, {
      opacity: 1,
      x: 0,
      y: 0,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    return () => {
      animation.kill()
    }
  }, [direction, delay, duration])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

interface GSAPStaggerProps {
  children: ReactNode[]
  staggerDelay?: number
  className?: string
}

/**
 * GSAP Stagger Animation
 * Staggered animations for multiple elements
 */
export function GSAPStagger({ 
  children, 
  staggerDelay = 0.1,
  className = '' 
}: GSAPStaggerProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const elements = containerRef.current.children
    if (elements.length === 0) return

    // Set initial state for all children
    gsap.set(elements, {
      opacity: 0,
      y: 50
    })

    // Create stagger animation
    const animation = gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: staggerDelay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    return () => {
      animation.kill()
    }
  }, [staggerDelay])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}

interface GSAPParallaxProps {
  children: ReactNode
  speed?: number
  className?: string
}

/**
 * GSAP Parallax Component
 * Smooth parallax scrolling with GSAP
 */
export function GSAPParallax({ 
  children, 
  speed = 0.5, 
  className = '' 
}: GSAPParallaxProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    const animation = gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

    return () => {
      animation.kill()
    }
  }, [speed])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

interface GSAPMagneticProps {
  children: ReactNode
  intensity?: number
  className?: string
}

/**
 * GSAP Magnetic Effect
 * Smooth magnetic interactions with GSAP
 */
export function GSAPMagnetic({ 
  children, 
  intensity = 0.3, 
  className = '' 
}: GSAPMagneticProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left - rect.width / 2
      const y = e.clientY - rect.top - rect.height / 2

      gsap.to(element, {
        x: x * intensity,
        y: y * intensity,
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)'
      })
    }

    element.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [intensity])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

interface GSAPTextRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

/**
 * GSAP Text Reveal
 * Animated text reveal with GSAP
 */
export function GSAPTextReveal({ 
  children, 
  delay = 0,
  className = '' 
}: GSAPTextRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    // Split text into words
    const words = element.textContent?.split(' ') || []
    element.innerHTML = words.map(word => `<span class="inline-block">${word}</span>`).join(' ')
    
    const wordElements = element.querySelectorAll('span')

    // Set initial state
    gsap.set(wordElements, {
      opacity: 0,
      y: 50,
      rotationX: 90
    })

    // Create animation
    const animation = gsap.to(wordElements, {
      opacity: 1,
      y: 0,
      rotationX: 0,
      duration: 0.8,
      stagger: 0.1,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    })

    return () => {
      animation.kill()
    }
  }, [delay])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}

interface GSAPCounterProps {
  end: number
  duration?: number
  className?: string
}

/**
 * GSAP Counter Animation
 * Smooth number counting with GSAP
 */
export function GSAPCounter({ 
  end, 
  duration = 2, 
  className = '' 
}: GSAPCounterProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!elementRef.current) return

    const element = elementRef.current

    const animation = gsap.fromTo(element, 
      { textContent: 0 },
      {
        textContent: end,
        duration,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse'
        }
      }
    )

    return () => {
      animation.kill()
    }
  }, [end, duration])

  return (
    <div ref={elementRef} className={className}>
      0
    </div>
  )
}

/**
 * GSAP Timeline Component
 * Complex animation sequences
 */
export function GSAPTimeline({ 
  children, 
  className = '' 
}: { 
  children: ReactNode
  className?: string 
}) {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!timelineRef.current) return

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: timelineRef.current,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none reverse'
      }
    })

    const elements = timelineRef.current.children
    timeline.fromTo(elements, 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
    )

    return () => {
      timeline.kill()
    }
  }, [])

  return (
    <div ref={timelineRef} className={className}>
      {children}
    </div>
  )
}
