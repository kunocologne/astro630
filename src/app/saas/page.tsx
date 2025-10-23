import Link from 'next/link'

export default function SaasPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-500 to-teal-600">
      <div className="text-center text-white">
        <h1 className="mb-4 text-6xl font-bold">SaaS Futuristic</h1>
        <p className="mb-8 text-xl">Clean, tech-focused layout</p>
        <Link href="/" className="rounded-lg bg-white px-6 py-3 font-semibold text-emerald-600">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
