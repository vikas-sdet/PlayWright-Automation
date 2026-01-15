// @ts-check
import {  chromium, defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config = ({

  testDir: './tests',  //in this place of tests we add which class we want to run

  timeout :40*1000,
  expect :{
    timeout :5000,
  },

  reporter :'html',

  use: {

    browserName :'chromium',
    //we dont need to use headed in test running
    headless :false
   
  
  },
   


});
module.exports=config