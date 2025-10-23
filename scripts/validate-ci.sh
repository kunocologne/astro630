#!/bin/bash

# Pre-push CI validation script
# Run this locally to ensure your code will pass GitHub CI

set -e  # Exit on any error

echo "🚀 Running CI validation checks..."
echo ""

# Function to print success
success() {
  echo "✅ $1"
}

# Function to print error
error() {
  echo "❌ $1"
  exit 1
}

# Test 1: TypeCheck
echo "📝 Test 1/5: TypeScript Check..."
bun run typecheck && success "TypeScript check passed" || error "TypeScript check failed"
echo ""

# Test 2: Documentation
echo "📚 Test 2/5: Documentation Check..."
required_files=(
  "README.md"
  "CONTRIBUTING.md"
  "LICENSE"
  "docs/README.md"
  "docs/getting-started.md"
  "docs/DEPLOYMENT.md"
  "docs/quality-standards.md"
)

for file in "${required_files[@]}"; do
  if [ ! -f "$file" ]; then
    error "Missing required file: $file"
  fi
done
success "All documentation files present"
echo ""

# Test 3: Security Check
echo "🔒 Test 3/5: Security Check..."
if grep -q "\.env" .gitignore && grep -q "database.sqlite" .gitignore; then
  success "Sensitive files properly ignored"
else
  error ".gitignore missing sensitive file patterns"
fi
echo ""

# Test 4: Linting (non-blocking)
echo "🔍 Test 4/5: Linting Check (warnings allowed)..."
bun run lint || echo "⚠️  Linting warnings found (non-blocking)"
success "Linting check completed"
echo ""

# Test 5: Build Check
echo "🏗️  Test 5/5: Production Build..."
echo "⏳ This may take a minute..."
if bun run build > /tmp/build.log 2>&1; then
  success "Build completed successfully"
else
  error "Build failed - check /tmp/build.log for details"
fi
echo ""

echo "🎉 All CI checks passed! Safe to push to GitHub."
echo ""
echo "📊 Summary:"
echo "  ✅ TypeScript: No errors"
echo "  ✅ Documentation: Complete"
echo "  ✅ Security: Configured"
echo "  ✅ Linting: Passed (with warnings)"
echo "  ✅ Build: Success"
echo ""
echo "Run 'git push' to deploy!"
