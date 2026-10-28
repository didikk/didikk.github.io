export interface NavItem {
  label: string;
  href: string;
}

/** Device shape around a screenshot. */
export type DeviceFrame =
  | "phone"
  | "tablet-landscape"
  | "tablet-portrait"
  | "tv"
  | "web";

export interface Shot {
  frame: DeviceFrame;
  /** Placeholder text shown until `src` exists. */
  label: string;
  /** Screenshot path under /public. */
  src?: string;
}

export interface Project {
  title: string;
  /** Mono meta line above the title. */
  meta: string;
  /** Brand colour behind the device mock. */
  tone: string;
  description: string;
  highlights?: string[];
  role?: string;
  stack: string;
  shots: Shot[];
  featured?: boolean;
  playStore?: string;
  appStore?: string;
}

export interface Platform {
  name: string;
  meta: string;
  body: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  /** Shorter role line for phones. */
  roleShort: string;
  start: string;
  end?: string;
  summary: string;
  partTime?: boolean;
}

export interface Principle {
  title: string;
  body: string;
}
