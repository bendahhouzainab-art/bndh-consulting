import type Component from "../../app/components/home/SiteHeader";
import type { ComponentProps } from "react";
import { NAV_LINKS } from "../../app/components/home/content";

type Props = ComponentProps<typeof Component>;

// Scenario data for this component's isolation route (real landing page content).
export const scenarios: Record<string, Props> = { Default: { links: NAV_LINKS } };

// Width is set by the render sidecar's frame, which mirrors the component's real container.
export const captureWidth: number | undefined = undefined;
