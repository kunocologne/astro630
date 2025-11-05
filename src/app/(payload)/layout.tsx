/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. */
import '@payloadcms/next/css'
import config from '@payload-config'
import type { ServerFunctionClient } from 'payload'
import { handleServerFunctions, RootLayout } from '@payloadcms/next/layouts'
import React from 'react'
import { validateEnvVars } from '@/lib/utils/env-validation'

import { importMap } from './admin/importMap.js'
// import './custom.scss'

// Runtime validation: Check env vars are loaded (helps catch hot-reload issues)
if (typeof window === 'undefined') {
  // Server-side only
  const envCheck = validateEnvVars()
  if (!envCheck.valid) {
    console.warn('⚠️ Environment variables check failed. This may cause runtime errors.')
    console.warn('   Missing:', envCheck.missing.join(', '))
    console.warn('   Solution: Restart the development server (bun dev)')
  }
}

type Args = {
  children: React.ReactNode
}

const serverFunction: ServerFunctionClient = async function (args) {
  'use server'

  // Runtime guard: Verify PAYLOAD_SECRET is available before Payload uses it
  // This prevents crypto errors during hot reload or navigation
  if (typeof window === 'undefined') {
    const secret = process.env.PAYLOAD_SECRET
    if (!secret || secret.trim().length < 32) {
      const error = new Error(
        'PAYLOAD_SECRET is missing or invalid. This often happens after hot reload.\n' +
          'Please restart the development server: bun dev',
      )
      console.error('❌ Runtime PAYLOAD_SECRET Error:', error.message)
      throw error
    }
  }

  return handleServerFunctions({
    ...args,
    config,
    importMap,
  })
}

const Layout = ({ children }: Args) => (
  <RootLayout config={config} importMap={importMap} serverFunction={serverFunction}>
    {children}
  </RootLayout>
)

export default Layout
