# CMS Guide for 6:30SHOP

## What Your Client Can Manage Through the CMS

### ✅ **Essential Collections (Must Have)**

#### 1. **Products** (`/admin/collections/products`)

- **What they can do:**
  - Add/edit/delete products
  - Set product title, description, price
  - Upload product images (gallery)
  - Set inventory quantities and stock status
  - Mark products as "featured" (appears on homepage)
  - Set publish status (draft/published)
  - Assign categories

- **How it appears on site:**
  - Featured products appear in the hero section on homepage
  - All products accessible via shop pages

#### 2. **Orders** (`/admin/collections/orders`)

- **What they can do:**
  - View all customer orders
  - See order details (customer info, items, totals, dates)
  - Track order status
  - Access sales dashboard at `/dashboard` (admin only)

- **How it appears on site:**
  - Sales dashboard shows revenue, order count, top products
  - Orders table with customer details and totals

#### 3. **Media** (`/admin/collections/media`)

- **What they can do:**
  - Upload images, videos, documents
  - Organize media library
  - Reuse media across products, events, charity

- **How it appears on site:**
  - Images used in products, events, charity sections

---

### ✅ **Important Collections (Should Have)**

#### 4. **Events** (`/admin/collections/events`)

- **What they can do:**
  - Add/edit/delete music events
  - Set event title, description, location
  - Set event date and time
  - Upload event image
  - Set status (available, sold-out, cancelled, upcoming)
  - Add ticket purchase link (optional)

- **How it appears on site:**
  - Events section on homepage shows upcoming events
  - Only events with status "available" or "upcoming" appear

#### 5. **Categories** (`/admin/collections/categories`)

- **What they can do:**
  - Create product categories (e.g., "T-Shirts", "Hoodies")
  - Organize products into categories
  - Create subcategories (parent/child relationships)

- **How it appears on site:**
  - Used for filtering products in shop
  - Product categorization

---

### ✅ **Nice to Have**

#### 6. **Pages** (`/admin/collections/pages`)

- **What they can do:**
  - Create simple content pages (About, Terms, Privacy, etc.)
  - Rich text editor for content
  - Set page slugs/URLs

- **How it appears on site:**
  - Accessible via `/pages/[slug]` routes

#### 7. **Charity** (`/admin/globals/charity`)

- **What they can do:**
  - Update charity section title and description
  - Add/edit initiatives (Clean Water, Renewable Energy, etc.)
  - Update fundraiser campaign:
    - Fundraiser title
    - Goal amount (EUR)
    - Amount raised (EUR)
    - Number of donations
    - Donation link (GoFundMe, etc.)
    - Fundraiser image
  - Upload initiative images

- **How it appears on site:**
  - Charity section on homepage
  - Progress bar automatically calculates percentage
  - Initiative images displayed

---

## Quick Start Guide for Your Client

### First Steps:

1. **Login:** Go to `/admin` and log in with admin credentials
2. **Add Products:**
   - Go to **Products** → **Create New**
   - Fill in title, description, price
   - Upload at least one product image
   - Mark as "Featured" if you want it on homepage
   - Set status to "Published"
   - Save

3. **Add Events:**
   - Go to **Events** → **Create New**
   - Fill in event details
   - Set status to "Available" or "Upcoming"
   - Save

4. **Update Charity:**
   - Go to **Globals** → **Charity**
   - Update fundraiser amounts and link
   - Add initiatives
   - Save

5. **View Sales:**
   - Click dashboard icon in navbar (admin only)
   - Or go to `/dashboard`
   - See revenue, orders, top products

---

## What's NOT in the CMS (Hardcoded)

These sections are intentionally hardcoded for design consistency:

- **Homepage Hero Background** - Background image is fixed
- **Logo** - SVG logos in `/public/Logos/`
- **Navigation** - Navbar structure
- **Footer** - Footer structure
- **Gallery Section** - Circular gallery animation (can be extended later)
- **Contact Section** - Contact form

---

## Access Control

- **Admin:** Full access to all collections and dashboard
- **Public:** Can view published products and events
- **Customers:** Can place orders and view their own orders

---

## Tips for Your Client

1. **Always publish products/events** - Set status to "Published" for them to appear on site
2. **Use featured products** - Mark best sellers as "Featured" to show on homepage
3. **Update charity regularly** - Keep fundraiser amounts current
4. **Use high-quality images** - Upload sharp product/event images
5. **Organize with categories** - Group products logically

---

## Dashboard Access

The sales dashboard (`/dashboard`) is available to admin users only. It shows:

- Total revenue
- Total orders
- Average order value
- Revenue chart (last 30 days)
- Top selling products
- Recent orders table
