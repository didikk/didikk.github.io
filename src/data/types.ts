export interface NavItem {
  label: string;
  href: string;
}

export type ProjectTone =
  | "emerald"
  | "red"
  | "blue"
  | "purple"
  | "amber"
  | "lime";

export interface Project {
  category: string;
  title: string;
  description: string;
  tags: string[];
  tone: ProjectTone;
  icon: string;
  playStore?: string;
  appStore?: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  shortName: string;
  role: string;
  start: string;
  end?: string | null;
  summary?: string;
  tags?: string[];
  indexLabel?: string;
}

export interface SkillPair {
  label: string;
  detail: string;
}

export interface Principle {
  title: string;
  body: string;
  tag: string;
  icon: string;
  tone: ProjectTone;
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  body: string;
  primaryCta: string;
  secondaryCta: string;
  chips: string[];
  location: string;
}
