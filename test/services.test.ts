import { describe, it, expect } from 'vitest';
import { services, ServiceItem } from '../src/data/services';

describe('Advisory & Service Offerings Catalog Integrity', () => {
  it('contains 6 clearly structured engagement tiers', () => {
    expect(services.length).toBe(6);
    const tierNumbers = services.map(s => s.tierNumber);
    expect(tierNumbers).toEqual(['01', '02', '03', '04', '05', '06']);
  });

  it('has valid bilingual content, timelines, and deliverables for each service tier', () => {
    const seenIds = new Set<string>();

    for (const service of services) {
      expect(seenIds.has(service.id), `Duplicate service ID: ${service.id}`).toBe(false);
      seenIds.add(service.id);

      expect(service.badge.trim().length).toBeGreaterThan(0);
      expect(service.ctaTopicKey.trim().length).toBeGreaterThan(0);

      expect(service.title.en.trim().length).toBeGreaterThan(0);
      expect(service.title.tr.trim().length).toBeGreaterThan(0);
      expect(service.subtitle.en.trim().length).toBeGreaterThan(0);
      expect(service.subtitle.tr.trim().length).toBeGreaterThan(0);
      expect(service.description.en.trim().length).toBeGreaterThan(0);
      expect(service.description.tr.trim().length).toBeGreaterThan(0);
      expect(service.targetAudience.en.trim().length).toBeGreaterThan(0);
      expect(service.targetAudience.tr.trim().length).toBeGreaterThan(0);
      expect(service.timeline.en.trim().length).toBeGreaterThan(0);
      expect(service.timeline.tr.trim().length).toBeGreaterThan(0);
      expect(service.engagementModels.en.trim().length).toBeGreaterThan(0);
      expect(service.engagementModels.tr.trim().length).toBeGreaterThan(0);

      expect(service.deliverables.en.length).toBeGreaterThanOrEqual(4);
      expect(service.deliverables.tr.length).toBe(service.deliverables.en.length);
    }
  });

  it('includes Agentic AI Engineering as flagship Tier 01', () => {
    const tier1 = services[0];
    expect(tier1.id).toBe('agentic-ai-engineering');
    expect(tier1.deliverables.en.some(d => d.includes('tilldone'))).toBe(true);
  });

  it('includes Microsoft Fabric Modernization as Tier 02', () => {
    const tier2 = services[1];
    expect(tier2.id).toBe('microsoft-fabric-modernization');
    expect(tier2.deliverables.en.some(d => d.includes('OneLake'))).toBe(true);
  });

  it('includes Operational AI & Multi-Branch Business Systems as Tier 04', () => {
    const tier4 = services[3];
    expect(tier4.id).toBe('operational-ai-business-systems');
    expect(tier4.deliverables.en.some(d => d.includes('WhatsApp'))).toBe(true);
    expect(tier4.deliverables.tr.some(d => d.includes('WhatsApp'))).toBe(true);
  });
});
