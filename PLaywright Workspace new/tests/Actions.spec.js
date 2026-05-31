const { test, expect } = require('@playwright/test');

test.skip('handling mouse Hover', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const desktops = page.locator('//button[@class="dropbtn"]');
  const mobiles = page.locator('//a[text()="Mobiles"]');

  // mouse hover
  await desktops.hover();
  await mobiles.hover();

  await page.waitForTimeout(5000);

});


// right click
test.skip('Mouse Right Click', async ({ page }) => {

  await page.goto('http://swisnl.github.io/jQuery-contextMenu/demo.html');

  const button = page.locator('//span[normalize-space()="right click me"]');

  await button.click({ button: 'right' });

  await page.waitForTimeout(3000);

});


// perform double click
test.skip('Mouse Double Click', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const button = page.locator('//button[text()="Copy Text"]');

  await button.dblclick();

  const f2 = page.locator("#field2");

  await expect(f2).toHaveValue('Hello World!');

  await page.waitForTimeout(5000);

});


// perform Drag and Drop
test('Drag and Drop', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

  const Drag = page.locator('//div[normalize-space()="Drag me to my target"]');
  const drop = page.locator('//div[normalize-space()="Drop here"]');

  await Drag.dragTo(drop);

  await page.waitForTimeout(5000);

});