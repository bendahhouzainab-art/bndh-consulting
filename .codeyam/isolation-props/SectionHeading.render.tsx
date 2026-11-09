"use client";
import "../../app/home.css";
import Component from "../../app/components/home/SectionHeading";
import type { ComponentProps } from "react";

// SectionHeading is styled through its real ancestors in the landing page (scoped under .bndh),
// so the isolation frame reproduces that container and its width.
export default function Render(props: ComponentProps<typeof Component>) {
  return (
    <>
      <div style={{ width: "min(100vw, 1240px)" }} className="bndh"><div className="wrap" style={{ paddingTop: 32, paddingBottom: 32 }}>
        <Component {...props} />
      </div></div>
    </>
  );
}
