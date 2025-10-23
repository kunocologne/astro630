import { AnimatedGradientBackground, FloatingParticles, GradientOrb } from '@/components/animations/floating-particles'
import { GlowEffect, MagneticButton, TiltCard } from '@/components/animations/micro-animations'
import { CounterAnimation, ScrollReveal, StaggeredReveal } from '@/components/animations/scroll-animations'
import { OptimizedImage, ProjectImage } from '@/components/ui/optimized-image'
import { getActiveTemplateConfig } from '@/config/active-template'
import { ArrowRight, Award, Calendar, ExternalLink, Github, Mail, MapPin, Phone, Star, Users } from 'lucide-react'
import type { Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Portfolio - Professional Creative',
  description: 'Professional portfolio with beautiful animations and modern design',
  keywords: ['portfolio', 'design', 'creative', 'professional'],
  authors: [{ name: 'JUNO' }],
}

/**
 * Master-Level Portfolio Template
 * 
 * This portfolio follows Awwwards standards with:
 * - Award-winning aesthetics and typography
 * - Smooth 60fps animations with Framer Motion
 * - Perfect spacing and visual hierarchy
 * - Interactive elements and magnetic effects
 * - Bento box layout with perfect grid system
 */

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">Work</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Animated Background */}
      <AnimatedGradientBackground 
        colors={['#6366f1', '#8b5cf6', '#06b6d4', '#f59e0b']}
        className="opacity-30"
      />
      
      {/* Floating Particles */}
      <FloatingParticles 
        count={60}
        colors={['#6366f1', '#8b5cf6', '#06b6d4', '#f59e0b']}
        className="opacity-60"
      />
      
      {/* Gradient Orbs */}
      <GradientOrb 
        size={300} 
        color="#6366f1" 
        className="top-20 left-10 animate-float" 
      />
      <GradientOrb 
        size={200} 
        color="#8b5cf6" 
        className="top-40 right-20 animate-float" 
      />
      <GradientOrb 
        size={250} 
        color="#06b6d4" 
        className="bottom-20 left-1/4 animate-float" 
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-8 glass-morphism hover-glow">
            <Award className="w-4 h-4 animate-bounce-gentle" />
            <span>Available for Projects</span>
          </div>
        </ScrollReveal>
        
        {/* Main Headline */}
        <ScrollReveal direction="up" delay={0.4}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Creative
            <span className="gradient-text">
              {' '}Designer{' '}
            </span>
            & Developer
          </h1>
        </ScrollReveal>
        
        {/* Subheadline */}
        <ScrollReveal direction="up" delay={0.6}>
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Crafting digital experiences that combine beautiful design with seamless functionality. 
            <span className="text-gray-900 font-semibold"> Let&apos;s build something amazing together.</span>
          </p>
        </ScrollReveal>
        
        {/* CTA Buttons */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <MagneticButton intensity={0.3}>
              <GlowEffect color="#6366f1" intensity={0.6}>
                <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 magnetic-button">
                  <Mail className="w-5 h-5" />
                  Start a Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </GlowEffect>
            </MagneticButton>
            
            <MagneticButton intensity={0.2}>
              <button className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300 hover-lift">
                <ExternalLink className="w-5 h-5" />
                View Work
              </button>
            </MagneticButton>
          </div>
        </ScrollReveal>
        
        {/* Stats */}
        <ScrollReveal direction="up" delay={1.0}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2 hover-scale">
              <Users className="w-4 h-4 animate-bounce-gentle" />
              <span>
                <CounterAnimation end={50} className="font-bold text-blue-600" />+ Happy Clients
              </span>
            </div>
            <div className="flex items-center gap-2 hover-scale">
              <Award className="w-4 h-4 animate-bounce-gentle" style={{ animationDelay: '0.5s' }} />
              <span>
                <CounterAnimation end={5} className="font-bold text-purple-600" /> Design Awards
              </span>
            </div>
            <div className="flex items-center gap-2 hover-scale">
              <Calendar className="w-4 h-4 animate-bounce-gentle" style={{ animationDelay: '1s' }} />
              <span>
                <CounterAnimation end={3} className="font-bold text-cyan-600" />+ Years Experience
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function WorkSection() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Design",
      image: "/media/portfolio-ecommerce-hero.jpg",
      gradient: "bg-gradient-to-br from-blue-500 to-purple-600",
      description: "Modern e-commerce solution with seamless user experience",
      tags: ["React", "Next.js", "Tailwind"],
      featured: true
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile Design", 
      image: "/media/portfolio-mobile-banking.jpg",
      gradient: "bg-gradient-to-br from-blue-600 to-indigo-700",
      description: "Secure and intuitive banking experience",
      tags: ["Figma", "Prototyping", "UX"],
      featured: true
    },
    {
      id: 3,
      title: "SaaS Dashboard",
      category: "Web Design",
      image: "/media/portfolio-dashboard.jpg", 
      gradient: "bg-gradient-to-br from-purple-600 to-blue-700",
      description: "Analytics dashboard with real-time data visualization",
      tags: ["Vue.js", "D3.js", "Analytics"],
      featured: false
    },
    {
      id: 4,
      title: "Brand Identity",
      category: "Branding",
      image: "/media/portfolio-branding.jpg",
      gradient: "bg-gradient-to-br from-indigo-500 to-purple-600",
      description: "Complete brand identity for tech startup",
      tags: ["Logo Design", "Branding", "Identity"],
      featured: false
    }
  ]

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A selection of projects that showcase my design and development skills
          </p>
        </div>
        
        {/* Bento Box Grid */}
        <StaggeredReveal staggerDelay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {projects.map((project, index) => (
              <TiltCard key={project.id} intensity={0.1}>
                <div 
                  className={`group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 card-3d hover-lift ${
                    project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
              <div className="aspect-[4/3] relative overflow-hidden">
                {/* Project Image */}
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full"
                  fallbackGradient={project.gradient}
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{project.category}</span>
                      {project.featured && (
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs font-medium text-yellow-600">Featured</span>
                        </div>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </div>
    </StaggeredReveal>
        
        <ScrollReveal direction="up" delay={0.4}>
          <div className="text-center">
            <MagneticButton intensity={0.3}>
              <GlowEffect color="#6366f1" intensity={0.5}>
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 magnetic-button">
                  <Github className="w-5 h-5" />
                  View All Projects
                  <ArrowRight className="w-5 h-5" />
                </button>
              </GlowEffect>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal direction="left" delay={0.2}>
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 gradient-text">
                About Me
              </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              I&apos;m a passionate designer and developer with over 3 years of experience creating 
              digital experiences that users love. I specialize in modern web technologies 
              and have a keen eye for detail.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              When I&apos;m not coding, you can find me exploring new design trends, contributing 
              to open source projects, or sharing knowledge with the developer community.
            </p>
            
            <StaggeredReveal staggerDelay={0.1}>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="text-center hover-scale">
                  <CounterAnimation end={50} className="text-3xl font-bold text-blue-600 mb-2" />
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center hover-scale">
                  <CounterAnimation end={3} className="text-3xl font-bold text-purple-600 mb-2" />
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center hover-scale">
                  <CounterAnimation end={100} className="text-3xl font-bold text-green-600 mb-2" />
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center hover-scale">
                  <CounterAnimation end={5} className="text-3xl font-bold text-orange-600 mb-2" />
                  <div className="text-sm text-gray-600">Design Awards</div>
                </div>
              </div>
            </StaggeredReveal>
            
            <MagneticButton intensity={0.3}>
              <GlowEffect color="#6366f1" intensity={0.6}>
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 magnetic-button">
                  <Mail className="w-5 h-5" />
                  Let&apos;s Work Together
                  <ArrowRight className="w-5 h-5" />
                </button>
              </GlowEffect>
            </MagneticButton>
          </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.4}>
            <div className="relative">
              <TiltCard intensity={0.1}>
                <div className="aspect-square rounded-3xl shadow-2xl overflow-hidden card-3d hover-lift">
                  {/* Professional Portrait */}
                  <OptimizedImage
                    src="/media/about-portrait.jpg"
                    alt="Creative Professional Portrait"
                    width={600}
                    height={600}
                    className="w-full h-full"
                    fallbackGradient="bg-gradient-to-br from-blue-500 to-purple-600"
                    priority={true}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-3xl" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce-gentle">
                        <Users className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Creative Professional</h3>
                      <p className="text-white/80">Designer & Developer</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Animated Background */}
      <AnimatedGradientBackground 
        colors={['#2563eb', '#8b5cf6', '#6366f1']}
        className="opacity-40"
      />
      
      {/* Floating Particles */}
      <FloatingParticles 
        count={40}
        colors={['#ffffff', '#e0e7ff', '#c7d2fe']}
        className="opacity-80"
      />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 gradient-text">
            Let&apos;s Create Something Amazing
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.4}>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Ready to bring your ideas to life? I&apos;d love to hear about your project and discuss how we can work together.
          </p>
        </ScrollReveal>
        
        <StaggeredReveal staggerDelay={0.2}>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center hover-lift glass-morphism p-6 rounded-2xl">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce-gentle">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-blue-100">hello@portfolio.com</p>
            </div>
            
            <div className="text-center hover-lift glass-morphism p-6 rounded-2xl">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce-gentle" style={{ animationDelay: '0.5s' }}>
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
              <p className="text-blue-100">+1 (555) 123-4567</p>
            </div>
            
            <div className="text-center hover-lift glass-morphism p-6 rounded-2xl">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 animate-bounce-gentle" style={{ animationDelay: '1s' }}>
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
              <p className="text-blue-100">San Francisco, CA</p>
            </div>
          </div>
        </StaggeredReveal>
        
        <ScrollReveal direction="up" delay={0.6}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <MagneticButton intensity={0.3}>
              <GlowEffect color="#ffffff" intensity={0.4}>
                <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 magnetic-button">
                  <Mail className="w-5 h-5" />
                  Send Message
                  <ArrowRight className="w-5 h-5" />
                </button>
              </GlowEffect>
            </MagneticButton>
            
            <MagneticButton intensity={0.2}>
              <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300 hover-lift glass-morphism">
                <Github className="w-5 h-5" />
                View GitHub
              </button>
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Portfolio
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Creating beautiful digital experiences that combine design and development for modern businesses.
            </p>
            <div className="flex space-x-4">
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Github className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#work" className="text-gray-400 hover:text-white transition-colors">Work</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Web Design</span></li>
              <li><span className="text-gray-400">Mobile Apps</span></li>
              <li><span className="text-gray-400">Branding</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

/**
 * Dynamic Portfolio Components
 * 
 * This component dynamically loads portfolio-specific components to prevent
 * unnecessary loading of template assets before a template is selected.
 */
async function DynamicPortfolioComponents() {
  const templateConfig = getActiveTemplateConfig()

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

/**
 * Loading fallback for portfolio components
 */
function PortfolioLoadingFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading portfolio...</p>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <Suspense fallback={<PortfolioLoadingFallback />}>
      <DynamicPortfolioComponents />
    </Suspense>
  )
}