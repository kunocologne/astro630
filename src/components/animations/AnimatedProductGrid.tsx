'use client'

import { type ReactNode } from 'react'
import { AnimatedCardContainer } from './AnimatedCard'
import { ScrollReveal } from './ScrollReveal'

interface AnimatedProductGridProps {
  children: ReactNode
  className?: string
}

/**
 * Enterprise-grade animated product grid container
 * Provides staggered animations for product listings
 */
export const AnimatedProductGrid: React.FC<AnimatedProductGridProps> = ({
  children,
  className = '',
}) => {
  return (
    <ScrollReveal animation="fadeIn" threshold={0.1}>
      <AnimatedCardContainer className={className}>{children}</AnimatedCardContainer>
    </ScrollReveal>
  )
}
