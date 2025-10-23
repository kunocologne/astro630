#!/usr/bin/env node

/**
 * Development Showcase Server
 * Runs the main showcase without Payload CMS issues
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('🚀 Starting JUNO Showcase Development Server...')

try {
  // Create a simple .env.local for showcase mode
  const envContent = `# JUNO Showcase Mode
CMS_ENABLED=false
NEXT_PUBLIC_SITE_URL=http://localhost:3000
DATABASE_URL=file:./database.sqlite
PAYLOAD_SECRET=showcase-mode
`

  const envPath = path.join(__dirname, '..', '.env.local')
  fs.writeFileSync(envPath, envContent)

  console.log('✅ Environment configured for showcase mode')
  console.log('🎯 CMS disabled for showcase')
  console.log('🚀 Starting development server...')

  // Start the development server
  execSync('bun dev', {
    stdio: 'inherit',
    cwd: path.join(__dirname, '..'),
  })
} catch (error) {
  console.error('❌ Failed to start showcase server:', error.message)
  process.exit(1)
}
