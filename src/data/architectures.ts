import { Locale } from './translations';

export interface ArchitectureNode {
  id: string;
  name: string;
  category: 'frontend' | 'storage' | 'compute' | 'security' | 'gateway' | 'verification';
  badge: string;
  title: Record<Locale, string>;
  role: Record<Locale, string>;
  description: Record<Locale, string>;
  latencyBenchmark: string;
  securityBoundary: Record<Locale, string>;
  tradeoffRationale: Record<Locale, string>;
  techSpecs: string[];
  codeSnippet?: string;
}

export interface ArchitectureSystem {
  id: string;
  tabTitle: Record<Locale, string>;
  title: Record<Locale, string>;
  tagline: Record<Locale, string>;
  overview: Record<Locale, string>;
  nodes: ArchitectureNode[];
}

export const architectures: ArchitectureSystem[] = [
  {
    id: 'mindball',
    tabTitle: {
      en: '1. MindBall (Mobile & Privacy)',
      tr: '1. MindBall (Mobil & Gizlilik)'
    },
    title: {
      en: 'MindBall: Privacy-First Mobile & Mental Coaching Architecture',
      tr: 'MindBall: Gizlilik Öncelikli Mobil & Zihinsel Antrenman Mimarisi'
    },
    tagline: {
      en: 'React Native + Expo, on-device AES encrypted wellness vaults, Turkish Posnet payment gateway, and 105-session audio engine.',
      tr: 'React Native + Expo, cihaz üzerinde AES şifreli gelişim kasaları, Posnet Sanal POS ve 105 seanslık ses motoru.'
    },
    overview: {
      en: 'Engineered from zero to App Store / Google Play production. MindBall guarantees that sensitive athlete mental reflections never touch cloud databases via LocalWellnessRepository, while delivering continuous 15-week audio curriculum progression.',
      tr: 'Sıfırdan App Store ve Google Play üretimine taşınan MindBall; LocalWellnessRepository ile hassas sporcu verilerinin asla buluta çıkmamasını garanti ederken 15 haftalık sesli müfredatı kesintisiz sunar.'
    },
    nodes: [
      {
        id: 'mb-frontend',
        name: 'React Native / Expo Frontend',
        category: 'frontend',
        badge: 'UI & State Tier',
        title: {
          en: 'Mobile Client (React Native + Zustand)',
          tr: 'Mobil İstemci (React Native + Zustand)'
        },
        role: {
          en: 'High-performance audio playback, zero-jank micro-animations, and client-side deterministic streak calculations.',
          tr: 'Yüksek performanslı ses çalma, akıcı mikro-animasyonlar ve istemci tarafı deterministik seri hesaplama.'
        },
        description: {
          en: 'Custom player engine with 20% credit gate and 95% full-listen verification. Aligns daily check-in boundaries to 03:00 AM Istanbul timezone with a 2-day resilience buffer.',
          tr: '%20 dinleme tamamlama ve %95 tam dinleme doğrulama motoru. Günlük aktivite sınırlarını İstanbul 03:00 zaman dilimine 2 günlük tolerans tamponuyla hizalar.'
        },
        latencyBenchmark: '< 16ms UI frame budget · Zero dropped audio buffers',
        securityBoundary: {
          en: 'Isolated runtime sandbox with biometric unlock support and runtime memory zeroing on lock.',
          tr: 'Biyometrik kilit açma desteği ve kilitlenme anında bellek temizliği sağlayan izole çalışma alanı.'
        },
        tradeoffRationale: {
          en: 'Chose Zustand over Redux Toolkit to eliminate boilerplate and maintain under 2ms state update overhead across complex audio pipelines.',
          tr: 'Gereksiz kod yükünü kaldırmak ve karmaşık ses akışlarında durum güncelleme gecikmesini 2ms altında tutmak için Redux yerine Zustand tercih edildi.'
        },
        techSpecs: ['React Native 0.74+', 'Expo SDK 51', 'Zustand 4.5', 'react-native-track-player'],
        codeSnippet: `// Deterministic Streak Engine (03:00 AM Boundary)
export function calculateStreak(lastCompletedAt: Date, now: Date = new Date()): StreakStatus {
  const boundaryHour = 3; // 03:00 AM Istanbul
  const diffDays = getBusinessDaysDifference(lastCompletedAt, now, boundaryHour);
  if (diffDays === 0) return { status: 'active', currentStreak };
  if (diffDays === 1) return { status: 'at_risk', currentStreak };
  return { status: 'broken', currentStreak: 0 };
}`
      },
      {
        id: 'mb-vault',
        name: 'LocalWellnessRepository (AES Vault)',
        category: 'storage',
        badge: 'Privacy Vault (localOnly: true)',
        title: {
          en: 'On-Device Encrypted Storage Vault',
          tr: 'Cihaz Üzerinde Şifrelenmiş Depolama Kasası'
        },
        role: {
          en: 'Guarantees athlete mood ratings, journal entries, and mental reflections are encrypted locally using AES-256 GCM.',
          tr: 'Sporcu duygu durumu, günlük kayıtları ve zihinsel notlarının AES-256 GCM ile yerel olarak şifrelenmesini garanti eder.'
        },
        description: {
          en: 'Sensitive reflections are written strictly to hardware-backed SecureStore keys with localOnly: true. Cloud sync queries explicitly filter out user journaling data.',
          tr: 'Hassas veriler doğrudan donanım destekli SecureStore anahtarlarıyla yerel diske yazılır. Bulut senkronizasyonunda bu veriler asla iletilmez.'
        },
        latencyBenchmark: '0.8ms local read/write latency · 0 network hops',
        securityBoundary: {
          en: 'Zero-Knowledge to cloud servers. No unencrypted mood logs ever leave the physical mobile hardware.',
          tr: 'Bulut sunucularına karşı Sıfır-Bilgi (Zero-Knowledge). Şifresiz hiçbir duygu kaydı fiziksel cihazı terk etmez.'
        },
        tradeoffRationale: {
          en: 'Sacrificed effortless cross-device cloud sync in exchange for absolute athlete privacy compliance and zero liability.',
          tr: 'Mutlak sporcu gizliliği ve sıfır hukuki sorumluluk sağlamak için cihazlar arası otomatik bulut senkronizasyonundan bilinçli olarak feragat edildi.'
        },
        techSpecs: ['expo-secure-store', 'AES-256-GCM', 'AsyncStorage Encrypted Driver'],
        codeSnippet: `// On-Device Privacy Storage Implementation
export async function persistJournalSecure(entry: AthleteJournal): Promise<void> {
  const key = await getHardwareMasterKey();
  const cipher = aesEncrypt(JSON.stringify(entry), key);
  await SecureStore.setItemAsync(\`journal_\${entry.id}\`, cipher, {
    keychainAccessible: SecureStore.WHEN_UNLOCKED_THIS_DEVICE_ONLY
  });
}`
      },
      {
        id: 'mb-posnet',
        name: 'Posnet Virtual POS & Checkout',
        category: 'gateway',
        badge: 'Turkish Banking Gateway',
        title: {
          en: 'Posnet Gateway & Entitlement Sync',
          tr: 'Posnet Sanal POS & Yetki Senkronizasyonu'
        },
        role: {
          en: 'Handles Turkish lira subscription billing, 3D Secure verification, and instantaneous mobile entitlement unlocking.',
          tr: 'Türk Lirası abonelik tahsilatlarını, 3D Secure doğrulamasını ve anlık mobil yetkilendirmeyi yönetir.'
        },
        description: {
          en: 'Secure server-side proxy handling XML/SOAP payload signatures, idempotency hashes, and encrypted callback hooks triggering Firebase user claim updates.',
          tr: 'XML/SOAP imzalama, idempotency anahtarları ve şifreli geri çağırma kancalarıyla Firebase yetkilendirmesini tetikleyen sunucu taraflı güvenli proxy.'
        },
        latencyBenchmark: '420ms end-to-end transaction confirmation with Yapı Kredi Posnet',
        securityBoundary: {
          en: 'PCI-DSS Level 1 compliant card handling via 3DS redirect, HMAC-SHA256 signature verification.',
          tr: '3DS yönlendirmesiyle PCI-DSS Seviye 1 uyumlu kart işleme ve HMAC-SHA256 imza doğrulaması.'
        },
        tradeoffRationale: {
          en: 'Integrated raw bank POS alongside standard mobile IAP to dramatically improve Turkish market conversion and eliminate 30% app store fees on web enrollments.',
          tr: 'Web kayıtlarında %30 mağaza komisyonunu ortadan kaldırmak ve Türkiye pazarındaki dönüşümü artırmak için doğrudan Posnet entegre edildi.'
        },
        techSpecs: ['Posnet XML API', 'HMAC-SHA256', 'Firebase Admin Custom Claims', 'Cloud Tasks']
      },
      {
        id: 'mb-cicd',
        name: 'EAS Cloud & Fastlane Pipeline',
        category: 'compute',
        badge: 'Automated Release',
        title: {
          en: 'Automated Mobile Release Engine',
          tr: 'Otomatik Mobil Yayın Hattı'
        },
        role: {
          en: 'Single-command task launcher (`mb.sh`) triggering multi-platform builds, provisioning profiles, and direct store distribution.',
          tr: 'Tek komutla (`mb.sh`) çoklu platform derlemelerini, sertifika yönetimini ve mağaza dağıtımını tetikleyen hat.'
        },
        description: {
          en: 'Coordinates iOS TestFlight and Google Play Internal track deployments with semantic versioning, release note generation, and crash symbol mapping.',
          tr: 'Semantik versiyonlama ve çökme sembol haritalaması ile TestFlight ve Google Play dahili test dağıtımlarını koordine eder.'
        },
        latencyBenchmark: '12 min deterministic build time on Expo Application Services (EAS)',
        securityBoundary: {
          en: 'Encrypted Apple Distribution certificates & Google Play keystores managed via isolated vault secrets.',
          tr: 'İzole kasa gizli anahtarlarıyla yönetilen şifrelenmiş Apple Dağıtım sertifikaları ve Keystore dosyaları.'
        },
        tradeoffRationale: {
          en: 'Built custom unified CLI wrappers over raw EAS commands to prevent human error during production hotfixes.',
          tr: 'Üretim ortamı acil yamalarında insan hatasını önlemek için EAS komutları üzerine özel tekil CLI geliştirildi.'
        },
        techSpecs: ['EAS Build', 'Fastlane Match', 'App Store Connect API', 'Google Play API']
      }
    ]
  },
  {
    id: 'beqom-fabric',
    tabTitle: {
      en: '2. beqom Enterprise Fabric',
      tr: '2. beqom Kurumsal Fabric'
    },
    title: {
      en: 'beqom: Microsoft Fabric Lakehouse & Enterprise SaaS Platform',
      tr: 'beqom: Microsoft Fabric Lakehouse & Kurumsal SaaS Platformu'
    },
    tagline: {
      en: '20+ years of data warehousing, SQL performance scaling, OneLake lakehouse sync, and Azure Terraform infrastructure.',
      tr: '20+ yıllık veri ambarı, SQL performans ölçekleme, OneLake senkronizasyonu ve Azure Terraform altyapısı.'
    },
    overview: {
      en: 'Modernizing global multi-tenant compensation platforms processing billions in rewards and bonuses. High-throughput calculation engine tuning combined with Microsoft Fabric analytics workspaces and Customer-Managed Key security.',
      tr: 'Milyarlarca dolarlık ödül ve prim hesaplamalarını yöneten küresel çok kiracılı platformların modernizasyonu. Yüksek işlem hacimli SQL hesaplama optimizasyonu ve Microsoft Fabric OneLake entegrasyonu.'
    },
    nodes: [
      {
        id: 'bf-calculation',
        name: 'High-Volume Calculation Engine',
        category: 'compute',
        badge: 'Core SQL & Engine Tier',
        title: {
          en: 'High-Throughput Calculation Engine',
          tr: 'Yüksek Hacimli Hesaplama Motoru'
        },
        role: {
          en: 'Processes millions of complex enterprise compensation rules, currency conversions, and multi-tier eligibility matrices.',
          tr: 'Milyonlarca karmaşık kurumsal prim kuralını, para birimi dönüşümünü ve çok kademeli hak ediş matrisini işler.'
        },
        description: {
          en: 'Heavily optimized T-SQL stored procedures, temporal tables, in-memory OLTP structures, and parallel partition execution plans eliminating locks under extreme write concurrency.',
          tr: 'Yoğun yazma işlemlerinde kilitlenmeleri önleyen optimize edilmiş T-SQL yordamları, zamansal tablolar ve paralel bölümleme yürütme planları.'
        },
        latencyBenchmark: '< 180ms per 100,000 calculation units · Zero deadlocks in production',
        securityBoundary: {
          en: 'Strict tenant row-level security (RLS), transparent data encryption (TDE), and column-level encryption for PII.',
          tr: 'Kiracı bazlı satır seviyesi güvenlik (RLS), şeffaf veri şifreleme (TDE) ve PII için kolon seviyesi şifreleme.'
        },
        tradeoffRationale: {
          en: 'Maintained core relational calculation semantics while offloading heavy analytic aggregate queries to Fabric OneLake to preserve transactional OLTP throughput.',
          tr: 'İşlemsel OLTP performansını korumak için analitik toplama sorguları Microsoft Fabric OneLake katmanına aktarıldı.'
        },
        techSpecs: ['Azure SQL Database', 'In-Memory OLTP', 'Partitioned Columnstore', 'Query Store Tuning']
      },
      {
        id: 'bf-onelake',
        name: 'Microsoft Fabric OneLake Sync',
        category: 'storage',
        badge: 'Analytics Lakehouse',
        title: {
          en: 'OneLake Delta Parquet Synchronization',
          tr: 'OneLake Delta Parquet Senkronizasyonu'
        },
        role: {
          en: 'Continuous delta feed bridging operational OLTP databases into centralized Microsoft Fabric Lakehouses without ETL lag.',
          tr: 'Operasyonel veritabanlarını ETL gecikmesi olmadan merkezi Microsoft Fabric Lakehouse yapısına bağlayan sürekli delta akışı.'
        },
        description: {
          en: 'Utilizes Change Data Capture (CDC) and Fabric Shortcuts to stream raw transaction logs into Delta Lake format, powering instant executive PowerBI dashboards and ML forecasting.',
          tr: 'CDC ve Fabric Kısayolları ile ham işlem günlüklerini Delta Lake formatında yayınlar, anlık PowerBI panolarını ve yapay zeka tahmin modellerini besler.'
        },
        latencyBenchmark: '< 5-second end-to-end sync latency from transaction commit to OneLake visibility',
        securityBoundary: {
          en: 'Customer-Managed Keys (CMK) via Azure Key Vault with automated key rotation and Azure RBAC segregation.',
          tr: 'Otomatik anahtar rotasyonu ve Azure RBAC ayrıştırması ile Azure Key Vault üzerinden Müşteri Yönetimli Anahtarlar.'
        },
        tradeoffRationale: {
          en: 'Eliminated fragile legacy night-batch ETL jobs in favor of streaming Parquet deltas, cutting analytical latency from 24 hours to sub-10 seconds.',
          tr: '24 saatlik gecikmeli gece ETL paketleri terk edilerek anlık Parquet delta akışına geçildi, raporlama gecikmesi saniyelere indirildi.'
        },
        techSpecs: ['Microsoft Fabric', 'OneLake Delta Lake', 'DirectLake Mode', 'Azure Synapse Pipelines']
      },
      {
        id: 'bf-iac',
        name: 'Azure Terraform Infrastructure',
        category: 'security',
        badge: 'Enterprise IaC',
        title: {
          en: 'Enterprise Cloud Infrastructure as Code',
          tr: 'Kod Olarak Kurumsal Bulut Altyapısı'
        },
        role: {
          en: 'Deterministic multi-region infrastructure provisioning with automated security compliance and network isolation.',
          tr: 'Otomatik güvenlik uyumluluğu ve ağ izolasyonuna sahip çok bölgeli deterministik altyapı kurulumu.'
        },
        description: {
          en: 'Modular Terraform templates deploying private endpoints, VNet peering, Azure Application Gateways, App Services, and centralized Datadog telemetry daemons.',
          tr: 'Özel uç noktalar, VNet eşleme, Azure App Gateway ve Datadog telemetrisi kuran modüler Terraform şablonları.'
        },
        latencyBenchmark: '100% reproducible multi-region environment deployment in under 22 minutes',
        securityBoundary: {
          en: 'Zero public endpoints; all backend tiers strictly accessible via Private Link and Azure Bastion.',
          tr: 'Sıfır genel erişim noktası; tüm arka uç servislerine yalnızca Private Link ve Azure Bastion üzerinden erişim.'
        },
        tradeoffRationale: {
          en: 'Standardized 100% of infrastructure declarations into version-controlled Terraform modules to eradicate configuration drift across staging and production.',
          tr: 'Ortamlar arası yapılandırma kaymalarını yok etmek için tüm altyapı versiyon kontrollü Terraform modüllerine bağlandı.'
        },
        techSpecs: ['Terraform Cloud', 'Azure RM Provider', 'Private Endpoints', 'Datadog Observability']
      }
    ]
  },
  {
    id: 'agentic-factory',
    tabTitle: {
      en: '3. Agentic Software Factory',
      tr: '3. Otonom Yazılım Fabrikası'
    },
    title: {
      en: 'The Agentic Software Factory & Autonomous Loops',
      tr: 'Otonom Yazılım Fabrikası & Ajan Döngüleri'
    },
    tagline: {
      en: 'Autonomous software engineering powered by tilldone non-model verification, vault zero-latency knowledge routing, and CDP tool harnesses.',
      tr: 'tilldone model dışı doğrulama döngüleri, vault sıfır gecikmeli bilgi yönlendirme ve CDP araç harness\'ları ile otonom mühendislik.'
    },
    overview: {
      en: 'Operating on the foundational standard: "Software is never done because an AI thinks it is done—it is done when reality agrees." Eliminates context window degradation via isolated subagent swarms and empirical verification gates.',
      tr: '"Bir yazılım yapay zeka bitti dediği için değil, gerçek dünya doğruladığında bitmiştir" prensibiyle çalışan, izole alt-ajan filoları ve ampirik denetim kapılarıyla bağlam kirliliğini yok eden otonom fabrika.',
    },
    nodes: [
      {
        id: 'af-tilldone',
        name: 'tilldone Non-Model Verification Loop',
        category: 'verification',
        badge: 'Empirical Quality Gate',
        title: {
          en: 'tilldone Autonomous Execution Engine',
          tr: 'tilldone Otonom Yürütme Motoru'
        },
        role: {
          en: 'Enforces external reality checks (compilers, test runners, headless browser screenshots) before accepting completion.',
          tr: 'Tamamlanmayı kabul etmeden önce harici gerçeklik kontrollerini (derleyiciler, test koşucuları, tarayıcı ekran görüntüleri) zorunlu kılar.'
        },
        description: {
          en: 'Replaces hallucinated agent self-evaluations with a strict 5-step non-model test harness. Automatically spins up isolated subagents when regressions occur.',
          tr: 'Yapay zekanın kendi kendini yanıltıcı doğrulamasını 5 adımlı harici test harness\'ı ile değiştirir. Hata durumunda taze alt-ajanlar başlatır.'
        },
        latencyBenchmark: 'Sub-second regression detection · 0% hallucinated completions permitted',
        securityBoundary: {
          en: 'Runs inside sandboxed workspace worktrees with zero write access to parent repository credentials.',
          tr: 'Ana depo kimlik bilgilerine erişimi olmayan kum havuzu çalışma alanlarında çalışır.'
        },
        tradeoffRationale: {
          en: 'Requires extra deterministic compute for continuous builds, but completely eliminates broken deployments and manual bug hunting.',
          tr: 'Sürekli derleme için ek hesaplama gücü harcar, ancak hatalı dağıtımları ve manuel hata ayıklama ihtiyacını tamamen ortadan kaldırır.'
        },
        techSpecs: ['TypeScript', 'Node.js 22', 'CDP 9222 Protocol', 'Jest / Vitest Runners'],
        codeSnippet: `// tilldone Quality Gate Verification Loop
export async function verifyQualityGate(gate: QualityGate): Promise<GateResult> {
  const buildStatus = await runProcess('npm run build');
  if (buildStatus.code !== 0) return { passed: false, error: buildStatus.stderr };
  
  const cdpCheck = await inspectHeadlessBrowserDOM('http://localhost:3000');
  if (cdpCheck.consoleErrors.length > 0) return { passed: false, error: cdpCheck.consoleErrors };
  
  return { passed: true, verifiedAt: new Date() };
}`
      },
      {
        id: 'af-vault',
        name: 'vault Zero-Latency Knowledge Gateway',
        category: 'storage',
        badge: 'Deterministic Knowledge Index',
        title: {
          en: 'vault CLI Cognitive Index',
          tr: 'vault CLI Bilişsel Dizin Kapısı'
        },
        role: {
          en: 'Maps developer intent to hard-won lessons, architectural playbooks, and mental models without token context pollution.',
          tr: 'Geliştirici niyetini token bağlam kirliliği yaratmadan mimari kılavuzlara ve deneyim kayıtlarına doğrudan haritalar.'
        },
        description: {
          en: 'Lightweight CLI indexing system providing deterministic <15ms retrieval of decision heuristics, anti-patterns, and project-specific invariants.',
          tr: 'Karar kuralları, anti-desenler ve projeye özgü sabitlerin <15ms içinde deterministik olarak getirilmesini sağlayan hafif CLI dizinleme motoru.'
        },
        latencyBenchmark: '< 14ms query retrieval time · Zero vector embedding drift',
        securityBoundary: {
          en: 'Completely local markdown & SQLite index; zero external cloud API telemetry.',
          tr: 'Tamamen yerel markdown ve SQLite dizini; dışarıya sıfır API veri aktarımı.'
        },
        tradeoffRationale: {
          en: 'Chose deterministic tree indices over fuzzy vector RAG to eliminate probabilistic hallucination in critical architectural rules.',
          tr: 'Kritik mimari kurallarda olasılıksal sapmaları ve uydurmayı önlemek için vektör RAG yerine deterministik ağaç dizinleri seçildi.'
        },
        techSpecs: ['Rust / TypeScript CLI', 'SQLite FTS5', 'Markdown AST Parser']
      },
      {
        id: 'af-cdp',
        name: 'Headless CDP Tool Harness',
        category: 'compute',
        badge: 'Chrome DevTools Protocol Daemon',
        title: {
          en: 'Headless Chrome DevTools Protocol Daemon',
          tr: 'Başsız Chrome DevTools Protocol Daemon\'ı'
        },
        role: {
          en: 'Provides agents with persistent authenticated browser interactions, eliminating fragile HTML scrapers.',
          tr: 'Ajanlara kırılgan HTML kazıyıcılar yerine kalıcı kimlik doğrulamalı tarayıcı etkileşimi sağlar.'
        },
        description: {
          en: 'Direct TCP socket connection on port 9222 managing user profile directories, DOM snapshotting, network request interception, and real-time visual accessibility audits.',
          tr: 'Port 9222 üzerinden doğrudan TCP soket bağlantısı ile profil dizinlerini, DOM anlık görüntülerini ve ağ isteklerini yönetir.'
        },
        latencyBenchmark: '45ms DOM tree extraction & layout tree snapshot',
        securityBoundary: {
          en: 'Local socket binding only (`127.0.0.1:9222`); sandbox isolated user data directories.',
          tr: 'Yalnızca yerel soket bağlama (`127.0.0.1:9222`); izole kullanıcı veri dizinleri.'
        },
        tradeoffRationale: {
          en: 'Using direct CDP sockets is faster and far more reliable than heavy Puppeteer/Selenium wrappers, with 80% less memory footprint.',
          tr: 'Ağır Puppeteer/Selenium kütüphaneleri yerine doğrudan CDP soketleri kullanılarak bellek tüketimi %80 azaltıldı ve hız katlandı.'
        },
        techSpecs: ['Chrome CDP Protocol', 'WebSocket / Unix Sockets', 'A11y Accessibility Tree']
      }
    ]
  }
];

