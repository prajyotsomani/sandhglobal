import React from "react";
import { HeroSection } from "../components/home/HeroSection";
import { QuickNavStrip, HighlightsStrip } from "../components/home/QuickNavStrip";
import { WhoWeAre, GlobalReach } from "../components/about/WhoWeAre";

export function HomePage({ onNavigate }) {
  return (
    <div className="page-enter">
      <HeroSection onNavigate={onNavigate} />
      <QuickNavStrip onNavigate={onNavigate} />
      <HighlightsStrip />
      <section id="about" className="bg-dark-1 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <WhoWeAre />
          <GlobalReach />
        </div>
      </section>
    </div>
  );
}
