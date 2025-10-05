# 🎨 JUNO Customization Guide

Make JUNO your own with custom branding, colors, and features.

---

## Table of Contents

1. [Branding](#branding)
2. [Colors & Theme](#colors--theme)
3. [Typography](#typography)
4. [Logo & Favicon](#logo--favicon)
5. [Navigation](#navigation)
6. [Homepage Customization](#homepage-customization)
7. [Adding Pages](#adding-pages)
8. [Product Customization](#product-customization)
9. [Email Templates](#email-templates)

---

## Branding

### Company Information

Edit environment variables in `.env`:

```env
COMPANY_NAME="Your Company Name"
SITE_NAME="Your Store Name"
TWITTER_CREATOR="@yourusername"
TWITTER_SITE="https://yourwebsite.com"
```

### Meta Tags

Edit `src/utilities/generateMeta.ts`:

```typescript
const defaultMeta = {
  title: 'Your Store Name - Premium Products',
  description: 'Your store description here',
  openGraph: {
    siteName: 'Your Store Name',
    type: 'website',
    url: process.env.NEXT_PUBLIC_SERVER_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SERVER_URL}/og-image.jpg`,
      },
    ],
  },
}
```

---

## Colors & Theme

### Primary Colors

Edit `src/app/(app)/globals.css`:

```css
:root {
  /* Light Mode */
  --background: hsl(0 0% 98%);        /* Page background */
  --foreground: hsl(0 0% 8%);         /* Text color */
  
  /* Accent Colors */
  --accent: hsl(220 90% 56%);         /* Brand color (buttons, links) */
  --accent-foreground: hsl(0 0% 100%); /* Text on accent */
  
  /* UI Elements */
  --card: hsla(0, 0%, 100%, 0.5);     /* Card background */
  --border: hsla(0, 0%, 0%, 0.08);    /* Border color */
  --muted: hsl(0 0% 96%);             /* Muted backgrounds */
  --muted-foreground: hsl(0 0% 45%);  /* Muted text */
}

[data-theme='dark'] {
  /* Dark Mode */
  --background: hsl(0 0% 0%);
  --foreground: hsl(0 0% 100%);
  
  --accent: hsl(220 90% 56%);
  --accent-foreground: hsl(0 0% 100%);
  
  --card: hsla(0, 0%, 100%, 0.02);
  --border: hsla(0, 0%, 100%, 0.08);
  --muted: hsl(0 0% 10%);
  --muted-foreground: hsl(0 0% 55%);
}
```

### Example: Blue Brand

```css
:root {
  --accent: hsl(211 100% 50%);         /* Bright blue */
}
```

### Example: Green Brand

```css
:root {
  --accent: hsl(142 76% 36%);          /* Forest green */
}
```

### Example: Purple Brand

```css
:root {
  --accent: hsl(271 81% 56%);          /* Purple */
}
```

### Tailwind Config

For additional customization, edit `tailwind.config.mjs`:

```javascript
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          // ... add your brand colors
          500: '#3b82f6',
          600: '#2563eb',
          900: '#1e3a8a',
        }
      }
    }
  }
}
```

---

## Typography

### Font Families

Edit `tailwind.config.mjs`:

```javascript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  serif: ['Merriweather', 'Georgia', 'serif'],
  mono: ['Fira Code', 'monospace'],
}
```

### Install Custom Fonts

**Using Google Fonts:**

Edit `src/app/(app)/layout.tsx`:

```typescript
import { Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-serif',
})

export default function RootLayout({ children }) {
  return (
    <html className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
```

Then update `tailwind.config.mjs`:

```javascript
fontFamily: {
  sans: ['var(--font-sans)', 'system-ui'],
  serif: ['var(--font-serif)', 'Georgia'],
}
```

### Font Sizes

Edit `src/app/(app)/globals.css`:

```css
html {
  font-size: 16px; /* Base size */
}

h1 {
  font-size: clamp(2.5rem, 8vw, 6rem);
}

h2 {
  font-size: clamp(2rem, 6vw, 4rem);
}

h3 {
  font-size: clamp(1.5rem, 4vw, 2.5rem);
}
```

---

## Logo & Favicon

### Logo

Replace logo component in `src/components/Logo/index.tsx`:

```typescript
export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/logo.svg"
        alt="Your Store"
        width={40}
        height={40}
      />
      <span className="text-xl font-bold">Your Store</span>
    </div>
  )
}
```

Place your logo file in `public/logo.svg` or `public/logo.png`

### Favicon

Replace files in `src/app/(app)/`:
- `favicon.ico` (32x32 px)
- `apple-icon.png` (180x180 px)
- `icon.png` (512x512 px)

Or use a favicon generator like [favicon.io](https://favicon.io)

---

## Navigation

### Menu Items

Edit `src/components/Header/index.client.tsx`:

```typescript
const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  
  // Add your custom pages:
  { label: 'Services', href: '/services' },
  { label: 'FAQ', href: '/faq' },
]
```

### Mobile Menu

Edit `src/components/Header/MobileMenu.tsx` with the same items.

### Footer Links

Edit `src/components/Footer/index.tsx`:

```typescript
const footerLinks = {
  shop: [
    { label: 'All Products', href: '/shop' },
    { label: 'New Arrivals', href: '/shop?filter=new' },
    { label: 'Sale', href: '/shop?filter=sale' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Refund Policy', href: '/refunds' },
  ],
}
```

---

## Homepage Customization

### Hero Section

Edit `src/app/(app)/page.tsx`:

```typescript
// Change headline
<h1 className="text-[clamp(2.5rem,8vw,6rem)]">
  Your Custom Headline
</h1>

// Change subtitle
<p className="text-[clamp(1.125rem,2vw,1.5rem)]">
  Your custom subtitle and value proposition
</p>

// Change CTA button
<Link href="/shop">
  Your CTA Text
</Link>
```

### Featured Products

```typescript
// Fetch specific products
const featuredProducts = await payload.find({
  collection: 'products',
  where: {
    featured: { equals: true },
  },
  limit: 3,
})
```

### Add New Sections

```typescript
{/* New Section */}
<section className="py-32 px-4">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-semibold mb-12 text-center">
      Your Section Title
    </h2>
    {/* Your content */}
  </div>
</section>
```

---

## Adding Pages

### Step 1: Create Page File

```bash
# Create new page
mkdir -p src/app/\(app\)/yourpage
touch src/app/\(app\)/yourpage/page.tsx
```

### Step 2: Add Content

```typescript
// src/app/(app)/yourpage/page.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Your Page Title',
  description: 'Your page description',
}

