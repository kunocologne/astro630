'use client'

import { useEffect, useRef } from 'react'
import { Sparkles, Users, Award, Zap } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface AboutSectionProps {
  companyName: string
}

export function AboutSection({ companyName }: AboutSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return

    const ctx = gsap.context(() => {
      // Staggered card animations
      const cards = cardsRef.current?.querySelectorAll('.feature-card')
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    {
      icon: Sparkles,
      title: 'Innovation First',
      desc: 'Cutting-edge solutions that push boundaries',
    },
    { icon: Users, title: 'Expert Team', desc: 'Dedicated professionals with years of experience' },
    { icon: Award, title: 'Proven Results', desc: 'Track record of successful project deliveries' },
    { icon: Zap, title: 'Lightning Fast', desc: 'Optimized performance for maximum efficiency' },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* 2-Column Grid Layout */}
        <div className="mb-16 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Visual */}
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl border-2 border-white/10 bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl font-black text-white/10">
                  {companyName.charAt(0).toUpperCase()}
                </div>
              </div>
            </div>
            <div className="absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-3xl" />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-lg border-2 border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-pink-500/20 px-4 py-2 backdrop-blur-xl">
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                About Us
              </span>
            </div>
            <h2 className="text-4xl font-black text-white sm:text-5xl">
              Built for{' '}
              <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="max-w-lg text-lg leading-relaxed text-gray-300">
              We deliver premium solutions that combine cutting-edge technology with exceptional
              design. Our mission is to empower businesses with tools that drive real results.
            </p>
            <p className="max-w-lg text-base leading-relaxed text-gray-400">
              With years of experience and a passion for innovation, we've helped countless
              companies achieve their digital transformation goals.
            </p>
          </div>
        </div>

        {/* Feature Cards Grid - 2x2 */}
        <div ref={cardsRef} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="feature-card group relative rounded-2xl border-2 border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-orange-500/50 dark:bg-slate-800/50"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-pink-500/20 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold text-white">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-400">{feature.desc}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
