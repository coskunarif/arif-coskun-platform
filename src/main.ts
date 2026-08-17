import './style.css';
import { Locale, translations } from './data/translations';
import { architectures, highlightCodeSyntax } from './data/architectures';
import { executeTerminalCommand } from './data/terminal';
import { timelineMilestones, TimelineCategory } from './data/timeline';
import { ventures } from './data/ventures';
import { services } from './data/services';
import { vaultEssays } from './data/vault-essays';

/* ==========================================================================
   STATE MANAGEMENT & CORE CONTROLLER
   ========================================================================== */

class AppController {
  private currentLocale: Locale = 'en';
  private selectedArchSystemId: string = 'mindball';
  private selectedArchNodeId: string = 'mb-frontend';
  private activeTimelineCategory: TimelineCategory | 'all' = 'all';
  private terminalHistory: { cmd: string; time: number; output: string }[] = [];

  constructor() {
    this.initLocale();
    this.initDOM();
    this.bindEvents();
    this.startDualClock();
    this.runDefaultTerminalCmd();
  }

  /* --------------------------------------------------------------------------
     Bilingual State Engine
     -------------------------------------------------------------------------- */

  private initLocale(): void {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang') as Locale;
    if (langParam === 'tr' || langParam === 'en') {
      this.currentLocale = langParam;
    } else {
      const browserLang = navigator.language.toLowerCase();
      this.currentLocale = browserLang.startsWith('tr') ? 'tr' : 'en';
    }
  }

  public setLocale(locale: Locale): void {
    if (this.currentLocale === locale) return;

    this.currentLocale = locale;
    localStorage.setItem('arif_lang', locale);
    const url = new URL(window.location.href);
    url.searchParams.set('lang', locale);
    window.history.replaceState({}, '', url.toString());

    const update = () => {
      this.applyDOMTranslations();
      this.renderArchitectureExplorer();
      this.renderTimeline();
      this.renderVentures();
      this.renderServices();
      this.renderVault();
      this.updateLanguageSwitcherUI();
      this.announceA11y(locale === 'tr' ? 'Dil Türkçe olarak güncellendi' : 'Language changed to English');
    };

    if ('startViewTransition' in document && typeof (document as any).startViewTransition === 'function') {
      try {
        (window as any).__lastViewTransition = (document as any).startViewTransition(update);
      } catch {
        update();
      }
    } else {
      update();
    }
  }

