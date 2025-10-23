#!/usr/bin/env node

/**
 * Template-Only Build Script
 * Builds only the templates without the full app to avoid Payload CMS issues
 */

import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

console.log('🚀 Building JUNO Templates (Template-Only Mode)...')

try {
  // Create output directory
  const outputDir = path.join(__dirname, '../dist/templates')
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true })
  }

  // Copy templates
  const templatesDir = path.join(__dirname, '../src/templates')
  execSync(`cp -r ${templatesDir}/* ${outputDir}/`, { stdio: 'inherit' })

  // Copy CMS toggle system
  const libDir = path.join(__dirname, '../src/lib')
  const distLibDir = path.join(outputDir, 'lib')
  if (!fs.existsSync(distLibDir)) {
    fs.mkdirSync(distLibDir, { recursive: true })
  }
  execSync(`cp -r ${libDir}/* ${distLibDir}/`, { stdio: 'inherit' })

  // Copy components
  const componentsDir = path.join(__dirname, '../src/components')
  const distComponentsDir = path.join(outputDir, 'components')
  if (!fs.existsSync(distComponentsDir)) {
    fs.mkdirSync(distComponentsDir, { recursive: true })
  }
  execSync(`cp -r ${componentsDir}/* ${distComponentsDir}/`, { stdio: 'inherit' })

  // Create template README
  const readme = `# JUNO Templates

## Available Templates

- **Portfolio Bold** - Creative, gradient-based design
- **SaaS Futuristic** - Clean, tech-focused layout  
- **Agency Corporate** - Professional, business-oriented

## CMS Toggle System

Each template includes a CMS toggle system that allows:

- **Static Mode**: Fast, simple static website
- **CMS Mode**: Full content management system
- **Easy Toggle**: Switch between modes via environment variables

## Usage

1. Copy desired template to your project
2. Set \`CMS_ENABLED=true/false\` in .env.local
3. Run \`bun dev\` to start development
4. Visit /admin to manage CMS settings

## Features

- ✅ Responsive design
- ✅ Accessibility compliant
- ✅ Performance optimized
- ✅ CMS toggle system
- ✅ Professional quality
`

  fs.writeFileSync(path.join(outputDir, 'README.md'), readme)

  console.log('✅ Templates built successfully!')
  console.log('📁 Output directory:', outputDir)
  console.log('🎯 CMS Toggle System included')
  console.log('📚 Documentation generated')
} catch (error) {
  console.error('❌ Build failed:', error.message)
  process.exit(1)
}