export default function YourPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold mb-6">
          Your Page Title
        </h1>
        <p className="text-lg text-muted-foreground">
          Your page content...
        </p>
      </div>
    </div>
  )
}
```

### Step 3: Add to Navigation

Edit `src/components/Header/index.client.tsx`:

```typescript
const navigationItems = [
  // ... existing items
  { label: 'Your Page', href: '/yourpage' },
]
```

---

## Product Customization

### Product Fields

Add custom fields in `src/collections/Products/index.ts`:

```typescript
fields: [
  // ... existing fields
  {
    name: 'customField',
    type: 'text',
    label: 'Custom Field',
  },
  {
    name: 'specifications',
    type: 'array',
    label: 'Specifications',
    fields: [
      {
        name: 'key',
        type: 'text',
      },
      {
        name: 'value',
        type: 'text',
      },
    ],
  },
]
```

### Product Card Design

Edit `src/components/ProductGridItem/index.tsx`:

```typescript
// Customize product card appearance
<div className="group rounded-3xl overflow-hidden">
  {/* Custom badge */}
  {product.featured && (
    <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm">
      Featured
    </div>
  )}
  
  {/* Product image */}
  <Image ... />
  
  {/* Product info */}
  <div className="p-6">
    <h3>{product.title}</h3>
    <Price amount={product.price} />
  </div>
</div>
```

### Product Page Layout

Edit `src/app/(app)/products/[slug]/page.tsx`:

```typescript
// Add custom sections
<div className="grid lg:grid-cols-2 gap-12">
  {/* Images */}
  <div>...</div>
  
  {/* Info */}
  <div>
    {/* Add reviews section */}
    <div className="mt-12">
      <h3>Customer Reviews</h3>
      {/* Reviews component */}
    </div>
    
    {/* Add related products */}
    <div className="mt-12">
      <h3>Related Products</h3>
      {/* Related products grid */}
    </div>
  </div>
</div>
```

---

## Email Templates

### Customize Order Confirmation

Edit `src/collections/Orders/hooks/sendOrderConfirmation.ts`:

```typescript
const emailHtml = `
  <!DOCTYPE html>
  <html>
    <head>
      <style>
        /* Your custom styles */
        body {
          font-family: Arial, sans-serif;
          background: #f9fafb;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          padding: 40px;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #111;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="logo">Your Store</div>
          <h1>Thanks for your order!</h1>
        </div>
        
        <p>Hi ${order.customer.name},</p>
        <p>We've received your order and will process it soon.</p>
        
        <h2>Order Details</h2>
        <p><strong>Order #:</strong> ${order.orderNumber}</p>
        <p><strong>Total:</strong> $${order.total}</p>
        
        <!-- Order items -->
        <div class="items">
          ${order.items.map(item => `
            <div class="item">
              <p>${item.product.title} x ${item.quantity}</p>
              <p>$${item.price}</p>
            </div>
          `).join('')}
        </div>
        
        <p>Thanks,<br>Your Store Team</p>
      </div>
    </body>
  </html>
`
```

---

## Advanced Customization

### Custom Components

Create reusable components in `src/components/`:

```typescript
// src/components/CustomButton/index.tsx
export const CustomButton = ({ children, ...props }) => {
  return (
    <button 
      className="px-8 py-4 rounded-full bg-accent text-white hover:scale-105 transition"
      {...props}
    >
      {children}
    </button>
  )
}
```

### Custom Hooks

Create custom hooks in `src/hooks/`:

```typescript
// src/hooks/useCustom.ts
export const useCustomHook = () => {
  // Your custom logic
  return { ... }
}
```

### Animations

Add custom animations in `src/app/(app)/globals.css`:

```css
@keyframes your-animation {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-your-animation {
  animation: your-animation 0.6s ease-out;
}
```

---

## Tips & Best Practices

1. **Test Changes Locally:** Always test in development before deploying
2. **Keep Backups:** Commit to git before major changes
3. **Mobile First:** Test on mobile devices
4. **Accessibility:** Maintain WCAG compliance
5. **Performance:** Optimize images and code
6. **Brand Consistency:** Use design tokens (CSS variables)

---

## Need Help?

- 📧 Email: support@juno.dev
- 💬 Discord: [Join Community](https://discord.gg/juno)
- 📖 Docs: [Full Documentation](./README.md)

---

**Make it yours! 🎨**

