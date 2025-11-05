# 🎨 SPECTRUM Design System - Quick Reference

## Color Palette

### Primary Colors (Brand)

| Color                    | Value     | Usage                           |
| ------------------------ | --------- | ------------------------------- |
| **Indigo 950**           | `#1e1b4b` | Dark backgrounds, text          |
| **Indigo 600** (Primary) | `#4f46e5` | Buttons, links, highlights      |
| **Indigo 400**           | `#818cf8` | Light accents, hover states     |
| **Purple 600**           | `#a855f7` | Gradients, secondary highlights |
| **Orange** (Accent)      | `#ff8c00` | CTAs, special attention         |

### Tailwind Classes

```tsx
// Background
bg-indigo-600, bg-purple-600, bg-indigo-950

// Text
text-indigo-600, text-white, text-slate-400

// Gradients
from-indigo-600 to-purple-600
from-orange-400 to-orange-600
```

---

## Typography

### Font Stack

```css
--font-sans: Inter, system-ui, -apple-system, sans-serif;
--font-serif: Lora, serif;
--font-mono: IBM Plex Mono, monospace;
```

### Heading Sizes

| Level         | Desktop  | Tablet   | Mobile  |
| ------------- | -------- | -------- | ------- |
| **H1 (Hero)** | 4.5rem   | 3.5rem   | 2.5rem  |
| **H1**        | 3rem     | 2.5rem   | 2rem    |
| **H2**        | 2.5rem   | 2rem     | 1.75rem |
| **H3**        | 2rem     | 1.75rem  | 1.5rem  |
| **Body**      | 1.125rem | 1rem     | 1rem    |
| **Small**     | 0.875rem | 0.875rem | 0.75rem |

### Tailwind Classes

```tsx
<h1 className="text-3xl md:text-5xl font-bold">Hero Title</h1>
<h2 className="text-2xl md:text-4xl font-bold">Heading</h2>
<p className="text-base md:text-lg text-slate-600">Body text</p>
```

---

## Spacing System

### Scale (base: 0.25rem / 4px)

| Size | Value   | Tailwind |
| ---- | ------- | -------- |
| xs   | 0.25rem | px-1     |
| sm   | 0.5rem  | px-2     |
| md   | 1rem    | px-4     |
| lg   | 1.5rem  | px-6     |
| xl   | 2rem    | px-8     |
| 2xl  | 3rem    | px-12    |
| 3xl  | 4rem    | px-16    |
| 4xl  | 6rem    | px-24    |

### Common Spacing

```tsx
// Section padding
<section className="py-20 md:py-24 lg:py-32">

// Component padding
<div className="p-4 md:p-6 lg:p-8">

// Gap between items
<div className="gap-4 md:gap-6 lg:gap-8">
```

---

## Components

### Buttons

#### Primary Button

```tsx
<button className="rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
  Action Button
</button>
```

#### Secondary Button

```tsx
<button className="rounded-md border-2 border-indigo-600 px-6 py-2.5 font-semibold text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white">
  Secondary
</button>
```

#### Accent Button (CTA)

```tsx
<button className="rounded-md bg-orange-500 px-6 py-2.5 font-semibold text-white transition-all duration-300 hover:bg-orange-600">
  Special Offer
</button>
```

### Cards

#### Glass Card

```tsx
<div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:bg-white/10">
  Content
</div>
```

#### Feature Card

```tsx
<div className="rounded-lg bg-gradient-to-br from-indigo-50 to-purple-50 p-8 transition-all duration-300 hover:shadow-lg dark:from-indigo-900/20 dark:to-purple-900/20">
  Content
</div>
```

### Forms

#### Input Field

```tsx
<input
  className="w-full rounded-md border border-white/10 bg-white/5 px-4 py-2.5 text-white placeholder-slate-500 transition-all focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/20"
  placeholder="Enter text..."
/>
```

---

## Animations

### Duration Reference

```css
--duration-fast: 0.15s --duration-normal: 0.3s --duration-slow: 0.5s --duration-slower: 0.75s;
```

### Easing Functions

```css
--easing-linear: linear --easing-ease: ease --easing-in-out: ease-in-out
  --easing-cubic: cubic-bezier(0.16, 1, 0.3, 1);
```

### Common Animations

```tsx
// Fade in on hover
className = 'transition-all duration-300 hover:opacity-100'

// Lift on hover
className = 'transition-all duration-300 hover:-translate-y-1 hover:shadow-lg'

// Scale
className = 'transition-transform duration-300 hover:scale-105'

// Gradient shift
className = 'animate-gradient-shift'

// Fade in on load
className = 'animate-fade-in'
```

---

## Responsive Design

### Breakpoints

| Device   | Breakpoint | Tailwind  |
| -------- | ---------- | --------- |
| Mobile   | < 640px    | (default) |
| Small    | 640px      | `sm:`     |
| Medium   | 768px      | `md:`     |
| Large    | 1024px     | `lg:`     |
| X-Large  | 1280px     | `xl:`     |
| XX-Large | 1536px     | `2xl:`    |

### Mobile-First Pattern

```tsx
// Mobile first (default)
className="
  text-base            // mobile
  sm:text-sm           // on small screens
  md:text-lg           // on medium screens
  lg:text-xl           // on large screens
"
```

---

## Accessibility

### Color Contrast

- All text meets WCAG AA standards
- Primary on white: ✅ Compliant
- White on primary: ✅ Compliant

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Semantic HTML

```tsx
<nav>Navigation</nav>
<main>Main Content</main>
<article>Article</article>
<section>Section</section>
<aside>Sidebar</aside>
<footer>Footer</footer>
```

---

## Gradient Examples

### Primary Gradient

```tsx
className = 'bg-gradient-to-r from-indigo-600 to-purple-600'
```

### Accent Gradient

```tsx
className = 'bg-gradient-to-r from-orange-400 to-orange-600'
```

### Soft Gradient (Light)

```tsx
className = 'bg-gradient-to-br from-indigo-50 to-purple-50'
```

---

## Dark Mode

All components automatically support dark mode via `dark:` prefix:

```tsx
className="
  bg-white text-slate-900        // light mode
  dark:bg-slate-900 dark:text-white  // dark mode
"
```

---

## Common Patterns

### Hero Section

```tsx
<section className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 to-slate-950 text-white">
  <div className="container mx-auto px-4 text-center">
    <h1 className="mb-6 text-5xl font-bold">Title</h1>
    <p className="mb-8 text-xl text-slate-400">Subtitle</p>
  </div>
</section>
```

### Feature Grid

```tsx
<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
  {features.map((feature) => (
    <div key={feature.id} className="rounded-lg bg-white/5 p-6 backdrop-blur">
      {feature.content}
    </div>
  ))}
</div>
```

### CTA Section

```tsx
<section className="bg-gradient-to-r from-indigo-600 to-purple-600 py-20">
  <div className="container mx-auto text-center text-white">
    <h2 className="mb-6 text-4xl font-bold">Call to Action</h2>
    <button className="rounded bg-white px-8 py-3 font-bold text-indigo-600 hover:shadow-xl">
      Get Started
    </button>
  </div>
</section>
```

---

## Resources

- **Design System File**: `/design-system.json`
- **Tailwind Config**: `/tailwind.config.mjs`
- **Global Styles**: `/src/styles/globals.css`
- **Audit Report**: `/STYLING_AUDIT_REPORT.md`

---

_Last Updated: October 26, 2025 | SPECTRUM Design System v2.0_
