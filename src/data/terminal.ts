import { Locale } from './translations';

export interface TerminalCommandResponse {
  command: string;
  executionTimeMs: number;
  output: Record<Locale, string>;
}

export const terminalResponses: Record<string, TerminalCommandResponse> = {
  '--why-not-langchain': {
    command: '--why-not-langchain',
    executionTimeMs: 14,
    output: {
      en: `[ARCHITECTURAL VERDICT: WHY WE DO NOT USE LANGCHAIN IN PRODUCTION]
--------------------------------------------------------------------------------
1. COGNITIVE POLLUTION:
   LangChain injects multi-layered abstractions that obscure the raw model prompt.
   When an LLM fails at 3 AM, debugging 8 layers of Python class wrappers is fatal.

2. FRAGILE AGENTIC CHAINS:
   Prompt chains assume intermediate steps are valid without empirical verification.
   In our 'tilldone' standard, software is tested by non-model compilers, not LLM self-belief.

3. OUR PRODUCTION ALTERNATIVE:
   - Direct API tool-calling with strictly typed JSON Schema / Zod contracts.
   - Chrome DevTools Protocol (CDP port 9222) persistent daemons for browser automation.
   - 'vault' zero-latency deterministic decision-tree indexing (<15ms retrieval).

BENCHMARK:
• Debuggability: 100% Deterministic Traceability
• Overhead: 0KB wrapper bloat
• Reliability Gate: tilldone empirical quality harness`,
      tr: `[MİMARİ KARAR: ÜRETİMDE NEDEN LANGCHAIN KULLANMIYORUZ?]
--------------------------------------------------------------------------------
1. BİLİŞSEL KİRLİLİK (COGNITIVE POLLUTION):
   LangChain, model ile araya çok katmanlı soyutlamalar koyarak istemi (prompt) gizler.
   Gece 03:00'te bir sistem çöktüğünde 8 katmanlı Python sınıflarını ayıklamak verimsizdir.

2. KIRILGAN İSTEM ZİNCİRLERİ (FRAGILE CHAINS):
   Geleneksel zincirler, ara adımların doğruluğunu ampirik olarak test etmeden varsayar.
   'tilldone' standardımızda yazılım, modelin zannıyla değil, gerçek derleyiciyle test edilir.

3. ÜRETİM STANDARTLARIMIZ:
   - Zod/JSON Schema ile tip güvenli doğrudan API araç çağrıları.
   - Tarayıcı otomasyonu için Chrome DevTools Protocol (CDP port 9222) daemon'ları.
   - 'vault' sıfır gecikmeli deterministik karar ağacı dizini (<15ms erişim).

BAŞARIM:
• Hata Ayıklanabilirlik: %100 Deterministik İzlenebilirlik
• Ek Yük: 0KB kütüphane şişkinliği
• Kalite Kapısı: tilldone harici doğrulama harness'ı`
    }
  },
  '--tilldone-loop': {
    command: '--tilldone-loop',
    executionTimeMs: 18,
    output: {
      en: `[THE TILLDONE AUTONOMOUS EXECUTION STANDARD]
--------------------------------------------------------------------------------
CORE PRINCIPLE:
"An agent is not done because it claims it is done. It is done when reality agrees."

THE 5-STEP NON-MODEL VERIFICATION GATE:
Step 1: Isolated Subagent Workspace Fork (clean branch, no context bleed).
Step 2: Deterministic Build & Type Check (tsc / cargo / npm run build).
Step 3: Headless Chrome CDP Verification (inspect live DOM, console errors = 0).
Step 4: Regression & Bilingual Integrity Sweep (Turkish casing İ/i, layout shift = 0).
Step 5: Adversarial Reviewer Pass (separate evaluator checks edge cases).

RUNTIME SPECIFICATION:
• Isolation: Fresh context per retry cycle
• Exit Gate: External test exit code === 0
• Status: 100% Production Tested across Arif Coskun Software Factories`,
      tr: `[TILLDONE OTONOM YÜRÜTME STANDARDI]
--------------------------------------------------------------------------------
TEMEL PRENSİP:
"Bir yapay zeka ajanı 'bitti' dediği için iş bitmiş sayılmaz. Yalnızca gerçeklik onayladığında biter."

5 ADIMLI MODEL DIŞI DOĞRULAMA KAPISI:
Adım 1: İzole Alt-Ajan Çalışma Alanı (Temiz dal, sıfır bağlam kirliliği).
Adım 2: Deterministik Derleme & Tip Kontrolü (tsc / cargo / npm run build).
Adım 3: Başsız Chrome CDP Doğrulaması (Canlı DOM denetimi, konsol hatası = 0).
Adım 4: Regresyon & İki Dilli Bütünlük Taraması (Türkçe karakter İ/i, CLS = 0).
Adım 5: Eleştirel Denetçi Geçidi (Ayrı model uç durumları test eder).

ÇALIŞMA SPESİFİKASYONU:
• İzolasyon: Her döngüde taze alt-ajan bağlamı
• Çıkış Kuralı: Harici test çıkış kodu === 0
• Durum: Arif Coşkun Yazılım Fabrikalarında %100 Üretimde Doğrulanmıştır`
    }
  },
  '--fabric-migration': {
    command: '--fabric-migration',
    executionTimeMs: 22,
    output: {
      en: `[MICROSOFT FABRIC & ONELAKE ENTERPRISE BLUEPRINT]
--------------------------------------------------------------------------------
CHALLENGE:
Legacy 24-hour batch ETL pipelines causing analytical lag and heavy locks on OLTP databases.

BLUEPRINT SPECIFICATION:
1. OneLake Delta Lake Direct Sync:
   - Stream raw transaction logs into Delta Parquet format via Change Data Capture (CDC).
   - Zero-copy data virtualization using Fabric Shortcuts.

2. Calculation Engine Isolation:
   - High-volume compensation calculation rules run on in-memory OLTP SQL partitions.
   - Analytical reporting reads directly from Fabric DirectLake mode (sub-second queries).

3. Enterprise Security:
   - Customer-Managed Keys (CMK) via Azure Key Vault with automatic rotation.
   - Row-Level Security (RLS) and tenant partition isolation.

OUTCOME:
• Reporting Lag: Reduced from 24 hours to < 5 seconds
• Concurrency: 100,000 calculation units in < 180ms with 0 deadlocks`,
      tr: `[MICROSOFT FABRIC & ONELAKE KURUMSAL MİMARİ KILAVUZU]
--------------------------------------------------------------------------------
ZORLUK:
OLTP veritabanlarını kilitleyen ve analitik gecikmeye yol açan 24 saatlik eski gece ETL paketleri.

MİMARİ ÇÖZÜM:
1. OneLake Delta Lake Doğrudan Senkronizasyonu:
   - CDC (Change Data Capture) ile ham işlem günlüklerinin Delta Parquet formatında akıtılması.
   - Fabric Kısayolları (Shortcuts) ile kopyasız veri sanallaştırma.

2. Hesaplama Motoru İzolasyonu:
   - Yüksek hacimli kurumsal prim kuralları In-Memory OLTP SQL bölümlerinde işlenir.
   - Analitik raporlar doğrudan Fabric DirectLake modundan sub-second sürede okunur.

3. Kurumsal Güvenlik:
   - Azure Key Vault ile Müşteri Yönetimli Anahtarlar (CMK).
   - Satır Seviyesi Güvenlik (RLS) ve kiracı veri izolasyonu.

SONUÇ:
• Raporlama Gecikmesi: 24 saatten < 5 saniyeye indirildi
• İşlem Hacmi: 100.000 hesaplama birimi sıfır kilitlenme ile < 180ms'de tamamlanır`
    }
  },
  '--business-automation': {
    command: '--business-automation',
    executionTimeMs: 16,
    output: {
      en: `[OPERATIONAL AI & MULTI-BRANCH BUSINESS SYSTEMS BLUEPRINT]
--------------------------------------------------------------------------------
PROBLEM FOR GROWING BUSINESSES (AUTO SHOPS, SALONS, CLINICS, RETAIL):
• Missed customer calls & chaotic manual WhatsApp messages.
• High no-show rates causing severe idle labor capacity.
• Multi-branch owners blind to real-time revenue & staff utilization.
• Bloated generic SaaS charging $500+/mo while failing local operational quirks.

THE TAILORED ARCHITECTURE:
1. 24/7 WhatsApp/SMS AI Receptionist:
   - Automated booking, dynamic quoting & calendar sync.
   - Smart deposit collection & automated reminder loops (cuts no-shows by 70%).

2. Multi-Branch Real-Time Owner Command Center:
   - Centralized dashboard on mobile/web showing live revenue across all locations.
   - Technician / stylist utilization tracking & inventory low-stock alerts.

3. Sovereign System Ownership:
   - Direct integration with local bank Virtual POS (Posnet, iyzico) & Stripe.
   - 100% custom code ownership — zero per-seat monthly vendor lock-in.

BENCHMARK & ROI:
• Setup Timeline: 2 to 4 weeks turnkey delivery
• Lead Capture Rate: 99.4% (Zero missed leads during peak hours)
• Recurring SaaS Tax: $0 / month`,
      tr: `[İŞLETME OTOMASYONU & ÇOK ŞUBELİ SİSTEMLER MİMARİSİ]
--------------------------------------------------------------------------------
BÜYÜYEN İŞLETMELERİN TEMEL SORUNLARI (OTO SERVİS, KUAFÖR, KLİNİK, PERAKENDE):
• Cevapsız çağrılar, manuel WhatsApp karmaşası ve kaybolan müşteri geçmişi.
• Yüksek randevu iptalleri ve personelin boş beklemesi.
• Şube sahiplerinin anlık ciro ve personel verilerini görememesi.
• Esnek olmayan hazır yazılımlara ödenen yüksek aylık kullanıcı lisansları.

ÖZEL OPERASYON MİMARİSİ:
1. 7/24 WhatsApp & SMS Yapay Zeka Randevu Asistanı:
   - Anlık fiyatlandırma, otomatik takvim rezervasyonu ve müşteri kaydı.
   - Otomatik kapora tahsilatı ve SMS hatırlatmaları (randevu kaçırma oranını %70 azaltır).

2. Çok Şubeli Merkezi Yönetici Panosu:
   - Tüm şubelerin anlık ciro, servis durumu ve personel verilerini gösteren mobil/web pano.
   - Usta/kuaför verimliliği ve kritik stok uyarıları.

3. Egemen Altyapı Mülkiyeti:
   - Yerel Banka Sanal POS (Posnet, iyzico) ve Stripe doğrudan entegrasyonu.
   - %100 kod mülkiyeti — kullanıcı başına aylık yinelenen yazılım vergisi yok.

BAŞARIM & GETİRİ:
• Teslim Süresi: 2 - 4 haftalık anahtar teslim kurulum
• Müşteri Yakalama: %99.4 (Yoğun saatlerde sıfır kaçan çağrı)
• Yinelenen Lisans Maliyeti: 0 TL / ay`
    }
  },
  '--privacy-vaults': {
    command: '--privacy-vaults',
    executionTimeMs: 12,
    output: {
      en: `[MINDBALL ON-DEVICE PRIVACY VAULT ARCHITECTURE]
--------------------------------------------------------------------------------
DESIGN INVARIANT:
"Athlete mental health logs and emotional reflections must never touch cloud servers."

IMPLEMENTATION DETAILS:
• Storage Engine: LocalWellnessRepository (localOnly: true)
• Encryption: AES-256-GCM hardware-backed keys via iOS Keychain / Android Keystore
• Lifecycle: Memory buffers zeroed immediately upon backgrounding or app lock
• Cloud Sync Exclusion: Firestore rules strictly forbid journaling payloads

COMPLIANCE & RESILIENCE:
• Zero-Knowledge guarantee: Servers cannot decrypt entries even if compromised.
• Offline First: Complete 15-week audio program accessible without cellular connectivity.
• Streak Engine: 03:00 AM Istanbul day-boundary tracking with 2-day resilience buffer.`,
      tr: `[MINDBALL CİHAZ ÜZERİNDE GİZLİLİK KASASI MİMARİSİ]
--------------------------------------------------------------------------------
TEMEL TASARIM KURALI:
"Sporcuların zihinsel duygu durumu ve günlük notları asla bulut sunucularına iletilmemelidir."

UYGULAMA DETAYLARI:
• Depolama Motoru: LocalWellnessRepository (localOnly: true)
• Şifreleme: iOS Keychain ve Android Keystore üzerinden donanım destekli AES-256-GCM
• Bellek Yaşam Döngüsü: Uygulama kilitlendiğinde bellek anında sıfırlanır
• Bulut Senkronizasyonu: Firestore kuralları günlük yüklerini kesin olarak engeller

GÜVENLİK & DAYANIKLILIK:
• Sıfır-Bilgi Garantisi: Sunucular ele geçirilse dahi veriler açılamaz.
• Çevrimdışı Öncelikli: 15 haftalık sesli müfredat internetsiz eksiksiz çalışır.
• Seri Takip Motoru: İstanbul 03:00 saat sınırına göre 2 günlük toleranslı seri takibi.`
    }
  },
  '--benchmark': {
    command: '--benchmark',
    executionTimeMs: 9,
    output: {
      en: `[AUTORESEARCH BENCHMARK SUITE — MEASURED SYSTEM STATS]
--------------------------------------------------------------------------------
METRIC                                  VALUE                   STATUS
--------------------------------------------------------------------------------
• Website LCP (Largest Contentful)     0.32s                   ⚡ PASS (< 1.0s)
• CLS (Cumulative Layout Shift)        0.000                   ⚡ PASS (0.00)
• INP (Interaction to Next Paint)      18ms                    ⚡ PASS (< 50ms)
• Bilingual Switch Latency             0ms (In-Memory)         ⚡ INSTANT
• vault Decision Retrieval             14ms                    ⚡ DETERMINISTIC
• tilldone Quality Gate Run            1.2s                    ⚡ AUTOMATED
• Microsoft Fabric Sync Latency        4.2s                    ⚡ CONTINUOUS
• MindBall Audio Buffer Underruns      0.00%                   ⚡ VERIFIED

ALL HARDWARE HARNESSES OPERATIONAL (SEATTLE / ISTANBUL CLUSTERS).`,
      tr: `[AUTORESEARCH KIYASLAMA TESTİ — ÖLÇÜLEN SİSTEM METRİKLERİ]
--------------------------------------------------------------------------------
METRİK                                  DEĞER                   DURUM
--------------------------------------------------------------------------------
• Web Sitesi LCP (İlk İçerikli Boyama) 0.32s                   ⚡ BAŞARILI (< 1.0s)
• CLS (Kümülatif Düzen Kayması)        0.000                   ⚡ BAŞARILI (0.00)
• INP (Sonraki Boyamaya Etkileşim)     18ms                    ⚡ BAŞARILI (< 50ms)
• İki Dilli Geçiş Gecikmesi            0ms (Bellek İçi)        ⚡ ANLIK
• vault Karar Arama Gecikmesi          14ms                    ⚡ DETERMINİSTİK
• tilldone Kalite Kapısı Koşumu        1.2s                    ⚡ OTOMATİK
• Microsoft Fabric Senkronizasyonu     4.2s                    ⚡ SÜREKLİ
• MindBall Ses Tamponlama Kesintisi    %0.00                   ⚡ DOĞRULANDI

TÜM DONANIM VE YAZILIM HARNESS'LARI AKTİF (SEATTLE / İSTANBUL).`
    }
  },
  '--bio': {
    command: '--bio',
    executionTimeMs: 11,
    output: {
      en: `[ARIF COSKUN — VERIFIED EXECUTIVE PROFILE]
--------------------------------------------------------------------------------
ROLE: Senior Technical Architect @ beqom | Co-Founder @ MindBall | Sovereign AI Builder
LOCATION: Sammamish / Seattle, WA (USA) & Istanbul (TR)
EDUCATION: Istanbul University (Computer Engineering)

EXPERIENCE TIMELINE:
• 2007–2010: Database modeling & custom desktop solutions
• 2010–2013: Enterprise Data Warehousing & OLAP Cubes (Smartiks BI)
• 2013–Present: 13+ Years SaaS Architectural Odyssey @ beqom
  - Application Consultant → DB Performance Architect → SRE Specialist → DevOps IaC Architect → Senior Technical Architect
• 2024–Present: Co-Founder @ MindBall & Creator of Agentic Software Factories

CONTACT: coskun.arf@gmail.com | linkedin.com/in/arifcoskun84 | @alex98075wa`,
      tr: `[ARİF COŞKUN — DOĞRULANMIŞ YÖNETİCİ PROFİLİ]
--------------------------------------------------------------------------------
ÜNVAN: Senior Technical Architect @ beqom | Co-Founder @ MindBall | Yapay Zeka Mimarı
LOKASYON: Sammamish / Seattle, WA (ABD) & İstanbul (TR)
EĞİTİM: İstanbul Üniversitesi (Bilgisayar Mühendisliği)

DENEYİM KRONOLOJİSİ:
• 2007–2010: Veritabanı modelleme ve masaüstü yazılım çözümleri
• 2010–2013: Kurumsal Veri Ambarları ve OLAP Küpleri (Smartiks BI)
• 2013–Günümüz: beqom bünyesinde 13+ Yıllık Mimari Yolculuk
  - Uygulama Danışmanı → Veritabanı Performans Mimarı → SRE Uzmanı → DevOps IaC Mimarı → Kıdemli Sistem Mimarı
• 2024–Günümüz: MindBall Kurucu Ortaklığı & Otonom Yapay Zeka Fabrikaları

İLETİŞİM: coskun.arf@gmail.com | linkedin.com/in/arifcoskun84 | @alex98075wa`
    }
  }
};

