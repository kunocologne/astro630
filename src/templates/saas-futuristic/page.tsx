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
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <HeroImage
            src="/media/saas-hero-analytics.jpg"
            alt="Modern Analytics Dashboard"
            className="w-full h-full"
            fallbackGradient="bg-gradient-to-br from-blue-500 to-cyan-500"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-cyan-600/20" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-white mb-6 drop-shadow-lg">
            DataFlow Analytics
          </h1>
          <p className="text-xl text-blue-100 mb-8 drop-shadow-md">
            Transform your data into actionable insights with our AI-powered analytics platform
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed for modern businesses
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Lightning Fast</h3>
                <p className="text-gray-600">Optimized performance with sub-second response times</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level encryption and security protocols</p>
              </div>
            </div>
            
            <div className="group relative overflow-hidden p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                  <span className="text-2xl">📈</span>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Infinitely Scalable</h3>
                <p className="text-gray-600">Grows seamlessly with your business needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gray-900 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <OptimizedImage
            src="/media/saas-cta-team.jpg"
            alt="Professional Tech Team"
            width={1920}
            height={600}
            className="w-full h-full"
            fallbackGradient="bg-gradient-to-br from-blue-900 to-cyan-900"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-cyan-900/80" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 drop-shadow-lg">Ready to Get Started?</h2>
          <p className="text-lg mb-8 text-blue-100 drop-shadow-md">Join thousands of satisfied customers</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  )
}