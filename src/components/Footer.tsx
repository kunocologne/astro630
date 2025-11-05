import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import React from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 to-purple-600">
                <span className="text-sm font-bold text-white">S</span>
              </div>
              <span className="text-xl font-bold">SPECTRUM</span>
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              Premium e-commerce platform built with Next.js and modern web technologies. Crafting
              exceptional digital experiences.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold">Support</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/help"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/shipping"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link
                  href="/returns"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Returns
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">hello@juno.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="mt-0.5 h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  123 Business St
                  <br />
                  City, State 12345
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} JUNO. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-muted-foreground transition-colors hover:text-primary"
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
