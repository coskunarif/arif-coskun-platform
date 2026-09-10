# DESIGN.md — Arif Coskun Personal Platform Design Contract

> **Rule: Codebase Wins.** This file is the single visual source of truth for this platform.
> When building or refactoring UI components or layouts, adhere strictly to the tokens, scales, and constraints below.

## 1. Aesthetic Identity & Calibration Dials
- **Archetype**: "The Master Architect & Sovereign Builder" — Luxury editorial engineering dark aesthetic.
- **Primary Stack**: `nextjs` (React / Tailwind / Framer Motion / Lucide)
- **Design Variance**: `6/10` (Refined, asymmetric visual rhythm without chaotic noise)
- **Motion Intensity**: `4/10` (Restrained spring physics, micro-interactions only on user intent)
- **Visual Density**: `5/10` (Breathable editorial layout, high data clarity)

## 2. Color System & Semantic Tokens (OKLCH & Auric Obsidian)
- **Canvas / Background**: `#090A0F` (Deep Obsidian Canvas, oklch(0.12 0.015 260))
- **Surface 1 (Cards & Sections)**: `#10131B` (oklch(0.16 0.02 255))
- **Surface 2 (Popovers & Modals)**: `#161B26` (oklch(0.20 0.025 255))
- **Surface 3 (Active / Hover States)**: `#1F2636` (oklch(0.25 0.03 255))
- **Borders**: Hairline `rgba(255, 255, 255, 0.07)` / Technical Border `rgba(229, 169, 60, 0.2)`
- **Text Primary**: `#F8FAFC` (High-contrast Titanium, oklch(0.98 0.005 240))
- **Text Secondary**: `#94A3B8` (Refined Slate, oklch(0.72 0.025 245))
- **Text Tertiary / Metadata**: `#64748B` (Muted Graphite, oklch(0.55 0.025 250))

### Canonical Brand Accents (Auric Obsidian):
- **Burnished Gold / Auric Brass**: `#E5A93C` / `#F59E0B` (Primary CTA, focus states, headline gradient anchor)
- **Titanium Slate**: `#E2E8F0` / `#94A3B8` (Secondary accents, technical tags, mono badges)
- **Emerald Pass**: `#10B981` (Deterministic verification badges & health metrics)
- **Signal Amber**: `#D97706` (Advisory highlights, warning indicators)

### Interactive Palette Harmonies ("The Architect's Dial"):
1. **Auric Obsidian (Default)**: `#E5A93C` gold accent with `#090A0F` obsidian canvas. The authoritative executive standard.
2. **Signal Amber (`amber`)**: `#F59E0B` warm amber with deep warm graphite. Braun / Leica industrial instrument aesthetic.
3. **Titanium Swiss (`titanium`)**: `#E2E8F0` monochrome titanium with neutral zinc surface. Bauhaus / Swiss architectural minimalism.
4. **Nordic Forest (`emerald`)**: `#10B981` emerald verification with deep spruce canvas. Rigorous sovereign verification aesthetic.
5. **Electric Cobalt (`cobalt`)**: `#3B82F6` system cobalt. Maintained for legacy backwards-compatibility.

### CAD Blueprint Mode (`body.blueprint-mode`):
- High-precision dual isometric technical grid overlay (10px minor / 50px major lines).
- Technical blueprint border styling (`rgba(229, 169, 60, 0.28)` hairline stroke).
- Live Architectural Telemetry HUD tracking coordinates (`47.592°N 122.035°W`), deterministic state, and active harmony token.

- **Banned**: Pure white `#ffffff` on `#000000` (OLED smear), generic purple/indigo AI glow blobs, saturated cyan text highlights, generic bento box shadows.

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
