import { test, expect } from '@playwright/test'

test('Home displays single title and has padding', async ({ page }) => {
  await page.goto('/')
  
  // Wait for the app to be fully loaded
  await page.waitForLoadState('networkidle')
  
  // Title text should appear only once (header only)
  const titleCount = await page.locator('text=Vue Template').count()
  expect(titleCount).toBe(1)

  // The main content wrapper should be visible and have the expected class
  const container = page.locator('div.max-w-2xl').first()
  await expect(container).toBeVisible()
  
  // Check that computed padding exists (Tailwind p-6 = 1.5rem = 24px)
  const paddingTop = await container.evaluate((el) =>
    parseFloat(getComputedStyle(el).paddingTop)
  )
  expect(paddingTop).toBeGreaterThanOrEqual(20) // allow some variance
})
