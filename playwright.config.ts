import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  workers: 2,
  reporter: [['list']],
  timeout: 45000,
  use: {
    baseURL: 'http://127.0.0.1:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    reducedMotion: 'reduce',
  },
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.08,
      animations: 'disabled',
      threshold: 0.2,
    },
  },
  projects: [
    {
      name: 'Desktop Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Mobile Chromium',
      use: { ...devices['Pixel 5'] },
    },
  ],
  webServer: {
    command: 'npx vite --port 5173 --host 127.0.0.1 --strictPort',
    url: 'http://127.0.0.1:5173',
    reuseExistingServer: true,
    timeout: 30000,
  },
});
