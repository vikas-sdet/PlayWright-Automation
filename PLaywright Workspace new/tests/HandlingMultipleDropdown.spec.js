const {test ,expect}=require('@playwright/test');

test('Handle multiple dropdown' ,async({page})=>

    {
  await page.goto("https://testautomationpractice.blogspot.com/");

  //await page.selectOption('#colors' ,['Blue' ,'Red' ,'Yellow'])

  //Assertions
  //1.check no. of option in dropdown

  //const options=await page.locator('#colors option')

  //await expect(options).toHaveCount(5);

  //2.check no of dropdown using js array

  const options=await page.$$('#colors option')

  //console.log("total no. of colors :" ,options.length)

  await expect(options.length).toBe(7)

await page.waitForTimeout(5000)
    }


)

