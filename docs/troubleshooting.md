# Troubleshooting Guide

**Quick solutions for common issues in JUNO website generation and deployment.**

---

## 🚨 **Critical Issues (Site Won't Load)**

### **ERR_EMPTY_RESPONSE / Site Won't Load**
**Root Cause**: Missing or incorrect `.env.local` file

**Solution**:
```bash
# 1. Navigate to project directory
cd ~/Desktop/your-project-name

# 2. Create .env.local file
cp env.example .env.local

# 3. Verify content
cat .env.local
# Should show: DATABASE_URI=file:./database.sqlite

# 4. Restart development server
bun dev
```

**Prevention**: Always run `cp env.example .env.local` after generating a new site.

---

### **Database Connection Failed**
**Root Cause**: Incorrect DATABASE_URI format

**Local Development**:
```bash
# Check .env.local file
DATABASE_URI=file:./database.sqlite

# If using absolute path
DATABASE_URI=file:/absolute/path/to/database.sqlite
```

**Production (Vercel)**:
```bash
# Check Vercel environment variables
DATABASE_URI=postgresql://user:password@host:port/database

# Common formats:
# Vercel Postgres: postgresql://user:password@host.vercel-storage.com:5432/database
# Supabase: postgresql://postgres:password@db.supabase.co:5432/postgres
# Neon: postgresql://user:password@host.neon.tech:5432/database
```

---

### **Module Not Found / Dependencies Error**
**Root Cause**: Dependencies not installed

**Solution**:
```bash
# 1. Navigate to project directory
cd ~/Desktop/your-project-name

# 2. Install dependencies
bun install

# 3. If bun install fails, try:
rm -rf node_modules bun.lockb
bun install

# 4. Restart development server
bun dev
```

**Prevention**: Always run `bun install` after generating a new site.

---

## 🔧 **CLI Issues**

### **CLI Fails / ENOENT Error**
**Root Cause**: Running from wrong directory or missing templates

**Solution**:
```bash
# 1. Navigate to CLI directory
cd ~/Desktop/juno/cli

# 2. Verify CLI exists
ls -la create-site.js

# 3. Run CLI
node create-site.js

# 4. If still fails, check templates exist
ls -la ../src/templates/
```

**Prevention**: Always run CLI from `~/Desktop/juno/cli/` directory.

---

### **Template Not Found**
**Root Cause**: Missing template files

**Solution**:
```bash
# 1. Check templates exist
ls -la ~/Desktop/juno/src/templates/

# 2. Should show:
# portfolio-bold/
# saas-futuristic/
# agency-corporate/

# 3. If missing, restore from git
cd ~/Desktop/juno
git checkout HEAD -- src/templates/
```

---

## 🚀 **Deployment Issues**

### **Vercel Build Failed**
**Root Cause**: Build errors or missing environment variables

**Solution**:
```bash
# 1. Test build locally
bun run build

# 2. Fix any TypeScript errors
bun run check

# 3. Check Vercel environment variables
# Required: DATABASE_URI, PAYLOAD_SECRET, PAYLOAD_PUBLIC_SERVER_URL

# 4. Redeploy
vercel --prod
```

**Common Build Errors**:
- **TypeScript errors**: Fix type issues in code
- **Missing dependencies**: Add to package.json
- **Environment variables**: Set in Vercel dashboard
- **Database connection**: Verify DATABASE_URI format

---

### **Database Won't Work on Vercel**
**Root Cause**: SQLite doesn't work on serverless platforms

**Solution**:
```bash
# 1. Set up Postgres database
# Option A: Vercel Postgres
# Option B: Supabase
# Option C: Neon

# 2. Update environment variables
DATABASE_URI=postgresql://your-connection-string

# 3. Redeploy
vercel --prod
```

**Database Setup**:
- **Vercel Postgres**: Dashboard → Storage → Create Database
- **Supabase**: Create project → Settings → Database → Connection String
- **Neon**: Create project → Copy connection string

---

### **Environment Variables Not Working**
**Root Cause**: Incorrect variable names or values

**Required Variables**:
```bash
DATABASE_URI=postgresql://...
PAYLOAD_SECRET=your-32-char-secret
PAYLOAD_PUBLIC_SERVER_URL=https://your-site.vercel.app
NEXT_PUBLIC_SERVER_URL=https://your-site.vercel.app
```

**Solution**:
```bash
# 1. Generate PAYLOAD_SECRET
openssl rand -base64 32

# 2. Set in Vercel dashboard
# Project Settings → Environment Variables

# 3. Redeploy
vercel --prod
```

---

## 📱 **Performance Issues**

### **Slow Loading / Poor Lighthouse Scores**
**Root Cause**: Unoptimized images or large bundle size

**Solution**:
```bash
# 1. Optimize images
npm install -g @squoosh/cli
squoosh-cli --webp public/media/*.jpg

# 2. Check bundle size
bun run build
# Look for large chunks in build output

# 3. Enable compression
# Add to next.config.js
module.exports = {
  compress: true,
  // ... other config
}
```

