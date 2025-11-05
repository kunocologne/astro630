'use client'

import Link from 'next/link'
import Image from 'next/image'

export function SimpleFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo and Tagline */}
          <div className="text-center md:text-left">
            <div className="mb-4 flex items-center justify-center md:justify-start">
              <Image
                src="/Logos/Logo_White.svg"
                alt="6:30"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <p className="max-w-md text-sm text-gray-400">
              Bringing culture through curated experiences that connect artists and audiences in
              unique ways.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-6 text-sm md:flex-row">
            <Link href="/imprint" className="text-gray-400 transition-colors hover:text-white">
              Imprint
            </Link>
            <Link href="/privacy" className="text-gray-400 transition-colors hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-gray-400">© 2023. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
