---
name: playwright-e2e-testing
description: >-
  End-to-end browser automation, Page Object Model (POM), visual regression screenshot comparisons,
  cross-browser validation, and interactive UI smoke testing for Arif Coskun's personal platform.
---

# Playwright E2E & Visual Testing Skill

Cross-browser automation framework for verifying interactive UI behaviors, terminal input emulation, theme visual regressions, and multi-viewport layouts.

---

## 1. Playwright Setup & Configuration

**playwright.config.ts**:
```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  reporter: [['html'], ['list']],
  use: {
    baseURL: 'http://localhost:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'Desktop Chrome', use: { ...devices['Desktop Chrome'] } },
    { name: 'Desktop Safari', use: { ...devices['Desktop Safari'] } },
    { name: 'Mobile Chrome', use: { ...devices['Pixel 5'] } },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:5173',
    reuseExistingServer: true,
  },
});
```

---

## 2. Page Object Model (POM) Structure

Use Page Objects to encapsulate DOM interaction logic and insulate tests against minor markup refactors:

### `PersonalWebsitePage.ts`
```typescript
import { Page, Locator, expect } from '@playwright/test';

export class PersonalWebsitePage {
  readonly page: Page;
  readonly langTrBtn: Locator;
  readonly langEnBtn: Locator;
  readonly archTabs: Locator;
  readonly terminalInput: Locator;
  readonly terminalLogs: Locator;
  readonly modalDrawer: Locator;
  readonly modalCloseBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.langTrBtn = page.getByRole('button', { name: 'TR' });
    this.langEnBtn = page.getByRole('button', { name: 'EN' });
    this.archTabs = page.locator('.arch-tab-btn');
    this.terminalInput = page.locator('#terminal-input');
    this.terminalLogs = page.locator('.term-log-entry');
    this.modalDrawer = page.locator('#generic-modal');
    this.modalCloseBtn = page.locator('#modal-close-btn');
  }

  async goto() {
    await this.page.goto('/');
  }

  async switchLanguage(lang: 'TR' | 'EN') {
    if (lang === 'TR') await this.langTrBtn.click();
    else await this.langEnBtn.click();
  }

  async selectArchitectureTab(index: number) {
    await this.archTabs.nth(index).click();
  }

  async executeTerminalCommand(cmd: string) {
    await this.terminalInput.fill(cmd);
    await this.terminalInput.press('Enter');
  }
}
```

---

## 3. Core E2E Test Scenarios

### A. Bilingual State Transition & URL Verification
```typescript
import { test, expect } from '@playwright/test';
import { PersonalWebsitePage } from './pages/PersonalWebsitePage';

test.describe('Bilingual Navigation', () => {
  test('switches language cleanly without page refresh or layout shift', async ({ page }) => {
    const site = new PersonalWebsitePage(page);
    await site.goto();

    await site.switchLanguage('TR');
    await expect(page).toHaveURL(/\?lang=tr/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'tr');
    await expect(page.locator('#hero-title-line1')).toContainText('Yüksek Doğruluklu');

    await site.switchLanguage('EN');
    await expect(page).toHaveURL(/\?lang=en/);
    await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  });
});
```

### B. Interactive Architecture Explorer & Inspector
```typescript
test('clicking architecture nodes opens the telemetry inspector panel', async ({ page }) => {
  const site = new PersonalWebsitePage(page);
  await site.goto();

  await site.selectArchitectureTab(1); // beqom Fabric
  await expect(page.locator('.arch-system-title')).toContainText('beqom');

  // Click first subsystem node
  await page.locator('.arch-node-card').first().click();
  await expect(page.locator('.inspector-title')).toBeVisible();
});
```

### C. Visual Regression Testing (Dark Luxury Theme)
```typescript
test('visual snapshot test of hero & terminal', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('#hero-section')).toHaveScreenshot('hero-section-dark.png', {
    maxDiffPixelRatio: 0.02
  });
});
```

---

## 4. Playwright Anti-Patterns & Best Practices

- ❌ **Do NOT use arbitrary timeouts:** Never do `page.waitForTimeout(3000)`. Rely on Playwright's automatic web assertions (`await expect(locator).toBeVisible()`).
- ❌ **Do NOT use brittle CSS chains:** Avoid `div > div:nth-child(3) > span`. Use semantic accessible locators (`getByRole`, `getByLabel`, `getByTestId`).
- ✅ **Test Keyboard Accessibility:** Test that pressing `Escape` closes modals and `Tab` focuses through interactive cards in logical order.
