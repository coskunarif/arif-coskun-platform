import { test, expect } from '@playwright/test';
import { PersonalWebsitePage } from './pages/PersonalWebsitePage';

test.describe('Modals, Contact Form & Interactive Drawers', () => {
  test('opens venture modal, displays case study, and closes via close button and Escape key', async ({ page }) => {
    const site = new PersonalWebsitePage(page);
    await site.goto();

    // Open Venture Modal
    await site.openVentureCaseStudy(0);
    await expect(site.modalDrawer).toHaveClass(/active/);
    await expect(page.locator('#modal-title')).toContainText('MindBall // Case Study & Architecture');

    // Close via close button
    await site.closeModal();
    await expect(site.modalDrawer).not.toHaveClass(/active/);

    // Open Vault Essay Modal
    await site.openVaultEssay(0);
    await expect(site.modalDrawer).toHaveClass(/active/);
    await expect(page.locator('#modal-title')).toContainText('The High-Truth Standard');

    // Close via Escape key
    await page.keyboard.press('Escape');
    await expect(site.modalDrawer).not.toHaveClass(/active/);
  });

  test('submits contact form and shows toast confirmation', async ({ page }) => {
    const site = new PersonalWebsitePage(page);
    await site.goto();

    // Fill form
    await page.locator('#contact-name').fill('Sarah Connor');
    await page.locator('#contact-email').fill('sarah@cyberdyne.com');
    await page.locator('#contact-message').fill('Seeking autonomous AI agent software factory implementation.');

    // Accept simulated alert
    page.on('dialog', async dialog => {
      await dialog.accept();
    });

    await page.locator('#contact-submit-btn').click({ force: true });

    // Verify toast notification appears
    await expect(site.toastNotification).toBeVisible();
    await expect(site.toastNotification).toHaveClass(/active/);
  });
});
