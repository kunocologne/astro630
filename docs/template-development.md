# Template Development Guide

**Creating and maintaining professional website templates for JUNO.**

---

## 🎯 **Template Development Process**

### **Phase 1: Planning & Research (2-4 hours)**
1. **Market Research** - Study target audience needs
2. **Competitive Analysis** - Review Awwwards winners
3. **Wireframing** - Plan layout and structure
4. **Content Strategy** - Define messaging and hierarchy
5. **Technical Planning** - Choose components and features

### **Phase 2: Design & Development (8-12 hours)**
1. **Visual Design** - Create cohesive design system
2. **Component Development** - Build reusable components
3. **Responsive Implementation** - Mobile-first approach
4. **Animation Integration** - Smooth, purposeful motion
5. **Accessibility Implementation** - WCAG 2.1 AA compliance

### **Phase 3: Testing & Optimization (4-6 hours)**
1. **Cross-Browser Testing** - All major browsers
2. **Device Testing** - Real device testing
3. **Performance Optimization** - Lighthouse 90+
4. **Accessibility Testing** - Screen reader compatibility
5. **Quality Scoring** - Awwwards criteria evaluation

---

## 🎨 **Design System Requirements**

### **Color Palette**
```css
/* Primary Colors */
--primary: #6366f1;        /* Indigo */
--primary-foreground: #ffffff;

/* Secondary Colors */
--secondary: #8b5cf6;      /* Purple */
--secondary-foreground: #ffffff;

/* Accent Colors */
--accent: #f59e0b;         /* Amber */
--accent-foreground: #ffffff;

/* Neutral Colors */
--background: #ffffff;
--foreground: #0f172a;
--muted: #f1f5f9;
--muted-foreground: #64748b;
--border: #e2e8f0;
```

### **Typography Scale**
```css
/* Responsive Typography */
h1 { font-size: clamp(2.5rem, 5vw, 4rem); }
h2 { font-size: clamp(2rem, 4vw, 3rem); }
h3 { font-size: clamp(1.5rem, 3vw, 2rem); }
h4 { font-size: clamp(1.25rem, 2.5vw, 1.5rem); }
body { font-size: clamp(1rem, 2vw, 1.125rem); }
```

### **Spacing System**
```css
/* 8px Grid System */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

---

## 🧩 **Component Architecture**

### **Required Components**
```tsx
// Layout Components
- Header (Navigation, Logo, Menu)
- Footer (Links, Contact, Social)
- Hero (Main landing section)
- About (Company information)
- Services (Service offerings)
- Portfolio (Work showcase)
- Testimonials (Client reviews)
- Contact (Contact form, info)
```

### **Component Structure**
```tsx
// Component template
interface ComponentProps {
  title: string
  description?: string
  className?: string
  children?: React.ReactNode
}

export function Component({ 
  title, 
  description, 
  className,
  children 
}: ComponentProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        {description && (
          <p className="text-muted-foreground mb-8">{description}</p>
        )}
        {children}
      </div>
    </section>
  )
}
```

---

## 🎭 **Animation Standards**

### **Framer Motion Integration**
```tsx
import { motion } from "framer-motion"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

// Component with animation
export function AnimatedSection({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={staggerChildren}
    >
      {children}
    </motion.section>
  )
}
```

### **Performance Optimization**
```tsx
// Optimize animations for performance
const optimizedVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

// Respect user preferences
const reducedMotionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
}
```

---

## 📱 **Responsive Design**

### **Breakpoint System**
```css
/* Mobile First Approach */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large screens */
```

### **Grid System**
```tsx
// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>

// Responsive spacing
<section className="py-8 md:py-16 lg:py-24">
  {/* Content */}
</section>
```

### **Touch Targets**
```css
/* Minimum 44px for touch targets */
.button {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 24px;
}
```

---

## ♿ **Accessibility Standards**

### **Semantic HTML**
```tsx
// Use proper semantic elements
<article>
  <header>
    <h1>Article Title</h1>
    <time dateTime="2025-01-01">January 1, 2025</time>
  </header>
  <main>
    <p>Article content...</p>
  </main>
  <footer>
    <p>Author information</p>
  </footer>
</article>
```

### **ARIA Labels**
```tsx
// Add proper ARIA labels
<button 
  aria-label="Close dialog"
  aria-expanded={isOpen}
  onClick={handleClose}
>
  <X className="h-4 w-4" />
</button>
```

### **Keyboard Navigation**
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

## 🧪 **Testing Requirements**

### **Unit Testing**
```tsx
// Test component rendering
import { render, screen } from '@testing-library/react'
import { Component } from './Component'

test('renders component with props', () => {
  render(<Component title="Test Title" />)
  expect(screen.getByText('Test Title')).toBeInTheDocument()
})
```

### **Accessibility Testing**
```tsx
// Test accessibility
import { axe, toHaveNoViolations } from 'jest-axe'

