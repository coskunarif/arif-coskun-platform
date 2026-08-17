import { Locale } from './translations';

export interface VentureItem {
  id: string;
  name: string;
  tagline: Record<Locale, string>;
  role: Record<Locale, string>;
  categoryBadge: string;
  statusBadge: Record<Locale, string>;
  statusType: 'live' | 'production' | 'internal';
  metrics: Record<Locale, string>;
  overview: Record<Locale, string>;
  problemSolved: Record<Locale, string>;
  architecturalBreakthrough: Record<Locale, string>;
  techStack: string[];
  links: {
    live?: string;
    appStore?: string;
    googlePlay?: string;
    github?: string;
  };
}

export const ventures: VentureItem[] = [
  {
    id: 'mindball',
    name: 'MindBall',
    tagline: {
      en: 'Mental performance & audio coaching mobile platform for elite athletes.',
      tr: 'Seçkin sporcular için zihinsel antrenman ve sesli koçluk mobil platformu.'
    },
    role: {
      en: 'Co-Founder & Lead Systems Architect',
      tr: 'Kurucu Ortak & Baş Sistem Mimarı'
    },
    categoryBadge: 'Mobile & Cloud Architecture',
    statusBadge: {
      en: 'Live on App Store & Google Play',
      tr: 'App Store & Google Play\'de Yayında'
    },
    statusType: 'live',
    metrics: {
      en: '105 Audio Sessions · On-Device AES Vaults · 100% Offline Audio Support',
      tr: '105 Sesli Seans · Cihaz Üzerinde AES Kasası · %100 Çevrimdışı Desteği'
    },
    overview: {
      en: 'MindBall delivers a structured 15-week mental coaching curriculum for competitive athletes. Engineered from the ground up with on-device encrypted journal vaults to safeguard athlete emotional reflections.',
      tr: 'MindBall, profesyonel sporcular için yapılandırılmış 15 haftalık zihinsel antrenman programı sunar. Sporcuların kişisel duygu ve gelişim notlarını cihaz üzerinde şifreleyen gizlilik mimarisiyle sıfırdan inşa edilmiştir.'
    },
    problemSolved: {
      en: 'Athletes refuse to record vulnerable mental reflections if they suspect cloud exposure or team coach access. Standard mobile apps either store cleartext in cloud databases or suffer from broken offline playback.',
      tr: 'Sporcular, kişisel zihinsel notlarının buluta çıkması veya antrenörler tarafından görülmesi riski varsa veri girmeyi reddeder. Geleneksel uygulamalar ya şifresiz bulut depoları kullanır ya da internetsiz ortamda çalışamaz.'
    },
    architecturalBreakthrough: {
      en: 'Engineered LocalWellnessRepository: Sensitive user entries are encrypted locally with hardware-backed AES keys (localOnly: true) and never transmitted over the wire. Built an Istanbul 03:00 AM day-boundary streak engine and integrated Turkish Posnet Virtual POS gateway.',
      tr: 'LocalWellnessRepository geliştirildi: Hassas kullanıcı notları donanım anahtarlı AES ile yerel olarak şifrelenir (localOnly: true) ve asla ağa çıkarılmaz. İstanbul 03:00 zaman sınırına göre çalışan seri takip motoru ve Posnet Sanal POS entegre edildi.'
    },
    techStack: ['React Native', 'Expo SDK 51', 'Zustand', 'AES-256-GCM', 'Firebase Cloud Functions', 'Posnet POS', 'EAS / Fastlane'],
    links: {
      live: 'https://mindball.app'
    }
  },
  {
    id: 'gainhelm',
    name: 'GainHelm / ProfitHelm',
    tagline: {
      en: 'Real-time Shopify profit margin protection and ad-spend anomaly defense.',
      tr: 'Gerçek zamanlı Shopify kâr marjı koruma ve reklam harcaması anomali savunması.'
    },
    role: {
      en: 'Founder & Full-Stack Architect',
      tr: 'Kurucu & Full-Stack Mimarı'
    },
    categoryBadge: 'E-Commerce SaaS & Analytics',
    statusBadge: {
      en: 'Live Production SaaS (gainhelm.com)',
      tr: 'Canlı Üretim SaaS (gainhelm.com)'
    },
    statusType: 'production',
    metrics: {
      en: 'Sub-second ROAS recalculation · Real-time ad-spend anomaly alerts',
      tr: 'Sub-second ROAS yeniden hesaplama · Gerçek zamanlı reklam anomali alarmları'
    },
    overview: {
      en: 'A high-speed e-commerce profit intelligence engine that tracks real-time cost-of-goods-sold (COGS), shipping, payment gateway fees, and multi-channel ad spend (Meta, Google, TikTok) to prevent merchants from scaling unprofitable campaigns.',
      tr: 'Ürün maliyetleri (COGS), kargo, ödeme komisyonları ve çok kanallı reklam harcamalarını (Meta, Google, TikTok) gerçek zamanlı takip ederek e-ticaret satıcılarının zararına reklam ölçeklemesini engelleyen kâr koruma motoru.'
    },
    problemSolved: {
      en: 'Shopify merchants scale winning ad sets blind to rising ad costs, payment fees, and returns—only discovering negative cash flow weeks later in delayed accounting reports.',
      tr: 'E-ticaret mağazaları, artan reklam maliyetleri ve gizli komisyonları anlık göremedikleri için zararda olduklarını ancak haftalar sonra muhasebe raporlarında fark eder.'
    },
    architecturalBreakthrough: {
      en: 'Built an event-driven synchronization pipeline using Fastify, PostgreSQL with Drizzle ORM, and React Router 7. Computes blended real-time net margins per product variant in under 120ms upon webhook delivery.',
      tr: 'Fastify, PostgreSQL (Drizzle ORM) ve React Router 7 ile olay güdümlü (event-driven) senkronizasyon hattı kuruldu. Webhook ulaştığında ürün varyantı bazında net kâr marjını 120ms altında hesaplar.'
    },
    techStack: ['React Router 7', 'Fastify', 'TypeScript', 'PostgreSQL', 'Drizzle ORM', 'Shopify Webhooks API', 'Railway'],
    links: {
      live: 'https://gainhelm.com'
    }
  },
  {
    id: 'the-coach-loop',
    name: 'The Coach Loop (coach-os)',
    tagline: {
      en: 'Autonomous AI back-office and client follow-up system for executive coaches.',
      tr: 'Üst düzey yönetici koçları için otonom yapay zeka operasyon ve takip sistemi.'
    },
    role: {
      en: 'Creator & Systems Engineer',
      tr: 'Geliştirici & Sistem Mühendisi'
    },
    categoryBadge: 'Autonomous AI Workflows',
    statusBadge: {
      en: 'Live Production Web App (thecoachloop.com)',
      tr: 'Canlı Web Uygulaması (thecoachloop.com)'
    },
    statusType: 'production',
    metrics: {
      en: '100% Automated session ingestion · Sub-60s transcription & action item extraction',
      tr: '%100 Otomatik seans kaydı · 60 saniye altında transkripsiyon ve aksiyon çıkarma'
    },
    overview: {
      en: 'Eliminates 10+ hours of weekly manual administrative overhead for executive and life coaches by automatically recording Zoom/Google Meet calls, extracting commitments, and generating contextual SMS follow-ups.',
      tr: 'Koçluk görüşmelerini (Zoom/Google Meet) otomatik kaydederek, taahhütleri ve aksiyon maddelerini çıkaran ve kişiselleştirilmiş SMS takipleri üreterek koçların haftalık 10+ saatlik operasyonel yükünü sıfırlayan sistem.'
    },
    problemSolved: {
      en: 'Coaches struggle to maintain deep client presence during sessions while simultaneously taking rigorous notes and managing calendar follow-ups across dozens of active clients.',
      tr: 'Koçlar görüşme esnasında danışana odaklanırken aynı anda detaylı not tutmak ve seans sonrasında aksiyon takibi yapmakta zorlanır.'
    },
    architecturalBreakthrough: {
      en: 'Orchestrated headless call ingestion via Recall.ai bots, diarized speaker transcription using AssemblyAI, and structured JSON extraction through Gemini 1.5 Pro to trigger automated Twilio SMS check-ins.',
      tr: 'Recall.ai botları ile başsız görüşme kaydı, AssemblyAI ile konuşmacı ayrıştırmalı transkripsiyon ve Gemini API ile yapılandırılmış JSON aksiyon çıkarımı yapılarak Twilio SMS kancalarına bağlandı.'
    },
    techStack: ['Next.js', 'Recall.ai API', 'AssemblyAI', 'Gemini API', 'Twilio SMS', 'Stripe Connect', 'Supabase'],
    links: {
      live: 'https://thecoachloop.com'
    }
  },
  {
    id: 'agentic-tooling',
    name: 'Autonomous AI Tooling Suite',
    tagline: {
      en: 'Deterministic developer harnesses, tilldone loops, and zero-latency knowledge routing.',
      tr: 'Deterministik geliştirici harness\'ları, tilldone döngüleri ve sıfır gecikmeli bilgi yönlendirme.'
    },
    role: {
      en: 'Architect & Creator',
      tr: 'Mimar & Geliştirici'
    },
    categoryBadge: 'Sovereign Developer Infrastructure',
    statusBadge: {
      en: 'Internal Production Software Factory',
      tr: 'Dahili Üretim Yazılım Fabrikası'
    },
    statusType: 'internal',
    metrics: {
      en: '< 14ms CLI retrieval · 0% hallucinated completions · Persistent CDP on port 9222',
      tr: '< 14ms CLI erişimi · %0 uydurma tamamlama · Port 9222 üzerinde kalıcı CDP'
    },
    overview: {
      en: 'A suite of sovereign developer tools and runtime daemons engineered to turn AI into a genuine cognitive mirror: `tilldone` verification loop, `vault` CLI decision index, and direct Chrome DevTools Protocol automation.',
      tr: 'Yapay zekayı gerçek bir bilişsel aynaya dönüştüren egemen geliştirici araçları paketi: `tilldone` doğrulama döngüsü, `vault` CLI karar dizini ve doğrudan Chrome DevTools Protocol otomasyonu.'
    },
    problemSolved: {
      en: 'Standard LLM agents fail in complex software projects due to context window pollution, loss of invariants, and hallucinated test completions.',
      tr: 'Standart yapay zeka ajanları, bağlam kirliliği, mimari kuralları unutma ve testlerin geçtiğini uydurma (hallucination) nedeniyle gerçek projelerde çöker.'
    },
    architecturalBreakthrough: {
      en: 'Separated reasoning from deterministic verification. Subagents execute in clean workspace worktrees and must satisfy external compiler/test/browser exit codes before completion is recorded.',
      tr: 'Akıl yürütme ile deterministik doğrulamayı kesin olarak ayırdı. Alt-ajanlar temiz çalışma dallarında çalışır ve harici derleyici/tarayıcı testlerinden sıfır hatayla geçmeden iş tamamlanamaz.'
    },
    techStack: ['Node.js 22', 'TypeScript', 'Rust', 'CDP 9222', 'SQLite FTS5', 'Linux Daemons', 'Git Worktrees'],
    links: {
      github: 'https://github.com/coskunarif'
    }
  }
];
