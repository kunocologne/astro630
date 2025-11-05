import Link from 'next/link'
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="group flex items-center space-x-2">
              <span className="text-xl font-bold text-foreground">SPECTRUM</span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Professional templates for vibe coders. Build with the vibes, ship with confidence.
            </p>
            <div className="flex space-x-3">
              <Link
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-[#FF6B35]"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-white/60 transition-colors group-hover:text-[#FF6B35]" />
              </Link>
              <Link
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-[#FF6B35]"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-white/60 transition-colors group-hover:text-[#FF6B35]" />
              </Link>
              <Link
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-300 hover:border-[#FF6B35]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-white/60 transition-colors group-hover:text-[#FF6B35]" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#hero"
                  className="text-muted-foreground transition-colors hover:text-[#FF6B35]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground transition-colors hover:text-[#FF6B35]"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground transition-colors hover:text-[#FF6B35]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#shop"
                  className="text-muted-foreground transition-colors hover:text-[#FF6B35]"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="#connect"
                  className="text-muted-foreground transition-colors hover:text-[#FF6B35]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/docs"
                  className="text-muted-foreground transition-colors hover:text-[#FF6B35]"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="/templates"
                  className="text-muted-foreground transition-colors hover:text-[#FF6B35]"
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-muted-foreground transition-colors hover:text-[#FF6B35]"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-muted-foreground transition-colors hover:text-[#FF6B35]"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-colors hover:border-[#FF6B35]">
                <Mail className="h-4 w-4 flex-shrink-0 text-[#FF6B35]" />
                <span className="text-white/70">hello@spectrum.dev</span>
              </div>
              <div className="flex items-center space-x-3 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-colors hover:border-[#FF6B35]">
                <Phone className="h-4 w-4 flex-shrink-0 text-[#FF6B35]" />
                <span className="text-white/70">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3 rounded-lg border border-white/10 bg-white/5 p-3 backdrop-blur-sm transition-colors hover:border-[#FF6B35]">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#FF6B35]" />
                <span className="text-white/70">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              © {currentYear} SPECTRUM. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link
                href="/privacy"
                className="text-muted-foreground transition-colors hover:text-[#FF6B35]"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground transition-colors hover:text-[#FF6B35]"
              >
                Terms
              </Link>
              <Link
                href="/cookies"
                className="text-muted-foreground transition-colors hover:text-[#FF6B35]"
              >
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
