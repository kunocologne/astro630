# ⚠️ IMPORTANT: Restart Required

## The Error You're Seeing

```
The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received undefined
```

This happens when `PAYLOAD_SECRET` is not loaded properly. **This error occurs most often after:**

- Making code changes (hot reload doesn't reload environment variables)
- Navigating between admin pages (Next.js can reload modules without env vars)
- Long-running development sessions (module cache can lose env vars)

## ✅ Solution

### Step 1: Stop the Server

Press `Ctrl+C` in your terminal where `bun dev` is running

### Step 2: Restart the Server

```bash
bun dev
```

### Step 3: Verify

- The server should start without errors
- Check terminal for any validation messages
- Go to `/admin` - it should work
- The error should be gone

## Why This Happens

1. **After Code Changes**: Next.js hot reload reloads modules but NOT environment variables
2. **Config Reload**: Payload config gets reloaded but `process.env.PAYLOAD_SECRET` might be undefined in new context
3. **Runtime Use**: When Payload tries to use the secret for crypto operations, it's undefined

**Root Cause**: Environment variables are loaded only at server startup, not during hot reload.

## Prevention

- Always restart after changing `.env.local`
- If you see this error (after code changes, navigation, or randomly), restart the server
- The improved validation will now show clearer error messages instead of cryptic crypto errors
- Runtime guards are in place to catch this early and provide actionable error messages

## Your PAYLOAD_SECRET

Your secret should be:

```
PAYLOAD_SECRET=your-secret-here (at least 32 characters)
```

**Requirements**:

- Minimum 32 characters
- No quotes around the value
- In `.env.local` file in project root
- Server must be restarted after adding/changing

## If It Still Fails After Restart

1. Check terminal for detailed error messages (now improved)
2. Verify `.env.local` exists in project root (same folder as `package.json`)
3. Check secret format:
   - ✅ `PAYLOAD_SECRET=abc123...` (no quotes)
   - ❌ `PAYLOAD_SECRET="abc123..."` (quotes will cause issues)
4. Verify no trailing spaces or newlines
5. Generate a new secret if needed:
   ```bash
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```
