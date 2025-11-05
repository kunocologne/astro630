# 🔧 Automatic Linting Error Detection & Fixing

## What Are These Errors?

When you see errors in the **Problems** tab in Cursor/VS Code, they fall into these categories:

1. **TypeScript Errors** (`tsc`) - Type checking issues
2. **ESLint Errors** - Code quality and style issues
3. **Build Errors** - Issues that prevent compilation
4. **Production Errors** - Runtime errors in production

## Automatic Detection

I now automatically check for these errors:

### ✅ After Every Code Change

- Run `read_lints` to detect all linting errors
- Fix TypeScript errors immediately
- Fix ESLint warnings automatically
- Remove unused imports/variables

### ✅ Before Committing

- Run `bun run check` to ensure clean state
- Auto-fix what can be fixed
- Report what needs manual attention

## How to Use

### Quick Fix Command

```bash
bun run auto-fix
```

This automatically:

1. ✅ Auto-fixes ESLint issues
2. ✅ Formats code with Prettier
3. ✅ Checks TypeScript errors
4. ✅ Reports what needs manual fixes

### Manual Check

```bash
bun run check        # Check everything
bun run typecheck    # Check TypeScript only
bun run lint         # Check ESLint only
bun run lint:fix     # Auto-fix ESLint issues
```

## What Gets Auto-Fixed

### ✅ Automatically Fixed:

- Unused imports
- Unused variables (prefixed with `_`)
- Code formatting
- Simple type assertions
- ESLint auto-fixable rules

### ⚠️ Needs Manual Attention:

- Complex TypeScript type errors
- Missing type definitions
- Logic errors
- Missing dependencies

## My Workflow

When you ask me to make changes, I will:

1. **Before Changes**: Check for existing errors
2. **Make Changes**: Write code following best practices
3. **After Changes**: Automatically check and fix linting errors
4. **Report**: Tell you if anything needs your attention

## Common Issues & Fixes

### Unused Imports

```typescript
// ❌ Before
import { Button } from '@/components/ui/button' // Not used

// ✅ After
// Removed automatically
```

### Unused Variables

```typescript
// ❌ Before
const [isScrolled, setIsScrolled] = useState(false) // isScrolled not used

// ✅ After
const [_isScrolled, setIsScrolled] = useState(false) // Prefixed with _
```

### Type Errors

```typescript
// ❌ Before
function getImageUrl(image: any): string

// ✅ After
type MediaReference = string | { url?: string; filename?: string }
function getImageUrl(image: MediaReference): string
```

## Setup

Already configured in your project:

- ✅ ESLint config: `eslint.config.mjs`
- ✅ TypeScript config: `tsconfig.json`
- ✅ Prettier config: `.prettierrc`
- ✅ Auto-fix script: `scripts/auto-fix-linting.ts`

## Benefits

1. **No Manual Reporting** - I detect errors automatically
2. **Faster Fixes** - Auto-fix what can be fixed
3. **Consistent Code** - All code follows same standards
4. **Better Quality** - Catch errors before they cause issues

---

**Note**: I'll now automatically check for and fix these errors whenever I make code changes. You don't need to tell me about them manually anymore! 🎉
