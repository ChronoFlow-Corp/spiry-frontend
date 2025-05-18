import {expect, test} from '@playwright/test';

test.describe('WebComponent', () => {
  test('should show paragraph', async ({page}) => {
    await page.goto('/');
    await expect(page.locator('p')).toContainText('web works!');
  });
});
