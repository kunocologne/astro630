/**
 * Environment Variable Validation Utilities
 * Ensures PAYLOAD_SECRET is available at runtime to prevent crypto errors
 */

/**
 * Validates PAYLOAD_SECRET is available and valid
 * Returns the secret if valid, throws descriptive error if not
 */
export function getPayloadSecret(): string {
  const secret = process.env.PAYLOAD_SECRET

  if (!secret) {
    const error = new Error(
      'PAYLOAD_SECRET environment variable is not set. ' +
        'Please add it to .env.local and restart the development server.',
    )
    console.error('❌ PAYLOAD_SECRET Error:', error.message)
    console.error('   Location: .env.local file in project root')
    console.error('   Required: At least 32 characters')
    throw error
  }

  const cleanSecret = secret.trim()

  if (cleanSecret === '' || cleanSecret === 'your-secret-here-change-in-production') {
    const error = new Error(
      'PAYLOAD_SECRET is set to a placeholder value. ' +
        'Please set a real secret in .env.local and restart the server.',
    )
    console.error('❌ PAYLOAD_SECRET Error:', error.message)
    throw error
  }

  if (cleanSecret.length < 32) {
    const error = new Error(
      `PAYLOAD_SECRET is too short (${cleanSecret.length} chars). ` +
        'Must be at least 32 characters. Please update .env.local and restart the server.',
    )
    console.error('❌ PAYLOAD_SECRET Error:', error.message)
    throw error
  }

  return cleanSecret
}

/**
 * Safe wrapper to get PAYLOAD_SECRET with fallback handling
 * Use this in runtime contexts where missing secret should be handled gracefully
 */
export function getPayloadSecretSafe(): string | null {
  try {
    return getPayloadSecret()
  } catch {
    return null
  }
}

/**
 * Validates environment variables are loaded
 * Useful for debugging env var loading issues
 */
export function validateEnvVars(): { valid: boolean; missing: string[] } {
  const required = ['PAYLOAD_SECRET']
  const missing: string[] = []

  for (const key of required) {
    if (!process.env[key] || process.env[key]?.trim() === '') {
      missing.push(key)
    }
  }

  if (missing.length > 0) {
    console.warn('⚠️ Missing environment variables:', missing.join(', '))
    console.warn('   Make sure .env.local exists and contains all required variables')
    console.warn('   Restart the development server after adding/changing .env.local')
  }

  return {
    valid: missing.length === 0,
    missing,
  }
}
