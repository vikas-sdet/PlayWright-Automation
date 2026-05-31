// import test and expect from playwright
import { test, expect } from '@playwright/test';


// beforeAll hook
// runs only one time before all tests
test.beforeAll(async () => {

    console.log('This is beforeAll Hook....');

});


// afterAll hook
// runs only one time after all tests
test.afterAll(async () => {

    console.log('This is after all....');

});


// beforeEach hook
// runs before every test
test.beforeEach(async () => {

    console.log('This is before Each....');

});


// another beforeAll hook
test.beforeAll(async () => {

    console.log('This is before all hooks');

});


// test group 1
test.describe('Group', () => {

    // if we want to run only one group
    // test.describe.only('Group',()=>{})

    // if we want to skip group
    // test.describe.skip('Group',()=>{})


    // first test
    test('Test1', async ({ page }) => {

        console.log('This is test 1 ...');

    });


    // second test
    test('Test2', async ({ page }) => {

        console.log('This is test 2 ...');

    });

});


// test group 2
test.describe('Group 2', () => {

    // third test
    test('Test3', async ({ page }) => {

        console.log('This is test 3 ...');

    });


    // fourth test
    test('Test4', async ({ page }) => {

        console.log('This is test 4 ...');

    });

});