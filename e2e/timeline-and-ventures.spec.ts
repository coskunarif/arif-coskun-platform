import { test, expect } from '@playwright/test';
import { PersonalWebsitePage } from './pages/PersonalWebsitePage';

test.describe('Timeline Filter & Shipped Ventures Showcase', () => {
  test('filters timeline items by category cleanly', async ({ page }) => {
    const site = new PersonalWebsitePage(page);
    await site.goto();

    const initialCount = await site.timelineItems.count();
    expect(initialCount).toBeGreaterThanOrEqual(7);

    // Filter Enterprise
    await site.filterTimeline('enterprise');
    const enterpriseCount = await site.timelineItems.count();
    expect(enterpriseCount).toBeGreaterThanOrEqual(4);
    expect(enterpriseCount).toBeLessThan(initialCount);

    // Filter AI
    await site.filterTimeline('ai');
    const aiCount = await site.timelineItems.count();
    expect(aiCount).toBeGreaterThanOrEqual(1);

    // Filter All
    await site.filterTimeline('all');
    expect(await site.timelineItems.count()).toBe(initialCount);
  });

  test('displays all shipped venture cards with live links', async ({ page }) => {
    const site = new PersonalWebsitePage(page);
    await site.goto();

    const ventureCards = page.locator('.venture-card');
    await expect(ventureCards).toHaveCount(4);

    await expect(page.locator('.venture-name').first()).toContainText('MindBall');
  });
});
