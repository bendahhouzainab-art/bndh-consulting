import type Component from "../../app/components/home/AudienceCard";
import type { ComponentProps } from "react";
import { AUDIENCE } from "../../app/components/home/content";

type Props = ComponentProps<typeof Component>;

// Scenario data for this component's isolation route (real landing page content).
export const scenarios: Record<string, Props> = { Parents: { item: AUDIENCE[1] } };

// Width is set by the render sidecar's frame, which mirrors the component's real container.
export const captureWidth: number | undefined = undefined;
