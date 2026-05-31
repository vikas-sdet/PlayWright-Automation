
const{test ,expect}=require('@playwright/test');

test('Assetion test' ,async({page})=>{

    await page.goto('https://demo.nopcommerce.com/register');

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

  // await expect(page).toHaveTitle('nopCommerce demo store. Register');

   const logoElement=await page.locator('.header-logo');

   await expect(logoElement).toBeVisible;

   //tohave text ..here we pass complete text

   await expect( await page.locator('.page-title h1')).toHaveText('Register')

   //tocontainstext ...here we pass partial text

   await expect( await page.locator('.page-title h1')).toContainText('Reg')


   //expect locator to have value

   const emailInput=await page.locator('#Email')
   await emailInput.fill('test@gmail.com')
   await expect(emailInput).toHaveValue('test@gmail.com')


   //to have count > it count list of values inside dropdown

  const options= await page.locator('select[name="DateofBirthMonth"] option')

  await expect(options).toHaveCount(13)


});