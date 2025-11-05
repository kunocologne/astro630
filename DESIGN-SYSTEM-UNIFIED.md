# SPECTRUM - Unified Design System

## Design Philosophy

**Clean. Minimal. Professional.**

Based on the portfolio images provided, this is a modern, minimal design system with:

- Clean white backgrounds
- Subtle borders and shadows
- Orange (#FF6B35) as the only accent color
- Smooth, purposeful animations
- Professional typography

---

## Color Palette

### Primary

- **Orange:** `#FF6B35` - Primary accent, buttons, links, focus states
- **Orange Hover:** `#E55A2B` - Darker shade for hover states

### Neutrals

- **White:** `#FFFFFF` - Main background
- **Gray 50:** `#F9FAFB` - Alternate section background
- **Gray 100:** `#F3F4F6` - Subtle backgrounds (badges, inputs)
- **Gray 200:** `#E5E7EB` - Borders
- **Gray 500:** `#6B7280` - Secondary text
- **Gray 600:** `#4B5563` - Body text
- **Gray 900:** `#111827` - Headings, primary text

### Usage Rules

- **Backgrounds:** Only white or gray-50
- **Text:** Gray-900 for headings, Gray-600 for body, Gray-500 for captions
- **Borders:** Gray-200 only
- **Accents:** Orange only, no other colors

---

## Typography

### Font Family

- **Primary:** Inter, -apple-system, sans-serif
- **Weight:** 400 (normal), 600 (semibold), 700 (bold)

### Scale

- **Display (Hero):** 48-72px, Bold, -0.02em tracking
- **H1:** 36-48px, Bold, -0.01em tracking
- **H2:** 30-36px, Bold, normal tracking
- **H3:** 24px, Semibold
- **Body:** 16px, Normal, 1.6 line-height
- **Small:** 14px, Normal
- **Caption:** 12px, Normal

### Rules

- All headings: Gray-900
- All body text: Gray-600
- All captions: Gray-500
- Line height: 1.2 for headings, 1.6 for body

---

## Spacing

### Base Unit: 8px

### Scale

- **xs:** 4px
- **sm:** 8px
- **md:** 16px
- **lg:** 24px
- **xl:** 32px
- **2xl:** 48px
- **3xl:** 64px
- **4xl:** 96px

### Section Padding

- **Mobile:** 48px vertical
- **Desktop:** 80px vertical

### Container

- **Max Width:** 1280px
- **Padding:** 16px (mobile), 24px (tablet), 32px (desktop)

---

## Components

### Card

```
Background: White
Border: 1px solid #E5E7EB
Border Radius: 16px
Padding: 24px
Shadow: None (default)

Hover:
- Border: 1px solid #FF6B35
- Shadow: 0 10px 15px -3px rgba(0,0,0,0.1)
- Transform: translateY(-4px)
- Transition: all 300ms ease
```

### Button Primary

```
Background: #FF6B35
Color: White
Padding: 12px 24px
Border Radius: 8px
Font: 14px, Semibold
Shadow: 0 1px 2px rgba(0,0,0,0.05)

Hover:
- Background: #E55A2B
- Shadow: 0 4px 6px rgba(255,107,53,0.3)
- Transform: translateY(-1px)
- Transition: all 300ms ease
```

### Button Secondary

```
Background: Transparent
Color: #111827
Border: 1px solid #E5E7EB
Padding: 12px 24px
Border Radius: 8px
Font: 14px, Semibold

Hover:
- Background: #F9FAFB
- Border: 1px solid #D1D5DB
- Transition: all 300ms ease
```

### Input

```
Background: White
Border: 1px solid #E5E7EB
Border Radius: 8px
Padding: 12px 16px
Font: 14px, Normal
Color: #111827
Placeholder: #9CA3AF

Focus:
- Border: 1px solid #FF6B35
- Ring: 0 0 0 3px rgba(255,107,53,0.1)
- Outline: None
```

### Badge

```
Background: #F3F4F6
Color: #6B7280
Padding: 4px 12px
Border Radius: 9999px
Font: 12px, Semibold
```

---

## Layout

### Grid

- **Mobile:** 1 column
- **Tablet:** 2 columns
- **Desktop:** 3-4 columns
- **Gap:** 24px

### Sections

- **Background:** Alternating white and gray-50
- **Padding:** 80px vertical (desktop), 48px (mobile)
- **Max Width:** 1280px centered

---

## Animations

### Timing

- **Fast:** 150ms - Micro-interactions
- **Normal:** 300ms - Standard transitions
- **Slow:** 500ms - Page transitions

### Easing

- **Default:** cubic-bezier(0.4, 0, 0.2, 1)

### Hover Effects

- **Cards:** translateY(-4px) + shadow + border color
- **Buttons:** translateY(-1px) + shadow
- **Images:** scale(1.05) with 700ms duration
- **Links:** Color change only

### Transitions

- All transitions: 300ms ease
- Image transforms: 700ms ease
- No animations on reduced-motion preference

---

## Rules

### DO:

✅ Use only white or gray-50 backgrounds
✅ Use orange (#FF6B35) for all accents
✅ Use subtle borders (gray-200)
✅ Use minimal shadows
✅ Use smooth 300ms transitions
✅ Keep spacing consistent (8px base)
✅ Use Inter font only

### DON'T:

❌ Use gradients
❌ Use multiple accent colors
❌ Use dark backgrounds
❌ Use heavy shadows
❌ Use complex animations
❌ Mix font families
❌ Use inconsistent spacing

---

## Component Checklist

Every component must have:

- [ ] Consistent spacing (8px base)
- [ ] Proper color usage (gray-900 headings, gray-600 body)
- [ ] Orange accent only
- [ ] Subtle borders (gray-200)
- [ ] Smooth transitions (300ms)
- [ ] Hover states defined
- [ ] Responsive design
- [ ] Accessibility (focus states, contrast)
