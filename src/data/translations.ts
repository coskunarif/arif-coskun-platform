export type Locale = 'en' | 'tr';

export interface TranslationSchema {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
  nav: {
    architect: string;
    aiSystems: string;
    ventures: string;
    evolution: string;
    services: string;
    vault: string;
    contact: string;
    bookCall: string;
    statusText: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    proofStat1Number: string;
    proofStat1Label: string;
    proofStat2Number: string;
    proofStat2Label: string;
    proofStat3Number: string;
    proofStat3Label: string;
    proofStat4Number: string;
    proofStat4Label: string;
    ctaPrimary: string;
    ctaSecondary: string;
    locationWA: string;
    locationIST: string;
  };
  pillars: {
    tag: string;
    title: string;
    subtitle: string;
    quote: string;
    pillar1Title: string;
    pillar1Role: string;
    pillar1Desc: string;
    pillar1Items: string[];
    pillar2Title: string;
    pillar2Role: string;
    pillar2Desc: string;
    pillar2Items: string[];
    pillar3Title: string;
    pillar3Role: string;
    pillar3Desc: string;
    pillar3Items: string[];
  };
  archExplorer: {
    tag: string;
    title: string;
    subtitle: string;
    tab1: string;
    tab2: string;
    tab3: string;
    nodeClickHint: string;
    inspectorTitle: string;
    latencyLabel: string;
    securityLabel: string;
    tradeoffLabel: string;
    specLabel: string;
  };
  terminal: {
    tag: string;
    title: string;
    subtitle: string;
    placeholder: string;
    chipsTitle: string;
    chip1: string;
    chip2: string;
    chip3: string;
    chip4: string;
    chip5: string;
    chip6: string;
    chip7: string;
    verifiedBadge: string;
  };
  ventures: {
    tag: string;
    title: string;
    subtitle: string;
    viewCaseStudy: string;
    closeModal: string;
    liveAppBadge: string;
    productionBadge: string;
    internalBadge: string;
  };
  timeline: {
    tag: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterEnterprise: string;
    filterAI: string;
    filterVentures: string;
    expandDetails: string;
    collapseDetails: string;
  };
  services: {
    tag: string;
    title: string;
    subtitle: string;
    guaranteeTitle: string;
    guaranteeDesc: string;
    g1Title: string;
    g1Desc: string;
    g2Title: string;
    g2Desc: string;
    g3Title: string;
    g3Desc: string;
    g4Title: string;
    g4Desc: string;
    bookBtn: string;
    timelineLabel: string;
    deliverablesLabel: string;
  };
  vault: {
    tag: string;
    title: string;
    subtitle: string;
    readEssay: string;
    minsRead: string;
    closeModal: string;
  };
  contact: {
    tag: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    topicLabel: string;
    topicOption1: string;
    topicOption2: string;
    topicOption3: string;
    topicOption4: string;
    topicOption5: string;
    topicOption6: string;
    timelineLabel: string;
    timelineOption1: string;
    timelineOption2: string;
    timelineOption3: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    sendingBtn: string;
    successTitle: string;
    successDesc: string;
    orDirectly: string;
    scheduleCal: string;
    scheduleCalDesc: string;
    scheduleBtn: string;
    timezonesTitle: string;
  };
  footer: {
    rights: string;
    tagline: string;
    geoNote: string;
    llmsTxt: string;
    llmsFullTxt: string;
    backToTop: string;
  };
}

