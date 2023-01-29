import { chromium, FullConfig } from '@playwright/test';
import dotenv from 'dotenv'
dotenv.config();

async function globalSetup(config: FullConfig) {
  const { baseURL, storageState } = config.projects[0].use;
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    console.log('try global setup')
    await context.tracing.start({ screenshots: true, snapshots: true });
    await page.goto(baseURL!);
    await page.getByLabel('User Name').fill(process.env.USERNAME ? 
      process.env.USERNAME : "example@mail.com");
    await page.getByLabel('Password').fill(process.env.PASSWORD ? 
      process.env.PASSWORD : "password");
    await page.getByText('Sign in').click();
    await context.storageState({ path: storageState as string });
    await context.tracing.stop({
      path: './test-results/setup-trace.zip',
    })
    await page.close();
  } catch (error) {
    await context.tracing.stop({
      path: './test-results/failed-setup-trace.zip',
    });
    await page.close();
    throw error;
  }
}

export default globalSetup;