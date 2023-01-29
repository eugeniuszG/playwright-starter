import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config();


const config: PlaywrightTestConfig = {
  // commented for now since demo todo app doesn't have any auth
  // globalSetup: require.resolve('./global-setup'),
  testDir: './src/tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 3,
  workers: process.env.CI ? 2 : 1,
  reporter: 'html',
  use: {
    headless: true,
    baseURL: process.env.STAGING === '1' ? process.env.STAGING_BASE_URL : process.env.PROD_BASE_URL,
    trace: 'on-first-retry',
    storageState: 'storageState.json'
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    }
  ],
  outputDir: 'test-results/',
};

export default config;
