"use client";
import "../../app/home.css";
import Component from "../../app/components/home/SiteFooter";

// SiteFooter is styled through its real ancestors in the landing page (scoped under .bndh),
// so the isolation frame reproduces that container and its width.
export default function Render() {
  return (
    <>
      <style>{`.codeyam-frame footer .wrap{margin-top:24px}`}</style>
      <div style={{ width: "100vw" }} className="bndh codeyam-frame">
        <Component />
      </div>
    </>
  );
}
