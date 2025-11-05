import Link from 'next/link'
import { Cart } from '@/features/cart'
import { ThemeToggle } from '@/components/ThemeToggle'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-[#FF6B35]">
              SPECTRUM
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <Link
              href="#hero"
              className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-[#FF6B35]"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-[#FF6B35]"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-[#FF6B35]"
            >
              Services
            </Link>
            <Link
              href="#shop"
              className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-[#FF6B35]"
            >
              Shop
            </Link>
            <Link
              href="#connect"
              className="text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-[#FF6B35]"
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Cart />
          </div>
        </div>
      </div>
    </header>
  )
}
