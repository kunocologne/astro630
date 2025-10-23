'use client'

import type { Header } from '@/payload-types'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useAuth } from '@/providers/Auth'
import { cn } from '@/utilities/cn'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface Props {
  menu: Header['navItems']
}

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Shop', href: '/shop' },
]

export function MobileMenu({ menu }: Props) {
  const { user } = useAuth()

  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)

  const closeMobileMenu = () => setIsOpen(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname, searchParams])

  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger className="text-foreground hover:bg-muted/50 flex h-9 w-9 items-center justify-center rounded-lg transition-colors">
        <MenuIcon className="h-5 w-5" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>

      <SheetContent side="left" className="bg-background/95 border-border/50 px-6 backdrop-blur-xl">
        <SheetHeader className="px-0 pt-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 flex-shrink-0 rounded-full bg-orange-500" />
            <SheetTitle className="text-foreground text-xl font-semibold">Store</SheetTitle>
          </div>
          <SheetDescription className="text-muted-foreground">
            Navigate through our store
          </SheetDescription>
        </SheetHeader>

        <div className="py-6">
          <ul className="flex w-full flex-col gap-2">
            {navigationItems.map((item) => {
              const isActive =
                pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'block rounded-xl px-4 py-3 text-base font-medium transition-all duration-200',
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Contact Button */}
          <div className="border-border/50 mt-8 border-t pt-6">
            <Button asChild className="w-full" variant="outline">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>

        {user ? (
          <div className="border-border/50 mt-8 border-t pt-6">
            <h2 className="text-foreground mb-4 text-lg font-semibold">My Account</h2>
            <ul className="flex flex-col gap-2">
              <li>
                <Link
                  href="/orders"
                  className="text-muted-foreground hover:text-foreground hover:bg-muted/50 block rounded-lg px-4 py-2 transition-colors"
                >
                  Orders
                </Link>
              </li>
              <li>
                <Link
                  href="/account/addresses"
                  className="text-muted-foreground hover:text-foreground hover:bg-muted/50 block rounded-lg px-4 py-2 transition-colors"
                >
                  Addresses
                </Link>
              </li>
              <li>
                <Link
                  href="/account"
                  className="text-muted-foreground hover:text-foreground hover:bg-muted/50 block rounded-lg px-4 py-2 transition-colors"
                >
                  Manage Account
                </Link>
              </li>
              <li className="mt-4">
                <Button asChild variant="outline" className="w-full">
                  <Link href="/logout">Log out</Link>
                </Button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="border-border/50 mt-8 border-t pt-6">
            <h2 className="text-foreground mb-4 text-lg font-semibold">My Account</h2>
            <div className="space-y-3">
              <Button asChild variant="outline" className="w-full">
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/create-account">Create Account</Link>
              </Button>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
