'use client'

import { useEffect, useRef } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GradientOverlay } from '@/components/effects/GradientOverlay'

gsap.registerPlugin(ScrollTrigger)

interface HeroSectionProps {
  companyName: string
  tagline: string
}

export function HeroSection({ companyName, tagline }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {
      // Badge animation
      if (badgeRef.current) {
        gsap.from(badgeRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.8,
          ease: 'power3.out',
        })
      }

      // Title stagger animation
      if (titleRef.current) {
        const words = titleRef.current.querySelectorAll('span')
        gsap.from(words, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.2,
        })
      }

      // CTA buttons animation
      if (ctaRef.current) {
        gsap.from(ctaRef.current.children, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.6,
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const splitText = (text: string) => {
    return text.split(' ').map((word, i) => (
      <span key={i} className="inline-block">
        {word}
      </span>
    ))
  }

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 pt-24"
    >
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-orange-500/20 blur-3xl" />
        <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 animate-pulse rounded-full bg-pink-500/20 blur-3xl delay-1000" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div
              ref={badgeRef}
              className="inline-flex items-center gap-2 rounded-lg border-2 border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-pink-500/20 px-4 py-2 backdrop-blur-xl"
            >
              <Sparkles className="h-4 w-4 animate-pulse text-orange-400" />
              <span className="text-xs font-bold uppercase tracking-wider text-white">
                Premium Solutions
              </span>
            </div>

            {/* Title */}
            <div ref={titleRef} className="space-y-4">
              <h1 className="text-5xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl">
                {splitText(companyName)}
                <br />
                <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                  {splitText(tagline.split(' ').slice(0, 2).join(' '))}
                </span>
              </h1>
              <p className="max-w-lg text-lg leading-relaxed text-gray-300 sm:text-xl">{tagline}</p>
            </div>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col gap-4 pt-4 sm:flex-row">
              <button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-pink-600 hover:shadow-2xl">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <GradientOverlay colors="from-orange-600 to-pink-600" direction="to-r" />
              </button>
              <button className="rounded-xl border-2 border-white/20 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:border-white/40 hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="relative">
            <div className="group relative aspect-square overflow-hidden rounded-2xl border-2 border-white/10 bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-purple-500/20 backdrop-blur-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-pink-500/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl font-black text-white/20">
                  {companyName.charAt(0).toUpperCase()}
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            {/* Floating orbs */}
            <div className="absolute -right-6 -top-6 h-24 w-24 animate-pulse rounded-full bg-orange-500/30 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 h-32 w-32 animate-pulse rounded-full bg-pink-500/30 blur-2xl delay-1000" />
          </div>
        </div>
      </div>
    </section>
  )
}
