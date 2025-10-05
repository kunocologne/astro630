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
      <header className="hidden md:block sticky top-0 z-50 pt-6" role="banner">
        <div className="max-w-7xl mx-auto px-6">
          <nav 
            className="flex items-center justify-between px-6 py-2 rounded-full bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg hover:border-border/70 transition-all duration-300" 
            role="navigation" 
            aria-label="Main navigation"
          >
            {/* Logo Section */}
            <div className="flex items-center gap-3">
              {/* Orange circle icon */}
              <div className="w-7 h-7 rounded-full bg-orange-500 flex-shrink-0" />
              
              {/* Brand name */}
              <Link href="/" className="flex items-center gap-1 group">
                <span className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  Store
                </span>
              </Link>
            </div>

            {/* Navigation Links */}
            <ul className="flex items-center gap-6 lg:gap-8 text-sm font-medium">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
                
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        'text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap px-3 py-2 rounded-lg hover:bg-muted/50',
                        isActive && 'text-foreground font-semibold bg-muted/30'
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
      <header className="md:hidden border-b border-border/50 bg-background" role="banner">
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
              <div className="w-6 h-6 rounded-full bg-orange-500 flex-shrink-0" />
              
              {/* Brand name */}
              <Link href="/" className="flex items-center gap-1">
                <span className="text-base font-semibold text-foreground">
                  Store
                </span>
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
