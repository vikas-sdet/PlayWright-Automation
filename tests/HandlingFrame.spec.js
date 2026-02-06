const { test, expect } = require('@playwright/test');

test('Handle frames', async ({ page }) => {

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

  const framesPage = page.frameLocator('#courses-iframe');

  await framesPage
    .locator("li a[href*='lifetime-access']:visible")
    .click();

  const textCheck = await framesPage.locator('.text h2').textContent();

  const price = textCheck?.split(' ')[1];

  console.log(price);

});
