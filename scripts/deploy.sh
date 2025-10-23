#!/bin/bash

# Manual Deployment Script
# This script ensures all checks pass before deploying

set -e  # Exit on any error

echo "🚀 Starting manual deployment process..."

# Step 1: Run all checks
echo "🔍 Running pre-deployment checks..."
bun run check-and-fix

if [ $? -ne 0 ]; then
  echo "❌ Pre-deployment checks failed. Please fix issues before deploying."
  exit 1
fi

# Step 2: Build the project
echo "🔨 Building project..."
bun run build

if [ $? -ne 0 ]; then
  echo "❌ Build failed. Please fix build issues before deploying."
  exit 1
fi

# Step 3: Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment completed successfully!"
