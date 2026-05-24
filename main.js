// ========================================
// Sammafinance — Main JS with i18n
// ========================================

// --- i18n System ---
const i18n = {
  currentLang: localStorage.getItem('sf-lang') || 'zh',

  // Translation dictionary - keyed by data-i18n attribute
  dict: {
    // === Top Bar ===
    'top.lang.en': { zh: 'English', en: 'English' },
    'top.lang.zh': { zh: '中文', en: '中文' },

    // === Navbar ===
    'nav.services': { zh: '我们的服务', en: 'Our Services' },
    'nav.about': { zh: '关于我们', en: 'About Us' },
    'nav.insights': { zh: '行业洞察', en: 'Insights' },
    'nav.contact': { zh: '联系我们', en: 'Contact Us' },
    'nav.cta': { zh: '预约咨询', en: 'Book Consultation' },
    'nav.search': { zh: '搜索', en: 'Search' },

    // === Mega Menu ===
    'mega.core': { zh: '核心服务', en: 'Core Services' },
    'mega.formation': { zh: '荷兰公司成立', en: 'Dutch Company Formation' },
    'mega.formation.sub': { zh: 'BV/NV 注册、KVK 登记、银行开户', en: 'BV/NV Registration, KVK Filing, Bank Account' },
    'mega.accounting': { zh: '记账报税', en: 'Bookkeeping & Tax' },
    'mega.accounting.sub': { zh: '日常记账、增值税申报、年度报税', en: 'Daily Bookkeeping, VAT Filing, Annual Tax Return' },
    'mega.tax': { zh: '税务合规咨询', en: 'Tax Compliance Advisory' },
    'mega.tax.sub': { zh: '税务优化、跨境规划、稽查应对', en: 'Tax Optimization, Cross-border Planning, Audit Response' },
    'mega.topics': { zh: '热门专题', en: 'Popular Topics' },
    'mega.topic1': { zh: 'BV 公司注册全流程解析', en: 'Complete BV Registration Guide' },
    'mega.topic2': { zh: '荷兰增值税 (BTW) 申报指南', en: 'Dutch VAT (BTW) Filing Guide' },
    'mega.topic3': { zh: '2026 税务政策变动速览', en: '2026 Tax Policy Changes Overview' },
    'mega.topic4': { zh: '中荷双边税务协定要点', en: 'China-Netherlands Tax Treaty Highlights' },
    'mega.badge': { zh: '推荐', en: 'Featured' },
    'mega.featured.title': { zh: '荷兰创业税务指南 2026', en: 'Dutch Startup Tax Guide 2026' },
    'mega.featured.desc': { zh: 'BV 公司首个财年的税务申报要点与合规清单', en: 'Key tax filing points and compliance checklist for your BV\'s first fiscal year' },
    'mega.featured.cta': { zh: '免费获取 →', en: 'Get Free Copy →' },

    // === Hero Section ===
    'hero.tag': { zh: '荷兰直营 · 非中介', en: 'Direct from the Netherlands' },
    'hero.title': { zh: 'Your Dutch Business,<br><span class="hero-highlight">In Dutch Hands</span>', en: 'Your Dutch Business,<br><span class="hero-highlight">In Dutch Hands</span>' },
    'hero.desc': { zh: '我们是在荷兰本土注册的专业财务公司，直接为您服务——不是中介，没有中间商。<br>10 年深耕荷兰，超百家企业的信赖之选。', en: 'We are a locally registered professional financial firm in the Netherlands, serving you directly — no intermediaries, no middlemen.<br>10 years in the Netherlands, trusted by 100+ businesses.' },
    'hero.cta1': { zh: '预约免费咨询', en: 'Book Free Consultation' },
    'hero.cta2': { zh: '了解服务详情', en: 'Explore Our Services' },
    'hero.stat1.num': { zh: '10<span class="hsc-suffix">+</span>', en: '10<span class="hsc-suffix">+</span>' },
    'hero.stat1.label': { zh: '年专业经验', en: 'Years of Experience' },
    'hero.stat2.num': { zh: '100<span class="hsc-suffix">+</span>', en: '100<span class="hsc-suffix">+</span>' },
    'hero.stat2.label': { zh: '服务企业', en: 'Businesses Served' },
    'hero.stat3.num': { zh: '98<span class="hsc-suffix">%</span>', en: '98<span class="hsc-suffix">%</span>' },
    'hero.stat3.label': { zh: '客户续约率', en: 'Client Retention' },
    'hero.bottom.label': { zh: '快速了解：', en: 'Quick Links:' },
    'hero.bottom.1': { zh: '荷兰公司成立', en: 'Company Formation' },
    'hero.bottom.2': { zh: '记账报税', en: 'Bookkeeping & Tax' },
    'hero.bottom.3': { zh: '税务咨询', en: 'Tax Advisory' },
    'hero.bottom.4': { zh: '关于我们', en: 'About Us' },

    // === Trust Bar ===
    'trust.1.title': { zh: '荷兰本土注册', en: 'Locally Registered in NL' },
    'trust.1.desc': { zh: '在荷兰合法注册的专业财务公司', en: 'A legally registered professional financial firm in the Netherlands' },
    'trust.2.title': { zh: '直接服务，非中介', en: 'Direct Service, No Middlemen' },
    'trust.2.desc': { zh: '所有业务由荷兰团队直接交付，零转包', en: 'All services delivered directly by our Dutch team, zero outsourcing' },
    'trust.3.title': { zh: '中荷双语团队', en: 'Bilingual Team (NL/CN)' },
    'trust.3.desc': { zh: '无语言障碍，沟通零信息差', en: 'No language barriers, zero information gap' },
    'trust.4.title': { zh: '价格透明无加价', en: 'Transparent Pricing' },
    'trust.4.desc': { zh: '固定月费，拒绝中间商差价', en: 'Fixed monthly fees, no middleman markup' },

    // === Brand Statement ===
    'brand.title': { zh: '扎根荷兰，亲自操办', en: 'Rooted in the Netherlands, We Handle It Personally' },
    'brand.desc': { zh: 'Sammafinance 是在荷兰本土注册的专业财务公司，所有服务由我们在荷兰的团队直接交付。不是转手外包，没有中间加价——从公司成立到记账报税，每一环都由本地持牌专业人员亲自跟进。中荷双语沟通，让跨境经营不再有信息差。', en: 'Sammafinance is a locally registered professional financial firm in the Netherlands. All services are delivered directly by our Dutch-based team — no outsourcing, no middleman markup. From company formation to bookkeeping & tax, every step is personally handled by local licensed professionals. Bilingual communication ensures zero information gap for cross-border operations.' },
    'brand.link1': { zh: '关于我们 →', en: 'About Us →' },
    'brand.link2': { zh: '我们的服务 →', en: 'Our Services →' },
    'brand.link3': { zh: '联系我们 →', en: 'Contact Us →' },
    'brand.scene.caption': { zh: '阿姆斯特丹 — 我们的根基', en: 'Amsterdam — Our Home Base' },

    // === Services Section ===
    'svc.label': { zh: '我们的服务', en: 'Our Services' },
    'svc.title': { zh: '全周期专业财务服务', en: 'Full-Cycle Professional Financial Services' },
    'svc.desc': { zh: '无论您是计划进入荷兰市场，还是已经在荷兰经营，我们都能提供匹配的专业支持', en: 'Whether you\'re planning to enter the Dutch market or already operating in the Netherlands, we provide matching professional support' },
    'svc.tag': { zh: '核心服务', en: 'Core Service' },
    'svc.1.title': { zh: '荷兰公司成立', en: 'Dutch Company Formation' },
    'svc.1.desc': { zh: '从公司类型选择、名称核准到 KVK 注册和银行开户，全程陪伴完成荷兰公司设立。BV 公司零注册资本起步，最快 3-5 个工作日完成注册。', en: 'From company type selection, name reservation to KVK registration and bank account opening, we accompany you through the entire process. BV companies with zero minimum capital, registration in as fast as 3-5 business days.' },
    'svc.1.link': { zh: '了解详情 →', en: 'Learn More →' },
    'svc.2.title': { zh: '记账报税', en: 'Bookkeeping & Tax Filing' },
    'svc.2.desc': { zh: '日常记账、增值税 (BTW) 申报、年度报税及财务报表编制，确保每一个时间节点合规无忧。错过申报期限可能产生高额罚款，让我们帮您按时完成。', en: 'Daily bookkeeping, VAT (BTW) filing, annual tax returns and financial statement preparation, ensuring compliance at every deadline. Missing filing deadlines can result in hefty penalties — let us help you stay on time.' },
    'svc.2.link': { zh: '了解详情 →', en: 'Learn More →' },
    'svc.3.title': { zh: '税务合规咨询', en: 'Tax Compliance Advisory' },
    'svc.3.desc': { zh: '深入了解荷兰税务体系，提供最优税务结构建议、跨境税务规划与政策变化跟踪。合理规划可降低税负、规避风险、提升运营效率。', en: 'In-depth understanding of the Dutch tax system, providing optimal tax structure advice, cross-border tax planning and policy change tracking. Proper planning can reduce tax burden, mitigate risks, and improve operational efficiency.' },
    'svc.3.link': { zh: '了解详情 →', en: 'Learn More →' },
    'svc.more': { zh: '查看全部服务 →', en: 'View All Services →' },

    // === Insights Section ===
    'ins.label': { zh: '行业洞察', en: 'Insights' },
    'ins.title': { zh: '最新前沿', en: 'Latest Insights' },
    'ins.desc': { zh: '紧跟荷兰政策变化与行业动态，助您做出更明智的决策', en: 'Stay ahead of Dutch policy changes and industry trends to make smarter decisions' },
    'ins.1.badge': { zh: '专题报告', en: 'Special Report' },
    'ins.1.type': { zh: '报告', en: 'Report' },
    'ins.1.time': { zh: '2026年5月', en: 'May 2026' },
    'ins.1.title': { zh: '2026 荷兰中小企业税务合规全景指南', en: '2026 Comprehensive Tax Compliance Guide for Dutch SMEs' },
    'ins.1.desc': { zh: '从增值税申报到企业所得税预缴，全面解读荷兰中小企业需要关注的税务合规要点与最新政策变化。', en: 'From VAT filing to corporate income tax prepayments, a comprehensive overview of tax compliance essentials and latest policy changes for Dutch SMEs.' },
    'ins.1.link': { zh: '阅读全文 →', en: 'Read More →' },
    'ins.2.badge': { zh: '政策解读', en: 'Policy Analysis' },
    'ins.2.type': { zh: '洞察', en: 'Insight' },
    'ins.2.time': { zh: '2026年4月', en: 'Apr 2026' },
    'ins.2.title': { zh: '荷兰 Box 税制改革对跨境企业的影响', en: 'Impact of Dutch Box Tax Reform on Cross-border Businesses' },
    'ins.2.desc': { zh: '解读 2026 年最新税制调整，分析对在荷中资企业的实际影响与应对策略。', en: 'Interpreting the 2026 latest tax system adjustments and analyzing practical impacts and response strategies for Chinese-funded enterprises in the Netherlands.' },
    'ins.2.link': { zh: '阅读全文 →', en: 'Read More →' },
    'ins.3.badge': { zh: '实务指南', en: 'Practical Guide' },
    'ins.3.type': { zh: '指南', en: 'Guide' },
    'ins.3.time': { zh: '2026年3月', en: 'Mar 2026' },
    'ins.3.title': { zh: 'BV 公司注册后必做的 10 件事', en: '10 Must-Dos After BV Company Registration' },
    'ins.3.desc': { zh: '从 UBO 登记到首个 VAT 申报，注册完成只是第一步，这些合规事项不可忽略。', en: 'From UBO registration to first VAT filing, registration is just the first step — these compliance matters cannot be ignored.' },
    'ins.3.link': { zh: '阅读全文 →', en: 'Read More →' },
    'ins.4.badge': { zh: '行业分析', en: 'Industry Analysis' },
    'ins.4.type': { zh: '分析', en: 'Analysis' },
    'ins.4.time': { zh: '2026年2月', en: 'Feb 2026' },
    'ins.4.title': { zh: '中资企业出海荷兰：机遇与合规并重', en: 'Chinese Enterprises Going to the Netherlands: Opportunities and Compliance' },
    'ins.4.desc': { zh: '盘点近年来中资企业进入荷兰市场的趋势，以及需要特别注意的法律与税务合规事项。', en: 'Reviewing trends of Chinese enterprises entering the Dutch market and key legal and tax compliance considerations.' },
    'ins.4.link': { zh: '阅读全文 →', en: 'Read More →' },
    'ins.more': { zh: '查看全部洞察 →', en: 'View All Insights →' },

    // === Cases Section ===
    'case.label': { zh: '客户案例', en: 'Client Cases' },
    'case.title': { zh: '我们的解决方案，他们的成功', en: 'Our Solutions, Their Success' },
    'case.1.industry': { zh: '跨境电商', en: 'Cross-border E-commerce' },
    'case.1.title': { zh: '从零到运营：3 周完成荷兰 BV 公司注册', en: 'From Zero to Operating: BV Registration in 3 Weeks' },
    'case.1.desc': { zh: '一家中国跨境电商企业希望在欧洲设立子公司。我们在 3 周内完成了从公司类型咨询、名称核准、公证签署到 KVK 登记的全流程，帮助客户顺利开设荷兰银行账户并开始运营。', en: 'A Chinese cross-border e-commerce company wanted to establish a European subsidiary. We completed the entire process from company type consultation, name reservation, notarial deed to KVK registration within 3 weeks, helping the client successfully open a Dutch bank account and start operations.' },
    'case.1.tag1': { zh: '公司成立', en: 'Company Formation' },
    'case.1.tag2': { zh: '银行开户', en: 'Bank Account' },
    'case.1.tag3': { zh: 'KVK登记', en: 'KVK Registration' },
    'case.1.stat1': { zh: '3周', en: '3 Weeks' },
    'case.1.stat1.label': { zh: '完成注册', en: 'Registration Completed' },
    'case.1.stat2': { zh: '100%', en: '100%' },
    'case.1.stat2.label': { zh: '远程签署', en: 'Remote Signing' },
    'case.1.stat3': { zh: '0', en: '0' },
    'case.1.stat3.label': { zh: '合规遗漏', en: 'Compliance Gaps' },
    'case.2.industry': { zh: '科技初创', en: 'Tech Startup' },
    'case.2.title': { zh: '记账报税外包，让创始团队专注产品', en: 'Outsourced Bookkeeping: Founders Focus on Product' },
    'case.2.desc': { zh: '一家荷兰科技初创公司将日常记账和税务申报全权委托 Sammafinance。我们按月整理凭证、按时完成 BTW 申报和年度报税，团队再无合规之忧，全力推进产品迭代与市场拓展。', en: 'A Dutch tech startup entrusted Sammafinance with all daily bookkeeping and tax filing. We organize vouchers monthly, complete BTW filings and annual tax returns on time, freeing the team from compliance worries to focus on product iteration and market expansion.' },
    'case.2.tag1': { zh: '记账报税', en: 'Bookkeeping & Tax' },
    'case.2.tag2': { zh: 'BTW申报', en: 'BTW Filing' },
    'case.2.tag3': { zh: '年度报表', en: 'Annual Statements' },
    'case.2.stat1': { zh: '100%', en: '100%' },
    'case.2.stat1.label': { zh: '按时申报', en: 'On-time Filing' },
    'case.2.stat2': { zh: '0', en: '0' },
    'case.2.stat2.label': { zh: '滞纳金', en: 'Late Penalties' },
    'case.2.stat3': { zh: '3年', en: '3 Years' },
    'case.2.stat3.label': { zh: '持续合作', en: 'Ongoing Partnership' },
    'case.3.industry': { zh: '贸易公司', en: 'Trading Company' },
    'case.3.title': { zh: '税务结构优化，年节省数万欧元', en: 'Tax Structure Optimization: Tens of Thousands Saved Annually' },
    'case.3.desc': { zh: '一家在荷中资贸易公司面临较高的税务负担。我们通过分析其业务结构，重新规划税务架构，利用双边协定和荷兰参与豁免等政策，合法节省了大量税务成本。', en: 'A Chinese-funded trading company in the Netherlands faced a high tax burden. We analyzed their business structure, restructured their tax architecture, and leveraged bilateral treaties and Dutch participation exemption to legitimately save significant tax costs.' },
    'case.3.tag1': { zh: '税务咨询', en: 'Tax Advisory' },
    'case.3.tag2': { zh: '跨境规划', en: 'Cross-border Planning' },
    'case.3.tag3': { zh: '成本优化', en: 'Cost Optimization' },
    'case.3.stat1': { zh: '30%+', en: '30%+' },
    'case.3.stat1.label': { zh: '税负降低', en: 'Tax Burden Reduced' },
    'case.3.stat2': { zh: '100%', en: '100%' },
    'case.3.stat2.label': { zh: '合规达标', en: 'Compliance Achieved' },
    'case.3.stat3': { zh: '1次', en: '1 Time' },
    'case.3.stat3.label': { zh: '稽查通过', en: 'Audit Passed' },

    // === Why Section ===
    'why.label': { zh: '为什么选择我们', en: 'Why Choose Us' },
    'why.title': { zh: '深耕荷兰，理解中国企业的每一个需求', en: 'Deeply Rooted in the Netherlands, Understanding Every Need of Chinese Enterprises' },
    'why.desc': { zh: '我们不只是服务商，更是您在荷兰经营路上的长期伙伴。从第一天的公司注册到每一年的报税季，Sammafinance 始终在您身边。', en: 'We are not just a service provider, but your long-term partner on your Dutch business journey. From day-one company registration to every tax season, Sammafinance is always by your side.' },
    'why.1.title': { zh: '中荷双语团队', en: 'Bilingual Team' },
    'why.1.desc': { zh: '中文 + 荷兰语/英语无缝沟通，理解中国企业的思维方式和经营习惯', en: 'Seamless communication in Chinese + Dutch/English, understanding Chinese business mindset and practices' },
    'why.2.title': { zh: '本地专业知识', en: 'Local Expertise' },
    'why.2.desc': { zh: '10 年深耕荷兰市场，深度了解荷兰法规、税务政策和商业环境', en: '10 years deeply rooted in the Dutch market, thorough understanding of Dutch regulations, tax policies and business environment' },
    'why.3.title': { zh: '响应迅速', en: 'Fast Response' },
    'why.3.desc': { zh: '工作日 24 小时内回复咨询，紧急事项当日响应', en: 'Reply within 24 hours on business days, same-day response for urgent matters' },
    'why.4.title': { zh: '透明定价', en: 'Transparent Pricing' },
    'why.4.desc': { zh: '固定月费模式，无隐藏费用，服务内容清晰明了', en: 'Fixed monthly fee model, no hidden costs, clear service scope' },

    // === CTA Section ===
    'cta.title': { zh: '准备好开启您的荷兰业务了吗？', en: 'Ready to Start Your Dutch Business?' },
    'cta.desc': { zh: '无论您是计划成立公司还是需要专业的记账报税服务，预约一次免费咨询，让我们了解您的具体需求。', en: 'Whether you\'re planning to form a company or need professional bookkeeping & tax services, book a free consultation and let us understand your specific needs.' },
    'cta.btn1': { zh: '预约免费咨询', en: 'Book Free Consultation' },
    'cta.btn2': { zh: '直接致电', en: 'Call Us Directly' },

    // === Footer ===
    'ft.tagline': { zh: '您在荷兰的专业财务伙伴', en: 'Your Professional Financial Partner in the Netherlands' },
    'ft.desc': { zh: '10 年深耕荷兰，为中小企业提供公司成立、记账报税和税务合规咨询等一站式专业服务。', en: '10 years in the Netherlands, providing one-stop professional services including company formation, bookkeeping & tax, and tax compliance advisory for SMEs.' },
    'ft.services': { zh: '服务', en: 'Services' },
    'ft.company': { zh: '公司', en: 'Company' },
    'ft.contact': { zh: '联系方式', en: 'Contact' },
    'ft.formation': { zh: '荷兰公司成立', en: 'Company Formation' },
    'ft.accounting': { zh: '记账报税', en: 'Bookkeeping & Tax' },
    'ft.tax': { zh: '税务合规咨询', en: 'Tax Advisory' },
    'ft.about': { zh: '关于我们', en: 'About Us' },
    'ft.insights': { zh: '行业洞察', en: 'Insights' },
    'ft.contactus': { zh: '联系我们', en: 'Contact Us' },
    'ft.privacy': { zh: '隐私政策', en: 'Privacy Policy' },
    'ft.terms': { zh: '使用条款', en: 'Terms of Use' },
    'ft.cookies': { zh: 'Cookie 设置', en: 'Cookie Settings' },

    // === About Page ===
    'about.tag': { zh: 'About Us', en: 'About Us' },
    'about.title': { zh: '关于 Sammafinance', en: 'About Sammafinance' },
    'about.desc': { zh: '10 年深耕荷兰，为中小企业提供公司成立、记账报税和税务合规咨询等一站式专业服务。', en: '10 years deeply rooted in the Netherlands, providing one-stop professional services including company formation, bookkeeping & tax, and tax compliance advisory for SMEs.' },
    'about.story.label': { zh: '我们的故事', en: 'Our Story' },
    'about.story.title': { zh: '从一份初心到百家信赖', en: 'From One Vision to a Hundred Trusts' },
    'about.story.p1': { zh: 'Sammafinance 成立于荷兰，创始团队由资深财务顾问和中荷双语专业人士组成。我们亲眼见证了越来越多中国企业选择荷兰作为欧洲门户，也深知跨境经营中的信息不对称和合规挑战。', en: 'Sammafinance was founded in the Netherlands, with a founding team of senior financial advisors and bilingual professionals. We witnessed the growing number of Chinese enterprises choosing the Netherlands as their European gateway, and understood the information asymmetry and compliance challenges in cross-border operations.' },
    'about.story.p2': { zh: '10 年来，我们从最初为几家初创企业提供记账服务，发展到如今服务超百家企业，涵盖跨境电商、科技初创、贸易公司等多个行业。每一位客户的信任，都是我们持续精进的动力。', en: 'Over 10 years, we grew from providing bookkeeping services for a few startups to serving over 100 businesses across e-commerce, tech startups, trading companies and more. Every client\'s trust drives our continuous improvement.' },
    'about.story.p3': { zh: '我们的使命很简单：让中国企业出海荷兰的路，走得更稳、更远。', en: 'Our mission is simple: to make the journey of Chinese enterprises going to the Netherlands smoother and further.' },
    'about.stat1': { zh: '年专业经验', en: 'Years of Experience' },
    'about.stat2': { zh: '服务企业', en: 'Businesses Served' },
    'about.stat3': { zh: '客户续约率', en: 'Client Retention' },
    'about.stat4': { zh: '核心服务领域', en: 'Core Service Areas' },
    'about.val.label': { zh: '价值观', en: 'Our Values' },
    'about.val.title': { zh: '我们坚守的原则', en: 'Principles We Stand By' },
    'about.val.1.title': { zh: '专业可靠', en: 'Professional & Reliable' },
    'about.val.1.desc': { zh: '每一位客户的事务都由经验丰富的专业人士处理，确保准确合规，杜绝疏漏。', en: 'Every client\'s affairs are handled by experienced professionals, ensuring accuracy, compliance, and zero oversights.' },
    'about.val.2.title': { zh: '客户为本', en: 'Client-Centric' },
    'about.val.2.desc': { zh: '我们倾听每一位客户的独特需求，提供量身定制的解决方案，而非千篇一律的模板。', en: 'We listen to each client\'s unique needs and provide tailor-made solutions, not one-size-fits-all templates.' },
    'about.val.3.title': { zh: '跨境桥梁', en: 'Cross-border Bridge' },
    'about.val.3.desc': { zh: '中荷双语团队，不仅理解荷兰法规，更理解中国企业的思维方式和经营习惯。', en: 'A bilingual team that not only understands Dutch regulations but also the Chinese business mindset and practices.' },
    'about.val.4.title': { zh: '持续进化', en: 'Continuous Evolution' },
    'about.val.4.desc': { zh: '荷兰法规和税务政策持续变化，我们紧跟最新动态，确保客户始终处于合规的最前沿。', en: 'Dutch regulations and tax policies constantly change. We stay on top of the latest developments to keep clients at the forefront of compliance.' },
    'about.tl.label': { zh: '发展历程', en: 'Our Journey' },
    'about.tl.title': { zh: '我们的成长足迹', en: 'Our Growth Footprint' },
    'about.tl.1.title': { zh: '起步', en: 'Starting Out' },
    'about.tl.1.desc': { zh: 'Sammafinance 在荷兰成立，开始为本地华人企业提供记账报税服务。', en: 'Sammafinance was founded in the Netherlands, starting with bookkeeping and tax services for local Chinese businesses.' },
    'about.tl.2.title': { zh: '扩展', en: 'Expansion' },
    'about.tl.2.desc': { zh: '服务范围扩展至荷兰公司成立和税务咨询，客户数量突破 30 家。', en: 'Services expanded to Dutch company formation and tax advisory, client base exceeded 30.' },
    'about.tl.3.title': { zh: '数字化', en: 'Digitalization' },
    'about.tl.3.desc': { zh: '引入云端财务管理系统，实现客户实时查看账目，服务效率大幅提升。', en: 'Introduced cloud-based financial management system, enabling clients to view accounts in real-time, significantly improving service efficiency.' },
    'about.tl.4.title': { zh: '突破', en: 'Breakthrough' },
    'about.tl.4.desc': { zh: '服务企业突破 100 家，团队扩充至中荷双语专业人士 8 人。', en: 'Clients surpassed 100, team expanded to 8 bilingual professionals.' },
    'about.tl.5.title': { zh: '今天', en: 'Today' },
    'about.tl.5.desc': { zh: '持续深耕荷兰市场，以更专业的服务和更完善的解决方案，陪伴每一位客户成长。', en: 'Continuing to deepen our presence in the Dutch market with more professional services and comprehensive solutions, growing with every client.' },
    'about.cta.title': { zh: '想更深入了解我们？', en: 'Want to Know More About Us?' },
    'about.cta.desc': { zh: '预约一次免费咨询，让我们面对面交流您的需求。', en: 'Book a free consultation and let\'s discuss your needs face to face.' },
    'about.cta.btn': { zh: '预约免费咨询', en: 'Book Free Consultation' },

    // === Services Page ===
    'svc.page.tag': { zh: 'Our Services', en: 'Our Services' },
    'svc.page.title': { zh: '全周期专业财务服务', en: 'Full-Cycle Professional Financial Services' },
    'svc.page.desc': { zh: '从公司成立到日常运营，从记账报税到税务规划，Sammafinance 陪伴您的每一步。', en: 'From company formation to daily operations, from bookkeeping & tax to tax planning, Sammafinance accompanies you every step of the way.' },

    // Formation detail
    'svc.f.label': { zh: '核心服务', en: 'Core Service' },
    'svc.f.title': { zh: '荷兰公司成立', en: 'Dutch Company Formation' },
    'svc.f.desc': { zh: '荷兰是欧洲最受欢迎的公司注册地之一，BV（Besloten Vennootschap）公司以其灵活性和零最低注册资本要求，成为中小企业进入欧洲市场的首选。我们提供从咨询到注册完成的一站式服务。', en: 'The Netherlands is one of the most popular company registration locations in Europe. BV (Besloten Vennootschap) companies, with their flexibility and zero minimum capital requirement, are the top choice for SMEs entering the European market. We provide one-stop service from consultation to registration completion.' },
    'svc.f.f1.title': { zh: '公司类型咨询', en: 'Company Type Consultation' },
    'svc.f.f1.desc': { zh: '根据您的业务需求，推荐最适合的公司类型（BV/NV/分公司）', en: 'Recommend the most suitable company type based on your business needs (BV/NV/Branch)' },
    'svc.f.f2.title': { zh: '名称核准与预留', en: 'Name Reservation' },
    'svc.f.f2.desc': { zh: '在 KVK 进行公司名称查重和预留，确保名称可用', en: 'Conduct name search and reservation at KVK to ensure availability' },
    'svc.f.f3.title': { zh: '公证与注册', en: 'Notarization & Registration' },
    'svc.f.f3.desc': { zh: '协助准备公证文件，完成 KVK 商业登记和税务登记', en: 'Assist in preparing notarial documents, complete KVK business registration and tax registration' },
    'svc.f.f4.title': { zh: '银行开户', en: 'Bank Account Opening' },
    'svc.f.f4.desc': { zh: '协助开设荷兰商业银行账户，支持远程开户流程', en: 'Assist in opening Dutch commercial bank accounts, remote opening supported' },
    'svc.f.btn': { zh: '咨询注册流程', en: 'Consult Registration Process' },
    'svc.f.process': { zh: '注册流程', en: 'Registration Process' },
    'svc.f.step1': { zh: '初步咨询与需求确认', en: 'Initial Consultation & Needs Confirmation' },
    'svc.f.step2': { zh: '公司名称查重与预留', en: 'Company Name Search & Reservation' },
    'svc.f.step3': { zh: '准备公证文件', en: 'Prepare Notarial Documents' },
    'svc.f.step4': { zh: '公证签署', en: 'Notarial Deed Signing' },
    'svc.f.step5': { zh: 'KVK 商业登记', en: 'KVK Business Registration' },
    'svc.f.step6': { zh: '税务登记与银行开户', en: 'Tax Registration & Bank Account Opening' },

    // Accounting detail
    'svc.a.label': { zh: '核心服务', en: 'Core Service' },
    'svc.a.title': { zh: '记账报税', en: 'Bookkeeping & Tax Filing' },
    'svc.a.desc': { zh: '荷兰的税务申报体系复杂且严格，错过申报期限将面临高额罚款。我们的记账报税服务确保您的每一笔账目清晰合规，每一个申报节点准时完成。', en: 'The Dutch tax filing system is complex and strict. Missing filing deadlines results in hefty penalties. Our bookkeeping & tax services ensure every transaction is clear and compliant, and every filing deadline is met on time.' },
    'svc.a.f1.title': { zh: '日常记账', en: 'Daily Bookkeeping' },
    'svc.a.f1.desc': { zh: '按月整理收支凭证，维护清晰的账目记录', en: 'Monthly income and expense voucher organization, maintaining clear accounting records' },
    'svc.a.f2.title': { zh: '增值税 (BTW) 申报', en: 'VAT (BTW) Filing' },
    'svc.a.f2.desc': { zh: '按季度完成 BTW 申报，确保合规无忧', en: 'Quarterly BTW filing, ensuring worry-free compliance' },
    'svc.a.f3.title': { zh: '年度报税', en: 'Annual Tax Return' },
    'svc.a.f3.desc': { zh: '编制年度财务报表，完成企业所得税申报', en: 'Prepare annual financial statements and complete corporate income tax filing' },
    'svc.a.f4.title': { zh: '工资单处理', en: 'Payroll Processing' },
    'svc.a.f4.desc': { zh: '员工工资计算、社保扣缴、年度工资税申报', en: 'Employee salary calculation, social security deductions, annual payroll tax filing' },
    'svc.a.btn': { zh: '了解服务方案', en: 'Explore Service Plans' },
    'svc.a.cycle': { zh: '申报周期', en: 'Filing Cycle' },
    'svc.a.c1': { zh: 'BTW 增值税', en: 'BTW (VAT)' },
    'svc.a.c1.period': { zh: '季度', en: 'Quarterly' },
    'svc.a.c2': { zh: '工资税', en: 'Payroll Tax' },
    'svc.a.c2.period': { zh: '月度', en: 'Monthly' },
    'svc.a.c3': { zh: '年度所得税', en: 'Annual Income Tax' },
    'svc.a.c3.period': { zh: '年度', en: 'Annually' },
    'svc.a.c4': { zh: '年度财务报表', en: 'Annual Financial Statements' },
    'svc.a.c4.period': { zh: '年度', en: 'Annually' },
    'svc.a.note': { zh: '所有申报均由专业会计师审核，确保准确合规。错过申报期限可能产生高额罚款。', en: 'All filings are reviewed by professional accountants to ensure accuracy and compliance. Missing filing deadlines may result in hefty penalties.' },

    // Tax detail
    'svc.t.label': { zh: '核心服务', en: 'Core Service' },
    'svc.t.title': { zh: '税务合规咨询', en: 'Tax Compliance Advisory' },
    'svc.t.desc': { zh: '荷兰税务体系复杂多变，合理的税务规划可以合法降低税负、规避风险。我们的税务顾问团队深入了解中荷双边税务协定，为您提供最优的税务结构建议。', en: 'The Dutch tax system is complex and ever-changing. Proper tax planning can legitimately reduce tax burden and mitigate risks. Our tax advisor team has deep understanding of the China-Netherlands bilateral tax treaty and provides optimal tax structure recommendations.' },
    'svc.t.f1.title': { zh: '税务结构优化', en: 'Tax Structure Optimization' },
    'svc.t.f1.desc': { zh: '分析业务结构，设计最优税务架构', en: 'Analyze business structure, design optimal tax architecture' },
    'svc.t.f2.title': { zh: '跨境税务规划', en: 'Cross-border Tax Planning' },
    'svc.t.f2.desc': { zh: '利用中荷双边协定，优化跨境交易税务成本', en: 'Leverage China-Netherlands bilateral treaty, optimize cross-border transaction tax costs' },
    'svc.t.f3.title': { zh: '税务稽查应对', en: 'Tax Audit Response' },
    'svc.t.f3.desc': { zh: '专业协助应对荷兰税务局稽查，保护客户权益', en: 'Professional assistance in responding to Dutch tax authority audits, protecting client interests' },
    'svc.t.f4.title': { zh: '政策变化跟踪', en: 'Policy Change Tracking' },
    'svc.t.f4.desc': { zh: '实时跟踪荷兰税务政策变化，及时提醒客户调整', en: 'Real-time tracking of Dutch tax policy changes, timely client notifications for adjustments' },
    'svc.t.btn': { zh: '预约税务咨询', en: 'Book Tax Consultation' },
    'svc.t.result': { zh: '服务成效', en: 'Service Results' },
    'svc.t.r1.val': { zh: '30%+', en: '30%+' },
    'svc.t.r1.desc': { zh: '平均为客户降低税务成本', en: 'Average tax cost reduction for clients' },
    'svc.t.r2.val': { zh: '100%', en: '100%' },
    'svc.t.r2.desc': { zh: '合规达标，零稽查风险', en: 'Compliance achieved, zero audit risk' },
    'svc.t.r3.val': { zh: '实时', en: 'Real-time' },
    'svc.t.r3.desc': { zh: '政策变化第一时间通知', en: 'Immediate notification of policy changes' },

    'svc.page.cta.title': { zh: '不确定需要哪项服务？', en: 'Not Sure Which Service You Need?' },
    'svc.page.cta.desc': { zh: '预约免费咨询，我们帮您梳理需求，推荐最合适的方案。', en: 'Book a free consultation and we\'ll help you clarify your needs and recommend the best solution.' },
    'svc.page.cta.btn': { zh: '免费咨询', en: 'Free Consultation' },

    // === Contact Page ===
    'ct.tag': { zh: 'Contact', en: 'Contact' },
    'ct.title': { zh: '联系我们', en: 'Contact Us' },
    'ct.desc': { zh: '无论您有任何问题或需求，我们都乐意倾听。预约一次免费咨询，让我们了解如何帮助您。', en: 'Whatever questions or needs you have, we\'re here to listen. Book a free consultation and let us understand how we can help.' },
    'ct.form.title': { zh: '预约免费咨询', en: 'Book a Free Consultation' },
    'ct.form.desc': { zh: '填写以下信息，我们将在 24 小时内与您联系。', en: 'Fill in the information below and we\'ll contact you within 24 hours.' },
    'ct.name': { zh: '姓名 *', en: 'Name *' },
    'ct.name.ph': { zh: '您的姓名', en: 'Your name' },
    'ct.company': { zh: '公司名称', en: 'Company Name' },
    'ct.company.ph': { zh: '公司名称（如有）', en: 'Company name (if applicable)' },
    'ct.email': { zh: '电子邮箱 *', en: 'Email *' },
    'ct.phone': { zh: '电话', en: 'Phone' },
    'ct.service': { zh: '感兴趣的服务', en: 'Service of Interest' },
    'ct.service.ph': { zh: '请选择...', en: 'Please select...' },
    'ct.service.1': { zh: '荷兰公司成立', en: 'Dutch Company Formation' },
    'ct.service.2': { zh: '记账报税', en: 'Bookkeeping & Tax' },
    'ct.service.3': { zh: '税务合规咨询', en: 'Tax Compliance Advisory' },
    'ct.service.4': { zh: '其他 / 不确定', en: 'Other / Not Sure' },
    'ct.message': { zh: '留言', en: 'Message' },
    'ct.message.ph': { zh: '请简要描述您的需求...', en: 'Please briefly describe your needs...' },
    'ct.submit': { zh: '提交咨询', en: 'Submit Inquiry' },
    'ct.note': { zh: '提交即表示您同意我们的隐私政策。我们承诺保护您的个人信息安全。', en: 'By submitting, you agree to our privacy policy. We promise to protect your personal information.' },
    'ct.phone.label': { zh: '电话', en: 'Phone' },
    'ct.phone.sub': { zh: '工作日 9:00 - 18:00 (CET)', en: 'Business Days 9:00 - 18:00 (CET)' },
    'ct.email.label': { zh: '邮箱', en: 'Email' },
    'ct.email.sub': { zh: '工作日 24 小时内回复', en: 'Reply within 24 hours on business days' },
    'ct.addr.label': { zh: '地址', en: 'Address' },
    'ct.addr.sub': { zh: 'KVK: 94223629', en: 'KVK: 94223629' },
    'ct.resp.label': { zh: '响应时间', en: 'Response Time' },
    'ct.resp.desc': { zh: '工作日 24 小时内回复', en: 'Reply within 24 hours on business days' },
    'ct.faq.label': { zh: '常见问题', en: 'FAQ' },
    'ct.faq.title': { zh: '您可能想知道的', en: 'You May Want to Know' },
    'ct.faq.1.q': { zh: '在荷兰成立公司需要多长时间？', en: 'How long does it take to form a company in the Netherlands?' },
    'ct.faq.1.a': { zh: '一般情况下，BV 公司从开始准备到完成注册约需 3-5 个工作日。实际时间取决于文件准备的完整性和公证安排。我们会尽力加快流程，让您尽快开始运营。', en: 'Typically, it takes about 3-5 business days from preparation to completion of BV registration. Actual time depends on document preparation completeness and notary arrangements. We strive to expedite the process so you can start operations as soon as possible.' },
    'ct.faq.2.q': { zh: '成立 BV 公司需要多少注册资本？', en: 'How much capital is required to form a BV company?' },
    'ct.faq.2.a': { zh: '自 2012 年起，荷兰 BV 公司不再有最低注册资本要求（此前为 €18,000）。您甚至可以以 €0.01 的注册资本成立 BV 公司。这使得荷兰成为欧洲最受欢迎的公司设立地之一。', en: 'Since 2012, Dutch BV companies no longer have a minimum capital requirement (previously €18,000). You can even form a BV with just €0.01 in capital. This makes the Netherlands one of the most popular company formation locations in Europe.' },
    'ct.faq.3.q': { zh: '记账报税服务的费用是多少？', en: 'How much do bookkeeping & tax services cost?' },
    'ct.faq.3.a': { zh: '我们采用固定月费模式，费用根据公司业务量和复杂程度而定。基础套餐从 €150/月起，包含日常记账和季度 BTW 申报。具体费用请在咨询时告知我们您的业务情况，我们会提供详细报价。', en: 'We use a fixed monthly fee model, with costs depending on business volume and complexity. Basic packages start from €150/month, including daily bookkeeping and quarterly BTW filing. Please tell us about your business during consultation for a detailed quote.' },
    'ct.faq.4.q': { zh: '可以远程完成所有流程吗？', en: 'Can all processes be completed remotely?' },
    'ct.faq.4.a': { zh: '是的，大部分流程都可以远程完成。公司注册可以通过公证处的远程公证服务完成，银行开户也有支持远程开户的选项。我们的中荷双语团队可以通过微信、邮件和电话全程协助您。', en: 'Yes, most processes can be completed remotely. Company registration can be done through remote notary services, and some banks offer remote account opening. Our bilingual team can assist you throughout via WeChat, email, and phone.' },
    'ct.faq.5.q': { zh: '你们服务哪些类型的企业？', en: 'What types of businesses do you serve?' },
    'ct.faq.5.a': { zh: '我们主要服务在荷兰经营的中小企业，包括跨境电商、科技初创、贸易公司、咨询服务公司等。无论您是刚起步还是已经运营多年，我们都能提供匹配的专业支持。', en: 'We primarily serve SMEs operating in the Netherlands, including cross-border e-commerce, tech startups, trading companies, and consulting firms. Whether you\'re just starting out or have been operating for years, we can provide matching professional support.' },
  },

  // Apply translations
  apply(lang) {
    this.currentLang = lang;
    localStorage.setItem('sf-lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (this.dict[key] && this.dict[key][lang]) {
        el.innerHTML = this.dict[key][lang];
      }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      if (this.dict[key] && this.dict[key][lang]) {
        el.placeholder = this.dict[key][lang];
      }
    });

    // Update page title
    const titleEl = document.querySelector('[data-i18n-title]');
    if (titleEl) {
      document.title = titleEl.getAttribute('data-i18n-title') === 'home'
        ? (lang === 'zh' ? 'Sammafinance — 荷兰公司成立 & 中小企业记账报税' : 'Sammafinance — Dutch Company Formation & SME Bookkeeping')
        : titleEl.getAttribute('data-i18n-title') === 'about'
        ? (lang === 'zh' ? '关于我们 - Sammafinance' : 'About Us - Sammafinance')
        : titleEl.getAttribute('data-i18n-title') === 'services'
        ? (lang === 'zh' ? '我们的服务 - Sammafinance' : 'Our Services - Sammafinance')
        : titleEl.getAttribute('data-i18n-title') === 'contact'
        ? (lang === 'zh' ? '联系我们 - Sammafinance' : 'Contact Us - Sammafinance')
        : document.title;
    }

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      const titleKey = document.querySelector('[data-i18n-title]');
      if (titleKey) {
        const page = titleKey.getAttribute('data-i18n-title');
        if (page === 'home') metaDesc.content = lang === 'zh'
          ? 'Sammafinance 提供荷兰公司成立、中小企业记账报税等专业服务。超过10年经验，服务超百家公司。'
          : 'Sammafinance provides Dutch company formation, SME bookkeeping & tax filing services. Over 10 years of experience, serving 100+ companies.';
        else if (page === 'about') metaDesc.content = lang === 'zh'
          ? 'Sammafinance 拥有超过10年荷兰财务服务经验，已服务超百家企业。'
          : 'Sammafinance has over 10 years of Dutch financial service experience, serving 100+ businesses.';
        else if (page === 'services') metaDesc.content = lang === 'zh'
          ? 'Sammafinance 提供荷兰公司成立、中小企业记账报税、税务合规咨询等专业服务。'
          : 'Sammafinance provides Dutch company formation, SME bookkeeping & tax, and tax compliance advisory services.';
        else if (page === 'contact') metaDesc.content = lang === 'zh'
          ? '联系 Sammafinance，预约免费咨询荷兰公司成立及记账报税服务。'
          : 'Contact Sammafinance for a free consultation on Dutch company formation and bookkeeping & tax services.';
      }
    }

    // Update language switcher active state
    document.querySelectorAll('.lang-switch').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  },

  toggle(lang) {
    this.apply(lang);
  }
};

