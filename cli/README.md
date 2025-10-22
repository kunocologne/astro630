# 🚀 JUNO CLI - Master Template Generator

Your tool for building client websites in minutes.

---

## 🎯 Quick Start

### 1. Run the CLI

```bash
cd ~/Desktop/juno/cli
node create-site.js
```

### 2. Answer 4 Questions

```
? Project name: client-acme-site
? Choose template: 🎨 Portfolio - Bold
? Company name: Acme Corporation
? Tagline: Beautiful designs that inspire
? Create this project? Yes
```

### 3. Generated Site Ready!

```
✅ DONE!
📁 ~/Desktop/client-acme-site/
```

### 4. Start Working

```bash
cd ~/Desktop/client-acme-site
bun install
bun dev
```

**Open:** http://localhost:3000

---

## 📦 What You Get

### ✅ Complete Working Site
- Homepage with your template
- Company name already inserted
- Tagline customized
- Database configured (SQLite)
- Ready to run

### ✅ No Setup Needed
- Uses SQLite (file-based database)
- Works immediately
- No PostgreSQL required
- No complex configuration

---

## 🎨 The 3 Templates

### 1. Portfolio - Bold
**Best for:** Designers, photographers, creatives  
**Style:** Pink/purple gradients, creative, bold  
**Sections:**
- Full-screen hero
- About with skills
- Masonry project gallery
- Testimonials
- Contact form

### 2. SaaS - Futuristic
**Best for:** Tech startups, software companies, fintech  
**Style:** Blue/cyan, professional, modern  
**Sections:**
- Split hero (text + dashboard)
- Feature grid
- Pricing tables
- Company logos
- Demo CTA

### 3. Agency - Corporate
**Best for:** Digital agencies, consultancies, service businesses  
**Style:** Navy/gray, professional, clean  
**Sections:**
- Professional hero with stats
- Services grid
- Process timeline
- Case studies
- Contact form

---

## ⚡ Your Workflow

### Morning: Client Calls
**Client:** "I need a portfolio website"

### Step 1: Generate (5 min)
```bash
cd ~/Desktop/juno/cli
node create-site.js
# Choose Portfolio template
```

### Step 2: Customize (2-3 hours)
- Replace images in `/public/media/`
- Update text in `src/app/(app)/page.tsx`
- Adjust colors if needed

### Step 3: Deploy (10 min)
```bash
vercel deploy
```

### Step 4: Invoice
**Charge:** €3,000 - €5,000  
**Time:** 3-4 hours  
**Margin:** Excellent 💰

---

## 🔧 Customization Guide

### Replace Company Name
Already done! CLI inserts it automatically.

### Replace Tagline
Already done! CLI inserts it automatically.

### Change Images
```
public/media/
├── hero-image.jpg        (Replace this)
├── about-photo.jpg       (Replace this)
└── project-1.jpg         (Replace these)
```

### Update Content
```
src/app/(app)/page.tsx
- Find: "I'm a creative designer..."
- Replace: With client's actual bio
```

### Change Colors
```
src/app/(app)/globals.css
- Search for: --color-primary
- Update hex values
```

---

## 💡 Pro Tips

### Quick Turnaround (Same Day)
1. Run CLI → 5 min
2. Replace hero image → 10 min
3. Update main text → 30 min
4. Deploy → 10 min
**Total: 1 hour** → Charge €2,500

### Full Custom (2-3 Days)
1. Run CLI → 5 min
2. Replace all images → 30 min
3. Rewrite all content → 2 hours
4. Custom adjustments → 1 hour
5. Client revisions → 1 hour
**Total: 4.5 hours** → Charge €4,000-€5,000

---

## 🐛 Troubleshooting

### "localhost didn't send any data"
**Problem:** Missing .env.local file

**Solution:**
```bash
cd ~/Desktop/your-project
cp env.example .env.local
bun dev
```

### "Module not found"
**Problem:** Dependencies not installed

**Solution:**
```bash
bun install
```

### Template looks wrong
**Problem:** CLI might have failed silently

**Solution:** Delete project and regenerate:
```bash
rm -rf ~/Desktop/project-name
cd ~/Desktop/juno/cli
node create-site.js
```

---

## 📊 Expected Results

### After `bun dev`:
```
✓ Ready in 2.1s
○ Local: http://localhost:3000
```

### In Browser:
- Beautiful template loads ✓
- Company name shows correctly ✓
- Tagline appears ✓
- No errors ✓

### Payload Admin:
- Visit: http://localhost:3000/admin
- Create account on first visit
- Manage content via CMS

---

## 🚀 Next Steps

### Once Site is Working:
1. Take screenshots for your portfolio
2. Test all pages
3. Check mobile responsive
4. Run lighthouse score
5. Deploy to staging
6. Get client approval
7. Deploy to production
8. **Invoice client** 💰

---

## 💰 Pricing Guide

### Simple Portfolio
- **Time:** 2-3 hours
- **Charge:** €2,500 - €3,500

### E-commerce Site
- **Time:** 4-6 hours  
- **Charge:** €4,000 - €6,000

### SaaS Landing Page
- **Time:** 3-5 hours
- **Charge:** €3,500 - €5,000

### Full Custom
- **Time:** 8-12 hours
- **Charge:** €6,000 - €10,000

---

## ✅ Success Checklist

You're ready to bill clients when:

- [ ] CLI generates sites successfully
- [ ] Generated site runs on localhost:3000
- [ ] Can replace images easily
- [ ] Can update text content
- [ ] Can deploy to Vercel
- [ ] Comfortable charging €3,000+

---

**You have the tool. Now go make money.** 🚀

*Your time is worth €1,000+/hour with this system.*
