import type { IconName } from './icons';

export interface PathItem {
  href: string;
  icon: IconName;
  title: string;
  body: string;
}

export interface SportItem {
  icon: IconName;
  name: string;
  highlight?: boolean;
}

export interface TextItem {
  title: string;
  body: string;
}

export interface NavLink {
  href: string;
  label: string;
}

/** In-page section ids the navigation and path cards link to. */
export const SECTION_IDS = ['book', 'college', 'academies', 'mentoring', 'how-it-works'] as const;

export const NAV_LINKS: NavLink[] = [
  { href: '#college', label: 'College sports' },
  { href: '#academies', label: 'Academies' },
  { href: '#mentoring', label: 'Athlete mentoring' },
  { href: '#how-it-works', label: 'How it works' },
];

export const PATHS: PathItem[] = [
  { href: '#college', icon: 'cap', title: 'College in the US', body: 'NCAA, NAIA or junior college teams that fit your level, and how to get the biggest scholarship.' },
  { href: '#academies', icon: 'tennis', title: 'Tennis academies', body: 'A pro pathway during high school or after college, and what it really costs.' },
  { href: '#mentoring', icon: 'chat', title: 'Athlete mentoring', body: 'Support from someone who made the move, once you arrive.' },
];

export const BOOKING_POINTS: string[] = [
  'Scholarship options and how to maximize them',
  'College vs. academy pathways',
  'Costs, budgets and next steps',
];

export const SPORTS: SportItem[] = [
  { icon: 'tennis', name: 'Tennis', highlight: true },
  { icon: 'soccer', name: 'Soccer' },
  { icon: 'basketball', name: 'Basketball' },
  { icon: 'football', name: 'Football' },
  { icon: 'baseball', name: 'Baseball' },
  { icon: 'volleyball', name: 'Volleyball' },
  { icon: 'swim', name: 'Swimming' },
  { icon: 'golf', name: 'Golf' },
];

export const AUDIENCE: TextItem[] = [
  { title: 'Athletes', body: 'Understand your options abroad and what it takes to get recruited.' },
  { title: 'Parents and guardians', body: 'See the real costs and how to cover the biggest share with scholarships.' },
  { title: 'Coaches', body: 'Guide your players toward the right college or academy.' },
];

export const MENTOR_OPTIONS: TextItem[] = [
  { title: 'Athlete mentor', body: 'Training, teammates, life far from home' },
  { title: 'Mental health professional', body: 'Pressure, injury, confidence' },
];

export const STEPS: TextItem[] = [
  { title: 'Book a consultation', body: 'Pick a time for a video call or an in-person meeting.' },
  { title: 'Tell us about the athlete', body: 'A short form on sport, level, grades and budget, so your expert comes prepared.' },
  { title: 'Ask everything', body: 'Meet your expert and leave with a clear plan and real numbers.' },
];

/** Returns the section id an in-page href points to, or null for anything that is not a `#id` anchor. */
export function anchorTarget(href: string): string | null {
  const match = /^#([A-Za-z][\w-]*)$/.exec(href.trim());
  return match ? match[1] : null;
}
