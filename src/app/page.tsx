import { getActiveTemplateConfig } from '@/config/active-template'
import { loadTemplatePage } from '@/lib/template-loader'
import { ArrowRight, CheckCircle, Play, Sparkles, Star, Zap } from 'lucide-react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'JUNO - Master Template System',
  description: 'Generate professional websites with beautiful animations and modern design',
}

/**
 * Master-Level Homepage
 * 
 * This homepage follows Awwwards standards with:
 * - Award-level aesthetics and typography
 * - Smooth 60fps animations
 * - Perfect spacing and visual hierarchy
 * - Compelling value proposition
 * - Social proof and credibility
 */

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-40 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-indigo-500/10 rounded-full blur-xl animate-pulse delay-2000" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4" />
          <span>New: AI-Powered Template Generation</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Build
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {' '}Master-Level{' '}
          </span>
          Websites
          <br />
          in Minutes
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
          Professional templates with award-winning design, smooth animations, and perfect performance. 
          <span className="text-gray-900 font-semibold"> No coding required.</span>
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Link 
            href="/templates"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Zap className="w-5 h-5" />
            Start Building
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <button className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-2xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>
        
        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1,2,3,4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 border-2 border-white" />
              ))}
            </div>
            <span>10,000+ developers trust JUNO</span>
          </div>
          <div className="flex items-center gap-1">
            {[1,2,3,4,5].map((i) => (
              <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2">4.9/5 rating</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized for 90+ Lighthouse scores with instant loading"
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Award-Winning Design",
      description: "Awwwards-level aesthetics with perfect typography and spacing"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Zero Configuration",
      description: "Deploy in minutes with automatic optimization and best practices"
    }
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Choose JUNO?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built by senior creative engineers for maximum performance, beauty, and reliability
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-3xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-white to-gray-50"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TemplatesPreview() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Master-Level Templates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each template is crafted with precision, following the highest design standards
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Portfolio Template */}
          <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div className="aspect-[4/3] bg-gradient-to-br from-blue-500 to-purple-600 relative">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Portfolio Bold</h3>
                  <p className="text-sm text-gray-600">Professional portfolio with stunning animations</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-green-600">Available</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Framer Motion</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">Responsive</span>
              </div>
              <Link 
                href="/portfolio"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                View Template
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          {/* SaaS Template */}
          <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div className="aspect-[4/3] bg-gradient-to-br from-green-500 to-blue-600 relative">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                  <h3 className="font-bold text-gray-900 mb-2">SaaS Futuristic</h3>
                  <p className="text-sm text-gray-600">Modern SaaS with cutting-edge design</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span className="text-sm font-medium text-yellow-600">Coming Soon</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">Analytics</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">Modern</span>
              </div>
              <button className="inline-flex items-center gap-2 text-gray-500 font-semibold cursor-not-allowed">
                Preview Soon
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Agency Template */}
          <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105">
            <div className="aspect-[4/3] bg-gradient-to-br from-orange-500 to-red-600 relative">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                  <h3 className="font-bold text-gray-900 mb-2">Agency Corporate</h3>
                  <p className="text-sm text-gray-600">Professional agency with corporate branding</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                <span className="text-sm font-medium text-yellow-600">Coming Soon</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded-full">Corporate</span>
                <span className="px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">Team</span>
              </div>
              <button className="inline-flex items-center gap-2 text-gray-500 font-semibold cursor-not-allowed">
                Preview Soon
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/templates"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Sparkles className="w-5 h-5" />
            Explore All Templates
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          Join thousands of developers who are already building master-level websites with JUNO
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/templates"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <Zap className="w-5 h-5" />
            Get Started Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          
          <button className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300">
            <Play className="w-5 h-5" />
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  )
}

/**
 * Dynamic Template Renderer
 * 
 * This component dynamically loads the appropriate template based on the active template configuration.
 * It prevents unnecessary loading of template assets before a template is selected.
 */
async function DynamicTemplateRenderer() {
  try {
    const templateConfig = getActiveTemplateConfig()

    // If no template is selected, show the master-level homepage
    if (templateConfig.template === 'none') {
      return (
        <div className="min-h-screen">
          <HeroSection />
          <FeaturesSection />
          <TemplatesPreview />
          <CTASection />
        </div>
      )
    }

    // Load the active template page dynamically
    const templateModule = await loadTemplatePage(templateConfig.template)
    const TemplatePage = templateModule.default

    return <TemplatePage />
  } catch (error) {
    console.error('Failed to load template:', error)

    // Fallback to master-level homepage
    return (
      <div className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <TemplatesPreview />
        <CTASection />
      </div>
    )
  }
}

/**
 * Loading fallback component
 */
function TemplateLoadingFallback() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading template...</p>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <Suspense fallback={<TemplateLoadingFallback />}>
      <DynamicTemplateRenderer />
    </Suspense>
  )
}