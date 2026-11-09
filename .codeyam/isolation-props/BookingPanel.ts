import type Component from "../../app/components/home/BookingPanel";
import type { ComponentProps } from "react";
import { BOOKING_POINTS } from "../../app/components/home/content";

type Props = ComponentProps<typeof Component>;

// Scenario data for this component's isolation route (real landing page content).
export const scenarios: Record<string, Props> = {
  Default: { points: BOOKING_POINTS },
  "Filled Form": { points: BOOKING_POINTS },
};

// Width is set by the render sidecar's frame, which mirrors the component's real container.
export const captureWidth: number | undefined = undefined;
