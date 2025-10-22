# Deployment Guide

**Deploy your JUNO site to Vercel in 15 minutes.**

---

## 🗄️ Database Setup (Required)

### ⚠️ Important: SQLite Won't Work on Vercel

**Why:**
- Vercel is serverless (filesystem is temporary)
- SQLite is file-based (data gets wiped)
- You need a hosted Postgres database

**The system automatically switches:**
- Local: `file:./database.sqlite` → Uses SQLite
- Production: `postgresql://...` → Uses Postgres

---

## 📊 Choose Your Database

### Option 1: Vercel Postgres ⭐ Recommended

**Best for:** Simplicity, one dashboard, native integration

**Setup:**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Storage" → "Create Database" → "Postgres"
3. Select region (closest to users)
4. Copy connection string from ".env.local" tab

**Cost:**
- Free: 256MB
- Paid: $20/month

### Option 2: Supabase

**Best for:** Generous free tier, extra features

**Setup:**
1. Go to [Supabase](https://supabase.com)
2. Create new project
3. Settings → Database → Connection String (Transaction mode)
4. Copy the connection string

**Cost:**
- Free: 500MB
- Paid: $25/month

### Option 3: Neon

**Best for:** Serverless-optimized performance

**Setup:**
1. Go to [Neon](https://neon.tech)
2. Create project
3. Copy connection string from dashboard

**Cost:**
- Free: 512MB
- Paid: $19/month

---

## 🚀 Deploy to Vercel

### Method 1: Vercel Dashboard (Easiest)

**1. Push to GitHub:**
```bash
cd ~/Desktop/your-project
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/project.git
git push -u origin main
```

**2. Import to Vercel:**
- Go to [vercel.com/new](https://vercel.com/new)
- Click "Import Git Repository"
- Select your repository
- Click "Import"

**3. Add Environment Variables:**

In Vercel → Project Settings → Environment Variables, add:

**Required:**
```bash
DATABASE_URI=postgresql://your-connection-string
PAYLOAD_SECRET=your-random-32-char-secret
PAYLOAD_PUBLIC_SERVER_URL=https://your-site.vercel.app
NEXT_PUBLIC_SERVER_URL=https://your-site.vercel.app
```

**Optional but recommended:**
```bash
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOKS_SIGNING_SECRET=whsec_...
NEXT_PUBLIC_SENTRY_DSN=https://...@sentry.io/...
```

**4. Deploy:**
- Click "Deploy"
- Wait 2-3 minutes
- Your site is live! 🎉

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
bun install -g vercel

# Login
vercel login

# Deploy
cd ~/Desktop/your-project
vercel

# Add environment variables
vercel env add DATABASE_URI production
# Paste your PostgreSQL connection string

vercel env add PAYLOAD_SECRET production
# Paste a random 32+ character string

# Deploy to production
vercel --prod
```

---

## 🔐 Generate Secrets

### PAYLOAD_SECRET (Required)

Must be at least 32 characters.

```bash
# Option 1: OpenSSL
openssl rand -base64 32

# Option 2: Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### PREVIEW_SECRET (Optional)

For draft/preview functionality:

```bash
openssl rand -base64 32
```

---

## 🌐 Custom Domain (Optional)

### 1. Add Domain in Vercel

- Project Settings → Domains
- Add `yourdomain.com`
- Follow DNS setup instructions

### 2. Update Environment Variables

```bash
PAYLOAD_PUBLIC_SERVER_URL=https://yourdomain.com
NEXT_PUBLIC_SERVER_URL=https://yourdomain.com
```

### 3. Redeploy

Vercel auto-redeploys when env vars change.

---

## ✅ Post-Deployment Checklist

### Test Everything:

- [ ] Site loads at production URL
- [ ] Admin accessible at `/admin`
- [ ] Can create admin account
- [ ] Can upload media
- [ ] Can create/edit pages
- [ ] Forms submit successfully
- [ ] Checkout works (if using Stripe)
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Fast loading (Lighthouse 90+)

### Security:

- [ ] Changed PAYLOAD_SECRET from demo
- [ ] Changed PREVIEW_SECRET from demo
- [ ] Database password is strong
- [ ] No secrets in code/git
- [ ] HTTPS working
- [ ] Environment variables are production values

---

## 🐛 Common Issues

### "Database connection failed"

**Solutions:**
1. Verify connection string format
2. Check no trailing spaces
3. Ensure database is running
4. For Supabase: Settings → Database → disable RLS, add 0.0.0.0/0 to allowed IPs
5. Test locally first: `DATABASE_URI=postgresql://... bun dev`

### "PAYLOAD_SECRET must be at least 32 characters"

**Solution:**
```bash
# Generate new secret
openssl rand -base64 32

# Add to Vercel environment variables
```

### "Build failed: Out of memory"

**Solution:**
Increase Node memory in Vercel:

- Project Settings → Build & Development Settings
- Override build command:
  ```bash
  NODE_OPTIONS="--max-old-space-size=8000" bun run build
  ```

### "Module not found" during build

**Solution:**
Add `vercel.json` to project root:

```json
{
  "installCommand": "bun install",
  "buildCommand": "bun run build"
}
```

### Images not loading in production

**Solutions:**
1. Check media uploads go to database
2. Verify Payload media collection works
3. Consider cloud storage (S3, Cloudinary) for production

---

## 💰 Cost Breakdown

### Minimum (Free Tier):
- **Vercel Hosting:** Free
- **Database:** Neon free tier
- **Total:** €0/month
- **Good for:** Testing, personal projects

### Recommended (Starting):
- **Vercel Hosting:** Free
- **Database:** Vercel Postgres ($20) or Supabase free
- **Total:** €0-20/month
- **Good for:** First client sites

### Production (Client Sites):
- **Vercel Pro:** $20/month
- **Database:** Vercel Postgres $20 or Supabase Pro $25
- **Sentry:** $29/month (optional)
- **Total:** €60-75/month
- **Charge client:** €100-150/month (€25-90 profit per client)

---

## 📊 Performance Optimization

After deployment, verify with Lighthouse:

### Target Scores:
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 90+
- **SEO:** 100

### Quick Wins:
1. **Images:** Use Next.js Image component (auto-optimized)
2. **Fonts:** Using `next/font` (already configured)
3. **Caching:** Edge caching enabled by default
4. **Code splitting:** Automatic with Next.js

---

## 🔄 Continuous Deployment

Once deployed, Vercel auto-deploys on git push:

```bash
# Make changes locally
git add .
git commit -m "Update homepage"
git push

# Vercel automatically:
# 1. Detects push
# 2. Runs build
# 3. Deploys to production
# 4. Updates live site (2-3 min)
```

**Preview deployments:** Every branch/PR gets a unique preview URL.

---

## 🎯 Per-Client Deployment

### Best Practice:

**Each client gets:**
- Separate Git repository
- Separate Vercel project
- Separate database
- Separate domain

**Why:**
- Data isolation
- Individual scaling
- Easier management
- Client can own their infrastructure

### Quick Setup:

```bash
# 1. Generate site
cd ~/Desktop/juno/cli
node create-site.js  # Name: client-name-site

# 2. Initialize Git
cd ~/Desktop/client-name-site
git init
git add .
git commit -m "Initial site for [Client Name]"

# 3. Create GitHub repo
# (Do this on GitHub.com)

# 4. Push to GitHub
git remote add origin https://github.com/yourusername/client-name.git
git push -u origin main

# 5. Deploy to Vercel
vercel

# 6. Set up database
# (Follow database setup above)

# 7. Add environment variables
# (In Vercel dashboard)

# 8. Deploy to production
vercel --prod
```

---

## 📈 Monitoring & Maintenance

### Vercel Analytics (Built-in):
- Real-time traffic
- Performance metrics
- Core Web Vitals

### Optional Tools:
- **Sentry:** Error tracking (recommended)
- **LogRocket:** Session replay
- **Plausible/Fathom:** Privacy-friendly analytics

### Database Backups:
- **Vercel Postgres:** Automatic daily backups
- **Supabase:** Daily backups included
- **Neon:** Configure backup schedule

---

## 🎓 Advanced Topics

### Environment-Specific Configs:

```bash
# Development
DATABASE_URI=file:./database.sqlite

# Staging
DATABASE_URI=postgresql://staging-db-url

# Production
DATABASE_URI=postgresql://production-db-url
```

### Multiple Environments:

1. **main** branch → Production
2. **staging** branch → Staging environment
3. **develop** branch → Development environment

Configure in Vercel project settings.

---

## ✅ Deployment Checklist

**Before First Deploy:**
- [ ] Code works locally
- [ ] Database set up (Postgres)
- [ ] Environment variables ready
- [ ] Secrets generated
- [ ] Git repository created
- [ ] Pushed to GitHub

**During Deploy:**
- [ ] Import to Vercel
- [ ] Add environment variables
- [ ] Trigger deployment
- [ ] Watch build logs

**After Deploy:**
- [ ] Test live site
- [ ] Create admin account
- [ ] Test all features
- [ ] Check mobile
- [ ] Run Lighthouse
- [ ] Set up monitoring

---

## 🚀 You're Live!

Your JUNO site is now:
- ✅ Deployed globally (Vercel Edge)
- ✅ Using production database (Postgres)
- ✅ Auto-deploying on push
- ✅ Fast and scalable
- ✅ Ready to bill clients! 💰

**Next:** [Customization Guide](./CUSTOMIZATION.md)

---

**Questions?** Check other docs in `/docs` or `.cursorrules`.
