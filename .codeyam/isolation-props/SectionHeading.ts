import type Component from "../../app/components/home/SectionHeading";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Component>;

// Scenario data for this component's isolation route (real landing page content).
export const scenarios: Record<string, Props> = { "With lede": { id: "demo-title", title: "We advise on the sports US colleges recruit most.", lede: "And on the school side too: grades, English tests and admissions deadlines." }, "Title only": { id: "demo-title", title: "How it works" } };

// Width is set by the render sidecar's frame, which mirrors the component's real container.
export const captureWidth: number | undefined = undefined;
