---
name: vitest-unit-testing
description: >-
  Vite-native, ESM-first TypeScript unit testing, JSDOM DOM simulation, translation dictionary parity audits,
  data model type safety, and fast watch-mode testing for Arif Coskun's personal platform.
---

# Vitest Unit & Component Testing Skill

Vite-native test runner optimized for ultra-fast TypeScript testing, JSDOM emulation, bilingual dictionary integrity verification, and data model contracts.

---

## 1. Setup & Configuration

**vitest.config.ts**:
```typescript
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['test/**/*.{test,spec}.ts', 'src/**/*.{test,spec}.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 85,
        statements: 90
      }
    }
  }
});
```

---

## 2. Core Testing Patterns for Personal Website

### A. Bilingual Translation Parity Testing (EN ⇄ TR)
Every key in the English dictionary must exist in the Turkish dictionary, with valid non-empty string values and matching token replacement parameters:

```typescript
import { describe, it, expect } from 'vitest';
import { translations } from '../src/data/translations';

describe('Bilingual Translation Integrity', () => {
  it('has identical keys in English and Turkish dictionaries', () => {
    const enKeys = Object.keys(translations.en).sort();
    const trKeys = Object.keys(translations.tr).sort();
    expect(trKeys).toEqual(enKeys);
  });

  it('contains no empty or placeholder translations in either language', () => {
    for (const [key, value] of Object.entries(translations.en)) {
      expect(value.trim().length, `Empty EN key: ${key}`).toBeGreaterThan(0);
    }
    for (const [key, value] of Object.entries(translations.tr)) {
      expect(value.trim().length, `Empty TR key: ${key}`).toBeGreaterThan(0);
    }
  });

  it('preserves Turkish character casing integrity (İ/i, I/ı, Ğ/ğ, Ş/ş)', () => {
    expect(translations.tr.heroTitleLine1).toContain('Yüksek Doğruluklu');
  });
});
```

### B. Interactive Proof Terminal Command Parser Testing
Unit-testing command tokenization, flags, and error responses:

```typescript
import { describe, it, expect } from 'vitest';
import { executeTerminalCommand } from '../src/data/terminal';

describe('Terminal Command Parser', () => {
  it('executes --tilldone-loop command with formatted log steps', () => {
    const output = executeTerminalCommand('--tilldone-loop');
    expect(output.success).toBe(true);
    expect(output.logs.length).toBeGreaterThan(3);
    expect(output.logs[0]).toContain('INITIATING TILLDONE');
  });

  it('returns informative error on unrecognized flag', () => {
    const output = executeTerminalCommand('--invalid-flag');
    expect(output.success).toBe(false);
    expect(output.logs[0]).toContain('Unknown command');
  });
});
```

### C. Architecture Blueprint Schema & Type Validation
Validating graph nodes, connection links, and badge types:

```typescript
import { describe, it, expect, expectTypeOf } from 'vitest';
import { architectures, SystemArchitecture } from '../src/data/architectures';

describe('Architecture Data Integrity', () => {
  it('contains 3 full systems with valid nodes and telemetry', () => {
    expect(architectures.length).toBe(3);
    for (const arch of architectures) {
      expectTypeOf(arch).toMatchTypeOf<SystemArchitecture>();
      expect(arch.nodes.length).toBeGreaterThanOrEqual(3);
      expect(arch.metrics.length).toBeGreaterThanOrEqual(2);
    }
  });
});
```

---

## 3. Best Practices & Rules

1. **Pure Functions First:** Structure application data and state transformations as pure, testable functions in `src/data/`.
2. **Deterministic Assertions:** Use exact string or numeric matchers (`toBe`, `toEqual`) rather than vague truthiness (`toBeTruthy`).
3. **Sub-Second Execution:** Keep unit test suites running under 200ms total.
4. **CI Mode in Production Scripts:** Always run `vitest run` (single execution) in CI pipelines, never lingering in watch mode.
