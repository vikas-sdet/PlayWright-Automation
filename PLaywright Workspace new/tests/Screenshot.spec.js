import {test ,expect} from '@playwright/test'

test('takes screenshot' ,async({page})=>{
await page.goto('https://demo.opencart.com/')
await page.screenshot({path: 'tests/screenshots/'+Date.now()+'HomePage.png'})


});
test('takes Full page screenshot' ,async({page})=>{
await page.goto('https://demo.opencart.com/')
await page.screenshot({path: 'tests/screenshots/'+Date.now()+'Fullpage.png' ,fullPage :true})

    
})
test.only('takes Element screenshot' ,async({page})=>{

await page.goto('https://demo.opencart.com/')
await page.locator('').screenshot({path: 'tests/screenshots/'+Date.now()+'macbook.png' ,macbook :true})


    
})