'use client'

import { useEffect, useRef } from 'react'
import { Heart, Coffee, Rocket, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ServicesSectionProps {
  companyName?: string
}

export function ServicesSection({ companyName }: ServicesSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.service-card')
      if (cards) {
        gsap.from(cards, {
          opacity: 0,
          y: 60,
          scale: 0.95,
          duration: 0.8,
          stagger: 0.1,
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

  const services = [
    {
      icon: Heart,
      title: 'Premium Service',
      description: 'Delivering exceptional quality and attention to detail',
      features: ['24/7 Support', 'Custom Solutions', 'Expert Team'],
      featured: true,
    },
    {
      icon: Coffee,
      title: 'Design Excellence',
      description: 'Beautiful interfaces that engage and convert',
      features: ['Modern UI/UX', 'Responsive Design', 'Brand Identity'],
      featured: false,
    },
    {
      icon: Rocket,
      title: 'Fast Delivery',
      description: 'Rapid deployment without compromising quality',
      features: ['Quick Turnaround', 'Scalable Solutions', 'Performance'],
      featured: false,
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative bg-gradient-to-b from-slate-950 to-slate-900 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border-2 border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-pink-500/20 px-4 py-2 backdrop-blur-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Our Services
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl">
            What We{' '}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Offer
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        {/* 2-Column Asymmetric Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Featured Service - Large */}
          <div className="service-card group rounded-2xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-pink-500/10 p-8 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/50 md:col-span-1">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-pink-500/20 transition-transform group-hover:scale-110">
                <Heart className="h-7 w-7 text-orange-400" />
              </div>
              <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs font-bold uppercase text-orange-400">
                Featured
              </span>
            </div>
            <h3 className="mb-3 text-2xl font-black text-white">{services[0].title}</h3>
            <p className="mb-6 leading-relaxed text-gray-300">{services[0].description}</p>
            <div className="mb-6 space-y-2">
              {services[0].features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                  <ArrowRight className="h-4 w-4 text-orange-400" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <button className="rounded-xl border-2 border-white/20 bg-white/10 px-6 py-3 font-bold text-white transition-all duration-300 hover:bg-white/20">
              Learn More
            </button>
          </div>

          {/* Two Smaller Services */}
          <div className="grid grid-rows-2 gap-6">
            {services.slice(1).map((service, idx) => {
              const Icon = service.icon
              return (
                <div
                  key={idx}
                  className="service-card group rounded-2xl border-2 border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-orange-500/30"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-pink-500/20 transition-transform group-hover:scale-110">
                    <Icon className="h-6 w-6 text-orange-400" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-300">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
