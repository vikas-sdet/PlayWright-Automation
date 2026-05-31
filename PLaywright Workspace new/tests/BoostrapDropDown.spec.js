const { test, expect } = require('@playwright/test');

test('Bootstrap dropdown - complete handling', async ({ page }) => {

  await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');

  // Click dropdown
  await page.locator('.multiselect').click();

  // Get all checkbox options inside dropdown
  const options = page.locator('ul li label input');

  // Verify total options count
  await expect(options).toHaveCount(11);

  // Print all option values
  const allOptions = page.locator('ul li label');

  const count = await allOptions.count();

  for (let i = 0; i < count; i++) {
    const value = await allOptions.nth(i).textContent();
    console.log('Value is:', value.trim());
  }

  // Example: Select specific options
  await page.locator("label:has-text('Option 1')").click();
  await page.locator("label:has-text('Option 3')").click();

});