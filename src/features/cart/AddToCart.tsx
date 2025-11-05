'use client'

import type { Product, Variant } from '@/types/payload-types'

import { useCart } from '@payloadcms/plugin-ecommerce/client/react'
import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'
import React, { useCallback, useMemo } from 'react'
import { toast } from 'sonner'
type Props = {
  product: Product
}

export function AddToCart({ product }: Props) {
  const { addItem, cart } = useCart()
  const searchParams = useSearchParams()

  // Debug: Check if addItem is available
  React.useEffect(() => {
    if (!addItem) {
      console.warn('AddToCart: addItem function not available from useCart hook')
    }
  }, [addItem])

  const selectedVariant = useMemo<Variant | undefined>(() => {
    const variants = product.variants?.docs || []

    if (product.enableVariants && variants.length) {
      const variantId = searchParams.get('variant')

      const validVariant = variants.find((variant) => {
        if (typeof variant === 'object') {
          return String(variant.id) === variantId
        }
        return String(variant) === variantId
      })

      if (validVariant && typeof validVariant === 'object') {
        return validVariant
      }
    }

    return undefined
  }, [product.enableVariants, product.variants?.docs, searchParams])

  const addToCart = useCallback(
    async (e: React.FormEvent<HTMLButtonElement>) => {
      e.preventDefault()
      e.stopPropagation()

      if (!addItem) {
        console.error('addItem function is not available from useCart hook')
        toast.error('Cart functionality is not available. Please refresh the page.')
        return
      }

      try {
        console.log('Adding to cart:', { productId: product.id, variantId: selectedVariant?.id })
        await addItem({
          product: product.id,
          variant: selectedVariant?.id ?? undefined,
        })
        const productName = product.title
        const variantName = selectedVariant?.title ? ` (${selectedVariant.title})` : ''
        toast.success(`${productName}${variantName} added to cart!`)
      } catch (error) {
        console.error('Add to cart error:', error)
        toast.error('Failed to add item to cart. Please try again.')
      }
    },
    [addItem, product, selectedVariant],
  )

  const disabled = useMemo<boolean>(() => {
    const existingItem = cart?.items?.find((item) => {
      const productID = typeof item.product === 'object' ? item.product?.id : item.product
      const variantID = item.variant
        ? typeof item.variant === 'object'
          ? item.variant?.id
          : item.variant
        : undefined

      if (productID === product.id) {
        if (product.enableVariants) {
          return variantID === selectedVariant?.id
        }
        return true
      }
      return false
    })

    if (existingItem) {
      const existingQuantity = existingItem.quantity

      if (product.enableVariants) {
        return existingQuantity >= (selectedVariant?.inventory || 0)
      }
      return existingQuantity >= (product.inventory || 0)
    }

    if (product.enableVariants) {
      if (!selectedVariant) {
        return true
      }

      if (selectedVariant.inventory === 0) {
        return true
      }
    } else {
      if (product.inventory === 0) {
        return true
      }
    }

    return false
  }, [selectedVariant, cart?.items, product])

  // Fallback to regular button if AnimatedButton causes issues
  if (!addItem) {
    return (
      <button
        type="button"
        disabled
        className="w-full cursor-not-allowed rounded-lg bg-gray-400 px-6 py-3 text-base text-white"
      >
        Cart Unavailable
      </button>
    )
  }

  return (
    <button
      type="button"
      onClick={addToCart}
      disabled={disabled}
      className={clsx(
        'w-full rounded-lg bg-gradient-to-r from-white via-gray-50 to-white px-6 py-3 text-base font-black text-black transition-all duration-300 hover:scale-105 hover:from-gray-100 hover:via-white hover:to-gray-100 disabled:cursor-not-allowed disabled:opacity-50',
        {
          'hover:opacity-90': !disabled,
        },
      )}
    >
      Add To Cart
    </button>
  )
}
