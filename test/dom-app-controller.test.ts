import { describe, it, expect, beforeEach } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('AppController & DOM Interactive Verification', () => {
  beforeEach(async () => {
    const html = fs.readFileSync(path.resolve('./index.html'), 'utf-8');
    document.documentElement.innerHTML = html;
    window.alert = () => {};

    // Load bundle code into global window
    const distAssets = fs.readdirSync(path.resolve('./dist/assets'));
    const jsBundle = distAssets.find(f => f.endsWith('.js'));
    if (jsBundle) {
      const code = fs.readFileSync(path.resolve(`./dist/assets/${jsBundle}`), 'utf-8');
      window.eval(code);
      document.dispatchEvent(new Event('DOMContentLoaded'));
      await new Promise(r => setTimeout(r, 60));
    }
  });

  it('initializes with English locale by default', () => {
    expect(document.documentElement.lang).toBe('en');
    const heroTitle = document.getElementById('hero-title-line1');
    expect(heroTitle?.textContent).toContain('Architecting High-Truth Enterprise Platforms');
  });

  it('switches cleanly to Turkish and updates all DOM sections', async () => {
    const trBtn = document.querySelector('.lang-btn-tr') as HTMLButtonElement;
    expect(trBtn).toBeDefined();

    trBtn.click();
    await new Promise(r => setTimeout(r, 60));

    expect(document.documentElement.lang).toBe('tr');
    const heroTitle = document.getElementById('hero-title-line1');
    expect(heroTitle?.textContent).toContain('Yüksek Doğruluklu Kurumsal Sistemler');

    const pillar1Title = document.getElementById('pillar1-title');
    expect(pillar1Title?.textContent).toContain('1. Kurumsal Sistem Mimarı');

    const announcer = document.getElementById('a11y-announcer');
    expect(announcer?.textContent).toContain('Dil Türkçe olarak güncellendi');
  });

  it('switches back to English cleanly', async () => {
    const trBtn = document.querySelector('.lang-btn-tr') as HTMLButtonElement;
    const enBtn = document.querySelector('.lang-btn-en') as HTMLButtonElement;

    trBtn.click();
    await new Promise(r => setTimeout(r, 40));
    expect(document.documentElement.lang).toBe('tr');

    enBtn.click();
    await new Promise(r => setTimeout(r, 40));
    expect(document.documentElement.lang).toBe('en');
    expect(document.getElementById('hero-title-line1')?.textContent).toContain('Architecting High-Truth Enterprise Platforms');
  });

  it('switches architecture tabs and renders corresponding nodes and telemetry inspector', async () => {
    const tabs = document.querySelectorAll('.arch-tab-btn');
    expect(tabs.length).toBe(3);

    // Click Tab 2: beqom Fabric
    (tabs[1] as HTMLButtonElement).click();
    await new Promise(r => setTimeout(r, 60));

    const sysTitle = document.querySelector('.arch-system-title');
    expect(sysTitle?.textContent).toContain('beqom');

    const nodes = document.querySelectorAll('.arch-node-card');
    expect(nodes.length).toBeGreaterThanOrEqual(3);

    // Click node
    (nodes[0] as HTMLElement).click();
    await new Promise(r => setTimeout(r, 40));
    const inspectorTitle = document.querySelector('.inspector-title');
    expect(inspectorTitle?.textContent?.trim().length).toBeGreaterThan(0);
  });

  it('executes terminal queries via quick query chips and input field', async () => {
    const chips = document.querySelectorAll('.term-chip');
    expect(chips.length).toBeGreaterThanOrEqual(6);

    // Click chip --tilldone-loop
    const tilldoneChip = Array.from(chips).find(c => c.getAttribute('data-cmd') === '--tilldone-loop') as HTMLButtonElement;
    expect(tilldoneChip).toBeDefined();
    tilldoneChip.click();
    await new Promise(r => setTimeout(r, 40));

    const logEntries = document.querySelectorAll('.term-log-entry');
    expect(logEntries.length).toBeGreaterThan(0);
    const lastEntry = logEntries[logEntries.length - 1];
    expect(lastEntry.textContent).toContain('TILLDONE');

    // Input command --benchmark
    const termInput = document.getElementById('terminal-input') as HTMLInputElement;
    termInput.value = '--benchmark';
    const enterEvt = new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
    termInput.dispatchEvent(enterEvt);
    await new Promise(r => setTimeout(r, 40));

    const updatedLogs = document.querySelectorAll('.term-log-entry');
    const benchmarkLog = updatedLogs[updatedLogs.length - 1];
    expect(benchmarkLog.textContent).toContain('AUTORESEARCH BENCHMARK SUITE');
  });

  it('filters timeline milestones by category', async () => {
    const enterpriseBtn = document.getElementById('filter-enterprise-btn') as HTMLButtonElement;
    const aiBtn = document.getElementById('filter-ai-btn') as HTMLButtonElement;
    const allBtn = document.getElementById('filter-all-btn') as HTMLButtonElement;

    enterpriseBtn.click();
    await new Promise(r => setTimeout(r, 40));
    const entItems = document.querySelectorAll('.timeline-item');
    expect(entItems.length).toBeGreaterThanOrEqual(4);

    aiBtn.click();
    await new Promise(r => setTimeout(r, 40));
    const aiItems = document.querySelectorAll('.timeline-item');
    expect(aiItems.length).toBeGreaterThanOrEqual(1);

    allBtn.click();
    await new Promise(r => setTimeout(r, 40));
    const allItems = document.querySelectorAll('.timeline-item');
    expect(allItems.length).toBe(entItems.length + aiItems.length + 1); // enterprise (5) + ai (1) + ventures (1) = 7
  });

  it('opens and closes venture case study modal', async () => {
    const modalTrigger = document.querySelector('.venture-modal-trigger') as HTMLButtonElement;
    expect(modalTrigger).toBeDefined();

    modalTrigger.click();
    await new Promise(r => setTimeout(r, 40));

    const modal = document.getElementById('generic-modal');
    expect(modal?.classList.contains('active')).toBe(true);

    const modalTitle = document.getElementById('modal-title');
    expect(modalTitle?.textContent).toContain('Case Study & Architecture');

    // Close via close button
    const closeBtn = document.getElementById('modal-close-btn') as HTMLButtonElement;
    closeBtn.click();
    await new Promise(r => setTimeout(r, 40));
    expect(modal?.classList.contains('active')).toBe(false);
  });

  it('opens and closes vault essay modal and closes with Escape key', async () => {
    const essayCard = document.querySelector('.essay-card') as HTMLElement;
    expect(essayCard).toBeDefined();

    essayCard.click();
    await new Promise(r => setTimeout(r, 40));

    const modal = document.getElementById('generic-modal');
    expect(modal?.classList.contains('active')).toBe(true);

    // Press Escape
    const escEvt = new window.KeyboardEvent('keydown', { key: 'Escape', bubbles: true });
    document.dispatchEvent(escEvt);
    await new Promise(r => setTimeout(r, 40));
    expect(modal?.classList.contains('active')).toBe(false);
  });

  it('handles contact form submit and provides user feedback toast', async () => {
    const form = document.getElementById('contact-form') as HTMLFormElement;
    const nameInput = document.getElementById('contact-name') as HTMLInputElement;
    const emailInput = document.getElementById('contact-email') as HTMLInputElement;
    const msgInput = document.getElementById('contact-message') as HTMLTextAreaElement;

    nameInput.value = 'John Doe';
    emailInput.value = 'john@example.com';
    msgInput.value = 'We want to migrate our analytics to Microsoft Fabric.';

    const submitEvt = new window.Event('submit', { bubbles: true, cancelable: true });
    form.dispatchEvent(submitEvt);
    await new Promise(r => setTimeout(r, 1100));

    const toast = document.getElementById('toast-notification');
    expect(toast?.textContent?.trim().length).toBeGreaterThan(0);
  });

  it('renders all 6 service cards and preselects operational business topic on CTA click', async () => {
    const serviceCards = document.querySelectorAll('.service-card');
    expect(serviceCards.length).toBe(6);

    const bizCta = Array.from(document.querySelectorAll('.service-cta-trigger')).find(
      btn => btn.getAttribute('data-topic')?.includes('Operational AI')
    ) as HTMLButtonElement;
    expect(bizCta).toBeDefined();

    bizCta.click();
    await new Promise(r => setTimeout(r, 40));

    const topicSelect = document.getElementById('contact-topic') as HTMLSelectElement;
    expect(topicSelect.value).toBe('business');
  });
});
