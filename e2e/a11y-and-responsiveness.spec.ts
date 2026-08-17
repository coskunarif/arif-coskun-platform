import { test, expect } from '@playwright/test';
import { PersonalWebsitePage } from './pages/PersonalWebsitePage';

test.describe('Accessibility & Responsive Design Verification', () => {
  test('verifies keyboard focus rings, skip link, and landmarks', async ({ page }) => {
    await page.goto('/');

    // Check landmark elements
    await expect(page.locator('header[role="banner"]')).toBeVisible();
    await expect(page.locator('main[role="main"]')).toBeVisible();
    await expect(page.locator('footer[role="contentinfo"]')).toBeVisible();

    // Check single H1
    const h1Count = await page.locator('h1').count();
    expect(h1Count).toBe(1);

    // Focus skip link
    await page.keyboard.press('Tab');
    const skipLink = page.locator('.skip-link');
    await expect(skipLink).toBeFocused();
  });

  test('verifies mobile navigation toggle behavior on mobile viewport', async ({ page }) => {
    // Mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    const toggle = page.locator('#mobile-nav-toggle');
    await expect(toggle).toBeVisible();

    const navLinks = page.locator('#nav-links');
    await expect(navLinks).not.toHaveClass(/mobile-open/);

    // Click toggle
    await toggle.click();
    await expect(navLinks).toHaveClass(/mobile-open/);

    // Click link closes nav
    await page.locator('.nav-link').first().click();
    await expect(navLinks).not.toHaveClass(/mobile-open/);
  });
});
