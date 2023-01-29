const { test, expect } = require('./axe-test');

test('example using axe for automated accebility testing', async ({ page, makeAxeBuilder }) => {
  await page.goto('https://your-site.com/');

  const accessibilityScanResults = await makeAxeBuilder()
     // Automatically uses the shared AxeBuilder configuration,
     // but supports additional test-specific configuration too
    .include('#specific-element-under-test')
    .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});