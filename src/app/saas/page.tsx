import Link from 'next/link'

export default function SaasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">SaaS Futuristic</h1>
        <p className="text-xl mb-8">Clean, tech-focused layout</p>
        <Link href="/" className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold">
          Back to Home
        </Link>
      </div>
    </div>
  )
}