  private updateLanguageSwitcherUI(): void {
    const enBtns = document.querySelectorAll('.lang-btn-en');
    const trBtns = document.querySelectorAll('.lang-btn-tr');

    enBtns.forEach(btn => {
      if (this.currentLocale === 'en') {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    trBtns.forEach(btn => {
      if (this.currentLocale === 'tr') {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });
  }

  private applyDOMTranslations(): void {
    const t = translations[this.currentLocale];

    // Document Meta
    document.documentElement.lang = this.currentLocale;
    document.title = t.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t.meta.description);

    // Header & Nav
    this.setText('#nav-status-text', t.nav.statusText);
    this.setText('#nav-link-architect', t.nav.architect);
    this.setText('#nav-link-ai', t.nav.aiSystems);
    this.setText('#nav-link-ventures', t.nav.ventures);
    this.setText('#nav-link-evolution', t.nav.evolution);
    this.setText('#nav-link-services', t.nav.services);
    this.setText('#nav-link-vault', t.nav.vault);
    this.setText('#nav-link-contact', t.nav.contact);
    this.setText('#nav-book-btn', t.nav.bookCall);

    // Hero Section
    this.setText('#hero-status-pill-text', t.nav.statusText);
    if (this.currentLocale === 'tr') {
      this.setHtml('#hero-title-line1', '<span class="no-break">Yüksek Doğruluklu</span> Kurumsal Sistemler');
    } else {
      this.setHtml('#hero-title-line1', 'Architecting <span class="no-break">High-Truth</span> Enterprise Platforms');
    }
    this.setText('#hero-title-line2', t.hero.titleLine2);
    this.setText('#hero-desc', t.hero.description);
    this.setText('#hero-cta-primary', t.hero.ctaPrimary);
    this.setText('#hero-cta-secondary', t.hero.ctaSecondary);

    this.setText('#proof-stat1-num', t.hero.proofStat1Number);
    this.setText('#proof-stat1-label', t.hero.proofStat1Label);
    this.setText('#proof-stat2-num', t.hero.proofStat2Number);
    this.setText('#proof-stat2-label', t.hero.proofStat2Label);
    this.setText('#proof-stat3-num', t.hero.proofStat3Number);
    this.setText('#proof-stat3-label', t.hero.proofStat3Label);
    this.setText('#proof-stat4-num', t.hero.proofStat4Number);
    this.setText('#proof-stat4-label', t.hero.proofStat4Label);

    this.setText('#meta-loc-wa', t.hero.locationWA);
    this.setText('#meta-loc-ist', t.hero.locationIST);

    // Pillars Section
    this.setText('#pillars-tag', t.pillars.tag);
    this.setText('#pillars-title', t.pillars.title);
    this.setText('#pillars-subtitle', t.pillars.subtitle);
    this.setText('#pillars-quote', t.pillars.quote);

    this.setText('#pillar1-title', t.pillars.pillar1Title);
    this.setText('#pillar1-role', t.pillars.pillar1Role);
    this.setText('#pillar1-desc', t.pillars.pillar1Desc);
    this.renderList('#pillar1-items', t.pillars.pillar1Items);

    this.setText('#pillar2-title', t.pillars.pillar2Title);
    this.setText('#pillar2-role', t.pillars.pillar2Role);
    this.setText('#pillar2-desc', t.pillars.pillar2Desc);
    this.renderList('#pillar2-items', t.pillars.pillar2Items);

    this.setText('#pillar3-title', t.pillars.pillar3Title);
    this.setText('#pillar3-role', t.pillars.pillar3Role);
    this.setText('#pillar3-desc', t.pillars.pillar3Desc);
    this.renderList('#pillar3-items', t.pillars.pillar3Items);

    // Architecture Explorer Header
    this.setText('#arch-tag', t.archExplorer.tag);
    this.setText('#arch-title', t.archExplorer.title);
    this.setText('#arch-subtitle', t.archExplorer.subtitle);

    // Terminal Header
    this.setText('#terminal-tag', t.terminal.tag);
    this.setText('#terminal-title', t.terminal.title);
    this.setText('#terminal-subtitle', t.terminal.subtitle);
    this.setText('#term-chips-title', t.terminal.chipsTitle);
    this.setText('#term-verified-badge', t.terminal.verifiedBadge);
    const termInput = document.getElementById('terminal-input') as HTMLInputElement;
    if (termInput) termInput.placeholder = t.terminal.placeholder;

    // Ventures Header
    this.setText('#ventures-tag', t.ventures.tag);
    this.setText('#ventures-title', t.ventures.title);
    this.setText('#ventures-subtitle', t.ventures.subtitle);

    // Timeline Header
    this.setText('#timeline-tag', t.timeline.tag);
    this.setText('#timeline-title', t.timeline.title);
    this.setText('#timeline-subtitle', t.timeline.subtitle);
    this.setText('#filter-all-btn', t.timeline.filterAll);
    this.setText('#filter-enterprise-btn', t.timeline.filterEnterprise);
    this.setText('#filter-ai-btn', t.timeline.filterAI);
    this.setText('#filter-ventures-btn', t.timeline.filterVentures);

    // Services Header & Guarantee
    this.setText('#services-tag', t.services.tag);
    this.setText('#services-title', t.services.title);
    this.setText('#services-subtitle', t.services.subtitle);
    this.setText('#guarantee-title', t.services.guaranteeTitle);
    this.setText('#guarantee-desc', t.services.guaranteeDesc);
    this.setText('#g1-title', t.services.g1Title);
    this.setText('#g1-desc', t.services.g1Desc);
    this.setText('#g2-title', t.services.g2Title);
    this.setText('#g2-desc', t.services.g2Desc);
    this.setText('#g3-title', t.services.g3Title);
    this.setText('#g3-desc', t.services.g3Desc);
    this.setText('#g4-title', t.services.g4Title);
    this.setText('#g4-desc', t.services.g4Desc);

    // Vault Header
    this.setText('#vault-tag', t.vault.tag);
    this.setText('#vault-title', t.vault.title);
    this.setText('#vault-subtitle', t.vault.subtitle);

    // Contact Section
    this.setText('#contact-tag', t.contact.tag);
    this.setText('#contact-title', t.contact.title);
    this.setText('#contact-subtitle', t.contact.subtitle);
    this.setText('#form-name-label', t.contact.nameLabel);
    this.setText('#form-email-label', t.contact.emailLabel);
    this.setText('#form-topic-label', t.contact.topicLabel);
    this.setText('#form-timeline-label', t.contact.timelineLabel);
    this.setText('#form-message-label', t.contact.messageLabel);
    this.setText('#contact-submit-btn', t.contact.sendBtn);
    this.setText('#cal-card-title', t.contact.scheduleCal);
    this.setText('#cal-card-desc', t.contact.scheduleCalDesc);
    this.setText('#cal-card-btn', t.contact.scheduleBtn);
    this.setText('#timezones-title', t.contact.timezonesTitle);
    this.setText('#direct-channels-title', t.contact.orDirectly);

    // Update Contact Select Options Reactively
    const topicSelect = document.getElementById('contact-topic') as HTMLSelectElement;
    if (topicSelect && topicSelect.options.length >= 6) {
      topicSelect.options[0].text = t.contact.topicOption1;
      topicSelect.options[1].text = t.contact.topicOption2;
      topicSelect.options[2].text = t.contact.topicOption3;
      topicSelect.options[3].text = t.contact.topicOption4;
      topicSelect.options[4].text = t.contact.topicOption5;
      topicSelect.options[5].text = t.contact.topicOption6;
    }
    const timelineSelect = document.getElementById('contact-timeline') as HTMLSelectElement;
    if (timelineSelect && timelineSelect.options.length >= 3) {
      timelineSelect.options[0].text = t.contact.timelineOption1;
      timelineSelect.options[1].text = t.contact.timelineOption2;
      timelineSelect.options[2].text = t.contact.timelineOption3;
    }

    // Footer
    this.setText('#footer-rights', `© ${new Date().getFullYear()} Arif Coskun. ${t.footer.rights}`);
    this.setText('#footer-tagline', t.footer.tagline);
    this.setText('#footer-geo-note', t.footer.geoNote);
    this.setText('#footer-back-to-top', t.footer.backToTop);
  }

  private setText(selector: string, text: string): void {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  }

  private setHtml(selector: string, html: string): void {
    const el = document.querySelector(selector);
    if (el) el.innerHTML = html;
  }

  private renderList(selector: string, items: string[]): void {
    const el = document.querySelector(selector);
    if (!el) return;
    el.innerHTML = items.map(item => `<li>${item}</li>`).join('');
  }

  private announceA11y(message: string): void {
    const announcer = document.getElementById('a11y-announcer');
    if (announcer) {
      announcer.textContent = message;
    }
  }

  /* --------------------------------------------------------------------------
     Interactive Architecture Explorer
     -------------------------------------------------------------------------- */

  private renderArchitectureExplorer(): void {
    const tabsContainer = document.getElementById('arch-tabs-nav');
    const nodesContainer = document.getElementById('arch-nodes-list');
    const inspectorContainer = document.getElementById('arch-inspector-panel');
    const sysHeader = document.getElementById('arch-system-header');

    if (!tabsContainer || !nodesContainer || !inspectorContainer || !sysHeader) return;

    // 1. Render Tabs
    tabsContainer.innerHTML = architectures.map(arch => `
      <button class="arch-tab-btn ${arch.id === this.selectedArchSystemId ? 'active' : ''}" data-arch-id="${arch.id}">
        ${arch.tabTitle[this.currentLocale]}
      </button>
    `).join('');

    const currentSystem = architectures.find(a => a.id === this.selectedArchSystemId) || architectures[0];

    // Ensure selected node exists in current system
    if (!currentSystem.nodes.some(n => n.id === this.selectedArchNodeId)) {
      this.selectedArchNodeId = currentSystem.nodes[0].id;
    }

    // 2. Render System Header
    sysHeader.innerHTML = `
      <h3 class="arch-system-title">${currentSystem.title[this.currentLocale]}</h3>
      <p class="arch-system-tagline">${currentSystem.tagline[this.currentLocale]}</p>
      <p style="font-size: 0.92rem; color: var(--text-secondary); margin-top: 0.5rem; line-height: 1.6;">${currentSystem.overview[this.currentLocale]}</p>
    `;

    // 3. Render Nodes
    nodesContainer.innerHTML = currentSystem.nodes.map(node => `
      <div class="precision-card arch-node-card ${node.id === this.selectedArchNodeId ? 'selected' : ''}" data-node-id="${node.id}">
        <div class="arch-node-header">
          <span class="arch-node-name">${node.name}</span>
          <span class="badge badge-cobalt">${node.badge}</span>
        </div>
        <p class="arch-node-preview">${node.role[this.currentLocale]}</p>
      </div>
    `).join('');

    // 4. Render Inspector Panel
    const activeNode = currentSystem.nodes.find(n => n.id === this.selectedArchNodeId) || currentSystem.nodes[0];
    const t = translations[this.currentLocale].archExplorer;

    inspectorContainer.innerHTML = `
      <span class="inspector-tag">🔍 ${t.inspectorTitle} // ${activeNode.category.toUpperCase()}</span>
      <h4 class="inspector-title">${activeNode.title[this.currentLocale]}</h4>
      <p class="inspector-role">${activeNode.description[this.currentLocale]}</p>

      <div class="inspector-metric-box">
        <div class="inspector-metric-label">${t.latencyLabel}</div>
        <div class="inspector-metric-val">${activeNode.latencyBenchmark}</div>
      </div>

      <div class="inspector-section-label">${t.securityLabel}</div>
      <p class="inspector-section-text">${activeNode.securityBoundary[this.currentLocale]}</p>

      <div class="inspector-section-label">${t.tradeoffLabel}</div>
      <p class="inspector-section-text">${activeNode.tradeoffRationale[this.currentLocale]}</p>

      <div class="inspector-section-label">${t.specLabel}</div>
      <div class="inspector-tech-chips">
        ${activeNode.techSpecs.map(tech => `<span class="badge badge-cyan">${tech}</span>`).join('')}
      </div>

      ${activeNode.codeSnippet ? `
        <div class="code-snippet-box">
          <pre><code>${highlightCodeSyntax(activeNode.codeSnippet)}</code></pre>
        </div>
      ` : ''}
    `;

    // Bind tab clicks
    tabsContainer.querySelectorAll('.arch-tab-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-arch-id');
        if (id) {
          this.selectedArchSystemId = id;
          this.renderArchitectureExplorer();
        }
      });
    });

