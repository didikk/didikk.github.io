import type {
  ExperienceItem,
  NavItem,
  Principle,
  Project,
  TechnicalFocusGroup,
} from "./types";

export const site = {
  name: "Didik Ismawanto",
  title: "Didik Ismawanto — Portfolio",
  description:
    "Senior Mobile Developer with over 10 years of experience building, optimizing, and maintaining large-scale mobile applications across React Native, Android, and Flutter.",
  github: "https://github.com/didikk",
  linkedin: "https://www.linkedin.com/in/didikismawanto/",
  email: "ismawanto.didik@gmail.com",
  cv: "/didik_ismawanto_cv.pdf",
};

export const nav: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const projects: Project[] = [

  {
    category: "Agriculture Tech",
    title: "FarmByte Grow",
    description:
      "Farm management app for tracking operations and connecting growers with the FarmByte marketplace. I helped migrate it from Android Native to React Native, improved UI responsiveness and stability, and contributed reusable shared UI.",
    tags: ["React Native", "TypeScript", "Redux"],
    playStore: "https://play.google.com/store/apps/details?id=com.newfarmbytedigital.farmbyte&hl=en_US",
    appStore: "https://apps.apple.com/my/app/farmbyte-app/id6737538318"
  },
  {
    category: "Logistics & Operations",
    title: "SiCepat Express",
    description:
      "Consumer logistics app for booking, tracking, and paying for shipments across Indonesia. I refactored it to Clean Architecture, improved load performance, and integrated Midtrans, Xendit, MoEngage, and Insider.",
    tags: ["React Native", "TypeScript", "Zustand", "Clean Architecture"],
    appStore: "https://apps.apple.com/id/app/sicepat-ekspres/id1608647889",
    playStore: "https://play.google.com/store/apps/details?id=com.sicepat.consumer&hl=en&gl=US"
  },
  {
    category: "Media",
    title: "RRI News",
    description:
      "News app from Radio Republik Indonesia with real-time updates, categorized coverage, and multimedia articles across iOS and Android.",
    tags: ["React Native", "TypeScript", "Zustand", "Multi-language"],
    appStore: "https://apps.apple.com/id/app/rri-news/id6504948692",
    playStore: "https://play.google.com/store/apps/details?id=com.rri.news.app&hl=en_US",
  },
  {
    category: "Fintech",
    title: "Klikoo",
    description:
      "PPOB app for agents to sell pulsa, pay bills, and book tickets. I built it in React Native with GraphQL and API-driven dynamic forms so new services could ship without an app release.",
    tags: ["React Native", "TypeScript", "GraphQL"],
    playStore: "https://play.google.com/store/apps/details?id=com.pvp.klikoo.original&hl=en_US",
  },
  {
    category: "Point of Sale",
    title: "Posy",
    description:
      "Online cashier and POS app for phones and tablets. I built a consistent multi-screen experience so merchants can run checkout and store operations from either device.",
    tags: ["React Native", "TypeScript", "GraphQL"],
    playStore: "https://play.google.com/store/apps/details?id=com.pvp.posy&hl=en_US",
  },
  {
    category: "Agriculture Tech",
    title: "SIPINDO",
    description:
      "Agricultural information app for Indonesian vegetable farmers, covering planting maps, market prices, weather forecasts, and pest guidance in one place.",
    tags: ["Android", "Java"],
    playStore: "https://play.google.com/store/apps/details?id=com.panahmerah.sipindo&hl=en_US",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "FarmByte Sdn Bhd",
    role: "Mobile Developer · React Native",
    period: "May 2025 – Sep 2025",
    summary:
      "Helped migrate FarmByte Grow from Android Native to React Native, improved stability, and built shared UI plus Seller Center modules for marketplace onboarding.",
    compact: false,
    current: true,
  },
  {
    company: "PT. SiCepat Ekspres Indonesia",
    role: "Mobile Developer · React Native",
    period: "Apr 2022 – Apr 2025",
    summary:
      "Refactored SiCepat Express into Clean Architecture, improved performance for high-volume logistics users, and shipped payment and engagement integrations.",
    compact: false,
    current: false,
  },
  {
    company: "Pintar Ventura Group",
    role: "Mobile Developer · React Native",
    period: "Jul 2021 – Mar 2022",
    summary:
      "Built Posy POS for phones and tablets, and Klikoo PPOB with GraphQL dynamic forms so new services could be configured without code changes.",
    compact: false,
    current: false,
  },
  {
    company: "PT. Media Data Communication",
    role: "Mobile Developer · Android & React Native",
    period: "Sep 2018 – Jul 2021",
    summary:
      "Built Meenistry and Meeva for B2B venue booking, rewriting Meenistry from Android Native to React Native and automating releases with Azure DevOps CI/CD.",
    compact: false,
    current: false,
  },
  {
    company: "Jukir.co",
    role: "Android Developer",
    period: "Jun 2018 – Sep 2018",
    summary:
      "Stabilized the Jukir parking app and built Park Go in Kotlin with Clean Architecture for faster parking bookings.",
    compact: true,
    current: false,
  },
  {
    company: "PT. Creoactive Cipta Media",
    role: "Android Developer",
    period: "Feb 2018 – Jun 2018",
    summary:
      "Built Truvel Hotel, an in-room Android service app with a locked-down launcher and Linphone VoIP for guest-to-staff calls.",
    compact: true,
    current: false,
  },
  {
    company: "Firzil Tech",
    role: "Android Developer",
    period: "Sep 2015 – Feb 2018",
    summary:
      "Delivered multiple Android client apps in Java and Kotlin from implementation through Play Store release, with shared components and performance tuning.",
    compact: true,
    current: false,
  },
];

