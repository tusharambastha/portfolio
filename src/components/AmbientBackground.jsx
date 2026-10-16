import React from "react";
import "./AmbientBackground.css";

export default function AmbientBackground() {
  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="ambient-orb orb-1" />
      <div className="ambient-orb orb-2" />
      <div className="ambient-orb orb-3" />
      <div className="ambient-grid-pattern" />
      <div className="ambient-glow-wash" />
    </div>
  );
}
