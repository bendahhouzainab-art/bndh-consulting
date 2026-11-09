"use client";
import "../../app/home.css";
import Component from "../../app/components/home/HeroSplit";
import type { ComponentProps } from "react";

// HeroSplit is styled through its real ancestors in the landing page (scoped under .bndh),
// so the isolation frame reproduces that container and its width.
export default function Render(props: ComponentProps<typeof Component>) {
  return (
    <>
      <div style={{ width: "100vw" }} className="bndh">
        <Component {...props} />
      </div>
    </>
  );
}
