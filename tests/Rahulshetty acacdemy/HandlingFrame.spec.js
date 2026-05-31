const { test, expect } = require('@playwright/test'); 
// 👉 Imports Playwright test framework
// test = to write test cases
// expect = to do validations (not used here but usually needed)

test('Handle frames', async ({ page }) => { 
// 👉 Defines a test case
// 'Handle frames' = test name shown in report
// async because browser actions take time
// page = new browser tab provided by Playwright

  await page.goto('https://rahulshettyacademy.com/AutomationPractice/'); 
  // 👉 Opens the given URL in browser
  // This loads the main page which contains iframe

  const framesPage = page.frameLocator('#courses-iframe'); 
  // 👉 Locates iframe using id 'courses-iframe'
  // frameLocator() = gives access to elements inside iframe
  // NO switching like Selenium, direct access inside frame

  await framesPage
    // 👉 Now we are working inside iframe context

    .locator("li a[href*='lifetime-access']:visible") 
    // 👉 Finds a link inside iframe
    // li a = anchor tag inside list item
    // href*='lifetime-access' = partial match in URL
    // :visible = ensures element is visible on screen

    .click(); 
    // 👉 Clicks the link inside iframe
    // This triggers navigation/action inside frame

  const textCheck = await framesPage.locator('.text h2').textContent(); 
  // 👉 Finds heading element inside iframe
  // .text h2 = h2 inside class 'text'
  // textContent() = extracts visible text from element

  const price = textCheck.split(' ')[1]; 
  // 👉 Splits text into words using space
  // Example: "Learn Earn 5000"
  // ["Learn", "Earn", "5000"]
  // [1] picks second word

  console.log(price); 
  // 👉 Prints extracted value in console

});