'use client'
import { Cart } from '@/components/Cart'
import { OpenCartButton } from '@/components/Cart/OpenCart'
import Link from 'next/link'
import { Suspense } from 'react'

import type { Header } from 'src/payload-types'
import { MobileMenu } from './MobileMenu'

import { cn } from '@/utilities/cn'
import { usePathname } from 'next/navigation'

type Props = {
  header: Header
}

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Shop', href: '/shop' },
]

export function HeaderClient({ header }: Props) {
  const menu = header.navItems || []
  const pathname = usePathname()

  return (
    <>
      {/* Desktop Header - Sticky with floating design */}
      <header className="sticky top-0 z-50 hidden pt-6 md:block" role="banner">
        <div className="mx-auto max-w-7xl px-6">
          <nav
            className="bg-background/80 border-border/50 hover:border-border/70 flex items-center justify-between rounded-full border px-6 py-2 shadow-lg backdrop-blur-xl transition-all duration-300"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              {/* Orange circle icon */}
              <div className="h-7 w-7 flex-shrink-0 rounded-full bg-orange-500" />

              {/* Brand name */}
              <Link href="/" className="group flex items-center gap-1">
                <span className="text-foreground group-hover:text-primary text-lg font-semibold transition-colors">
                  Store
                </span>
              </Link>
            </div>

            {/* Navigation Links */}
            <ul className="flex items-center gap-6 text-sm font-medium lg:gap-8">
              {navigationItems.map((item) => {
                const isActive =
                  pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg px-3 py-2 whitespace-nowrap transition-colors',
                        isActive && 'text-foreground bg-muted/30 font-semibold',
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Cart */}
            <div className="flex items-center">
              <Suspense fallback={<OpenCartButton />}>
                <Cart />
              </Suspense>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Header - Simple, non-sticky */}
      <header className="border-border/50 bg-background border-b md:hidden" role="banner">
        <div className="px-4 py-3">
          <nav
            className="flex items-center justify-between"
            role="navigation"
            aria-label="Mobile navigation"
          >
            {/* Mobile Menu Button */}
            <div className="flex items-center">
              <Suspense fallback={null}>
                <MobileMenu menu={menu} />
              </Suspense>
            </div>

            {/* Logo - Centered */}
            <div className="flex items-center gap-2">
              {/* Orange circle icon */}
              <div className="h-6 w-6 flex-shrink-0 rounded-full bg-orange-500" />

              {/* Brand name */}
              <Link href="/" className="flex items-center gap-1">
                <span className="text-foreground text-base font-semibold">Store</span>
              </Link>
            </div>

            {/* Cart */}
            <div className="flex items-center">
              <Suspense fallback={<OpenCartButton />}>
                <Cart />
              </Suspense>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
