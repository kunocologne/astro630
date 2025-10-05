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
      <div className="py-12 w-full items-center justify-center">
        <div className="prose dark:prose-invert text-center max-w-none self-center mb-8">
          <p>Processing your payment...</p>
        </div>
        <LoadingSpinner />
      </div>
    )
  }

  if (cartIsEmpty) {
    return (
      <div className="prose dark:prose-invert py-12 w-full items-center">
        <p>Your cart is empty.</p>
        <Link href="/search">Continue shopping?</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          
          {/* Left Panel - Order Summary (Dark Theme) */}
          <div className="bg-gray-900 rounded-2xl p-8 text-white order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold">JUNO Store</h1>
            </div>

            {/* Currency Selection */}
            <div className="mb-8">
              <h3 className="text-sm font-medium text-gray-300 mb-4">Choose a currency:</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 border border-gray-700">
                  <input type="radio" name="currency" id="usd" className="w-4 h-4 text-orange-500" defaultChecked />
                  <label htmlFor="usd" className="flex items-center gap-2 text-white cursor-pointer">
                    <span className="text-lg">$</span>
                    <span className="font-semibold">{(cart?.subtotal || 0) / 100}</span>
                  </label>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-800 border border-gray-600">
                  <input type="radio" name="currency" id="eur" className="w-4 h-4 text-orange-500" />
                  <label htmlFor="eur" className="flex items-center gap-2 text-gray-400 cursor-pointer">
                    <span className="text-lg">€</span>
                    <span className="font-semibold">{((cart?.subtotal || 0) * 0.88 / 100).toFixed(2)}</span>
                  </label>
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-2">1 USD = 0.88 EUR</p>
            </div>

            {/* Product Details */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <ShoppingBag className="w-5 h-5 text-orange-400" />
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
                    <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 mb-4">
                      <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-700">
                        {image && typeof image !== 'string' && (
                          <Media className="relative" fill imgClassName="object-cover" resource={image} />
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-white">{title}</h4>
                        {variant && typeof variant === 'object' && (
                          <p className="text-sm text-gray-400">
                            {variant.options?.map((option) => {
                              if (typeof option === 'object') return option.label
                              return null
                            }).join(', ')}
                          </p>
                        )}
                        <p className="text-sm text-gray-400">Qty: {quantity}</p>
                      </div>
                      {typeof price === 'number' && (
                        <div className="text-right">
                          <Price amount={price} className="text-white font-semibold" />
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
              <div className="flex justify-between items-center text-2xl font-bold">
                <span>Total due</span>
                <Price amount={cart?.subtotal || 0} className="text-white" />
              </div>
            </div>
          </div>

          {/* Right Panel - Payment Form (Light Theme) */}
          <div className="bg-white rounded-2xl p-8 order-1 lg:order-2">
            <div className="max-w-md mx-auto">
              {/* Pay with Link Button */}
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-semibold mb-6">
                <Lock className="w-5 h-5 mr-2" />
                Pay with Link
              </Button>

              {/* Separator */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>

              {/* Email Input */}
              <div className="mb-6">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                  Email
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 py-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>

              {/* Payment Method */}
              <div className="mb-6">
                <Label className="text-sm font-medium text-gray-700 mb-2 block">Payment method</Label>
                
                {/* Card Information */}
                <div className="mb-4">
                  <Label htmlFor="card" className="text-sm font-medium text-gray-700 mb-2 block">
                    Card information
                  </Label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="card"
                      placeholder="1234 1234 1234 1234"
                      className="pl-10 pr-16 py-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1">
                      <div className="w-6 h-4 bg-blue-600 rounded-sm"></div>
                      <div className="w-6 h-4 bg-red-600 rounded-sm"></div>
                      <div className="w-6 h-4 bg-yellow-600 rounded-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Expiration and CVC */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="expiry" className="text-sm font-medium text-gray-700 mb-2 block">
                      MM/YY
                    </Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      className="py-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvc" className="text-sm font-medium text-gray-700 mb-2 block">
                      CVC
                    </Label>
                    <Input
                      id="cvc"
                      placeholder="CVC"
                      className="py-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Cardholder Name */}
                <div className="mb-4">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                    Cardholder name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <Input
                      id="name"
                      placeholder="Full name on card"
                      value={cardholderName}
                      onChange={(e) => setCardholderName(e.target.value)}
                      className="pl-10 py-3 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Country */}
                <div className="mb-6">
                  <Label htmlFor="country" className="text-sm font-medium text-gray-700 mb-2 block">
                    Country or region
                  </Label>
                  <select
                    id="country"
                    className="w-full py-3 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 bg-white"
                  >
                    <option value="US">United States</option>
                    <option value="DE">Germany</option>
                    <option value="GB">United Kingdom</option>
                    <option value="FR">France</option>
                  </select>
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4 mb-6">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={saveInfo}
                    onChange={(e) => setSaveInfo(e.target.checked)}
                    className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                    aria-label="Save my information for faster checkout"
                  />
                  <div>
                    <span className="text-sm font-medium text-gray-700">Save my information for faster checkout</span>
                    <p className="text-xs text-gray-500">Pay securely at JUNO Store and everywhere Link is accepted.</p>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isBusiness}
                    onChange={(e) => setIsBusiness(e.target.checked)}
                    className="mt-1 w-4 h-4 text-orange-500 border-gray-300 rounded focus:ring-orange-500"
                    aria-label="I'm purchasing as a business"
                  />
                  <span className="text-sm font-medium text-gray-700">I&apos;m purchasing as a business</span>
                </label>
              </div>

              {/* Pay Button */}
              {!paymentData && (
                <Button
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-4 rounded-lg font-semibold text-lg"
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
              <Suspense fallback={<div><LoadingSpinner /></div>}>
                {paymentData && paymentData?.['clientSecret'] && typeof paymentData['clientSecret'] === 'string' && (
                  <div className="mt-6">
                    {error && (
                      <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
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
                      className="w-full mt-4 text-gray-600"
                      onClick={() => setPaymentData(null)}
                    >
                      Cancel payment
                    </Button>
                  </div>
                )}
              </Suspense>

              {/* Footer */}
              <div className="mt-8 text-center">
                <p className="text-xs text-gray-500 mb-2">Powered by Stripe</p>
                <div className="flex justify-center gap-4 text-xs text-gray-500">
                  <Link href="/terms" className="hover:text-gray-700">Terms</Link>
                  <Link href="/privacy" className="hover:text-gray-700">Privacy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}