import { Page, Locator, expect } from '@playwright/test';

export class PersonalWebsitePage {
  readonly page: Page;
  readonly langTrBtn: Locator;
  readonly langEnBtn: Locator;
  readonly archTabs: Locator;
  readonly archNodes: Locator;
  readonly terminalInput: Locator;
  readonly terminalLogs: Locator;
  readonly terminalChips: Locator;
  readonly modalDrawer: Locator;
  readonly modalCloseBtn: Locator;
  readonly timelineFilterBtns: Locator;
  readonly timelineItems: Locator;
  readonly contactForm: Locator;
  readonly toastNotification: Locator;
  readonly mobileToggle: Locator;
  readonly navLinks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.langTrBtn = page.locator('.lang-btn-tr').first();
    this.langEnBtn = page.locator('.lang-btn-en').first();
    this.archTabs = page.locator('.arch-tab-btn');
    this.archNodes = page.locator('.arch-node-card');
    this.terminalInput = page.locator('#terminal-input');
    this.terminalLogs = page.locator('.term-log-entry');
    this.terminalChips = page.locator('.term-chip');
    this.modalDrawer = page.locator('#generic-modal');
    this.modalCloseBtn = page.locator('#modal-close-btn');
    this.timelineFilterBtns = page.locator('.timeline-filter-btn');
    this.timelineItems = page.locator('.timeline-item');
    this.contactForm = page.locator('#contact-form');
    this.toastNotification = page.locator('#toast-notification');
    this.mobileToggle = page.locator('#mobile-nav-toggle');
    this.navLinks = page.locator('#nav-links');
  }

  async goto() {
    await this.page.goto('/');
  }

  async switchLanguage(lang: 'TR' | 'EN') {
    await this.page.evaluate(async () => {
      const vt = (window as any).__lastViewTransition;
      if (vt && vt.finished) {
        try {
          await vt.finished;
        } catch {
          // ignore aborted transition
        }
      }
    });
    await this.page.waitForTimeout(100);
    const btn = lang === 'TR' ? this.langTrBtn : this.langEnBtn;
    await btn.click({ force: true });
    await this.page.evaluate(async () => {
      const vt = (window as any).__lastViewTransition;
      if (vt && vt.finished) {
        try {
          await vt.finished;
        } catch {
          // ignore aborted transition
        }
      }
    });
    await this.page.waitForTimeout(100);
  }

  async selectArchitectureTab(index: number) {
    const tab = this.archTabs.nth(index);
    await tab.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(150);
    await tab.click({ force: true });
    await this.page.waitForTimeout(250);
  }

  async selectArchitectureNode(index: number) {
    const node = this.archNodes.nth(index);
    await node.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(150);
    await node.click({ force: true });
    await this.page.waitForTimeout(250);
  }

  async executeTerminalCommand(cmd: string) {
    await this.terminalInput.scrollIntoViewIfNeeded();
    await this.terminalInput.fill(cmd);
    await this.terminalInput.press('Enter');
  }

  async clickTerminalChip(cmd: string) {
    const chip = this.page.locator(`.term-chip[data-cmd="${cmd}"]`);
    await chip.scrollIntoViewIfNeeded();
    await chip.click({ force: true });
  }

  async filterTimeline(category: 'all' | 'enterprise' | 'ai' | 'ventures') {
    const btn = this.page.locator(`.timeline-filter-btn[data-category="${category}"]`);
    await btn.scrollIntoViewIfNeeded();
    await btn.click({ force: true });
  }

  async openVentureCaseStudy(index: number = 0) {
    const trigger = this.page.locator('.venture-modal-trigger').nth(index);
    await trigger.scrollIntoViewIfNeeded();
    await trigger.click({ force: true });
  }

  async openVaultEssay(index: number = 0) {
    const card = this.page.locator('.essay-card').nth(index);
    await card.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(100);
    await card.click({ force: true });
  }

  async closeModal() {
    await this.page.waitForTimeout(150);
    await this.modalCloseBtn.click({ force: true });
    await this.page.waitForTimeout(150);
  }
}
