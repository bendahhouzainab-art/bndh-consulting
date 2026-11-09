"use client";
import "../../app/home.css";
import Component from "../../app/components/home/StepCard";
import type { ComponentProps } from "react";

// StepCard is styled through its real ancestors in the landing page (scoped under .bndh),
// so the isolation frame reproduces that container and its width.
export default function Render(props: ComponentProps<typeof Component>) {
  return (
    <>
      <div style={{ width: "min(100vw, 360px)" }} className="bndh"><div className="steps" style={{ gridTemplateColumns: "1fr", marginTop: 0 }}>
        <Component {...props} />
      </div></div>
    </>
  );
}
