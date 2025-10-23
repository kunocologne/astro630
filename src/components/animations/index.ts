// Animation Components Index
// All animation components exported from a single location

// Core animated components
export { AnimatedButton } from './AnimatedButton'
export { AnimatedCard, AnimatedCardContainer } from './AnimatedCard'
export { AnimatedPage } from './AnimatedPage'

// CSS-based animations (lightweight, performant)
export { AnimatedGradientBackground, FloatingParticles, GradientOrb } from './floating-particles'

export {
  FloatingElement,
  GlowEffect,
  MagneticButton,
  ShimmerEffect,
  TextReveal,
  TiltCard,
} from './micro-animations'

export {
  CounterAnimation,
  ParallaxElement,
  ProgressBar,
  ScrollReveal,
  StaggeredReveal,
} from './scroll-animations'

// GSAP-powered animations (high-performance)
export {
  GSAPCounter,
  GSAPMagnetic,
  GSAPParallax,
  GSAPScrollReveal,
  GSAPStagger,
  GSAPTextReveal,
  GSAPTimeline,
} from './gsap-animations'

// Smooth scrolling
export { SmoothScrollProvider, SmoothScrollTo } from './smooth-scroll'

// Three.js 3D animations
export { ThreeBackground, ThreeMorphingBackground, ThreeScene } from './three-animations'

// Animation utilities
export const animationPresets = {
  // Easing functions
  ease: {
    smooth: 'cubic-bezier(0.16, 1, 0.3, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    elastic: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  },

  // Duration presets
  duration: {
    fast: 0.2,
    normal: 0.3,
    slow: 0.5,
    slower: 0.8,
  },

  // Stagger delays
  stagger: {
    fast: 0.05,
    normal: 0.1,
    slow: 0.2,
  },
}

// Animation configuration
export const animationConfig = {
  // Reduced motion support
  respectReducedMotion: true,

  // Performance settings
  willChange: true,
  transform3d: true,

  // Default values
  defaults: {
    duration: 0.3,
    ease: 'cubic-bezier(0.16, 1, 0.3, 1)',
    stagger: 0.1,
  },
}
