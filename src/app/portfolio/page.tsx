import type { Metadata } from 'next'
import { AboutSection } from '../../templates/portfolio-bold/components/AboutSection'
import { HeroSection } from '../../templates/portfolio-bold/components/HeroSection'
import { Navigation } from '../../templates/portfolio-bold/components/Navigation'
import { WorkSection } from '../../templates/portfolio-bold/components/WorkSection'

export const metadata: Metadata = {
  title: 'Portfolio Template - JUNO',
  description: 'Beautiful animated portfolio template with Framer Motion',
  keywords: ['portfolio', 'template', 'animation', 'framer-motion'],
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation companyName="Your Name" />
      <HeroSection 
        companyName="Your Name" 
        tagline="Professional solutions for modern business" 
      />
      <AboutSection />
      <WorkSection />
    </div>
  )
}
