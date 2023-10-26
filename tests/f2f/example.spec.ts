import { test, expect } from '@playwright/test';

test.describe('pw tests', () => {

  test('has title', async ({ page }) => {
    await page.goto('http://localhost:3000');
  
    await expect(page).toHaveTitle(/ZiShop/);
  });

})
