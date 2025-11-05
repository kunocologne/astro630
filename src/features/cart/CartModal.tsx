'use client'

import { Price } from '@/components/common/Price'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useCart } from '@payloadcms/plugin-ecommerce/client/react'
import { ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useMemo, useState } from 'react'

import { DeleteItemButton } from './DeleteItemButton'
import { EditItemQuantityButton } from './EditItemQuantityButton'
import { OpenCartButton } from './OpenCart'
import { Button } from '@/components/ui/button'
import { Product } from '@/types/payload-types'

export function CartModal() {
  const { cart } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    // Close the cart modal when the pathname changes.
    setIsOpen(false)
  }, [pathname])

  const totalQuantity = useMemo(() => {
    if (!cart || !cart.items || !cart.items.length) return undefined
    return cart.items.reduce((quantity, item) => (item.quantity || 0) + quantity, 0)
  }, [cart])

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open)
  }

  // Prevent navigation when clicking cart button
  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsOpen(true)
  }

  return (
    <Sheet open={isOpen} onOpenChange={handleOpenChange}>
      <SheetTrigger asChild onClick={handleCartClick}>
        <OpenCartButton quantity={totalQuantity} />
      </SheetTrigger>

      <SheetContent className="flex w-full flex-col sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            {cart?.items?.length
              ? `${totalQuantity} ${totalQuantity === 1 ? 'item' : 'items'} in your cart`
              : 'Your cart is empty'}
          </SheetDescription>
        </SheetHeader>

        {!cart || cart?.items?.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
            <ShoppingCart className="h-16 w-16 text-gray-300" />
            <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">
              Your cart is empty
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Add items to your cart to get started
            </p>
            <Button asChild className="mt-4">
              <Link href="/#shop">Continue Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto py-4">
              <ul className="space-y-4">
                {cart?.items?.map((item, i) => {
                  const product = item.product
                  const variant = item.variant

                  if (typeof product !== 'object' || !item || !product || !product.slug)
                    return <React.Fragment key={i} />

                  const metaImage =
                    product.meta?.image && typeof product.meta?.image === 'object'
                      ? product.meta.image
                      : undefined

                  const firstGalleryImage =
                    typeof product.gallery?.[0]?.image === 'object'
                      ? product.gallery?.[0]?.image
                      : undefined

                  let image = firstGalleryImage || metaImage
                  let price = product.priceInUSD

                  const isVariant = Boolean(variant) && typeof variant === 'object'

                  if (isVariant) {
                    price = variant?.priceInUSD

                    const imageVariant = product.gallery?.find((galleryItem: unknown) => {
                      if (
                        typeof galleryItem !== 'object' ||
                        galleryItem === null ||
                        !('variantOption' in galleryItem)
                      )
                        return false
                      const variantOptionID =
                        typeof galleryItem.variantOption === 'object' &&
                        galleryItem.variantOption !== null &&
                        'id' in galleryItem.variantOption
                          ? galleryItem.variantOption.id
                          : galleryItem.variantOption

                      const hasMatch = variant?.options?.some((option: unknown) => {
                        if (typeof option === 'object' && option !== null && 'id' in option)
                          return option.id === variantOptionID
                        else return option === variantOptionID
                      })

                      return hasMatch
                    })

                    if (imageVariant && typeof imageVariant.image === 'object') {
                      image = imageVariant.image
                    }
                  }

                  return (
                    <li
                      className="flex gap-4 border-b border-gray-200 pb-4 last:border-0 dark:border-gray-700"
                      key={i}
                    >
                      <Link
                        className="flex-shrink-0"
                        href={`/products/${(item.product as Product)?.slug}`}
                        onClick={() => setIsOpen(false)}
                      >
                        <div className="relative h-20 w-20 overflow-hidden rounded-lg border border-gray-200 bg-gray-100 dark:border-gray-700 dark:bg-gray-800">
                          {image?.url ? (
                            <Image
                              alt={image?.alt || product?.title || ''}
                              className="h-full w-full object-cover"
                              fill
                              src={image.url}
                            />
                          ) : (
                            <div className="h-full w-full bg-gray-200 dark:bg-gray-700" />
                          )}
                        </div>
                      </Link>

                      <div className="flex flex-1 flex-col gap-2">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0 flex-1">
                            <Link
                              href={`/products/${(item.product as Product)?.slug}`}
                              onClick={() => setIsOpen(false)}
                              className="line-clamp-2 font-medium text-gray-900 hover:text-orange-600 dark:text-gray-100 dark:hover:text-orange-400"
                            >
                              {product?.title}
                            </Link>
                            {isVariant && variant ? (
                              <p className="mt-1 text-sm capitalize text-gray-500 dark:text-gray-400">
                                {variant.options
                                  ?.map((option: unknown) => {
                                    if (
                                      typeof option === 'object' &&
                                      option !== null &&
                                      'label' in option
                                    )
                                      return String(option.label)
                                    return null
                                  })
                                  .filter(Boolean)
                                  .join(', ')}
                              </p>
                            ) : null}
                          </div>
                          <DeleteItemButton item={item} />
                        </div>

                        <div className="flex items-center justify-between">
                          {typeof price === 'number' && (
                            <Price
                              amount={price}
                              className="text-base font-semibold text-gray-900 dark:text-gray-100"
                            />
                          )}
                          <div className="flex items-center gap-2 rounded-lg border border-gray-200 dark:border-gray-700">
                            <EditItemQuantityButton item={item} type="minus" />
                            <span className="w-8 text-center text-sm font-medium">
                              {item.quantity}
                            </span>
                            <EditItemQuantityButton item={item} type="plus" />
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-700">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-base font-medium text-gray-700 dark:text-gray-300">
                  Subtotal
                </span>
                {typeof cart?.subtotal === 'number' && (
                  <Price
                    amount={cart.subtotal}
                    className="text-lg font-bold text-gray-900 dark:text-gray-100"
                  />
                )}
              </div>
              <Button asChild className="w-full" size="lg">
                <Link href="/checkout" onClick={() => setIsOpen(false)}>
                  Proceed to Checkout
                </Link>
              </Button>
              <p className="mt-2 text-center text-xs text-gray-500 dark:text-gray-400">
                Shipping and taxes calculated at checkout
              </p>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  )
}
