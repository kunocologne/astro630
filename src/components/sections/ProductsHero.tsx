'use client'

import Link from 'next/link'
import Image from 'next/image'
import type { Product } from '@/types/payload-types'
import { GradientOverlay } from '@/components/effects/GradientOverlay'
import { AddToCart } from '@/features/cart/AddToCart'

interface ProductsHeroProps {
  products: Product[]
}

// Helper to get product image URL
function getProductImage(product: Product): string {
  if (product.gallery && product.gallery.length > 0 && product.gallery[0].image) {
    const image =
      typeof product.gallery[0].image === 'string'
        ? product.gallery[0].image
        : product.gallery[0].image?.url || product.gallery[0].image?.filename || ''
    return image || '/media/placeholder.jpg'
  }
  return '/media/placeholder.jpg'
}

// Helper to format price
function formatPrice(price: number): string {
  return `€${price.toFixed(2)}`
}

// Helper to get description text (from richText)
function getDescriptionText(product: Product): string {
  if (typeof product.description === 'string') {
    return product.description
  }
  // If it's a rich text object, extract plain text
  if (product.description && typeof product.description === 'object') {
    // Simple extraction - could be improved
    return product.title || 'Premium product from 6:30SHOP'
  }
  return product.title || 'Premium product from 6:30SHOP'
}

