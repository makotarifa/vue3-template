import { test, expect } from "@playwright/test";

test("Home displays single title and has padding", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("locale", "en"));
  await page.goto("/");

  // Wait for the app to be fully loaded
  await page.waitForLoadState("networkidle");

  // Header title should appear only once (independent of locale)
  const titleCount = await page.locator("header h1").count();
  expect(titleCount).toBe(1);

  // The main content wrapper should be visible and have the expected class (updated to max-w-5xl)
  const container = page.locator("div.max-w-5xl").first();
  await expect(container).toBeVisible();

  // Check that the hero section exists
  const heroSection = page.locator("section").first();
  await expect(heroSection).toBeVisible();
});
