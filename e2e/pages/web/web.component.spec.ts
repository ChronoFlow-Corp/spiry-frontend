import {expect, test} from '@playwright/test';

test.describe('WebComponent', () => {
  test('should have wrapper', async ({page}) => {
    await page.goto('/web');
    expect(page.locator('#page-web-wrapper')).toBeTruthy();
  });

  test('should show paragraph', async ({page}) => {
    await page.goto('/web');
    await expect(page.locator('#page-web-paragraph')).toContainText(
      'web works!',
    );
  });

  test('paragraph should change color on theme switch', async ({page}) => {
    await page.emulateMedia({colorScheme: 'dark'});
    await page.goto('/web');
    await expect(page.locator('#page-web-paragraph')).toHaveCSS(
      'color',
      'rgb(255, 255, 255)',
    );

    await page.emulateMedia({colorScheme: 'light'});
    await expect(page.locator('#page-web-paragraph')).toHaveCSS(
      'color',
      'rgb(15, 15, 15)',
    );
  });
});
