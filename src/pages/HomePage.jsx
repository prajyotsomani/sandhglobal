import React from "react";
import { HeroSection } from "../components/home/HeroSection";
import { QuickNavStrip, HighlightsStrip } from "../components/home/QuickNavStrip";

export function HomePage({ onNavigate }) {
  return (
    <div className="page-enter">
      <HeroSection onNavigate={onNavigate} />
      <QuickNavStrip onNavigate={onNavigate} />
      <HighlightsStrip />
    </div>
  );
}
