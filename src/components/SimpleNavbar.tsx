'use client'

import { BarChart3 } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useCurrentUser } from '@/hooks/api/useAuth'
import { CartModal } from '@/features/cart/CartModal'

export function SimpleNavbar() {
  const { data: user } = useCurrentUser()
  const isAdmin = user?.role === 'admin'

  return (
    <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-12">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Image
            src="/Logos/Logo__icon_white.svg"
            alt="6:30"
            width={40}
            height={40}
            className="h-8 w-8"
            priority
          />
        </Link>
        <div className="flex items-center gap-2">
          {isAdmin && (
            <Link
              href="/dashboard"
              className="rounded-lg p-2 transition-colors hover:bg-white/10"
              aria-label="Dashboard"
              title="Sales Dashboard"
            >
              <BarChart3 className="h-6 w-6 text-white" />
            </Link>
          )}
          <CartModal />
        </div>
      </div>
    </header>
  )
}
