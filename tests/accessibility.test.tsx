/**
 * Accessibility Tests - WCAG 2.1 AA Compliance
 * 
 * These tests run automatically to ensure accessibility is maintained
 * Uses @axe-core/react for automated WCAG testing
 */

import { expect, test } from '@playwright/test'

test.describe('Accessibility Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Inject axe-core for accessibility testing
    await page.addScriptTag({
      url: 'https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.2/axe.min.js',
    })
  })

  test('Homepage should have no accessibility violations', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const violations = await page.evaluate(() => {
      return new Promise((resolve) => {
        // @ts-ignore
        axe.run().then((results) => {
          resolve(results.violations)
        })
      })
    })

    expect(violations).toEqual([])
  })

  test('Shop page should have no accessibility violations', async ({ page }) => {
    await page.goto('/shop')
    await page.waitForLoadState('networkidle')

    const violations = await page.evaluate(() => {
      return new Promise((resolve) => {
        // @ts-ignore
        axe.run().then((results) => {
          resolve(results.violations)
        })
      })
    })

    expect(violations).toEqual([])
  })

  test('Product page should have no accessibility violations', async ({ page }) => {
    await page.goto('/products')
    await page.waitForLoadState('networkidle')

    // Click first product if available
    const firstProduct = await page.locator('a[href*="/products/"]').first()
    if (await firstProduct.isVisible()) {
      await firstProduct.click()
      await page.waitForLoadState('networkidle')

      const violations = await page.evaluate(() => {
        return new Promise((resolve) => {
          // @ts-ignore
          axe.run().then((results) => {
            resolve(results.violations)
          })
        })
      })

      expect(violations).toEqual([])
    }
  })

  test('Checkout page should have no accessibility violations', async ({ page }) => {
    await page.goto('/checkout')
    await page.waitForLoadState('networkidle')

    const violations = await page.evaluate(() => {
      return new Promise((resolve) => {
        // @ts-ignore
        axe.run().then((results) => {
          resolve(results.violations)
        })
      })
    })

    expect(violations).toEqual([])
  })

  test('All pages should have proper semantic HTML', async ({ page }) => {
    await page.goto('/')

    // Check for main landmark
    const main = await page.locator('main[role="main"]').count()
    expect(main).toBeGreaterThan(0)

    // Check for header landmark
    const header = await page.locator('header[role="banner"]').count()
    expect(header).toBeGreaterThan(0)

    // Check for footer landmark
    const footer = await page.locator('footer[role="contentinfo"]').count()
    expect(footer).toBeGreaterThan(0)

    // Check for navigation landmark
    const nav = await page.locator('nav[role="navigation"]').count()
    expect(nav).toBeGreaterThan(0)
  })

  test('All images should have alt text', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const imagesWithoutAlt = await page.locator('img:not([alt])').count()
    expect(imagesWithoutAlt).toBe(0)
  })

  test('All links should have accessible names', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const violations = await page.evaluate(() => {
      return new Promise((resolve) => {
        // @ts-ignore
        axe.run({
          rules: {
            'link-name': { enabled: true },
          },
        }).then((results: any) => {
          resolve(results.violations)
        })
      })
    })

    expect(violations).toEqual([])
  })

  test('All form inputs should have labels', async ({ page }) => {
    await page.goto('/login')
    await page.waitForLoadState('networkidle')

    const violations = await page.evaluate(() => {
      return new Promise((resolve) => {
        // @ts-ignore
        axe.run({
          rules: {
            label: { enabled: true },
          },
        }).then((results: any) => {
          resolve(results.violations)
        })
      })
    })

    expect(violations).toEqual([])
  })

  test('Color contrast should meet WCAG AA standards', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const violations = await page.evaluate(() => {
      return new Promise((resolve) => {
        // @ts-ignore
        axe.run({
          rules: {
            'color-contrast': { enabled: true },
          },
        }).then((results: any) => {
          resolve(results.violations)
        })
      })
    })

    expect(violations).toEqual([])
  })

  test('Keyboard navigation should work', async ({ page }) => {
    await page.goto('/')

    // Tab through interactive elements
    await page.keyboard.press('Tab')
    
    // Check if focus is visible
    const focusedElement = await page.evaluate(() => {
      const el = document.activeElement
      if (!el) return false
      
      const styles = window.getComputedStyle(el)
      return (
        styles.outline !== 'none' || 
        styles.outlineWidth !== '0px' ||
        el.getAttribute('data-focus-visible') === 'true'
      )
    })

    expect(focusedElement).toBeTruthy()
  })

  test('Skip to main content link should exist and work', async ({ page }) => {
    await page.goto('/')

    // Tab to skip link
    await page.keyboard.press('Tab')
    
    const skipLink = await page.locator('a[href="#main-content"]').first()
    
    if (await skipLink.isVisible() || await skipLink.isHidden()) {
      await skipLink.click()
      
      // Check if main content is focused
      const mainContentFocused = await page.evaluate(() => {
        const mainContent = document.getElementById('main-content')
        return document.activeElement === mainContent
      })

      expect(mainContentFocused).toBeTruthy()
    }
  })

  test('ARIA attributes should be valid', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const violations = await page.evaluate(() => {
      return new Promise((resolve) => {
        // @ts-ignore
        axe.run({
          rules: {
            'aria-valid-attr': { enabled: true },
            'aria-valid-attr-value': { enabled: true },
          },
        }).then((results: any) => {
          resolve(results.violations)
        })
      })
    })

    expect(violations).toEqual([])
  })

  test('Headings should be in logical order', async ({ page }) => {
    await page.goto('/')
    await page.waitForLoadState('networkidle')

    const violations = await page.evaluate(() => {
      return new Promise((resolve) => {
        // @ts-ignore
        axe.run({
          rules: {
            'heading-order': { enabled: true },
          },
        }).then((results: any) => {
          resolve(results.violations)
        })
      })
    })

    expect(violations).toEqual([])
  })
})

