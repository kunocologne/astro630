/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import type { Metadata } from 'next'

import config from '@payload-config'
import { RootPage, generatePageMetadata } from '@payloadcms/next/views'
import { importMap } from '../importMap'

// Runtime validation: Ensure PAYLOAD_SECRET is available before rendering admin
// This prevents crypto errors during hot reload or navigation
if (typeof window === 'undefined') {
  const secret = process.env.PAYLOAD_SECRET
  if (!secret || secret.trim().length < 32) {
    console.error('❌ PAYLOAD_SECRET is missing or invalid in admin page')
    console.error('   This often happens after hot reload or navigation')
    console.error('   Solution: Restart the development server (bun dev)')
    // Don't throw here - let the config module handle it with better error messages
  }
}

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = ({ params, searchParams }: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams })

const Page = ({ params, searchParams }: Args) =>
  RootPage({ config, params, searchParams, importMap })

export default Page
