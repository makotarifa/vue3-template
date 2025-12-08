import { test, expect } from '@playwright/test'

test('Home displays single title and has padding', async ({ page }) => {
  await page.goto('/')
  
  // Wait for the app to be fully loaded
  await page.waitForLoadState('networkidle')
  
  // Title text should appear only once (header only)
  const titleCount = await page.locator('text=Vue Template').count()
  expect(titleCount).toBe(1)

  // The main content wrapper should be visible and have the expected class (updated to max-w-5xl)
  const container = page.locator('div.max-w-5xl').first()
  await expect(container).toBeVisible()
  
  // Check that the hero section exists
  const heroSection = page.locator('section').first()
  await expect(heroSection).toBeVisible()
})
