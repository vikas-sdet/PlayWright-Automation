// @ts-check
import { defineConfig } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  timeout: 50 * 1000,

  expect: {
    timeout: 6000,
  },

  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'on',

    //screenshot for only fail test case
    //trace : 'retain-on-failure',
  },
});
