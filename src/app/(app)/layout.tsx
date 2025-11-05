import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/providers'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '6:30SHOP - Curated Merch & Culture',
  description:
    'Curated merch that embodies our creative vision and artistic energy. Wear the movement, share the culture, express your style.',
  icons: {
    icon: '/Logos/logo_icon_black.svg',
    shortcut: '/Logos/logo_icon_black.svg',
    apple: '/Logos/logo_icon_black.svg',
  },
  robots: {
    follow: true,
    index: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link href="/Logos/logo_icon_black.svg" rel="icon" type="image/svg+xml" />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
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
