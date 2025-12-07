import { test, expect } from '@playwright/test'

test('homepage has correct title and count', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('Vue 3 + Vite + Tailwind + PrimeVue')).toBeVisible()
})
