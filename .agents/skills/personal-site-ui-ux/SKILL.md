---
name: personal-site-ui-ux
description: >-
  UI/UX design systems, luxury editorial dark aesthetic tokens, fluid typography,
  interactive architecture blueprints, spring physics micro-interactions, anti-cliché guardrails,
  and component visual excellence for building Arif Coskun's personal website.
---

# Personal Site UI/UX Design System & Visual Aesthetics

Use this skill when designing, reviewing, or styling any component, layout, or visual element of Arif Coskun's personal website.

---

## 1. Core Visual Archetype: "The Master Architect & Sovereign Builder"

The visual aesthetic reflects 20+ years of high-scale enterprise cloud and data platforms combined with cutting-edge autonomous AI systems. It must feel like an elite engineering instrument—calm, precise, high-truth, and devoid of statistical AI slop.

### OKLCH & Obsidian Color System

```css
:root {
  /* Canvas & Background Surfaces */
  --bg-canvas: #07090e;              /* Deep Obsidian */
  --bg-surface-1: #0d111a;            /* Card & Section Base */
  --bg-surface-2: #141a26;            /* Popover & Elevated Modal */
  --bg-surface-3: #1d2638;            /* Active & Hover Surface */

  /* Hairline Precision Borders */
  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-medium: rgba(255, 255, 255, 0.14);
  --border-focus: rgba(96, 165, 250, 0.4);

  /* Typography Colors */
  --text-primary: #f1f5f9;            /* High Contrast Slate */
  --text-secondary: #94a3b8;          /* Muted Silver */
  --text-tertiary: #64748b;           /* Dim Metadata */

  /* Precision Brand Accents */
  --accent-cobalt: #3b82f6;           /* Electric Cobalt */
  --accent-cobalt-glow: rgba(59, 130, 246, 0.15);
  --accent-cyan: #06b6d4;             /* System Active Indicator */
  --accent-emerald: #10b981;          /* Verification Pass Green */
  --accent-amber: #f59e0b;            /* Warning / In-Progress */

  /* Elevation Shadows */
  --shadow-card: 0 0 0 1px rgba(0, 0, 0, 0.3), 0 4px 20px rgba(0, 0, 0, 0.5);
  --shadow-hover: 0 0 0 1px rgba(96, 165, 250, 0.25), 0 12px 36px -8px rgba(0, 0, 0, 0.7), 0 0 24px -4px rgba(59, 130, 246, 0.2);
}
```

---

## 2. Typography & Fluid Scaling Rules

1. **Headings & Display:** `Geist Sans` or `Plus Jakarta Sans` with tight negative tracking (`letter-spacing: -0.025em`) and line-height `1.15`.
2. **Body Copy:** `Inter` or `Geist Sans` (`line-height: 1.6`, max measure `65ch`).
3. **Monospace & Code Badges:** `JetBrains Mono` or `Geist Mono` (`font-feature-settings: 'cv02', 'cv03', 'cv04', 'cv11'`).

```css
/* Fluid Typography Scale (Mobile 375px → Desktop 1440px) */
--font-display: clamp(2.25rem, 1.7rem + 2.75vw, 4.5rem);   /* 36px -> 72px */
--font-h1:      clamp(1.85rem, 1.5rem + 1.75vw, 3.25rem);  /* 30px -> 52px */
--font-h2:      clamp(1.5rem, 1.25rem + 1.25vw, 2.25rem);   /* 24px -> 36px */
--font-h3:      clamp(1.2rem, 1.05rem + 0.75vw, 1.6rem);   /* 19px -> 25px */
--font-body:    clamp(0.95rem, 0.9rem + 0.25vw, 1.0625rem); /* 15px -> 17px */
--font-mono-sm: clamp(0.75rem, 0.72rem + 0.15vw, 0.875rem); /* 12px -> 14px */
```

---

## 3. Interactive Components Blueprint

### 1. Interactive Architecture Explorer
- **Purpose:** Interactive multi-system inspector showcasing 3 production architectures:
  1. *MindBall (Mobile & Security):* React Native, Zustand, on-device AES encrypted SecureStore vaults (`localOnly: true`), Firebase, Posnet Virtual POS.
  2. *beqom Enterprise Platform Modernization:* Microsoft Fabric Lakehouse, OneLake sync, SQL calculation engine tuning, Azure IaC, Customer-Managed Keys (CMK).
  3. *The Autonomous Agentic Software Factory:* `tilldone` empirical verification loop, headless Chrome DevTools Protocol (CDP) daemon, `vault` zero-latency knowledge routing.
- **Interactivity:** Tab toggle switches between systems. Clicking any architecture node reveals a side panel with technical specifications, latency metrics, and architectural trade-offs.

### 2. "AI Second Brain" Proof Terminal
- **Purpose:** Interactive terminal demonstrating Arif's autonomous tooling and knowledge gateway.
- **Features:** Preset query buttons (`[--why-not-langchain]`, `[--fabric-migration]`, `[--tilldone-loop]`, `[--privacy-vaults]`), instant monospace outputs, verified benchmark tags (`"100% Deterministic · Verified in 14ms"`).

### 3. Chronological Career Evolution (2007 → Present)
- Interactive vertical track with category filtering: `[All]`, `[Enterprise & Cloud]`, `[AI & Agents]`, `[Ventures & Startups]`.

---

## 4. Micro-Interactions & Motion Standards

- **Card Hover Physics:**
  ```css
  .precision-card {
    background: var(--bg-surface-1);
    border: 1px solid var(--border-subtle);
    border-radius: 12px;
    box-shadow: var(--shadow-card);
    transition: transform 180ms cubic-bezier(0.16, 1, 0.3, 1),
                border-color 180ms ease,
                box-shadow 180ms cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform;
  }
  .precision-card:hover {
    transform: translateY(-2px);
    border-color: var(--border-focus);
    box-shadow: var(--shadow-hover);
  }
  ```
- **Zero-Jank Rule:** Animate only `transform` and `opacity`. Never animate layout properties (`width`, `height`, `margin`, `padding`).
- **Reduced Motion:** Always include `@media (prefers-reduced-motion: reduce) { * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; } }`.

---

## 5. Forbidden Clichés (Anti-Slop Guardrails)

- ❌ **NO purple/indigo on dark backgrounds** (Generic AI boilerplate).
- ❌ **NO random icon-stuffed bento boxes** without informational hierarchy.
- ❌ **NO pulsing pill badges** on headline titles.
- ❌ **NO rainbow gradient text spans** across headline keywords.
- ❌ **NO pure black `#000000` backgrounds** (avoids OLED smearing and harsh eye fatigue).
