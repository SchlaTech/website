import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  timeout: 30000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  use: {
    headless: true,
    baseURL: 'http://127.0.0.1:3002',
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    ignoreHTTPSErrors: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
  webServer: {
    command: 'npx next dev --hostname 127.0.0.1 --port 3002',
    port: 3002,
    reuseExistingServer: true,
    cwd: process.cwd(),
  },
});
