import { Locale } from './translations';

export type TimelineCategory = 'enterprise' | 'ai' | 'ventures';

export interface TimelineMilestone {
  id: string;
  yearRange: string;
  category: TimelineCategory;
  title: Record<Locale, string>;
  roleCompany: Record<Locale, string>;
  location: string;
  summary: Record<Locale, string>;
  highlights: Record<Locale, string[]>;
  techStack: string[];
}

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 'beqom-senior-architect',
    yearRange: '2025 – Present',
    category: 'enterprise',
    title: {
      en: 'Senior Technical Architect',
      tr: 'Kıdemli Sistem Mimarı'
    },
    roleCompany: {
      en: 'Senior Technical Architect @ beqom',
      tr: 'Senior Technical Architect @ beqom'
    },
    location: 'Sammamish, WA / Remote Global',
    summary: {
      en: 'Directing enterprise SaaS platform modernization across V10 and Accelerate architectures, establishing Microsoft Fabric analytics workspaces, OneLake synchronization, and enterprise AI layer capabilities.',
      tr: 'V10 ve Accelerate platformlarında kurumsal SaaS modernizasyonunu yönetmek; Microsoft Fabric analitik alanlarını, OneLake senkronizasyonunu ve kurumsal yapay zeka katmanını kurmak.'
    },
    highlights: {
      en: [
        'Designed Microsoft Fabric Lakehouse integration with streaming OneLake Delta Parquet sync.',
        'Architected AI-assisted calculation engine diagnostics and anomaly detection.',
        'Engineered enterprise security boundaries with Customer-Managed Keys (CMK) and Azure RBAC.'
      ],
      tr: [
        'OneLake Delta Parquet anlık akışı ile Microsoft Fabric Lakehouse entegrasyonunu tasarladı.',
        'Yapay zeka destekli hesaplama motoru teşhis ve anomali tespit sistemini modelledi.',
        'Azure Key Vault ve CMK ile kurumsal güvenlik ve şifreleme sınırlarını yönetti.'
      ]
    },
    techStack: ['Microsoft Fabric', 'OneLake', 'Azure Synapse', 'Azure SQL DB', 'Terraform', 'AI Agents']
  },
  {
    id: 'mindball-founding',
    yearRange: '2024 – Present',
    category: 'ventures',
    title: {
      en: 'Co-Founder & Lead Systems Architect',
      tr: 'Kurucu Ortak & Baş Sistem Mimarı'
    },
    roleCompany: {
      en: 'Co-Founder @ MindBall',
      tr: 'Kurucu Ortak @ MindBall'
    },
    location: 'Seattle, WA & Istanbul, TR',
    summary: {
      en: 'Co-founded and architected MindBall—a mobile mental performance and audio coaching platform for elite athletes featuring on-device privacy encryption and automated store distribution.',
      tr: 'Sporcular için gizlilik öncelikli, cihaz üzerinde şifrelenmiş ve 105 seanslık sesli rehberlik sunan MindBall mobil platformunun kurucu ortaklığı ve tüm sistem mimarisinin inşası.'
    },
    highlights: {
      en: [
        'Engineered LocalWellnessRepository: On-device AES-256 encrypted storage (localOnly: true).',
        'Implemented 105-session audio engine with 20% completion gates and 03:00 AM streak boundaries.',
        'Integrated Turkish Posnet Virtual POS gateway with Firebase web-to-app entitlement sync.',
        'Built automated EAS/Fastlane release pipelines for iOS TestFlight and Google Play.'
      ],
      tr: [
        'LocalWellnessRepository ile cihaz üzerinde AES-256 şifreli veri kasası mimarisini kurdu.',
        '105 seanslık sesli müfredat ve İstanbul 03:00 zaman sınırına göre çalışan seri motorunu geliştirdi.',
        'Posnet Sanal POS entegrasyonu ve Firebase üzerinden web-mobil yetki senkronizasyonunu sağladı.',
        'EAS ve Fastlane ile iOS TestFlight ve Google Play otomatik dağıtım hattını oluşturdu.'
      ]
    },
    techStack: ['React Native', 'Expo SDK 51', 'Zustand', 'Firebase Functions', 'Posnet POS', 'Fastlane']
  },
  {
    id: 'agentic-software-factories',
    yearRange: '2024 – Present',
    category: 'ai',
    title: {
      en: 'Sovereign AI Builder & Tooling Architect',
      tr: 'Otonom Yapay Zeka Mimarı & Yazılım Fabrikaları'
    },
    roleCompany: {
      en: 'Autonomous Systems Research & Software Factory',
      tr: 'Otonom Sistemler Araştırması & Yazılım Fabrikası'
    },
    location: 'Sammamish, WA',
    summary: {
      en: 'Created the autonomous software factory ecosystem operating on the "AI is My Second Brain" standard, replacing fragile prompts with deterministic verification harnesses.',
      tr: '"Yapay Zeka İkinci Beynimdir" felsefesiyle kırılgan komutları deterministik harici test ve derleme harness\'ları ile değiştiren otonom yazılım fabrikası mimarisi.',
    },
    highlights: {
      en: [
        'Invented tilldone: Autonomous execution loop enforcing non-model empirical verification.',
        'Built vault CLI: Deterministic <14ms decision-tree knowledge routing engine without context pollution.',
        'Engineered persistent headless Chrome DevTools Protocol (CDP) daemons for robust automation.',
        'Created GainHelm/ProfitHelm: Real-time Shopify merchant profit protection and anomaly detection.'
      ],
      tr: [
        'tilldone motoru: Model dışı harici testlerle doğrulama yapan otonom yürütme döngüsü.',
        'vault CLI: Bağlam kirliliği yaratmadan <14ms\'de karar kurallarına erişen dizin kapısı.',
        'Kalıcı başsız Chrome DevTools Protocol (CDP) daemon\'ları ile güvenilir tarayıcı otomasyonu.',
        'GainHelm / ProfitHelm: Gerçek zamanlı Shopify kâr ve reklam anomalisi koruma sistemi.'
      ]
    },
    techStack: ['Node.js 22', 'TypeScript', 'CDP 9222', 'SQLite FTS5', 'Gemini API', 'Claude Sonnet']
  },
  {
    id: 'beqom-devops-architect',
    yearRange: '2022 – 2025',
    category: 'enterprise',
    title: {
      en: 'DevOps Infrastructure Architect',
      tr: 'DevOps Altyapı Mimarı'
    },
    roleCompany: {
      en: 'DevOps Infrastructure Architect @ beqom',
      tr: 'DevOps Altyapı Mimarı @ beqom'
    },
    location: 'Sammamish, WA / Remote Global',
    summary: {
      en: 'Automated global Azure cloud infrastructure using Terraform, built resilient CI/CD pipelines, and designed isolated enterprise security boundaries.',
      tr: 'Küresel Azure bulut altyapısını Terraform ile otomatize etmek, dayanıklı CI/CD hatları kurmak ve izole kurumsal güvenlik sınırlarını tasarlamak.'
    },
    highlights: {
      en: [
        'Authored modular Terraform modules for multi-region private endpoint deployments.',
        'Architected zero-downtime deployment pipelines for mission-critical enterprise tenants.',
        'Standardized infrastructure testing and automated compliance validation.'
      ],
      tr: [
        'Çok bölgeli güvenli özel uç nokta kurulumları için modüler Terraform şablonları yazdı.',
        'Kritik kurumsal müşteriler için sıfır kesintili (zero-downtime) dağıtım hatları kurdu.',
        'Altyapı testlerini ve otomatik güvenlik uyumluluk denetimlerini standartlaştırdı.'
      ]
    },
    techStack: ['Terraform Cloud', 'Azure ARM', 'Azure DevOps Pipelines', 'Docker', 'Bash / PowerShell']
  },
  {
    id: 'beqom-sre-operations',
    yearRange: '2018 – 2022',
    category: 'enterprise',
    title: {
      en: 'Platform Operations Specialist / SRE',
      tr: 'Platform Operasyonları & SRE Uzmanı'
    },
    roleCompany: {
      en: 'Platform Operations Specialist @ beqom',
      tr: 'Platform Operasyonları & SRE Uzmanı @ beqom'
    },
    location: 'Global SaaS Tier',
    summary: {
      en: 'Championed multi-tenant SaaS reliability, cross-tier production incident triage, and deep enterprise observability via Datadog.',
      tr: 'Çok kiracılı SaaS güvenilirliğini, sistemler arası üretim arıza teşhisini ve Datadog ile derin kurumsal gözlemlenebilirliği yönetti.'
    },
    highlights: {
      en: [
        'Led high-priority production incident diagnostics with mean-time-to-resolution < 45 mins.',
        'Implemented end-to-end Datadog dashboards and synthetic API health probes.',
        'Established operational SLAs and automated alerting reducing false alarms by 60%.'
      ],
      tr: [
        'Kritik üretim arızası teşhislerini yöneterek ortalama çözüm süresini 45 dakikanın altına indirdi.',
        'Uçtan uca Datadog izleme panoları ve sentetik API durum sondaları kurdu.',
        'Operasyonel SLA ve alarmları optimize ederek hatalı uyarıları %60 azalttı.'
      ]
    },
    techStack: ['Datadog APM', 'Azure Monitor', 'Log Analytics', 'Kusto Query Language', 'PowerShell']
  },
  {
    id: 'beqom-database-architect',
    yearRange: '2016 – 2018',
    category: 'enterprise',
    title: {
      en: 'Database Performance Architect',
      tr: 'Veritabanı Performans Mimarı'
    },
    roleCompany: {
      en: 'Database Performance Architect @ beqom',
      tr: 'Veritabanı Performans Mimarı @ beqom'
    },
    location: 'Global SaaS Tier',
    summary: {
      en: 'Specialized in deep query execution plan optimization, calculation engine scaling, and index tuning for enterprise clients with millions of complex compensation records.',
      tr: 'Milyonlarca prim kaydı işleyen kurumsal müşteriler için sorgu yürütme planı optimizasyonu, hesaplama motoru ölçekleme ve indeks tasarımı.'
    },
    highlights: {
      en: [
        'Optimized heavy T-SQL calculation procedures, slashing batch execution time by 75%.',
        'Resolved critical locking and deadlock bottlenecks using partition alignment and temporal tables.',
        'Designed database archiving and partitioned columnstore indexing architectures.'
      ],
      tr: [
        'Ağır T-SQL hesaplama yordamlarını optimize ederek paket çalışma sürelerini %75 kısalttı.',
        'Bölümleme ve zamansal tablolarla kritik kilitlenme ve deadlock sorunlarını tamamen çözdü.',
        'Veritabanı arşivleme ve sütun tabanlı indeksleme mimarilerini tasarladı.'
      ]
    },
    techStack: ['Microsoft SQL Server', 'Azure SQL DB', 'T-SQL Optimization', 'Execution Plans', 'Index Tuning']
  },
  {
    id: 'beqom-application-consultant',
    yearRange: '2013 – 2016',
    category: 'enterprise',
    title: {
      en: 'Enterprise Application Consultant',
      tr: 'Kurumsal Uygulama Danışmanı'
    },
    roleCompany: {
      en: 'Application Consultant @ beqom',
      tr: 'Uygulama Danışmanı @ beqom'
    },
    location: 'Global Implementation Tier',
    summary: {
      en: 'Led client-facing technical implementations for Fortune 500 enterprise compensation management, translating complex global rules into scalable data structures.',
      tr: 'Fortune 500 ölçeğindeki şirketler için küresel prim ve ücret yönetimi kurallarını ölçeklenebilir veritabanı yapılarına dönüştüren teknik danışmanlık.'
    },
    highlights: {
      en: [
        'Delivered full-cycle enterprise compensation deployments across Europe and North America.',
        'Designed custom calculation rule engines for multi-currency, multi-jurisdiction compensation plans.',
        'Bridged executive business requirements directly into relational database specifications.'
      ],
      tr: [
        'Avrupa ve Kuzey Amerika\'daki küresel müşteriler için tam döngü kurumsal prim projelerini tamamladı.',
        'Çok para birimli ve çok ülkeli hak ediş planları için kural motorları modelledi.',
        'Üst düzey iş gereksinimlerini doğrudan ilişkisel veritabanı spesifikasyonlarına dönüştürdü.'
      ]
    },
    techStack: ['beqom V9/V10', 'SQL Server', 'Business Intelligence', 'Enterprise SaaS']
  },
  {
    id: 'smartiks-bi-dwh',
    yearRange: '2010 – 2013',
    category: 'enterprise',
    title: {
      en: 'Enterprise BI & Data Warehouse Specialist',
      tr: 'Kurumsal BI & Veri Ambarı Uzmanı'
    },
    roleCompany: {
      en: 'Business Intelligence Specialist @ Smartiks',
      tr: 'İş Zekası & Veri Ambarı Uzmanı @ Smartiks'
    },
    location: 'Istanbul, TR',
    summary: {
      en: 'Architected enterprise Data Warehouses, dimensional OLAP cubes (Star/Snowflake), and high-volume ETL pipelines across banking, retail, and pharmaceutical sectors.',
      tr: 'Bankacılık, perakende ve ilaç sektörlerindeki öncü şirketler için kurumsal Veri Ambarları, çok boyutlu OLAP küpleri ve yüksek hacimli ETL boru hatları inşası.'
    },
    highlights: {
      en: [
        'Built dimensional star and snowflake schemas processing multi-gigabyte daily sales logs.',
        'Engineered automated SSIS / ETL workflows with error isolation and data integrity gates.',
        'Designed executive executive OLAP analytical cubes in SSAS with sub-second multidimensional queries.'
      ],
      tr: [
        'Günlük yüksek hacimli satış verilerini işleyen yıldız ve kar tanesi boyutsal şemalar kurdu.',
        'Hata izolasyonu ve veri bütünlüğü denetimlerine sahip otomatik SSIS / ETL akışları geliştirdi.',
        'SSAS üzerinde anlık çok boyutlu sorgulama sağlayan yönetici analitik küpleri tasarladı.'
      ]
    },
    techStack: ['Microsoft SQL Server', 'SSIS (ETL)', 'SSAS (OLAP Cubes)', 'SSRS Reporting', 'Dimensional Modeling']
  },
  {
    id: 'istanbul-uni-foundations',
    yearRange: '2007 – 2010',
    category: 'enterprise',
    title: {
      en: 'University Foundations & Software Engineering',
      tr: 'Üniversite Temelleri & Yazılım Mühendisliği'
    },
    roleCompany: {
      en: 'Computer Engineering @ Istanbul University',
      tr: 'Bilgisayar Mühendisliği @ İstanbul Üniversitesi'
    },
    location: 'Istanbul, TR',
    summary: {
      en: 'Earned degree in Computer Engineering from Istanbul University while engineering custom desktop software and relational database solutions part-time.',
      tr: 'İstanbul Üniversitesi Bilgisayar Mühendisliği eğitimi sırasında eş zamanlı olarak özel masaüstü yazılımları ve ilişkisel veritabanı çözümleri geliştirdi.'
    },
    highlights: {
      en: [
        'Discovered enduring passion for relational data modeling and system architecture.',
        'Built custom desktop database management applications for local businesses.',
        'Mastered core computer science foundations: algorithms, operating systems, and networking.'
      ],
      tr: [
        'İlişkisel veri modelleme ve sistem mimarisine olan tutkusunu keşfetti ve derinleştirdi.',
        'Yerel işletmeler için özel masaüstü veritabanı yönetim yazılımları geliştirdi.',
        'Algoritmalar, işletim sistemleri ve ağ protokolleri temel mühendislik ilkelerini pekiştirdi.'
      ]
    },
    techStack: ['C# / .NET', 'SQL Server', 'Desktop Forms', 'Relational Schemas']
  }
];
