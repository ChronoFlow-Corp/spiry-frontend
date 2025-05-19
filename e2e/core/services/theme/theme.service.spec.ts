import {expect, test} from '@playwright/test';

test.describe('ThemeService', () => {
  test('should set dark theme', async ({page}) => {
    await page.emulateMedia({colorScheme: 'dark'});
    await page.goto('/');
    await expect(page.locator('body')).toHaveAttribute('data-theme', 'dark');
  });

  test('should set light theme', async ({page}) => {
    await page.emulateMedia({colorScheme: 'light'});
    await page.goto('/');
    await expect(page.locator('body')).toHaveAttribute('data-theme', 'light');
  });
});
