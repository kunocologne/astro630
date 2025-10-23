import Link from 'next/link'

export default function AgencyPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-500 to-cyan-600">
      <div className="text-center text-white">
        <h1 className="mb-4 text-6xl font-bold">Agency Corporate</h1>
        <p className="mb-8 text-xl">Professional, business-oriented design</p>
        <Link href="/" className="rounded-lg bg-white px-6 py-3 font-semibold text-blue-600">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
