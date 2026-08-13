export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  category: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  imageAlt?: string;
  playStore?: string;
  appStore?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary?: string;
  compact: boolean;
  current: boolean;
}

export interface TechnicalFocusGroup {
  title: string;
  items: string[];
  icon: "phone" | "architecture" | "speed" | "api" | "build" | "extension";
}

export interface Principle {
  title: string;
  body: string;
}
