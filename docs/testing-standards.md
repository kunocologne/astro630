# Testing Standards

**Comprehensive quality assurance for professional website delivery.**

---

## 🧪 **Testing Philosophy**

### **Quality First Approach**

- **Zero Tolerance** - No bugs in production
- **Performance Standards** - Lighthouse 90+ across all metrics
- **Accessibility Compliance** - WCAG 2.1 AA mandatory
- **Cross-Platform** - Works on all devices and browsers
- **User Experience** - Intuitive and delightful interactions

### **Testing Pyramid**

```
    E2E Tests (10%)
   ┌─────────────────┐
  │ Integration Tests (20%) │
 ┌─────────────────────────┐
│    Unit Tests (70%)     │
└─────────────────────────┘
```

---

## 🔬 **Unit Testing**

### **Component Testing**

```tsx
// Test component rendering
import { render, screen } from '@testing-library/react'
import { Component } from './Component'

test('renders component with props', () => {
  render(<Component title="Test Title" />)
  expect(screen.getByText('Test Title')).toBeInTheDocument()
})

test('handles user interactions', () => {
  const handleClick = jest.fn()
  render(<Component onClick={handleClick} />)

  fireEvent.click(screen.getByRole('button'))
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

### **Hook Testing**

```tsx
// Test custom hooks
import { renderHook, act } from '@testing-library/react'
import { useCounter } from './useCounter'

test('increments counter', () => {
  const { result } = renderHook(() => useCounter())

  act(() => {
    result.current.increment()
  })

  expect(result.current.count).toBe(1)
})
```

### **Utility Function Testing**

```tsx
// Test utility functions
import { formatDate, calculateTotal } from './utils'

test('formats date correctly', () => {
  const date = new Date('2025-01-01')
  expect(formatDate(date)).toBe('January 1, 2025')
})

test('calculates total correctly', () => {
  const items = [
    { price: 10, quantity: 2 },
    { price: 5, quantity: 1 },
  ]
  expect(calculateTotal(items)).toBe(25)
})
```

---

## 🔗 **Integration Testing**

### **API Integration**

```tsx
// Test API calls
import { render, screen, waitFor } from '@testing-library/react'
import { fetchUserData } from './api'

test('fetches and displays user data', async () => {
  const mockData = { name: 'John Doe', email: 'john@example.com' }
  jest.spyOn(global, 'fetch').mockResolvedValue({
    json: () => Promise.resolve(mockData),
  })

  render(<UserProfile userId="123" />)

  await waitFor(() => {
    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})
```

### **Form Integration**

```tsx
// Test form submission
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { ContactForm } from './ContactForm'

test('submits form with valid data', async () => {
  const mockSubmit = jest.fn()
  render(<ContactForm onSubmit={mockSubmit} />)

  fireEvent.change(screen.getByLabelText('Name'), {
    target: { value: 'John Doe' },
  })
  fireEvent.change(screen.getByLabelText('Email'), {
    target: { value: 'john@example.com' },
  })
  fireEvent.click(screen.getByRole('button', { name: 'Submit' }))

  await waitFor(() => {
    expect(mockSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
    })
  })
})
```

---

## 🎭 **E2E Testing**

### **User Journey Testing**

```tsx
// Test complete user flows
import { test, expect } from '@playwright/test'

test('user can complete contact form', async ({ page }) => {
  await page.goto('/contact')

  // Fill out form
  await page.fill('[data-testid="name-input"]', 'John Doe')
  await page.fill('[data-testid="email-input"]', 'john@example.com')
  await page.fill('[data-testid="message-input"]', 'Test message')

  // Submit form
  await page.click('[data-testid="submit-button"]')

  // Verify success message
  await expect(page.locator('[data-testid="success-message"]')).toBeVisible()
})
```

### **Navigation Testing**

```tsx
// Test site navigation
test('user can navigate through site', async ({ page }) => {
  await page.goto('/')

  // Test navigation menu
  await page.click('[data-testid="nav-about"]')
  await expect(page).toHaveURL('/about')

  await page.click('[data-testid="nav-contact"]')
  await expect(page).toHaveURL('/contact')
})
```

### **Responsive Testing**

```tsx
// Test responsive design
test('site works on mobile', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 })
  await page.goto('/')

  // Test mobile navigation
  await page.click('[data-testid="mobile-menu-button"]')
  await expect(page.locator('[data-testid="mobile-menu"]')).toBeVisible()
})
```

---

## ♿ **Accessibility Testing**

### **Screen Reader Testing**

```tsx
// Test screen reader compatibility
import { axe, toHaveNoViolations } from 'jest-axe'

