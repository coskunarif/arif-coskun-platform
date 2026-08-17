import { describe, it, expect } from 'vitest';
import { architectures, ArchitectureSystem, ArchitectureNode } from '../src/data/architectures';

describe('Architecture Blueprints & System Integrity', () => {
  it('contains exactly 3 flagship production architectures', () => {
    expect(architectures.length).toBe(3);
    const systemIds = architectures.map(a => a.id);
    expect(systemIds).toEqual(['mindball', 'beqom-fabric', 'agentic-factory']);
  });

  it('has valid bilingual headers, overviews, and tags for every system', () => {
    for (const sys of architectures) {
      expect(sys.id.trim().length).toBeGreaterThan(0);
      expect(sys.tabTitle.en.trim().length).toBeGreaterThan(0);
      expect(sys.tabTitle.tr.trim().length).toBeGreaterThan(0);
      expect(sys.title.en.trim().length).toBeGreaterThan(0);
      expect(sys.title.tr.trim().length).toBeGreaterThan(0);
      expect(sys.tagline.en.trim().length).toBeGreaterThan(0);
      expect(sys.tagline.tr.trim().length).toBeGreaterThan(0);
      expect(sys.overview.en.trim().length).toBeGreaterThan(0);
      expect(sys.overview.tr.trim().length).toBeGreaterThan(0);
    }
  });

  it('contains at least 3 nodes per architecture with comprehensive technical specs', () => {
    const validCategories = ['frontend', 'storage', 'compute', 'security', 'gateway', 'verification'];
    const seenNodeIds = new Set<string>();

    for (const sys of architectures) {
      expect(sys.nodes.length, `System ${sys.id} node count`).toBeGreaterThanOrEqual(3);

      for (const node of sys.nodes) {
        expect(seenNodeIds.has(node.id), `Duplicate node ID: ${node.id}`).toBe(false);
        seenNodeIds.add(node.id);

        expect(validCategories).toContain(node.category);
        expect(node.badge.trim().length).toBeGreaterThan(0);
        expect(node.title.en.trim().length).toBeGreaterThan(0);
        expect(node.title.tr.trim().length).toBeGreaterThan(0);
        expect(node.role.en.trim().length).toBeGreaterThan(0);
        expect(node.role.tr.trim().length).toBeGreaterThan(0);
        expect(node.description.en.trim().length).toBeGreaterThan(0);
        expect(node.description.tr.trim().length).toBeGreaterThan(0);
        expect(node.latencyBenchmark.trim().length).toBeGreaterThan(0);
        expect(node.securityBoundary.en.trim().length).toBeGreaterThan(0);
        expect(node.securityBoundary.tr.trim().length).toBeGreaterThan(0);
        expect(node.tradeoffRationale.en.trim().length).toBeGreaterThan(0);
        expect(node.tradeoffRationale.tr.trim().length).toBeGreaterThan(0);
        expect(node.techSpecs.length, `Tech specs array in node ${node.id}`).toBeGreaterThanOrEqual(2);
      }
    }
  });

  it('verifies MindBall privacy node invariants', () => {
    const mindball = architectures.find(a => a.id === 'mindball');
    expect(mindball).toBeDefined();

    const vaultNode = mindball?.nodes.find(n => n.id === 'mb-vault');
    expect(vaultNode).toBeDefined();
    expect(vaultNode?.badge).toContain('localOnly: true');
    expect(vaultNode?.securityBoundary.en).toContain('Zero-Knowledge');
  });

  it('verifies beqom Fabric telemetry and OneLake specifications', () => {
    const beqom = architectures.find(a => a.id === 'beqom-fabric');
    expect(beqom).toBeDefined();

    const onelakeNode = beqom?.nodes.find(n => n.id === 'bf-onelake');
    expect(onelakeNode).toBeDefined();
    expect(onelakeNode?.techSpecs).toContain('Microsoft Fabric');
    expect(onelakeNode?.techSpecs).toContain('OneLake Delta Lake');
    expect(onelakeNode?.securityBoundary.en).toContain('Customer-Managed Keys (CMK)');
  });

  it('verifies Agentic Software Factory tilldone loop specifications', () => {
    const agentic = architectures.find(a => a.id === 'agentic-factory');
    expect(agentic).toBeDefined();

    const tilldoneNode = agentic?.nodes.find(n => n.id === 'af-tilldone');
    expect(tilldoneNode).toBeDefined();
    expect(tilldoneNode?.latencyBenchmark).toContain('regression detection');
  });
});
