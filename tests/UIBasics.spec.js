const {test, expect} =require('@playwright/test');

test.only('Browser context Playwright test',async ({browser})=>   // => it shows anonymous
{
    
//chrome -plugins /cookies
 const context= await browser.newContext();
 const page=await context.newPage();
 const usermail=page.locator('#userEmail');
 const userpass=page.locator('#userPassword');
 const login=page.locator('#login');

 await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

 await usermail.fill('sanju@contact.com');
 await userpass .fill('Glassdoor@2025');
 await login .click();

 await page.locator("[routerlink='/dashboard/cart']").click();




});

//this is also can be done in playwright it is easy way
test('page Playwright test',async ({page})=>   // => it shows anonymous
{

 await page.goto("https://google.com");

});
//if we add only then it will run particular test and skipp others
/*test.only('page Playwright test only',async ({page})=>   // => it shows anonymous
{

 await page.goto("https://google.com");
 //get title
 console.log(await page.title())
 await expect(page).toHaveTitle("Google");

});
*/