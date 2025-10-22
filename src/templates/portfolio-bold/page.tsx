import type { Metadata } from 'next'
import { AboutSection } from './components/AboutSection'
import { HeroSection } from './components/HeroSection'
import { Navigation } from './components/Navigation'
import { WorkSection } from './components/WorkSection'
// import { TestimonialsSection } from './components/TestimonialsSection'
// import { ContactSection } from './components/ContactSection'
// import { Footer } from './components/Footer'

export const metadata: Metadata = {
  title: '{{COMPANY_NAME}} - {{TAGLINE}}',
  description: '{{TAGLINE}}',
  keywords: ['portfolio', 'design', 'creative', 'professional'],
  authors: [{ name: '{{COMPANY_NAME}}' }],
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation companyName="{{COMPANY_NAME}}" />
      <HeroSection companyName="{{COMPANY_NAME}}" tagline="{{TAGLINE}}" />
      <AboutSection />
      <WorkSection />
      {/* <TestimonialsSection />
      <ContactSection />
      <Footer /> */}
    </div>
  )
}