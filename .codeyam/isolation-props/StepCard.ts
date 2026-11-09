import type Component from "../../app/components/home/StepCard";
import type { ComponentProps } from "react";
import { STEPS } from "../../app/components/home/content";

type Props = ComponentProps<typeof Component>;

// Scenario data for this component's isolation route (real landing page content).
export const scenarios: Record<string, Props> = { "First step": { step: STEPS[0], number: 1 } };

// Width is set by the render sidecar's frame, which mirrors the component's real container.
export const captureWidth: number | undefined = undefined;
