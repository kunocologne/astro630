'use client'

import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'
import { ShoppingCart, Menu, X, ChevronUp } from 'lucide-react'
import { cn } from '@/lib/utils'

// Import cart functionality
import { useCartItemCount } from '@/hooks/api/useCart'
import { CartModal } from '@/features/cart/CartModal'

const navigationItems = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'shop', label: 'Shop', href: '#shop' },
  { id: 'connect', label: 'Connect', href: '#connect' },
]

export function Header() {
  const [_isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  const cartItemCount = useCartItemCount()

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)
      setShowBackToTop(scrollY > 300)

      // Update active section based on scroll position
      const sections = navigationItems.map((item) => item.id)
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
    setIsMobileMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Main Header - Ultra Subtle */}
      <header className="fixed left-0 right-0 top-0 z-50 py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="relative overflow-hidden bg-transparent backdrop-blur-sm">
            <div className="relative flex items-center justify-between py-2">
              {/* Logo */}
              <Link href="/" className="group/logo flex items-center space-x-2">
                <div className="relative">
                  <div className="relative flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 opacity-70 transition-opacity group-hover/logo:opacity-100">
                    <span className="text-xs font-bold text-white">S</span>
                  </div>
                </div>
                <span className="text-sm font-bold tracking-wider text-white/60 transition-colors group-hover/logo:text-white/90">
                  SPECTRUM
                </span>
              </Link>

              {/* Desktop Navigation - Ultra Subtle Links */}
              <nav className="hidden items-center space-x-6 md:flex">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.href)}
                    className={cn(
                      'relative text-xs font-medium transition-all duration-300',
                      activeSection === item.id
                        ? 'text-white/90'
                        : 'text-white/40 hover:text-white/70',
                    )}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-2">
                {/* Cart with Badge */}
                <CartModal />

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 transition-all duration-300 md:hidden"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-4 w-4 text-white/60" />
                  ) : (
                    <Menu className="h-4 w-4 text-white/60" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Floating Card */}
      {isMobileMenuOpen && (
        <div className="fixed left-4 right-4 top-20 z-40 md:hidden">
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
            <div className="space-y-2 p-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'block w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-300',
                    activeSection === item.id
                      ? 'bg-white/10 text-white'
                      : 'text-white/60 hover:bg-white/5 hover:text-white/90',
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-white/10 pt-3">
                <button className="flex w-full items-center justify-center space-x-2 rounded-xl bg-white/5 px-4 py-3 text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white">
                  <ShoppingCart className="h-4 w-4" />
                  <span className="text-sm font-medium">Cart ({cartItemCount})</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setIsMobileMenuOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close mobile menu"
        />
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 p-3 text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}
