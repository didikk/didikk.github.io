import type {
  ExperienceItem,
  HeroContent,
  NavItem,
  Principle,
  Project,
} from "./types";
import {
  diffYearsMonths,
  formatPeriod,
  formatTenureLong,
  formatYearsPlus,
  parseMonth,
} from "./tenure";

/** First professional role (Firzil Tech). */
export const careerStart = "2015-09-01";

const careerTenure = diffYearsMonths(parseMonth(careerStart));
export const yearsPlus = formatYearsPlus(careerTenure.years);
export const totalTenureLabel = formatTenureLong(careerTenure);

export const site = {
  name: "Didik Ismawanto",
  title: "Didik Ismawanto, Senior Mobile Engineer",
  description: `Senior Mobile Developer with ${yearsPlus} years of experience building and maintaining production mobile apps with React Native, Android, and Flutter.`,
  role: "Senior Mobile Engineer",
  github: "https://github.com/didikk",
  linkedin: "https://www.linkedin.com/in/didikismawanto/",
  email: "ismawanto.didik@gmail.com",
  cv: "/didik_ismawanto_cv.pdf",
  availability: "Available for select roles",
};

export const nav: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Principles", href: "#principles" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero: HeroContent = {
  eyebrow: "Mobile Developer · Software Engineer",
  headline: "Building reliable mobile products and maintainable software.",
  body: `Senior Mobile Developer with ${yearsPlus} years of experience building and maintaining production mobile apps with React Native, Android, and Flutter. I focus on clean architecture, performance profiling, and keeping large codebases maintainable.`,
  primaryCta: "View Selected Work",
  secondaryCta: "View Technical Focus",
  chips: [
    `${yearsPlus} Years Exp`,
    "React Native",
    "Android (Kotlin & Java)",
    "Flutter",
    "Clean Architecture",
  ],
  location: "Indonesia",
};

export const projects: Project[] = [
  {
    category: "Agriculture Tech",
    title: "FarmByte Grow",
    description:
      "Farm management app that connects growers with the FarmByte marketplace. Migrated the Android Native client to React Native, built shared UI, and improved runtime stability.",
    tags: ["React Native", "TypeScript", "Redux", "Native Migration"],
    tone: "emerald",
    icon: "leaf",
    playStore:
      "https://play.google.com/store/apps/details?id=com.newfarmbytedigital.farmbyte&hl=en_US",
    appStore: "https://apps.apple.com/my/app/farmbyte-app/id6737538318",
  },
  {
    category: "Logistics & Operations",
    title: "SiCepat Express",
    description:
      "Consumer logistics app for booking, tracking, and paying for shipments across Indonesia. Refactored to Clean Architecture, improved scroll performance, and integrated Midtrans, Xendit, MoEngage, and Insider.",
    tags: ["React Native", "Clean Architecture", "Zustand", "Midtrans/Xendit"],
    tone: "red",
    icon: "truck",
    playStore:
      "https://play.google.com/store/apps/details?id=com.sicepat.consumer&hl=en&gl=US",
    appStore: "https://apps.apple.com/id/app/sicepat-ekspres/id1608647889",
  },
  {
    category: "Media & Broadcast",
    title: "RRI News",
    description:
      "News app for Radio Republik Indonesia with live radio, categorized updates, and multi-language support on iOS and Android.",
    tags: ["React Native", "TypeScript", "Zustand", "Multi-language"],
    tone: "blue",
    icon: "news",
    playStore:
      "https://play.google.com/store/apps/details?id=com.rri.news.app&hl=en_US",
    appStore: "https://apps.apple.com/id/app/rri-news/id6504948692",
  },
  {
    category: "Fintech · PPOB",
    title: "Klikoo",
    description:
      "PPOB app for agents to sell pulsa, pay bills, and book tickets. Built with GraphQL dynamic forms so new catalog services can ship without an app store update.",
    tags: ["React Native", "GraphQL", "Dynamic Forms", "PPOB"],
    tone: "purple",
    icon: "card",
    playStore:
      "https://play.google.com/store/apps/details?id=com.pvp.klikoo.original&hl=en_US",
  },
  {
    category: "Point of Sale",
    title: "Posy",
    description:
      "Online cashier and POS app for phones and tablets. Built shared UI so merchants can run checkout, order queues, and inventory sync on either device.",
    tags: ["React Native", "Tablet & Phone", "GraphQL", "Realtime Sync"],
    tone: "amber",
    icon: "pos",
    playStore:
      "https://play.google.com/store/apps/details?id=com.pvp.posy&hl=en_US",
  },
  {
    category: "Agriculture Information",
    title: "SIPINDO",
    description:
      "Agricultural information app for Indonesian vegetable farmers: planting maps, market prices, weather forecasts, and pest guidance, built for low-bandwidth use.",
    tags: ["Android Native", "Java", "Offline-First SQLite", "Geo Services"],
    tone: "lime",
    icon: "map",
    playStore:
      "https://play.google.com/store/apps/details?id=com.panahmerah.sipindo&hl=en_US",
  },
];

