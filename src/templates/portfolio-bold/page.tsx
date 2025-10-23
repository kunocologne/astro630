import {
  AnimatedGradientBackground,
  FloatingParticles,
  GradientOrb,
} from '@/components/animations/floating-particles'
import { GlowEffect, MagneticButton, TiltCard } from '@/components/animations/micro-animations'
import {
  CounterAnimation,
  ScrollReveal,
  StaggeredReveal,
} from '@/components/animations/scroll-animations'
import { OptimizedImage, ProjectImage } from '@/components/ui/optimized-image'
import { getActiveTemplateConfig } from '@/config/active-template'
import {
  ArrowRight,
  Award,
  Calendar,
  ExternalLink,
  Github,
  Mail,
  MapPin,
  Phone,
  Star,
  Users,
} from 'lucide-react'
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
    <nav className="fixed top-0 right-0 left-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-2xl font-bold text-transparent">
              Portfolio
            </div>
          </div>
          <div className="hidden items-center space-x-8 md:flex">
            <a href="#work" className="text-gray-600 transition-colors hover:text-gray-900">
              Work
            </a>
            <a href="#about" className="text-gray-600 transition-colors hover:text-gray-900">
              About
            </a>
            <a href="#contact" className="text-gray-600 transition-colors hover:text-gray-900">
              Contact
            </a>
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-2 text-white transition-all duration-300 hover:shadow-lg">
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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
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
      <GradientOrb size={300} color="#6366f1" className="animate-float top-20 left-10" />
      <GradientOrb size={200} color="#8b5cf6" className="animate-float top-40 right-20" />
      <GradientOrb size={250} color="#06b6d4" className="animate-float bottom-20 left-1/4" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="glass-morphism hover-glow mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            <Award className="animate-bounce-gentle h-4 w-4" />
            <span>Available for Projects</span>
          </div>
        </ScrollReveal>

        {/* Main Headline */}
        <ScrollReveal direction="up" delay={0.4}>
          <h1 className="mb-6 text-5xl leading-tight font-bold text-gray-900 sm:text-6xl lg:text-7xl">
            Creative
            <span className="gradient-text"> Designer </span>& Developer
          </h1>
        </ScrollReveal>

        {/* Subheadline */}
        <ScrollReveal direction="up" delay={0.6}>
          <p className="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-gray-600 sm:text-2xl">
            Crafting digital experiences that combine beautiful design with seamless functionality.
            <span className="font-semibold text-gray-900">
              {' '}
              Let&apos;s build something amazing together.
            </span>
          </p>
        </ScrollReveal>

        {/* CTA Buttons */}
        <ScrollReveal direction="up" delay={0.8}>
          <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <MagneticButton intensity={0.3}>
              <GlowEffect color="#6366f1" intensity={0.6}>
                <button className="group magnetic-button relative inline-flex transform items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <Mail className="h-5 w-5" />
                  Start a Project
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>
              </GlowEffect>
            </MagneticButton>

            <MagneticButton intensity={0.2}>
              <button className="group hover-lift inline-flex items-center gap-3 rounded-2xl border-2 border-gray-300 px-8 py-4 font-semibold text-gray-700 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50">
                <ExternalLink className="h-5 w-5" />
                View Work
              </button>
            </MagneticButton>
          </div>
        </ScrollReveal>

        {/* Stats */}
        <ScrollReveal direction="up" delay={1.0}>
          <div className="flex flex-col items-center justify-center gap-8 text-sm text-gray-500 sm:flex-row">
            <div className="hover-scale flex items-center gap-2">
              <Users className="animate-bounce-gentle h-4 w-4" />
              <span>
                <CounterAnimation end={50} className="font-bold text-blue-600" />+ Happy Clients
              </span>
            </div>
            <div className="hover-scale flex items-center gap-2">
              <Award className="animate-bounce-gentle h-4 w-4" style={{ animationDelay: '0.5s' }} />
              <span>
                <CounterAnimation end={5} className="font-bold text-purple-600" /> Design Awards
              </span>
            </div>
            <div className="hover-scale flex items-center gap-2">
              <Calendar
                className="animate-bounce-gentle h-4 w-4"
                style={{ animationDelay: '1s' }}
              />
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
      title: 'E-commerce Platform',
      category: 'Web Design',
      image: '/media/portfolio-ecommerce-hero.jpg',
      gradient: 'bg-gradient-to-br from-blue-500 to-purple-600',
      description: 'Modern e-commerce solution with seamless user experience',
      tags: ['React', 'Next.js', 'Tailwind'],
      featured: true,
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile Design',
      image: '/media/portfolio-mobile-banking.jpg',
      gradient: 'bg-gradient-to-br from-blue-600 to-indigo-700',
      description: 'Secure and intuitive banking experience',
      tags: ['Figma', 'Prototyping', 'UX'],
      featured: true,
    },
    {
      id: 3,
      title: 'SaaS Dashboard',
      category: 'Web Design',
      image: '/media/portfolio-dashboard.jpg',
      gradient: 'bg-gradient-to-br from-purple-600 to-blue-700',
      description: 'Analytics dashboard with real-time data visualization',
      tags: ['Vue.js', 'D3.js', 'Analytics'],
      featured: false,
    },
    {
      id: 4,
      title: 'Brand Identity',
      category: 'Branding',
      image: '/media/portfolio-branding.jpg',
      gradient: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      description: 'Complete brand identity for tech startup',
      tags: ['Logo Design', 'Branding', 'Identity'],
      featured: false,
    },
  ]

  return (
    <section id="work" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">Featured Work</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            A selection of projects that showcase my design and development skills
          </p>
        </div>

        {/* Bento Box Grid */}
        <StaggeredReveal staggerDelay={0.2}>
          <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <TiltCard key={project.id} intensity={0.1}>
                <div
                  className={`group card-3d hover-lift relative transform overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                    project.featured ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {/* Project Image */}
                    <ProjectImage
                      src={project.image}
                      alt={project.title}
                      className="absolute inset-0 h-full w-full"
                      fallbackGradient={project.gradient}
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute right-4 bottom-4 left-4">
                      <div className="rounded-2xl bg-white/90 p-4 backdrop-blur-sm">
                        <div className="mb-2 flex items-center justify-between">
                          <span className="text-xs font-medium tracking-wide text-gray-500 uppercase">
                            {project.category}
                          </span>
                          {project.featured && (
                            <div className="flex items-center gap-1">
                              <Star className="h-3 w-3 fill-current text-yellow-400" />
                              <span className="text-xs font-medium text-yellow-600">Featured</span>
                            </div>
                          )}
                        </div>
                        <h3 className="mb-2 font-bold text-gray-900">{project.title}</h3>
                        <p className="mb-3 text-sm text-gray-600">{project.description}</p>
                        <div className="flex flex-wrap gap-1">
                          {project.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30">
                        <ExternalLink className="h-4 w-4" />
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
                <button className="magnetic-button inline-flex transform items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <Github className="h-5 w-5" />
                  View All Projects
                  <ArrowRight className="h-5 w-5" />
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
    <section id="about" className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal direction="left" delay={0.2}>
            <div>
              <h2 className="gradient-text mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
                About Me
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                I&apos;m a passionate designer and developer with over 3 years of experience
                creating digital experiences that users love. I specialize in modern web
                technologies and have a keen eye for detail.
              </p>
              <p className="mb-8 text-lg text-gray-600">
                When I&apos;m not coding, you can find me exploring new design trends, contributing
                to open source projects, or sharing knowledge with the developer community.
              </p>

              <StaggeredReveal staggerDelay={0.1}>
                <div className="mb-8 grid grid-cols-2 gap-8">
                  <div className="hover-scale text-center">
                    <CounterAnimation end={50} className="mb-2 text-3xl font-bold text-blue-600" />
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="hover-scale text-center">
                    <CounterAnimation end={3} className="mb-2 text-3xl font-bold text-purple-600" />
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="hover-scale text-center">
                    <CounterAnimation
                      end={100}
                      className="mb-2 text-3xl font-bold text-green-600"
                    />
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="hover-scale text-center">
                    <CounterAnimation end={5} className="mb-2 text-3xl font-bold text-orange-600" />
                    <div className="text-sm text-gray-600">Design Awards</div>
                  </div>
                </div>
              </StaggeredReveal>

              <MagneticButton intensity={0.3}>
                <GlowEffect color="#6366f1" intensity={0.6}>
                  <button className="magnetic-button inline-flex transform items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                    <Mail className="h-5 w-5" />
                    Let&apos;s Work Together
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </GlowEffect>
              </MagneticButton>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.4}>
            <div className="relative">
              <TiltCard intensity={0.1}>
                <div className="card-3d hover-lift aspect-square overflow-hidden rounded-3xl shadow-2xl">
                  {/* Professional Portrait */}
                  <OptimizedImage
                    src="/media/about-portrait.jpg"
                    alt="Creative Professional Portrait"
                    width={600}
                    height={600}
                    className="h-full w-full"
                    fallbackGradient="bg-gradient-to-br from-blue-500 to-purple-600"
                    priority={true}
                  />
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="animate-bounce-gentle mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <Users className="h-12 w-12" />
                      </div>
                      <h3 className="mb-2 text-2xl font-bold">Creative Professional</h3>
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
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-24"
    >
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

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.2}>
          <h2 className="gradient-text mb-6 text-4xl font-bold text-white sm:text-5xl">
            Let&apos;s Create Something Amazing
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.4}>
          <p className="mx-auto mb-12 max-w-2xl text-xl text-blue-100">
            Ready to bring your ideas to life? I&apos;d love to hear about your project and discuss
            how we can work together.
          </p>
        </ScrollReveal>

        <StaggeredReveal staggerDelay={0.2}>
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            <div className="hover-lift glass-morphism rounded-2xl p-6 text-center">
              <div className="animate-bounce-gentle mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Email</h3>
              <p className="text-blue-100">hello@portfolio.com</p>
            </div>

            <div className="hover-lift glass-morphism rounded-2xl p-6 text-center">
              <div
                className="animate-bounce-gentle mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
                style={{ animationDelay: '0.5s' }}
              >
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Phone</h3>
              <p className="text-blue-100">+1 (555) 123-4567</p>
            </div>

            <div className="hover-lift glass-morphism rounded-2xl p-6 text-center">
              <div
                className="animate-bounce-gentle mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm"
                style={{ animationDelay: '1s' }}
              >
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">Location</h3>
              <p className="text-blue-100">San Francisco, CA</p>
            </div>
          </div>
        </StaggeredReveal>

        <ScrollReveal direction="up" delay={0.6}>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <MagneticButton intensity={0.3}>
              <GlowEffect color="#ffffff" intensity={0.4}>
                <button className="magnetic-button inline-flex transform items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <Mail className="h-5 w-5" />
                  Send Message
                  <ArrowRight className="h-5 w-5" />
                </button>
              </GlowEffect>
            </MagneticButton>

            <MagneticButton intensity={0.2}>
              <button className="hover-lift glass-morphism inline-flex items-center gap-3 rounded-2xl border-2 border-white/30 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10">
                <Github className="h-5 w-5" />
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
    <footer className="bg-gray-900 py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
              Portfolio
            </div>
            <p className="mb-6 max-w-md text-gray-400">
              Creating beautiful digital experiences that combine design and development for modern
              businesses.
            </p>
            <div className="flex space-x-4">
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-gray-700">
                <Github className="h-5 w-5" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-gray-700">
                <ExternalLink className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#work" className="text-gray-400 transition-colors hover:text-white">
                  Work
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 transition-colors hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 transition-colors hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Web Design</span>
              </li>
              <li>
                <span className="text-gray-400">Mobile Apps</span>
              </li>
              <li>
                <span className="text-gray-400">Branding</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
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
    <div className="bg-background min-h-screen">
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
    <div className="bg-background flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="border-primary mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2"></div>
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
