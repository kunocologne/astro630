import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  robots: {
    follow: true,
    index: true,
  },
  title: {
    default: 'JUNO - Master Template System',
    template: `%s | JUNO`,
  },
  description: 'Generate professional websites with beautiful animations and modern design',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  // This root layout must not render html/body tags
  // Each route group (app) and (payload) handles its own HTML structure
  return children
}