export const translations: Record<Locale, TranslationSchema> = {
  en: {
    meta: {
      title: "Arif Coskun — Senior Systems Architect & Autonomous AI Engineer",
      description: "20+ years of deep enterprise platform engineering (beqom 13+ yrs, Microsoft Fabric), Co-Founder of MindBall, and Sovereign AI Builder. High-Truth, Low-Slop Architecture.",
      ogTitle: "Arif Coskun — Systems Architect & Autonomous AI Engineer",
      ogDescription: "Bridging 20+ years of enterprise data platforms and Microsoft Fabric with deterministic multi-agent software factories and mobile privacy architecture."
    },
    nav: {
      architect: "The Architect",
      aiSystems: "AI Blueprints",
      ventures: "Ventures",
      evolution: "20Y Trajectory",
      services: "Advisory",
      vault: "The Vault",
      contact: "Contact",
      bookCall: "Book Strategy Call",
      statusText: "Available for Select Enterprise Advisory & AI Architecture"
    },
    hero: {
      badge: "High-Truth Systems & Autonomous AI",
      titleLine1: "Architecting High-Truth Enterprise Platforms",
      titleLine2: "& Autonomous AI Systems.",
      description: "Senior Systems Architect with 20+ years of continuous depth—from global enterprise cloud infrastructure and Microsoft Fabric lakehouses at beqom to multi-branch operational AI, co-founding MindBall, and autonomous software factories.",
      proofStat1Number: "20+ Yrs",
      proofStat1Label: "Enterprise Systems & Data Rigor",
      proofStat2Number: "13+ Yrs",
      proofStat2Label: "Continuous SaaS Scale @ beqom",
      proofStat3Number: "Co-Founder",
      proofStat3Label: "MindBall Mobile Architecture",
      proofStat4Number: "100% AI",
      proofStat4Label: "Autonomous Software Factories",
      ctaPrimary: "Explore Advisory & Solutions →",
      ctaSecondary: "Inspect Blueprints & Code ↓",
      locationWA: "Sammamish / Seattle, WA (UTC-7)",
      locationIST: "Istanbul, TR (UTC+3)"
    },
    pillars: {
      tag: "THE TRIPLE THREAT",
      title: "One Mind. Three Deep Disciplines.",
      subtitle: "Most AI consultants have never managed a production database under heavy load. Most traditional architects haven't built agentic software factories. Arif operates at the intersection of both.",
      quote: "“Software is never done because an AI thinks it’s done. It is done only when reality agrees.”",
      pillar1Title: "1. The Enterprise Architect",
      pillar1Role: "Senior Technical Architect @ beqom (13+ Years)",
      pillar1Desc: "13+ years continuous progression managing multi-tenant cloud platforms, Microsoft Fabric analytics workspaces, OneLake synchronization, and SQL calculation engines processing millions of high-value compensation events.",
      pillar1Items: [
        "Microsoft Fabric Lakehouses & OneLake synchronization",
        "High-throughput query tuning & calculation engine scaling",
        "Azure Terraform IaC & Customer-Managed Key (CMK) security",
        "Global SRE reliability, observability & incident diagnostics"
      ],
      pillar2Title: "2. The Agentic AI Builder",
      pillar2Role: "Software Factory Creator & Autonomous Swarms",
      pillar2Desc: "Treating AI as an authentic 'Second Brain'—not through brittle prompt wrappers, but by building deterministic tool harnesses, empirical verification loops, and zero-latency knowledge gateways.",
      pillar2Items: [
        "The tilldone deterministic non-model verification loop",
        "vault zero-latency knowledge & playbook routing gateway",
        "Persistent headless Chrome DevTools Protocol (CDP) daemons",
        "Multi-agent dialectic fleets (Planner, Executor, Adversarial Critic)"
      ],
      pillar3Title: "3. The Startup Co-Founder",
      pillar3Role: "Co-Founder of MindBall & Indie SaaS Builder",
      pillar3Desc: "Proven track record of designing, building, and shipping full-stack consumer and B2B products from scratch with strict privacy guarantees, payment gateways, and automated release tracks.",
      pillar3Items: [
        "MindBall: On-device AES encrypted wellness vaults (localOnly: true)",
        "105-session structured audio coaching program engine",
        "Turkish Posnet Virtual POS gateway & web-to-app entitlement sync",
        "GainHelm / ProfitHelm: Real-time Shopify merchant profit protection"
      ]
    },
    archExplorer: {
      tag: "EMPIRICAL BLUEPRINTS",
      title: "Interactive Production Architecture Explorer",
      subtitle: "Click any node in these production blueprints to inspect technical specifications, latency metrics, security boundaries, and architectural trade-offs.",
      tab1: "1. MindBall (Mobile & Privacy)",
      tab2: "2. beqom Enterprise Fabric",
      tab3: "3. Agentic Software Factory",
      nodeClickHint: "Select any architecture node below to inspect deep system specs:",
      inspectorTitle: "Architectural Inspector",
      latencyLabel: "Latency & Throughput Benchmark",
      securityLabel: "Security & Isolation Boundary",
      tradeoffLabel: "Architectural Trade-Off & Decision Rationale",
      specLabel: "Technical Stack & Implementation Details"
    },
    terminal: {
      tag: "LIVE PROOF ENGINE",
      title: "The 'AI Second Brain' Proof Terminal",
      subtitle: "Query Arif's actual engineering playbooks, benchmarks, and architectural decisions directly via this interactive monospace shell.",
      placeholder: "Type a command (e.g. help, --why-not-langchain, --fabric-migration) and press Enter...",
      chipsTitle: "Quick Query Triggers:",
      chip1: "--why-not-langchain",
      chip2: "--tilldone-loop",
      chip3: "--fabric-migration",
      chip4: "--business-automation",
      chip5: "--privacy-vaults",
      chip6: "--benchmark",
      chip7: "--bio",
      verifiedBadge: "Deterministic Output · Verified Against Production Runtime"
    },
    ventures: {
      tag: "SHIPPED PRODUCTS",
      title: "Ventures & Production Software Showcase",
      subtitle: "Real products in the hands of real users. Built with obsessive attention to performance, security, and delightful user experience.",
      viewCaseStudy: "Inspect Deep Case Study & Architecture →",
      closeModal: "Close Case Study",
      liveAppBadge: "Live on App Store & Google Play",
      productionBadge: "Live Production SaaS",
      internalBadge: "Internal Autonomous Engine"
    },
    timeline: {
      tag: "20+ YEAR CHRONOLOGY",
      title: "The Continuous Engineering Trajectory",
      subtitle: "From dimensional OLAP data warehouses in 2007 to global enterprise SaaS cloud architecture and autonomous AI systems in 2026.",
      filterAll: "All Milestones (2007–Present)",
      filterEnterprise: "Enterprise & Cloud",
      filterAI: "AI & Agentic Systems",
      filterVentures: "Startups & Products",
      expandDetails: "View Technical Highlights & Stack",
      collapseDetails: "Hide Technical Highlights"
    },
    services: {
      tag: "ENGAGEMENT TIERS",
      title: "Advisory, Audits & Custom Engineering",
      subtitle: "High-leverage engineering designed to eliminate operational bottlenecks, automate multi-branch businesses, modernize legacy data foundations, and build resilient digital products.",
      guaranteeTitle: "The 'High-Truth, Low-Slop' Client Guarantee",
      guaranteeDesc: "Every engagement is anchored in four non-negotiable engineering principles:",
      g1Title: "1. Reality-First Verification",
      g1Desc: "We never declare a system complete until empirical tests, builds, and live traffic verify performance.",
      g2Title: "2. Zero Cargo-Cult Complexity",
      g2Desc: "No unnecessary microservices or trendy boilerplate. We engineer the simplest architecture that solves the problem robustly.",
      g3Title: "3. Complete Knowledge Transfer",
      g3Desc: "Clients receive 100% code ownership, comprehensive architectural documentation, and hands-on team enablement.",
      g4Title: "4. Bilingual & Dual-Timezone Fluency",
      g4Desc: "Seamless execution across US Pacific / Eastern timezones and Türkiye (UTC+3) business hours.",
      bookBtn: "Request Advisory Engagement →",
      timelineLabel: "Typical Timeline",
      deliverablesLabel: "Core Deliverables & Outcomes"
    },
    vault: {
      tag: "KNOWLEDGE GATEWAY",
      title: "The Vault: High-Signal Engineering Insights",
      subtitle: "Hard-won lessons, architectural mental models, and deep-dive technical essays distilled from 20+ years of high-scale systems building.",
      readEssay: "Read Complete Essay →",
      minsRead: "min read",
      closeModal: "Close Essay"
    },
    contact: {
      tag: "DIRECT DIALOGUE",
      title: "Let's Architect Something Extraordinary",
      subtitle: "From enterprise data platforms and autonomous AI to multi-branch business automation—reach out directly to explore tailored solutions.",
      nameLabel: "Your Name / Title",
      namePlaceholder: "e.g. Alex Morgan, VP of Engineering or Business Owner",
      emailLabel: "Work Email",
      emailPlaceholder: "alex@company.com",
      topicLabel: "Primary Engagement Area",
      topicOption1: "Autonomous Multi-Agent AI Systems & Tooling",
      topicOption2: "Microsoft Fabric & Enterprise Data Modernization",
      topicOption3: "Fractional Chief Systems Architect / CTO Advisory",
      topicOption4: "Operational AI & Multi-Branch Business Systems",
      topicOption5: "Full-Stack Privacy Mobile & Cloud Engineering (MindBall Standard)",
      topicOption6: "1:1 Executive Strategy & Deep-Dive Session",
      timelineLabel: "Target Timeline / Urgency",
      timelineOption1: "Immediate (Within 2–4 weeks)",
      timelineOption2: "This Quarter (1–3 months)",
      timelineOption3: "Exploring / Strategic Alignment",
      messageLabel: "Project Context & Architecture Needs",
      messagePlaceholder: "Briefly describe your current architecture, data volume, or the specific AI workflow you want to automate...",
      sendBtn: "Send Executive Inquiry →",
      sendingBtn: "Encrypting & Transmitting...",
      successTitle: "Inquiry Received Successfully",
      successDesc: "Thank you for reaching out. Arif reviews every strategic inquiry personally and will respond within 24 hours.",
      orDirectly: "Or Connect Directly Across Global Channels:",
      scheduleCal: "Direct Video Calendar",
      scheduleCalDesc: "Book a direct 30-min discovery call on Cal.com / Calendly:",
      scheduleBtn: "Open Booking Calendar ↗",
      timezonesTitle: "Dual-Timezone Availability:"
    },
    footer: {
      rights: "All rights reserved. Designed & built with high-truth precision.",
      tagline: "Bridging 20+ years of enterprise data rigor with sovereign autonomous AI engineering.",
      geoNote: "Machine-readable context endpoints for AI research agents:",
      llmsTxt: "/llms.txt (Lightweight Index)",
      llmsFullTxt: "/llms-full.txt (Full Knowledge Graph)",
      backToTop: "↑ Back to Top"
    }
  },
  tr: {
    meta: {
      title: "Arif Coşkun — Kıdemli Sistem Mimarı & Otonom Yapay Zeka Mühendisi",
      description: "20+ yıllık derin kurumsal platform mühendisliği (beqom 13+ yıl, Microsoft Fabric), MindBall Kurucu Ortağı ve Otonom Yapay Zeka Mimarı.",
      ogTitle: "Arif Coşkun — Kıdemli Sistem Mimarı & Yapay Zeka Mühendisi",
      ogDescription: "20 yılı aşkın kurumsal veri platformu tecrübesini otonom çoklu-ajan sistemleri ve mobil gizlilik mimarisiyle birleştiren kıdemli sistem mimarı."
    },
    nav: {
      architect: "Mimar",
      aiSystems: "AI Mimarileri",
      ventures: "Girişimler",
      evolution: "20Y Yolculuk",
      services: "Danışmanlık",
      vault: "Bilgi Kasası",
      contact: "İletişim",
      bookCall: "Görüşme Planla",
      statusText: "Seçkin Kurumsal Danışmanlık ve Yapay Zeka Projelerine Açık"
    },
    hero: {
      badge: "Yüksek Doğruluklu Kurumsal & Otonom Sistemler",
      titleLine1: "Yüksek Doğruluklu Kurumsal Sistemler",
      titleLine2: "& Otonom Yapay Zeka Mimarileri.",
      description: "20+ yıllık derin mühendislik tecrübesi: beqom bünyesinde küresel bulut ve Microsoft Fabric veri ambarı mimarilerinden çok şubeli işletme otomasyonlarına, MindBall kurucu ortaklığına ve otonom çoklu-ajan yazılım fabrikalarına.",
      proofStat1Number: "20+ Yıl",
      proofStat1Label: "Sistem & Büyük Veri Disiplini",
      proofStat2Number: "13+ Yıl",
      proofStat2Label: "beqom ile Küresel SaaS Ölçeği",
      proofStat3Number: "Kurucu Ortak",
      proofStat3Label: "MindBall Mobil Mimarisi",
      proofStat4Number: "%100 AI",
      proofStat4Label: "Otonom Yazılım Fabrikaları",
      ctaPrimary: "Hizmetleri ve Çözümleri İncele →",
      ctaSecondary: "Sistem Mimarilerini Keşfet ↓",
      locationWA: "Sammamish / Seattle, ABD (UTC-7)",
      locationIST: "İstanbul, Türkiye (UTC+3)"
    },
    pillars: {
      tag: "ÜÇLÜ UZMANLIK ALANI",
      title: "Tek Bir Zihin. Üç Derin Disiplin.",
      subtitle: "Piyasadaki birçok yapay zeka danışmanı yüksek yük altında çalışan gerçek bir kurumsal veritabanı yönetmemiştir. Geleneksel mimarlar ise otonom ajan fabrikaları kurmamıştır. Arif, her iki dünyanın kesişiminde üretir.",
      quote: "“Bir yazılım, yapay zeka bittiğini düşündüğü için bitmiş sayılmaz. Yalnızca gerçek dünya doğruladığında bitmiştir.”",
      pillar1Title: "1. Kurumsal Sistem Mimarı",
      pillar1Role: "Senior Technical Architect @ beqom (13+ Yıl)",
      pillar1Desc: "Milyonlarca kritik finansal işlemi yöneten çok kiracılı bulut platformları, Microsoft Fabric lakehouse analitik alanları, OneLake senkronizasyonu ve yüksek hacimli SQL hesaplama motorları uzmanlığı.",
      pillar1Items: [
        "Microsoft Fabric Lakehouse & OneLake senkronizasyonu",
        "Yüksek işlem hacimli SQL optimizasyonu ve hesaplama motorları",
        "Azure Terraform IaC ve Müşteri Tarafından Yönetilen Anahtarlar (CMK)",
        "Küresel SRE güvenilirliği, gözlemlenebilirlik ve olay teşhisi"
      ],
      pillar2Title: "2. Otonom Yapay Zeka Mimarı",
      pillar2Role: "Yazılım Fabrikası Yaratıcısı & Çoklu-Ajan Sistemleri",
      pillar2Desc: "Yapay zekayı gerçek bir 'İkinci Beyin' olarak konumlandırarak kırılgan komut şablonları yerine deterministik araç harness'ları, ampirik doğrulama döngüleri ve sıfır gecikmeli bilgi yönlendirme ağları kurma yaklaşımı.",
      pillar2Items: [
        "tilldone deterministik ve model dışı doğrulama döngüsü",
        "vault sıfır gecikmeli bilgi ve strateji yönlendirme kapısı",
        "Sürekli çalışan başsız Chrome DevTools Protocol (CDP) daemon'ları",
        "Çoklu-ajan diyalektik filoları (Planlayıcı, Uygulayıcı, Eleştirel Denetçi)"
      ],
      pillar3Title: "3. Girişimci & Kurucu Ortak",
      pillar3Role: "MindBall Kurucu Ortağı & Bağımsız SaaS Üreticisi",
      pillar3Desc: "Uçtan uca şifreleme, yerel ödeme ağ geçitleri ve otomatik yayınlama hatlarıyla sıfırdan tüketici ve B2B ürünleri inşa edip canlıya alma konusunda kanıtlanmış başarı.",
      pillar3Items: [
        "MindBall: Cihaz üzerinde AES şifreli zihinsel gelişim kasaları (localOnly)",
        "105 seanslık yapılandırılmış sesli zihinsel antrenman motoru",
        "Posnet Sanal POS entegrasyonu ve web-mobil yetki senkronizasyonu",
        "GainHelm / ProfitHelm: Gerçek zamanlı Shopify kâr marjı koruma motoru"
      ]
    },
    archExplorer: {
      tag: "GERÇEK DÜNYA MİMARİLERİ",
      title: "Etkileşimli Üretim Mimarisi Gezgini",
      subtitle: "Aşağıdaki canlı mimari düğümlerine tıklayarak teknik spesifikasyonları, gecikme metriklerini, güvenlik sınırlarını ve mimari karar gerekçelerini inceleyin.",
      tab1: "1. MindBall (Mobil & Gizlilik)",
      tab2: "2. beqom Kurumsal Fabric",
      tab3: "3. Otonom Yazılım Fabrikası",
      nodeClickHint: "Detaylı sistem mimarisini ve metrikleri görmek için aşağıdaki düğümlerden birini seçin:",
      inspectorTitle: "Mimari Denetim Paneli",
      latencyLabel: "Gecikme & İşlem Hacmi Başarımı",
      securityLabel: "Güvenlik & İzolasyon Sınırları",
      tradeoffLabel: "Mimari Karar Gerekçesi & Ödünleşimler",
      specLabel: "Teknoloji Yığını & Uygulama Detayları"
    },
    terminal: {
      tag: "CANLI KANIT MOTORU",
      title: "'Yapay Zeka İkinci Beyin' Kanıt Terminali",
      subtitle: "Arif'in gerçek mühendislik kılavuzlarını, kıyaslama testlerini ve mimari kararlarını doğrudan bu etkileşimli terminal üzerinden sorgulayın.",
      placeholder: "Bir komut yazın (örn: help, --why-not-langchain, --fabric-migration) ve Enter'a basın...",
      chipsTitle: "Hızlı Sorgu Butonları:",
      chip1: "--why-not-langchain",
      chip2: "--tilldone-loop",
      chip3: "--fabric-migration",
      chip4: "--business-automation",
      chip5: "--privacy-vaults",
      chip6: "--benchmark",
      chip7: "--bio",
      verifiedBadge: "Deterministik Çıktı · Üretim Ortamında Doğrulanmış Veri"
    },
    ventures: {
      tag: "CANLI PROJELER",
      title: "Girişimler & Üretim Seviyesi Yazılımlar",
      subtitle: "Gerçek kullanıcıların elinde çalışan, yüksek performans ve güvenlik standartlarıyla geliştirilmiş canlı ürünler.",
      viewCaseStudy: "Detaylı Vaka Analizi ve Mimariyi İncele →",
      closeModal: "Vaka Analizini Kapat",
      liveAppBadge: "App Store & Google Play'de Yayında",
      productionBadge: "Canlı Üretim Seviyesi SaaS",
      internalBadge: "Dahili Otonom Motor"
    },
    timeline: {
      tag: "20+ YILLIK KRONOLOJİ",
      title: "Kesintisiz Mühendislik Yolculuğu",
      subtitle: "2007'deki ilişkisel veri ambarlarından 2026'nın küresel kurumsal bulut mimarilerine ve otonom yapay zeka sistemlerine uzanan gelişim.",
      filterAll: "Tüm Dönemler (2007–Günümüz)",
      filterEnterprise: "Kurumsal & Bulut",
      filterAI: "Yapay Zeka & Ajanlar",
      filterVentures: "Girişimler & Ürünler",
      expandDetails: "Teknik Başarıları ve Detayları Gör",
      collapseDetails: "Detayları Gizle"
    },
    services: {
      tag: "DANIŞMANLIK SEVİYELERİ",
      title: "Danışmanlık, Denetim & Özel Mühendislik",
      subtitle: "Operasyonel tıkanıklıkları ortadan kaldırmak, çok şubeli işletmeleri otomatikleştirmek, eski veri altyapılarını modernize etmek ve dayanıklı dijital ürünler inşa etmek için tasarlanmış yüksek kaldıraçlı çözümler.",
      guaranteeTitle: "'Yüksek Doğruluk, Sıfır Balon' Müşteri Garantisi",
      guaranteeDesc: "Her danışmanlık ve mühendislik süreci tavizsiz dört temel ilkeye dayanır:",
      g1Title: "1. Gerçeklik Odaklı Doğrulama",
      g1Desc: "Ampirik testler, derleme kontrolleri ve gerçek trafik performansı onaylamadan hiçbir sistemi tamamlandı saymayız.",
      g2Title: "2. Sıfır Gereksiz Karmaşıklık",
      g2Desc: "Moda kavramlar veya gereksiz mikroservisler yok. Sorunu en sağlam ve en yalın şekilde çözen mimariyi kurarız.",
      g3Title: "3. Eksiksiz Bilgi ve Kod Transferi",
      g3Desc: "Müşterilerimiz %100 kod mülkiyetine, kapsamlı mimari dökümantasyona ve ekip içi eğitimlere sahip olur.",
      g4Title: "4. Çift Zaman Dilimi & İki Dilli Akıcılık",
      g4Desc: "ABD Pasifik / Doğu saat dilimleri ve Türkiye (UTC+3) çalışma saatleriyle kesintisiz uyum ve iletişim.",
      bookBtn: "Danışmanlık Talebi Oluştur →",
      timelineLabel: "Ortalama Süre",
      deliverablesLabel: "Temel Çıktılar & Kazanımlar"
    },
    vault: {
      tag: "BİLGİ GEÇİDİ",
      title: "Bilgi Kasası: Yüksek Sinyalli Mühendislik Yazıları",
      subtitle: "20 yılı aşkın yüksek ölçekli sistem inşasından süzülmüş mimari zihinsel modeller ve teknik makaleler.",
      readEssay: "Makalenin Tamamını Oku →",
      minsRead: "dk okuma",
      closeModal: "Makaleyi Kapat"
    },
    contact: {
      tag: "DOĞRUDAN İLETİŞİM",
      title: "Birlikte Sıra Dışı Sistemler İnşa Edelim",
      subtitle: "Büyük ölçekli veri altyapısı, Microsoft Fabric dönüşümü veya çok şubeli işletme otomasyonları—ihtiyaçlarınıza özel çözümleri değerlendirmek için doğrudan iletişime geçin.",
      nameLabel: "Adınız Soyadınız / Ünvanınız",
      namePlaceholder: "örn: Mehmet Yılmaz, Mühendislik Direktörü veya İşletme Sahibi",
      emailLabel: "Kurumsal E-posta",
      emailPlaceholder: "mehmet@sirket.com",
      topicLabel: "Danışmanlık / Proje Alanı",
      topicOption1: "Otonom Çoklu-Ajan Yapay Zeka Sistemleri & Araçlar",
      topicOption2: "Microsoft Fabric & Kurumsal Veri Tabanı Modernizasyonu",
      topicOption3: "Fractional Chief Systems Architect / CTO Danışmanlığı",
      topicOption4: "İşletme Otomasyonu & Çok Şubeli Sistemler (Oto Servis, Kuaför, Klinik vb.)",
      topicOption5: "Uçtan Uca Şifreli Mobil & Bulut Mühendisliği (MindBall Standardı)",
      topicOption6: "1:1 Üst Düzey Yönetici Strateji Seansı",
      timelineLabel: "Hedeflenen Başlangıç Zamanı",
      timelineOption1: "Hemen (2–4 hafta içinde)",
      timelineOption2: "Bu Çeyrekte (1–3 ay içinde)",
      timelineOption3: "Stratejik Değerlendirme / Keşif",
      messageLabel: "Proje Özeti & Mimari İhtiyaçlar",
      messagePlaceholder: "Mevcut sistem mimarinizi, veri hacminizi veya otomatikleştirmek istediğiniz yapay zeka iş akışını kısaca özetleyin...",
      sendBtn: "Talebi İlet →",
      sendingBtn: "Şifreleniyor ve İletiliyor...",
      successTitle: "Talebiniz Başarıyla Alındı",
      successDesc: "İletişime geçtiğiniz için teşekkürler. Arif tüm danışmanlık taleplerini bizzat inceler ve 24 saat içinde geri dönüş sağlar.",
      orDirectly: "Veya Küresel İletişim Kanallarından Ulaşın:",
      scheduleCal: "Doğrudan Video Görüşme Takvimi",
      scheduleCalDesc: "Cal.com / Calendly üzerinden 30 dakikalık keşif görüşmesi planlayın:",
      scheduleBtn: "Takvimden Randevu Al ↗",
      timezonesTitle: "Çift Zaman Dilimi Uyumluluğu:"
    },
    footer: {
      rights: "Tüm hakları saklıdır. Yüksek doğruluk ve hassasiyet standartlarıyla üretilmiştir.",
      tagline: "20 yıllık kurumsal veri disiplini ile egemen otonom yapay zeka mühendisliğini buluşturur.",
      geoNote: "Yapay zeka araştırma motorları için makine tarafından okunabilir kaynaklar:",
      llmsTxt: "/llms.txt (Hafif Dizin)",
      llmsFullTxt: "/llms-full.txt (Kapsamlı Bilgi Grafiği)",
      backToTop: "↑ Başa Dön"
    }
  }
};
