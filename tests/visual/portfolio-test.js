import { chromium } from 'playwright'

async function captureVisual() {
  const browser = await chromium.launch({ headless: false }) // Set to false to see browser
  const page = await browser.newPage()

  try {
    // Navigate to the portfolio page
    await page.goto('http://localhost:3000/portfolio')

    // Wait for page to load
    await page.waitForLoadState('networkidle')

    // Take a screenshot
    await page.screenshot({
      path: 'tests/visual/portfolio-screenshot.png',
      fullPage: true,
    })

    // Get the computed styles of key elements
    const styles = await page.evaluate(() => {
      const nav = document.querySelector('nav')
      const hero = document.querySelector('h1')
      const buttons = document.querySelectorAll('button')

      return {
        nav: {
          backgroundColor: window.getComputedStyle(nav).backgroundColor,
          color: window.getComputedStyle(nav).color,
          backdropFilter: window.getComputedStyle(nav).backdropFilter,
        },
        hero: {
          color: window.getComputedStyle(hero).color,
          fontSize: window.getComputedStyle(hero).fontSize,
          fontWeight: window.getComputedStyle(hero).fontWeight,
        },
        buttons: Array.from(buttons).map((btn) => ({
          backgroundColor: window.getComputedStyle(btn).backgroundColor,
          color: window.getComputedStyle(btn).color,
          border: window.getComputedStyle(btn).border,
        })),
      }
    })

    console.log('🎨 VISUAL ANALYSIS:')
    console.log('Navigation:', styles.nav)
    console.log('Hero Text:', styles.hero)
    console.log('Buttons:', styles.buttons)

    // Keep browser open for 10 seconds so you can see it
    console.log('📸 Screenshot saved as tests/visual/portfolio-screenshot.png')
    console.log('🌐 Browser will stay open for 10 seconds...')
    await page.waitForTimeout(10000)
  } catch (error) {
    console.error('Error:', error)
  } finally {
    await browser.close()
  }
}

captureVisual()
