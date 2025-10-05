# 🚀 JUNO Setup Guide

Complete setup instructions to get JUNO running locally and in production.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Local Development Setup](#local-development-setup)
3. [Database Setup](#database-setup)
4. [Stripe Configuration](#stripe-configuration)
5. [Email Configuration](#email-configuration)
6. [First Admin User](#first-admin-user)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before you begin, ensure you have:

### Required
- **Node.js 18+** or **Bun** (recommended)
  ```bash
  # Check version
  node --version  # should be v18.20.2 or higher
  # or
  bun --version   # should be v1.0.0 or higher
  ```

- **PostgreSQL 14+**
  - Local installation, or
  - Managed service (Supabase, Neon, Vercel Postgres)

- **Git** for version control

### Recommended
- **Stripe Account** (for payments)
- **Resend Account** (for emails)
- **VS Code** with these extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript

---

## Local Development Setup

### Step 1: Clone Repository

```bash
# Clone the repository
git clone https://github.com/yourusername/juno.git
cd juno
```

### Step 2: Install Dependencies

```bash
# Using Bun (recommended - faster)
bun install

# OR using npm
npm install

# OR using pnpm
pnpm install
```

### Step 3: Environment Variables

```bash
# Copy environment template
cp env.example .env
```

Edit `.env` with your configuration:

```env
# Minimum required for local development
DATABASE_URI=postgresql://postgres:password@localhost:5432/juno
PAYLOAD_SECRET=your-random-secret-key
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
PREVIEW_SECRET=any-random-string
```

**Generate secure secrets:**
```bash
# Generate PAYLOAD_SECRET
openssl rand -base64 32

# Or use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### Step 4: Start Development Server

```bash
# Using Bun
bun dev

# OR using npm
npm run dev
```

Visit **http://localhost:3000** - you should see the homepage!

---

## Database Setup

JUNO uses PostgreSQL via Payload CMS. Choose one of these options:

### Option 1: Local PostgreSQL (Best for Development)

#### Install PostgreSQL

**macOS (Homebrew):**
```bash
brew install postgresql@14
brew services start postgresql@14
```

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

**Windows:**
Download from [postgresql.org](https://www.postgresql.org/download/windows/)

#### Create Database

```bash
# Connect to PostgreSQL
psql postgres

# Create database and user
CREATE DATABASE juno;
CREATE USER juno_user WITH PASSWORD 'your_password';
GRANT ALL PRIVILEGES ON DATABASE juno TO juno_user;
\q
```

#### Update .env

```env
DATABASE_URI=postgresql://juno_user:your_password@localhost:5432/juno
```

### Option 2: Supabase (Free, Managed)

1. Go to [supabase.com](https://supabase.com)
2. Create new project
3. Go to **Settings → Database**
4. Copy **Connection String (URI)** under "Connection pooling"
5. Update `.env`:

```env
DATABASE_URI=postgresql://postgres.[PROJECT_ID]:[PASSWORD]@aws-0-eu-central-1.pooler.supabase.com:5432/postgres
```

### Option 3: Neon (Serverless, Free)

1. Go to [neon.tech](https://neon.tech)
2. Create new project
3. Copy connection string
4. Update `.env`:

```env
DATABASE_URI=postgresql://[user]:[password]@[host]/[database]?sslmode=require
```

### Option 4: Vercel Postgres (Best for Production)

1. In Vercel dashboard, go to **Storage**
2. Click **Create Database** → **Postgres**
3. Connect to your project
4. Environment variables are automatically set!

### Verify Database Connection

```bash
# Start dev server - Payload will auto-create tables
bun dev
```

Check console for: `✓ Connected to Database` (in green)

---

## Stripe Configuration

### Step 1: Create Stripe Account

1. Go to [stripe.com](https://stripe.com)
2. Sign up for free account
3. Complete business information (can use test mode)

### Step 2: Get API Keys

1. Go to **Developers → API Keys**
2. Copy:
   - **Publishable key** (starts with `pk_test_`)
   - **Secret key** (click "Reveal" for `sk_test_`)

3. Add to `.env`:

```env
STRIPE_SECRET_KEY=sk_test_51Abc...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_51Abc...
```

### Step 3: Configure Webhooks

Webhooks allow Stripe to notify your app about payment events.

#### For Local Development

```bash
# Install Stripe CLI
# macOS
brew install stripe/stripe-cli/stripe

# Windows/Linux: https://stripe.com/docs/stripe-cli

# Login to Stripe
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/stripe/webhooks
```

Copy the webhook signing secret (starts with `whsec_`) and add to `.env`:

```env
STRIPE_WEBHOOKS_SIGNING_SECRET=whsec_abc123...
```

#### For Production

1. Go to **Developers → Webhooks**
2. Click **Add endpoint**
3. Enter: `https://yourdomain.com/api/stripe/webhooks`
4. Select events:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
   - `customer.subscription.created`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
5. Copy signing secret and add to Vercel environment variables

### Step 4: Test Payment

```bash
# Start dev server
bun dev

# In another terminal, forward webhooks
stripe listen --forward-to localhost:3000/api/stripe/webhooks

# Visit http://localhost:3000/shop
# Add product to cart
# Go to checkout

# Use test card: 4242 4242 4242 4242
# Any future expiry date
# Any 3-digit CVC
```

---

## Email Configuration

JUNO can send transactional emails (order confirmations, password resets).

### Option 1: Resend (Recommended)

1. Go to [resend.com](https://resend.com)
2. Sign up (100 emails/day free)
3. Get API key
4. Add to `.env`:

```env
RESEND_API_KEY=re_abc123...
EMAIL_FROM=noreply@yourdomain.com
```

5. Update `src/lib/resend.ts` if needed

### Option 2: SMTP (Gmail, SendGrid, etc.)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=your-email@gmail.com
```

**Gmail users:** Create an [App Password](https://support.google.com/accounts/answer/185833)

### Option 3: Disable Emails (Development)

Comment out email sending code in:
- `src/collections/Users/hooks/sendPasswordReset.ts`
- Order confirmation emails

---

## First Admin User

### Create Admin Account

1. Start dev server: `bun dev`
2. Visit **http://localhost:3000/admin**
3. You'll see "Create your first admin user"
4. Fill in:
   - Email
   - Password (min 8 characters)
   - Confirm password
5. Click "Create"

### Access Admin Panel

- **URL:** http://localhost:3000/admin
- **Login:** Use email and password you just created

### Admin Features

- **Collections:** Manage products, pages, media
- **Dashboard:** View statistics
- **Account:** Update profile, change password

---

## Troubleshooting

### Port Already in Use

```bash
# Kill process on port 3000
# macOS/Linux:
lsof -ti:3000 | xargs kill -9

# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

### Database Connection Error

```
Error: connect ECONNREFUSED 127.0.0.1:5432
```

**Solutions:**
1. Make sure PostgreSQL is running:
   ```bash
   # macOS
   brew services list
   brew services restart postgresql@14
   
   # Linux
   sudo systemctl status postgresql
   sudo systemctl start postgresql
   ```

2. Check DATABASE_URI format:
   ```env
   postgresql://USER:PASSWORD@HOST:PORT/DATABASE
   ```

3. Test connection:
   ```bash
   psql "postgresql://user:pass@localhost:5432/juno"
   ```

### Build Errors

```bash
# Clean and reinstall
rm -rf .next node_modules
bun install
bun dev
```

### TypeScript Errors

```bash
# Regenerate types
bun run generate:types

# Check for errors
bun run typecheck
```

### Stripe Webhook Not Working

1. Make sure Stripe CLI is running:
   ```bash
   stripe listen --forward-to localhost:3000/api/stripe/webhooks
   ```

2. Check webhook secret in `.env`

3. Verify endpoint in Stripe Dashboard

### Can't Create Admin User

1. Check database connection
2. Make sure no user exists:
   ```sql
   SELECT * FROM users;
   ```
3. Clear browser cache
4. Try different browser

### Slow Performance

```bash
# Check Node memory
# Increase if needed
export NODE_OPTIONS="--max-old-space-size=8000"

# Or use dev:prod mode
bun run dev:prod
```

---

## Next Steps

✅ **You're all set!** Now:

1. **Customize Design:** [CUSTOMIZATION.md](./CUSTOMIZATION.md)
2. **Add Products:** Go to admin → Products → Create New
3. **Configure Stripe:** [STRIPE.md](./STRIPE.md)
4. **Deploy:** [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## Need Help?

- 📧 Email: support@juno.dev
- 💬 Discord: [Join Community](https://discord.gg/juno)
- 🐛 Issues: [GitHub Issues](https://github.com/yourusername/juno/issues)
- 📖 Docs: [Documentation](./README.md)

---

**Happy Building! 🚀**

