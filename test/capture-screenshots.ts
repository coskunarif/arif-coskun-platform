import { chromium } from '@playwright/test';
import { createServer } from 'vite';
import path from 'path';
import fs from 'fs';

async function captureAllVisuals() {
  console.log('🚀 Starting Vite development server...');
  const server = await createServer({
    configFile: path.resolve('./vite.config.ts'),
    server: { port: 5173 }
  });
  await server.listen();
  console.log('✓ Vite server listening on http://localhost:5173');

  const artifactDir = '/home/ubuntuadmin/.gemini/antigravity-cli/brain/15377852-e190-4197-a339-663f7f8fedbd/screenshots';
  if (!fs.existsSync(artifactDir)) {
    fs.mkdirSync(artifactDir, { recursive: true });
  }

  console.log('🌐 Launching Chromium browser...');
  const browser = await chromium.launch({ headless: true });
  
  // 1. Desktop Full Page (1440x900)
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2
  });
  const page = await context.newPage();

  console.log('📸 Navigating to http://localhost:5173...');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // Capture Header in EN
  const headerEl = page.locator('.site-header');
  await headerEl.screenshot({ path: `${artifactDir}/00-header-en-1440.png` });

  // Capture Header in TR
  await page.locator('.lang-btn-tr').click();
  await page.waitForTimeout(300);
  await headerEl.screenshot({ path: `${artifactDir}/00-header-tr-1440.png` });
  await page.locator('.lang-btn-en').click();
  await page.waitForTimeout(300);

  // Full page screenshot
  console.log('📸 Capturing desktop full page...');
  await page.screenshot({ path: `${artifactDir}/01-desktop-full-page-en.png`, fullPage: true });

  // Section screenshots
  const sections = [
    { id: '#hero', name: '02-hero-section' },
    { id: '#triple-threat', name: '03-triple-threat-pillars' },
    { id: '#architectures', name: '04-architecture-explorer-mindball' },
    { id: '#terminal', name: '05-proof-terminal-default' },
    { id: '#ventures', name: '06-ventures-showcase' },
    { id: '#evolution', name: '07-timeline-chronology' },
    { id: '#services', name: '08-advisory-and-guarantee' },
    { id: '#vault', name: '09-vault-essays' },
    { id: '#contact', name: '10-contact-and-calendar' }
  ];

  for (const sec of sections) {
    const el = page.locator(sec.id);
    if (await el.isVisible()) {
      await el.screenshot({ path: `${artifactDir}/${sec.name}.png` });
      console.log(`✓ Captured ${sec.name}`);
    }
  }

  // Interactive Architecture Tab 2: beqom Fabric
  console.log('📸 Testing Architecture Explorer Tab 2 (beqom)...');
  const tabs = page.locator('.arch-tab-btn');
  if (await tabs.count() >= 2) {
    await tabs.nth(1).click();
    await page.waitForTimeout(300);
    await page.locator('#architectures').screenshot({ path: `${artifactDir}/11-arch-explorer-beqom.png` });

    // Click a node to open inspector
    const nodes = page.locator('.arch-node-card');
    if (await nodes.count() > 0) {
      await nodes.first().click();
      await page.waitForTimeout(300);
      await page.locator('#architectures').screenshot({ path: `${artifactDir}/12-arch-explorer-beqom-inspector.png` });
    }
  }

  // Interactive Architecture Tab 3: Agentic Software Factory
  if (await tabs.count() >= 3) {
    await tabs.nth(2).click();
    await page.waitForTimeout(300);
    await page.locator('#architectures').screenshot({ path: `${artifactDir}/13-arch-explorer-software-factory.png` });
  }

  // Interactive Terminal Commands
  console.log('📸 Testing Terminal interactive outputs...');
  const chipTilldone = page.locator('.term-chip[data-cmd="--tilldone-loop"]');
  if (await chipTilldone.isVisible()) {
    await chipTilldone.click();
    await page.waitForTimeout(300);
    await page.locator('#terminal').screenshot({ path: `${artifactDir}/14-terminal-tilldone-output.png` });
  }

  const termInput = page.locator('#terminal-input');
  if (await termInput.isVisible()) {
    await termInput.fill('--benchmark');
    await termInput.press('Enter');
    await page.waitForTimeout(300);
    await page.locator('#terminal').screenshot({ path: `${artifactDir}/15-terminal-benchmark-output.png` });
  }

  // Modal Open (Case Study / Essay)
  console.log('📸 Testing Modal dialog...');
  const essayReadBtn = page.locator('.essay-read-btn');
  if (await essayReadBtn.count() > 0) {
    await essayReadBtn.first().click();
    await page.waitForTimeout(300);
    await page.screenshot({ path: `${artifactDir}/16-essay-modal-view.png` });
    
    // Close modal
    const closeBtn = page.locator('#modal-close-btn');
    await closeBtn.click();
    await page.waitForTimeout(200);
  }

  // Turkish Language View
  console.log('📸 Testing Turkish language switch...');
  const trBtn = page.locator('.lang-btn-tr');
  await trBtn.click();
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${artifactDir}/17-desktop-full-page-tr.png`, fullPage: true });

  // Mobile Viewport (Pixel 7 / iPhone: 390x844)
  console.log('📸 Testing Mobile viewport...');
  const mobileContext = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  const mobilePage = await mobileContext.newPage();
  await mobilePage.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await mobilePage.waitForTimeout(500);
  await mobilePage.screenshot({ path: `${artifactDir}/18-mobile-full-page-en.png`, fullPage: true });
  await mobilePage.locator('#hero').screenshot({ path: `${artifactDir}/19-mobile-hero.png` });

  console.log('✨ All screenshots captured successfully in:', artifactDir);

  await browser.close();
  await server.close();
  process.exit(0);
}

captureAllVisuals().catch(err => {
  console.error('Error capturing screenshots:', err);
  process.exit(1);
});
