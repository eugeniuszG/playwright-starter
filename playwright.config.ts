import { PlaywrightTestConfig } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config();

import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
    // globalSetup: require.resolve('./config/global-setup'),
    testDir: './src/tests',
    timeout: 15 * 1000,
    expect: {
      timeout: 5000
    },
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 3,
    reporter: 'html',
    use: {
      headless: false,
      baseURL: process.env.STAGING === '1' ? process.env.STAGING_BASE_URL : process.env.PROD_BASE_URL,
      trace: 'on-first-retry',
      // storageState: 'storageState.json',
      // browserName: 'firefox',
      // video: {
      //   mode: 'on',
      //   size: { width: 640, height: 480 }
      // }
    },
  
    projects: [
      {
        name: 'chromium',
        use: {
          ...devices['Desktop Chrome'],
        },
      },
      {
        name: 'firefox',
        use: { 
          ...devices['Desktop Firefox'] 
        },
      },
    ],
    outputDir: 'test-results/',
 };

export default config;
