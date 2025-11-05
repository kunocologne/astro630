'use client'

import type { Product, Variant } from '@/types/payload-types'

import { useCart } from '@payloadcms/plugin-ecommerce/client/react'
import { useQueryClient } from '@tanstack/react-query'
import clsx from 'clsx'
import { useSearchParams } from 'next/navigation'
import React, { useCallback, useMemo } from 'react'
import { toast } from 'sonner'
type Props = {
  product: Product
}

export function AddToCart({ product }: Props) {
  const { addItem, cart, refetch } = useCart()
  const queryClient = useQueryClient()
  const searchParams = useSearchParams()

  // Debug: Check if addItem is available
  React.useEffect(() => {
    console.log('🔍 AddToCart mounted/updated:', {
      hasAddItem: !!addItem,
      hasCart: !!cart,
      cartItems: cart?.items?.length || 0,
      hasRefetch: !!refetch,
      productId: product.id,
      productTitle: product.title,
    })
    if (!addItem) {
      console.warn('⚠️ AddToCart: addItem function not available from useCart hook')
      console.warn('useCart returned:', { addItem, cart, refetch })
    }
  }, [addItem, cart, refetch, product])

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

      console.log('🔵 BUTTON CLICKED!', {
        hasAddItem: !!addItem,
        productId: product.id,
        productTitle: product.title,
        variantId: selectedVariant?.id,
        cartState: cart,
      })

      if (!addItem) {
        console.error('❌ addItem function is not available from useCart hook')
        console.error('Available from useCart:', { addItem, cart, refetch })
        toast.error('Cart functionality is not available. Please refresh the page.')
        return
      }

      try {
        console.log('🟢 Calling addItem:', {
          productId: product.id,
          variantId: selectedVariant?.id,
        })

        const result = await addItem({
          product: product.id,
          variant: selectedVariant?.id ?? undefined,
        })

        console.log('✅ addItem result:', result)

        // Force cart refresh after adding
        if (refetch) {
          console.log('🔄 Refetching cart...')
          await refetch()
        } else {
          console.log('🔄 Invalidating cart queries...')
          await queryClient.invalidateQueries({ queryKey: ['cart'] })
        }

        const productName = product.title
        const variantName = selectedVariant?.title ? ` (${selectedVariant.title})` : ''
        toast.success(`${productName}${variantName} added to cart!`)
        console.log('✅ Toast notification shown')
      } catch (error) {
        console.error('❌ Add to cart error:', error)
        const errorMsg = error instanceof Error ? error.message : 'Unknown error'
        console.error('Full error details:', {
          error,
          errorMsg,
          stack: error instanceof Error ? error.stack : undefined,
        })
        toast.error(`Failed to add item to cart: ${errorMsg}`)
      }
    },
    [addItem, product, selectedVariant, refetch, queryClient, cart],
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
      onClick={(e) => {
        console.log('🔴 BUTTON CLICK EVENT FIRED!')
        addToCart(e)
      }}
      disabled={disabled}
      className={clsx(
        'group/btn relative w-full overflow-hidden rounded-lg bg-gradient-to-r from-white via-gray-50 to-white px-6 py-3 text-base font-black text-black shadow-lg transition-all duration-300 hover:scale-105 hover:from-gray-100 hover:via-white hover:to-gray-100 hover:shadow-2xl active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 md:hover:scale-110',
        {
          'hover:opacity-90': !disabled,
        },
      )}
    >
      <span className="relative z-10">Add To Cart</span>
      <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover/btn:translate-x-[100%]" />
    </button>
  )
}
