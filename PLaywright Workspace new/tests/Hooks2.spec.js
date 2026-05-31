const { test, expect } = require('@playwright/test');

// variable declaration
let page;


// beforeEach runs once before all tests
test.beforeEach(async ({ browser }) => {

    // open new browser page
    page = await browser.newPage();

    // open application URL
    await page.goto("https://demoblaze.com/index.html");

    // click login button
    await page.locator('#login2').click();

    // enter username
    await page.locator("#loginusername").fill('Pavanol');

    // enter password
    await page.locator("#loginpassword").fill('test@123');

    // click login button inside popup
    await page.locator('//button[normalize-space()="Log in"]').click();

});


// aftereach runs once after all tests
test.afterEach(async () => {

    // click logout button
    await page.locator('#logout2').click();

});


// first test case
test('Home Page Test', async () => {

    // capture all products into array
    const products = await page.$$('.hrefch');

    // validate total product count
    expect(products).toHaveLength(9);

});


// second test case
test('Add product to the cart', async () => {

    // click Samsung product
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();

    // handle alert popup
    page.on('dialog', async dialog => {

        // validate alert message
        expect(dialog.message()).toContain('Product added.');

        // accept alert popup
        await dialog.accept();

    });

    // click add to cart button
    await page.locator('//a[normalize-space()="Add to cart"]').click();

});