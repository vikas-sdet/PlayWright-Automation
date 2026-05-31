const { test, expect } = require('@playwright/test');

test('Auto suggest dropdown handling', async ({ page }) => {

  await page.goto('https://.com');

  // 1️⃣ Type into input field
  const input = page.locator('#fromCity');  
  await input.fill('Del');

  // 2️⃣ Wait for suggestion to appear
  const suggestions = page.locator('li');   // adjust based on DOM
  await suggestions.first().waitFor();

  // 3️⃣ Select exact match
  await page.locator('li', { hasText: 'Delhi' }).click();

});