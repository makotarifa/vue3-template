import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  globalSetup: "./tests/global-setup",
  globalTeardown: "./tests/global-teardown",
  testDir: "tests",
  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  retries: 0,
  use: {
    actionTimeout: 0,
    baseURL: "http://localhost:5173",
    trace: "on-first-retry",
  },
  reporter: process.env.CI
    ? [["html", { outputFolder: "playwright-report", open: "never" }]]
    : "list",
  webServer: {
    command: "npm run dev:mock",
    url: "http://localhost:5173",
    reuseExistingServer: !process.env.CI,
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
});
