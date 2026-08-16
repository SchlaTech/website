const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const results = [];

  // Desktop check
  const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
  page.on('console', msg => {});
  await page.goto('http://127.0.0.1:3000', { waitUntil: 'load' });

  try {
    // Check Solutions dropdown opens on hover/click
    const solutions = await page.locator('button:has-text("Solutions")').first();
    if (await solutions.count() === 0) throw new Error('Solutions button not found');
    await solutions.click();
    await page.waitForTimeout(150);
    const solLink = await page.locator('a:has-text("Custom Software")').first();
    results.push({ step: 'desktop_solutions_link_present', ok: (await solLink.count()) > 0 });
  } catch (e) {
    results.push({ step: 'desktop_solutions_link_present', ok: false, error: e.message });
  }

  try {
    // Check Industries opens
    const industries = await page.locator('button:has-text("Industries")').first();
    if (await industries.count() === 0) throw new Error('Industries button not found');
    await industries.click();
    await page.waitForTimeout(150);
    const indLink = await page.locator('a:has-text("Manufacturing")').first();
    results.push({ step: 'desktop_industries_link_present', ok: (await indLink.count()) > 0 });
  } catch (e) {
    results.push({ step: 'desktop_industries_link_present', ok: false, error: e.message });
  }

  await page.close();

  // Mobile check
  const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
  await mobile.goto('http://127.0.0.1:3000', { waitUntil: 'load' });

  try {
    // Open mobile menu
    const toggle = await mobile.locator('button[aria-label="Toggle navigation"]').first();
    if (await toggle.count() === 0) throw new Error('Mobile menu toggle not found');
    await toggle.click();
    await mobile.waitForTimeout(150);
    const homeLink = await mobile.locator('a:has-text("Home")').first();
    results.push({ step: 'mobile_menu_home_present', ok: (await homeLink.count()) > 0 });

    // Expand Solutions accordion
    const solBtn = await mobile.locator('button:has-text("Solutions")').first();
    if (await solBtn.count() === 0) throw new Error('Mobile Solutions button not found');
    try {
      await solBtn.click({ timeout: 2000 });
    } catch (err) {
      // fallback to JS click if Playwright can't interact due to visibility/animations
      await mobile.evaluate(() => {
        const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent && b.textContent.trim().startsWith('Solutions'));
        if (btn) btn.click();
      });
    }
    await mobile.waitForTimeout(150);
    const solMobileLink = await mobile.locator('a:has-text("Custom Software")').first();
    results.push({ step: 'mobile_solutions_link_present', ok: (await solMobileLink.count()) > 0 });
  } catch (e) {
    results.push({ step: 'mobile_menu_check', ok: false, error: e.message });
  }

  await mobile.close();
  await browser.close();

  console.log('NAV CHECK RESULTS:');
  for (const r of results) console.log(JSON.stringify(r));
  const failed = results.filter(r => !r.ok);
  process.exit(failed.length === 0 ? 0 : 2);
})();
