import { AuthProvider } from '@/providers/Auth'
import { EcommerceProvider } from '@payloadcms/plugin-ecommerce/client/react'
import { stripeAdapterClient } from '@payloadcms/plugin-ecommerce/payments/stripe'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import React from 'react'

import { SonnerProvider } from '@/providers/Sonner'
import { HeaderThemeProvider } from './HeaderTheme'
import { ThemeProvider } from './Theme'

// Enterprise-grade QueryClient configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Cache data for 5 minutes
      staleTime: 5 * 60 * 1000,
      // Keep unused data in cache for 10 minutes
      gcTime: 10 * 60 * 1000,
      // Retry failed requests 3 times with exponential backoff
      retry: (failureCount, error) => {
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

export const Providers: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <HeaderThemeProvider>
            <SonnerProvider />
            <EcommerceProvider
              enableVariants={true}
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
        </AuthProvider>
      </ThemeProvider>
      {/* React Query Devtools - only in development */}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools 
          initialIsOpen={false} 
          position="bottom-right"
          buttonPosition="bottom-right"
        />
      )}
    </QueryClientProvider>
  )
}
