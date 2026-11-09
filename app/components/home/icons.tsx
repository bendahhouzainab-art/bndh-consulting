import type { ReactNode } from 'react';

// Inline SVG artwork (24x24 viewBox) for the landing page icons.
export const ICONS = {
  cap: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9.5L12 5l10 4.5-10 4.5z" />
      <path d="M6 11.4V16c0 1.4 2.7 2.8 6 2.8s6-1.4 6-2.8v-4.6" />
      <path d="M21 10v5.5" />
    </g>
  ),
  tennis: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <ellipse cx="9.5" cy="9" rx="5.6" ry="6.4" transform="rotate(-40 9.5 9)" />
      <path d="M6.6 6.2l5.8 5.8M5.2 9.4l4 4M8.6 4.8l4.2 4.2" />
      <path d="M13.3 13.6l6.2 6.2" />
      <circle cx="19" cy="6" r="2.2" />
    </g>
  ),
  chat: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <path d="M4 5h16v10H9l-5 4z" />
      <path d="M8.5 9.5h7M8.5 12h4" strokeLinecap="round" />
    </g>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
  basketball: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3v18" />
      <path d="M5.6 5.6c2.6 2.4 2.6 10.4 0 12.8M18.4 5.6c-2.6 2.4-2.6 10.4 0 12.8" />
    </g>
  ),
  football: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M4.5 19.5c-1.6-4.8 0-10 3.6-13.4C11.5 3 16.6 2.8 19.5 4.5c1.6 4.8 0 10-3.6 13.4C12.5 21 7.4 21.2 4.5 19.5z" />
      <path d="M9 15l6-6M10.6 10.2l1.4 1.4M12.2 8.6l1.4 1.4M9 11.8l1.4 1.4" />
    </g>
  ),
  soccer: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.6l3.6 2.6-1.4 4.2H9.8l-1.4-4.2z" />
      <path d="M12 7.6V3.2M15.6 10.2l4.3-1.4M14.2 14.4l2.6 3.8M9.8 14.4l-2.6 3.8M8.4 10.2L4.1 8.8" />
    </g>
  ),
  baseball: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M6.2 5.2c2.4 3.6 2.4 10 0 13.6M17.8 5.2c-2.4 3.6-2.4 10 0 13.6" />
    </g>
  ),
  volleyball: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3c-1.5 3.6-1 7.2 0 9M12 12c3.8.6 7 2.6 8.2 4.4M12 12c-2.4 3-5.6 4.6-8.8 4.4" />
    </g>
  ),
  swim: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M2.5 17c1.6 0 1.6-1.2 3.2-1.2s1.6 1.2 3.2 1.2 1.6-1.2 3.2-1.2 1.6 1.2 3.2 1.2 1.6-1.2 3.2-1.2 1.6 1.2 2.9 1.2" />
      <circle cx="16.5" cy="7" r="2.2" />
      <path d="M5 13l4.5-4.2 3.2 2.4 3-1.6" />
    </g>
  ),
  golf: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 20V3l8 3.2L9 9.4" />
      <ellipse cx="11" cy="20" rx="7" ry="1.6" />
    </g>
  ),
  track: (
    <g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M12 13.5V9.5M10 3h4M12 3v3M18 7.5l1.4-1.4" />
    </g>
  ),
} satisfies Record<string, ReactNode>;

export type IconName = keyof typeof ICONS;

export function isIconName(name: string): name is IconName {
  return Object.prototype.hasOwnProperty.call(ICONS, name);
}
