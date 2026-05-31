const { test, expect } = require('@playwright/test');

test('handle inputbox', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com')
  const nameInput = page.locator("//input[@id='name']");

  // Assertions
  await expect(nameInput).toBeVisible();
  await expect(nameInput).toBeEmpty();
  await expect(nameInput).toBeEditable();
  await expect(nameInput).toBeEnabled();

  // Fill value
  await nameInput.fill('John');

  // Verify value
  await expect(nameInput).toHaveValue('John');

  await page.waitForTimeout(5000)   //pausing the code for some time
 
});