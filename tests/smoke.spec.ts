import { test, expect } from '@playwright/test';

const pages = ['/', '/about', '/portfolio', '/acumatica-development'];

for (const p of pages) {
  test(`smoke: ${p}`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });

    const response = await page.goto(p, { waitUntil: 'load' });
    expect(response).not.toBeNull();
    expect(response.status()).toBeGreaterThanOrEqual(200);
    expect(response.status()).toBeLessThan(400);

    const cssCount = await page.locator('link[rel="stylesheet"]').count();
    expect(cssCount).toBeGreaterThan(0);

    // allow any client-side scripts to run
    await page.waitForTimeout(300);
    expect(errors.length).toBe(0);
  });
}
