'use client'

import { Media } from '@/components/Media'
import { Price } from '@/components/common/Price'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/providers/Auth'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { Lock, Mail, ShoppingBag, ArrowLeft, Shield } from 'lucide-react'
import Link from 'next/link'
import React, { Suspense, useCallback, useEffect, useState } from 'react'

import { CheckoutForm } from '@/features/auth/CheckoutForm'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { useCart, usePayments } from '@payloadcms/plugin-ecommerce/client/react'
import { toast } from 'sonner'

const apiKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ''
const stripePromise = apiKey ? loadStripe(apiKey) : null

export const CheckoutPage: React.FC = () => {
  const { user } = useAuth()
  const { cart } = useCart()
  const [error, setError] = useState<null | string>(null)
  const [email, setEmail] = useState(user?.email || '')
  const [paymentData, setPaymentData] = useState<null | Record<string, unknown>>(null)
  const { initiatePayment } = usePayments()
  const [isProcessingPayment, setProcessingPayment] = useState(false)
  const [isInitializing, setIsInitializing] = useState(false)

  const cartIsEmpty = !cart || !cart.items || !cart.items.length

  // Initialize payment intent when email is provided and cart is not empty
  useEffect(() => {
    if (!cartIsEmpty && email && !paymentData && !isInitializing && stripePromise) {
      setIsInitializing(true)
      initiatePaymentIntent('stripe').finally(() => {
        setIsInitializing(false)
      })
    }
  }, [email, cartIsEmpty])

  // Set email from user if available
  useEffect(() => {
    if (user?.email && !email) {
      setEmail(user.email)
    }
  }, [user?.email, email])

  const initiatePaymentIntent = useCallback(
    async (paymentID: string) => {
      try {
        setError(null)
        const paymentData = (await initiatePayment(paymentID, {
          additionalData: {
            ...(email ? { customerEmail: email } : {}),
          },
        })) as Record<string, unknown>

        if (paymentData) {
          setPaymentData(paymentData)
        }
      } catch (error) {
        const errorData = error instanceof Error ? JSON.parse(error.message) : {}
        let errorMessage = 'An error occurred while initiating payment.'

        if (errorData?.cause?.code === 'OutOfStock') {
          errorMessage = 'One or more items in your cart are out of stock.'
        }

        setError(errorMessage)
        toast.error(errorMessage)
        setIsInitializing(false)
      }
    },
    [email, initiatePayment],
  )

  if (!stripePromise) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <p className="text-lg text-gray-900 dark:text-gray-100">
            Stripe is not configured. Please set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
          </p>
          <Link href="/" className="mt-4 inline-block text-orange-600 hover:text-orange-700">
            Return to home
          </Link>
        </div>
      </div>
    )
  }

  if (cartIsEmpty && isProcessingPayment) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <LoadingSpinner />
          <p className="mt-4 text-lg text-gray-900 dark:text-gray-100">
            Processing your payment...
          </p>
        </div>
      </div>
    )
  }

  if (cartIsEmpty) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <p className="text-lg text-gray-900 dark:text-gray-100">Your cart is empty.</p>
          <Link href="/#shop" className="mt-4 inline-block text-orange-600 hover:text-orange-700">
            Continue shopping?
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/#shop"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue shopping
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px]">
          {/* Main Checkout Form */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-800">
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Checkout</h1>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  Complete your order securely with Stripe
                </p>
              </div>

              {/* Email Input */}
              <div className="mb-8">
                <Label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  We&apos;ll send you a receipt via email
                </p>
              </div>

              {/* Payment Section */}
              <div className="mb-8">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Payment
                  </h2>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <Shield className="h-4 w-4" />
                    <span>Secured by Stripe</span>
                  </div>
                </div>

                {error && (
                  <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400">
                    {error}
                  </div>
                )}

                {isInitializing ? (
                  <div className="flex items-center justify-center py-12">
                    <LoadingSpinner />
                  </div>
                ) : paymentData &&
                  paymentData?.['clientSecret'] &&
                  typeof paymentData['clientSecret'] === 'string' ? (
                  <Suspense fallback={<LoadingSpinner />}>
                    <Elements
                      options={{
                        appearance: {
                          theme: 'stripe',
                          variables: {
                            borderRadius: '8px',
                            colorPrimary: '#f97316',
                            colorBackground: '#ffffff',
                            colorText: '#1f2937',
                            colorDanger: '#ef4444',
                            fontFamily: 'Inter, system-ui, sans-serif',
                            fontSizeBase: '16px',
                            fontWeightBold: '600',
                            fontWeightNormal: '400',
                            spacingUnit: '4px',
                          },
                        },
                        clientSecret: paymentData['clientSecret'],
                      }}
                      stripe={stripePromise}
                    >
                      <CheckoutForm
                        customerEmail={email}
                        setProcessingPayment={setProcessingPayment}
                      />
                    </Elements>
                  </Suspense>
                ) : (
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-700 dark:bg-gray-900">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Enter your email address to continue
                    </p>
                  </div>
                )}
              </div>

              {/* Security Footer */}
              <div className="border-t border-gray-200 pt-6 dark:border-gray-700">
                <div className="flex items-center justify-center gap-6 text-xs text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4" />
                    <span>Secure payment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4" />
                    <span>PCI compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="order-1 lg:sticky lg:top-8 lg:order-2 lg:h-fit">
            <div className="rounded-2xl bg-gray-900 p-6 text-white">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                  <ShoppingBag className="h-5 w-5 text-white" />
                </div>
                <h2 className="text-xl font-bold">Order Summary</h2>
              </div>

              {/* Cart Items */}
              <div className="mb-6 space-y-4">
                {cart?.items?.map((item, index) => {
                  if (typeof item.product === 'object' && item.product) {
                    const { product, quantity, variant } = item
                    const { title, gallery } = product

                    if (!quantity) return null

                    const image = gallery?.[0]?.image
                    let price = product?.priceInUSD

                    if (variant && typeof variant === 'object') {
                      price = variant?.priceInUSD
                    }

                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 rounded-lg bg-gray-800 p-3"
                      >
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-700">
                          {image && typeof image !== 'string' && (
                            <Media
                              className="relative"
                              fill
                              imgClassName="object-cover"
                              resource={image}
                            />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate font-medium text-white">{title}</h4>
                          {variant && typeof variant === 'object' && (
                            <p className="text-xs text-gray-400">
                              {variant.options
                                ?.map((option) => {
                                  if (typeof option === 'object') return option.label
                                  return null
                                })
                                .filter(Boolean)
                                .join(', ')}
                            </p>
                          )}
                          <p className="text-sm text-gray-400">Qty: {quantity}</p>
                        </div>
                        {typeof price === 'number' && (
                          <div className="text-right">
                            <Price amount={price * quantity} className="font-semibold text-white" />
                          </div>
                        )}
                      </div>
                    )
                  }
                  return null
                })}
              </div>

              {/* Order Totals */}
              <div className="border-t border-gray-700 pt-4">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between text-gray-300">
                    <span>Subtotal</span>
                    <Price amount={cart?.subtotal || 0} className="text-white" />
                  </div>
                  <div className="flex items-center justify-between text-gray-300">
                    <span>Shipping</span>
                    <span className="text-white">Calculated at checkout</span>
                  </div>
                  <div className="flex items-center justify-between border-t border-gray-700 pt-3 text-lg font-bold">
                    <span>Total</span>
                    <Price amount={cart?.subtotal || 0} className="text-white" />
                  </div>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 rounded-lg bg-gray-800 p-4">
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 flex-shrink-0 text-orange-400" />
                  <div className="text-xs text-gray-300">
                    <p className="font-medium text-white">Your payment is secure</p>
                    <p className="mt-1">
                      All transactions are encrypted and secure. We never store your card details.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
