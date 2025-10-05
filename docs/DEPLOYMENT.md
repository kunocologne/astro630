# 🚀 JUNO Deployment Guide

Deploy your JUNO e-commerce store to production in minutes.

---

## Table of Contents

1. [Vercel Deployment (Recommended)](#vercel-deployment)
2. [Railway Deployment](#railway-deployment)
3. [Docker Deployment](#docker-deployment)
4. [Environment Variables](#environment-variables)
5. [Database Options](#database-options)
6. [Post-Deployment](#post-deployment)
7. [Troubleshooting](#troubleshooting)

---

## Vercel Deployment (Recommended)

Vercel is the easiest way to deploy Next.js apps with zero configuration.

### Prerequisites

- GitHub/GitLab/Bitbucket account
- Vercel account ([vercel.com](https://vercel.com))
- PostgreSQL database (we'll set this up)

### Method 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/juno)

1. Click "Deploy" button
2. Connect your GitHub account
3. Name your project
4. Click "Deploy"
5. Add environment variables (see below)
6. Add database (see below)

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy from project root
cd /path/to/juno
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Select your account
# - Link to existing project? No
# - What's your project's name? juno (or custom name)
# - In which directory is your code located? ./
# - Want to override settings? No

# Deploy to production
vercel --prod
```

### Method 3: GitHub Integration

1. Push code to GitHub:
   ```bash
   git remote add origin https://github.com/yourusername/juno.git
   git push -u origin main
   ```

2. Go to [vercel.com/new](https://vercel.com/new)
3. Click "Import Project"
4. Select your GitHub repository
5. Configure:
   - **Framework Preset:** Next.js
   - **Root Directory:** ./
   - **Build Command:** `bun run build` or `npm run build`
   - **Output Directory:** `.next`
6. Add environment variables (see below)
7. Click "Deploy"

---

## Database Options for Production

### Option 1: Vercel Postgres (Easiest)

**Pros:** Integrated, automatic connection, great for Next.js  
**Cons:** Paid after free tier

1. Go to your Vercel project
2. Click **Storage** tab
3. Click **Create Database** → **Postgres**
4. Name it (e.g., "juno-db")
5. Select region (same as your app)
6. Click **Create**
7. Click **Connect** → Select your project
8. Environment variables automatically added! ✅

**That's it!** `DATABASE_URI` is now set.

### Option 2: Supabase (Free Forever)

**Pros:** Free tier is generous, easy to use  
**Cons:** Requires manual connection string

1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Go to **Settings → Database**
4. Copy **Connection String** (Connection pooling mode)
5. In Vercel:
   - Go to **Settings → Environment Variables**
   - Add `DATABASE_URI` = `postgresql://postgres.[PROJECT_ID]:[PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:5432/postgres`

### Option 3: Neon (Serverless)

**Pros:** Serverless, scales to zero, free tier  
**Cons:** Manual setup

1. Go to [neon.tech](https://neon.tech)
2. Create project
3. Copy connection string
4. In Vercel:
   - Add `DATABASE_URI` = connection string

### Option 4: Railway

**Pros:** Simple, good free tier  
**Cons:** Requires Railway account

1. Go to [railway.app](https://railway.app)
2. New Project → PostgreSQL
3. Copy connection string
4. Add to Vercel environment variables

---

## Environment Variables

### Required Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

```env
# Database (from your chosen provider)
DATABASE_URI=postgresql://...

# Payload CMS
PAYLOAD_SECRET=<generate-random-32-chars>
PAYLOAD_PUBLIC_SERVER_URL=https://your-domain.vercel.app

# Next.js Public
NEXT_PUBLIC_SERVER_URL=https://your-domain.vercel.app

# Preview
PREVIEW_SECRET=<any-random-string>

# Stripe (get from stripe.com/dashboard)
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOKS_SIGNING_SECRET=whsec_...
```

### Generate Secrets

```bash
# PAYLOAD_SECRET
openssl rand -base64 32

# Or use this script
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### Using Vercel CLI

```bash
# Add environment variable for production
vercel env add PAYLOAD_SECRET production

# When prompted, paste your value

# Add for preview/development too
vercel env add PAYLOAD_SECRET preview
vercel env add PAYLOAD_SECRET development
```

### Environment Variable Scope

- **Production:** Used in production deployments
- **Preview:** Used in preview (PR) deployments
- **Development:** Used with `vercel dev`

**Tip:** Add all variables to all three environments.

---

## Stripe Webhook Configuration

### Step 1: Create Webhook in Stripe

1. Go to [Stripe Dashboard → Webhooks](https://dashboard.stripe.com/webhooks)
2. Click **Add endpoint**
3. Enter: `https://your-domain.vercel.app/api/stripe/webhooks`
4. Select events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Click **Add endpoint**
6. Copy **Signing secret** (starts with `whsec_`)

### Step 2: Add to Vercel

1. Go to Vercel → Settings → Environment Variables
2. Add `STRIPE_WEBHOOKS_SIGNING_SECRET` = `whsec_...`
3. Redeploy: `vercel --prod` or trigger new deployment

### Step 3: Test Webhook

1. Visit your store: `https://your-domain.vercel.app`
2. Add product to cart
3. Complete checkout with test card: `4242 4242 4242 4242`
4. Check Stripe Dashboard → Webhooks → Events
5. Should see successful events ✅

---

## Post-Deployment Checklist

### 1. Create Admin User

1. Visit: `https://your-domain.vercel.app/admin`
2. Create your first admin account
3. Login

### 2. Add Products

1. Go to admin → **Collections → Products**
2. Click **Create New**
3. Fill in product details
4. Upload images
5. Publish

### 3. Test Checkout

1. Visit your store
2. Add product to cart
3. Complete checkout with test card
4. Verify order in admin panel

### 4. Configure DNS (Custom Domain)

In Vercel Dashboard:

1. Go to **Settings → Domains**
2. Click **Add Domain**
3. Enter your domain (e.g., `mystore.com`)
4. Follow DNS instructions:
   - Add CNAME record to your DNS provider
   - Or use Vercel nameservers
5. Wait for DNS propagation (5-60 minutes)
6. Update environment variables:
   ```env
   PAYLOAD_PUBLIC_SERVER_URL=https://mystore.com
   NEXT_PUBLIC_SERVER_URL=https://mystore.com
   ```
7. Redeploy

### 5. Update Stripe Webhook

1. Go to Stripe Dashboard → Webhooks
2. Update endpoint URL to your custom domain
3. Copy new signing secret
4. Update `STRIPE_WEBHOOKS_SIGNING_SECRET` in Vercel

### 6. Enable Analytics (Optional)

```bash
# Install Vercel Analytics
npm install @vercel/analytics

# Add to src/app/(app)/layout.tsx
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 7. Set Up Monitoring

- **Vercel Logs:** Dashboard → Logs
- **Uptime Monitoring:** [upptime.js.org](https://upptime.js.org)
- **Error Tracking:** [sentry.io](https://sentry.io)

---

## Railway Deployment

Alternative to Vercel, includes database.

### Step 1: Create Account

1. Go to [railway.app](https://railway.app)
2. Sign up with GitHub

### Step 2: Deploy

```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Initialize
railway init

# Add PostgreSQL
railway add --plugin postgresql

# Deploy
railway up
```

### Step 3: Configure

1. Go to Railway dashboard
2. Click your project → **Variables**
3. Add environment variables (see above)
4. Add custom domain in **Settings → Domains**

---

## Docker Deployment

For self-hosting or VPS deployment.

### Step 1: Create Dockerfile

```dockerfile
# Already included in project root
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build application
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

### Step 2: Build Image

```bash
docker build -t juno:latest .
```

### Step 3: Run Container

```bash
docker run -d \
  -p 3000:3000 \
  -e DATABASE_URI="postgresql://..." \
  -e PAYLOAD_SECRET="..." \
  -e NEXT_PUBLIC_SERVER_URL="https://yourdomain.com" \
  --name juno \
  juno:latest
```

### Step 4: Using Docker Compose

```yaml
# docker-compose.yml
version: '3.8'

services:
  postgres:
    image: postgres:14-alpine
    environment:
      POSTGRES_DB: juno
      POSTGRES_USER: juno
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      DATABASE_URI: postgresql://juno:password@postgres:5432/juno
      PAYLOAD_SECRET: your-secret-key
      NEXT_PUBLIC_SERVER_URL: http://localhost:3000
    depends_on:
      - postgres

volumes:
  postgres_data:
```

```bash
docker-compose up -d
```

---

## Troubleshooting

### Build Fails on Vercel

```
Error: Command "npm run build" exited with 1
```

**Solutions:**

1. **Check build logs:**
   - Go to Vercel Dashboard → Deployments → Failed Build
   - Click to see full logs

2. **Test locally:**
   ```bash
   npm run build
   ```

3. **Common issues:**
   - Missing environment variables
   - TypeScript errors
   - ESLint errors

4. **Ignore errors temporarily:**
   ```js
   // next.config.js
   eslint: {
     ignoreDuringBuilds: true,
   },
   typescript: {
     ignoreBuildErrors: true,
   },
   ```

### Database Connection Error in Production

```
Error: connect ECONNREFUSED
```

**Solutions:**

1. Verify `DATABASE_URI` is set in Vercel
2. Check database allows connections from Vercel IPs
3. Use connection pooling mode (for Supabase)
4. Check SSL mode: `?sslmode=require`

### Stripe Webhooks Not Working

**Solutions:**

1. Check webhook endpoint URL is correct
2. Verify `STRIPE_WEBHOOKS_SIGNING_SECRET` is set
3. Check Stripe Dashboard → Webhooks → Events for errors
4. Test endpoint: `curl https://yourdomain.com/api/stripe/webhooks`

### Images Not Loading

**Solutions:**

1. Check `next.config.js` image domains
2. Use Vercel Blob for image storage
3. Configure Cloudinary or Uploadthing

### Slow Performance

**Solutions:**

1. Enable Vercel Edge Network (automatic)
2. Use ISR (Incremental Static Regeneration)
3. Optimize images with `next/image`
4. Enable compression in `next.config.js`

---

## Performance Optimization

### 1. Enable Edge Runtime

```typescript
// src/app/(app)/page.tsx
export const runtime = 'edge'
```

### 2. Use ISR for Product Pages

```typescript
// src/app/(app)/products/[slug]/page.tsx
export const revalidate = 3600 // Revalidate every hour
```

### 3. Optimize Images

```typescript
// Already configured in next.config.js
images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [640, 750, 828, 1080, 1200, 1920],
}
```

### 4. Enable Caching

```typescript
// src/app/(app)/api/products/route.ts
export const dynamic = 'force-static'
export const revalidate = 3600
```

---

## Security Checklist

- [x] Use environment variables for secrets
- [x] Enable HTTPS (automatic on Vercel)
- [x] Set secure headers in `next.config.js`
- [x] Use Stripe webhook signing
- [x] Validate environment variables
- [x] Set up CORS properly
- [x] Use production Stripe keys
- [x] Enable rate limiting (via Vercel)

---

## Next Steps

✅ **Your store is live!**

1. **Monitor:** Check Vercel Analytics
2. **SEO:** Add to Google Search Console
3. **Marketing:** Share your store!
4. **Support:** Join our Discord

---

## Need Help?

- 📧 Email: support@juno.dev
- 💬 Discord: [Join Community](https://discord.gg/juno)
- 📖 Docs: [Full Documentation](./README.md)

---

**Congratulations on your deployment! 🎉**

