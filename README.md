# 🚀 JUNO - Premium Full-Stack E-Commerce Boilerplate

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)
![Payload CMS](https://img.shields.io/badge/Payload-3.0-red?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**The only Next.js 15 E-Commerce + SaaS boilerplate with integrated Headless CMS, Multi-tenant Architecture, and Premium Apple-inspired Design.**

[Live Demo](https://juno-demo.vercel.app) • [Documentation](./docs/SETUP.md) • [Pricing](./PRICING.md) • [Community](https://discord.gg/juno)

</div>

---

## ✨ What Makes JUNO Different?

Unlike other boilerplates that only give you authentication and payments, **JUNO** is a complete, production-ready e-commerce platform:

| Feature | Others | JUNO |
|---------|--------|------|
| **Headless CMS** | ❌ | ✅ Payload CMS 3.0 |
| **E-Commerce** | ❌ Basic | ✅ Complete System |
| **Design Quality** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ Apple-inspired |
| **Accessibility** | ❌ | ✅ WCAG 2.1 AA |
| **Testing** | ❌ | ✅ Playwright + Vitest |
| **Framework** | Next.js 14 | ✅ **Next.js 15** |

---

## 🎯 Perfect For

- 🏪 **E-Commerce Stores** - Launch a beautiful online store in hours
- 💼 **SaaS Products** - Sell digital products with built-in CMS
- 🎨 **Agencies** - White-label for clients with premium design
- 🚀 **Startups** - Save months of development time
- 📱 **Digital Products** - Sell courses, templates, or downloads

---

## 🔥 Key Features

### 🎨 **Premium Design System**
- ✅ **Apple-inspired UI** - Clean, modern, professional
- ✅ **Bento Grid Layout** - Trending, asymmetric design
- ✅ **Dark/Light Mode** - Seamless theme switching
- ✅ **Fully Responsive** - Mobile-first, looks perfect everywhere
- ✅ **Smooth Animations** - Framer Motion micro-interactions
- ✅ **Glassmorphism** - Modern, depth-filled UI elements

### 🛍️ **Complete E-Commerce System**
- ✅ **Product Management** - Full CRUD with Payload CMS
- ✅ **Shopping Cart** - Persistent, optimistic updates
- ✅ **Checkout Flow** - Complete Stripe integration
- ✅ **Order Management** - Track orders, fulfillment status

### 🏢 **Enterprise SaaS Features**
- ✅ **Multi-tenant Architecture** - Isolated workspaces per organization
- ✅ **Subscription Billing** - Stripe-powered recurring payments
- ✅ **User Accounts** - Profiles, addresses, order history
- ✅ **Inventory System** - Stock tracking, variants
- ✅ **Admin Dashboard** - Powerful Payload CMS interface

### 💳 **Payment & Subscriptions**
- ✅ **Stripe Integration** - One-time + recurring payments
- ✅ **Webhooks** - Automatic order fulfillment
- ✅ **Customer Portal** - Self-service billing management
- ✅ **Multiple Currencies** - International support
- ✅ **Tax Calculation** - Automatic tax handling

### 📝 **Content Management (Payload CMS)**
- ✅ **Headless CMS** - Separate content from presentation
- ✅ **Collections** - Products, Pages, Blog, Users
- ✅ **Rich Text Editor** - Lexical editor with blocks
- ✅ **Media Library** - Image optimization, uploads
- ✅ **SEO Plugin** - Meta tags, Open Graph, sitemaps
- ✅ **Form Builder** - Custom forms with validation
- ✅ **Access Control** - Role-based permissions
- ✅ **Live Preview** - See changes before publishing

### 🚀 **Developer Experience**
- ✅ **TypeScript** - Full type safety
- ✅ **ESLint + Prettier** - Consistent code style
- ✅ **Testing Suite** - Playwright E2E + Vitest Unit
- ✅ **Git Hooks** - Pre-commit linting
- ✅ **Hot Reload** - Fast development iteration
- ✅ **Code Splitting** - Optimized bundle sizes
- ✅ **Documentation** - Comprehensive guides

### ♿ **Accessibility & Performance**
- ✅ **WCAG 2.1 AA** - Fully accessible
- ✅ **Lighthouse 95+** - Optimized performance
- ✅ **SEO Optimized** - Server-side rendering
- ✅ **Image Optimization** - Next.js Image component
- ✅ **Code Quality** - 100% TypeScript coverage

---

## 🛠 Tech Stack

### **Frontend**
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5.7
- **Styling:** Tailwind CSS 4.0
- **UI Components:** Shadcn/UI + Radix UI
- **Animations:** Framer Motion
- **Forms:** React Hook Form
- **State:** TanStack Query

### **Backend**
- **CMS:** Payload CMS 3.0
- **Database:** PostgreSQL (via Payload)
- **ORM:** Drizzle (via Payload)
- **Authentication:** Payload Auth (JWT)
- **Email:** Resend + Nodemailer

### **Payments**
- **Provider:** Stripe
- **Features:** One-time, Subscriptions, Webhooks

### **Testing**
- **E2E:** Playwright
- **Unit:** Vitest
- **Accessibility:** Axe-core

### **Deployment**
- **Platform:** Vercel (optimized)
- **Database:** Vercel Postgres / Supabase / Neon
- **Storage:** Vercel Blob / Cloudinary

---

## ⚡ Quick Start

### Prerequisites
- Node.js 18+ or Bun
- PostgreSQL database
- Stripe account (for payments)

### 1. Clone & Install

```bash
# Clone the repository
git clone https://github.com/yourusername/juno.git
cd juno

# Install dependencies
bun install
# or
npm install
```

### 2. Environment Setup

```bash
# Copy environment variables
cp .env.example .env
```

Edit `.env` with your credentials:

```env
# Database
DATABASE_URI=postgresql://user:pass@localhost:5432/juno

# Payload
PAYLOAD_SECRET=your-secret-key
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3000

# Public
NEXT_PUBLIC_SERVER_URL=http://localhost:3000

# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOKS_SIGNING_SECRET=whsec_...

# Preview
PREVIEW_SECRET=demo-draft-secret
```

### 3. Run Development Server

```bash
bun dev
# or
npm run dev
```

Visit:
- **Frontend:** http://localhost:3000
- **Admin:** http://localhost:3000/admin

### 4. Create Admin User

On first visit to `/admin`, you'll be prompted to create your admin account.

---

## 📦 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/juno)

### One-Click Deployment

1. Click the "Deploy" button above
2. Add environment variables (see `.env.example`)
3. Add a PostgreSQL database (Vercel Postgres recommended)
4. Deploy!

**Detailed deployment guide:** [DEPLOYMENT.md](./docs/DEPLOYMENT.md)

---

## 📚 Documentation

| Guide | Description |
|-------|-------------|
| [📖 Setup Guide](./docs/SETUP.md) | Complete setup instructions |
| [🚀 Deployment](./docs/DEPLOYMENT.md) | Deploy to Vercel, Railway, etc. |
| [🎨 Customization](./docs/CUSTOMIZATION.md) | Theming, branding, styling |
| [💳 Stripe Setup](./docs/STRIPE.md) | Payment configuration |
| [🔐 Authentication](./docs/AUTH.md) | User management |
| [♿ Accessibility](./docs/ACCESSIBILITY.md) | WCAG compliance |
| [🧪 Testing](./docs/TESTING.md) | Run tests |

---

## 📁 Project Structure

```
juno/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── (app)/               # Public pages
│   │   │   ├── page.tsx         # Homepage
│   │   │   ├── shop/            # Product listing
│   │   │   ├── checkout/        # Checkout flow
│   │   │   ├── about/           # About page
│   │   │   ├── services/        # Services page
│   │   │   ├── blog/            # Blog pages
│   │   │   └── contact/         # Contact page
│   │   └── (payload)/           # Admin routes
│   │       └── admin/           # Payload admin UI
│   ├── collections/             # Payload collections
│   │   ├── Products/            # Product collection
│   │   ├── Pages/               # Pages collection
│   │   ├── Categories/          # Categories
│   │   ├── Media/               # Media library
│   │   └── Users/               # User management
│   ├── blocks/                  # Content blocks
│   │   ├── Hero/                # Hero sections
│   │   ├── Content/             # Rich content
│   │   ├── Form/                # Form builder
│   │   └── MediaBlock/          # Media blocks
│   ├── components/              # React components
│   │   ├── Cart/                # Shopping cart
│   │   ├── Header/              # Navigation
│   │   ├── Footer/              # Footer
│   │   ├── animations/          # Animation components
│   │   └── ui/                  # Shadcn components
│   ├── providers/               # Context providers
│   │   ├── Auth/                # Auth context
│   │   └── Theme/               # Theme context
│   └── utilities/               # Helper functions
├── docs/                        # Documentation
├── tests/                       # Test files
│   ├── e2e/                     # Playwright tests
│   └── int/                     # Integration tests
└── public/                      # Static assets
```

---

## 🎨 Customization

### Change Colors

Edit `src/app/(app)/globals.css`:

```css
:root {
  --background: hsl(0 0% 98%);      /* Light background */
  --foreground: hsl(0 0% 8%);       /* Text color */
  --accent: hsl(220 90% 56%);       /* Brand color */
}

[data-theme='dark'] {
  --background: hsl(0 0% 0%);       /* Dark background */
  --foreground: hsl(0 0% 100%);     /* Light text */
}
```

### Change Typography

Edit `tailwind.config.mjs`:

```js
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  mono: ['Fira Code', 'monospace'],
}
```

### Add Pages

1. Create file: `src/app/(app)/yourpage/page.tsx`
2. Add to navigation: `src/components/Header/index.client.tsx`

**Full customization guide:** [CUSTOMIZATION.md](./docs/CUSTOMIZATION.md)

---

## 🧪 Testing

```bash
# Run all tests
bun test

# E2E tests only
bun test:e2e

# Accessibility tests
bun test:a11y

# Watch mode
bun test --watch
```

---

## 📜 Scripts

```bash
bun dev              # Start development server
bun build            # Build for production
bun start            # Start production server
bun lint             # Run ESLint
bun lint:fix         # Fix linting errors
bun typecheck        # Check TypeScript
bun test             # Run all tests
bun test:e2e         # Run E2E tests
bun test:a11y        # Run accessibility tests
bun clean            # Clean build artifacts
```

---

## 🐛 Troubleshooting

### Database Connection Error
```bash
# Make sure PostgreSQL is running
# Check DATABASE_URI in .env
```

### Build Errors
```bash
# Clean and rebuild
bun clean
bun install
bun build
```

### Stripe Webhook Issues
```bash
# Use Stripe CLI for local testing
stripe listen --forward-to localhost:3000/api/stripe/webhooks
```

**More solutions:** [TROUBLESHOOTING.md](./docs/TROUBLESHOOTING.md)

---

## 🤝 Support

- 📧 **Email:** support@juno.dev
- 💬 **Discord:** [Join Community](https://discord.gg/juno)
- 📖 **Docs:** [Full Documentation](./docs)
- 🐛 **Issues:** [GitHub Issues](https://github.com/yourusername/juno/issues)

---

## 🎉 What's Included

### Pages (13+)
- ✅ Homepage (Apple-inspired design)
- ✅ Shop/Products listing
- ✅ Product details
- ✅ Shopping cart
- ✅ Checkout flow
- ✅ Order confirmation
- ✅ User account
- ✅ Order history
- ✅ About page
- ✅ Services page
- ✅ Blog listing
- ✅ Blog post
- ✅ Contact page

### Components (100+)
- ✅ Navigation (desktop + mobile)
- ✅ Shopping cart
- ✅ Product cards
- ✅ Bento grids
- ✅ Hero sections
- ✅ Forms
- ✅ Buttons
- ✅ Cards
- ✅ Modals
- ✅ Tooltips
- ✅ And many more...

### Admin Features
- ✅ Product management
- ✅ Order management
- ✅ User management
- ✅ Content management
- ✅ Media library
- ✅ Analytics dashboard

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

### What This Means:
- ✅ Commercial use allowed
- ✅ Modification allowed
- ✅ Distribution allowed
- ✅ Private use allowed
- ❌ No warranty provided
- ❌ No liability

**You can use JUNO for unlimited projects and clients.**

---

## 🌟 Credits

Built with love using:
- [Next.js](https://nextjs.org)
- [Payload CMS](https://payloadcms.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn/UI](https://ui.shadcn.com)
- [Stripe](https://stripe.com)

---

## 🚀 Ready to Build?

```bash
bun create juno my-store
cd my-store
bun dev
```

**Launch your e-commerce store in minutes, not months.**

---

<div align="center">

Made with ❤️ by [Your Name](https://yourwebsite.com)

[Documentation](./docs) • [Live Demo](https://juno-demo.vercel.app) • [Support](mailto:support@juno.dev)

</div>