**Image Optimization**:
- **Format**: Use WebP with JPG fallback
- **Size**: Compress to 80-85% quality
- **Dimensions**: Resize to actual display size
- **Lazy loading**: Implement for below-fold images

---

### **Mobile Issues**
**Root Cause**: Responsive design problems

**Solution**:
```bash
# 1. Test on real devices
# Use Chrome DevTools device simulation

# 2. Check responsive breakpoints
# Ensure mobile-first design

# 3. Test touch interactions
# Verify buttons are 44px+ for touch
```

**Mobile Testing**:
- **iPhone**: Safari, Chrome
- **Android**: Chrome, Firefox
- **Tablet**: iPad, Android tablet
- **Touch**: Verify all interactions work

---

## ♿ **Accessibility Issues**

### **Screen Reader Problems**
**Root Cause**: Missing semantic HTML or ARIA labels

**Solution**:
```tsx
// Use semantic HTML
<article>
  <header>
    <h1>Article Title</h1>
  </header>
  <main>
    <p>Content...</p>
  </main>
</article>

// Add ARIA labels
<button aria-label="Close dialog">
  <X className="h-4 w-4" />
</button>
```

**Accessibility Checklist**:
- [ ] Semantic HTML structure
- [ ] ARIA labels for interactive elements
- [ ] Keyboard navigation support
- [ ] Color contrast ratio 4.5:1+
- [ ] Alt text for images

---

### **Keyboard Navigation Issues**
**Root Cause**: Missing focus management

**Solution**:
```tsx
// Ensure keyboard accessibility
<div 
  role="button"
  tabIndex={0}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
  onClick={handleClick}
>
  Clickable content
</div>
```

---

## 🔍 **SEO Issues**

### **Meta Tags Not Working**
**Root Cause**: Missing or incorrect meta tag implementation

**Solution**:
```tsx
// Add to layout.tsx or page.tsx
export const metadata = {
  title: 'Your Site Title',
  description: 'Your site description',
  openGraph: {
    title: 'Your Site Title',
    description: 'Your site description',
    images: ['/og-image.jpg'],
  },
}
```

**SEO Checklist**:
- [ ] Title tags on all pages
- [ ] Meta descriptions
- [ ] Open Graph tags
- [ ] Structured data markup
- [ ] Sitemap.xml
- [ ] Robots.txt

---

## 🎨 **Design Issues**

### **Layout Broken on Mobile**
**Root Cause**: Responsive design problems

**Solution**:
```css
/* Use mobile-first approach */
.container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}
```

---

### **Typography Issues**
**Root Cause**: Font loading or sizing problems

**Solution**:
```css
/* Use system fonts as fallback */
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}

/* Responsive typography */
h1 {
  font-size: clamp(2rem, 5vw, 4rem);
}
```

---

## 🧪 **Testing Issues**

### **Tests Failing**
**Root Cause**: Test configuration or dependency issues

**Solution**:
```bash
# 1. Install test dependencies
bun install

# 2. Run tests
bun test

# 3. If tests fail, check:
# - Test files are in correct location
# - Dependencies are installed
# - Test configuration is correct
```

---

### **E2E Tests Failing**
**Root Cause**: Playwright configuration or browser issues

**Solution**:
```bash
# 1. Install Playwright browsers
npx playwright install

# 2. Run E2E tests
bun run test:e2e

# 3. Check test configuration
# playwright.config.ts
```

---

## 📞 **Getting Help**

### **Before Asking for Help**
1. **Check this guide** - Most issues are covered here
2. **Read error messages** - They usually tell you what's wrong
3. **Test locally** - Ensure it works on your machine
4. **Check logs** - Vercel build logs, browser console
5. **Search documentation** - Check other docs in `/docs`

### **When Reporting Issues**
Include:
- **Error message** - Exact error text
- **Steps to reproduce** - What you did before the error
- **Environment** - OS, Node version, browser
- **Screenshots** - Visual issues
- **Console logs** - Browser console errors

### **Common Solutions**
- **90% of issues**: Missing `.env.local` file
- **80% of build issues**: Missing environment variables
- **70% of performance issues**: Unoptimized images
- **60% of mobile issues**: Responsive design problems

---

## 🎯 **Prevention Checklist**

### **Before Starting Work**
- [ ] `.env.local` file exists
- [ ] Dependencies installed (`bun install`)
- [ ] Running from correct directory
- [ ] Templates exist in `src/templates/`

### **Before Deployment**
- [ ] Site works locally (`bun dev`)
- [ ] Build succeeds (`bun run build`)
- [ ] Environment variables set
- [ ] Database connection works
- [ ] Mobile responsive tested
- [ ] Performance optimized

### **After Deployment**
- [ ] Site loads at production URL
- [ ] Admin panel accessible
- [ ] All forms work
- [ ] No console errors
- [ ] Lighthouse scores 90+

---

**Remember: Most issues have simple solutions. Check the basics first, then dig deeper. Professional troubleshooting = Professional results.**
