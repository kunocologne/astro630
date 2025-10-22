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
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            {{COMPANY_NAME}}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {{TAGLINE}}
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Fast</h3>
              <p className="text-gray-600">Lightning-fast performance</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Secure</h3>
              <p className="text-gray-600">Enterprise-grade security</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Scalable</h3>
              <p className="text-gray-600">Grows with your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Join thousands of satisfied customers</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  )
}