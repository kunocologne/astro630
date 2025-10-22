#!/usr/bin/env node

// Simple template build script
// This builds only the templates without the full app

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building JUNO Templates...');

try {
  // Create a simple template build
  const templatesDir = path.join(__dirname, '../src/templates');
  const outputDir = path.join(__dirname, '../dist/templates');
  
  // Create output directory
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Copy templates
  execSync(`cp -r ${templatesDir}/* ${outputDir}/`, { stdio: 'inherit' });
  
  console.log('✅ Templates built successfully!');
  console.log('📁 Output directory:', outputDir);
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}