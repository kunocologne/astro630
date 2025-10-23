import { HeroImage, OptimizedImage } from '@/components/ui/optimized-image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '{{COMPANY_NAME}} - {{TAGLINE}}',
  description: '{{TAGLINE}}',
  keywords: ['saas', 'software', 'technology', 'innovation'],
  authors: [{ name: '{{COMPANY_NAME}}' }],
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <HeroImage
            src="/media/saas-hero-analytics.jpg"
            alt="Modern Analytics Dashboard"
            className="h-full w-full"
            fallbackGradient="bg-gradient-to-br from-blue-500 to-cyan-500"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-6xl font-bold text-white drop-shadow-lg">DataFlow Analytics</h1>
          <p className="mb-8 text-xl text-blue-100 drop-shadow-md">
            Transform your data into actionable insights with our AI-powered analytics platform
          </p>
          <button className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-blue-700">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-8 text-4xl font-bold text-gray-900">Features</h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Powerful features designed for modern businesses
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Lightning Fast</h3>
                <p className="text-gray-600">
                  Optimized performance with sub-second response times
                </p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level encryption and security protocols</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
              <div className="relative z-10">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900">Infinitely Scalable</h3>
                <p className="text-gray-600">Grows seamlessly with your business needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gray-900 px-4 py-20 text-white">
        {/* Background Image */}
        <div className="absolute inset-0">
          <OptimizedImage
            src="/media/saas-cta-team.jpg"
            alt="Professional Tech Team"
            width={1920}
            height={600}
            className="h-full w-full"
            fallbackGradient="bg-gradient-to-br from-blue-900 to-cyan-900"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-cyan-900/80" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-4xl font-bold drop-shadow-lg">Ready to Get Started?</h2>
          <p className="mb-8 text-lg text-blue-100 drop-shadow-md">
            Join thousands of satisfied customers
          </p>
          <button className="rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-colors hover:bg-blue-700">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  )
}
