'use client'
import { CMSLink } from '@/components/Link'
import { Cart } from '@/components/Cart'
import { OpenCartButton } from '@/components/Cart/OpenCart'
import Link from 'next/link'
import React, { Suspense } from 'react'

import { MobileMenu } from './MobileMenu'
import type { Header } from 'src/payload-types'

import { LogoIcon } from '@/components/icons/logo'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/cn'

type Props = {
  header: Header
}

export function HeaderClient({ header }: Props) {
  const menu = header.navItems || []
  const pathname = usePathname()

  return (
    <header className="relative z-20 border-b" role="banner">
      <nav className="flex items-center md:items-end justify-between container pt-2" role="navigation" aria-label="Main navigation">
        <div className="block flex-none md:hidden">
          <Suspense fallback={null}>
            <MobileMenu menu={menu} />
          </Suspense>
        </div>
        <div className="flex w-full items-end justify-between">
          <div className="flex w-full items-end gap-6 md:w-1/3">
            <Link className="flex w-full items-center justify-center pt-4 pb-4 md:w-auto" href="/" aria-label="Home">
              <LogoIcon className="w-6 h-auto" aria-hidden="true" />
            </Link>
            {menu.length ? (
              <ul className="hidden gap-4 text-sm md:flex md:items-center">
                {menu.map((item) => (
                  <li key={item.id}>
                    <CMSLink
                      {...item.link}
                      size={'clear'}
                      className={cn('relative navLink', {
                        active:
                          item.link.url && item.link.url !== '/'
                            ? pathname.includes(item.link.url)
                            : false,
                      })}
                      appearance="nav"
                      aria-current={
                        item.link.url && item.link.url !== '/' && pathname.includes(item.link.url)
                          ? 'page'
                          : undefined
                      }
                    />
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <div className="flex justify-end md:w-1/3 gap-4" role="region" aria-label="Shopping cart">
            <Suspense fallback={<OpenCartButton />}>
              <Cart />
            </Suspense>
          </div>
        </div>
      </nav>
    </header>
  )
}
