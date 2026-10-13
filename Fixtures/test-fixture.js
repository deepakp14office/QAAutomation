// const { test: base, expect } = require('@playwright/test');
// const { login } = require('../pagesqa/login');

// exports.test = base.extend({
//   appPage: async ({ page }, use) => {
//     // Setup: Open the application
//     await page.goto('https://automationexercise.com/');

//     // Provide the page to the test
//     await use(page);

//     const log = new login(page);
//     await log.filldetails();
    
//   },
// });

// exports.expect = expect;


import { test as base, expect } from '@playwright/test';
import { login } from '../pagesqa/login.js';

export const test = base.extend({
  appPage: async ({ page }, use) => {
    // Step 1: Create the login Page Object
    const log = new login(page);

    // Step 2: Open the application and login form
    await log.openLoginPage();

    // Step 3: Enter credentials and log in
    await log.filldetails();

    // Step 4: Verify that login succeeded
    await page.waitForURL('https://automationexercise.com/');

    // Step 5: Give the logged-in page to the test
    await use(page);

    // Step 6: Teardown code can go here
    // Playwright automatically manages the page lifecycle
  },
});

export { expect };