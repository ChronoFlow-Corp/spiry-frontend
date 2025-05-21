import {expect, test} from '@playwright/test';

test.describe('WebComponent', () => {
  test('should have wrapper', async ({page}) => {
    await page.goto('/web');
    expect(page.locator('#page-web-wrapper')).toBeTruthy();
  });

  // TODO add tests for account menu only for desktop resolutions
});
