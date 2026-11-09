"use client";
import "../../app/home.css";
import Component from "../../app/components/home/LandingPage";

// LandingPage is styled through its real ancestors in the landing page (scoped under .bndh),
// so the isolation frame reproduces that container and its width.
export default function Render() {
  return (
    <>
      <div style={{ width: "100vw" }}>
        <Component />
      </div>
    </>
  );
}
