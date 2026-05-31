const { test, expect } = require('@playwright/test');
const { stat } = require('node:fs');

test('Handling Drop Down', async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");


  //multiple ways to handle dropdoown
//await page.locator('#country').selectOption({label:'India'}); //visible text
//await page.locator('#country').selectOption('India'); //visible text
//await page.locator('#country').selectOption({value :'uk'}); //by value
//await page.locator('#country').selectOption({index :1}); //by index index is no. that why not in quotation

//await page.selectOption('#country' ,'India'); //by text


//Assertions

// 1. check no. of option in dropdown

//const options=await page.locator('#country option') //all option will be come

//await expect(options).toHaveCount(10);


//2. check no. of option in dropdown

//const options=await page.$$('#country option');

//console.log("Number of Options:" ,options.length) // find total value in dropdown

//await expect(options.length).toBe(10);


// 1.check presence of value in the dropdown

//const content=await page.locator('#country').textContent();
//await expect(content.includes('India')).toBeTruthy();



//2. checj presence of value in dropdown -using looping

const options=await page.$$('#country option')
let status=false
for(const option of options){

  //console.log(await option.textContent()) // for printing all value 
  let value=await option.textContent()
  if(value.includes('France')){
    status=true;
    break;

  }
}

expect (status).toBeTruthy();
await page.waitForTimeout(5000);


})