test('should not have accessibility violations', async () => {
  const { container } = render(<Component />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

### **E2E Testing**
```tsx
// Test user interactions
import { test, expect } from '@playwright/test'

test('user can navigate through site', async ({ page }) => {
  await page.goto('/')
  await page.click('[data-testid="nav-link"]')
  await expect(page).toHaveURL('/about')
})
```

---

## 📊 **Performance Standards**

### **Lighthouse Requirements**
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 90+

### **Optimization Techniques**
```tsx
// Image optimization
import Image from 'next/image'

<Image
  src="/hero-image.jpg"
  alt="Hero image"
  width={1200}
  height={800}
  priority
  className="w-full h-auto"
/>

// Code splitting
const HeavyComponent = lazy(() => import('./HeavyComponent'))

// Memoization
const ExpensiveComponent = memo(({ data }) => {
  const processedData = useMemo(() => 
    data.map(item => expensiveCalculation(item)), 
    [data]
  )
  
  return <div>{/* Render processed data */}</div>
})
```

---

## 🎯 **Quality Checklist**

### **Design Excellence (7.5+/10)**
- [ ] Typography hierarchy is perfect
- [ ] Color palette is cohesive and professional
- [ ] Spacing follows 8px grid system
- [ ] Visual hierarchy guides user naturally
- [ ] Animations are smooth and purposeful

### **Usability Perfection (7.5+/10)**
- [ ] Mobile experience equals desktop quality
- [ ] Performance scores 90+ on Lighthouse
- [ ] Navigation is intuitive without explanation
- [ ] Forms work flawlessly
- [ ] Accessibility score 95+

### **Creative Innovation (7.0+/10)**
- [ ] Has unique visual signature
- [ ] Not generic or template-y
- [ ] At least one "wow" moment
- [ ] Memorable design elements
- [ ] Shows craftsmanship and attention to detail

### **Content Excellence (7.0+/10)**
- [ ] Headlines are compelling and action-oriented
- [ ] Copy is clear and scannable
- [ ] CTAs are obvious and persuasive
- [ ] SEO optimized with proper meta tags
- [ ] Information architecture makes sense

---

## 🚀 **Template Categories**

### **Portfolio - Bold**
**Target**: Designers, photographers, creatives
**Style**: Pink/purple gradients, bold, creative
**Key Features**: Bento box layouts, 3D effects, magnetic buttons

### **SaaS - Futuristic**
**Target**: Tech startups, software companies
**Style**: Blue/cyan, professional, modern
**Key Features**: Clean typography, data visualization, modern animations

### **Agency - Corporate**
**Target**: Agencies, consultancies, services
**Style**: Navy/gray, clean, corporate
**Key Features**: Professional layouts, trust indicators, case studies

---

## 📚 **Documentation Standards**

### **Template Documentation**
```tsx
/**
 * Portfolio Bold Template
 * 
 * A modern, professional portfolio template featuring:
 * - Bento box layout for work showcase
 * - 3D tilt effects on project cards
 * - Magnetic button interactions
 * - Smooth scroll animations
 * - Mobile-first responsive design
 * 
 * @version 1.0.0
 * @author JUNO Team
 */
```

### **Component Documentation**
```tsx
/**
 * Hero Section Component
 * 
 * Main landing section with company branding and CTA
 * 
 * @param title - Main headline
 * @param subtitle - Supporting text
 * @param ctaText - Call-to-action button text
 * @param ctaLink - Call-to-action button link
 * @param backgroundImage - Hero background image
 */
```

---

## 🔧 **Development Workflow**

### **Template Creation Process**
1. **Research** - Study target audience and competitors
2. **Wireframe** - Plan layout and structure
3. **Design** - Create visual design system
4. **Develop** - Build components and pages
5. **Test** - Cross-browser and device testing
6. **Optimize** - Performance and accessibility
7. **Document** - Add usage documentation
8. **Deploy** - Add to template library

### **Quality Assurance**
- [ ] **TypeScript** - No type errors
- [ ] **Accessibility** - WCAG 2.1 AA compliant
- [ ] **Responsive** - Works on all screen sizes
- [ ] **Performance** - Lighthouse 90+
- [ ] **Testing** - Unit and E2E tests pass
- [ ] **Documentation** - Clear usage examples
- [ ] **Design** - Matches design system
- [ ] **Browser** - Works in all target browsers

---

## 🎓 **Best Practices**

### **Do's**
- ✅ Use semantic HTML elements
- ✅ Implement proper TypeScript types
- ✅ Write comprehensive tests
- ✅ Follow accessibility guidelines
- ✅ Optimize for performance
- ✅ Document component usage
- ✅ Use design system tokens
- ✅ Test on real devices

### **Don'ts**
- ❌ Don't use inline styles
- ❌ Don't ignore accessibility
- ❌ Don't skip TypeScript types
- ❌ Don't forget mobile testing
- ❌ Don't create overly complex components
- ❌ Don't ignore performance
- ❌ Don't skip documentation

---

**Remember: Every template should be production-ready, accessible, and maintainable. Quality templates = Quality results.**
