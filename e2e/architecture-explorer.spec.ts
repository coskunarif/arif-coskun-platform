import { test, expect } from '@playwright/test';
import { PersonalWebsitePage } from './pages/PersonalWebsitePage';

test.describe('Interactive Architecture Explorer & Telemetry Panel', () => {
  test('navigates through all 3 production architecture tabs and displays details', async ({ page }) => {
    const site = new PersonalWebsitePage(page);
    await site.goto();

    // Default System 1: MindBall
    await expect(page.locator('.arch-system-title')).toContainText('MindBall');
    await expect(page.locator('.arch-node-card')).toHaveCount(4);

    // Tab 2: beqom Fabric
    await site.selectArchitectureTab(1);
    await expect(page.locator('.arch-system-title')).toContainText('beqom');
    await expect(page.locator('.arch-node-card')).toHaveCount(3);

    // Tab 3: Agentic Software Factory
    await site.selectArchitectureTab(2);
    await expect(page.locator('.arch-system-title')).toContainText('The Agentic Software Factory');
    await expect(page.locator('.arch-node-card')).toHaveCount(3);
  });

  test('clicking nodes updates the telemetry inspector panel with security and latency metrics', async ({ page }) => {
    const site = new PersonalWebsitePage(page);
    await site.goto();

    // Select beqom Fabric
    await site.selectArchitectureTab(1);
    // Click OneLake Node
    await site.selectArchitectureNode(1);

    await expect(page.locator('.inspector-title')).toContainText('OneLake Delta Parquet Synchronization');
    await expect(page.locator('.inspector-metric-val')).toContainText('5-second');
    await expect(page.locator('.inspector-tech-chips')).toContainText('Microsoft Fabric');
  });
});
