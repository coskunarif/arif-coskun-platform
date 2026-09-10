import { test, expect } from '@playwright/test';
import { PersonalWebsitePage } from './pages/PersonalWebsitePage';

test.describe('Proof Terminal Shell & Interactive Command Execution', () => {
  test('executes quick query chips and renders deterministic log entries', async ({ page }) => {
    const site = new PersonalWebsitePage(page);
    await site.goto();

    // Verify initial default command
    await expect(page.locator('.term-log-entry')).toBeVisible();
    await expect(page.locator('.term-log-entry').first()).toContainText('LANGCHAIN');

    // Click --tilldone-loop chip
    await site.clickTerminalChip('--tilldone-loop');
    await expect(page.locator('.term-log-entry').last()).toContainText('TILLDONE');

    // Click --privacy-vaults chip
    await site.clickTerminalChip('--privacy-vaults');
    await expect(page.locator('.term-log-entry').last()).toContainText('MINDBALL');
  });

  test('types custom command and receives real-time response', async ({ page }) => {
    const site = new PersonalWebsitePage(page);
    await site.goto();

    // Type --benchmark
    await site.executeTerminalCommand('--benchmark');
    await expect(page.locator('.term-log-entry').last()).toContainText('AUTORESEARCH BENCHMARK SUITE');

    // Type help
    await site.executeTerminalCommand('help');
    await expect(page.locator('.term-log-entry').last()).toContainText('AVAILABLE COMMANDS:');
  });

  test('navigates command history with ArrowUp and supports output copy', async ({ page }) => {
    const site = new PersonalWebsitePage(page);
    await site.goto();

    const input = page.locator('#terminal-input');
    await input.fill('--manifesto');
    await input.press('Enter');
    await expect(page.locator('.term-log-entry').last()).toContainText('HIGH-TRUTH');

    // ArrowUp recalls previous command
    await input.press('ArrowUp');
    await expect(input).toHaveValue('--manifesto');

    // Test clipboard copy button feedback
    await page.locator('#term-copy-btn').click();
    await expect(page.locator('#term-copy-btn')).toContainText(/Copied|Kopyalandı/);
  });
});
