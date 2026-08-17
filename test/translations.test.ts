import { describe, it, expect } from 'vitest';
import { translations, Locale } from '../src/data/translations';

describe('Bilingual Translation Integrity & Parity', () => {
  it('contains valid definitions for both EN and TR locales', () => {
    expect(translations).toHaveProperty('en');
    expect(translations).toHaveProperty('tr');
  });

  it('has identical top-level sections in English and Turkish dictionaries', () => {
    const enSections = Object.keys(translations.en).sort();
    const trSections = Object.keys(translations.tr).sort();
    expect(trSections).toEqual(enSections);
  });

  it('has matching key parity across all nested sections', () => {
    const compareObjects = (enObj: Record<string, any>, trObj: Record<string, any>, path = '') => {
      const enKeys = Object.keys(enObj).sort();
      const trKeys = Object.keys(trObj).sort();
      expect(trKeys, `Mismatch at ${path}`).toEqual(enKeys);

      for (const key of enKeys) {
        const enVal = enObj[key];
        const trVal = trObj[key];
        const currentPath = path ? `${path}.${key}` : key;

        if (Array.isArray(enVal)) {
          expect(Array.isArray(trVal), `Expected array at ${currentPath}`).toBe(true);
          expect(trVal.length, `Array length mismatch at ${currentPath}`).toBe(enVal.length);
          for (let i = 0; i < enVal.length; i++) {
            expect(typeof enVal[i], `Item ${i} in ${currentPath} is string`).toBe('string');
            expect(typeof trVal[i], `Item ${i} in ${currentPath} is string`).toBe('string');
            expect(enVal[i].trim().length, `Empty EN item in ${currentPath}[${i}]`).toBeGreaterThan(0);
            expect(trVal[i].trim().length, `Empty TR item in ${currentPath}[${i}]`).toBeGreaterThan(0);
          }
        } else if (typeof enVal === 'object' && enVal !== null) {
          expect(typeof trVal, `Expected object at ${currentPath}`).toBe('object');
          compareObjects(enVal, trVal, currentPath);
        } else {
          expect(typeof enVal, `Type of ${currentPath} (EN)`).toBe('string');
          expect(typeof trVal, `Type of ${currentPath} (TR)`).toBe('string');
          expect(enVal.trim().length, `Empty string at EN: ${currentPath}`).toBeGreaterThan(0);
          expect(trVal.trim().length, `Empty string at TR: ${currentPath}`).toBeGreaterThan(0);
        }
      }
    };

    compareObjects(translations.en, translations.tr);
  });

  it('preserves Turkish character casing integrity (İ/i, I/ı, Ğ/ğ, Ü/ü, Ş/ş, Ö/ö)', () => {
    expect(translations.tr.hero.titleLine1).toContain('Yüksek Doğruluklu');
    expect(translations.tr.hero.titleLine1).toMatch(/[İIıiĞğÜüŞşÖö]/);
    expect(translations.tr.meta.title).toContain('Arif Coşkun');
    expect(translations.tr.pillars.pillar1Title).toContain('Kurumsal Sistem Mimarı');
    expect(translations.tr.archExplorer.title).toContain('Etkileşimli');
  });

  it('guarantees English anti-slop copy adherence (no banned AI cliches in primary titles)', () => {
    const bannedWords = ['delve', 'synergy', 'transformative synergies', 'holistic growth', 'game-changer', 'tapestry'];
    const enText = JSON.stringify(translations.en).toLowerCase();
    for (const banned of bannedWords) {
      expect(enText).not.toContain(` ${banned} `);
    }
  });

  it('contains complete meta tags for SEO / Social Graph', () => {
    expect(translations.en.meta.title).toContain('Arif Coskun');
    expect(translations.en.meta.description).toContain('20+ years');
    expect(translations.tr.meta.title).toContain('Arif Coşkun');
    expect(translations.tr.meta.description).toContain('20+ yıllık');
  });
});
