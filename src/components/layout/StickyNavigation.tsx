'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { ChevronUp, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavigationItem {
  id: string
  label: string
  href: string
}

const navigationItems: NavigationItem[] = [
  { id: 'hero', label: 'Home', href: '#hero' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'shop', label: 'Shop', href: '#shop' },
  { id: 'contact', label: 'Contact', href: '#contact' },
  { id: 'calendar', label: 'Events', href: '#calendar' },
]

export function StickyNavigation() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

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
      {/* Sticky Navigation */}
      <nav
        className={cn(
          'fixed left-0 right-0 top-0 z-50 transition-all duration-300',
          isScrolled
            ? 'border-b border-slate-200/20 bg-white/95 shadow-lg backdrop-blur-md dark:border-slate-700/20 dark:bg-slate-900/95'
            : 'bg-transparent',
        )}
      >
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600">
                <span className="text-sm font-bold text-white">S</span>
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">SPECTRUM</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-8 md:flex">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'relative text-sm font-medium transition-colors duration-200',
                    activeSection === item.id
                      ? 'text-blue-600 dark:text-blue-400'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white',
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                  )}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden items-center space-x-4 md:flex">
              <Button
                variant="outline"
                size="sm"
                className="border-slate-300 dark:border-slate-600"
              >
                Login
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 transition-colors hover:bg-slate-100 md:hidden dark:hover:bg-slate-800"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 text-slate-600 dark:text-slate-300" />
              ) : (
                <Menu className="h-5 w-5 text-slate-600 dark:text-slate-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="border-t border-slate-200/20 bg-white/95 backdrop-blur-md md:hidden dark:border-slate-700/20 dark:bg-slate-900/95">
            <div className="space-y-4 px-6 py-4">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'block w-full rounded-lg px-3 py-2 text-left transition-colors duration-200',
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                      : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
                  )}
                >
                  {item.label}
                </button>
              ))}
              <div className="space-y-2 border-t border-slate-200/20 pt-4 dark:border-slate-700/20">
                <Button variant="outline" size="sm" className="w-full">
                  Login
                </Button>
                <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

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
