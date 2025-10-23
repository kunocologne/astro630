'use client'

import { Media } from '@/components/Media'
import { Price } from '@/components/Price'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useAuth } from '@/providers/Auth'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { CreditCard, Lock, Mail, ShoppingBag, User } from 'lucide-react'
import Link from 'next/link'
import React, { Suspense, useCallback, useEffect, useState } from 'react'

import { CheckoutForm } from '@/components/forms/CheckoutForm'
import { LoadingSpinner } from '@/components/LoadingSpinner'
import { useCart, usePayments } from '@payloadcms/plugin-ecommerce/client/react'
import { toast } from 'sonner'

const apiKey = `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`
const stripe = loadStripe(apiKey)

export const CheckoutPage: React.FC = () => {
  const { user } = useAuth()
  const { cart } = useCart()
  const [error, setError] = useState<null | string>(null)
  const [email, setEmail] = useState('')
  const [paymentData, setPaymentData] = useState<null | Record<string, unknown>>(null)
  const { initiatePayment } = usePayments()
  const [isProcessingPayment, setProcessingPayment] = useState(false)
  const [cardholderName, setCardholderName] = useState('')
  const [saveInfo, setSaveInfo] = useState(false)
  const [isBusiness, setIsBusiness] = useState(false)

  const cartIsEmpty = !cart || !cart.items || !cart.items.length

  const canGoToPayment = Boolean(email || user)

  useEffect(() => {
    return () => {
      setEmail('')
      setCardholderName('')
      setSaveInfo(false)
      setIsBusiness(false)
    }
  }, [])

  const initiatePaymentIntent = useCallback(
    async (paymentID: string) => {
      try {
        const paymentData = (await initiatePayment(paymentID, {
          additionalData: {
            ...(email ? { customerEmail: email } : {}),
            cardholderName,
            saveInfo,
            isBusiness,
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
      }
    },
    [email, cardholderName, saveInfo, isBusiness, initiatePayment],
  )

  if (!stripe) return null

  if (cartIsEmpty && isProcessingPayment) {
    return (
      <div className="w-full items-center justify-center py-12">
        <div className="prose dark:prose-invert mb-8 max-w-none self-center text-center">
          <p>Processing your payment...</p>
        </div>
        <LoadingSpinner />
      </div>
    )
  }

  if (cartIsEmpty) {
    return (
      <div className="prose dark:prose-invert w-full items-center py-12">
        <p>Your cart is empty.</p>
        <Link href="/search">Continue shopping?</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid h-full grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Panel - Order Summary (Dark Theme) */}
          <div className="order-2 rounded-2xl bg-gray-900 p-8 text-white lg:order-1">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
                <ShoppingBag className="h-5 w-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold">JUNO Store</h1>
            </div>

            {/* Currency Selection */}
            <div className="mb-8">
              <h3 className="mb-4 text-sm font-medium text-gray-300">Choose a currency:</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 rounded-lg border border-gray-700 bg-gray-800 p-3">
                  <input
                    type="radio"
                    name="currency"
                    id="usd"
                    className="h-4 w-4 text-orange-500"
                    defaultChecked
                  />
                  <label
                    htmlFor="usd"
                    className="flex cursor-pointer items-center gap-2 text-white"
                  >
                    <span className="text-lg">$</span>
                    <span className="font-semibold">{(cart?.subtotal || 0) / 100}</span>
                  </label>
                </div>
                <div className="flex items-center gap-3 rounded-lg border border-gray-600 bg-gray-800 p-3">
                  <input
                    type="radio"
                    name="currency"
                    id="eur"
                    className="h-4 w-4 text-orange-500"
                  />
                  <label
                    htmlFor="eur"
                    className="flex cursor-pointer items-center gap-2 text-gray-400"
                  >
                    <span className="text-lg">€</span>
                    <span className="font-semibold">
                      {(((cart?.subtotal || 0) * 0.88) / 100).toFixed(2)}
                    </span>
                  </label>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-400">1 USD = 0.88 EUR</p>
            </div>

            {/* Product Details */}
            <div className="mb-8">
              <div className="mb-4 flex items-center gap-3">
                <ShoppingBag className="h-5 w-5 text-orange-400" />
                <h3 className="font-semibold">Your Items</h3>
              </div>

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
                      className="mb-4 flex items-center gap-4 rounded-lg bg-gray-800 p-4"
                    >
                      <div className="h-12 w-12 overflow-hidden rounded-lg bg-gray-700">
                        {image && typeof image !== 'string' && (
                          <Media
                            className="relative"
                            fill
                            imgClassName="object-cover"
                            resource={image}
                          />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-white">{title}</h4>
                        {variant && typeof variant === 'object' && (
                          <p className="text-sm text-gray-400">
                            {variant.options
                              ?.map((option) => {
                                if (typeof option === 'object') return option.label
                                return null
                              })
                              .join(', ')}
                          </p>
                        )}
                        <p className="text-sm text-gray-400">Qty: {quantity}</p>
                      </div>
                      {typeof price === 'number' && (
                        <div className="text-right">
                          <Price amount={price} className="font-semibold text-white" />
                        </div>
                      )}
                    </div>
                  )
                }
                return null
              })}
            </div>

            {/* Total */}
            <div className="border-t border-gray-700 pt-6">
              <div className="flex items-center justify-between text-2xl font-bold">
                <span>Total due</span>
                <Price amount={cart?.subtotal || 0} className="text-white" />
              </div>
            </div>
          </div>

          {/* Right Panel - Payment Form (Light Theme) */}
          <div className="order-1 rounded-2xl bg-white p-8 lg:order-2">
            <div className="mx-auto max-w-md">
              {/* Pay with Link Button */}
              <Button className="mb-6 w-full rounded-lg bg-green-600 py-4 font-semibold text-white hover:bg-green-700">
                <Lock className="mr-2 h-5 w-5" />
                Pay with Link
              </Button>

              {/* Separator */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Or</span>
                </div>
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <Label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="rounded-lg border-gray-300 py-3 pl-10 focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <Label className="mb-2 block text-sm font-medium text-gray-700">
                  Payment method
                </Label>

                {/* Card Information */}
                <div className="mb-4">
                  <Label htmlFor="card" className="mb-2 block text-sm font-medium text-gray-700">
                    Card information
                  </Label>
                  <div className="relative">
                    <CreditCard className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                    <Input
                      id="card"
                      placeholder="1234 1234 1234 1234"
                      className="rounded-lg border-gray-300 py-3 pr-16 pl-10 focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                    />
                    <div className="absolute top-1/2 right-3 flex -translate-y-1/2 transform gap-1">
                      <div className="h-4 w-6 rounded-sm bg-blue-600"></div>
                      <div className="h-4 w-6 rounded-sm bg-red-600"></div>
                      <div className="h-4 w-6 rounded-sm bg-yellow-600"></div>
                    </div>
                  </div>
                </div>

                {/* Expiration and CVC */}
                <div className="mb-4 grid grid-cols-2 gap-4">
                  <div>
                    <Label
                      htmlFor="expiry"
                      className="mb-2 block text-sm font-medium text-gray-700"
                    >
                      MM/YY
                    </Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      className="rounded-lg border-gray-300 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvc" className="mb-2 block text-sm font-medium text-gray-700">
                      CVC
                    </Label>
                    <Input
                      id="cvc"
                      placeholder="CVC"
                      className="rounded-lg border-gray-300 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Cardholder Name */}
                <div className="mb-4">
                  <Label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                    Cardholder name
                  </Label>
                  <div className="relative">
                    <User className="absolute top-1/2 left-3 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                    <Input
                      id="name"
                      placeholder="Full name on card"
                      value={cardholderName}
                      onChange={(e) => setCardholderName(e.target.value)}
                      className="rounded-lg border-gray-300 py-3 pl-10 focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                </div>

                {/* Country */}
                <div className="mb-6">
                  <Label htmlFor="country" className="mb-2 block text-sm font-medium text-gray-700">
                    Country or region
                  </Label>
                  <select
                    id="country"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-3 focus:border-orange-500 focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="US">United States</option>
                    <option value="DE">Germany</option>
                    <option value="GB">United Kingdom</option>
                    <option value="FR">France</option>
                  </select>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="mb-6 space-y-4">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={saveInfo}
                    onChange={(e) => setSaveInfo(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    aria-label="Save my information for faster checkout"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-700">
                      Save my information for faster checkout
                    </span>
                    <p className="text-xs text-gray-500">
                      Pay securely at JUNO Store and everywhere Link is accepted.
                    </p>
                  </div>
                </label>

                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={isBusiness}
                    onChange={(e) => setIsBusiness(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                    aria-label="I'm purchasing as a business"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    I&apos;m purchasing as a business
                  </span>
                </label>
              </div>

              {/* Pay Button */}
              {!paymentData && (
                <Button
                  className="w-full rounded-lg bg-yellow-500 py-4 text-lg font-semibold text-black hover:bg-yellow-600"
                  disabled={!canGoToPayment}
                  onClick={(e) => {
                    e.preventDefault()
                    void initiatePaymentIntent('stripe')
                  }}
                >
                  Pay
                </Button>
              )}

              {/* Stripe Elements */}
              <Suspense
                fallback={
                  <div>
                    <LoadingSpinner />
                  </div>
                }
              >
                {paymentData &&
                paymentData?.['clientSecret'] &&
                typeof paymentData['clientSecret'] === 'string' ? (
                  <div className="mt-6">
                    {error && (
                      <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                        {error}
                      </div>
                    )}
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
                            fontFamily: 'Geist, sans-serif',
                            fontSizeBase: '16px',
                            fontWeightBold: '600',
                            fontWeightNormal: '500',
                          },
                        },
                        clientSecret: paymentData['clientSecret'],
                      }}
                      stripe={stripe}
                    >
                      <CheckoutForm
                        customerEmail={email}
                        setProcessingPayment={setProcessingPayment}
                      />
                    </Elements>
                    <Button
                      variant="ghost"
                      className="mt-4 w-full text-gray-600"
                      onClick={() => setPaymentData(null)}
                    >
                      Cancel payment
                    </Button>
                  </div>
                ) : null}
              </Suspense>

              {/* Footer */}
              <div className="mt-8 text-center">
                <p className="mb-2 text-xs text-gray-500">Powered by Stripe</p>
                <div className="flex justify-center gap-4 text-xs text-gray-500">
                  <Link href="/terms" className="hover:text-gray-700">
                    Terms
                  </Link>
                  <Link href="/privacy" className="hover:text-gray-700">
                    Privacy
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
