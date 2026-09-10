import { test, expect } from '@playwright/test';
import { PersonalWebsitePage } from './pages/PersonalWebsitePage';

test.describe('Visual Regression & Dark Luxury Theme Verification', () => {
  let app: PersonalWebsitePage;

  test.beforeEach(async ({ page }) => {
    app = new PersonalWebsitePage(page);
    await app.goto();
    // Inject instantaneous scroll and animation overrides for visual determinism
    await page.addStyleTag({
      content: `
        html, body, *, *::before, *::after {
          scroll-behavior: auto !important;
          animation: none !important;
          transition: none !important;
        }
      `
    });
    // Wait for fonts to finish rendering
    await page.evaluate(() => document.fonts.ready);
    await page.waitForTimeout(200);
  });

  test('visual: captures landing page in English and Turkish without layout shift', async ({ page }) => {
    // 1. English Hero Section Snapshot
    const heroCard = page.locator('.hero-content');
    await heroCard.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await expect(heroCard).toBeVisible();
    await expect(heroCard).toHaveScreenshot('hero-content-en.png');

    // 2. English Triple Threat Pillar Card
    const firstPillar = page.locator('.pillar-card').first();
    await firstPillar.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await expect(firstPillar).toBeVisible();
    await expect(firstPillar).toHaveScreenshot('pillar-card-en.png');

    // 3. Switch to Turkish
    await app.switchLanguage('TR');
    await page.waitForTimeout(300);
    await page.evaluate(() => document.fonts.ready);

    // 4. Turkish Hero Section Snapshot
    await heroCard.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await expect(heroCard).toHaveScreenshot('hero-content-tr.png');

    // 5. Turkish Triple Threat Pillar Card
    await firstPillar.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await expect(firstPillar).toHaveScreenshot('pillar-card-tr.png');
  });

  test('visual: captures interactive Architecture Explorer states across all 3 tabs', async ({ page }) => {
    const archTabs = page.locator('#arch-tabs-nav');
    await archTabs.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Tab 1: MindBall System Header
    await app.selectArchitectureTab(0);
    await page.waitForTimeout(200);
    const archHeader = page.locator('#arch-system-header');
    await expect(archHeader).toHaveScreenshot('arch-header-mindball.png');

    // Tab 2: beqom Fabric
    await app.selectArchitectureTab(1);
    await page.waitForTimeout(200);
    await expect(archHeader).toHaveScreenshot('arch-header-beqom.png');

    // Tab 3: Agentic Software Factory
    await app.selectArchitectureTab(2);
    await page.waitForTimeout(200);
    await expect(archHeader).toHaveScreenshot('arch-header-agentic-factory.png');

    // Inspector open on node click
    await app.selectArchitectureNode(0);
    await page.waitForTimeout(200);
    const inspectorPanel = page.locator('#arch-inspector-panel');
    await expect(inspectorPanel).toBeVisible();
    await expect(inspectorPanel).toHaveScreenshot('arch-inspector-active.png');
  });

  test('visual: captures Proof Terminal interactive CLI states', async ({ page }) => {
    const terminalBody = page.locator('#terminal-body');
    const terminalHeader = page.locator('.terminal-header');
    await terminalHeader.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    // Terminal Header View
    await expect(terminalHeader).toHaveScreenshot('terminal-header.png');

    // Click --tilldone-loop chip
    await app.clickTerminalChip('--tilldone-loop');
    await page.waitForTimeout(200);
    await expect(terminalBody).toHaveScreenshot('terminal-body-tilldone-output.png');

    // Run --benchmark command
    await app.executeTerminalCommand('--benchmark');
    await page.waitForTimeout(200);
    await expect(terminalBody).toHaveScreenshot('terminal-body-benchmark-output.png');
  });

  test('visual: captures Modal Drawers for Vault Essays and Shipped Ventures', async ({ page }) => {
    // 1. Vault Essay Modal
    const vaultSection = page.locator('#vault');
    await vaultSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await app.openVaultEssay(0);
    await expect(app.modalDrawer).toHaveClass(/active/);
    await page.waitForTimeout(300);
    
    const modalTitle = page.locator('#modal-title');
    await expect(modalTitle).toBeVisible();
    await expect(modalTitle).toHaveScreenshot('modal-vault-essay-title.png');

    await app.closeModal();
    await expect(app.modalDrawer).not.toHaveClass(/active/);
    await page.waitForTimeout(200);

    // 2. Venture Case Study Modal
    const venturesSection = page.locator('#ventures');
    await venturesSection.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await app.openVentureCaseStudy(0);
    await expect(app.modalDrawer).toHaveClass(/active/);
    await page.waitForTimeout(300);

    await expect(modalTitle).toBeVisible();
    await expect(modalTitle).toHaveScreenshot('modal-venture-case-study-title.png');

    await app.closeModal();
    await expect(app.modalDrawer).not.toHaveClass(/active/);
  });

  test('visual: captures Services & Advisory Offerings and Contact Topic Prefill', async ({ page }) => {
    const firstServiceCard = page.locator('.service-card').first();
    await firstServiceCard.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);

    await expect(firstServiceCard).toHaveScreenshot('service-card-sample.png');

    // Click CTA on first service card to trigger prefill in Contact section
    const serviceCta = page.locator('.service-cta-trigger').first();
    await serviceCta.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await serviceCta.click({ force: true });
    await page.waitForTimeout(200);

    const contactForm = page.locator('#contact-form');
    await contactForm.scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
    await expect(contactForm).toHaveScreenshot('contact-form-prefilled.png');
  });
});
