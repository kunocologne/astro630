import { test, expect } from '@playwright/test'

test('Accessibility compliance', async ({ page }) => {
  await page.goto('/')

  const accessibilityScan = await page.accessibility.snapshot()
  expect(accessibilityScan).toBeDefined()
})

test('Responsive design', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 })
  await page.goto('/')
  await expect(page.locator('body')).toBeVisible()

  await page.setViewportSize({ width: 768, height: 1024 })
  await page.goto('/')
  await expect(page.locator('body')).toBeVisible()

  await page.setViewportSize({ width: 1024, height: 768 })
  await page.goto('/')
  await expect(page.locator('body')).toBeVisible()
})

test('E-commerce functionality', async ({ page }) => {
  await page.goto('/shop')
  await expect(page.locator('h1')).toContainText('Shop')
})

test('Authentication flow', async ({ page }) => {
  await page.goto('/login')
  await expect(page.locator('h1')).toContainText('Login')
})

test('Contact form', async ({ page }) => {
  await page.goto('/contact')
  await expect(page.locator('form')).toBeVisible()
})
