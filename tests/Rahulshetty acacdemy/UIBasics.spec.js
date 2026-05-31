const {test, expect} = require('@playwright/test');
const { text } = require('node:stream/consumers');

test('Browser context Playwright test',async ({browser})=>   // => it shows anonymous
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
//if we add 'only' then it will run particular test and skipp others
/*test.only('page Playwright test only',async ({page})=>   // => it shows anonymous
{

 await page.goto("https://google.com");
 //get title
 console.log(await page.title())
 await expect(page).toHaveTitle("Google");
*/

 test('@Web Client App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").fill("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
 


});

test('UI Controls' ,async ({page})=>
{
 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const userName= page.locator('#username');
const sighIn= page.locator('#password');
const documentLink=page.locator("[href*='documents-request']");
 const dropdown=page.locator("select.form-control");
await dropdown.selectOption("Consultant");

await page.locator(".radiotextsty").last().click(); //for  click radio button which is user
//after click on user one popup/assersation will come so we have to select okay
await page.locator("#okayBtn").click();
//handling assertion
//console.log(page.locator(".radiotextsty").last().toBeChecked() );
const radioButtons = page.locator(".radiotextsty");

//for uncheck we used .uncheck();
await expect(radioButtons.last()).toBeChecked(); //if this will not happen then our code will be fail

//to verify the blinking

await expect(documentLink).toHaveAttribute("class" ,"blinkingText");

await page.pause() ; //this use for see the result other wise executon will be very fast
 

     
}

);

//handling child window or multiple window or browser

test.only('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(   //paralleli both operation will happen which ever in array

   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
 
   const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    //go back to main page
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
 
 });
 
 







