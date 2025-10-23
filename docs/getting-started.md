# Getting Started with JUNO

**Generate professional websites in minutes.**

---

## ⚡ Quick Start

### 1. Install Dependencies

```bash
cd ~/Desktop/juno
bun install
```

### 2. Generate Your First Site

```bash
cd cli
node create-site.js
```

**Answer the prompts:**

- Project name: `my-client-site`
- Template: Choose one of 3 (Portfolio, SaaS, or Agency)
- Company name: `Your Client Name`
- Tagline: `Their tagline`

### 3. Start Development

```bash
cd ~/Desktop/my-client-site
bun install
bun dev
```

Open http://localhost:3000

---

## 🎨 Available Templates

### Portfolio - Bold

- **Best for:** Designers, photographers, creatives
- **Style:** Pink/purple gradients, bold, creative
- **Sections:** Hero, About, Gallery, Testimonials, Contact

### SaaS - Futuristic

- **Best for:** Tech startups, software companies
- **Style:** Blue/cyan, professional, modern
- **Sections:** Hero, Features, Pricing, Logos, CTA

### Agency - Corporate

- **Best for:** Agencies, consultancies, services
- **Style:** Navy/gray, clean, corporate
- **Sections:** Hero, Services, Process, Work, Testimonials

---

## 🗄️ Database Setup

### Local Development (Default)

Uses **SQLite** - works automatically, zero configuration.

```bash
# .env.local (auto-created by CLI)
DATABASE_URI=file:./database.sqlite
```

### Production (Vercel)

Requires **Postgres** - SQLite won't work on serverless.

**See:** [Deployment Guide](./deployment.md) for complete setup.

---

## 📝 Customization Workflow

### Quick (1 hour)

1. Open `src/app/(app)/page.tsx`
2. Find `TODO:` comments
3. Replace text content
4. Done!

### Full (2-3 hours)

1. **Images** (30 min): Replace in `public/media/`
2. **Text** (1 hour): Update all content
3. **Colors** (30 min): Modify in `globals.css`
4. **Test** (30 min): Check mobile, test forms

---

## 🔧 Development Commands

```bash
bun dev              # Start development server
bun run check        # Lint + TypeScript + Format
bun run format       # Auto-format code
bun run build        # Test production build
```

---

## 🚀 Deploy to Vercel

```bash
cd ~/Desktop/your-project
vercel
```

**Important:** Set up production database first!

**See:** [Deployment Guide](./deployment.md)

---

## 🐛 Troubleshooting

### "Site won't load" / ERR_EMPTY_RESPONSE

**Cause:** Missing `.env.local`

**Fix:**

```bash
cp env.example .env.local
```

### "Database connection failed"

**Cause:** Incorrect DATABASE_URI

**Fix:** Check `.env.local` has: `DATABASE_URI=file:./database.sqlite`

### "Module not found"

**Cause:** Dependencies not installed

**Fix:**

```bash
bun install
```

### "Template not found"

**Cause:** Running CLI from wrong directory

**Fix:**

```bash
cd ~/Desktop/juno/cli
node create-site.js
```

---

## 📚 Next Steps

1. **Generate samples:** Create one of each template
2. **Practice customization:** Time yourself
3. **Read guides:**
   - [Customization Guide](./CUSTOMIZATION.md)
   - [Deployment Guide](./deployment.md)
   - [Quality Standards](./quality-standards.md)
4. **Deploy test site:** Practice the full workflow
5. **Start billing clients!** 💰

---

## 📂 Project Structure

```
juno/
├── cli/              # Site generator
├── src/
│   ├── templates/    # 3 homepage templates
│   ├── app/          # Next.js app
│   ├── components/   # React components
│   └── collections/  # Payload CMS models
├── docs/             # Documentation
└── public/           # Static assets
```

---

## 💡 Pro Tips

1. **Reuse assets:** Build an image library
2. **Template snippets:** Save common customizations
3. **Test builds:** Run `bun run build` before deploying
4. **Quality check:** Use the scoring system in quality-standards.md
5. **Version control:** Commit often, use branches

---

## ✅ Success Checklist

- [ ] Generated all 3 templates
- [ ] Customized at least one completely
- [ ] Tested on mobile devices
- [ ] Deployed a test site
- [ ] Timed your workflow (aim for <4 hours)
- [ ] Ready to take client work!

---

**Questions?** Check the other guides in `/docs` or the `.cursorrules` file.
