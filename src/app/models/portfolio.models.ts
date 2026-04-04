export interface TimelineRole {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Metric {
  label: string;
  value: string;
  detail: string;
}

export interface LiveDemoProject {
  title: string;
  summary: string;
  purpose: string;
  tech: string[];
  link?: string;
  githubLink?: string;
}

export interface Certification {
  title: string;
  link: string;
}
