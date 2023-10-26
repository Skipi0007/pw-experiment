import { test, expect } from '@playwright/test';

test.describe('pw tests', () => {

  test('has title', async ({ page }) => {
    await page.goto('https://zishop.vercel.app/');
  
    await expect(page).toHaveTitle(/ZiShop/);
  });

})
