const {test, expect} = require('@playwright/test');

test('Add one iteam from ui' , async ({page}) => 
{

await page.goto("https://rahulshettyacademy.com/client");
await page.locator('#userEmail').fill('sanju@contact.com');
await page.locator('#userPassword').fill('Glassdoor@2025');
await page.locator('#login').click();
await page.waitForLoadState('networkidle');  //It waits until the page finishes all network requests,
//  so the UI is fully loaded before you interact with it.



//const titles=await page.locator('.card-body').allTextContents(); // for getting all product 

const titleone=await page.locator('.card-body').first().textContent(); //for one producet



//console.log(titles);
console.log(titleone);
//for running single class

//npx playwright test tests/ClientApp.spec.js
}
)