const {test ,expect}=require('@playwright/test');

test('handle radio button' , async({page})=>
{

await page.goto('https://testautomationpractice.blogspot.com/');

const Radiomalecheck= page.locator("//input[@id='male']")

await Radiomalecheck.check();

await page.waitForTimeout(5000)


await expect(Radiomalecheck).toBeChecked();

}



)