// --- Init on DOM ready ---
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved language
  i18n.apply(i18n.currentLang);

  // Language switcher buttons
  document.querySelectorAll('.lang-switch').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      i18n.toggle(btn.dataset.lang);
    });
  });
});

// Navbar scroll
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  });
}

// Mobile menu
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');
if (mobileToggle && navMenu) {
  mobileToggle.addEventListener('click', () => navMenu.classList.toggle('open'));
  navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navMenu.classList.remove('open')));
}

// Case carousel
const dots = document.querySelectorAll('.case-dot');
const slides = document.querySelectorAll('.case-slide');
if (dots.length && slides.length) {
  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = dot.dataset.slide;
      dots.forEach(d => d.classList.remove('active'));
      slides.forEach(s => s.classList.remove('active'));
      dots[idx].classList.add('active');
      slides[idx].classList.add('active');
    });
  });
  let current = 0;
  setInterval(() => {
    current = (current + 1) % slides.length;
    dots.forEach(d => d.classList.remove('active'));
    slides.forEach(s => s.classList.remove('active'));
    dots[current].classList.add('active');
    slides[current].classList.add('active');
  }, 6000);
}

// Contact form
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
if (contactForm && formSuccess) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.style.display = 'none';
    formSuccess.style.display = 'block';
  });
}

// FAQ toggle
function toggleFaq(btn) {
  const item = btn.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