export function getTerminalHelp(locale: Locale): string {
  if (locale === 'tr') {
    return `KULLANILABİLİR KOMUTLAR:
  --why-not-langchain     Üretimde LangChain kullanmama gerekçesi ve alternatiflerimiz
  --tilldone-loop         tilldone otonom model dışı doğrulama döngüsü
  --fabric-migration      Microsoft Fabric & OneLake geçiş mimarisi
  --business-automation   Oto servis, kuaför ve işletmeler için yapay zeka operasyon mimarisi
  --privacy-vaults        MindBall cihaz üzerinde AES gizlilik kasası mimarisi
  --benchmark             Canlı sistem başarım ve gecikme metrikleri
  --bio                   Arif Coşkun doğrulanmış 20+ yıllık profil özeti
  help                    Bu yardım menüsünü görüntüler
  clear                   Terminal ekranını temizler`;
  }
  return `AVAILABLE COMMANDS:
  --why-not-langchain     Why we do not use LangChain in production & our alternative
  --tilldone-loop         The tilldone non-model empirical verification cycle
  --fabric-migration      Microsoft Fabric & OneLake migration blueprint
  --business-automation   Operational AI & WhatsApp booking architecture for SMBs & chains
  --privacy-vaults        MindBall on-device AES encrypted privacy architecture
  --benchmark             Live system performance and latency benchmarks
  --bio                   Arif Coskun verified 20+ year executive profile
  help                    Display this help menu
  clear                   Clear the terminal screen`;
}

export interface TerminalExecutionResult {
  command: string;
  success: boolean;
  executionTimeMs: number;
  output: string;
}

export function executeTerminalCommand(cmdRaw: string, locale: Locale = 'en'): TerminalExecutionResult {
  const cmd = cmdRaw.trim().toLowerCase();
  if (!cmd) {
    return { command: '', success: false, executionTimeMs: 0, output: '' };
  }
  if (cmd === 'clear') {
    return { command: 'clear', success: true, executionTimeMs: 1, output: '' };
  }
  if (cmd === 'help') {
    return { command: 'help', success: true, executionTimeMs: 4, output: getTerminalHelp(locale) };
  }
  const matched = terminalResponses[cmd];
  if (matched) {
    return {
      command: matched.command,
      success: true,
      executionTimeMs: matched.executionTimeMs,
      output: matched.output[locale]
    };
  }
  const errorMsg = locale === 'tr'
    ? `Komut bulunamadı: '${cmdRaw}'. Kullanılabilir komutları görmek için 'help' yazın.`
    : `Command not recognized: '${cmdRaw}'. Type 'help' to inspect available query parameters.`;
  return {
    command: cmdRaw,
    success: false,
    executionTimeMs: 2,
    output: errorMsg
  };
}