export function highlightCodeSyntax(code: string): string {
  if (!code) return '';

  const escapeHtml = (str: string) =>
    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const tokenRegex = /(\/\/[^\n]*)|('(?:\\'|[^'\n])*'|"(?:\\"|[^"\n])*"|`(?:\\`|[^`])*`)|(\b(?:const|let|var|function|return|async|await|import|from|export|class|interface|type|if|else|try|catch|new|typeof|SELECT|FROM|WHERE|JOIN|CREATE|TABLE|MERGE|INTO)\b)|(\b(?:true|false|null|undefined)\b)|(\b\d+(?:\.\d+)?\b)/g;

  let result = '';
  let lastIndex = 0;

  for (const match of code.matchAll(tokenRegex)) {
    const matchIndex = match.index ?? 0;
    if (matchIndex > lastIndex) {
      result += escapeHtml(code.slice(lastIndex, matchIndex));
    }

    const [fullMatch, comment, str, keyword, bool, num] = match;

    if (comment) {
      result += `<span class="tok-comment">${escapeHtml(comment)}</span>`;
    } else if (str) {
      result += `<span class="tok-string">${escapeHtml(str)}</span>`;
    } else if (keyword) {
      result += `<span class="tok-keyword">${escapeHtml(keyword)}</span>`;
    } else if (bool) {
      result += `<span class="tok-boolean">${escapeHtml(bool)}</span>`;
    } else if (num) {
      result += `<span class="tok-number">${escapeHtml(num)}</span>`;
    }

    lastIndex = matchIndex + fullMatch.length;
  }

  if (lastIndex < code.length) {
    result += escapeHtml(code.slice(lastIndex));
  }

  return result;
}
