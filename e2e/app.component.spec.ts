import {expect, test} from '@playwright/test';

test('route wild cards should work', async ({page}) => {
  await page.goto('/');
  await page.waitForURL('**/web');
  expect(new URL(page.url()).pathname).toBe('/web');

  await page.goto('/web/some-not-existing-page');
  await page.waitForURL('**/web');
  expect(new URL(page.url()).pathname).toBe('/web');

  await page.goto('/random-url');
  await page.waitForURL('**/web');
  expect(new URL(page.url()).pathname).toBe('/web');
});
