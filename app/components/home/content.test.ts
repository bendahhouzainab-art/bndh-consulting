import { describe, expect, it } from 'vitest';
import { AUDIENCE, BOOKING_POINTS, MENTOR_OPTIONS, NAV_LINKS, PATHS, SECTION_IDS, SPORTS, STEPS, anchorTarget } from './content';
import { isIconName } from './icons';

describe('anchorTarget', () => {
  // A plain in-page anchor resolves to the id it scrolls to.
  it('returns the id of an in-page anchor', () => {
    expect(anchorTarget('#how-it-works')).toBe('how-it-works');
  });

  // Surrounding whitespace in authored data should not break the lookup.
  it('ignores surrounding whitespace', () => {
    expect(anchorTarget('  #college ')).toBe('college');
  });

  // The bare "#" used by the brand and footer links scrolls to the top, not to a section.
  it('returns null for a bare hash', () => {
    expect(anchorTarget('#')).toBeNull();
  });

  // External or path links are not in-page anchors.
  it('returns null for non-anchor links', () => {
    expect(anchorTarget('https://example.com/#college')).toBeNull();
    expect(anchorTarget('/college')).toBeNull();
  });

  // Empty input must not throw.
  it('returns null for an empty string', () => {
    expect(anchorTarget('')).toBeNull();
  });
});

describe('isIconName', () => {
  // Every icon referenced by the page artwork is a known name.
  it('accepts a defined icon', () => {
    expect(isIconName('tennis')).toBe(true);
  });

  // Unknown names and inherited object keys are rejected.
  it('rejects unknown names', () => {
    expect(isIconName('hockey')).toBe(false);
    expect(isIconName('toString')).toBe(false);
  });
});

describe('landing page content', () => {
  // Navigation and path cards must only link to sections that exist on the page.
  it('links only to sections that exist', () => {
    for (const href of [...NAV_LINKS.map((l) => l.href), ...PATHS.map((p) => p.href)]) {
      expect(SECTION_IDS).toContain(anchorTarget(href));
    }
  });

  // Every icon named in the data has artwork, so no tile renders blank.
  it('uses only defined icons', () => {
    for (const icon of [...PATHS.map((p) => p.icon), ...SPORTS.map((s) => s.icon)]) {
      expect(isIconName(icon)).toBe(true);
    }
  });

  // The design highlights exactly one sport, tennis, the firm's specialty.
  it('highlights tennis and only tennis', () => {
    const highlighted = SPORTS.filter((s) => s.highlight).map((s) => s.name);
    expect(highlighted).toEqual(['Tennis']);
    expect(SPORTS).toHaveLength(8);
  });

  // List items are keyed by title or text, so duplicates would collide in React.
  it('has unique keys in every list', () => {
    const lists = [
      PATHS.map((p) => p.title),
      SPORTS.map((s) => s.name),
      AUDIENCE.map((a) => a.title),
      STEPS.map((s) => s.title),
      MENTOR_OPTIONS.map((m) => m.title),
      BOOKING_POINTS,
      NAV_LINKS.map((l) => l.href),
    ];
    for (const list of lists) {
      expect(new Set(list).size).toBe(list.length);
    }
  });

  // The "How it works" walkthrough is three numbered steps and starts with booking.
  it('starts the steps with booking a consultation', () => {
    expect(STEPS).toHaveLength(3);
    expect(STEPS[0].title).toBe('Book a consultation');
  });
});
