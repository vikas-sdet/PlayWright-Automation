const { test ,expect } = require("@playwright/test");

test.skip('Handle Alert ' ,async({page})=> {

     
//Enabling Alert handling /dialog window handler

await page.goto("https://testautomationpractice.blogspot.com/");

page.on('dialog' ,async dialog =>{

expect(dialog.type()).toContain('alert')
expect(dialog.message()).toContain('I am an alert box!')
await dialog.accept();

})

await page.click('//button[normalize-space()="Simple Alert"]')

await page.waitForTimeout(5000)


})
//Handle Confirmation alert
test.skip('Handle Confirmation Alert ' ,async({page})=> {

     
//Enabling Alert handling /dialog window handler

await page.goto("https://testautomationpractice.blogspot.com/");

page.on('dialog' ,async dialog =>{

expect(dialog.type()).toContain('confirm')
expect(dialog.message()).toContain('Press a button!')
await dialog.accept(); //for ok buttom
//await dialog.dismiss() ; //for cancel alert

})

await page.click('//button[normalize-space()="Confirmation Alert"]')

await expect (page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');      //You pressed OK!

await page.waitForTimeout(5000)









})

//handle promt box


test('Handle promt Alert ' ,async({page})=> {

     
//Enabling Alert handling /dialog window handler

await page.goto("https://testautomationpractice.blogspot.com/");

page.on('dialog' ,async dialog =>{

expect(dialog.type()).toContain('prompt')
expect(dialog.message()).toContain('Please enter your name:')

expect (dialog.defaultValue()).toContain('Harry Potter')

await dialog.accept('john')

})

await page.click('//button[@id="promptBtn"]')

await expect (page.locator('//p[@id="demo"]')).toHaveText('Hello john! How are you today?');      //You pressed OK!

await page.waitForTimeout(5000)









})