"use client";
import "../../app/home.css";
import Component from "../../app/components/home/PathCard";
import type { ComponentProps } from "react";

// PathCard is styled through its real ancestors in the landing page (scoped under .bndh),
// so the isolation frame reproduces that container and its width.
export default function Render(props: ComponentProps<typeof Component>) {
  return (
    <>
      <div style={{ width: "min(100vw, 420px)" }} className="bndh"><div className="story"><div className="choose" style={{ gridTemplateColumns: "1fr" }}>
        <Component {...props} />
      </div></div></div>
    </>
  );
}
