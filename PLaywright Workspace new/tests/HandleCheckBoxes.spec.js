const { test, expect } = require('@playwright/test');

test('Handling check boxes', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");

  // ✅ Single checkbox
  const monday = page.locator("//input[@id='monday']");

  await monday.check();
  await expect(monday).toBeChecked();

  // ❌ If you want to verify NOT checked, first uncheck it
  await monday.uncheck();
  await expect(monday).not.toBeChecked();


  // ✅ Multiple checkboxes
  const checkBoxLocators = [
    "//input[@id='sunday']",
    "//input[@id='monday']",
    "//input[@id='friday']"
  ];

  // Check all
  for (const locator of checkBoxLocators) {
    await page.locator(locator).check();
    await expect(page.locator(locator)).toBeChecked();
  }


  // Uncheck all
  for (const locator of checkBoxLocators) {
    await page.locator(locator).uncheck();
    await expect(page.locator(locator)).not.toBeChecked();
  }

});