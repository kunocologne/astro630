#!/usr/bin/env node

/**
 * Script to create the first admin user in Payload CMS
 * Usage: bun run scripts/create-admin.js
 */

import { getPayload } from 'payload'
import configPromise from '../src/payload.config.js'

async function createAdmin() {
  try {
    console.log('🔐 Initializing Payload...')
    const payload = await getPayload({ config: configPromise })

    // Check if any users exist
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length > 0) {
      console.log('⚠️  Users already exist. Use the Payload admin panel to create users.')
      console.log(`   Visit: http://localhost:3000/admin`)
      process.exit(0)
    }

    // Prompt for admin details
    console.log('\n📝 Creating first admin user...\n')

    // For now, we'll use environment variables or defaults
    // In a real scenario, you'd use readline or a CLI library
    const email = process.env.ADMIN_EMAIL || 'admin@example.com'
    const password = process.env.ADMIN_PASSWORD || 'admin123'
    const name = process.env.ADMIN_NAME || 'Admin User'

    console.log(`Creating admin with:`)
    console.log(`  Email: ${email}`)
    console.log(`  Name: ${name}`)
    console.log(`  Password: ${password}`)
    console.log(`\n⚠️  IMPORTANT: Change this password after first login!\n`)

    // Create the admin user
    const user = await payload.create({
      collection: 'users',
      data: {
        email,
        password,
        name,
        role: 'admin',
      },
    })

    console.log('✅ Admin user created successfully!')
    console.log(`\n📋 Login Details:`)
    console.log(`   Email: ${email}`)
    console.log(`   Password: ${password}`)
    console.log(`\n🌐 Access the admin panel:`)
    console.log(`   http://localhost:3000/admin`)
    console.log(`\n⚠️  Remember to change the password after first login!`)

    process.exit(0)
  } catch (error) {
    console.error('❌ Error creating admin user:', error)
    process.exit(1)
  }
}

createAdmin()
