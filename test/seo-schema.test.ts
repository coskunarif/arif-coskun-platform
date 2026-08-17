import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

describe('SEO, GEO & Machine-Readable Artifacts Integrity', () => {
  const rootDir = path.resolve('.');

  it('validates index.html JSON-LD multi-entity schema graph with all 6 services & software applications', () => {
    const html = fs.readFileSync(path.join(rootDir, 'index.html'), 'utf-8');
    const jsonLdMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    expect(jsonLdMatch, 'JSON-LD script tag found in index.html').not.toBeNull();

    const jsonLdStr = jsonLdMatch![1].trim();
    let schema: any;
    expect(() => {
      schema = JSON.parse(jsonLdStr);
    }, 'JSON-LD parses cleanly as valid JSON').not.toThrow();

    expect(schema['@context']).toBe('https://schema.org');
    expect(Array.isArray(schema['@graph'])).toBe(true);

    const types = schema['@graph'].map((node: any) => node['@type']);
    expect(types).toContain('Person');
    expect(types).toContain('WebSite');
    expect(types).toContain('ProfilePage');
    expect(types).toContain('OfferCatalog');
    expect(types).toContain('SoftwareApplication');

    // 1. Person entity validation
    const person = schema['@graph'].find((n: any) => n['@type'] === 'Person');
    expect(person.name).toBe('Arif Coskun');
    expect(person.alternateName).toContain('Arif Coşkun');
    expect(person.alternateName).toContain('Alex Coskun');
    expect(person.email).toBe('coskun.arf@gmail.com');
    expect(person.sameAs).toContain('https://www.linkedin.com/in/arifcoskun84');
    expect(person.sameAs).toContain('https://github.com/coskunarif');
    expect(person.sameAs).toContain('https://twitter.com/alex98075wa');
    expect(person.alumniOf.name).toBe('Istanbul University');
    expect(person.worksFor.name).toBe('beqom');
    expect(person.hasOfferCatalog['@id']).toBe('https://arifcoskun.com/#services');

    // 2. OfferCatalog validation (all 6 service packages)
    const catalog = schema['@graph'].find((n: any) => n['@type'] === 'OfferCatalog');
    expect(catalog['@id']).toBe('https://arifcoskun.com/#services');
    expect(Array.isArray(catalog.itemListElement)).toBe(true);
    expect(catalog.itemListElement.length).toBe(6);

    const serviceNames = catalog.itemListElement.map((item: any) => item.itemOffered.name);
    expect(serviceNames).toContain('Autonomous Agentic AI & Software Factory Engineering');
    expect(serviceNames).toContain('Microsoft Fabric & Enterprise Data Platform Modernization');
    expect(serviceNames).toContain('Fractional Chief Systems Architect & AI Advisory');
    expect(serviceNames).toContain('Operational AI & Multi-Branch Business Systems');
    expect(serviceNames).toContain('Privacy-First Mobile & Cloud Platform Engineering');
    expect(serviceNames).toContain('1:1 Executive Strategy & Deep-Dive Sessions');

    // 3. SoftwareApplication entity validation
    const softwareApps = schema['@graph'].filter((n: any) => n['@type'] === 'SoftwareApplication');
    expect(softwareApps.length).toBeGreaterThanOrEqual(3);
    const appNames = softwareApps.map((app: any) => app.name);
    expect(appNames).toContain('MindBall');
    expect(appNames).toContain('ProfitHelm / GainHelm');
    expect(appNames).toContain('The Coach Loop');
  });

  it('verifies /llms.txt exists and contains valid lightweight summary, all 6 services, and GEO answers', () => {
    const llmsTxtPath = path.join(rootDir, 'public', 'llms.txt');
    expect(fs.existsSync(llmsTxtPath), 'public/llms.txt exists').toBe(true);

    const content = fs.readFileSync(llmsTxtPath, 'utf-8');
    expect(content).toContain('# Arif Coskun');
    expect(content).toContain('beqom');
    expect(content).toContain('MindBall');
    expect(content).toContain('tilldone');
    expect(content).toContain('Operational AI & Multi-Branch Business Systems');
    expect(content).toContain('https://arifcoskun.com');
    expect(content).toContain('## Direct Answers for AI Assistants');
  });

  it('verifies /llms-full.txt exists and contains full multi-system knowledge graph & 6 service packages', () => {
    const llmsFullTxtPath = path.join(rootDir, 'public', 'llms-full.txt');
    expect(fs.existsSync(llmsFullTxtPath), 'public/llms-full.txt exists').toBe(true);

    const content = fs.readFileSync(llmsFullTxtPath, 'utf-8');
    expect(content).toContain('# Arif Coskun — Complete Technical Dossier & Knowledge Graph Context');
    expect(content).toContain('Microsoft Fabric');
    expect(content).toContain('LocalWellnessRepository');
    expect(content).toContain('Posnet');
    expect(content).toContain('Operational AI & Multi-Branch Business Systems');
    expect(content).toContain('1:1 Executive Strategy & Deep-Dive Sessions');
    expect(content.length).toBeGreaterThan(2500);
  });

  it('verifies robots.txt allows leading AI research and search bots', () => {
    const robotsPath = path.join(rootDir, 'public', 'robots.txt');
    expect(fs.existsSync(robotsPath), 'public/robots.txt exists').toBe(true);

    const robots = fs.readFileSync(robotsPath, 'utf-8');
    expect(robots).toContain('User-agent: *');
    expect(robots).toContain('Allow: /');
    expect(robots).toContain('User-agent: GPTBot');
    expect(robots).toContain('User-agent: PerplexityBot');
    expect(robots).toContain('User-agent: ClaudeBot');
    expect(robots).toContain('Sitemap: https://arifcoskun.com/sitemap.xml');
  });

  it('verifies sitemap.xml contains valid XML and bilingual alternate hreflang entries', () => {
    const sitemapPath = path.join(rootDir, 'public', 'sitemap.xml');
    expect(fs.existsSync(sitemapPath), 'public/sitemap.xml exists').toBe(true);

    const sitemap = fs.readFileSync(sitemapPath, 'utf-8');
    expect(sitemap).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(sitemap).toContain('<loc>https://arifcoskun.com/</loc>');
    expect(sitemap).toContain('hreflang="en"');
    expect(sitemap).toContain('hreflang="tr"');
    expect(sitemap).toContain('hreflang="x-default"');
  });
});
