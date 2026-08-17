import { describe, it, expect } from 'vitest';
import { ventures, VentureItem } from '../src/data/ventures';

describe('Shipped Ventures & Products Portfolio Integrity', () => {
  it('contains at least 4 shipped ventures / systems', () => {
    expect(ventures.length).toBeGreaterThanOrEqual(4);
    const ventureIds = ventures.map(v => v.id);
    expect(ventureIds).toContain('mindball');
    expect(ventureIds).toContain('gainhelm');
    expect(ventureIds).toContain('the-coach-loop');
    expect(ventureIds).toContain('agentic-tooling');
  });

  it('has comprehensive bilingual problem-solution narratives for each venture', () => {
    const validStatusTypes = ['live', 'production', 'internal'];
    const seenIds = new Set<string>();

    for (const v of ventures) {
      expect(seenIds.has(v.id), `Duplicate venture ID: ${v.id}`).toBe(false);
      seenIds.add(v.id);

      expect(validStatusTypes).toContain(v.statusType);
      expect(v.name.trim().length).toBeGreaterThan(0);
      expect(v.categoryBadge.trim().length).toBeGreaterThan(0);

      expect(v.tagline.en.trim().length).toBeGreaterThan(0);
      expect(v.tagline.tr.trim().length).toBeGreaterThan(0);
      expect(v.role.en.trim().length).toBeGreaterThan(0);
      expect(v.role.tr.trim().length).toBeGreaterThan(0);
      expect(v.statusBadge.en.trim().length).toBeGreaterThan(0);
      expect(v.statusBadge.tr.trim().length).toBeGreaterThan(0);
      expect(v.metrics.en.trim().length).toBeGreaterThan(0);
      expect(v.metrics.tr.trim().length).toBeGreaterThan(0);
      expect(v.overview.en.trim().length).toBeGreaterThan(0);
      expect(v.overview.tr.trim().length).toBeGreaterThan(0);
      expect(v.problemSolved.en.trim().length).toBeGreaterThan(0);
      expect(v.problemSolved.tr.trim().length).toBeGreaterThan(0);
      expect(v.architecturalBreakthrough.en.trim().length).toBeGreaterThan(0);
      expect(v.architecturalBreakthrough.tr.trim().length).toBeGreaterThan(0);

      expect(v.techStack.length).toBeGreaterThanOrEqual(3);
    }
  });

  it('has valid external URL for live products', () => {
    const mindball = ventures.find(v => v.id === 'mindball');
    expect(mindball?.links.live).toBe('https://mindball.app');

    const gainhelm = ventures.find(v => v.id === 'gainhelm');
    expect(gainhelm?.links.live).toBe('https://gainhelm.com');

    const coachLoop = ventures.find(v => v.id === 'the-coach-loop');
    expect(coachLoop?.links.live).toBe('https://thecoachloop.com');
  });
});