export const selectedWorkIntro =
  "Production mobile work in agriculture, logistics, public media, and B2B fintech.";

const experienceRaw: ExperienceItem[] = [
  {
    id: "farmbyte",
    company: "FarmByte Sdn Bhd",
    shortName: "FarmByte Sdn Bhd",
    role: "Mobile Developer · React Native",
    start: "2025-05",
    end: "2025-09",
    summary:
      "Migrated FarmByte Grow from Android Native to React Native. Improved UI stability and built the Seller Center component library used for marketplace onboarding.",
    tags: ["Native Migration", "Component Library", "Redux"],
    indexLabel: "2025",
  },
  {
    id: "sicepat",
    company: "PT. SiCepat Ekspres Indonesia",
    shortName: "PT. SiCepat Ekspres",
    role: "Mobile Developer · React Native",
    start: "2022-04",
    end: "2025-04",
    summary:
      "Refactored SiCepat Express into Clean Architecture. Improved rendering for dense package lookups under peak load. Shipped Midtrans and Xendit payments plus MoEngage and Insider analytics.",
    tags: [
      "Clean Architecture",
      "Performance Profiling",
      "Midtrans / Xendit",
      "Zustand",
    ],
    indexLabel: "2022–2025",
  },
  {
    id: "pvg",
    company: "Pintar Ventura Group",
    shortName: "Pintar Ventura Group",
    role: "Mobile Developer · React Native",
    start: "2021-07",
    end: "2022-03",
    summary:
      "Built Posy POS for phones and tablets with shared layouts across screen sizes. Built Klikoo PPOB with GraphQL dynamic forms so operations could add billers without an app store release.",
    tags: ["GraphQL Dynamic Forms", "Tablet Responsive UI", "Fintech"],
    indexLabel: "2021–2022",
  },
  {
    id: "mdc",
    company: "PT. Media Data Communication",
    shortName: "PT. Media Data Comm",
    role: "Mobile Developer · Android & React Native",
    start: "2018-09",
    end: "2021-07",
    summary:
      "Built Meenistry and Meeva for B2B venue booking. Rewrote Meenistry from Android Native to React Native and set up Azure DevOps CI/CD pipelines.",
    tags: ["Azure DevOps CI/CD", "Android to RN Migration", "B2B Venue Booking"],
    indexLabel: "2018–2021",
  },
  {
    id: "jukir",
    company: "Jukir.co",
    shortName: "Jukir.co",
    role: "Android Developer",
    start: "2018-06",
    end: "2018-09",
    summary:
      "Stabilized the Jukir parking attendant app and built Park Go in Kotlin with Clean Architecture for offline-tolerant parking checks.",
    tags: ["Kotlin", "Clean Architecture"],
    indexLabel: "2018",
  },
  {
    id: "creoactive",
    company: "PT. Creoactive Cipta Media",
    shortName: "PT. Creoactive",
    role: "Android Developer",
    start: "2018-02",
    end: "2018-06",
    summary:
      "Built Truvel Hotel, an in-room Android service app with a locked-down kiosk launcher and Linphone VoIP for guest-to-front-desk calls.",
    tags: ["Linphone / VoIP", "Android Kiosk Launcher"],
    indexLabel: "2018",
  },
  {
    id: "firzil",
    company: "Firzil Tech",
    shortName: "Firzil Tech",
    role: "Android Developer",
    start: "2015-09",
    end: "2018-02",
    summary:
      "Shipped multiple Android client apps in Java and Kotlin to the Play Store. Built shared modules and tuned memory and battery use on entry-level devices.",
    tags: ["Java", "Kotlin", "Play Store Releases"],
    indexLabel: "2015–2018",
  },
];

