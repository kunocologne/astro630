import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Providers } from '@/providers'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import './globals.css'
import '@/styles/design-system.css'

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
  return (
    <html
      className={[GeistSans.variable, GeistMono.variable].filter(Boolean).join(' ')}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <Providers>
          <main id="main-content" role="main">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
