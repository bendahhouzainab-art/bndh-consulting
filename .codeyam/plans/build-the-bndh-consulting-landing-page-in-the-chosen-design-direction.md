---
title: "Build the BNDH Consulting landing page in the chosen design direction"
mode: ui
createdAt: "2026-10-16T21:26:41Z"
source: manual
---

## Goal
Build the BNDH Consulting landing page once the user picks one of the six design directions in `.codeyam/design/project_mockups/` (01–06).

## Decisions already made
- Name: BNDH Consulting. Colours: the specific yellow from the user's reference (angelakerek.com/makeithappenworkbook) with a subtle tennis-ball logo shape, name centred; a not-too-dark midnight blue as the dominant secondary colour.
- Audience: international athletes, parents/guardians, coaches.
- Feel: clear, welcoming, expert, international — "a trusted coach". Avoid recruiting-agency / flashy ad / stiff corporate / dense admissions looks.
- Imagery: photo of the expert; illustrations of popular US college sports and school items.
- Languages: English at launch, with a language switcher and structure ready for Arabic (right-to-left), French, Spanish, German.
- Booking mechanism: deferred by the user — landing page only links to a "Book a consultation" call to action.

## Scope of the landing page
- Hero explaining the service + Book a consultation button.
- Two paths: Play college sports in the USA (scholarships, maximizing percentage) and Tennis academies / going pro (high school or post-college).
- Who it's for: athletes, parents/guardians, coaches.
- How it works: book → questionnaire → meet the expert (virtual or in person).

## Scenarios
- Launch-day landing page (desktop), mobile width, long-content edge case.

## Stack
Scaffold with `codeyam-editor editor template nextjs-prisma-sqlite` at ui-prepare (needed later for the questionnaire and booking).