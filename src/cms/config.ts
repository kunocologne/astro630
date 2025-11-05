import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'

import { Users } from './collections/Users'
import { Pages } from './collections/Pages'
import { Media } from './collections/Media'
// ProductsCollection is imported and used by the ecommerce plugin in src/plugins/index.ts
import { Categories } from './collections/Categories'
import { Events } from './collections/Events'
import { Gallery } from './globals/Gallery'
import { Charity } from './globals/Charity'
import { plugins } from '../plugins'
import { Dashboard } from '../components/cms/Dashboard'
import { getPayloadSecret } from '../lib/utils/env-validation'

// Database adapter configuration
const databaseURL = process.env.DATABASE_URL || process.env.DATABASE_URI || 'file:./database.sqlite'
const isPostgres = databaseURL.startsWith('postgres')

// Cache the secret in a global that persists across module reloads
// This helps prevent crypto errors when Next.js hot reloads modules
declare global {
  var __payloadSecretCache: string | undefined
}

/**
 * Get PAYLOAD_SECRET with persistent caching and runtime validation
 * Uses global cache that survives module reloads during hot reload
 */
function getCachedSecret(): string {
  // Use global cache if available (persists across hot reloads)
  if (global.__payloadSecretCache) {
    // Verify env var is still available (in case .env.local was changed)
    const currentSecret = process.env.PAYLOAD_SECRET
    if (currentSecret && currentSecret.trim().length >= 32) {
      return global.__payloadSecretCache
    }
    // If env changed, clear cache and re-validate
    global.__payloadSecretCache = undefined
  }

  // Validate and cache the secret
  try {
    const secret = getPayloadSecret()
    // Store in global cache to survive module reloads
    global.__payloadSecretCache = secret
    return secret
  } catch (error) {
    // Enhanced error message with actionable steps
    const err = error as Error
    console.error('\n' + '='.repeat(60))
    console.error('❌ PAYLOAD_SECRET Validation Failed')
    console.error('='.repeat(60))
    console.error(err.message)
    console.error('\n📋 Quick Fix:')
    console.error('   1. Check .env.local exists in project root')
    console.error('   2. Verify PAYLOAD_SECRET is set (at least 32 characters)')
    console.error('   3. Restart the development server: bun dev')
    console.error('\n💡 Generate a new secret:')
    console.error(
      "   node -e \"console.log(require('crypto').randomBytes(32).toString('base64'))\"",
    )
    console.error('='.repeat(60) + '\n')
    throw error
  }
}

// Validate PAYLOAD_SECRET (required for password hashing and session encryption)
// This throws with a clear error message if invalid, preventing runtime crypto errors
const finalSecret = getCachedSecret()

const dbAdapter = isPostgres
  ? postgresAdapter({
      pool: {
        connectionString: databaseURL,
      },
      migrationDir: path.resolve(__dirname, './migrations'),
    })
  : sqliteAdapter({
      client: {
        url: databaseURL,
      },
      migrationDir: path.resolve(__dirname, './migrations'),
    })

export default buildConfig({
  admin: {
    user: 'users',
    meta: {
      titleSuffix: '- astro CMS',
    },
    components: {
      // @ts-expect-error - Dashboard component type is compatible but TypeScript can't infer it
      beforeDashboard: [Dashboard],
    },
  },
  collections: [
    Users,
    Pages,
    Media,
    // ProductsCollection is added by the ecommerce plugin via productsCollectionOverride
    Categories,
    Events,
    // Orders, Cart, and other ecommerce collections are added by the ecommerce plugin
  ],
  globals: [Charity, Gallery],
  db: dbAdapter,
  editor: lexicalEditor({}),
  secret: finalSecret,
  plugins,
  typescript: {
    outputFile: path.resolve(__dirname, '../types/payload-types.ts'),
  },
})
