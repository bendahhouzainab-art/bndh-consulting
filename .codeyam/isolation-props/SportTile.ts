import type Component from "../../app/components/home/SportTile";
import type { ComponentProps } from "react";
import { SPORTS } from "../../app/components/home/content";

type Props = ComponentProps<typeof Component>;

// Scenario data for this component's isolation route (real landing page content).
export const scenarios: Record<string, Props> = { Highlighted: { sport: SPORTS[0] }, Standard: { sport: SPORTS[1] } };

// Width is set by the render sidecar's frame, which mirrors the component's real container.
export const captureWidth: number | undefined = undefined;
