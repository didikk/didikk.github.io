import type {
  ExperienceItem,
  NavItem,
  Platform,
  Principle,
  Project,
} from "./types";
import { diffYearsMonths, parseMonth } from "./tenure";

/** First professional role (Firzil Tech). */
export const careerStart = "2015-09-01";

const careerYears = diffYearsMonths(parseMonth(careerStart)).years;

export const site = {
  name: "Didik Ismawanto",
  title: "Didik Ismawanto, Senior Mobile Engineer",
  description: `Senior mobile engineer with ${careerYears} years of experience in React Native, Flutter and Android.`,
  github: "https://github.com/didikk",
  linkedin: "https://www.linkedin.com/in/didikismawanto/",
  email: "ismawantodidik@gmail.com",
  cv: "/didik_ismawanto_cv.pdf",
};

export const nav: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  status: "Open to senior mobile roles",
  role: "Senior Mobile Engineer | React Native, Flutter & Android",
  location: "Indonesia",
  body: `${careerYears} years building mobile apps: Android first, React Native since 2019, Flutter since 2025.`,
};

export const platforms: Platform[] = [
  {
    name: "React Native",
    meta: "TypeScript · 2019–now",
    body: "My main stack, for Android and iOS. I use Zustand, Redux, Redux Toolkit, React Query, MobX and Apollo GraphQL, and test with Jest and React Native Testing Library.",
  },
  {
    name: "Flutter",
    meta: "Dart · 2025–now",
    body: "Synergy's in-store tablet apps and my recent freelance apps, built with BLoC/Cubit, Clean Architecture and dependency injection, and tested with flutter_test and mocktail.",
  },
  {
    name: "Android",
    meta: "Kotlin · Java · 2015–2019",
    body: "Where I started, with MVP, and testing with JUnit, Mockito and Espresso.",
  },
];

export const workIntro =
  "Apps for retail, logistics, agriculture, government, public media, fintech and small businesses. They run on phones, tablets, in-store kiosks, a TV display and the web.";

const synergy = "#001E61";

