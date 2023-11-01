import { test, expect } from '@playwright/test';

test.describe('e2e tests', () => {

  test('has title', async ({ page }) => {
    await page.goto('https://zishop.vercel.app/login');
    await page.locator('#email').fill('qwerty@gmail.com')
    await page.locator('#password').fill('Qwerty')
    await page.locator('[type="submit"]').click()
  
    await expect(page.locator('.text-rose-600')).toHaveText('Invalid email or password');
  });

})
