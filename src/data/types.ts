export interface NavItem {
  label: string;
  href: string;
}

/** Placeholder device shape; swap the label for a real screenshot later. */
export type DeviceFrame =
  | "phone"
  | "tablet-landscape"
  | "tablet-portrait"
  | "tv"
  | "web"
  | "tablet-phone";

export interface Shot {
  frame: DeviceFrame;
  label: string;
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
