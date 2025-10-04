import {expect, test} from '@playwright/test';

test('AppComponent', async ({page}) => {
  await page.goto('/');
  await page.waitForURL('**/');
  expect(new URL(page.url()).pathname).toBe('/');

  await page.goto('/random-url');
  await page.waitForURL('/');
  expect(new URL(page.url()).pathname).toBe('/');
});