export const experience = experienceRaw.map((job) => ({
  ...job,
  period: formatPeriod(job.start, job.end),
}));

export const experienceIntro =
  "Roles, migrations, and releases at companies across Southeast Asia.";

export const technicalFocusIntro = `Skills from ${yearsPlus} years shipping production mobile apps: platforms, architecture, performance, APIs, and release tooling.`;

export const mobilePlatformSkills = [
  { label: "React Native", detail: "Fabric / New Arch" },
  { label: "Android / Kotlin", detail: "Coroutines / Flow" },
  { label: "Flutter", detail: "Dart Engine" },
  { label: "TypeScript", detail: "Strict Typing" },
  { label: "Java", detail: "Legacy Interop" },
  { label: "Native Bridges", detail: "JNI / TurboModules" },
];

export const architectureSkills = [
  { label: "Clean Architecture", detail: "Layer Separation" },
  { label: "Feature Modularization", detail: "Independent Domains" },
  { label: "Design Systems", detail: "Reusable Atoms" },
];

export const performanceSkills = [
  "Memory Leak Detection & GC Tuning",
  "UI Thread & Frame Rate Profiling",
  "List virtualization optimization",
  "Multi-device spec parity",
];

export const apiSkills = [
  "GraphQL",
  "REST API",
  "Midtrans",
  "Xendit",
  "MoEngage",
  "Insider",
  "Linphone / VoIP",
];

export const cicdSkills = [
  "Azure DevOps Pipelines",
  "Fastlane App Automations",
  "Firebase App Distribution",
  "Jest & Unit Testing Suites",
];

export const principles: Principle[] = [
  {
    title: "Build for Maintainability",
    body: "I prefer clear architecture and reusable components that make future changes easier rather than optimizing only for the initial release.",
    tag: "#Architecture",
    icon: "architecture",
    tone: "blue",
  },
  {
    title: "Improve Before Rewriting",
    body: "I enjoy understanding existing codebases, identifying bottlenecks, and improving structure, performance, and reliability incrementally.",
    tag: "#Pragmatism",
    icon: "healing",
    tone: "emerald",
  },
  {
    title: "Measure Performance",
    body: "Performance issues should be investigated through profiling and real application behavior rather than subjective assumptions.",
    tag: "#Profiling",
    icon: "query_stats",
    tone: "amber",
  },
  {
    title: "Automate Repetitive Work",
    body: "CI/CD and development tooling should reduce manual work, enforce code checks, and make releases more predictable.",
    tag: "#Automation",
    icon: "automation",
    tone: "purple",
  },
];

export const about = {
  paragraphs: [
    `I'm Didik, a Mobile Developer with ${yearsPlus} years of experience building production applications.`,
    "I started my career in Android native development and later transitioned into React Native, while also delivering projects in Flutter and modern TypeScript-based platforms.",
    "Day to day I improve legacy codebases, design modular architecture, migrate apps between frameworks, and set up automated testing and release workflows.",
    "I care most about software architecture, developer experience, and products that stay stable in production.",
  ],
  education: {
    school: "Politeknik Elektronika Negeri Surabaya",
    detail: "Informatics Engineering",
    years: "2012 – 2015",
  },
  engineeringFocus:
    "Production migrations, native-to-hybrid bridges, offline sync, and tooling that helps teams ship faster.",
};

export const contactIntro =
  "Open to software engineering roles, React Native / mobile architecture work, or consulting.";

export const principlesIntro =
  "How I make tradeoffs in architecture and pull requests.";

export const tenureBlurb =
  "Hands-on product engineering since first professional role.";
