import { Locale } from './translations';

export interface VaultEssay {
  id: string;
  category: string;
  readTimeMin: number;
  publishedDate: string;
  title: Record<Locale, string>;
  subtitle: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  contentHtml: Record<Locale, string>;
}

export const vaultEssays: VaultEssay[] = [
  {
    id: 'high-truth-standard',
    category: 'Autonomous AI & Verification',
    readTimeMin: 5,
    publishedDate: 'August 2026',
    title: {
      en: 'The High-Truth Standard: Why AI Agents Are Never "Done" Until Reality Agrees',
      tr: 'Yüksek Doğruluk Standardı: Bir Yapay Zeka Ajanı Gerçeklik Doğrulamadan Neden Asla "Bitmiş" Sayılmaz?'
    },
    subtitle: {
      en: 'Why prompt wrappers fail in production, and how non-model verification loops eliminate hallucinations in agentic software engineering.',
      tr: 'İstem şablonlarının üretimde çökme nedenleri ve model dışı doğrulama döngülerinin otonom yazılım mühendisliğindeki kritik rolü.'
    },
    excerpt: {
      en: 'The AI era is plagued by a dangerous illusion: an LLM outputs clean-looking code, confirms it completed the task, and the developer believes it. In production, this creates catastrophic technical debt.',
      tr: 'Yapay zeka çağı tehlikeli bir yanılsamayla dolu: Model temiz görünen bir kod üretiyor, görevi tamamladığını söylüyor ve yazılımcı buna inanıyor. Üretim ortamında bu durum büyük riskler doğurur.'
    },
    contentHtml: {
      en: `
<p class="essay-lead">The AI industry is trapped in an epidemic of statistical optimism. An autonomous agent writes 400 lines of code, outputs a polite summary declaring <em>"I have successfully implemented the requested feature,"</em> and developer teams push the commit—only to watch production crash 20 minutes later.</p>

<h3>The Core Failure: Correlated Self-Evaluation</h3>
<p>When you ask an LLM whether its own code works, you are asking a probabilistic prediction engine to evaluate its own prediction. The probability distribution that generated the subtle bug is the exact same distribution evaluating whether the bug exists. This is why self-reflective prompting alone will never reach production-grade reliability.</p>

<h3>The tilldone Non-Model Verification Rule</h3>
<p>To eliminate this failure mode in my autonomous software factories, I established a simple, non-negotiable invariant:</p>
<blockquote><strong>"Software is never done because an AI thinks it is done. It is done only when an external, non-correlated physical system proves it works."</strong></blockquote>

<p>In our architecture, an agent's turn does not end with a text response. It ends only when our <strong>5-step verification gate</strong> satisfies physical exit codes:</p>
<ol>
  <li><strong>Compiler & Type Safety:</strong> <code>tsc --noEmit</code> or <code>cargo check</code> exits with code <code>0</code>.</li>
  <li><strong>Automated Test Suites:</strong> Deterministic unit and integration tests pass without mocks masking integration failures.</li>
  <li><strong>Headless CDP Browser Verification:</strong> A persistent Chrome DevTools Protocol instance launches, navigates the live DOM, captures layout trees, and verifies zero unhandled console errors.</li>
  <li><strong>Bilingual & Casing Invariants:</strong> Turkish locale transformation (<code>İ/i</code> vs <code>I/ı</code>) and layout shift benchmarks (<code>CLS === 0.00</code>) pass strict assertions.</li>
  <li><strong>Adversarial Reviewer:</strong> A separate agent with an adversarial prompt attempts to break edge cases before the branch merges.</li>
</ol>

<h3>The Outcome</h3>
<p>By delegating verification to deterministic external harnesses rather than probabilistic models, autonomous software engineering shifts from a fragile gamble into a predictable, industrial-grade software factory.</p>
`,
      tr: `
<p class="essay-lead">Yapay zeka sektörü tehlikeli bir istatistiksel iyimserlik salgınıyla karşı karşıya. Bir otonom ajan 400 satır kod yazıyor, ardından <em>"İstenen özelliği başarıyla geliştirdim"</em> şeklinde kibar bir özet sunuyor ve yazılım ekipleri bu koda güveniyor—ta ki 20 dakika sonra sistem canlıda çökene kadar.</p>

<h3>Temel Hata: Kendi Kendini Yanıltıcı Değerlendirme</h3>
<p>Bir yapay zekaya kendi yazdığı kodun çalışıp çalışmadığını sorduğunuzda, olasılıksal bir tahmin motorundan yine kendi tahminini doğrulamasını istersiniz. O koddaki hatayı üreten olasılık dağılımı, hatanın varlığını inceleyen dağılım ile tamamen aynıdır. İşte bu yüzden yalnızca modele dayalı "kendi kendini denetleme" istemleri asla üretim seviyesinde güvenilirlik sağlayamaz.</p>

<h3>tilldone Model Dışı Doğrulama Standardı</h3>
<p>Kendi otonom yazılım fabrikalarımda bu tıkanıklığı yok etmek için tavizsiz bir kural koydum:</p>
<blockquote><strong>"Bir yazılım, yapay zeka bittiğini düşündüğü için bitmiş sayılmaz. Yalnızca model dışı harici bir fiziksel sistem bunu doğruladığında bitmiştir."</strong></blockquote>

<p>Geliştirdiğimiz mimaride bir ajanın görevi metin üretmesiyle bitmez. Yalnızca <strong>5 adımlı harici doğrulama kapısı</strong> sıfır hata kodu (exit code 0) döndürdüğünde tamamlanır:</p>
<ol>
  <li><strong>Derleyici ve Tip Güvenliği:</strong> <code>tsc --noEmit</code> veya derleyici kontrolleri sıfır hata ile tamamlanır.</li>
  <li><strong>Otomatik Test Paketleri:</strong> Gerçek entegrasyon testleri başarıyla sonuçlanır.</li>
  <li><strong>Başsız Chrome CDP Denetimi:</strong> Kalıcı Chrome DevTools Protocol daemon'ı canlı DOM ağacını inceler ve konsol hatalarının <code>0</code> olduğunu doğrular.</li>
  <li><strong>İki Dilli Karakter Bütünlüğü:</strong> Türkçe büyük/küçük harf dönüşümleri (<code>İ/i</code> ve <code>I/ı</code>) ve düzen kayması (<code>CLS === 0.00</code>) test edilir.</li>
  <li><strong>Eleştirel Denetçi Geçidi:</strong> İzole ikinci bir model uç senaryoları zorlayarak sistemi teste tabi tutar.</li>
</ol>

<h3>Sonuç</h3>
<p>Doğrulama yükünü olasılıksal modellerden alıp deterministik harici araçlara verdiğimizde, otonom yazılım geliştirme kırılgan bir şans oyunundan çıkıp endüstriyel bir yazılım fabrikasına dönüşür.</p>
`
    }
  },
  {
    id: 'architecting-mindball-privacy',
    category: 'Mobile Security & Architecture',
    readTimeMin: 6,
    publishedDate: 'July 2026',
    title: {
      en: 'Architecting MindBall: Keeping Athlete Mental Health Data Encrypted On-Device',
      tr: 'MindBall Mimarisi: Sporcuların Zihinsel Sağlık Verilerini Cihaz Üzerinde Şifreli Tutmak'
    },
    subtitle: {
      en: 'How we engineered an offline-first, Zero-Knowledge mobile architecture with React Native and hardware-backed keystores.',
      tr: 'React Native ve donanım destekli anahtar kasalarıyla Sıfır-Bilgi (Zero-Knowledge) mobil gizlilik mimarisini nasıl kurduk?'
    },
    excerpt: {
      en: 'When competitive athletes write candid journal entries about performance anxiety, pre-match fear, and mental blocks, cloud storage is a catastrophic liability. Here is how we solved it.',
      tr: 'Profesyonel sporcular maç öncesi kaygılarını, korkularını ve zihinsel engellerini günlüğe dökerken bu verilerin bulutta saklanması büyük bir risk oluşturur. İşte geliştirdiğimiz mimari çözüm.'
    },
    contentHtml: {
      en: `
<p class="essay-lead">In elite athletics, psychological vulnerability is competitive data. An athlete documenting doubts before a championship final cannot tolerate the risk of team management, coaches, or third-party cloud breaches exposing their raw reflections.</p>

<h3>The Architectural Invariant: localOnly: true</h3>
<p>When co-founding MindBall, we established a strict security boundary: while audio curriculum entitlements and streak counts sync to Firebase, <strong>all emotional journal entries, mood scores, and dream manifest notes are bound exclusively to the physical device.</strong></p>

<h3>How LocalWellnessRepository Operates</h3>
<p>We designed the <code>LocalWellnessRepository</code> layer with three core pillars:</p>
<ul>
  <li><strong>Hardware-Backed AES-256-GCM:</strong> Encryption keys are generated inside iOS Secure Enclave and Android Keystore, accessible only when the device is actively unlocked by the user (<code>WHEN_UNLOCKED_THIS_DEVICE_ONLY</code>).</li>
  <li><strong>Zero Cloud Telemetry:</strong> Firestore security rules and backend functions explicitly reject any payload schemas containing journal attributes, preventing accidental transmission even during app upgrades.</li>
  <li><strong>Instant Memory Zeroing:</strong> When the mobile app enters the background state, decrypted memory buffers are wiped immediately from RAM.</li>
</ul>

<h3>The 03:00 AM Istanbul Day-Boundary Engine</h3>
<p>Athletes often train late into the evening. Standard midnight streak resets punish athletes who complete their reflection at 12:30 AM. We engineered a deterministic streak calculation engine anchored to a 03:00 AM local day boundary with a 2-day resilience buffer (tolerating a 1-day skip with an <code>'at_risk'</code> state before resetting).</p>

<p>The result is a mobile product that provides elite sports psychologists with total confidence and athletes with absolute data sovereignty.</p>
`,
      tr: `
<p class="essay-lead">Profesyonel sporda zihinsel kırılganlık, en kritik rekabet verisidir. Şampiyonluk maçı öncesinde yaşadığı şüpheleri günlüğe kaydeden bir sporcu, bu kayıtların kulüp yönetimi, antrenörler veya bir bulut sızıntısı tarafından görülme riskini asla kabul etmez.</p>

<h3>Temel Mimari Kural: localOnly: true</h3>
<p>MindBall'u kurarken tavizsiz bir güvenlik sınırı çizdik: Sesli müfredat yetkileri ve seri sayıları Firebase üzerinden senkronize olurken, <strong>tüm sporcu günlükleri, duygu durumu puanları ve niyet notları yalnızca ve yalnızca fiziksel cihaz üzerinde kalır.</strong></p>

<h3>LocalWellnessRepository Nasıl Çalışır?</h3>
<p><code>LocalWellnessRepository</code> mimarisini üç temel sütun üzerine kurduk:</p>
<ul>
  <li><strong>Donanım Destekli AES-256-GCM:</strong> Şifreleme anahtarları iOS Secure Enclave ve Android Keystore içinde üretilir ve yalnızca cihaz kullanıcının biyometrik/parola onayıyla açıkken erişilebilir (<code>WHEN_UNLOCKED_THIS_DEVICE_ONLY</code>).</li>
  <li><strong>Sıfır Bulut Telemetrisi:</strong> Firestore güvenlik kuralları ve bulut fonksiyonları, günlük içeren herhangi bir veri yükünü sunucu seviyesinde doğrudan reddeder.</li>
  <li><strong>Anlık Bellek Temizliği:</strong> Uygulama arka plana geçtiğinde şifresi çözülmüş geçici veriler RAM'den anında silinir.</li>
</ul>

<h3>03:00 İstanbul Gün Sınırı Motoru</h3>
<p>Sporcular genellikle geç saatlere kadar antrenman yapar. Gece 00:00'da seriyi sıfırlayan klasik sistemler, seansını 00:30'da tamamlayan sporcuları cezalandırır. Biz, İstanbul saatine göre gün sınırını 03:00'e sabitleyen ve tek günlük kaçırmaları <code>'at_risk'</code> statüsüyle tolere eden 2 günlük dayanıklı bir seri motoru geliştirdik.</p>

<p>Sonuç: Spor psikologlarının tam bir güvenle önerdiği, sporcuların ise verilerinin mutlak sahibi olduğu sağlam bir mobil platform.</p>
`
    }
  },
  {
    id: 'twenty-years-in-data-fabric',
    category: 'Enterprise Cloud & Data',
    readTimeMin: 7,
    publishedDate: 'June 2026',
    title: {
      en: '20 Years in Data: Moving from Dimensional Cubes to Microsoft Fabric Lakehouses',
      tr: 'Veri Mimarisiyle 20 Yıl: Boyutsal OLAP Küplerinden Microsoft Fabric Lakehouse Dünyasına'
    },
    subtitle: {
      en: 'A retrospective on two decades of enterprise data warehousing, and why Microsoft Fabric OneLake is fundamentally altering enterprise SaaS.',
      tr: 'Yirmi yıllık kurumsal veri ambarı tecrübesi ve Microsoft Fabric OneLake mimarisinin kurumsal SaaS dünyasını nasıl dönüştürdüğü üzerine.'
    },
    excerpt: {
      en: 'In 2008, we spent nights tuning SSAS partition processing and MDX calculations. In 2026, Microsoft Fabric allows us to stream transactional OLTP databases directly into Delta Lake format with sub-second analytical queries.',
      tr: '2008 yılında gecelerimizi SSAS bölümleme ve MDX optimizasyonuyla geçiriyorduk. 2026\'da ise Microsoft Fabric ile OLTP veritabanlarını doğrudan Delta Lake formatında saniyeler içinde analitiğe açıyoruz.'
    },
    contentHtml: {
      en: `
<p class="essay-lead">When I began architecting enterprise data warehouses at Smartiks in 2010, the data engineering paradigm was defined by rigid batch ETL. We designed Star and Snowflake schemas, struggled with nightly SSIS package lockouts, and pre-calculated multidimensional cubes in SQL Server Analysis Services (SSAS) so executives could run slice-and-dice reports the next morning.</p>

<h3>The Latency Tax of Legacy Architectures</h3>
<p>For over a decade, enterprise software lived with an accepted compromise: <strong>operational data was 12 to 24 hours stale.</strong> If an enterprise compensation event occurred at 10 AM, leadership wouldn't see its bottom-line impact until tomorrow's batch finished.</p>

<h3>The Microsoft Fabric Paradigm Shift</h3>
<p>Over the past 13+ years scaling beqom's compensation platform, data volume grew exponentially. Transitioning to <strong>Microsoft Fabric and OneLake</strong> fundamentally dismantled that latency compromise:</p>
<ul>
  <li><strong>OneLake Delta Parquet DirectLake:</strong> We no longer duplicate tables across staging, operational data stores, and analytical datamarts. Transactional logs stream into Delta Parquet format via Change Data Capture (CDC).</li>
  <li><strong>Separation of Compute & Storage:</strong> Calculation engines run isolated on high-throughput In-Memory OLTP partitions without suffering lock contention from heavy executive analytics.</li>
  <li><strong>Sub-Second DirectLake Mode:</strong> PowerBI queries read directly from OneLake storage without importing data into memory caches or suffering semantic model refresh lag.</li>
</ul>

<h3>The Takeaway for Tech Leaders</h3>
<p>The goal of modern data architecture is not adopting trendy frameworks. It is eliminating the architectural friction between a transactional event occurring and an executive making a decision based on that event.</p>
`,
      tr: `
<p class="essay-lead">2010 yılında Smartiks bünyesinde kurumsal veri ambarları tasarlamaya başladığımda, veri dünyası katı gece ETL paketlerine bağımlıydı. Yıldız ve kar tanesi şemalar kurar, SSIS paketlerinin kilitlenmelerini çözer ve yöneticilerin ertesi sabah rapor alabilmesi için SSAS üzerinde çok boyutlu OLAP küpleri işlerdik.</p>

<h3>Eski Mimarilerin Gecikme Bedeli</h3>
<p>Yıllar boyunca kurumsal dünya sessiz bir uzlaşıyı kabul etti: <strong>Operasyonel veriler 12 ila 24 saat geriden gelirdi.</strong> Sabah 10:00'da gerçekleşen bir kurumsal prim veya satış işlemi, şirket yönetimi tarafından ancak ertesi günün gece hesaplaması bittiğinde görülebilirdi.</p>

<h3>Microsoft Fabric ile Yaşanan Kırılma</h3>
<p>beqom bünyesinde 13 yılı aşkın süredir küresel veri katmanını ölçeklerken, veri hacmi katlanarak büyüdü. <strong>Microsoft Fabric ve OneLake</strong> dönüşümüyle bu gecikme bedeli tamamen ortadan kalktı:</p>
<ul>
  <li><strong>OneLake Delta Parquet ve DirectLake:</strong> Artık veriyi ara katmanlar ve veri pazarları (datamart) arasında defalarca kopyalamıyoruz. CDC ile ham işlem günlükleri Delta Parquet formatında doğrudan OneLake'e akar.</li>
  <li><strong>İşlem ve Depolamanın Ayrılması:</strong> Prim hesaplama motorları In-Memory OLTP üzerinde izole çalışırken, ağır analitik sorgulardan kaynaklanan kilitlenmeler sıfıra indi.</li>
  <li><strong>Saniyelik DirectLake Modu:</strong> PowerBI raporları veriyi tekrar belleğe aktarmadan doğrudan OneLake üzerinden anlık (sub-second) hızda sorgular.</li>
</ul>

<h3>Teknoloji Liderleri İçin Temel Çıkarım</h3>
<p>Modern veri mimarisinin amacı moda araçları takip etmek değildir. Amaç, operasyonel bir işlemin gerçekleştiği an ile bir yöneticinin o veriye dayanarak karar aldığı an arasındaki mimari sürtünmeyi sıfıra indirmektir.</p>
`
    }
  },
  {
    id: 'software-factory-second-brain',
    category: 'Autonomous Systems & Philosophy',
    readTimeMin: 5,
    publishedDate: 'May 2026',
    title: {
      en: 'The Software Factory: How I Use AI as My Authentic Second Brain',
      tr: 'Yazılım Fabrikası: Yapay Zekayı Gerçek Bir "İkinci Beyin" Olarak Nasıl Konumlandırıyorum?'
    },
    subtitle: {
      en: 'The bottleneck in modern software is not model intelligence—it is human self-knowledge and codified decision heuristics.',
      tr: 'Yazılımdaki asıl darboğaz modelin zekası değil; insanın kendi karar kurallarını ve deneyimlerini yapılandırabilme yeteneğidir.'
    },
    excerpt: {
      en: 'When developers complain that AI writes generic boilerplate, it is because they have provided generic context. Here is how structured cognitive memory transforms AI into a tireless engineering force multiplier.',
      tr: 'Geliştiriciler yapay zekanın sıradan kodlar yazmasından şikayet ediyorsa, bunun sebebi modele sıradan bağlam vermeleridir. Yapılandırılmış bilişsel hafıza bu denklemi nasıl değiştirir?'
    },
    contentHtml: {
      en: `
<p class="essay-lead">Most developers treat generative AI like an intern with amnesia: they open a fresh chat window, type a generic prompt, and receive generic, statistical boilerplate in return. Then they conclude that AI cannot handle complex software engineering.</p>

<h3>The Missing Layer: Codified Human Invariants</h3>
<p>An AI model possesses broad world knowledge, but it knows zero about your architectural convictions, your past production outages, your specific performance boundaries, or your hard-won debugging heuristics. Unless you externalize your mind into structured, deterministic files, you are starting from scratch every single session.</p>

<h3>The Three Pillars of the Sovereign Software Factory</h3>
<p>To turn AI into an authentic Second Brain, I engineered three sovereign systems:</p>
<ol>
  <li><strong>The <code>vault</code> Decision Gateway:</strong> A zero-latency local index containing hundreds of codified lessons (e.g., <em>"Never run heavy aggregates on transactional OLTP partitions"</em>, <em>"Always zero memory on mobile backgrounding"</em>). Agents route to these rules in &lt;14ms without polluting the LLM context window.</li>
  <li><strong>Deterministic CDP Toolchains:</strong> Rather than relying on fragile web scrapers, agents connect directly to authenticated Chrome DevTools Protocol instances, enabling reliable browser automation with persistent session profiles.</li>
  <li><strong>Dialectic Peer Swarms:</strong> Tasks are not handed to a single monolithic prompt. A <em>Planner</em> drafts the technical specification, an <em>Executor</em> writes the code, a <em>Test Runner</em> executes the physical compiler, and an <em>Adversarial Critic</em> aggressively attempts to break edge cases before human review.</li>
</ol>

<p>When you engineer the harness with this level of rigor, you do not just write code faster—you elevate your entire engineering leverage by an order of magnitude.</p>
`,
      tr: `
<p class="essay-lead">Çoğu geliştirici üretken yapay zekaya hafızasını kaybetmiş bir stajyer gibi davranıyor: Yeni bir sohbet penceresi açıyor, genel bir komut yazıyor ve karşılığında basmakalıp kodlar alıyor. Sonra da yapay zekanın karmaşık mühendislik problemlerini çözemediği sonucuna varıyor.</p>

<h3>Eksik Halka: Kodlaştırılmış İnsan Deneyimi</h3>
<p>Bir yapay zeka modeli geniş bir dünya bilgisine sahiptir, ancak sizin mimari ilkelerinizden, geçmişte yaşadığınız üretim kesintilerinden, performans sınırlarınızdan veya yıllar içinde edindiğiniz tecrübelerden habersizdir. Zihninizdeki karar kurallarını yapılandırılmış dosyalara dökmediğiniz sürece her oturuma sıfırdan başlarsınız.</p>

<h3>Egemen Yazılım Fabrikasının Üç Temel Taşı</h3>
<p>Yapay zekayı gerçek bir İkinci Beyne dönüştürmek için geliştirdiğim üç temel sistem:</p>
<ol>
  <li><strong><code>vault</code> Karar Kapısı:</strong> Yüzlerce mimari kuralı içeren sıfır gecikmeli yerel dizin (örn: <em>"OLTP bölümlerinde asla ağır analitik çalıştırma"</em>, <em>"Mobil arka plana geçtiğinde belleği hemen temizle"</em>). Ajanlar bu kurallara bağlamı kirletmeden &lt;14ms içinde erişir.</li>
  <li><strong>Deterministik CDP Araç Hatları:</strong> Kırılgan kazıyıcılar yerine doğrudan port 9222 üzerinden çalışan Chrome DevTools Protocol daemon'ları ile kalıcı ve güvenilir tarayıcı otomasyonu.</li>
  <li><strong>Diyalektik Ajan Filoları:</strong> Görevler tek bir modele verilmez. Bir <em>Planlayıcı</em> mimariyi çizer, bir <em>Uygulayıcı</em> kodu yazar, bir <em>Test Koşucusu</em> derleyiciyi çalıştırır ve bir <em>Eleştirel Denetçi</em> sisteme acımasızca saldırarak açıkları kapatır.</li>
</ol>

<p>Yapay zekanın etrafındaki harness'ı bu disiplinle kurduğunuzda, yalnızca daha hızlı kod yazmazsınız; mühendislik kaldıraç gücünüzü katlayarak artırırsınız.</p>
`
    }
  }
];
