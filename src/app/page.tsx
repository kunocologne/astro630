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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 h-20 w-20 animate-pulse rounded-full bg-blue-500/10 blur-xl" />
      <div className="absolute top-40 right-20 h-32 w-32 animate-pulse rounded-full bg-purple-500/10 blur-xl delay-1000" />
      <div className="absolute bottom-20 left-1/4 h-24 w-24 animate-pulse rounded-full bg-indigo-500/10 blur-xl delay-2000" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="animate-fade-in mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
          <Sparkles className="h-4 w-4" />
          <span>New: AI-Powered Template Generation</span>
        </div>

        {/* Main Headline */}
        <h1 className="mb-6 text-5xl leading-tight font-bold text-gray-900 sm:text-6xl lg:text-7xl">
          Build
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            {' '}
            Master-Level{' '}
          </span>
          Websites
          <br />
          in Minutes
        </h1>

        {/* Subheadline */}
        <p className="mx-auto mb-12 max-w-4xl text-xl leading-relaxed text-gray-600 sm:text-2xl">
          Professional templates with award-winning design, smooth animations, and perfect
          performance.
          <span className="font-semibold text-gray-900"> No coding required.</span>
        </p>

        {/* CTA Buttons */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/templates"
            className="group relative inline-flex transform items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Zap className="h-5 w-5" />
            Start Building
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>

          <button className="group inline-flex items-center gap-3 rounded-2xl border-2 border-gray-300 px-8 py-4 font-semibold text-gray-700 transition-all duration-300 hover:border-gray-400 hover:bg-gray-50">
            <Play className="h-5 w-5" />
            Watch Demo
          </button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col items-center justify-center gap-8 text-sm text-gray-500 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white bg-gradient-to-r from-blue-400 to-purple-400"
                />
              ))}
            </div>
            <span>10,000+ developers trust JUNO</span>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-current text-yellow-400" />
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
      icon: <Zap className="h-6 w-6" />,
      title: 'Lightning Fast',
      description: 'Optimized for 90+ Lighthouse scores with instant loading',
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: 'Award-Winning Design',
      description: 'Awwwards-level aesthetics with perfect typography and spacing',
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: 'Zero Configuration',
      description: 'Deploy in minutes with automatic optimization and best practices',
    },
  ]

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">Why Choose JUNO?</h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Built by senior creative engineers for maximum performance, beauty, and reliability
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-8 transition-all duration-300 hover:border-blue-300 hover:shadow-lg"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="leading-relaxed text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TemplatesPreview() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl">
            Master-Level Templates
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            Each template is crafted with precision, following the highest design standards
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Portfolio Template */}
          <div className="group relative transform overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-blue-500 to-purple-600">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute right-4 bottom-4 left-4">
                <div className="rounded-2xl bg-white/90 p-4 backdrop-blur-sm">
                  <h3 className="mb-2 font-bold text-gray-900">Portfolio Bold</h3>
                  <p className="text-sm text-gray-600">
                    Professional portfolio with stunning animations
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm font-medium text-green-600">Available</span>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  Framer Motion
                </span>
                <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700">
                  Responsive
                </span>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 font-semibold text-blue-600 transition-colors hover:text-blue-700"
              >
                View Template
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* SaaS Template */}
          <div className="group relative transform overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-green-500 to-blue-600">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute right-4 bottom-4 left-4">
                <div className="rounded-2xl bg-white/90 p-4 backdrop-blur-sm">
                  <h3 className="mb-2 font-bold text-gray-900">SaaS Futuristic</h3>
                  <p className="text-sm text-gray-600">Modern SaaS with cutting-edge design</p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <span className="text-sm font-medium text-yellow-600">Coming Soon</span>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                  Analytics
                </span>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                  Modern
                </span>
              </div>
              <button className="inline-flex cursor-not-allowed items-center gap-2 font-semibold text-gray-500">
                Preview Soon
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Agency Template */}
          <div className="group relative transform overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="relative aspect-[4/3] bg-gradient-to-br from-orange-500 to-red-600">
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute right-4 bottom-4 left-4">
                <div className="rounded-2xl bg-white/90 p-4 backdrop-blur-sm">
                  <h3 className="mb-2 font-bold text-gray-900">Agency Corporate</h3>
                  <p className="text-sm text-gray-600">
                    Professional agency with corporate branding
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                <span className="text-sm font-medium text-yellow-600">Coming Soon</span>
              </div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-700">
                  Corporate
                </span>
                <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-medium text-red-700">
                  Team
                </span>
              </div>
              <button className="inline-flex cursor-not-allowed items-center gap-2 font-semibold text-gray-500">
                Preview Soon
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/templates"
            className="inline-flex transform items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Sparkles className="h-5 w-5" />
            Explore All Templates
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 py-24">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
          Ready to Build Something Amazing?
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-xl text-blue-100">
          Join thousands of developers who are already building master-level websites with JUNO
        </p>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/templates"
            className="inline-flex transform items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            <Zap className="h-5 w-5" />
            Get Started Free
            <ArrowRight className="h-5 w-5" />
          </Link>

          <button className="inline-flex items-center gap-3 rounded-2xl border-2 border-white/30 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10">
            <Play className="h-5 w-5" />
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
    <div className="bg-background flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="border-primary mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-b-2"></div>
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
