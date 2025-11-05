'use client'

import { useEffect, useRef } from 'react'
import { ShoppingBag } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function ShopSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !productsRef.current) return

    const ctx = gsap.context(() => {
      const products = productsRef.current?.querySelectorAll('.product-card')
      if (products) {
        gsap.from(products, {
          opacity: 0,
          y: 50,
          scale: 0.9,
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

  const products = [
    {
      id: 1,
      name: 'Premium Product',
      price: '$99',
      description: 'High-quality solution for your needs',
    },
    {
      id: 2,
      name: 'Enterprise Package',
      price: '$299',
      description: 'Full-featured solution for teams',
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="shop"
      className="relative bg-gradient-to-b from-slate-900 to-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border-2 border-orange-500/30 bg-gradient-to-r from-orange-500/20 to-pink-500/20 px-4 py-2 backdrop-blur-xl">
            <ShoppingBag className="h-4 w-4 text-orange-400" />
            <span className="text-xs font-bold uppercase tracking-wider text-white">
              Our Products
            </span>
          </div>
          <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl">
            Discover Our{' '}
            <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
              Products
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Quality solutions designed to elevate your business
          </p>
        </div>

        {/* 2-Column Grid */}
        <div ref={productsRef} className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="product-card group relative rounded-2xl border-2 border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:scale-[1.02] hover:border-orange-500/50"
            >
              <div className="mb-6 flex aspect-square items-center justify-center rounded-xl border-2 border-white/10 bg-gradient-to-br from-orange-500/20 to-pink-500/20 transition-colors group-hover:border-orange-500/30">
                <ShoppingBag className="h-16 w-16 text-white/20 transition-colors group-hover:text-orange-400" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-white">{product.name}</h3>
              <p className="mb-4 text-gray-300">{product.description}</p>
              <div className="flex items-center justify-between">
                <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-3xl font-black text-transparent">
                  {product.price}
                </span>
                <button className="rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 font-bold text-white transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-pink-600">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