export const projects: Project[] = [
  {
    featured: true,
    title: "Synergy Kiosk App",
    meta: "Retail · Synergy Worldwide · iPad and Android tablet",
    tone: synergy,
    description:
      "In-store kiosk app for Synergy Worldwide stores in Japan, Korea and Taiwan. Four supporting apps, listed below, handle pickup and order status.",
    highlights: [
      "Payments through Suntech in Taiwan and GMO in Japan",
      "Identity checks through NICE CheckPlus in Korea and TWCA in Taiwan",
      "DocuSign e-signatures in Japan",
    ],
    role: "Lead developer since 2020. I maintain the app and ship new features. I also proposed and led two full rewrites: Cordova/Angular to React Native, then to Flutter.",
    stack: "Flutter · BLoC/Cubit · Clean Architecture",
    shots: [{ frame: "tablet-landscape", label: "Landscape tablet screenshot: kiosk" }],
    playStore: "https://play.google.com/store/apps/details?id=com.synergyworldwide.kioskapp",
    appStore: "https://apps.apple.com/id/app/pulsekiosk/id1559545629",
  },
  {
    featured: true,
    title: "SiCepat Ekspres",
    meta: "Logistics · PT. SiCepat Ekspres Indonesia · 2022–2025",
    tone: "#C62828",
    description:
      "Consumer logistics app for booking, tracking and paying for shipments across Indonesia.",
    highlights: [
      "Android and iOS, 500K+ downloads on Google Play",
      "Payments through Midtrans and Xendit",
      "Customer engagement through MoEngage and Insider",
    ],
    role: "I maintained the app and shipped new features. I also proposed and led a full rewrite, using Clean Architecture, feature-first folders, Zustand and React Query.",
    stack: "React Native · Zustand · React Query · Jest · React Native Testing Library · Fastlane",
    shots: [
      { frame: "phone", label: "Screenshot: tracking" },
      { frame: "phone", label: "Screenshot: payment" },
    ],
    playStore: "https://play.google.com/store/apps/details?id=com.sicepat.consumer",
    appStore: "https://apps.apple.com/id/app/sicepat-ekspres/id1608647889",
  },
  {
    featured: true,
    title: "FarmByte Grow",
    meta: "Agriculture tech · Farmbyte Sdn Bhd · 2025",
    tone: "#1F6B45",
    description:
      "App that helps farmers manage their crops from planting to harvest.",
    highlights: [
      "Android and iOS, built in React Native to replace the legacy Android app",
      "Advice from agronomists, farming guides and crop market prices",
      "A farm log for fertiliser and pesticide use, and harvest collection booking",
    ],
    role: "One of 8 mobile developers maintaining the app and shipping new features.",
    stack: "React Native · TypeScript · Redux · Redux Toolkit",
    shots: [
      { frame: "phone", label: "Screenshot: farm overview" },
      { frame: "phone", label: "Screenshot" },
    ],
    playStore:
      "https://play.google.com/store/apps/details?id=com.newfarmbytedigital.farmbyte",
    appStore: "https://apps.apple.com/my/app/farmbyte-app/id6737538318",
  },
  {
    title: "Pickup Center App",
    meta: "Retail · Synergy · Tablet, landscape",
    tone: synergy,
    description:
      "Customer-facing tablet app in stores in Korea and Japan. Processes customer orders before they go to the Order Status Board or the In-Store Pickup App.",
    role: "I led both of its rewrites, alongside the Kiosk App.",
    stack: "Flutter · iPad and Android tablet",
    shots: [{ frame: "tablet-landscape", label: "Landscape tablet" }],
  },
  {
    title: "In-Store Pickup App",
    meta: "Retail · Synergy · Tablet, portrait",
    tone: synergy,
    description:
      "Staff app for order tracking and fulfillment. The tablet counterpart to the In-Store Pickup Screen.",
    role: "I built it from scratch in React Native, then rewrote it in Flutter.",
    stack: "Flutter",
    shots: [{ frame: "tablet-portrait", label: "Portrait tablet" }],
  },
  {
    title: "Order Status Board",
    meta: "Retail · Synergy · In-store TV",
    tone: synergy,
    description:
      "In-store TV display that shows waiting customers the current status of their orders, such as In Progress or Ready for Pickup.",
    role: "I rewrote it from Angular to React.",
    stack: "React",
    shots: [{ frame: "tv", label: "TV screen" }],
  },
  {
    title: "In-Store Pickup Screen",
    meta: "Retail · Synergy · Web",
    tone: synergy,
    description: "Web app that store staff use to process orders.",
    role: "I maintain it and ship new features.",
    stack: "Angular",
    shots: [{ frame: "web", label: "Web app" }],
  },
  {
    title: "King Glossy",
    meta: "Car care business · Freelance · 2026–now",
    tone: "#AF101A",
    description:
      "App for a car care shop to track services, invoices and expenses. Includes monthly reports and customer statistics.",
    role: "I built it on my own and still maintain it.",
    stack: "Flutter",
    shots: [{ frame: "phone", label: "Screenshot" }],
  },
  {
    title: "Kura-Kura Coffee POS",
    meta: "Point of sale · Freelance · 2026",
    tone: "#361F1A",
    description:
      "Cashier app with ordering, Cash and QRIS payments, and Bluetooth receipt printing. Includes an admin area for products, stock and settings, plus sales charts and daily reports. In use by the business.",
    role: "I built it on my own.",
    stack: "Flutter",
    shots: [{ frame: "tablet-landscape", label: "Screenshot" }],
  },
  {
    title: "Maritim Hub",
    meta: "Government · Freelance · 2025",
    tone: "#1E3567",
    description:
      "Service and data portal run by Indonesia's Directorate General of Sea Transportation. It brings maritime services into one app, with about 80 request types, each with its own detail layout rendered from data.",
    role: "I built the request detail page, in a team of 3.",
    stack: "Flutter",
    shots: [{ frame: "phone", label: "Screenshot" }],
    playStore:
      "https://play.google.com/store/apps/details?id=com.djpl.maritimHub",
  },
  {
    title: "RRI News",
    meta: "Media & broadcast · Freelance · 2024",
    tone: "#1E4FA3",
    description:
      "News app for Radio Republik Indonesia, with streaming radio and multi-language support.",
    role: "I built the app from scratch.",
    stack: "React Native · TypeScript · Zustand",
    shots: [{ frame: "phone", label: "Screenshot" }],
    playStore: "https://play.google.com/store/apps/details?id=com.rri.news.app",
    appStore: "https://apps.apple.com/id/app/rri-news/id6504948692",
  },
  {
    title: "Klikoo",
    meta: "Fintech · Pintar Ventura · 2021–2022",
    tone: "#5B3FA8",
    description:
      "Bill-payment app. GraphQL dynamic forms let new services launch without an app update.",
    role: "One of 4–5 mobile developers who built and maintained the app.",
    stack: "React Native · GraphQL · Apollo Client",
    shots: [{ frame: "phone", label: "Screenshot" }],
    playStore:
      "https://play.google.com/store/apps/details?id=com.pvp.klikoo.original",
  },
  {
    title: "SIPINDO",
    meta: "Agriculture information · Firzil Tech · 2016–2018",
    tone: "#3F6212",
    description:
      "Planting maps, market prices, weather forecasts and pest guidance for vegetable farmers.",
    role: "One of the client apps I shipped to Google Play at Firzil Tech.",
    stack: "Native Android · Java",
    shots: [{ frame: "phone", label: "Screenshot" }],
    playStore:
      "https://play.google.com/store/apps/details?id=com.panahmerah.sipindo",
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "Synergy Worldwide",
    role: "Lead Front-End/Mobile Developer · Part-time contract",
    roleShort: "Lead Front-End/Mobile · Part-time contract",
    start: "2020-07",
    summary:
      "Lead developer for the Kiosk App and four supporting apps. Led most of their rewrites. Also review code, estimate tasks, make architecture decisions, set up CI/CD and define coding standards.",
    partTime: true,
  },
  {
    company: "Farmbyte Sdn Bhd",
    role: "Mobile Developer · React Native · Contract",
    roleShort: "React Native",
    start: "2025-05",
    end: "2025-09",
    summary:
      "Maintained FarmByte Grow in a team of 8. Built the onboarding and product management modules for Seller Center, a marketplace app not yet released, and components for the shared internal UI library.",
  },
  {
    company: "PT. SiCepat Ekspres Indonesia",
    role: "Mobile Developer · React Native",
    roleShort: "React Native",
    start: "2022-04",
    end: "2025-04",
    summary:
      "Maintained the SiCepat Ekspres app and led its full rewrite. Built the Pick Up app for the daily operations of Sigesit couriers. Integrated payments and customer engagement tools, automated releases with Fastlane and reviewed pull requests.",
  },
  {
    company: "Pintar Ventura Group",
    role: "Mobile Developer · React Native",
    roleShort: "React Native",
    start: "2021-07",
    end: "2022-03",
    summary:
      "Built and maintained Klikoo and Posy, in a team of 4–5 mobile developers.",
  },
  {
    company: "PT. Media Data Communication",
    role: "Mobile Developer · Android & React Native",
    roleShort: "Android & React Native",
    start: "2018-09",
    end: "2021-07",
    summary:
      "Built Meenistry, a B2B venue management app, in native Android, then helped rewrite it in React Native for Android and iOS. Built Meeva, an Android and iOS booking app for meeting rooms, ballrooms and co-working spaces. Set up Azure DevOps pipelines.",
  },
  {
    company: "Jukir.co",
    role: "Android Developer",
    roleShort: "Android",
    start: "2018-06",
    end: "2018-09",
    summary:
      "Fixed crashes and architectural debt in the Jukir app, and built the Park Go parking app in Kotlin.",
  },
  {
    company: "PT. Creoactive Cipta Media",
    role: "Android Developer",
    roleShort: "Android",
    start: "2018-02",
    end: "2018-06",
    summary:
      "Built Truvel Hotel, a guest service app with a custom launcher for device lockdown and Linphone VoIP calls to the front desk.",
  },
  {
    company: "Firzil Tech",
    role: "Android Developer",
    roleShort: "Android",
    start: "2015-09",
    end: "2018-02",
    summary:
      "Shipped client Android apps to Google Play using Java, Kotlin and MVP, including SIPINDO. Created shared UI components and utility functions.",
  },
];

