---
title: "Athletic Resources Tab in Design 6"
mode: ui
createdAt: "2026-10-06T19:46:40Z"
source: manual
---

## Summary

Add an **Athletic resources** tab to design 6 (`06-offcatalog-mockup.html`, "Booking up front, split screen" for BNDH Consulting). It gets a link in the main navigation, next to "Athlete mentoring", and opens a new section with four sub-tabs: **Books**, **Articles**, **Success stories** and **Educational videos**. Visitors switch between the sub-tabs to browse each kind of resource, and Books is open by default. The section uses design 6's existing look: midnight/tint panels, the yellow "ball" accent, pill shapes and line icons.

## Key Decisions

- **One-page section, not a separate page.** The mockup is one self-contained HTML file whose nav already uses in-page anchors (`#mentoring`, `#book`). The new tab follows that pattern: a nav link to `#resources` and a new `<section class="resources" id="resources">` inside `<main class="wrap">`. This keeps the design a single previewable file.
- **Sub-tabs are a real ARIA tablist.** Use `role="tablist"`, `role="tab"`, `aria-selected` and `aria-controls`, plus `role="tabpanel"` panels that use `hidden`. A small inline vanilla `<script>` (the file currently has none) switches panels on click and handles Left/Right/Home/End keys. No libraries, so the mockup stays self-contained.
- **Active sub-tab style reuses the language pills.** The active tab gets a ball-yellow pill (`--ball` / `--on-ball`) like `.btn-ball`. Inactive tabs are outlined with `--rule`. Spacing, radii and colours all come from the existing `:root` tokens, and the dark theme (`:root[data-theme="dark"]`) is covered automatically.
- **Content is clearly illustrative.** 3–4 cards per sub-tab, written for the brand's audience: athletes heading to US colleges or academies, and their families. Success stories use invented first names and are labelled as examples, so the mockup does not present fabricated testimonials as real.

## Implementation

### 1. Nav entry

**File**: `.codeyam/design/project_mockups/06-offcatalog-mockup.html`

In `<nav aria-label="Main">` (in the `.story` header), add `<a href="#resources">Athletic resources</a>` after "Athlete mentoring". On mobile the nav is hidden (`@media (max-width:900px)` → `.story nav{display:none}`), so the section must also be reachable by scrolling. No mobile nav change is needed.

### 2. Resources section markup

**File**: `.codeyam/design/project_mockups/06-offcatalog-mockup.html`

Add `<section class="resources" id="resources">` inside `<main class="wrap">`, between `.mentoring` and `.steps`:
- A heading and lede, e.g. "Athletic resources" / "Reading, watching and real stories to prepare for college sport abroad."
- `<div role="tablist" aria-label="Resource type">` with four `<button role="tab">` items, each with a sprite icon:
  - Books → `#i-book`
  - Articles → `#i-pencil` or a new small `i-article` symbol
  - Success stories → `#i-check` or `#i-cap`
  - Educational videos → `#i-video`
- Four `role="tabpanel"` panels, each a card grid:
  - **Books**: title, author, one-line "why read it", and a sport/topic tag (e.g. recruiting, mindset, nutrition).
  - **Articles**: headline, source, read time and topic tag.
  - **Success stories**: athlete first name, sport, home country → US school level (e.g. "Division II tennis"), and a short quote. Use the existing `.spot` illustrations or sport icons as avatars.
  - **Educational videos**: thumbnail block (tint panel with the `#i-video` play glyph), title and duration.

### 3. Styles

**File**: `.codeyam/design/project_mockups/06-offcatalog-mockup.html`

Add a `/* resources */` block next to the `.mentoring` and `.steps` rules:
- `.resources{margin-top:112px}`
- `.tabs` as a flex row of pills, with `[aria-selected="true"]` using the ball accent
- `.res-grid` as a 3-column grid, with cards on `--tint` and `--r-panel` radii

In the existing `@media (max-width:900px)` block, collapse the grid to 1 column and let the tab row scroll horizontally (`overflow-x:auto`) so the four pills never wrap awkwardly at 375px.

### 4. Tab behaviour

**File**: `.codeyam/design/project_mockups/06-offcatalog-mockup.html`

Add a short inline `<script>` before `</body>`:
- Clicking a tab sets `aria-selected` and `tabindex` (roving tabindex) and toggles each panel's `hidden`.
- Arrow keys and Home/End move focus between tabs and activate them.
- Optional: open a specific sub-tab from the hash (`#resources-videos`) so each tab can be shown directly in a scenario.

## Reused existing code

- SVG sprite symbols `i-book`, `i-pencil`, `i-video`, `i-cap`, `i-check` already defined in `.codeyam/design/project_mockups/06-offcatalog-mockup.html`
- Design tokens (`--mid`, `--tint`, `--ball`, `--on-ball`, `--rule`, `--r-panel`, `--r-pill`) and the `.btn-ball` pill style from the same file
- Section rhythm from `.mentoring` / `.steps` (`margin-top:112px`, `.wrap` container)
- No glossary or test-registry entries apply. The project has no app source yet, only design mockups, so this change is to the design file alone.

## Scenarios to Demonstrate

- Default: the Athletic resources section with the **Books** sub-tab active
- Each other sub-tab active: Articles, Success stories, Educational videos
- Mobile width (375px): the tab row scrolls horizontally and cards stack in one column
- Dark theme (`data-theme="dark"`): contrast of the pills and cards
- Keyboard: arrow keys move between sub-tabs, with a visible focus ring (`--ball` outline)