import type { Footer } from '@/payload-types'

import { FooterMenu } from '@/components/Footer/menu'
import { LogoIcon } from '@/components/icons/logo'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import { Suspense } from 'react'

const { COMPANY_NAME, SITE_NAME } = process.env

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 1)()
  const menu = footer.navItems || []
  const currentYear = new Date().getFullYear()
  const copyrightDate = 2023 + (currentYear > 2023 ? `-${currentYear}` : '')
  const skeleton = 'w-full h-6 animate-pulse rounded bg-neutral-200 dark:bg-neutral-700'

  const copyrightName = COMPANY_NAME || SITE_NAME || ''

  return (
    <footer className="glass border-border/50 mt-24 border-t" role="contentinfo">
      <div className="container">
        {/* Main Footer Content */}
        <div className="flex w-full flex-col gap-12 py-16 md:flex-row md:gap-16">
          {/* Logo & Brand */}
          <div className="space-y-6">
            <Link className="group flex items-center gap-3" href="/" aria-label="Home">
              <LogoIcon
                className="h-auto w-7 transition-transform group-hover:scale-105"
                aria-hidden="true"
              />
              <span className="text-xl font-semibold tracking-tight">Store</span>
            </Link>
            <p className="text-muted-foreground max-w-xs text-sm">
              Premium products. Refined design. Quiet confidence.
            </p>
          </div>

          {/* Navigation */}
          <Suspense
            fallback={
              <div
                className="flex h-[188px] w-[200px] flex-col gap-2"
                aria-busy="true"
                aria-label="Loading navigation"
              >
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
                <div className={skeleton} />
              </div>
            }
          >
            <FooterMenu menu={menu} />
          </Suspense>

          {/* Theme Selector */}
          <div
            className="flex flex-col items-start gap-6 md:ml-auto md:items-end"
            role="region"
            aria-label="Theme selector"
          >
            <ThemeSelector />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-border/50 border-t py-8">
          <div className="text-muted-foreground flex w-full flex-col items-center gap-4 text-sm md:flex-row md:gap-0">
            <p className="font-medium">
              &copy; {copyrightDate} {copyrightName}
              {copyrightName.length && !copyrightName.endsWith('.') ? '.' : ''} All rights reserved.
            </p>
            <div className="flex items-center gap-2 md:mx-4">
              <span className="bg-border hidden h-4 w-px md:block" aria-hidden="true" />
              <p>Designed in Michigan</p>
            </div>
            <p className="md:ml-auto">
              <a
                className="hover:text-accent font-bold transition-colors"
                href="https://payloadcms.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Crafted by Payload
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
