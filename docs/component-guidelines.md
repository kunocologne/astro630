# Component Development Guidelines

**Professional component standards for consistent, maintainable code.**

---

## 🧩 **Component Architecture**

### **File Structure**
```
src/components/
├── ui/                    # shadcn/ui base components
├── layout/               # Layout components (Header, Footer)
├── forms/                # Form components
├── animations/           # Animation components
└── [feature]/            # Feature-specific components
```

### **Naming Conventions**
- **Components**: PascalCase (`UserProfile.tsx`)
- **Files**: PascalCase (`UserProfile.tsx`)
- **Props interfaces**: PascalCase + Props (`UserProfileProps`)
- **Hooks**: camelCase starting with 'use' (`useUserData`)

---

## 🎨 **Design System Integration**

### **shadcn/ui Components**
```tsx
// Use existing shadcn/ui components
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
```

### **Custom Component Structure**
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
    <div className={cn("base-styles", className)}>
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && <p className="text-muted-foreground">{description}</p>}
      {children}
    </div>
  )
}
```

---

## 🎭 **Animation Components**

### **Framer Motion Integration**
```tsx
import { motion } from "framer-motion"

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Component with animation
export function AnimatedCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  )
}
```

### **Animation Performance**
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
```

---

## 📱 **Responsive Design**

### **Breakpoint Utilities**
```tsx
// Responsive classes
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* Content */}
</div>

// Responsive spacing
<section className="py-8 md:py-16 lg:py-24">
  {/* Content */}
</section>
```

### **Mobile-First Approach**
```tsx
// Start with mobile, enhance for larger screens
<div className="
  text-sm md:text-base lg:text-lg
  p-4 md:p-6 lg:p-8
  grid-cols-1 md:grid-cols-2 lg:grid-cols-3
">
  {/* Content */}
</div>
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

## 🎨 **Styling Guidelines**

### **Tailwind CSS Best Practices**
```tsx
// Use design tokens
<div className="
  bg-background text-foreground
  border border-border
  rounded-lg shadow-sm
  p-6 space-y-4
">
  {/* Content */}
</div>
```

### **CSS Custom Properties**
```css
/* Use CSS variables for consistency */
.component {
  --component-bg: hsl(var(--background));
  --component-text: hsl(var(--foreground));
  --component-border: hsl(var(--border));
}
```

---

## 🧪 **Testing Standards**

### **Component Testing**
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

---

## 📊 **Performance Optimization**

### **Code Splitting**
```tsx
// Lazy load heavy components
const HeavyComponent = lazy(() => import('./HeavyComponent'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  )
}
```

### **Memoization**
```tsx
// Memoize expensive components
const ExpensiveComponent = memo(({ data }: { data: any[] }) => {
  const processedData = useMemo(() => 
    data.map(item => expensiveCalculation(item)), 
    [data]
  )
  
  return <div>{/* Render processed data */}</div>
})
```

---

## 🔧 **Development Workflow**

### **Component Creation Process**
1. **Plan the component** - What does it need to do?
2. **Design the interface** - What props does it need?
3. **Write the component** - Implement with TypeScript
4. **Add tests** - Unit tests and accessibility tests
5. **Document usage** - Add JSDoc comments
6. **Test in context** - Use in actual templates

### **Code Review Checklist**
- [ ] TypeScript types are correct
- [ ] Accessibility standards met
- [ ] Responsive design works
- [ ] Performance is optimized
- [ ] Tests are comprehensive
- [ ] Documentation is clear

---

## 📚 **Documentation Standards**

### **JSDoc Comments**
```tsx
/**
 * A reusable card component with optional header and footer
 * 
 * @param title - The main title of the card
 * @param description - Optional description text
 * @param children - Content to render inside the card
 * @param className - Additional CSS classes
 * @param variant - Visual variant of the card
 */
interface CardProps {
  title: string
  description?: string
  children?: React.ReactNode
  className?: string
  variant?: 'default' | 'outlined' | 'filled'
}
```

### **Usage Examples**
```tsx
// Example usage in documentation
<Card 
  title="Welcome"
  description="This is a sample card"
  variant="outlined"
>
  <p>Card content goes here</p>
</Card>
```

---

## 🎯 **Quality Checklist**

### **Before Shipping Component**
- [ ] **TypeScript** - No type errors
- [ ] **Accessibility** - WCAG 2.1 AA compliant
- [ ] **Responsive** - Works on all screen sizes
- [ ] **Performance** - No unnecessary re-renders
- [ ] **Testing** - Unit tests pass
- [ ] **Documentation** - Clear usage examples
- [ ] **Design** - Matches design system
- [ ] **Browser** - Works in all target browsers

### **Performance Metrics**
- **Bundle size** - Keep components lightweight
- **Render time** - Optimize for 60fps
- **Memory usage** - No memory leaks
- **Accessibility** - Screen reader compatible

---

## 🚀 **Best Practices**

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

**Remember: Every component should be production-ready, accessible, and maintainable. Quality code = Quality results.**
