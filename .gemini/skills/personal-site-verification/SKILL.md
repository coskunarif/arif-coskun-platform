---
name: personal-site-verification
description: >-
  Pre-flight and post-flight verification loop (tilldone standard), headless browser smoke testing,
  Lighthouse audits, bilingual regression checking, schema validation, and zero-defect quality gate
  for Arif Coskun's personal website.
---

# Personal Site Verification & Quality Gate Engine (`tilldone` Standard)

Use this skill before declaring any code, component, page, or release complete on Arif Coskun's personal website.

---

## 1. The Core Standard: "Software is Never Done Until Reality Agrees"

An AI agent is **not** done because it generated code without syntax errors. It is done only when non-model, empirical verification checks pass:

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                           THE 5-STEP QUALITY GATE                               │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 1. BUILD & RUNTIME: Clean build, zero console errors or hydration warnings.     │
│ 2. LIGHTHOUSE: 100/100 across Performance, Accessibility, Best Practices, SEO.  │
│ 3. BILINGUAL DOM: Zero layout shifts, exact Turkish casing (İ/i, I/ı), clean ARIA│
│ 4. SCHEMA & SEO: Valid JSON-LD graph, robots.txt, llms.txt & hreflang verified. │
│ 5. INTERACTION: Interactive architecture tabs, terminal explorer, & forms work. │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Verification Procedure Checklist

### Step 1: Headless DOM & Console Sanity Check
- Verify that the web server runs cleanly.
- Inspect browser console logs to confirm zero errors or unhandled exceptions.

### Step 2: Core Web Vitals & Performance Audit
- Run Lighthouse or performance profiler.
- LCP must be < 1.0s.
- CLS must be 0.00.
- INP must be < 50ms.

### Step 3: Bilingual Locale Verification (EN ⇄ TR)
- Toggle language to `TR` and verify:
  - All text transforms to fluent, authentic Turkish.
  - No text overflow or clipped buttons due to longer Turkish phrases.
  - URL parameter updates to `?lang=tr` without full page refresh.
  - Heading tags (`<h1>` to `<h3>`) retain correct hierarchy.
- Toggle language back to `EN` and verify state restoration.

### Step 4: Schema & GEO Validation
- Parse JSON-LD scripts to confirm valid JSON syntax.
- Confirm presence of `Person`, `WebSite`, `ProfilePage`, and `OfferCatalog` nodes.
- Confirm `/llms.txt` and `/llms-full.txt` endpoints return clean, formatted markdown.

### Step 5: Interactive Elements Smoke Test
- Click through all tabs on the **Interactive Architecture Explorer** (MindBall, beqom Fabric, Agentic Software Factory).
- Click preset buttons on the **"AI Second Brain" Proof Terminal** and verify terminal output renders instantly.
- Test the contact and booking form validation states.
