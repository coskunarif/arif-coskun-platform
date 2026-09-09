# DESIGN.md — Arif Coskun Personal Platform Design Contract

> **Rule: Codebase Wins.** This file is the single visual source of truth for this platform.
> When building or refactoring UI components or layouts, adhere strictly to the tokens, scales, and constraints below.

## 1. Aesthetic Identity & Calibration Dials
- **Archetype**: "The Master Architect & Sovereign Builder" — Luxury editorial engineering dark aesthetic.
- **Primary Stack**: `nextjs` (React / Tailwind / Framer Motion / Lucide)
- **Design Variance**: `6/10` (Refined, asymmetric visual rhythm without chaotic noise)
- **Motion Intensity**: `4/10` (Restrained spring physics, micro-interactions only on user intent)
- **Visual Density**: `5/10` (Breathable editorial layout, high data clarity)

## 2. Color System & Semantic Tokens (OKLCH & Obsidian)
- **Canvas / Background**: `#07090E` (Deep Obsidian)
- **Surface 1 (Cards & Sections)**: `#0D111A`
- **Surface 2 (Popovers & Modals)**: `#141A26`
- **Surface 3 (Active / Hover States)**: `#1D2638`
- **Borders**: Hairline `rgba(255, 255, 255, 0.08)` / Focus `rgba(96, 165, 250, 0.4)`
- **Text Primary**: `#F1F5F9` (High Contrast Slate)
- **Text Secondary**: `#94A3B8` (Muted Silver)
- **Text Tertiary / Metadata**: `#64748B` (Dim Slate)
- **Brand Accents**:
  - Electric Cobalt: `#3B82F6` (Primary CTA & Link highlights)
  - System Cyan: `#06B6D4` (Active system indicators)
  - Emerald Pass: `#10B981` (Verification badges & success states)
  - Amber Warning: `#F59E0B` (In-progress indicators)
- **Banned**: Pure white text on pure black `#000000`, purple mesh gradients, loud saturated backgrounds.

## 3. Typography & Spacing Scale
- **Display & Headings**: `Plus Jakarta Sans` or `Geist Sans` (`letter-spacing: -0.025em`, `line-height: 1.15`).
- **Body Text**: `Inter` or `Geist Sans` (`line-height: 1.6`, max measure `65ch`).
- **Data & Architecture Badges**: `JetBrains Mono` or `Geist Mono` (`font-feature-settings: 'cv02', 'cv03'`).
- **Corner Radius**: `8px` for buttons and badges; `12px` for cards and modals.
- **Grid**: 4px baseline (`p-2`, `p-4`, `p-6`, `p-8`).

## 4. Component Standards & Anti-Slop Constraints
- **Zero CLS**: Reserve explicit aspect ratios on all interactive architecture explorers and illustrations.
- **Touch & Accessibility**: Minimum 44×44px interactive areas, WCAG 2.2 AA compliant contrast (minimum 4.5:1).
- **Icons**: Lucide SVG only (stroke width `1.5px`). Never use raw emojis as UI icons.
- **Copy Integrity**: Adhere to `stop-slop` filter (no AI buzzwords like *"delve"*, *"testament"*, *"beacon"*).
