/**
 * Sentry Configuration
 * Unified configuration for client, server, and edge runtimes
 */

import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

const commonConfig: Sentry.NodeOptions = {
  dsn: SENTRY_DSN,
  tracesSampleRate: 1.0,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
}

// Client-side initialization
export function initSentryClient() {
  if (typeof window !== 'undefined') {
    Sentry.init(commonConfig)
  }
}

// Server-side initialization
export function initSentryServer() {
  Sentry.init(commonConfig)
}

// Edge runtime initialization
export function initSentryEdge() {
  Sentry.init(commonConfig)
}

// Auto-initialize based on environment
if (typeof window !== 'undefined') {
  initSentryClient()
} else {
  initSentryServer()
}
