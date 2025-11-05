'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

interface PremiumFooterProps {
  companyName: string
}

export function PremiumFooter({ companyName }: PremiumFooterProps) {
  const currentYear = new Date().getFullYear()
  const companyInitial = companyName.charAt(0).toUpperCase()

  return (
    <footer className="relative border-t border-gray-200/20 bg-gradient-to-b from-white/95 to-white backdrop-blur-xl dark:border-slate-700/20 dark:from-slate-900/95 dark:to-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-12">
        {/* Main Footer Content - 4 Column Grid */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="group/logo flex items-center space-x-3">
              <div className="relative">
                <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 shadow-lg transition-transform duration-300 group-hover/logo:scale-110">
                  <span className="text-sm font-black text-white">{companyInitial}</span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 opacity-75 blur-md transition-opacity group-hover/logo:opacity-100"></div>
                </div>
              </div>
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-xl font-black text-transparent dark:from-white dark:to-gray-300">
                {companyName}
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Premium solutions for modern businesses. Crafting exceptional digital experiences with
              cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="rounded-lg bg-gray-100 p-2 text-gray-600 transition-all duration-300 hover:bg-orange-50 hover:text-orange-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-orange-900/20 dark:hover:text-orange-400"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="rounded-lg bg-gray-100 p-2 text-gray-600 transition-all duration-300 hover:bg-orange-50 hover:text-orange-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-orange-900/20 dark:hover:text-orange-400"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="rounded-lg bg-gray-100 p-2 text-gray-600 transition-all duration-300 hover:bg-orange-50 hover:text-orange-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-orange-900/20 dark:hover:text-orange-400"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="rounded-lg bg-gray-100 p-2 text-gray-600 transition-all duration-300 hover:bg-orange-50 hover:text-orange-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-orange-900/20 dark:hover:text-orange-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#home"
                  className="text-gray-600 transition-colors duration-300 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-gray-600 transition-colors duration-300 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-gray-600 transition-colors duration-300 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#shop"
                  className="text-gray-600 transition-colors duration-300 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-gray-600 transition-colors duration-300 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/help"
                  className="text-gray-600 transition-colors duration-300 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-gray-600 transition-colors duration-300 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-gray-600 transition-colors duration-300 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 transition-colors duration-300 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  hello@{companyName.toLowerCase().replace(/\s+/g, '')}.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="mt-0.5 h-4 w-4 text-orange-600 dark:text-orange-400" />
                <span className="text-gray-600 dark:text-gray-400">
                  123 Business St
                  <br />
                  City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200/20 pt-8 dark:border-slate-700/20">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} {companyName}. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-gray-600 transition-colors duration-300 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 transition-colors duration-300 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-gray-600 transition-colors duration-300 hover:text-orange-600 dark:text-gray-400 dark:hover:text-orange-400"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
