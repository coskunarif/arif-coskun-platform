---
name: modern-web-architecture
description: >-
  Modern web frontend architecture, zero-bloat performance engineering (100/100 Lighthouse,
  sub-second LCP, zero CLS), WCAG 2.2 AA accessibility standards, and 0-shift bilingual state
  management (EN/TR) with View Transitions for Arif Coskun's personal website.
---

# Modern Web Frontend Architecture & Performance Standards

Use this skill when implementing, refactoring, or evaluating the HTML/CSS/JS frontend, Core Web Vitals, accessibility, or bilingual routing for Arif Coskun's personal website.

---

## 1. Performance Non-Negotiables (Core Web Vitals)

| Metric | Target | Verification Method |
|---|---|---|
| **Lighthouse Score** | **100 / 100** across Performance, Accessibility, Best Practices, SEO | Chrome DevTools Lighthouse audit |
| **LCP (Largest Contentful Paint)** | **< 1.0s** | Edge caching + preloaded AVIF hero image (`fetchpriority="high"`) |
| **INP (Interaction to Next Paint)** | **< 50ms** | Zero main-thread blocking > 16ms, passive event listeners |
| **CLS (Cumulative Layout Shift)** | **0.00** | Explicit `width`/`height`/`aspect-ratio` on all media and containers |
| **Runtime Bundle Size** | **< 25 KB gzipped** | Zero bloated UI framework dependencies |

---

## 2. Modern HTML5 & CSS Architecture

### CSS Custom Properties & Modern Selectors
```css
/* Container Queries for responsive components without media query cascades */
.architecture-container {
  container-type: inline-size;
  container-name: arch;
}

@container arch (min-width: 640px) {
  .arch-grid {
    grid-template-columns: 280px 1fr;
  }
}

/* Relational :has() selector for form & state styling without JS overhead */
.form-card:has(input:focus-visible) {
  border-color: var(--accent-cobalt);
}
```

### View Transitions API for 0-Shift Transitions
```css
@view-transition {
  navigation: auto;
}

::view-transition-old(root),
::view-transition-new(root) {
  animation-duration: 160ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
}

@media (prefers-reduced-motion: reduce) {
  ::view-transition-group(*),
  ::view-transition-old(*),
  ::view-transition-new(*) {
    animation: none !important;
  }
}
```

---

## 3. Seamless Bilingual State Management (EN ⇄ TR)

### Requirements:
1. **0ms Dictionary Switch:** Dictionaries are loaded in memory for instant switching.
2. **Zero Layout Shifts:** Account for Turkish text being 15–25% longer with flexible container bounds.
3. **URL & Anchor Preservation:** Preserves search parameters (`?lang=tr`) and hash anchors (`#ventures`).
4. **Turkish Character Accuracy:** Always use `.toLocaleUpperCase('tr-TR')` and `.toLocaleLowerCase('tr-TR')` (safe handling for `İ/i` and `I/ı`).
5. **DOM Sync:** Dynamically updates `document.documentElement.lang = locale` and announces change to screen readers via `aria-live="polite"`.

```typescript
export type Locale = 'en' | 'tr';

export class BilingualManager {
  private currentLocale: Locale = 'en';
  private listeners: Set<(l: Locale) => void> = new Set();

  constructor() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') as Locale;
    this.currentLocale = (lang === 'tr' || lang === 'en') ? lang : 'en';
    this.applyDOM(this.currentLocale);
  }

  public setLocale(locale: Locale): void {
    if (this.currentLocale === locale) return;
    
    const update = () => {
      this.currentLocale = locale;
      const url = new URL(window.location.href);
      url.searchParams.set('lang', locale);
      window.history.replaceState({}, '', url.toString());
      this.applyDOM(locale);
      this.listeners.forEach(fn => fn(locale));
    };

    if ('startViewTransition' in document) {
      (document as any).startViewTransition(update);
    } else {
      update();
    }
  }

  private applyDOM(locale: Locale): void {
    document.documentElement.lang = locale;
    const announcer = document.getElementById('a11y-announcer');
    if (announcer) {
      announcer.textContent = locale === 'tr' ? 'Dil Türkçe yapıldı' : 'Language changed to English';
    }
  }
}
```

---

## 4. Accessibility (WCAG 2.2 AA Standard)

- **Skip Link:** Always first child in `<body>`: `<a href="#main-content" class="skip-link">Skip to main content</a>`.
- **Keyboard Focus Rings:** Never `outline: none` without replacement: `:focus-visible { outline: 2px solid var(--accent-cobalt); outline-offset: 2px; }`.
- **Minimum Tap Target:** `44x44px` on all buttons, links, and form elements.
- **Color Contrast:** Minimum `4.5:1` for normal text and `3:1` for UI borders and large headings.
- **Landmarks:** Every page must contain exactly one `<h1>`, `<header role="banner">`, `<main role="main">`, and `<footer role="contentinfo">`.
