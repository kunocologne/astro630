'use client'

import { Mail, MapPin, Instagram, Facebook, Music } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  {
    name: 'Instagram',
    icon: Instagram,
    href: '#',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Facebook',
    icon: Facebook,
    href: '#',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'TikTok',
    icon: Music,
    href: '#',
    color: 'from-black to-gray-800',
  },
]

export function ContactSectionNew() {
  return (
    <section className="relative bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-block text-xs uppercase tracking-wider text-gray-400">
            GET IN TOUCH
          </div>
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">Let's Connect</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300">
            Let's create something together. Reach out for bookings, partnerships, or
            co-productions.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left: Contact Information */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-8">
            <h3 className="mb-6 text-2xl font-bold">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Email
                  </h4>
                  <a
                    href="mailto:info@six-thirty.com"
                    className="text-lg text-white transition-colors hover:text-gray-300"
                  >
                    info@six-thirty.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-white/10">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="mb-1 text-sm font-semibold uppercase tracking-wider text-gray-400">
                    Location
                  </h4>
                  <p className="text-lg text-white">Köln, Germany</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Social Media CTAs */}
          <div className="rounded-lg border border-white/10 bg-white/5 p-8">
            <h3 className="mb-6 text-2xl font-bold">Connect with us</h3>
            <p className="mb-8 text-gray-300">
              Follow us on social media to stay updated with our latest releases, events, and
              community initiatives.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className={`group relative bg-gradient-to-br ${social.color} flex flex-col items-center justify-center gap-3 rounded-lg border border-white/10 p-6 transition-transform duration-300 hover:scale-105`}
                  >
                    <Icon className="h-8 w-8" />
                    <span className="text-sm font-semibold">{social.name}</span>
                    <div className="absolute inset-0 rounded-lg bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
