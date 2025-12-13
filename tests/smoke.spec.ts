import { test, expect } from "@playwright/test";

test("smoke: app loads and header/footer visible", async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem("locale", "en"));
  await page.goto("/");
  await page.waitForLoadState("networkidle");
  await expect(page.locator("header h1")).toBeVisible();
  const header = page.locator("header");
  await expect(header).toBeVisible();
  const footer = page.locator("footer");
  await expect(footer).toBeVisible();
});
