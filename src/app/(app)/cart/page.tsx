'use client'

import { CartModal } from '@/features/cart/CartModal'
import { SimpleNavbar } from '@/components/SimpleNavbar'
import { SimpleFooter } from '@/components/sections/SimpleFooter'
import { useCart } from '@payloadcms/plugin-ecommerce/client/react'
import { ShoppingCart } from 'lucide-react'
import { useEffect, useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'
import { DeleteItemButton } from '@/features/cart/DeleteItemButton'
import { EditItemQuantityButton } from '@/features/cart/EditItemQuantityButton'
import { Price } from '@/components/common/Price'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/components/ui/button'

export default function CartPage() {
  const { cart } = useCart()
  const [isOpen, setIsOpen] = useState(true)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  const totalQuantity =
    cart?.items?.reduce((quantity, item) => (item.quantity || 0) + quantity, 0) || 0

  return (
    <>
      <SimpleNavbar />
      <div className="min-h-screen pb-20 pt-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetContent className="flex w-full flex-col sm:max-w-2xl">
              <SheetHeader>
                <SheetTitle>My Cart</SheetTitle>
                <SheetDescription>
                  Manage your cart here, add items to view the total.
                </SheetDescription>
              </SheetHeader>

              {!cart || cart?.items?.length === 0 ? (
                <div className="flex flex-col items-center gap-2 py-12 text-center">
                  <ShoppingCart className="h-16 w-16 text-gray-400" />
                  <p className="text-center text-2xl font-bold">Your cart is empty.</p>
                  <Link href="/#shop">
                    <Button className="mt-4">Continue Shopping</Button>
                  </Link>
                </div>
              ) : (
                <div className="flex grow flex-col">
                  <ul className="grow space-y-4 overflow-auto py-4">
                    {cart?.items?.map((item, i) => {
                      const product = item.product
                      const variant = item.variant

                      if (typeof product !== 'object' || !item || !product || !product.slug)
                        return <React.Fragment key={i} />

                      const firstGalleryImage =
                        typeof product.gallery?.[0]?.image === 'object'
                          ? product.gallery?.[0]?.image
                          : undefined

                      let image = firstGalleryImage
                      let price = product.price

                      const isVariant = Boolean(variant) && typeof variant === 'object'

                      if (isVariant && typeof variant === 'object') {
                        price = variant?.price || price
                      }

                      const imageUrl = image?.url || image?.filename || '/media/placeholder.jpg'

                      return (
                        <li key={i} className="flex gap-4 border-b pb-4">
                          <Link href={`/products/${product.slug}`} className="flex-shrink-0">
                            <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-gray-100">
                              <Image
                                src={imageUrl}
                                alt={product.title || 'Product'}
                                fill
                                className="object-cover"
                              />
                            </div>
                          </Link>
                          <div className="flex flex-1 flex-col justify-between">
                            <div>
                              <Link href={`/products/${product.slug}`}>
                                <h3 className="font-semibold hover:underline">{product.title}</h3>
                              </Link>
                              {isVariant && typeof variant === 'object' && variant?.title && (
                                <p className="text-sm text-gray-600">{variant.title}</p>
                              )}
                              <p className="mt-2 text-lg font-bold">
                                <Price amount={price} />
                              </p>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <EditItemQuantityButton item={item} type="minus" />
                                <span className="w-8 text-center text-sm font-medium">
                                  {item.quantity}
                                </span>
                                <EditItemQuantityButton item={item} type="plus" />
                              </div>
                              <DeleteItemButton item={item} />
                            </div>
                          </div>
                        </li>
                      )
                    })}
                  </ul>

                  <div className="mt-4 border-t pt-4">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-lg font-semibold">Total:</span>
                      <span className="text-2xl font-bold">
                        <Price amount={cart.total || 0} />
                      </span>
                    </div>
                    <Link href="/checkout">
                      <Button className="w-full" size="lg">
                        Proceed to Checkout
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <SimpleFooter />
    </>
  )
}
