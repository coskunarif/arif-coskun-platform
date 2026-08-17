import { describe, it, expect } from 'vitest';
import { vaultEssays, VaultEssay } from '../src/data/vault-essays';

describe('Knowledge Vault Essays & Thought Leadership Integrity', () => {
  it('contains at least 3 high-signal technical essays', () => {
    expect(vaultEssays.length).toBeGreaterThanOrEqual(3);
    const essayIds = vaultEssays.map(e => e.id);
    expect(essayIds).toContain('high-truth-standard');
    expect(essayIds).toContain('architecting-mindball-privacy');
    expect(essayIds).toContain('twenty-years-in-data-fabric');
  });

  it('validates bilingual essay structure, metadata, and HTML content', () => {
    const seenIds = new Set<string>();

    for (const essay of vaultEssays) {
      expect(seenIds.has(essay.id), `Duplicate essay ID: ${essay.id}`).toBe(false);
      seenIds.add(essay.id);

      expect(essay.category.trim().length).toBeGreaterThan(0);
      expect(essay.readTimeMin).toBeGreaterThan(0);
      expect(essay.publishedDate.trim().length).toBeGreaterThan(0);

      expect(essay.title.en.trim().length).toBeGreaterThan(0);
      expect(essay.title.tr.trim().length).toBeGreaterThan(0);
      expect(essay.subtitle.en.trim().length).toBeGreaterThan(0);
      expect(essay.subtitle.tr.trim().length).toBeGreaterThan(0);
      expect(essay.excerpt.en.trim().length).toBeGreaterThan(0);
      expect(essay.excerpt.tr.trim().length).toBeGreaterThan(0);

      expect(essay.contentHtml.en.trim().length).toBeGreaterThan(100);
      expect(essay.contentHtml.tr.trim().length).toBeGreaterThan(100);
      expect(essay.contentHtml.en).toContain('<p');
      expect(essay.contentHtml.tr).toContain('<p');
    }
  });

  it('verifies High-Truth Standard essay articulates the 5-step tilldone verification loop', () => {
    const essay = vaultEssays.find(e => e.id === 'high-truth-standard');
    expect(essay).toBeDefined();
    expect(essay?.contentHtml.en).toContain('tilldone');
    expect(essay?.contentHtml.en).toContain('Headless CDP Browser Verification');
    expect(essay?.contentHtml.tr).toContain('Başsız Chrome CDP Denetimi');
  });
});
