#!/bin/bash

# 🔄 Initialize Migrations System
# This script sets up the migration infrastructure and creates the initial schema

set -e  # Exit on error

echo "🚀 Initializing Payload Migrations System..."
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
  echo "❌ Error: Must be run from project root"
  exit 1
fi

# Check if migrations directory exists
if [ ! -d "src/cms/migrations" ]; then
  echo "📁 Creating migrations directory..."
  mkdir -p src/cms/migrations
fi

# Check if DATABASE_URL is set
if [ -z "$DATABASE_URL" ]; then
  echo "⚠️  Warning: DATABASE_URL not set, using default SQLite"
  export DATABASE_URL="file:./database.sqlite"
fi

echo "📊 Current Database: $DATABASE_URL"
echo ""

# Check migration status
echo "🔍 Checking migration status..."
bun run migrate:status || echo "No migrations found yet"
echo ""

# Prompt user to create initial migration
echo "Would you like to create an initial migration? (y/n)"
read -r response

if [[ "$response" =~ ^[Yy]$ ]]; then
  echo ""
  echo "📝 Creating initial migration..."
  bun run migrate:create
  
  echo ""
  echo "✅ Initial migration created!"
  echo ""
  echo "Next steps:"
  echo "  1. Review migration files in src/cms/migrations/"
  echo "  2. Run: bun run migrate"
  echo "  3. Check status: bun run migrate:status"
else
  echo ""
  echo "✅ Migration system ready!"
  echo ""
  echo "To create a migration later, run:"
  echo "  bun run migrate:create"
fi

echo ""
echo "📚 Full documentation: docs/migrations.md"
echo ""



