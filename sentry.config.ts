/**
 * Sentry Configuration
 * Unified configuration for client, server, and edge runtimes
 */

import * as Sentry from '@sentry/nextjs'

const SENTRY_DSN = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN

// Base config for all environments
const baseConfig = {
  dsn: SENTRY_DSN,
  tracesSampleRate: 1.0,
  debug: false,
}

// Client-specific config with replay
const clientConfig = {
  ...baseConfig,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
}

// Server config (no replay)
const serverConfig = {
  ...baseConfig,
}

// Client-side initialization
export function initSentryClient() {
  if (typeof window !== 'undefined') {
    Sentry.init(clientConfig)
  }
}

// Server-side initialization
export function initSentryServer() {
  Sentry.init(serverConfig)
}

// Edge runtime initialization
export function initSentryEdge() {
  Sentry.init(serverConfig)
}

// Auto-initialize based on environment
if (typeof window !== 'undefined') {
  initSentryClient()
} else {
  initSentryServer()
}
