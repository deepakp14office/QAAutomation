import { test, expect } from '../Fixtures/test-fixture.js';

test('Login to Automation Exercise using fixture', async ({ appPage }) => {
  // The fixture has already performed the login
  await expect(appPage).toHaveURL('https://automationexercise.com/');

  // Verify that the user is logged in
  await expect(
    appPage.getByText('Logged in as', { exact: false })
  ).toBeVisible();
});