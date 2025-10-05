#!/bin/bash

# JUNO Project Cleanup Script
# Run this script to clean up build artifacts and temporary files

echo "🧹 Cleaning up JUNO project..."

# Remove build artifacts
echo "Removing .next build directory..."
rm -rf .next

# Remove cache directories
echo "Removing cache directories..."
rm -rf .cache
rm -rf .turbo
rm -rf node_modules/.cache

# Remove temporary files
echo "Removing temporary files..."
find . -name "*.tmp" -delete
find . -name "*.temp" -delete
find . -name ".DS_Store" -delete

# Remove TypeScript build info
echo "Removing TypeScript build info..."
rm -f *.tsbuildinfo
rm -f next-env.d.ts

# Remove logs
echo "Removing log files..."
find . -name "*.log" -delete

# Show final size
echo "✅ Cleanup complete!"
echo "📊 Current project size:"
du -sh .

echo ""
echo "💡 Tips to keep size down:"
echo "   • Run this script regularly during development"
echo "   • The .next directory will be recreated on next build"
echo "   • node_modules (1.4GB) is normal for this type of project"
echo "   • Consider using .gitignore to exclude build artifacts from git"
