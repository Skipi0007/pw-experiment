import { test, expect } from '@playwright/test';

test.describe('api tests', () => {

  test('has title', async ({ request }) => {

    const newIssue = await request.get(`https://zishop.vercel.app/`);
    expect(newIssue.ok()).toBeTruthy();
  });

})
