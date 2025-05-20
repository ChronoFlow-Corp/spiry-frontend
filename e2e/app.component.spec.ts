import {expect, test} from '@playwright/test';

test('AppComponent', async ({page}) => {
  await page.goto('/');
  await page.waitForURL('**/web');
  expect(new URL(page.url()).pathname).toBe('/web');

  await page.goto('/web/some-not-existing-page');
  await page.waitForURL('**/web/category/text-content');
  expect(new URL(page.url()).pathname).toBe('/web/category/text-content');

  await page.goto('/random-url');
  await page.waitForURL('**/web');
  expect(new URL(page.url()).pathname).toBe('/web');
});
