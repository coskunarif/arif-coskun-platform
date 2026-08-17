import { describe, it, expect } from 'vitest';
import { timelineMilestones, TimelineCategory } from '../src/data/timeline';

describe('20+ Year Timeline Chronology & Career Trajectory', () => {
  it('contains at least 7 major historical milestones spanning 2007 to Present', () => {
    expect(timelineMilestones.length).toBeGreaterThanOrEqual(7);
  });

  it('covers all three required categories: enterprise, ai, and ventures', () => {
    const categories = new Set(timelineMilestones.map(m => m.category));
    expect(categories.has('enterprise')).toBe(true);
    expect(categories.has('ai')).toBe(true);
    expect(categories.has('ventures')).toBe(true);
  });

  it('verifies data completeness and bilingual integrity across all milestones', () => {
    const validCategories: TimelineCategory[] = ['enterprise', 'ai', 'ventures'];
    const seenIds = new Set<string>();

    for (const milestone of timelineMilestones) {
      expect(seenIds.has(milestone.id), `Duplicate milestone ID: ${milestone.id}`).toBe(false);
      seenIds.add(milestone.id);

      expect(validCategories).toContain(milestone.category);
      expect(milestone.yearRange.trim().length).toBeGreaterThan(0);
      expect(milestone.location.trim().length).toBeGreaterThan(0);

      expect(milestone.title.en.trim().length).toBeGreaterThan(0);
      expect(milestone.title.tr.trim().length).toBeGreaterThan(0);
      expect(milestone.roleCompany.en.trim().length).toBeGreaterThan(0);
      expect(milestone.roleCompany.tr.trim().length).toBeGreaterThan(0);
      expect(milestone.summary.en.trim().length).toBeGreaterThan(0);
      expect(milestone.summary.tr.trim().length).toBeGreaterThan(0);

      expect(milestone.highlights.en.length).toBeGreaterThanOrEqual(2);
      expect(milestone.highlights.tr.length).toBe(milestone.highlights.en.length);
      expect(milestone.techStack.length).toBeGreaterThanOrEqual(3);
    }
  });

  it('contains the foundational 2007 entry and current 2026 roles', () => {
    const earliest = timelineMilestones[timelineMilestones.length - 1];
    expect(earliest.yearRange).toContain('2007');

    const latest = timelineMilestones[0];
    expect(latest.yearRange).toContain('Present');
    expect(latest.roleCompany.en).toContain('beqom');
  });
});
