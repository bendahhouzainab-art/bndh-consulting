"use client";
import Component from "../../app/components/home/LogoMark";
import type { ComponentProps } from "react";

// LogoMark is styled through its real ancestors in the landing page (scoped under .bndh),
// so the isolation frame reproduces that container and its width.
export default function Render(props: ComponentProps<typeof Component>) {
  return (
    <>
      <div style={{ padding: 24, background: "#26386e" }}>
        <Component {...props} />
      </div>
    </>
  );
}
