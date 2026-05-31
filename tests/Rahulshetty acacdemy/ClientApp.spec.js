const {test, expect} = require('@playwright/test');

test('Add one iteam from ui' , async ({page}) => 
{
const productName=page.locator("ZARA COAT 3");
const products =page.locator(".card-body");
await page.goto("https://rahulshettyacademy.com/client");
await page.locator('#userEmail').fill('sanju@contact.com');
await page.locator('#userPassword').fill('Glassdoor@2025');
await page.locator('#login').click();
await page.waitForLoadState('networkidle');  //It waits until the page finishes all network requests,
//  so the UI is fully loaded before you interact with it.


await page.locator(".card-body b").first().waitFor();

const titles = await page.locator(".card-body b").allTextContents();

//const titles=await page.locator('.card-body').allTextContents(); // for getting all product 




console.log(titles);

//for running single class

//npx playwright test tests/ClientApp.spec.js
//for running complete class----- npx playwright test --headed

const count=products.count();

for(let i =0 ; i< count ; ++i)
    {
  if(await products.nth(i).locator("b").textContent () ===productName){

await products.nth(i).locator("text=Add To Cart").click();

break;

  }







}

await page.pause();
});

test.only('Add 1 item from UI', async ({ page }) => {

  await page.goto("https://rahulshettyacademy.com/client");

  await page.locator('#userEmail').fill('sanju@contact.com');
  await page.locator('#userPassword').fill('Glassdoor@2025');
  await page.locator('#login').click();

  // Wait until products are fully loaded
  await page.waitForLoadState('networkidle');

  // Locate the product card using product name
  const product = page.locator('.card').filter({
    has: page.locator('text=ZARA COAT 3')
  });

  // Hover if button appears on hover
  await product.hover();

  // Click Add to Cart for the selected product
  await product.locator("button:has-text('Add To Cart')").click();

  // Pause to visually verify cart (for learning/debugging)

  await page.locator("button[routerlink='/dashboard/cart']").click();

  await page.pause();
});
