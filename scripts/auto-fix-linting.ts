#!/usr/bin/env bun
/**
 * Automatic Linting Error Detection and Fixing
 *
 * This script:
 * 1. Detects TypeScript errors
 * 2. Detects ESLint errors
 * 3. Auto-fixes what can be fixed
 * 4. Reports what needs manual attention
 */

import { $ } from 'bun'
import { readFileSync, writeFileSync } from 'fs'
import { glob } from 'glob'

console.log('🔍 Auto-fixing linting errors...\n')

// Step 1: Run ESLint auto-fix
console.log('📝 Step 1: Auto-fixing ESLint issues...')
try {
  const lintResult = await $`bun run lint:fix`.quiet()
  if (lintResult.exitCode === 0) {
    console.log('✅ ESLint auto-fixes applied')
  } else {
    console.log('⚠️  Some ESLint issues could not be auto-fixed')
  }
} catch (error) {
  console.log('⚠️  ESLint auto-fix encountered issues')
}

// Step 2: Format code
console.log('\n💅 Step 2: Formatting code...')
try {
  await $`bun run format`.quiet()
  console.log('✅ Code formatted')
} catch (error) {
  console.log('⚠️  Formatting encountered issues')
}

// Step 3: Check for remaining TypeScript errors
console.log('\n🔎 Step 3: Checking TypeScript errors...')
try {
  const typecheckResult = await $`bun run typecheck`.quiet()
  if (typecheckResult.exitCode === 0) {
    console.log('✅ No TypeScript errors found')
  } else {
    const output = typecheckResult.stderr.toString() + typecheckResult.stdout.toString()
    const errorCount = (output.match(/error TS/g) || []).length
    console.log(`⚠️  Found ${errorCount} TypeScript errors (see output above)`)
    console.log('   These may need manual fixes')
  }
} catch (error) {
  console.log('⚠️  TypeScript check encountered issues')
}

// Step 4: Check for remaining ESLint errors
console.log('\n🔎 Step 4: Checking remaining ESLint issues...')
try {
  const lintCheckResult = await $`bun run lint`.quiet()
  if (lintCheckResult.exitCode === 0) {
    console.log('✅ No ESLint errors found')
  } else {
    const output = lintCheckResult.stderr.toString() + lintCheckResult.stdout.toString()
    const warningCount = (output.match(/Warning:/g) || []).length
    const errorCount = (output.match(/Error:/g) || []).length
    console.log(`⚠️  Found ${errorCount} errors and ${warningCount} warnings`)
    console.log('   Some may need manual fixes')
  }
} catch (error) {
  console.log('⚠️  ESLint check encountered issues')
}

console.log('\n✅ Auto-fix complete!')
console.log('📋 Summary:')
console.log('   - ESLint auto-fixes: Applied')
console.log('   - Code formatting: Applied')
console.log('   - Manual fixes may be needed for remaining TypeScript/ESLint errors')
console.log('\n💡 Tip: Run `bun run check` to see all remaining issues')