export const about = {
  lead: "I'm Didik, a mobile engineer based in Kediri, Indonesia.",
  paragraphs: [
    "I started building native Android apps in 2015. In 2019 I moved to React Native, which is still my main stack, and I've shipped Flutter apps since 2025.",
    "I've worked on mobile teams at Media Data, Pintar Ventura, SiCepat and Farmbyte. Since 2020 I've also led front-end and mobile work for Synergy Worldwide, and I take on freelance projects that interest me.",
  ],
  education: {
    school: "Politeknik Elektronika Negeri Surabaya",
    detail: "Diploma III (D3), Informatics Engineering, 2012–2015",
  },
  howIWork: "I lead from the code.",
};

export const principles: Principle[] = [
  {
    title: "Structure by feature",
    body: "Clean Architecture and feature-first folders keep each feature in one place.",
  },
  {
    title: "Keep logic testable",
    body: "Business logic stays out of the UI, where unit tests can reach it.",
  },
  {
    title: "Automate releases",
    body: "CI/CD and Fastlane build and ship the app without manual steps.",
  },
  {
    title: "Reviews and standards",
    body: "I define the coding standards and pull request workflow, then review against them.",
  },
];

export const contact = {
  headline: "Hiring for a senior mobile role, or need an app built?",
  body: "Based in Kediri, Indonesia (UTC+7), working remotely with international teams and available for time-zone overlap. I speak Indonesian (native) and English (professional working proficiency).",
};
