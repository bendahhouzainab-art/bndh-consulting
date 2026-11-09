"use client";
import Component from "../../app/components/home/Icon";
import type { ComponentProps } from "react";

// Icon is styled through its real ancestors in the landing page (scoped under .bndh),
// so the isolation frame reproduces that container and its width.
export default function Render(props: ComponentProps<typeof Component>) {
  return (
    <>
      <div style={{ width: 64, height: 64, color: "#3b5394" }}>
        <Component {...props} />
      </div>
    </>
  );
}