test('should not have accessibility violations', async () => {
  const { container } = render(<Component />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

### **Keyboard Navigation**

```tsx
// Test keyboard accessibility
test('can navigate with keyboard', async ({ page }) => {
  await page.goto('/')

  // Tab through interactive elements
  await page.keyboard.press('Tab')
  await expect(page.locator(':focus')).toBeVisible()

  // Test Enter key activation
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL('/about')
})
```

### **Color Contrast Testing**

```tsx
// Test color contrast ratios
test('meets color contrast requirements', async ({ page }) => {
  await page.goto('/')

  // Check text contrast
  const textElements = await page.locator('p, h1, h2, h3, h4, h5, h6')
  const count = await textElements.count()

  for (let i = 0; i < count; i++) {
    const element = textElements.nth(i)
    const contrast = await element.evaluate((el) => {
      // Check contrast ratio (simplified)
      return window.getComputedStyle(el).color
    })
    expect(contrast).toBeDefined()
  }
})
```

---

## 📊 **Performance Testing**

### **Lighthouse Testing**

```tsx
// Test performance metrics
import { chromium } from 'playwright'

test('meets performance standards', async () => {
  const browser = await chromium.launch()
  const page = await browser.newPage()

  await page.goto('http://localhost:3000')

  // Run Lighthouse audit
  const metrics = await page.evaluate(() => {
    return new Promise((resolve) => {
      // Lighthouse audit logic
      resolve({
        performance: 90,
        accessibility: 95,
        bestPractices: 90,
        seo: 90,
      })
    })
  })

  expect(metrics.performance).toBeGreaterThanOrEqual(90)
  expect(metrics.accessibility).toBeGreaterThanOrEqual(95)

  await browser.close()
})
```

### **Load Testing**

```tsx
// Test under load
test('handles multiple users', async ({ page }) => {
  const promises = []

  // Simulate 10 concurrent users
  for (let i = 0; i < 10; i++) {
    promises.push(page.goto('/'))
  }

  await Promise.all(promises)

  // Verify site still works
  await expect(page.locator('h1')).toBeVisible()
})
```

---

## 🌐 **Cross-Browser Testing**

### **Browser Compatibility**

```tsx
// Test on different browsers
const browsers = ['chromium', 'firefox', 'webkit']

browsers.forEach((browserName) => {
  test(`works on ${browserName}`, async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('h1')).toBeVisible()
  })
})
```

### **Device Testing**

```tsx
// Test on different devices
const devices = [
  { name: 'iPhone 12', viewport: { width: 390, height: 844 } },
  { name: 'iPad', viewport: { width: 768, height: 1024 } },
  { name: 'Desktop', viewport: { width: 1920, height: 1080 } },
]

devices.forEach((device) => {
  test(`works on ${device.name}`, async ({ page }) => {
    await page.setViewportSize(device.viewport)
    await page.goto('/')
    await expect(page.locator('h1')).toBeVisible()
  })
})
```

---

## 🧪 **Visual Testing**

### **Screenshot Testing**

```tsx
// Test visual consistency
test('matches design mockup', async ({ page }) => {
  await page.goto('/')

  // Take screenshot
  await page.screenshot({ path: 'screenshot.png' })

  // Compare with baseline
  expect(await page.screenshot()).toMatchSnapshot('homepage.png')
})
```

### **Layout Testing**

```tsx
// Test layout consistency
test('maintains layout on different screen sizes', async ({ page }) => {
  const viewports = [
    { width: 375, height: 667 }, // Mobile
    { width: 768, height: 1024 }, // Tablet
    { width: 1920, height: 1080 }, // Desktop
  ]

  for (const viewport of viewports) {
    await page.setViewportSize(viewport)
    await page.goto('/')

    // Check layout elements
    await expect(page.locator('[data-testid="header"]')).toBeVisible()
    await expect(page.locator('[data-testid="main"]')).toBeVisible()
    await expect(page.locator('[data-testid="footer"]')).toBeVisible()
  }
})
```

---

## 🔍 **Security Testing**

### **Input Validation**

```tsx
// Test input sanitization
test('sanitizes user input', async ({ page }) => {
  await page.goto('/contact')

  // Try to inject malicious content
  await page.fill('[data-testid="message-input"]', '<script>alert("xss")</script>')
  await page.click('[data-testid="submit-button"]')

  // Verify script is not executed
  const alertHandled = await page.evaluate(() => {
    return new Promise((resolve) => {
      window.alert = () => resolve(true)
      setTimeout(() => resolve(false), 1000)
    })
  })

  expect(alertHandled).toBe(false)
})
```

### **Authentication Testing**

```tsx
// Test authentication flows
test('protects admin routes', async ({ page }) => {
  await page.goto('/admin')

  // Should redirect to login
  await expect(page).toHaveURL('/login')

  // Login with valid credentials
  await page.fill('[data-testid="email-input"]', 'admin@example.com')
  await page.fill('[data-testid="password-input"]', 'password')
  await page.click('[data-testid="login-button"]')

  // Should redirect to admin
  await expect(page).toHaveURL('/admin')
})
```

---

## 📈 **Testing Metrics**

### **Coverage Requirements**

- **Unit Tests**: 80%+ code coverage
- **Integration Tests**: 70%+ coverage
- **E2E Tests**: 60%+ critical path coverage
- **Accessibility Tests**: 100% WCAG compliance

### **Performance Benchmarks**

- **Lighthouse Performance**: 90+
- **Lighthouse Accessibility**: 95+
- **Lighthouse Best Practices**: 90+
- **Lighthouse SEO**: 90+
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1

---

## 🚀 **CI/CD Integration**

### **Automated Testing**

```yaml
# GitHub Actions workflow
name: Test Suite
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: bun install
      - run: bun test
      - run: bun run test:e2e
      - run: bun run test:accessibility
```

### **Quality Gates**

```yaml
# Pre-deployment checks
quality-gates:
  - unit-tests: pass
  - integration-tests: pass
  - e2e-tests: pass
  - accessibility-tests: pass
  - performance-tests: pass
  - security-tests: pass
```

---

## 🎯 **Testing Checklist**

### **Before Deployment**

- [ ] **Unit Tests** - All components tested
- [ ] **Integration Tests** - API and form interactions tested
- [ ] **E2E Tests** - Complete user journeys tested
- [ ] **Accessibility Tests** - WCAG 2.1 AA compliant
- [ ] **Performance Tests** - Lighthouse 90+ scores
- [ ] **Cross-Browser Tests** - Works on all target browsers
- [ ] **Mobile Tests** - Perfect mobile experience
- [ ] **Security Tests** - Input validation and authentication

### **Post-Deployment**

- [ ] **Smoke Tests** - Basic functionality works
- [ ] **Performance Monitoring** - Real-time metrics
- [ ] **Error Monitoring** - No critical errors
- [ ] **User Feedback** - Client satisfaction confirmed

---

## 🔧 **Testing Tools**

### **Unit Testing**

- **Vitest** - Fast unit testing framework
- **React Testing Library** - Component testing utilities
- **Jest** - Test runner and assertions

### **E2E Testing**

- **Playwright** - Cross-browser E2E testing
- **Cypress** - Alternative E2E testing framework

### **Accessibility Testing**

- **axe-core** - Accessibility testing library
- **jest-axe** - Jest integration for axe
- **@testing-library/jest-dom** - Custom matchers

### **Performance Testing**

- **Lighthouse** - Performance auditing
- **WebPageTest** - Performance testing
- **Chrome DevTools** - Performance profiling

---

## 📚 **Testing Documentation**

### **Test Documentation**

```tsx
/**
 * ContactForm Component Tests
 *
 * Tests the contact form functionality including:
 * - Form validation
 * - Submission handling
 * - Error states
 * - Success feedback
 *
 * @group components
 * @group forms
 */
describe('ContactForm', () => {
  // Test cases
})
```

### **Test Reports**

- **Coverage Reports** - Code coverage metrics
- **Performance Reports** - Lighthouse scores
- **Accessibility Reports** - WCAG compliance
- **Test Results** - Pass/fail status

---

**Remember: Quality testing ensures quality delivery. Every test should serve the client's success and revenue goals.**
