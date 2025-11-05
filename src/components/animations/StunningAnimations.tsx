'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { GradientOverlay } from '@/components/common/GradientOverlay'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function StunningAnimations() {
  const heroRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const textRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Hero entrance animation
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
        },
      )
    }

    // Floating particles animation
    if (particlesRef.current) {
      gsap.to(particlesRef.current.children, {
        y: 'random(-100, 100)',
        x: 'random(-50, 50)',
        rotation: 'random(-180, 180)',
        duration: 'random(3, 6)',
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2,
      })
    }

    // Cards stagger animation
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: cardsRef.current[0],
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }

    // Text reveal animation
    if (textRef.current) {
      gsap.fromTo(
        textRef.current.children,
        {
          opacity: 0,
          y: 30,
          skewY: 5,
        },
        {
          opacity: 1,
          y: 0,
          skewY: 0,
          duration: 1,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        },
      )
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Floating Particles */}
      <div ref={particlesRef} className="pointer-events-none absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section with Stunning Animation */}
      <section
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
          <div className="animate-float absolute left-10 top-1/4 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
          <div
            className="animate-float absolute bottom-1/4 right-10 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl"
            style={{ animationDelay: '1s' }}
          />
        </div>

        <div className="relative z-10 px-6 text-center">
          <h1 className="mb-6 text-6xl font-bold text-white md:text-8xl">
            <span className="animate-gradient-shift bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Stunning
            </span>
            <br />
            <span className="text-white">Animations</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-300">
            Experience the power of GSAP animations with beautiful transitions, floating particles,
            and smooth scroll effects.
          </p>
          <button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl">
            Explore Magic
          </button>
        </div>
      </section>

      {/* Animated Cards Section */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div ref={textRef} className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Animated Features</h2>
            <p className="text-lg text-gray-600">
              Watch these cards come to life with smooth animations
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Smooth Transitions',
                description: 'Beautiful GSAP-powered animations that feel natural and engaging',
                icon: '✨',
                color: 'from-blue-500 to-cyan-500',
              },
              {
                title: 'Scroll Triggers',
                description: 'Elements animate as you scroll, creating an immersive experience',
                icon: '🎯',
                color: 'from-purple-500 to-pink-500',
              },
              {
                title: 'Particle Effects',
                description: 'Floating particles and dynamic backgrounds for visual appeal',
                icon: '🌟',
                color: 'from-green-500 to-emerald-500',
              },
            ].map((feature, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el
                }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-500 group-hover:opacity-10`}
                />
                <div className="relative p-8">
                  <div className="mb-4 text-4xl">{feature.icon}</div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Image Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/50" />
        <div
          className="absolute inset-0 bg-cover bg-fixed bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`,
          }}
        />
        <div className="relative z-20 flex h-full items-center justify-center text-center text-white">
          <div>
            <h2 className="mb-6 text-5xl font-bold md:text-7xl">Parallax Magic</h2>
            <p className="mb-8 max-w-2xl text-xl">
              Beautiful parallax scrolling with stunning imagery
            </p>
            <button className="rounded-full bg-white px-8 py-4 font-semibold text-gray-900 transition-colors hover:bg-gray-100">
              Discover More
            </button>
          </div>
        </div>
      </section>

      {/* Interactive Gallery */}
      <section className="bg-gray-50 py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">Stunning Gallery</h2>
            <p className="text-lg text-gray-600">Hover over images to see the magic</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                title: 'Mountain Landscape',
                description: 'Breathtaking mountain views',
              },
              {
                src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                title: 'Ocean Waves',
                description: 'Peaceful ocean scenes',
              },
              {
                src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                title: 'City Lights',
                description: 'Urban night photography',
              },
              {
                src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                title: 'Forest Path',
                description: "Nature's hidden trails",
              },
              {
                src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                title: 'Desert Sunset',
                description: 'Golden hour magic',
              },
              {
                src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                title: 'Aurora Borealis',
                description: 'Northern lights dance',
              },
            ].map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <GradientOverlay fromOpacity={70} showVia={false} />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full transform p-6 text-white transition-transform duration-500 group-hover:translate-y-0">
                  <h3 className="mb-2 text-xl font-bold">{image.title}</h3>
                  <p className="text-gray-200">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