export const technicalFocus: TechnicalFocusGroup[] = [
  {
    title: "Mobile Development",
    icon: "phone",
    items: ["React Native", "Android / Kotlin", "Flutter", "TypeScript", "Java"],
  },
  {
    title: "Architecture",
    icon: "architecture",
    items: [
      "Clean Architecture",
      "Feature modularization",
      "Reusable components",
      "Scalable application structure",
    ],
  },
  {
    title: "Performance & Reliability",
    icon: "speed",
    items: [
      "Performance optimization",
      "Profiling",
      "Debugging",
      "Application stability",
      "Multi-device optimization",
    ],
  },
  {
    title: "APIs & Integrations",
    icon: "api",
    items: [
      "REST API",
      "GraphQL",
      "Payment integrations",
      "Third-party SDK integrations",
    ],
  },
  {
    title: "Engineering Productivity",
    icon: "build",
    items: ["CI/CD", "Azure DevOps", "Fastlane", "Firebase", "Unit testing"],
  },
  {
    title: "Integrations",
    icon: "extension",
    items: ["Midtrans", "Xendit", "MoEngage", "Insider", "Linphone / VoIP"],
  },
];

export const principles: Principle[] = [
  {
    title: "Build for Maintainability",
    body: "I prefer clear architecture and reusable components that make future changes easier rather than optimizing only for the initial release.",
  },
  {
    title: "Improve Before Rewriting",
    body: "I enjoy understanding existing codebases, identifying bottlenecks, and improving structure, performance, and reliability incrementally.",
  },
  {
    title: "Measure Performance",
    body: "Performance issues should be investigated through profiling and real application behavior rather than assumptions.",
  },
  {
    title: "Automate Repetitive Work",
    body: "CI/CD and development tooling should reduce manual work and make releases more predictable.",
  },
];

export const about = {
  paragraphs: [
    "I'm Didik, a Mobile Developer with 10+ years of experience building production applications.",
    "I started my career in Android development and later moved into React Native, while also working with Flutter and modern TypeScript-based development.",
    "Most of my work has involved improving existing products, building new features, migrating applications, integrating third-party services, and making codebases easier to maintain.",
    "I'm particularly interested in software architecture, performance, developer productivity, and building reliable products.",
  ],
  education: {
    school: "Politeknik Elektronika Negeri Surabaya",
    detail: "Informatics Engineering · 2012–2015",
  },
};
