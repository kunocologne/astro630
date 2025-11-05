/**
 * Safe wrapper for getPayload that validates PAYLOAD_SECRET at runtime
 * Prevents crypto errors during hot reload or navigation
 */
import { getPayload } from 'payload'
import type { Config } from 'payload'
import { getPayloadSecret } from './env-validation'

/**
 * Gets Payload instance with runtime secret validation
 * Use this instead of getPayload() directly to prevent runtime crypto errors
 */
export async function getPayloadSafe(config: Config | Promise<Config>) {
  // Validate secret is available before Payload tries to use it
  try {
    getPayloadSecret()
  } catch (error) {
    const err = error as Error
    console.error('❌ Runtime PAYLOAD_SECRET validation failed:', err.message)
    console.error('   This often happens after hot reload or navigation')
    console.error('   Solution: Restart the development server (bun dev)')
    throw new Error('PAYLOAD_SECRET is missing or invalid. Please restart the development server.')
  }

  // @ts-expect-error - Config type is compatible with getPayload, Payload internally sanitizes it
  return getPayload({ config })
}
