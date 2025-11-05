'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronUp } from 'lucide-react'
import { CartModal } from '@/features/cart/CartModal'
import { useCartItemCount } from '@/hooks/api/useCart'

interface PremiumNavbarProps {
  companyName: string
}

export function PremiumNavbar({ companyName }: PremiumNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const cartItemCount = useCartItemCount()

  const navigationItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'shop', label: 'Shop', href: '#shop' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ]

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
      {/* Premium Glassmorphism Navbar */}
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'border-b border-gray-200/20 bg-white/80 shadow-lg backdrop-blur-xl dark:border-slate-700/20 dark:bg-slate-900/80'
            : 'bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="flex h-20 items-center justify-between">
            {/* Logo with gradient */}
            <Link href="/" className="group/logo flex items-center space-x-3">
              <div className="relative">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 shadow-lg transition-transform duration-300 group-hover/logo:scale-110">
                  <span className="text-sm font-black text-white">
                    {companyName.charAt(0).toUpperCase()}
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 opacity-75 blur-md transition-opacity group-hover/logo:opacity-100"></div>
                </div>
              </div>
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-xl font-black text-transparent transition-all duration-300 group-hover/logo:from-orange-500 group-hover/logo:to-pink-500 dark:from-white dark:to-gray-300">
                {companyName}
              </span>
            </Link>

            {/* Desktop Navigation - Premium styling */}
            <nav className="hidden items-center space-x-1 md:flex">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400'
                      : 'text-gray-700 hover:bg-gray-100/50 hover:text-orange-600 dark:text-gray-300 dark:hover:bg-gray-800/50 dark:hover:text-orange-400'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 transform animate-pulse rounded-full bg-orange-500" />
                  )}
                </button>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Shopping Cart Button - Premium Styled */}
              <CartModal />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 transition-colors hover:bg-gray-200 md:hidden dark:bg-gray-800 dark:hover:bg-gray-700"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu - Premium Card */}
      {isMobileMenuOpen && (
        <div className="fixed inset-x-4 top-24 z-40 md:hidden">
          <div className="overflow-hidden rounded-2xl border border-gray-200/20 bg-white/95 shadow-2xl backdrop-blur-xl dark:border-slate-700/20 dark:bg-slate-900/95">
            <div className="space-y-1 p-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-600 dark:text-orange-400'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="border-t border-gray-200 pt-3 dark:border-gray-700">
                <CartModal />
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
          className="fixed bottom-8 right-8 z-40 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 p-4 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:from-orange-600 hover:to-pink-600 hover:shadow-2xl"
          aria-label="Back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </>
  )
}
