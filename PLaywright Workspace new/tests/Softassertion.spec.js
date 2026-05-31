const{test,expect}=require('@Playwright/test');

test('SoftAssertion test' ,async({page})=>

{

await page.goto("https://www.demoblaze.com/")

//Hard assertion

await expect(page).toHaveTitle('STORE')

await expect(page).toHaveURL("https://www.demoblaze.com/")

await expect (await page.locator('.navbar-brand')).toBeVisible


//soft assertion

await expect.soft(page).toHaveTitle('STORE')

await expect.soft(page).toHaveURL("https://www.demoblaze.com/")

await expect.soft (await page.locator('.navbar-brand')).toBeVisible


}


)