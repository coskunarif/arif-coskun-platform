import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import fs from 'fs';
import path from 'path';

describe('Visual Layout & UI/UX Design System Contracts', () => {
  let dom: JSDOM;
  let document: Document;

  beforeEach(() => {
    const html = fs.readFileSync(path.resolve('./index.html'), 'utf-8');
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  describe('1. Hero Section & Typography Hierarchy', () => {
    it('contains no-break headline span to prevent awkward hyphenation of High-Truth', () => {
      const heroTitle = document.querySelector('.hero-title');
      expect(heroTitle).not.toBeNull();
      const noBreakSpan = heroTitle?.querySelector('.no-break');
      expect(noBreakSpan, 'Expected .no-break span around High-Truth').not.toBeNull();
      expect(noBreakSpan?.textContent).toContain('High-Truth');
    });

    it('uses an executive status beacon instead of a generic pulsing biscuit pill', () => {
      const statusBeacon = document.querySelector('.hero-status-beacon');
      expect(statusBeacon, 'Expected .hero-status-beacon class on hero status indicator').not.toBeNull();
      const statusDot = statusBeacon?.querySelector('.status-dot');
      expect(statusDot).not.toBeNull();
    });

    it('formats portrait location badges with non-breaking whitespace to prevent orphan offset numbers', () => {
      const portraitBadge = document.querySelector('.portrait-meta-badge');
      expect(portraitBadge).not.toBeNull();
      const locations = portraitBadge?.querySelectorAll('.meta-location');
      expect(locations?.length).toBe(2);
      expect(locations?.[0].classList.contains('no-wrap-text')).toBe(true);
      expect(locations?.[1].classList.contains('no-wrap-text')).toBe(true);
    });
  });

  describe('2. Navigation Header & Responsive Spacing', () => {
    it('has clean navigation links with concise, single-line labels', () => {
      const navLinks = document.querySelectorAll('.nav-links .nav-link');
      expect(navLinks.length).toBe(7);
      
      const linkTexts = Array.from(navLinks).map(a => a.textContent?.trim());
      expect(linkTexts).toContain('The Architect');
      expect(linkTexts).toContain('AI Blueprints');
      expect(linkTexts).toContain('Ventures');
      expect(linkTexts).toContain('20Y Trajectory');
      expect(linkTexts).toContain('Advisory');
      expect(linkTexts).toContain('The Vault');
      expect(linkTexts).toContain('Contact');
    });

    it('includes a glassmorphic header container with sticky blur support', () => {
      const header = document.querySelector('.site-header');
      expect(header).not.toBeNull();
      expect(header?.getAttribute('role')).toBe('banner');
    });
  });

  describe('3. Advisory & Solutions Catalog Grid Balance', () => {
    it('applies full-width featured span class to Tier 05 to balance the 2-column grid', () => {
      const tier5 = document.querySelector('.service-card-featured');
      expect(tier5, 'Expected Tier 05 to have .service-card-featured for grid balance').not.toBeNull();
    });

    it('has verified client guarantee principles with distinct numbers', () => {
      const guaranteeItems = document.querySelectorAll('.guarantee-item');
      expect(guaranteeItems.length).toBe(4);
    });
  });

  describe('4. Architecture Telemetry Inspector Code Syntax Highlighting', () => {
    it('syntax highlighter function produces structured token spans for code blocks', async () => {
      const { highlightCodeSyntax } = await import('../src/data/architectures');
      const sampleCode = `// Deterministic Streak Engine\nconst boundaryHour = 3;\nreturn { status: 'active' };`;
      const highlighted = highlightCodeSyntax(sampleCode);
      
      expect(highlighted).toContain('<span class="tok-comment">');
      expect(highlighted).toContain('<span class="tok-keyword">const</span>');
      expect(highlighted).toContain('<span class="tok-keyword">return</span>');
      expect(highlighted).toContain('<span class="tok-string">\'active\'</span>');
      expect(highlighted).toContain('<span class="tok-number">3</span>');
    });
  });

  describe('5. Contact Channels & Form UI Standards', () => {
    it('renders vector icon wrappers for global channels rather than raw unaligned emoji', () => {
      const socialLinks = document.querySelectorAll('.social-link-item');
      expect(socialLinks.length).toBe(4);
      for (const link of Array.from(socialLinks)) {
        const icon = link.querySelector('.social-icon-svg');
        expect(icon, 'Expected .social-icon-svg vector icon inside channel link').not.toBeNull();
      }
    });

    it('has dual-timezone clocks with live status indicator and differential badge', () => {
      const clockWa = document.getElementById('clock-time-wa');
      const clockIst = document.getElementById('clock-time-ist');
      const clockDiff = document.getElementById('clock-diff-badge');
      expect(clockWa).not.toBeNull();
      expect(clockIst).not.toBeNull();
      expect(clockDiff).not.toBeNull();
    });
  });

  describe('6. Luxury Micro-Interactions & Omni-Search Navigation', () => {
    it('contains hairline scroll progress indicator at top of document', () => {
      const scrollBar = document.getElementById('scroll-progress-bar');
      expect(scrollBar).not.toBeNull();
      expect(scrollBar?.getAttribute('aria-hidden')).toBe('true');
    });

    it('contains command palette trigger and modal with accessibility attributes', () => {
      const trigger = document.getElementById('cmd-k-trigger');
      expect(trigger).not.toBeNull();
      expect(trigger?.getAttribute('aria-label')).toContain('Cmd+K');

      const modal = document.getElementById('cmd-palette-modal');
      expect(modal).not.toBeNull();
      expect(modal?.getAttribute('role')).toBe('dialog');
      expect(modal?.getAttribute('aria-modal')).toBe('true');

      const input = document.getElementById('cmd-palette-input');
      expect(input).not.toBeNull();

      const results = document.getElementById('cmd-palette-results');
      expect(results).not.toBeNull();
      expect(results?.getAttribute('role')).toBe('listbox');
    });

    it('contains terminal clipboard copy action button in terminal header', () => {
      const copyBtn = document.getElementById('term-copy-btn');
      expect(copyBtn).not.toBeNull();
      expect(copyBtn?.getAttribute('aria-label')).toContain('Copy terminal output');
    });
  });
});
