import { Locale } from './translations';

export interface ServiceItem {
  id: string;
  tierNumber: string;
  badge: string;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  description: Record<Locale, string>;
  targetAudience: Record<Locale, string>;
  timeline: Record<Locale, string>;
  deliverables: Record<Locale, string[]>;
  engagementModels: Record<Locale, string>;
  ctaTopicKey: string;
}

export const services: ServiceItem[] = [
  {
    id: 'agentic-ai-engineering',
    tierNumber: '01',
    badge: 'Autonomous AI Systems',
    title: {
      en: 'Autonomous Agentic AI & Software Factory Engineering',
      tr: 'Otonom Çoklu-Ajan & Yazılım Fabrikası Mühendisliği'
    },
    subtitle: {
      en: 'Replace fragile prompt wrappers with battle-tested multi-agent swarms and deterministic verification loops.',
      tr: 'Kırılgan komut şablonlarını terk edip kurumunuza özel otonom çoklu-ajan sistemleri ve deterministik test döngüleri kurun.'
    },
    description: {
      en: 'We architect and implement bespoke autonomous software factories and multi-agent workflows (Planner, Executor, Adversarial Critic) engineered under the tilldone non-model verification standard.',
      tr: 'Kurumunuzun mühendislik, araştırma veya operasyonel iş akışlarını otomatikleştiren, tilldone model dışı doğrulama standardına sahip özel çoklu-ajan filoları ve yazılım fabrikaları inşa ediyoruz.'
    },
    targetAudience: {
      en: 'Scaleups, tech companies, and forward-thinking enterprises building automated software, intelligence, or operational dispatch pipelines.',
      tr: 'Yazılım, operasyon veya veri analitiği süreçlerini otonomlaştırmak isteyen ölçeklenen girişimler ve yenilikçi şirketler.'
    },
    timeline: {
      en: '4 to 8 Weeks (Fixed-Scope Sprints)',
      tr: '4 - 8 Hafta (Sabit Kapsamlı Sprintler)'
    },
    deliverables: {
      en: [
        'Custom Multi-Agent Fleet Architecture with role specialization',
        'Empirical verification harness (tilldone standard: builds, tests, CDP checks)',
        'Headless Chrome DevTools Protocol (CDP) persistent tool daemons',
        'vault zero-latency corporate memory and knowledge routing gateway',
        'Complete code ownership, CI/CD deployment, and team enablement training'
      ],
      tr: [
        'Rol uzmanlaşmasına sahip Özel Çoklu-Ajan Filosu Mimarisi',
        'Ampirik doğrulama harness\'ı (tilldone standardı: derleme, test ve CDP denetimi)',
        'Başsız Chrome DevTools Protocol (CDP) kalıcı araç daemon\'ları',
        'vault sıfır gecikmeli kurumsal hafıza ve bilgi yönlendirme kapısı',
        '%100 kod mülkiyeti, CI/CD dağıtım hattı ve ekip içi yetkinlik eğitimi'
      ]
    },
    engagementModels: {
      en: 'Fixed-Scope Build Sprint or Monthly Retainer',
      tr: 'Sabit Kapsamlı Proje veya Aylık Danışmanlık'
    },
    ctaTopicKey: 'Autonomous Multi-Agent AI Systems & Tooling'
  },
  {
    id: 'microsoft-fabric-modernization',
    tierNumber: '02',
    badge: 'Enterprise Cloud & Data',
    title: {
      en: 'Microsoft Fabric & Enterprise Data Platform Modernization',
      tr: 'Microsoft Fabric & Kurumsal Veri Ambarı Modernizasyonu'
    },
    subtitle: {
      en: 'Modernize enterprise analytics, lakehouse architectures, and calculation engines leveraging 20+ years of deep data warehouse mastery.',
      tr: '20+ yıllık veri ambarı, SQL optimizasyonu ve Microsoft Fabric tecrübesiyle kurumsal analitik ve raporlama altyapınızı dönüştürün.'
    },
    description: {
      en: 'Migrate legacy batch ETL jobs and sluggish OLTP reporting into lightning-fast Microsoft Fabric Lakehouses and OneLake streaming architectures, backed by 13+ years of enterprise SaaS scaling at beqom.',
      tr: 'beqom bünyesindeki 13+ yıllık kurumsal SaaS tecrübesiyle, hantal gece ETL paketlerini ve yavaş raporları saniyelik Microsoft Fabric Lakehouse ve OneLake delta akışlarına dönüştürüyoruz.'
    },
    targetAudience: {
      en: 'Enterprise CTOs, CDOs, and VPs of Engineering dealing with database locking bottlenecks, high licensing costs, or fragmented data silos.',
      tr: 'Veritabanı kilitlenmeleri, yüksek lisans maliyetleri ve dağınık veri adacıkları ile mücadele eden kurumsal teknoloji liderleri ve veri yöneticileri.'
    },
    timeline: {
      en: '2-Week Audit · 3–6 Months Migration Execution',
      tr: '2 Haftalık Denetim · 3–6 Aylık Geçiş Uygulaması'
    },
    deliverables: {
      en: [
        'Microsoft Fabric Analytics workspace architecture & OneLake migration roadmap',
        'High-throughput database query tuning and execution plan optimization',
        'Resilient streaming ETL/ELT pipelines with automated drift detection',
        'Customer-Managed Keys (CMK), Azure Key Vault security, and Row-Level Security',
        'Live executive PowerBI DirectLake dashboards with sub-second response times'
      ],
      tr: [
        'Microsoft Fabric analitik çalışma alanı mimarisi ve OneLake geçiş yol haritası',
        'Yüksek işlem hacimli SQL sorgu optimizasyonu ve yürütme planı iyileştirmesi',
        'Anomali tespitine sahip dayanıklı anlık ETL/ELT akış hatları',
        'Azure Key Vault CMK şifreleme ve Satır Seviyesi Güvenlik (RLS) yapılandırması',
        'Sub-second yanıt süreli canlı yönetici PowerBI DirectLake panoları'
      ]
    },
    engagementModels: {
      en: 'Architectural Audit (Fixed) / Migration Sprints',
      tr: 'Mimari Denetim (Sabit) / Geçiş Sprintleri'
    },
    ctaTopicKey: 'Microsoft Fabric & Enterprise Data Modernization'
  },
  {
    id: 'fractional-chief-architect',
    tierNumber: '03',
    badge: 'Executive Advisory & CTO',
    title: {
      en: 'Fractional Chief Systems Architect & AI Advisory',
      tr: 'Fractional Chief Systems Architect & Yapay Zeka Danışmanlığı'
    },
    subtitle: {
      en: 'High-leverage strategic technical leadership for startups and expanding companies needing senior architectural wisdom.',
      tr: 'Büyüyen girişimler ve şirketler için tam zamanlı C-seviye maliyetine katlanmadan 20+ yıllık küresel sistem ve yapay zeka liderliği.'
    },
    description: {
      en: 'Direct weekly architectural alignment, technical roadmap evaluation, AI defensibility audits, and senior hiring interviews to ensure your engineering organization scales without catastrophic rewrites.',
      tr: 'Mühendislik organizasyonunuzun büyük mimari hatalara düşmeden büyümesi için haftalık mimari incelemeler, yapay zeka stratejisi ve kıdemli aday mülakatları.'
    },
    targetAudience: {
      en: 'Seed to Series B founders, non-technical CEOs, and engineering teams facing scaling bottlenecks or planning major AI initiatives.',
      tr: 'Ölçeklenme sancıları çeken veya yapay zekaya geçiş planlayan girişimciler, yatırımcılar ve mühendislik liderleri.'
    },
    timeline: {
      en: 'Ongoing Monthly Retainer (10–20 hrs / month)',
      tr: 'Aylık Düzenli Danışmanlık (10–20 saat / ay)'
    },
    deliverables: {
      en: [
        'Weekly architecture reviews and technical roadmap alignment',
        'AI adoption blueprint & proprietary moat design (preventing commoditization)',
        'Senior engineering hiring interviews and candidate technical vetting',
        'Pre-fundraising technical due diligence and security audit preparation',
        'Direct asynchronous Slack/Discord access for critical architectural triage'
      ],
      tr: [
        'Haftalık sistem mimarisi değerlendirmeleri ve teknik yol haritası uyumu',
        'Yapay zeka benimseme planı ve rekabet avantajı (moat) tasarımı',
        'Kıdemli mühendis işe alım mülakatları ve teknik yeterlilik değerlendirmesi',
        'Yatırım öncesi teknik durum tespiti (Due Diligence) ve güvenlik hazırlığı',
        'Kritik kararlarda doğrudan asenkron Slack/Discord mimari danışma kanalı'
      ]
    },
    engagementModels: {
      en: 'Monthly Retainer or Dedicated Advisory Sprints',
      tr: 'Aylık Danışmanlık veya Özel Danışmanlık Sprinti'
    },
    ctaTopicKey: 'Fractional Chief Systems Architect / CTO Advisory'
  },
  {
    id: 'operational-ai-business-systems',
    tierNumber: '04',
    badge: 'Business AI & Operations',
    title: {
      en: 'Operational AI & Multi-Branch Business Systems',
      tr: 'İşletme Otomasyonu & Çok Şubeli Sistemler'
    },
    subtitle: {
      en: 'Turnkey 24/7 WhatsApp/SMS AI receptionists, centralized multi-location owner command centers, and automated POS payment workflows.',
      tr: 'Oto servisler, kuaför zincirleri ve klinikler için 7/24 WhatsApp yapay zeka randevu asistanları, çok şubeli yönetici panoları ve ödeme otomasyonu.'
    },
    description: {
      en: 'We eliminate manual operational chaos for growing businesses and multi-location service networks (auto repair shops, salon chains, medical clinics, boutique retail) by building custom WhatsApp/SMS AI booking agents, real-time owner revenue dashboards, and zero-inventory-drift POS integrations.',
      tr: 'Büyüyen işletmeler ve çok şubeli hizmet ağları (oto servis ağları, kuaför ve klinik zincirleri, perakende mağazaları) için telefon ve WhatsApp karmaşasını sıfırlıyoruz. 7/24 randevu alan yapay zeka asistanları, şube ciro panoları ve Sanal POS entegrasyonlu operasyon sistemleri kuruyoruz.'
    },
    targetAudience: {
      en: 'Multi-branch service chains, auto repair networks, salon & clinic operators, and growing businesses wanting to stop missed calls and automate manual scheduling.',
      tr: 'Çok şubeli işletmeler, oto servisler, kuaför ve estetik zincirleri, klinikler ve randevu/sipariş trafiğini otomatikleştirmek isteyen işletme sahipleri.'
    },
    timeline: {
      en: '2 to 4 Weeks (Rapid Turnkey Delivery)',
      tr: '2 - 4 Hafta (Anahtar Teslim Canlıya Geçiş)'
    },
    deliverables: {
      en: [
        '24/7 Autonomous WhatsApp & SMS AI Receptionist for instant booking and quoting',
        'Centralized Multi-Branch Owner Command Center with real-time revenue & staff metrics',
        'Custom lightweight mobile/tablet app for technicians, stylists, and floor staff',
        'Integrated payment workflows (Turkish Posnet, iyzico, Stripe Connect)',
        '100% complete system and code ownership (Zero recurring per-seat SaaS taxes)'
      ],
      tr: [
        'Anlık randevu ve fiyatlandırma yapan 7/24 Otonom WhatsApp & SMS Yapay Zeka Asistanı',
        'Tüm şubelerin anlık ciro ve personel verilerini gösteren Merkezi Yönetici Panosu',
        'Teknisyenler, kuaförler ve saha personeli için özel hafif mobil/tablet uygulaması',
        'Banka Sanal POS (Posnet, iyzico, Stripe) ile kapora ve ödeme otomasyonu',
        '%100 sistem ve kod mülkiyeti (Aylık kullanıcı başına haraç ödemeden bağımsız altyapı)'
      ]
    },
    engagementModels: {
      en: 'Fixed Turnkey Build Sprint or Ongoing Optimization Retainer',
      tr: 'Sabit Kapsamlı Kurulum Sprinti veya Aylık İyileştirme Danışmanlığı'
    },
    ctaTopicKey: 'Operational AI & Multi-Branch Business Systems'
  },
  {
    id: 'privacy-first-mobile-cloud',
    tierNumber: '05',
    badge: 'Mobile & Cloud Product',
    title: {
      en: 'Privacy-First Mobile & Cloud Platform Engineering',
      tr: 'Gizlilik Öncelikli Mobil & Bulut Platform Mühendisliği'
    },
    subtitle: {
      en: 'Production mobile applications featuring on-device encryption, offline resilience, and automated release tracks (The MindBall standard).',
      tr: 'Cihaz üzerinde uçtan uca şifreleme, kesintisiz çevrimdışı çalışma ve otomatik mağaza hatlarına sahip mobil platformlar.'
    },
    description: {
      en: 'We engineer end-to-end iOS and Android applications featuring on-device AES encrypted storage vaults, custom audio/video playback engines, global and regional payment gateways, and automated EAS/Fastlane CI/CD releases.',
      tr: 'MindBall mimari standardıyla; cihaz üzerinde donanım anahtarlı AES şifreleme, kesintisiz ses/video motorları, küresel ve yerel Sanal POS ödeme ağ geçitleri ve otomatik mağaza dağıtım hatları inşa ediyoruz.'
    },
    targetAudience: {
      en: 'HealthTech, FinTech, high-performance coaching, and consumer platforms requiring uncompromising user data privacy and rock-solid mobile UX.',
      tr: 'Kullanıcı gizliliğine ve kesintisiz mobil deneyime tavizsiz önem veren Sağlık Teknolojileri, FinTech ve tüketici odaklı platformlar.'
    },
    timeline: {
      en: '6 to 10 Weeks (Full MVP to App Store / Play Store)',
      tr: '6 - 10 Hafta (Sıfırdan Mağazalara Canlı Çıkış)'
    },
    deliverables: {
      en: [
        'React Native / Expo full-stack architecture with Zustand state modeling',
        'On-device AES-256 encrypted local storage vaults (localOnly: true)',
        'Payment architecture: Apple IAP, Google Play Billing, Stripe, Turkish Posnet',
        'Automated CI/CD release engineering (EAS Cloud, Fastlane, TestFlight)',
        'Zero-drop audio/video streaming engine with offline caching'
      ],
      tr: [
        'Zustand durum yönetimine sahip React Native / Expo tam döngü mimari',
        'Cihaz üzerinde AES-256 şifreli yerel depolama kasası (localOnly: true)',
        'Ödeme altyapısı: Apple IAP, Google Play, Stripe Connect ve Posnet Sanal POS',
        'EAS Cloud ve Fastlane ile otomatik TestFlight ve Google Play dağıtım hatları',
        'Çevrimdışı önbelleğe alma özelliğine sahip kesintisiz medya akış motoru'
      ]
    },
    engagementModels: {
      en: 'Full MVP Product Build or Modernization Sprint',
      tr: 'Tam MVP Ürün Geliştirme veya Modernizasyon Sprinti'
    },
    ctaTopicKey: 'Full-Stack Privacy Mobile & Cloud Engineering (MindBall Standard)'
  },
  {
    id: 'executive-strategy-session',
    tierNumber: '06',
    badge: '1:1 Direct Intensive',
    title: {
      en: '1:1 Executive Strategy & Deep-Dive Sessions',
      tr: '1:1 Üst Düzey Yönetici Strateji Seansı'
    },
    subtitle: {
      en: 'High-intensity 60-to-90 minute strategic deep-dives for founders, business leaders, and engineers seeking immediate clarity.',
      tr: 'Girişimciler, işletme sahipleri ve teknoloji liderleri için kritik mimari, operasyon veya yapay zeka kararlarında 60-90 dakikalık yoğun strateji.'
    },
    description: {
      en: 'A direct problem-solving session addressing your most pressing technical or operational dilemma: multi-branch automation, agentic AI adoption, database deadlocks, or mobile architecture. Includes an actionable 30-day architectural memo.',
      tr: 'En acil teknik veya operasyonel probleminize odaklanan doğrudan çözüm seansı: şube otomasyonu, yapay zeka ajanları, veritabanı kilitlenmeleri veya mobil teknoloji seçimi. Seans sonrası uygulanabilir 30 günlük eylem planı içerir.'
    },
    targetAudience: {
      en: 'Founders, business owners, and CTOs needing immediate, high-truth answers from a 20+ year veteran.',
      tr: '20+ yıllık kıdemli bir sistem mimarından anlık, net ve uygulanabilir teknik rehberlik almak isteyen işletme sahipleri, kurucular ve yöneticiler.'
    },
    timeline: {
      en: '60–90 Minutes Video Intensive + Actionable Roadmap Memo',
      tr: '60–90 Dakikalık Video Seansı + Eylem Planı Raporu'
    },
    deliverables: {
      en: [
        'Direct 1:1 problem-solving video intensive with Arif Coskun',
        'Comprehensive review of your existing workflow, architecture, or codebase',
        'Written Executive Strategy Memo delivered within 48 hours',
        'Actionable 30-day architectural roadmap and anti-pattern warnings'
      ],
      tr: [
        'Arif Coşkun ile birebir doğrudan problem çözme video görüşmesi',
        'Mevcut iş akışınızın, mimarinizin veya kod yapınızın derinlemesine analizi',
        '48 saat içinde teslim edilen Kapsamlı Yönetici Strateji Raporu',
        'Uygulanabilir 30 günlük mimari eylem planı ve risk uyarıları'
      ]
    },
    engagementModels: {
      en: 'Single Intensive Session (Includes Prep & Written Memo)',
      tr: 'Tekil Strateji Seansı (Ön İnceleme ve Rapor Dahil)'
    },
    ctaTopicKey: '1:1 Executive Strategy & Deep-Dive Session'
  }
];
