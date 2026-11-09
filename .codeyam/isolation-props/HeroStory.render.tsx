"use client";
import "../../app/home.css";
import Component from "../../app/components/home/HeroStory";
import type { ComponentProps } from "react";

// HeroStory is styled through its real ancestors in the landing page (scoped under .bndh),
// so the isolation frame reproduces that container and its width.
export default function Render(props: ComponentProps<typeof Component>) {
  return (
    <>
      <div style={{ width: "min(100vw, 1040px)" }} className="bndh">
        <Component {...props} />
      </div>
    </>
  );
}
