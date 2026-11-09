"use client";
import "../../app/home.css";
import Component from "../../app/components/home/MentoringSection";
import type { ComponentProps } from "react";

// MentoringSection is styled through its real ancestors in the landing page (scoped under .bndh),
// so the isolation frame reproduces that container and its width.
export default function Render(props: ComponentProps<typeof Component>) {
  return (
    <>
      <style>{`.codeyam-frame section{margin-top:0}`}</style>
      <div style={{ width: "min(100vw, 1240px)" }} className="bndh codeyam-frame"><main className="wrap" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <Component {...props} />
      </main></div>
    </>
  );
}
