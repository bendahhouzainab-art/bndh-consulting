---
title: "design -- Switch the app to the Offcatalog design"
mode: ui
createdAt: "2026-10-20T14:28:24Z"
prefix: "design"
source: design-switch
---

## Summary

The user chose the **Offcatalog** design (`.codeyam/design/project_mockups/06-offcatalog-mockup.html`) for an app that already exists. Swapping the design system in place would change the tokens the app renders through without touching any of the code written against the old ones, so this switch is planned work rather than a config write.

The picked mockup is the visual contract: match its layout and treatment, not only its tokens.

## Design system: before and after

- **Current:** no design system recorded. The app's existing styling is the baseline.
- **Chosen:** `.codeyam/design/design_systems/offcatalog.md` (0 tokens)

## Surfaces that use these tokens

No project file mentions an affected token directly. The app may style through literal values, so expect hand-adjustment across its main surfaces rather than a token swap.

## Steps

1. Copy `.codeyam/design/design_systems/offcatalog.md` to `.codeyam/design/design_system.md` and `.codeyam/design/project_mockups/06-offcatalog-mockup.html` to `.codeyam/design/selected_mockup.html`.
2. Update the app's own token definitions to the chosen values.
3. Walk the surfaces above, recapturing their scenarios and comparing each against the mockup.
4. Fix the components that bypass tokens.
