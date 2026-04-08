export interface EmployerCountryData {
  slug: string;
  name: string;
  fullName: string;
  region: "gulf" | "europe";
  flag: string;

  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  // Hero
  heroHeadline: string;
  heroSubtext: string;
  stats: { value: string; label: string }[];

  // Industries
  topIndustries: {
    title: string;
    description: string;
    workerCount?: string;
    icon: string; // SVG path or emoji
  }[];

  // Compliance
  compliancePoints: { title: string; description: string }[];

  // FAQs
  faqs: { q: string; a: string }[];

  // Related pages
  relatedVisaPage?: string;
  relatedJobsPage?: string;

  phonePrefix: string;
}

export const employerCountries: EmployerCountryData[] = [
  // ────────────────────── GULF COUNTRIES ──────────────────────
  {
    slug: "uae",
    name: "UAE",
    fullName: "United Arab Emirates",
    region: "gulf",
    flag: "\u{1F1E6}\u{1F1EA}",
    metaTitle: "Hire Skilled Indian Workers for UAE | Licensed Manpower Agency India",
    metaDescription:
      "Recruit pre-screened Indian workers for UAE construction, hospitality, oil & gas, and manufacturing. Government-licensed agency (MEA RA B-1794). 2,000+ workers deployed to Dubai, Abu Dhabi & Sharjah.",
    keywords: [
      "hire Indian workers UAE",
      "manpower supply Dubai",
      "Indian labour supplier UAE",
      "recruitment agency India to UAE",
      "construction workers for Dubai",
      "skilled workers UAE from India",
    ],
    heroHeadline: "Hire Skilled Indian Workers for the UAE",
    heroSubtext:
      "Source pre-screened, skilled workforce from India for your UAE operations. From Dubai's construction boom to Abu Dhabi's hospitality sector — we supply reliable, compliant manpower with 25+ years of deployment experience.",
    stats: [
      { value: "2,000+", label: "Workers in UAE" },
      { value: "6+", label: "Industries" },
      { value: "98%", label: "Retention Rate" },
      { value: "30 Days", label: "Avg. Deployment" },
    ],
    topIndustries: [
      {
        title: "Construction & Infrastructure",
        description: "Masons, carpenters, steel fixers, electricians, plumbers, painters, and heavy equipment operators for UAE mega-projects and urban development.",
        workerCount: "1,200+",
        icon: "building",
      },
      {
        title: "Hospitality & Tourism",
        description: "Chefs, waiters, housekeeping, front-desk staff, and hotel management professionals for Dubai's world-class hospitality industry.",
        workerCount: "400+",
        icon: "hotel",
      },
      {
        title: "Oil & Gas",
        description: "Welders, fitters, riggers, scaffolders, and pipeline technicians for offshore and onshore operations across the Emirates.",
        workerCount: "350+",
        icon: "oil",
      },
      {
        title: "Manufacturing & Warehousing",
        description: "Machine operators, quality inspectors, warehouse staff, and production line workers for Jebel Ali and industrial zones.",
        workerCount: "300+",
        icon: "factory",
      },
      {
        title: "Retail & Sales",
        description: "Sales associates, visual merchandisers, and store managers for Dubai's thriving retail and commercial sector.",
        workerCount: "150+",
        icon: "retail",
      },
      {
        title: "Logistics & Transport",
        description: "Drivers (light & heavy), dispatchers, and supply chain workers supporting UAE's trade and logistics hub.",
        workerCount: "200+",
        icon: "truck",
      },
    ],
    compliancePoints: [
      {
        title: "UAE Labour Law Compliant",
        description: "All contracts comply with UAE Federal Labour Law and MOHRE regulations. We ensure proper employment contracts, wage protection (WPS), and end-of-service benefits.",
      },
      {
        title: "E-Migrate Registered",
        description: "Every worker deployment is registered through India's E-Migrate system, ensuring full government oversight and worker protection.",
      },
      {
        title: "GAMCA Medical Clearance",
        description: "We coordinate GCC Approved Medical Centres Association (GAMCA) medical exams before departure — no delays on arrival.",
      },
      {
        title: "Embassy Attestation Handled",
        description: "Complete document attestation through the UAE Embassy and MEA, including educational certificates, employment contracts, and power of attorney.",
      },
    ],
    faqs: [
      {
        q: "How quickly can you deploy workers to the UAE?",
        a: "Typically 25-35 days from requirement confirmation to worker arrival, depending on visa processing times and trade test requirements.",
      },
      {
        q: "What is the minimum number of workers I can hire?",
        a: "We handle orders from 5 workers to 500+. There is no minimum — we tailor our process to your specific needs.",
      },
      {
        q: "Do you handle visa processing for UAE?",
        a: "Yes, we manage the complete visa process including medical (GAMCA), document attestation, embassy coordination, and E-Migrate registration.",
      },
      {
        q: "What industries do you supply workers for in the UAE?",
        a: "Construction, hospitality, oil & gas, manufacturing, retail, logistics, healthcare, and facility management across Dubai, Abu Dhabi, Sharjah, and other Emirates.",
      },
      {
        q: "Are your workers pre-screened and tested?",
        a: "Yes. Every candidate undergoes multi-stage screening: skill assessment, trade test, background verification, medical examination, and personal interview before shortlisting.",
      },
    ],
    relatedVisaPage: "/visa/uae",
    relatedJobsPage: "/jobs/uae",
    phonePrefix: "+971",
  },

  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    fullName: "Kingdom of Saudi Arabia",
    region: "gulf",
    flag: "\u{1F1F8}\u{1F1E6}",
    metaTitle: "Hire Indian Workers for Saudi Arabia | Government-Licensed Recruitment Agency",
    metaDescription:
      "Recruit skilled Indian manpower for Saudi Arabia's Vision 2030 projects. Construction, oil & gas, hospitality & manufacturing. MEA licensed agency with 1,500+ workers deployed to KSA.",
    keywords: [
      "hire Indian workers Saudi Arabia",
      "manpower agency India to KSA",
      "construction workers Saudi Arabia",
      "Indian labour supply Riyadh Jeddah",
      "recruitment agency for Saudi Arabia",
      "Vision 2030 manpower supply",
    ],
    heroHeadline: "Hire Skilled Indian Workers for Saudi Arabia",
    heroSubtext:
      "Power your Vision 2030 projects with pre-screened, skilled Indian workforce. From NEOM mega-projects to Riyadh's hospitality expansion — we deploy reliable manpower with full Saudi labour law compliance.",
    stats: [
      { value: "1,500+", label: "Workers in KSA" },
      { value: "5+", label: "Industries" },
      { value: "97%", label: "Retention Rate" },
      { value: "28 Days", label: "Avg. Deployment" },
    ],
    topIndustries: [
      {
        title: "Construction & Infrastructure",
        description: "Masons, welders, steel fixers, crane operators, and civil workers for Vision 2030 mega-projects including NEOM, The Line, and Riyadh Metro.",
        workerCount: "800+",
        icon: "building",
      },
      {
        title: "Oil & Gas",
        description: "Pipeline fitters, welders, scaffolders, instrument technicians, and rig workers for Aramco and other petroleum sector operations.",
        workerCount: "350+",
        icon: "oil",
      },
      {
        title: "Hospitality & Catering",
        description: "Chefs, stewards, housekeeping, and F&B service staff for Saudi Arabia's rapidly expanding tourism and hospitality industry.",
        workerCount: "200+",
        icon: "hotel",
      },
      {
        title: "Manufacturing",
        description: "Machine operators, production supervisors, quality controllers, and packaging workers for industrial cities like Jubail and Yanbu.",
        workerCount: "250+",
        icon: "factory",
      },
      {
        title: "Healthcare Support",
        description: "Nursing assistants, lab technicians, hospital cleaners, and medical equipment operators for KSA's growing healthcare network.",
        workerCount: "100+",
        icon: "healthcare",
      },
    ],
    compliancePoints: [
      {
        title: "Saudi Labour Law Compliant",
        description: "All employment contracts conform to Saudi Labour Law and HRSD regulations. Proper Iqama processing, wage protection, and Nitaqat compliance ensured.",
      },
      {
        title: "Musaned Platform Registered",
        description: "Worker recruitment is fully registered and tracked through Saudi Arabia's Musaned platform for domestic and overseas recruitment transparency.",
      },
      {
        title: "GAMCA Medical Coordination",
        description: "Pre-departure GAMCA medical examinations arranged at approved centres. Medical fitness certificates processed before visa stamping.",
      },
      {
        title: "E-Migrate & Embassy Attestation",
        description: "Full document attestation through MEA and Saudi Embassy. E-Migrate registration ensures government-tracked, legal deployment.",
      },
    ],
    faqs: [
      {
        q: "Can you supply workers for Vision 2030 projects?",
        a: "Yes, we actively supply manpower for mega-projects under Vision 2030 including construction, hospitality, and infrastructure development across KSA.",
      },
      {
        q: "What is the deployment timeline for Saudi Arabia?",
        a: "Typically 25-35 days from demand confirmation to worker arrival, including visa processing, medical clearance, and pre-departure orientation.",
      },
      {
        q: "Do you handle Iqama and residency processing?",
        a: "We coordinate all pre-departure requirements. Iqama (residency permit) processing is handled by the employer upon worker arrival, but we ensure all documents are ready.",
      },
      {
        q: "What trades and skills are available?",
        a: "We supply workers across all major trades: masons, welders, electricians, plumbers, carpenters, drivers, machine operators, chefs, cleaners, and more.",
      },
      {
        q: "Is there a charge to workers?",
        a: "No. We follow ILO ethical recruitment principles — our employer-funded model means zero charges to workers, ensuring motivated and committed candidates.",
      },
    ],
    relatedVisaPage: "/visa/saudi-arabia",
    relatedJobsPage: "/jobs/saudi-arabia",
    phonePrefix: "+966",
  },

  {
    slug: "qatar",
    name: "Qatar",
    fullName: "State of Qatar",
    region: "gulf",
    flag: "\u{1F1F6}\u{1F1E6}",
    metaTitle: "Hire Indian Workers for Qatar | Licensed Manpower Consultancy India",
    metaDescription:
      "Source skilled Indian workers for Qatar's construction, oil & gas, and hospitality sectors. Government-licensed (MEA). 800+ workers deployed to Doha and across Qatar.",
    keywords: [
      "hire Indian workers Qatar",
      "manpower supply Doha",
      "Indian recruitment agency Qatar",
      "construction workers Qatar from India",
      "Qatar manpower supplier",
    ],
    heroHeadline: "Hire Skilled Indian Workers for Qatar",
    heroSubtext:
      "Deploy pre-screened Indian workforce for Qatar's infrastructure, energy, and hospitality sectors. With 800+ successful placements in Doha and beyond, we deliver reliable manpower with full Qatar Labour Law compliance.",
    stats: [
      { value: "800+", label: "Workers in Qatar" },
      { value: "5+", label: "Industries" },
      { value: "97%", label: "Retention Rate" },
      { value: "30 Days", label: "Avg. Deployment" },
    ],
    topIndustries: [
      {
        title: "Construction & Infrastructure",
        description: "Skilled tradespeople for Qatar's ongoing mega-projects including Lusail City, metro expansion, and commercial developments in Doha.",
        workerCount: "400+",
        icon: "building",
      },
      {
        title: "Oil & Gas",
        description: "Welders, fitters, instrument technicians, and process operators for Qatar Energy and LNG operations in Ras Laffan and Mesaieed.",
        workerCount: "200+",
        icon: "oil",
      },
      {
        title: "Hospitality & F&B",
        description: "Chefs, waiters, housekeeping, and front-office staff for Qatar's growing tourism industry and world-class hotels.",
        workerCount: "120+",
        icon: "hotel",
      },
      {
        title: "Facility Management",
        description: "HVAC technicians, electricians, plumbers, and general maintenance workers for commercial and residential properties.",
        workerCount: "100+",
        icon: "factory",
      },
    ],
    compliancePoints: [
      {
        title: "Qatar Labour Law Compliant",
        description: "Employment contracts conform to Qatar Labour Law No. 14 of 2004. Proper QID processing, wage protection system (WPS), and minimum wage compliance ensured.",
      },
      {
        title: "No Kafala Restrictions",
        description: "Qatar has reformed its sponsorship system. Workers can change jobs freely — we ensure all placements follow the new labour mobility regulations.",
      },
      {
        title: "GAMCA Medical & Visa Processing",
        description: "Complete medical examination at GAMCA-approved centres and visa coordination with Qatar Embassy handled end-to-end.",
      },
      {
        title: "Worker Welfare Standards",
        description: "Full compliance with Qatar's Supreme Committee worker welfare standards including accommodation, transportation, and working condition requirements.",
      },
    ],
    faqs: [
      {
        q: "How fast can you deploy workers to Qatar?",
        a: "Typically 28-35 days from requirement confirmation, including visa processing, GAMCA medical, and pre-departure training.",
      },
      {
        q: "What types of workers do you supply for Qatar?",
        a: "We supply across construction, oil & gas, hospitality, facility management, and logistics — from helpers to skilled tradespeople and supervisors.",
      },
      {
        q: "Do workers get proper contracts?",
        a: "Yes, every worker receives a Qatar Labour Law compliant employment contract with clear terms on salary, benefits, accommodation, and working conditions.",
      },
      {
        q: "Can you arrange video interviews?",
        a: "Absolutely. We facilitate on-site, video, or office-based interviews. We can set up dedicated interview sessions with shortlisted candidates.",
      },
    ],
    relatedVisaPage: "/visa/qatar",
    relatedJobsPage: "/jobs/qatar",
    phonePrefix: "+974",
  },

  {
    slug: "kuwait",
    name: "Kuwait",
    fullName: "State of Kuwait",
    region: "gulf",
    flag: "\u{1F1F0}\u{1F1FC}",
    metaTitle: "Hire Indian Workers for Kuwait | Trusted Recruitment Agency India",
    metaDescription:
      "Recruit skilled Indian manpower for Kuwait's construction, oil & gas, and service sectors. MEA-licensed agency. 500+ workers deployed with full Kuwait labour law compliance.",
    keywords: [
      "hire Indian workers Kuwait",
      "manpower supply Kuwait",
      "Indian recruitment agency Kuwait",
      "construction workers Kuwait",
      "Kuwait manpower from India",
    ],
    heroHeadline: "Hire Skilled Indian Workers for Kuwait",
    heroSubtext:
      "Source reliable, pre-screened Indian workforce for Kuwait's construction, petroleum, and service sectors. 500+ successful placements with full compliance and rapid deployment.",
    stats: [
      { value: "500+", label: "Workers in Kuwait" },
      { value: "4+", label: "Industries" },
      { value: "96%", label: "Retention Rate" },
      { value: "30 Days", label: "Avg. Deployment" },
    ],
    topIndustries: [
      {
        title: "Construction",
        description: "Masons, electricians, plumbers, carpenters, and steel fixers for Kuwait's infrastructure and residential projects.",
        workerCount: "250+",
        icon: "building",
      },
      {
        title: "Oil & Gas",
        description: "Welders, fitters, riggers, and process operators for Kuwait Oil Company and petrochemical operations.",
        workerCount: "150+",
        icon: "oil",
      },
      {
        title: "Hospitality & Catering",
        description: "Chefs, stewards, cleaners, and F&B staff for hotels, restaurants, and catering companies across Kuwait City.",
        workerCount: "80+",
        icon: "hotel",
      },
      {
        title: "General Services",
        description: "Drivers, security guards, cleaners, and facility maintenance workers for commercial and government establishments.",
        workerCount: "100+",
        icon: "truck",
      },
    ],
    compliancePoints: [
      {
        title: "Kuwait Labour Law Compliant",
        description: "All contracts comply with Kuwait Labour Law No. 6 of 2010. Proper residency permit processing, salary schedules, and worker rights ensured.",
      },
      {
        title: "PAM Registration",
        description: "Worker permits processed through Kuwait's Public Authority for Manpower (PAM) with full transparency and legal compliance.",
      },
      {
        title: "GAMCA Medical & Visa",
        description: "Pre-departure medical at GAMCA-approved centres and complete visa processing through Kuwait Embassy coordinated by our team.",
      },
      {
        title: "E-Migrate Tracked",
        description: "Every deployment registered on India's E-Migrate system for government oversight and worker protection throughout the employment period.",
      },
    ],
    faqs: [
      {
        q: "What is the deployment timeline for Kuwait?",
        a: "Typically 30-40 days from demand confirmation to worker arrival, depending on visa type and medical clearance.",
      },
      {
        q: "Do you supply both skilled and unskilled workers?",
        a: "Yes, we supply across all skill levels — from general helpers and cleaners to skilled tradespeople, technicians, and supervisors.",
      },
      {
        q: "How do you ensure worker quality?",
        a: "Multi-stage screening: skill tests, trade assessments, background checks, medical exams, and personal interviews before any candidate is shortlisted.",
      },
      {
        q: "Is there any cost to the workers?",
        a: "No. We follow ethical, employer-funded recruitment. Workers pay zero recruitment fees — ensuring motivated, committed employees.",
      },
    ],
    relatedVisaPage: "/visa/kuwait",
    relatedJobsPage: undefined,
    phonePrefix: "+965",
  },

  {
    slug: "bahrain",
    name: "Bahrain",
    fullName: "Kingdom of Bahrain",
    region: "gulf",
    flag: "\u{1F1E7}\u{1F1ED}",
    metaTitle: "Hire Indian Workers for Bahrain | Licensed Manpower Agency India",
    metaDescription:
      "Source skilled Indian workers for Bahrain's construction, hospitality, and manufacturing sectors. Government-licensed recruitment agency with proven deployment track record.",
    keywords: [
      "hire Indian workers Bahrain",
      "manpower supply Bahrain",
      "Indian recruitment agency Bahrain",
      "Bahrain manpower from India",
      "construction workers Bahrain",
    ],
    heroHeadline: "Hire Skilled Indian Workers for Bahrain",
    heroSubtext:
      "Deploy pre-screened Indian workforce for Bahrain's growing economy. From construction and manufacturing to hospitality — we provide compliant, reliable manpower with rapid deployment.",
    stats: [
      { value: "300+", label: "Workers in Bahrain" },
      { value: "4+", label: "Industries" },
      { value: "96%", label: "Retention Rate" },
      { value: "28 Days", label: "Avg. Deployment" },
    ],
    topIndustries: [
      {
        title: "Construction",
        description: "Masons, electricians, plumbers, and civil workers for Bahrain's real estate and infrastructure development projects.",
        workerCount: "150+",
        icon: "building",
      },
      {
        title: "Manufacturing",
        description: "Machine operators, production workers, and quality inspectors for Bahrain's aluminium, petrochemical, and food processing industries.",
        workerCount: "80+",
        icon: "factory",
      },
      {
        title: "Hospitality",
        description: "Chefs, waiters, housekeeping, and hotel staff for Bahrain's tourism and hospitality establishments.",
        workerCount: "50+",
        icon: "hotel",
      },
      {
        title: "Retail & Services",
        description: "Sales staff, drivers, cleaners, and facility workers for commercial and retail operations across Manama and Muharraq.",
        workerCount: "60+",
        icon: "retail",
      },
    ],
    compliancePoints: [
      {
        title: "Bahrain Labour Law Compliant",
        description: "All contracts comply with Bahrain's Labour Law. LMRA work permit processing, flexi-permit coordination, and wage protection ensured.",
      },
      {
        title: "LMRA Registered",
        description: "Worker permits coordinated through the Labour Market Regulatory Authority (LMRA) with full legal compliance and transparency.",
      },
      {
        title: "GAMCA Medical Clearance",
        description: "Pre-departure medical exams at GAMCA-approved centres. Medical fitness certificates processed before visa application.",
      },
      {
        title: "Ethical Recruitment Standards",
        description: "ILO-compliant, employer-funded recruitment model. Zero charges to workers, ensuring high morale and low attrition.",
      },
    ],
    faqs: [
      {
        q: "How quickly can workers be deployed to Bahrain?",
        a: "Typically 25-30 days from requirement confirmation, including visa processing, medical clearance, and pre-departure orientation.",
      },
      {
        q: "What skill levels do you supply?",
        a: "We supply across all levels — helpers, semi-skilled, skilled tradespeople, technicians, and supervisory roles.",
      },
      {
        q: "Do you handle all documentation?",
        a: "Yes, we manage everything: document attestation, GAMCA medical, visa processing, E-Migrate registration, and travel arrangements.",
      },
      {
        q: "Can I interview candidates before hiring?",
        a: "Absolutely. We arrange video interviews, in-person interviews at our office, or on-site selection drives based on your preference.",
      },
    ],
    relatedVisaPage: "/visa/bahrain",
    relatedJobsPage: undefined,
    phonePrefix: "+973",
  },

  {
    slug: "oman",
    name: "Oman",
    fullName: "Sultanate of Oman",
    region: "gulf",
    flag: "\u{1F1F4}\u{1F1F2}",
    metaTitle: "Hire Indian Workers for Oman | Trusted Recruitment Agency India",
    metaDescription:
      "Recruit skilled Indian manpower for Oman's construction, oil & gas, and hospitality sectors. Government-licensed (MEA) with reliable deployment across Muscat and Oman.",
    keywords: [
      "hire Indian workers Oman",
      "manpower supply Oman",
      "Indian recruitment agency Oman",
      "construction workers Oman",
      "Oman manpower from India",
    ],
    heroHeadline: "Hire Skilled Indian Workers for Oman",
    heroSubtext:
      "Source reliable Indian workforce for Oman's construction, energy, and tourism sectors. We deploy pre-screened, compliant manpower for projects across Muscat, Sohar, and Duqm.",
    stats: [
      { value: "400+", label: "Workers in Oman" },
      { value: "4+", label: "Industries" },
      { value: "96%", label: "Retention Rate" },
      { value: "30 Days", label: "Avg. Deployment" },
    ],
    topIndustries: [
      {
        title: "Construction & Infrastructure",
        description: "Skilled tradespeople for Oman's infrastructure projects including roads, buildings, and Duqm Special Economic Zone development.",
        workerCount: "200+",
        icon: "building",
      },
      {
        title: "Oil & Gas",
        description: "Welders, fitters, and process operators for Petroleum Development Oman and refinery operations across the Sultanate.",
        workerCount: "120+",
        icon: "oil",
      },
      {
        title: "Hospitality & Tourism",
        description: "Hotel staff, chefs, and service workers for Oman's growing tourism industry and luxury resort developments.",
        workerCount: "50+",
        icon: "hotel",
      },
      {
        title: "Facility Management",
        description: "Maintenance workers, electricians, HVAC technicians, and cleaning staff for commercial and government properties.",
        workerCount: "60+",
        icon: "factory",
      },
    ],
    compliancePoints: [
      {
        title: "Oman Labour Law Compliant",
        description: "All employment contracts comply with Oman's Labour Law. Proper work permit processing through Ministry of Manpower and Omanisation requirements addressed.",
      },
      {
        title: "Ministry of Manpower Coordination",
        description: "Work permits and employment visas processed in coordination with Oman's Ministry of Manpower for full legal compliance.",
      },
      {
        title: "GAMCA Medical Clearance",
        description: "Pre-departure medical examination at GAMCA-approved centres ensures workers meet Oman's health requirements before departure.",
      },
      {
        title: "E-Migrate Registration",
        description: "All deployments registered through India's E-Migrate system, providing government tracking and worker protection.",
      },
    ],
    faqs: [
      {
        q: "What is the typical deployment timeline for Oman?",
        a: "28-35 days from demand confirmation, covering visa processing, GAMCA medical, document attestation, and pre-departure training.",
      },
      {
        q: "Can you supply workers for Duqm SEZ projects?",
        a: "Yes, we actively deploy workers for projects in Duqm Special Economic Zone, Sohar, and across the Sultanate.",
      },
      {
        q: "What trades are available for Oman?",
        a: "We supply masons, welders, electricians, plumbers, carpenters, drivers, machine operators, chefs, cleaners, and more.",
      },
      {
        q: "How do you handle Omanisation requirements?",
        a: "We understand Oman's Omanisation policy and ensure all placements are for roles where international workers are permitted under current regulations.",
      },
    ],
    relatedVisaPage: undefined,
    relatedJobsPage: undefined,
    phonePrefix: "+968",
  },

  // ────────────────────── EUROPEAN COUNTRIES ──────────────────────
  {
    slug: "poland",
    name: "Poland",
    fullName: "Republic of Poland",
    region: "europe",
    flag: "\u{1F1F5}\u{1F1F1}",
    metaTitle: "Hire Indian Workers for Poland | Licensed Recruitment Agency India",
    metaDescription:
      "Source skilled Indian workers for Poland's manufacturing, agriculture, and construction sectors. Government-licensed Indian agency with European labour compliance expertise.",
    keywords: [
      "hire Indian workers Poland",
      "Indian manpower Poland",
      "recruitment agency India to Poland",
      "manufacturing workers Poland",
      "Polish work permit Indian workers",
    ],
    heroHeadline: "Hire Skilled Indian Workers for Poland",
    heroSubtext:
      "Address Poland's labour shortage with pre-screened, skilled Indian workforce. We supply reliable workers for manufacturing, agriculture, construction, and logistics with full EU work permit compliance.",
    stats: [
      { value: "500+", label: "Workers in Poland" },
      { value: "4+", label: "Industries" },
      { value: "95%", label: "Retention Rate" },
      { value: "45 Days", label: "Avg. Deployment" },
    ],
    topIndustries: [
      {
        title: "Manufacturing & Production",
        description: "Assembly line workers, machine operators, CNC operators, welders, and quality controllers for Poland's automotive and industrial manufacturing sector.",
        workerCount: "250+",
        icon: "factory",
      },
      {
        title: "Agriculture & Food Processing",
        description: "Farm workers, food processing operators, meat processing workers, and packaging staff for Poland's large agricultural industry.",
        workerCount: "120+",
        icon: "retail",
      },
      {
        title: "Construction",
        description: "Masons, electricians, carpenters, and civil workers for residential and commercial construction projects across Poland.",
        workerCount: "80+",
        icon: "building",
      },
      {
        title: "Logistics & Warehousing",
        description: "Warehouse operators, forklift drivers, packers, and supply chain workers for distribution centres and e-commerce fulfilment.",
        workerCount: "70+",
        icon: "truck",
      },
    ],
    compliancePoints: [
      {
        title: "EU Work Permit Compliant",
        description: "All placements include proper Type A or B work permit processing through Polish Voivodeship offices. Full EU labour regulation compliance.",
      },
      {
        title: "Schengen Visa Coordination",
        description: "Complete Schengen visa application support including appointment booking, document preparation, and embassy coordination.",
      },
      {
        title: "Employment Contract Standards",
        description: "Contracts comply with Polish Labour Code including minimum wage, working hours, social insurance (ZUS), and worker accommodation requirements.",
      },
      {
        title: "E-Migrate & MEA Compliance",
        description: "All deployments registered through India's E-Migrate platform. MEA-licensed operations ensure full Indian government compliance.",
      },
    ],
    faqs: [
      {
        q: "How long does Poland work permit processing take?",
        a: "Typically 35-50 days total including work permit approval (2-4 weeks), Schengen visa processing, and pre-departure formalities.",
      },
      {
        q: "What types of workers do you supply for Poland?",
        a: "Manufacturing operators, welders, CNC operators, farm workers, food processors, construction trades, warehouse staff, and drivers.",
      },
      {
        q: "Do workers need to know Polish?",
        a: "Basic English is usually sufficient for most industrial roles. We provide pre-departure orientation including basic language and cultural training.",
      },
      {
        q: "What is the contract duration for Poland?",
        a: "Typically 1-2 years with possibility of extension. We handle all renewal paperwork and compliance requirements.",
      },
    ],
    relatedVisaPage: "/visa/poland",
    relatedJobsPage: "/jobs/poland",
    phonePrefix: "+48",
  },

  {
    slug: "romania",
    name: "Romania",
    fullName: "Romania",
    region: "europe",
    flag: "\u{1F1F7}\u{1F1F4}",
    metaTitle: "Hire Indian Workers for Romania | Trusted Manpower Agency India",
    metaDescription:
      "Recruit skilled Indian workers for Romania's manufacturing, construction, and agriculture sectors. Government-licensed Indian recruitment agency with EU compliance expertise.",
    keywords: [
      "hire Indian workers Romania",
      "Indian manpower Romania",
      "recruitment agency India to Romania",
      "Romania work permit India",
      "manufacturing workers Romania",
    ],
    heroHeadline: "Hire Skilled Indian Workers for Romania",
    heroSubtext:
      "Fill Romania's growing labour demand with skilled, pre-screened Indian workers. From automotive manufacturing to agriculture — we deploy compliant workforce with full EU work authorization.",
    stats: [
      { value: "350+", label: "Workers in Romania" },
      { value: "4+", label: "Industries" },
      { value: "95%", label: "Retention Rate" },
      { value: "45 Days", label: "Avg. Deployment" },
    ],
    topIndustries: [
      {
        title: "Manufacturing",
        description: "Machine operators, welders, assemblers, and production workers for Romania's automotive, electronics, and industrial manufacturing sectors.",
        workerCount: "180+",
        icon: "factory",
      },
      {
        title: "Construction",
        description: "Masons, electricians, plumbers, and general construction workers for Romania's residential and commercial building projects.",
        workerCount: "80+",
        icon: "building",
      },
      {
        title: "Agriculture",
        description: "Farm workers, greenhouse operators, and food processing workers for Romania's agricultural and agri-business sector.",
        workerCount: "60+",
        icon: "retail",
      },
      {
        title: "Logistics",
        description: "Warehouse workers, drivers, and supply chain staff for distribution and logistics operations across Romania.",
        workerCount: "40+",
        icon: "truck",
      },
    ],
    compliancePoints: [
      {
        title: "Romanian Work Authorization",
        description: "Full work permit processing through Romania's General Inspectorate for Immigration. Proper employment authorization for all deployed workers.",
      },
      {
        title: "EU Labour Standards",
        description: "Contracts comply with Romanian Labour Code and EU worker protection directives including minimum wage, working hours, and social contributions.",
      },
      {
        title: "Visa & Travel Coordination",
        description: "Complete visa application support, travel arrangements, and airport reception coordination for smooth worker arrival.",
      },
      {
        title: "E-Migrate Registered",
        description: "Government-tracked deployment through India's E-Migrate system ensuring full transparency and worker protection.",
      },
    ],
    faqs: [
      {
        q: "What is the deployment timeline for Romania?",
        a: "Typically 40-55 days including work permit processing, visa application, and pre-departure formalities.",
      },
      {
        q: "What industries need Indian workers in Romania?",
        a: "Manufacturing (automotive, electronics), construction, agriculture, food processing, and logistics are the primary sectors hiring Indian workers.",
      },
      {
        q: "Do you handle accommodation arrangements?",
        a: "We coordinate with employers to ensure proper accommodation is arranged before workers arrive. This is typically employer-provided for international workers.",
      },
      {
        q: "Can workers bring their families?",
        a: "Family reunification is possible after the initial employment period, subject to Romanian immigration regulations. We can advise on the process.",
      },
    ],
    relatedVisaPage: "/visa/romania",
    relatedJobsPage: "/jobs/romania",
    phonePrefix: "+40",
  },

  {
    slug: "croatia",
    name: "Croatia",
    fullName: "Republic of Croatia",
    region: "europe",
    flag: "\u{1F1ED}\u{1F1F7}",
    metaTitle: "Hire Indian Workers for Croatia | Licensed Indian Recruitment Agency",
    metaDescription:
      "Source skilled Indian manpower for Croatia's tourism, construction, and manufacturing sectors. Government-licensed agency with EU work permit expertise.",
    keywords: [
      "hire Indian workers Croatia",
      "Indian manpower Croatia",
      "recruitment agency India to Croatia",
      "Croatia work permit Indian workers",
      "tourism workers Croatia",
    ],
    heroHeadline: "Hire Skilled Indian Workers for Croatia",
    heroSubtext:
      "Address Croatia's seasonal and permanent labour needs with reliable Indian workforce. Tourism, construction, and manufacturing workers deployed with full EU compliance.",
    stats: [
      { value: "200+", label: "Workers in Croatia" },
      { value: "3+", label: "Industries" },
      { value: "94%", label: "Retention Rate" },
      { value: "45 Days", label: "Avg. Deployment" },
    ],
    topIndustries: [
      {
        title: "Tourism & Hospitality",
        description: "Chefs, hotel staff, waiters, and housekeeping for Croatia's booming Adriatic coast tourism industry and resort hotels.",
        workerCount: "100+",
        icon: "hotel",
      },
      {
        title: "Construction",
        description: "Masons, carpenters, electricians, and civil workers for residential and infrastructure projects across Croatia.",
        workerCount: "60+",
        icon: "building",
      },
      {
        title: "Manufacturing",
        description: "Machine operators, welders, and production workers for Croatia's shipbuilding, food processing, and industrial sectors.",
        workerCount: "50+",
        icon: "factory",
      },
    ],
    compliancePoints: [
      {
        title: "Croatian Work Permit Processing",
        description: "Full work and residence permit processing through Croatia's Ministry of Interior. Quota-based and non-quota permit pathways managed.",
      },
      {
        title: "EU Schengen Compliance",
        description: "Croatia joined Schengen in 2023. All visa and travel documentation prepared in compliance with current Schengen regulations.",
      },
      {
        title: "Labour Code Compliance",
        description: "Employment contracts comply with Croatian Labour Act including minimum wage, working hours, annual leave, and social insurance contributions.",
      },
      {
        title: "E-Migrate & MEA Licensed",
        description: "Government-licensed operations with E-Migrate registration for every deployment, ensuring legal and transparent recruitment.",
      },
    ],
    faqs: [
      {
        q: "Can you supply seasonal workers for Croatia's tourism season?",
        a: "Yes, we supply seasonal hospitality workers for the April-October peak tourism season along the Adriatic coast, as well as year-round permanent workers.",
      },
      {
        q: "What is the process timeline?",
        a: "Typically 40-50 days including work permit quota application, visa processing, and pre-departure preparation.",
      },
      {
        q: "Do workers need EU language skills?",
        a: "Basic English is usually sufficient for most roles. We provide cultural orientation and basic language preparation during pre-departure training.",
      },
      {
        q: "Is Croatia part of the Schengen area?",
        a: "Yes, Croatia joined Schengen in January 2023. Workers receive Schengen-compliant documentation for seamless travel.",
      },
    ],
    relatedVisaPage: "/visa/croatia",
    relatedJobsPage: undefined,
    phonePrefix: "+385",
  },

  {
    slug: "malta",
    name: "Malta",
    fullName: "Republic of Malta",
    region: "europe",
    flag: "\u{1F1F2}\u{1F1F9}",
    metaTitle: "Hire Indian Workers for Malta | Government-Licensed Agency India",
    metaDescription:
      "Recruit skilled Indian workers for Malta's hospitality, construction, and services sectors. Licensed Indian manpower agency with EU work permit processing expertise.",
    keywords: [
      "hire Indian workers Malta",
      "Indian manpower Malta",
      "recruitment agency India to Malta",
      "Malta work permit Indian workers",
      "hospitality workers Malta",
    ],
    heroHeadline: "Hire Skilled Indian Workers for Malta",
    heroSubtext:
      "Meet Malta's growing labour demand with reliable Indian workforce. Hospitality, construction, and service sector workers deployed with full EU work authorization and compliance.",
    stats: [
      { value: "150+", label: "Workers in Malta" },
      { value: "3+", label: "Industries" },
      { value: "95%", label: "Retention Rate" },
      { value: "40 Days", label: "Avg. Deployment" },
    ],
    topIndustries: [
      {
        title: "Hospitality & Tourism",
        description: "Chefs, hotel staff, F&B service, and housekeeping for Malta's year-round tourism industry and luxury resorts.",
        workerCount: "80+",
        icon: "hotel",
      },
      {
        title: "Construction",
        description: "Masons, electricians, plumbers, and general construction workers for Malta's ongoing development and renovation projects.",
        workerCount: "40+",
        icon: "building",
      },
      {
        title: "Services & Retail",
        description: "Cleaners, carers, retail staff, and facility workers for Malta's commercial and residential service sector.",
        workerCount: "30+",
        icon: "retail",
      },
    ],
    compliancePoints: [
      {
        title: "Jobsplus Compliance",
        description: "All work permits processed through Malta's Jobsplus (Employment Agency). Single permit applications handled end-to-end.",
      },
      {
        title: "EU Standards",
        description: "Employment contracts comply with Malta's Employment and Industrial Relations Act and EU worker protection directives.",
      },
      {
        title: "Schengen Visa Processing",
        description: "Complete Schengen visa coordination including appointment booking, documentation, and embassy liaison.",
      },
      {
        title: "MEA Licensed",
        description: "Government-licensed Indian recruitment agency. All deployments E-Migrate registered for full transparency.",
      },
    ],
    faqs: [
      {
        q: "What sectors need Indian workers in Malta?",
        a: "Hospitality, construction, healthcare, cleaning services, and retail are the main sectors actively recruiting international workers in Malta.",
      },
      {
        q: "How long does the Malta work permit take?",
        a: "Typically 35-45 days total including Jobsplus single permit processing, Schengen visa application, and travel arrangements.",
      },
      {
        q: "Is English widely spoken in Malta?",
        a: "Yes, English is an official language of Malta alongside Maltese, making it easier for Indian workers to communicate and integrate.",
      },
      {
        q: "What is the minimum contract duration?",
        a: "Typically 1 year minimum, with most contracts being 1-2 years with possibility of renewal subject to employer requirements.",
      },
    ],
    relatedVisaPage: undefined,
    relatedJobsPage: undefined,
    phonePrefix: "+356",
  },

  {
    slug: "hungary",
    name: "Hungary",
    fullName: "Hungary",
    region: "europe",
    flag: "\u{1F1ED}\u{1F1FA}",
    metaTitle: "Hire Indian Workers for Hungary | Licensed Manpower Agency India",
    metaDescription:
      "Source skilled Indian workers for Hungary's manufacturing, automotive, and agriculture sectors. Government-licensed recruitment with EU work permit compliance.",
    keywords: [
      "hire Indian workers Hungary",
      "Indian manpower Hungary",
      "recruitment agency India to Hungary",
      "Hungary work permit Indian workers",
      "manufacturing workers Hungary",
    ],
    heroHeadline: "Hire Skilled Indian Workers for Hungary",
    heroSubtext:
      "Fill Hungary's manufacturing and agricultural labour gaps with skilled, pre-screened Indian workers. Reliable deployment with full Hungarian and EU work authorization compliance.",
    stats: [
      { value: "200+", label: "Workers in Hungary" },
      { value: "3+", label: "Industries" },
      { value: "94%", label: "Retention Rate" },
      { value: "45 Days", label: "Avg. Deployment" },
    ],
    topIndustries: [
      {
        title: "Manufacturing & Automotive",
        description: "Assembly workers, machine operators, welders, and quality controllers for Hungary's automotive plants (Audi, Mercedes, Suzuki) and industrial manufacturing.",
        workerCount: "120+",
        icon: "factory",
      },
      {
        title: "Agriculture & Food Processing",
        description: "Farm workers, greenhouse operators, and food processing workers for Hungary's agricultural and food industry sector.",
        workerCount: "50+",
        icon: "retail",
      },
      {
        title: "Construction",
        description: "Masons, electricians, and general construction workers for Budapest and regional development projects.",
        workerCount: "40+",
        icon: "building",
      },
    ],
    compliancePoints: [
      {
        title: "Hungarian Work Permit",
        description: "Full work permit processing through Hungary's immigration authorities. Combined residence and work permit applications managed end-to-end.",
      },
      {
        title: "EU Labour Standards",
        description: "Employment contracts comply with Hungarian Labour Code and EU directives on working conditions, minimum wage, and worker protection.",
      },
      {
        title: "Visa & Travel",
        description: "Schengen visa application support, travel coordination, and arrival assistance arranged for smooth worker transition.",
      },
      {
        title: "E-Migrate Registered",
        description: "All deployments tracked through India's E-Migrate system for government oversight and worker welfare assurance.",
      },
    ],
    faqs: [
      {
        q: "What industries hire Indian workers in Hungary?",
        a: "Automotive manufacturing (Audi, Mercedes, Suzuki plants), food processing, agriculture, construction, and logistics are the key sectors.",
      },
      {
        q: "What is the deployment timeline?",
        a: "Typically 40-55 days including work permit approval, Schengen visa processing, and pre-departure preparation.",
      },
      {
        q: "Do workers need Hungarian language skills?",
        a: "Basic English is generally sufficient for factory and agricultural roles. We provide cultural orientation and basic communication training.",
      },
      {
        q: "What is the typical contract duration?",
        a: "1-2 years with renewal options. We handle all extension paperwork and compliance requirements.",
      },
    ],
    relatedVisaPage: undefined,
    relatedJobsPage: undefined,
    phonePrefix: "+36",
  },

  {
    slug: "czech-republic",
    name: "Czech Republic",
    fullName: "Czech Republic",
    region: "europe",
    flag: "\u{1F1E8}\u{1F1FF}",
    metaTitle: "Hire Indian Workers for Czech Republic | Trusted Recruitment Agency India",
    metaDescription:
      "Recruit skilled Indian manpower for Czech Republic's manufacturing, automotive, and industrial sectors. Licensed agency with EU work permit processing expertise.",
    keywords: [
      "hire Indian workers Czech Republic",
      "Indian manpower Czech Republic",
      "recruitment agency India to Czech Republic",
      "Czech work permit Indian workers",
      "manufacturing workers Czech Republic",
    ],
    heroHeadline: "Hire Skilled Indian Workers for Czech Republic",
    heroSubtext:
      "Address Czech Republic's skilled labour shortage with reliable Indian workforce. Manufacturing, automotive, and industrial workers deployed with full EU compliance and work authorization.",
    stats: [
      { value: "150+", label: "Workers in Czechia" },
      { value: "3+", label: "Industries" },
      { value: "94%", label: "Retention Rate" },
      { value: "50 Days", label: "Avg. Deployment" },
    ],
    topIndustries: [
      {
        title: "Automotive & Manufacturing",
        description: "Assembly line workers, machine operators, CNC operators, and welders for Czech Republic's Skoda, Hyundai, and TPCA automotive plants and Tier-1 suppliers.",
        workerCount: "90+",
        icon: "factory",
      },
      {
        title: "Construction",
        description: "Masons, electricians, plumbers, and general construction workers for Prague and regional building projects.",
        workerCount: "35+",
        icon: "building",
      },
      {
        title: "Logistics & Warehousing",
        description: "Warehouse operators, forklift drivers, and supply chain workers for distribution centres across the Czech Republic.",
        workerCount: "30+",
        icon: "truck",
      },
    ],
    compliancePoints: [
      {
        title: "Czech Work Permit Processing",
        description: "Employee card (combined work and residence permit) applications processed through Czech Ministry of Interior and Labour Office.",
      },
      {
        title: "EU Labour Compliance",
        description: "All contracts comply with Czech Labour Code and EU directives. Minimum wage, working hours, social insurance, and health insurance ensured.",
      },
      {
        title: "Schengen Visa Coordination",
        description: "Full Schengen visa application support including documentation, embassy appointments, and travel arrangements.",
      },
      {
        title: "Government-Licensed Operations",
        description: "MEA-licensed agency with E-Migrate registration. Fully transparent, government-tracked recruitment process.",
      },
    ],
    faqs: [
      {
        q: "What industries need Indian workers in Czech Republic?",
        a: "Automotive manufacturing (Skoda, Hyundai plants), general manufacturing, construction, logistics, and food processing are the primary hiring sectors.",
      },
      {
        q: "How long does the Czech work permit take?",
        a: "Employee card processing typically takes 45-60 days. Total deployment timeline is around 50-65 days including pre-departure formalities.",
      },
      {
        q: "Is Czech language required?",
        a: "Not typically for factory and manual roles. Basic English communication is usually sufficient. We provide basic cultural and safety orientation.",
      },
      {
        q: "Can contracts be extended?",
        a: "Yes, employee cards can be renewed. We assist with all extension documentation and compliance requirements well before expiry.",
      },
    ],
    relatedVisaPage: undefined,
    relatedJobsPage: undefined,
    phonePrefix: "+420",
  },
];

export function getCountryBySlug(slug: string): EmployerCountryData | undefined {
  return employerCountries.find((c) => c.slug === slug);
}

export function getCountrySlugs(): string[] {
  return employerCountries.map((c) => c.slug);
}

export const gulfCountries = employerCountries.filter((c) => c.region === "gulf");
export const europeCountries = employerCountries.filter((c) => c.region === "europe");
