import type { Metadata } from 'next'

import { mergeOpenGraph } from '@/lib/utils/mergeOpenGraph'
import { headers as getHeaders } from 'next/headers.js'
import configPromise from '@payload-config'
// import { Order } from '@/types/payload-types'
import { getPayload } from 'payload'
import { redirect } from 'next/navigation'
import { AddressListing } from '@/features/addresses/AddressListing'
import { CreateAddressModal } from '@/features/addresses/CreateAddressModal'

export default async function AddressesPage() {
  const headers = await getHeaders()
  const payload = await getPayload({ config: configPromise })
  const { user } = await payload.auth({ headers })

  if (!user) {
    redirect(
      `/login?warning=${encodeURIComponent('Please login to access your account settings.')}`,
    )
  }

  try {
    await payload.find({
      collection: 'orders',
      limit: 5,
      user,
      overrideAccess: false,
      pagination: false,
      where: {
        customer: {
          equals: user?.id,
        },
      },
    })
  } catch (_error) {
    // when deploying this template on Payload Cloud, this page needs to build before the APIs are live
    // so swallow the error here and simply render the page with fallback data where necessary
    // in production you may want to redirect to a 404  page or at least log the error somewhere
    // console.error(_error)
  }

  return (
    <>
      <div className="rounded-lg border bg-primary-foreground p-8">
        <h1 className="mb-8 text-3xl font-medium">Addresses</h1>

        <div className="mb-8">
          <AddressListing />
        </div>

        <CreateAddressModal />
      </div>
    </>
  )
}

export const metadata: Metadata = {
  description: 'Manage your addresses.',
  openGraph: mergeOpenGraph({
    title: 'Addresses',
    url: '/account/addresses',
  }),
  title: 'Addresses',
}
