"use client";
import "../../app/home.css";
import Component from "../../app/components/home/MentorOption";
import type { ComponentProps } from "react";

// MentorOption is styled through its real ancestors in the landing page (scoped under .bndh),
// so the isolation frame reproduces that container and its width.
export default function Render(props: ComponentProps<typeof Component>) {
  return (
    <>
      <div style={{ width: "min(100vw, 420px)" }} className="bndh"><div className="mentoring" style={{ gridTemplateColumns: "1fr", padding: 24 }}><div className="m-opts">
        <Component {...props} />
      </div></div></div>
    </>
  );
}
