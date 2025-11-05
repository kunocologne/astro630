'use client'

import { EcommerceProvider } from '@payloadcms/plugin-ecommerce/client/react'
import { stripeAdapterClient } from '@payloadcms/plugin-ecommerce/payments/stripe'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

import { SonnerProvider } from '@/providers/Sonner'
import { HeaderThemeProvider } from './HeaderTheme'

// Enterprise-grade QueryClient factory
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // Cache data for 5 minutes
        staleTime: 5 * 60 * 1000,
        // Keep unused data in cache for 10 minutes
        gcTime: 10 * 60 * 1000,
        // Retry failed requests 3 times with exponential backoff
        retry: (failureCount) => {
          if (failureCount < 3) {
            return true
          }
          return false
        },
        retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        // Refetch on window focus for real-time updates
        refetchOnWindowFocus: true,
        // Refetch on reconnect
        refetchOnReconnect: true,
        // Background refetch interval
        refetchInterval: false,
      },
      mutations: {
        // Retry mutations once
        retry: 1,
        // Retry delay for mutations
        retryDelay: 1000,
      },
    },
  })
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient()
  } else {
    // Browser: make a new query client if we don't already have one
    if (!browserQueryClient) browserQueryClient = makeQueryClient()
    return browserQueryClient
  }
}

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const queryClient = getQueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <HeaderThemeProvider>
        <SonnerProvider />
        <EcommerceProvider
          enableVariants={true}
          serverURL={
            process.env.NEXT_PUBLIC_SERVER_URL ||
            (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000')
          }
          api={{
            cartsFetchQuery: {
              depth: 2,
              populate: {
                products: {
                  slug: true,
                  title: true,
                  gallery: true,
                  inventory: true,
                },
                variants: {
                  title: true,
                  inventory: true,
                },
              },
            },
          }}
          paymentMethods={[
            stripeAdapterClient({
              publishableKey: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '',
            }),
          ]}
        >
          {children}
        </EcommerceProvider>
      </HeaderThemeProvider>
    </QueryClientProvider>
  )
}
