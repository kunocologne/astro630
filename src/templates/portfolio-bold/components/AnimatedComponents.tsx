'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

// Animated Components
export const FadeInUp = ({
  children,
  delay = 0,
  duration = 0.6,
}: {
  children: ReactNode
  delay?: number
  duration?: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

export const FadeInLeft = ({
  children,
  delay = 0,
  duration = 0.6,
}: {
  children: ReactNode
  delay?: number
  duration?: number
}) => (
  <motion.div
    initial={{ opacity: 0, x: -60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

export const FadeInRight = ({
  children,
  delay = 0,
  duration = 0.6,
}: {
  children: ReactNode
  delay?: number
  duration?: number
}) => (
  <motion.div
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

export const ScaleIn = ({
  children,
  delay = 0,
  duration = 0.5,
}: {
  children: ReactNode
  delay?: number
  duration?: number
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
)

export const StaggerContainer = ({
  children,
  delay = 0.1,
}: {
  children: ReactNode
  delay?: number
}) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: delay,
        },
      },
    }}
  >
    {children}
  </motion.div>
)

export const StaggerItem = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
)

// Floating Animation Component
export const FloatingElement = ({
  children,
  intensity = 0.5,
  speed = 2,
}: {
  children: ReactNode
  intensity?: number
  speed?: number
}) => (
  <motion.div
    animate={{
      y: [0, -10 * intensity, 0],
    }}
    transition={{
      duration: speed,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  >
    {children}
  </motion.div>
)

// Hover Scale Component
export const HoverScale = ({ children, scale = 1.05 }: { children: ReactNode; scale?: number }) => (
  <motion.div whileHover={{ scale }} transition={{ duration: 0.2, ease: 'easeOut' }}>
    {children}
  </motion.div>
)

// Parallax Component
export const ParallaxElement = ({
  children,
  offset = 50,
}: {
  children: ReactNode
  offset?: number
}) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset])

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}