    // Bind node clicks
    nodesContainer.querySelectorAll('.arch-node-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-node-id');
        if (id) {
          this.selectedArchNodeId = id;
          this.renderArchitectureExplorer();
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     Terminal Shell Engine
     -------------------------------------------------------------------------- */

  private runDefaultTerminalCmd(): void {
    this.executeTerminalCommand('--why-not-langchain');
  }

  private executeTerminalCommand(cmdRaw: string): void {
    const res = executeTerminalCommand(cmdRaw, this.currentLocale);
    if (!res.command && !cmdRaw.trim()) return;

    if (res.command === 'clear') {
      this.terminalHistory = [];
      this.renderTerminalLogs();
      return;
    }

    this.terminalHistory.push({
      cmd: res.command,
      time: res.executionTimeMs,
      output: res.output
    });

    this.renderTerminalLogs();
  }

  private renderTerminalLogs(): void {
    const body = document.getElementById('terminal-body');
    if (!body) return;

    body.innerHTML = this.terminalHistory.map(entry => `
      <div class="term-log-entry">
        <div class="term-cmd-line">
          <span class="term-cmd-prompt">arif@second-brain:~$</span>
          <span>${this.escapeHtml(entry.cmd)}</span>
        </div>
        <div class="term-output-text">${this.escapeHtml(entry.output)}</div>
        <span class="term-meta-tag">⚡ 100% Deterministic · Executed in ${entry.time}ms</span>
      </div>
    `).join('');

    body.scrollTop = body.scrollHeight;
  }

  /* --------------------------------------------------------------------------
     Timeline Rendering & Filtering
     -------------------------------------------------------------------------- */

  private renderTimeline(): void {
    const track = document.getElementById('timeline-track');
    if (!track) return;

    const filtered = this.activeTimelineCategory === 'all'
      ? timelineMilestones
      : timelineMilestones.filter(m => m.category === this.activeTimelineCategory);

    track.innerHTML = filtered.map(m => `
      <div class="timeline-item">
        <div class="timeline-node-dot"></div>
        <div class="precision-card timeline-card">
          <div class="timeline-card-header">
            <div>
              <span class="timeline-year">${m.yearRange}</span>
              <h4 class="timeline-title">${m.title[this.currentLocale]}</h4>
              <div class="timeline-role">${m.roleCompany[this.currentLocale]} · ${m.location}</div>
            </div>
            <span class="badge badge-cobalt">${m.category.toUpperCase()}</span>
          </div>
          <p class="timeline-summary">${m.summary[this.currentLocale]}</p>
          <div class="timeline-details">
            <ul class="timeline-highlights-list">
              ${m.highlights[this.currentLocale].map(h => `<li>${h}</li>`).join('')}
            </ul>
            <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; margin-top: 0.75rem;">
              ${m.techStack.map(tech => `<span class="badge">${tech}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  /* --------------------------------------------------------------------------
     Ventures Rendering
     -------------------------------------------------------------------------- */

  private renderVentures(): void {
    const grid = document.getElementById('ventures-grid');
    if (!grid) return;

    const t = translations[this.currentLocale].ventures;

    grid.innerHTML = ventures.map(v => {
      const badgeClass = v.statusType === 'live' ? 'badge-emerald' : v.statusType === 'production' ? 'badge-cobalt' : 'badge-cyan';
      return `
        <div class="precision-card venture-card">
          <div class="venture-top">
            <div class="venture-badges">
              <span class="badge ${badgeClass}">${v.statusBadge[this.currentLocale]}</span>
              <span class="badge">${v.categoryBadge}</span>
            </div>
            <h3 class="venture-name">${v.name}</h3>
            <div class="venture-role">${v.role[this.currentLocale]}</div>
            <p class="venture-tagline">${v.tagline[this.currentLocale]}</p>
            <div class="venture-metrics-box">${v.metrics[this.currentLocale]}</div>
            <div class="venture-tech-chips">
              ${v.techStack.map(s => `<span class="badge">${s}</span>`).join('')}
            </div>
          </div>
          <div class="venture-actions">
            <button class="btn btn-secondary btn-sm venture-modal-trigger" data-venture-id="${v.id}">
              ${t.viewCaseStudy}
            </button>
            ${v.links.live ? `
              <a href="${v.links.live}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                Live Site ↗
              </a>
            ` : v.links.github ? `
              <a href="${v.links.github}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
                GitHub ↗
              </a>
            ` : ''}
          </div>
        </div>
      `;
    }).join('');

    grid.querySelectorAll('.venture-modal-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-venture-id');
        if (id) this.openVentureModal(id);
      });
    });
  }

  private openVentureModal(id: string): void {
    const venture = ventures.find(v => v.id === id);
    if (!venture) return;

    const modal = document.getElementById('generic-modal');
    const titleEl = document.getElementById('modal-title');
    const bodyEl = document.getElementById('modal-body');
    if (!modal || !titleEl || !bodyEl) return;

    titleEl.textContent = `${venture.name} // Case Study & Architecture`;
    bodyEl.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="badge badge-emerald">${venture.statusBadge[this.currentLocale]}</span>
        <span class="badge" style="margin-left: 0.5rem;">${venture.role[this.currentLocale]}</span>
      </div>

      <p class="essay-lead">${venture.overview[this.currentLocale]}</p>

      <h4 style="font-size: 1.15rem; color: var(--accent-cobalt-light); margin-top: 1.5rem; margin-bottom: 0.5rem;">
        The Problem Solved
      </h4>
      <p>${venture.problemSolved[this.currentLocale]}</p>

      <h4 style="font-size: 1.15rem; color: var(--accent-emerald); margin-top: 1.5rem; margin-bottom: 0.5rem;">
        Architectural Breakthrough & Invariants
      </h4>
      <p>${venture.architecturalBreakthrough[this.currentLocale]}</p>

      <h4 style="font-size: 1.15rem; color: var(--text-tertiary); margin-top: 1.5rem; margin-bottom: 0.5rem;">
        Production Tech Stack
      </h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem;">
        ${venture.techStack.map(s => `<span class="badge badge-cobalt">${s}</span>`).join('')}
      </div>
    `;

    modal.classList.add('active');
  }

  /* --------------------------------------------------------------------------
     Services Rendering
     -------------------------------------------------------------------------- */

  private renderServices(): void {
    const grid = document.getElementById('services-grid');
    if (!grid) return;

    const t = translations[this.currentLocale].services;

    grid.innerHTML = services.map(s => {
      const isFeatured = s.tierNumber === '06';
      return `
      <div class="precision-card service-card ${isFeatured ? 'service-card-featured' : ''}">
        <div class="service-header">
          <div class="service-tier-num">TIER ${s.tierNumber} // ${s.badge}</div>
          <h3 class="service-title">${s.title[this.currentLocale]}</h3>
          <div class="service-subtitle">${s.subtitle[this.currentLocale]}</div>
          <p class="service-desc">${s.description[this.currentLocale]}</p>

          <div class="service-meta-box">
            <div class="service-meta-label">${t.timelineLabel}</div>
            <div class="service-meta-val">${s.timeline[this.currentLocale]}</div>
          </div>

          <div class="service-meta-label" style="margin-bottom: 0.5rem;">${t.deliverablesLabel}:</div>
          <ul class="deliverables-list">
            ${s.deliverables[this.currentLocale].map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
        <button class="btn btn-primary service-cta-trigger" data-topic="${s.ctaTopicKey}">
          ${t.bookBtn}
        </button>
      </div>
    `;
    }).join('');

    grid.querySelectorAll('.service-cta-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const topic = (e.currentTarget as HTMLElement).getAttribute('data-topic');
        this.scrollToContactWithTopic(topic);
      });
    });
  }

  private scrollToContactWithTopic(topicKey: string | null): void {
    const contactSection = document.getElementById('contact');
    const topicSelect = document.getElementById('contact-topic') as HTMLSelectElement;

    if (topicSelect && topicKey) {
      const keyLower = topicKey.toLowerCase();
      for (let i = 0; i < topicSelect.options.length; i++) {
        const optVal = topicSelect.options[i].value.toLowerCase();
        const optText = topicSelect.options[i].text.toLowerCase();
        if (
          (keyLower.includes('autonomous') || keyLower.includes('agentic')) && optVal === 'ai' ||
          (keyLower.includes('fabric') || keyLower.includes('data')) && optVal === 'fabric' ||
          (keyLower.includes('fractional') || keyLower.includes('cto')) && optVal === 'fractional' ||
          (keyLower.includes('operational') || keyLower.includes('business') || keyLower.includes('şubeli')) && optVal === 'business' ||
          (keyLower.includes('privacy') || keyLower.includes('mobile') || keyLower.includes('mindball')) && optVal === 'mobile' ||
          (keyLower.includes('strategy') || keyLower.includes('executive') || keyLower.includes('seans')) && optVal === 'strategy' ||
          optText.includes(keyLower.split(' ')[0])
        ) {
          topicSelect.selectedIndex = i;
          break;
        }
      }
    }

    if (contactSection && typeof contactSection.scrollIntoView === 'function') {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /* --------------------------------------------------------------------------
     The Vault Essays Rendering
     -------------------------------------------------------------------------- */

  private renderVault(): void {
    const grid = document.getElementById('vault-grid');
    if (!grid) return;

    const t = translations[this.currentLocale].vault;

    grid.innerHTML = vaultEssays.map(essay => `
      <div class="precision-card essay-card" data-essay-id="${essay.id}">
        <div>
          <div class="essay-meta">
            <span class="badge badge-cobalt">${essay.category}</span>
            <span>${essay.readTimeMin} ${t.minsRead} · ${essay.publishedDate}</span>
          </div>
          <h3 class="essay-title">${essay.title[this.currentLocale]}</h3>
          <p class="essay-excerpt">${essay.excerpt[this.currentLocale]}</p>
        </div>
        <div class="essay-read-link">
          ${t.readEssay}
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.essay-card').forEach(card => {
      card.addEventListener('click', (e) => {
        const id = (e.currentTarget as HTMLElement).getAttribute('data-essay-id');
        if (id) this.openEssayModal(id);
      });
    });
  }

  private openEssayModal(id: string): void {
    const essay = vaultEssays.find(e => e.id === id);
    if (!essay) return;

    const modal = document.getElementById('generic-modal');
    const titleEl = document.getElementById('modal-title');
    const bodyEl = document.getElementById('modal-body');
    if (!modal || !titleEl || !bodyEl) return;

    titleEl.textContent = essay.title[this.currentLocale];
    bodyEl.innerHTML = `
      <div style="margin-bottom: 1.5rem;">
        <span class="badge badge-cobalt">${essay.category}</span>
        <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-tertiary); margin-left: 0.75rem;">
          ${essay.readTimeMin} ${translations[this.currentLocale].vault.minsRead} · ${essay.publishedDate}
        </span>
      </div>
      <h4 style="font-size: 1.15rem; color: var(--accent-cyan); margin-bottom: 1.5rem;">
        ${essay.subtitle[this.currentLocale]}
      </h4>
      <div class="essay-body-content">
        ${essay.contentHtml[this.currentLocale]}
      </div>
    `;

    modal.classList.add('active');
  }

  /* --------------------------------------------------------------------------
     Dual Timezone Clock
     -------------------------------------------------------------------------- */

  private startDualClock(): void {
    const update = () => {
      const now = new Date();

      const timeWA = now.toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      const timeIST = now.toLocaleTimeString('en-US', {
        timeZone: 'Europe/Istanbul',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });

      const elWA = document.getElementById('clock-time-wa');
      const elIST = document.getElementById('clock-time-ist');

      if (elWA) elWA.textContent = `${timeWA} PDT`;
      if (elIST) elIST.textContent = `${timeIST} TRT`;
    };

    update();
    setInterval(update, 1000);
  }

  /* --------------------------------------------------------------------------
     DOM Initialization & Event Bindings
     -------------------------------------------------------------------------- */

  private initDOM(): void {
    this.applyDOMTranslations();
    this.updateLanguageSwitcherUI();
    this.renderArchitectureExplorer();
    this.renderTimeline();
    this.renderVentures();
    this.renderServices();
    this.renderVault();
  }

  private bindEvents(): void {
    // Language Switcher Buttons (Delegated & direct)
    document.addEventListener('click', (e) => {
      const target = (e.target as HTMLElement)?.closest?.('.lang-btn') as HTMLElement;
      if (target) {
        if (target.classList.contains('lang-btn-en') || target.getAttribute('data-lang') === 'en') {
          this.setLocale('en');
        } else if (target.classList.contains('lang-btn-tr') || target.getAttribute('data-lang') === 'tr') {
          this.setLocale('tr');
        }
      }
    });

    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (mobileToggle && navLinks) {
      mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('mobile-open');
      });
      navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          navLinks.classList.remove('mobile-open');
        });
      });
    }

    // Terminal Input & Chips
    const termInput = document.getElementById('terminal-input') as HTMLInputElement;
    if (termInput) {
      termInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.executeTerminalCommand(termInput.value);
          termInput.value = '';
        }
      });
    }

    document.querySelectorAll('.term-chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        const cmd = (e.currentTarget as HTMLElement).getAttribute('data-cmd');
        if (cmd) this.executeTerminalCommand(cmd);
      });
    });

    // Timeline Filter Buttons
    document.querySelectorAll('.timeline-filter-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        document.querySelectorAll('.timeline-filter-btn').forEach(b => b.classList.remove('active'));
        const target = e.currentTarget as HTMLElement;
        target.classList.add('active');
        this.activeTimelineCategory = target.getAttribute('data-category') as TimelineCategory | 'all';
        this.renderTimeline();
      });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form') as HTMLFormElement;
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleContactSubmit(contactForm);
      });
    }

    // Modal Close Triggers
    const modal = document.getElementById('generic-modal');
    const modalClose = document.getElementById('modal-close-btn');
    if (modal && modalClose) {
      modalClose.addEventListener('click', () => modal.classList.remove('active'));
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('active');
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
          modal.classList.remove('active');
        }
      });
    }

    // Direct Calendar Trigger
    const calBtn = document.getElementById('cal-card-btn');
    if (calBtn) {
      calBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.showToast(this.currentLocale === 'tr' ? 'Takvim yönlendirmesi başlatılıyor...' : 'Opening executive calendar scheduler...');
        window.open('https://cal.com', '_blank');
      });
    }
  }

  private handleContactSubmit(form: HTMLFormElement): void {
    const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const t = translations[this.currentLocale].contact;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = t.sendingBtn;
    }

    setTimeout(() => {
      form.reset();
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = t.sendBtn;
      }
      this.showToast(t.successTitle);
    }, 200);
  }

  private showToast(msg: string): void {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('active');
    setTimeout(() => toast.classList.remove('active'), 3500);
  }

  private escapeHtml(str: string): string {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
}

// Instantiate on DOM load
document.addEventListener('DOMContentLoaded', () => {
  new AppController();
});
