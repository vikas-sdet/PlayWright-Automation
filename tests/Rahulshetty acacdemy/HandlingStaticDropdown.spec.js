const {test, expect} = require('@playwright/test');

test('Static DropDown' , async ({page}) => 
{
await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
const Svalue=page.locator("#dropdown-class-example");
await Svalue.selectOption("option3");

await page.locator("[value='radio2']").click(); //radio button handle

//for blinking

const blinking=page.locator("[href*='documents-request']");

await expect(blinking).toHaveAttribute("class" ,"blinkingText");

//await page.pause(); //execution will be very fast that we can't see so we havw to use page.pouse()





})