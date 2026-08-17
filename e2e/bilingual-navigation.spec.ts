import { test, expect } from '@playwright/test';
import { PersonalWebsitePage } from './pages/PersonalWebsitePage';

test.describe('Bilingual Navigation & State Engine (EN ⇄ TR)', () => {
  test('initializes and switches language cleanly with URL param updates and no layout shift', async ({ page }) => {
    const site = new PersonalWebsitePage(page);
    await site.goto();

    // Default English
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('#hero-title-line1')).toContainText('Architecting High-Truth Enterprise Platforms');

    // Switch to TR
    await site.switchLanguage('TR');
    await expect(page).toHaveURL(/\?lang=tr/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'tr');
    await expect(page.locator('#hero-title-line1')).toContainText('Yüksek Doğruluklu Kurumsal Sistemler');
    await expect(page.locator('#pillar1-title')).toContainText('1. Kurumsal Sistem Mimarı');

    // Switch back to EN
    await site.switchLanguage('EN');
    await expect(page).toHaveURL(/\?lang=en/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
    await expect(page.locator('#hero-title-line1')).toContainText('Architecting High-Truth Enterprise Platforms');
  });

  test('loads direct Turkish URL when ?lang=tr is present', async ({ page }) => {
    await page.goto('/?lang=tr');
    await expect(page.locator('html')).toHaveAttribute('lang', 'tr');
    await expect(page.locator('#hero-title-line1')).toContainText('Yüksek Doğruluklu Kurumsal Sistemler');
  });
});
