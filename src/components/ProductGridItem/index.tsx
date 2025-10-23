import type { Product } from '@/payload-types'

import { Media } from '@/components/Media'
import { Price } from '@/components/Price'
import { AnimatedCard, ScrollReveal } from '@/components/animations'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

type Props = {
  product: Partial<Product>
  index?: number
  isStaggered?: boolean
}

export const ProductGridItem: React.FC<Props> = ({ product, index = 0, isStaggered = false }) => {
  const { gallery, priceInUSD, title } = product

  let price = priceInUSD

  const variants = product.variants?.docs

  if (variants && variants.length > 0) {
    const variant = variants[0]
    if (
      variant &&
      typeof variant === 'object' &&
      variant?.priceInUSD &&
      typeof variant.priceInUSD === 'number'
    ) {
      price = variant.priceInUSD
    }
  }

  const image =
    gallery?.[0]?.image && typeof gallery[0]?.image !== 'string' ? gallery[0]?.image : false

  return (
    <ScrollReveal direction="up" delay={index * 0.1}>
      <AnimatedCard 
        index={index} 
        isStaggered={isStaggered}
        className="h-full w-full"
      >
        <Link 
          className="relative inline-block h-full w-full group overflow-hidden" 
          href={`/products/${product.slug}`}
        >
          {/* Image Container - Refined */}
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
            {image ? (
              <div className="relative aspect-square overflow-hidden">
                <Media
                  className="relative w-full h-full p-8"
                  height={80}
                  imgClassName={clsx(
                    'h-full w-full object-contain transition-all duration-300 ease-out',
                    'group-hover:scale-105'
                  )}
                  resource={image}
                  width={80}
                />
                
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ) : (
              <div className="aspect-square bg-muted/30" />
            )}
          </div>

          {/* Product Info - Refined Typography */}
          <div className="mt-4 space-y-2">
            <h3 className="font-semibold text-base tracking-tight group-hover:text-foreground/70 transition-colors line-clamp-2">
              {title}
            </h3>
            
            {/* Price */}
            {typeof price === 'number' && (
              <p className="text-sm text-muted-foreground">
                <Price amount={price} as="span" />
              </p>
            )}
          </div>
        </Link>
      </AnimatedCard>
    </ScrollReveal>
  )
}
