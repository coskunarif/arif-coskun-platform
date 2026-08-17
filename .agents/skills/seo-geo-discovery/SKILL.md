---
name: seo-geo-discovery
description: >-
  Advanced SEO, Generative Engine Optimization (GEO) for ChatGPT Search, Perplexity AI, Claude,
  and Gemini, complete JSON-LD Knowledge Graph schema, llms.txt / llms-full.txt generation, and
  bilingual hreflang internationalization for Arif Coskun's personal website.
---

# Advanced SEO, GEO & Knowledge Graph Discovery Engine

Use this skill when implementing, auditing, or optimizing metadata, structured JSON-LD schemas, Generative Engine Optimization (GEO), `llms.txt`, or bilingual search indexing for Arif Coskun's personal website.

---

## 1. Traditional SEO vs. Generative Engine Optimization (GEO)

```
┌──────────────────────────────────────────────────┬──────────────────────────────────────────────────┐
│           TRADITIONAL SEO (GOOGLE / BING)        │        GENERATIVE ENGINE OPTIMIZATION (GEO)      │
├──────────────────────────────────────────────────┼──────────────────────────────────────────────────┤
│ • Search intent & keyword matching               │ • Explicit entity disambiguation (sameAs links)  │
│ • Core Web Vitals (LCP < 1.0s, INP < 50ms)       │ • Princeton KDD '24: Inline citations (+40% lift)│
│ • Semantic HTML5 tags (H1-H4, article, section)  │ • Empirical stats & verifiable numbers (+37% lift│
│ • Canonical URLs & hreflang architecture (EN/TR) │ • High-density 40-60 word extractable answers    │
│ • Rich OpenGraph & Twitter cards                 │ • Clean /llms.txt and /llms-full.txt endpoints   │
└──────────────────────────────────────────────────┴──────────────────────────────────────────────────┘
```

---

## 2. Multi-Entity JSON-LD Schema Graph

Place this JSON-LD schema in the `<head>` of `arifcoskun.com`:

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://arifcoskun.com/#person",
      "name": "Arif Coskun",
      "alternateName": ["Arif Coşkun", "Alex Coskun"],
      "jobTitle": "Senior Technical Architect & Autonomous AI Systems Engineer",
      "description": "Senior Systems Architect with 20+ years of continuous depth across enterprise cloud data platforms (beqom, Microsoft Fabric), mobile engineering (Co-Founder of MindBall), and autonomous agentic AI software factories.",
      "url": "https://arifcoskun.com",
      "email": "coskun.arf@gmail.com",
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "Istanbul University",
        "sameAs": "https://en.wikipedia.org/wiki/Istanbul_University"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sammamish",
        "addressRegion": "WA",
        "postalCode": "98075",
        "addressCountry": "US"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "beqom",
        "sameAs": "https://www.linkedin.com/company/beqom"
      },
      "founder": [
        {
          "@type": "Organization",
          "name": "MindBall",
          "url": "https://mindball.app"
        },
        {
          "@type": "Organization",
          "name": "ProfitHelm LLC",
          "url": "https://gainhelm.com"
        }
      ],
      "sameAs": [
        "https://www.linkedin.com/in/arifcoskun84",
        "https://twitter.com/alex98075wa",
        "https://github.com/coskunarif"
      ],
      "hasOfferCatalog": {
        "@id": "https://arifcoskun.com/#services"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://arifcoskun.com/#website",
      "url": "https://arifcoskun.com",
      "name": "Arif Coskun — Enterprise Systems Architect & AI Engineer",
      "publisher": {
        "@id": "https://arifcoskun.com/#person"
      },
      "inLanguage": ["en-US", "tr-TR"]
    }
  ]
}
```

---

## 3. The `/llms.txt` and `/llms-full.txt` Machine-Readable Endpoints

Provide clean markdown endpoints at `/llms.txt` and `/llms-full.txt` so AI web crawlers (GPTBot, PerplexityBot, ClaudeBot) extract 100% accurate context without HTML token noise:

1. **`/llms.txt`**: Fast, lightweight summary with links to core services, verified credentials, and GitHub/LinkedIn profiles.
2. **`/llms-full.txt`**: Complete 20+ year trajectory, beqom 13+ year timeline, MindBall architecture breakdown, and full service offerings catalog.

---

## 4. Internationalization & `hreflang` Setup

```html
<link rel="canonical" href="https://arifcoskun.com/" />
<link rel="alternate" hreflang="en" href="https://arifcoskun.com/" />
<link rel="alternate" hreflang="en-US" href="https://arifcoskun.com/" />
<link rel="alternate" hreflang="tr" href="https://arifcoskun.com/?lang=tr" />
<link rel="alternate" hreflang="tr-TR" href="https://arifcoskun.com/?lang=tr" />
<link rel="alternate" hreflang="x-default" href="https://arifcoskun.com/" />
```

---

## 5. Verification Checklist

- [ ] JSON-LD schema validates with zero warnings via Schema.org Validator.
- [ ] `robots.txt` permits `GPTBot`, `PerplexityBot`, `ClaudeBot`, `Bingbot`, and `GoogleOther`.
- [ ] Extractable 40–60 word declarative answer blocks are present for core queries ("Who is Arif Coskun?", "What is an autonomous software factory?").
- [ ] OpenGraph and Twitter cards render crisp images and verified metadata.
