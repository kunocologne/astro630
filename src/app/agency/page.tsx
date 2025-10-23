import Link from 'next/link'

export default function AgencyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Agency Corporate</h1>
        <p className="text-xl mb-8">Professional, business-oriented design</p>
        <Link href="/" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold">
          Back to Home
        </Link>
      </div>
    </div>
  )
}