const {test ,expect} =require ('@playwright/test')

//MoreValidations.spec.js  this class need to add

test ("Popup validations" ,async({page})=>
{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
// await page.goto("http://google.com");
// await page.goBack();
// await page.goForward();

//validate hidden and visible

await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click();
await expect(page.locator("#displayed-text")).toBeHidden();
await page.pause();

// handle dialog or popup
page.on('dialog' , dialog => dialog.accept());
await page.locator("#confirmbtn").click();

//mouse Hover

await page.locator("#mousehover").hover();

}
)

