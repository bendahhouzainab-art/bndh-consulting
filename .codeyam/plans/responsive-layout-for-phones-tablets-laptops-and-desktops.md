---
title: "Responsive Layout for Phones, Tablets, Laptops and Desktops"
mode: ui
createdAt: "2026-11-09T17:27:33Z"
source: manual
---

## Summary

Make the BNDH Consulting landing page fit every device: phones (~360–430px), tablets (~768–1024px, portrait and landscape), laptops (~1280px) and large desktops (1440px and up). Today `app/home.css` has a single breakpoint at 900px. That leaves tablets and small laptops (901–1200px) squeezed: the 400px booking column crowds the hero, the 72px headline and three path cards don't fit, and 64px side padding eats the space. Phones lose the main navigation entirely (`.story nav { display: none }`), and some rows (footer, CTA button with `white-space: nowrap`) can overflow on 320–375px screens. On very wide screens, the full-bleed hero has no width limit. This plan adds a tiered set of breakpoints, fluid type and spacing, and a phone menu button, so every section reads well at every size. The look of design 6 stays the same.

## Key Decisions

- **Live website only.** The user chose to change the real page (`app/`), not the six mockup files in `.codeyam/design/project_mockups/`.
- **Phones get a menu button.** The user chose a ☰ button that opens the four nav links in a drop-down panel, instead of scroll-only. It is a small client component, so the rest of the page stays server-rendered.
- **Mobile-first tiers, CSS only otherwise.** Replace the single `max-width: 900px` block with clear tiers: phone (<600px), tablet (600–1023px), laptop (1024–1279px), desktop (≥1280px). Use `clamp()` for headline/section sizes and wrap padding, so in-between widths (e.g. 820px, 1100px) scale smoothly instead of jumping.
- **Booking panel stacks below the hero until 1024px.** A 400px fixed column only works from laptop width up. Below that, the split becomes one column, and on tablets the booking panel sits centered with a sensible max width (~560px) rather than stretching edge to edge. At laptop width the booking column narrows (e.g. 340–360px) and the story padding shrinks.
- **Grids step down gradually.** Path cards: 3 → 1 column on phones, 3 on tablet landscape/laptop, with a 2-column or stacked fallback in tablet portrait. Sports: 4 → 3 → 2. Audience and steps: 3 → 2/1 on tablet → 1 on phone. Mentoring: 2 columns from 1024px, stacked below.
- **Large screens get a max content width.** Cap the hero's inner content (e.g. ~1440px centered, or limit the story column) so 1920px+ monitors don't show stretched lines. The below-the-fold `.wrap` already caps at 1160px.
- **Touch-friendly.** Tap targets ≥44px on phones (nav links, menu button, footer links). Allow `.btn` to wrap on phones so long labels never cause horizontal scroll.
- **No `viewport` meta change needed.** Next.js App Router already emits `width=device-width, initial-scale=1` by default. Confirm it in the rendered HTML at execution; only add an explicit `viewport` export in `app/layout.tsx` if it's missing.

## Implementation

### 1. Responsive tiers and fluid sizing

**File**: `app/home.css`

- Replace the lone `@media (max-width: 900px)` block with tiered media queries (phone / tablet / laptop / desktop as above).
- Fluid tokens: `.story h1` font-size via `clamp()` (≈36px phone → 72px desktop), `.section-title` (≈26px → 36px), `.story` and `.wrap` padding (16px phone, 24–32px tablet, 40–64px desktop).
- `.split`: single column below 1024px; `1fr 340px`–`360px` at laptop; `1fr 400px` at ≥1280px. Drop or reduce `min-height: 760px` when stacked so phones aren't forced into a tall empty hero.
- `.booking` when stacked: center `.panel` with `max-width: ~560px; margin: 0 auto`.
- `.bigmark`: hide on phone, scale down (e.g. 120–140px) on tablet/laptop so it doesn't collide with the headline.
- Grid step-downs for `.choose`, `.sports`, `.audience`, `.steps`, `.mentoring` as described in Key Decisions. Fix `.steps div` right padding when stacked.
- `.cta`: stack on phone/tablet portrait. `.btn` gets `white-space: normal` on phones.
- `footer .wrap`: `flex-wrap: wrap` so the brand and Privacy/Contact links wrap on narrow phones.
- Large desktop: cap hero inner content width so text and cards stay centered on 1920px+ screens.
- Add `overflow-wrap: anywhere` / `min-width: 0` on grid children where long words could push width, so nothing scrolls sideways at 320px.

