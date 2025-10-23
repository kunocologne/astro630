# 🚀 Quick Push Guide

## Before Pushing to GitHub

Run this ONE command:

```bash
bun run ci:validate
```

This checks everything GitHub will check (in ~5min).

## What Gets Tested

| Test          | Time | Can Fail?           |
| ------------- | ---- | ------------------- |
| TypeScript    | 45s  | ❌ Yes - BLOCKS     |
| Build         | 3min | ❌ Yes - BLOCKS     |
| Documentation | 15s  | ✅ No - Info only   |
| Security      | 10s  | ✅ No - Info only   |
| Linting       | 30s  | ✅ No - Warnings OK |

## If Tests Fail

### TypeScript Errors

```bash
bun run typecheck
# Fix the errors shown
```

### Build Errors

```bash
bun run build
# Check the error output
```

### Want to Fix Everything

```bash
bun run fix-all
```

## Ready to Push?

```bash
git add .
git commit -m "Your message"
git push
```

GitHub Actions will:

- ✅ Run in ~6min (70% faster than before)
- ✅ Use caching (faster on subsequent runs)
- ✅ Show clear pass/fail status
- ✅ Only block on critical errors

## Tip

Set up pre-push hook (optional):

```bash
echo "bun run prepush" > .git/hooks/pre-push
chmod +x .git/hooks/pre-push
```

Now TypeScript checks run automatically before every push!
