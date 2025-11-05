import type { Metadata } from 'next'

import { mergeOpenGraph } from '@/lib/utils/mergeOpenGraph'
import React from 'react'
import { ConfirmOrder } from '@/features/checkout/ConfirmOrder'

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function ConfirmOrderPage({
  searchParams: searchParamsPromise,
}: {
  searchParams: SearchParams
}) {
  const searchParams = await searchParamsPromise

  const _paymentIntent = searchParams.paymentId

  return (
    <div className="container flex min-h-[90vh] py-12">
      <ConfirmOrder />
    </div>
  )
}

export const metadata: Metadata = {
  description: 'Confirm order.',
  openGraph: mergeOpenGraph({
    title: 'Confirming order',
    url: '/checkout/confirm-order',
  }),
  title: 'Confirming order',
}