### 2. Phone menu button

**New file**: `app/components/home/MobileMenu.tsx`

A `'use client'` component that takes `links: NavLink[]`. It renders a ☰ button (`aria-expanded`, `aria-controls`, accessible label "Open menu"/"Close menu") and a drop-down panel listing the links in design 6 style (midnight `--mid-2` panel, `--on-mid` text, ball-yellow focus ring). It closes when a link is tapped, on Escape, and when tapping outside. It is shown only below the tablet-landscape breakpoint. The desktop `nav` stays visible above it.

**File**: `app/components/home/SiteHeader.tsx`

Render `<MobileMenu links={links} />` next to the existing `<nav aria-label="Main">`. Keep `SiteHeader` itself a server component. Add matching styles (`.menu-btn`, `.menu-panel`) to `app/home.css`. Add new hamburger and close glyphs to `app/components/home/icons.tsx` for the button. Decide at execution whether the inline nav hides below 1024px or below 768px, depending on whether four links fit beside the brand at tablet portrait width.

### 3. Scenario coverage at all four screen sizes

**File**: `.codeyam/scenarios/home-landing-page.json`

`dimensions` currently lists only `Desktop` and `Mobile`. Add `Tablet` (768×1024) and `Laptop` (1280×800); all four are already defined in `.codeyam/editor.json` `screenSizes`. Add scenarios for the open phone menu, and check component scenarios (`herosplit-default`, `herostory-default`, `bookingpanel-default`) at Mobile/Tablet too.

### 4. Tests

**New file**: `app/components/home/MobileMenu.test.tsx`

Behaviour tests for the menu: starts closed (`aria-expanded="false"`), opens on click, lists every `NAV_LINKS` entry, closes after a link is chosen and on Escape. Layout fit at each width is verified visually through the scenario captures in step 3, not unit tests.

## Reused existing code

- `NAV_LINKS` and the `NavLink` type from `app/components/home/content.ts`, so the menu and desktop nav share one list
- `SiteHeader` from `app/components/home/SiteHeader.tsx` (glossary entry: `SiteHeader`)
- `HeroSplit`, `HeroStory`, `BookingPanel` (glossary entries of the same names). Layout changes are CSS-only; their markup stays.
- `Icon` from `app/components/home/Icon.tsx` (glossary entry: `Icon`), so the menu button uses the same line-icon style
- Design 6 tokens on `.bndh` in `app/home.css` (`--mid`, `--mid-2`, `--ball`, `--on-mid`, `--r-pill`, `--r-panel`)
- Screen sizes `Desktop`/`Laptop`/`Tablet`/`Mobile` already configured in `.codeyam/editor.json`

## Scenarios to Demonstrate

- Home page at Mobile (390×844): stacked hero, booking panel below, menu button closed
- Home page at Mobile with the menu open, showing all four links
- Home page at Tablet portrait (768×1024): stacked split with centered booking panel, 2-column sports/audience
- Home page at Laptop (1280×800): split hero with narrower booking column, 3 path cards fit
- Home page at Desktop (1440×900): unchanged design 6 look
- Edge: very narrow phone (320px wide), no horizontal scroll, footer and CTA wrap cleanly
- Edge: wide monitor (1920px+), hero content stays centered and readable