export function ProductsHero({ products }: ProductsHeroProps) {
  // Fallback to empty array if no products
  const displayProducts = products.length > 0 ? products : []
  return (
    <>
      {/* Mobile Version - Clean Hero with Scrollable Products */}
      <section className="relative md:hidden">
        {/* Mobile Hero Section - With Background Image */}
        <div className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 pb-12 pt-24">
          {/* Background Image - Cropped portion of desktop background */}
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: 'url(/api/sharp-image?path=media/Untitled-1.png)',
                backgroundSize: '300%',
                backgroundPosition: '50% 50%',
                backgroundRepeat: 'no-repeat',
                filter: 'contrast(1.15) brightness(0.85) saturate(1.1)',
              }}
            />
            <div className="absolute inset-0 bg-black/75" />
          </div>

          {/* Logo - Much Bigger */}
          <div className="relative z-10 mb-12">
            <Image
              src="/Logos/Logo_White.svg"
              alt="6:30SHOP"
              width={600}
              height={200}
              className="h-32 w-auto md:h-40"
              priority
            />
          </div>

          {/* Tagline - Bigger */}
          <p className="relative z-10 mb-12 max-w-sm text-center text-xl font-semibold leading-relaxed text-white">
            Wear the movement. Share the culture.
          </p>
        </div>

        {/* Mobile Products Section */}
        <div className="bg-black px-4 pb-12">
          <h2 className="mb-8 text-center text-3xl font-black text-white">Shop Collection</h2>
          <div className="space-y-6">
            {displayProducts.length === 0 ? (
              <p className="py-12 text-center text-white/70">
                No products available yet. Check back soon!
              </p>
            ) : (
              displayProducts.map((product) => (
                <div
                  key={product.id}
                  className="overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-sm"
                >
                  <div className="flex gap-6">
                    <div className="relative h-40 w-40 flex-shrink-0 bg-black/30">
                      <Image
                        src={getProductImage(product)}
                        alt={product.title || 'Product'}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between p-5">
                      <div>
                        <h3 className="mb-2 text-lg font-black text-white">{product.title}</h3>
                        <p className="mb-3 line-clamp-2 text-sm text-white/70">
                          {getDescriptionText(product)}
                        </p>
                        <span className="text-2xl font-black text-white">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                      <div className="mt-4 flex flex-col gap-2">
                        <Link
                          href={`/products/${product.slug || product.id}`}
                          className="rounded-lg bg-white px-6 py-3 text-center text-base font-black text-black transition-colors hover:bg-gray-200"
                        >
                          View Product
                        </Link>
                        <AddToCart product={product} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Desktop Version - Dynamic & Exciting */}
      <section className="relative hidden min-h-screen items-center justify-center overflow-hidden md:flex">
        {/* Animated Background with Multiple Layers */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/api/sharp-image?path=media/Untitled-1.png"
              alt="Background"
              fill
              className="object-contain [-webkit-image-rendering:-webkit-optimize-contrast] [image-rendering:crisp-edges]"
              priority
              quality={100}
              sizes="100vw"
              unoptimized
              style={
                {
                  filter: 'contrast(1.15) brightness(0.85) saturate(1.1)',
                  animation: 'pulse-slow 6s ease-in-out infinite',
                } as React.CSSProperties
              }
            />
          </div>
          {/* Dynamic gradient overlay with movement */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/70 to-black/85"
            style={{
              backgroundSize: '200% 200%',
              animation: 'gradient-shift 10s ease infinite',
            }}
          />
          {/* Multiple pulsing light effects */}
          <div
            className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08)_0%,transparent_50%)]"
            style={{ animationDuration: '5s' }}
          />
          <div
            className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.06)_0%,transparent_50%)]"
            style={{ animationDuration: '7s', animationDelay: '2s' }}
          />
          {/* Scanning line effect */}
          <div
            className="absolute inset-0 h-1 animate-pulse bg-gradient-to-b from-transparent via-white/5 to-transparent"
            style={{ animationDuration: '3s' }}
          />
        </div>

        {/* Desktop Content - More Dynamic */}
        <div className="relative z-10 mx-auto mt-20 w-full max-w-7xl px-6 py-24 sm:px-12">
          {/* Header with Animation - Much Bigger */}
          <div className="mb-16 text-center">
            <div className="mb-12 flex transform justify-center transition-transform duration-500 hover:scale-105">
              <div className="relative">
                <Image
                  src="/Logos/Logo_White.svg"
                  alt="6:30SHOP"
                  width={800}
                  height={266}
                  className="h-40 w-auto animate-fade-in-up drop-shadow-2xl md:h-56 lg:h-72"
                  priority
                />
                {/* Enhanced Glow effect */}
                <div
                  className="absolute inset-0 animate-pulse bg-white/25 opacity-60 blur-2xl"
                  style={{
                    filter: 'blur(60px)',
                    transform: 'scale(1.3)',
                  }}
                />
              </div>
            </div>
            <div className="relative">
              <p className="relative z-10 mx-auto max-w-5xl text-4xl font-black leading-tight tracking-tight text-white drop-shadow-2xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span
                  className="inline-block animate-fade-in-up"
                  style={{ animationDelay: '200ms' }}
                >
                  Wear the movement.
                </span>
                <br />
                <span
                  className="inline-block animate-fade-in-up text-white/90"
                  style={{ animationDelay: '400ms' }}
                >
                  Share the culture.
                </span>
              </p>
              {/* Decorative elements - Bigger */}
              <div className="mx-auto mt-12 h-1 w-48 animate-pulse bg-gradient-to-r from-transparent via-white/70 to-transparent" />
              <div
                className="absolute -left-6 -top-6 h-3 w-3 animate-ping rounded-full bg-white/50"
                style={{ animationDelay: '600ms' }}
              />
              <div
                className="absolute -bottom-6 -right-6 h-3 w-3 animate-ping rounded-full bg-white/50"
                style={{ animationDelay: '800ms' }}
              />
            </div>
          </div>

          {/* Products Grid - Enhanced with Stagger Animation */}
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {displayProducts.length === 0 ? (
              <div className="col-span-full py-12 text-center">
                <p className="text-xl text-white/70">No products available yet. Check back soon!</p>
              </div>
            ) : (
              displayProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group relative flex flex-col overflow-hidden rounded-xl border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:rotate-1 hover:scale-105 hover:border-white/60 hover:bg-white/20 hover:shadow-white/20"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    opacity: 0,
                  }}
                >
                  <div className="relative aspect-square overflow-hidden bg-black/50">
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
                    </div>
                    <Image
                      src={getProductImage(product)}
                      alt={product.title || 'Product'}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-125"
                    />
                    <GradientOverlay />
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  </div>
                  <div className="relative flex flex-1 flex-col overflow-hidden bg-gradient-to-b from-white/10 to-white/5 p-8 backdrop-blur-md">
                    {/* Animated border glow */}
                    <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 animate-pulse rounded-xl border-2 border-white/30" />
                    </div>
                    <h3 className="relative z-10 mb-3 text-xl font-black text-white transition-colors group-hover:text-white">
                      {product.title}
                    </h3>
                    <p className="relative z-10 mb-5 line-clamp-2 flex-1 text-base text-white/70 transition-colors group-hover:text-white/90">
                      {getDescriptionText(product)}
                    </p>
                    <div className="relative z-10 space-y-5">
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-black text-white transition-transform duration-300 group-hover:scale-110">
                          {formatPrice(product.price)}
                        </span>
                      </div>
                      <div className="flex flex-col gap-3">
                        <Link
                          href={`/products/${product.slug || product.id}`}
                          className="w-full rounded-lg border-2 border-white/40 px-6 py-3 text-center text-base font-black text-white transition-all duration-300 hover:scale-105 hover:border-white/70 hover:bg-white/30"
                        >
                          View Details
                        </Link>
                        <AddToCart product={product} />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  )
}
