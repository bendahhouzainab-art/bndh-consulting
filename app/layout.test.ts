import { describe, expect, it } from 'vitest';
import { metadata } from './layout';

describe('site metadata', () => {
  // The browser tab and search results show this title, so it must be the
  // business name rather than the scaffold's placeholder.
  it('names the business in the browser tab', () => {
    expect(metadata.title).toBe('BNDH Consulting');
  });

  // Search engines and link previews use the description; it should say who
  // the service is for.
  it('describes the consulting service', () => {
    expect(metadata.description).toMatch(/international athletes/);
  });
});
