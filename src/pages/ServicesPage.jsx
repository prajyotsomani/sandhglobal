import React from "react";
import { SectionHeader } from "../components/common/SectionHeader";
import { ServicesGrid } from "../components/services/ServicesGrid";
import { Button } from "../components/common/Button";

export function ServicesPage({ onNavigate }) {
  return (
    <div className="page-enter bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="What We Offer"
          title="B2B & B2C"
          goldTitle="Trade Platform"
          desc="Whether you're a large-scale wholesaler or a direct consumer, we have a structured path to access and grow in global markets worldwide."
          center
        />

        <ServicesGrid />

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-dark-3 to-dark-1 border border-gold-subtle rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-off-white mb-1">Ready to go global?</h3>
            <p className="text-xs md:text-sm text-off-white/60">Tell us about your product and we'll map the right trade route for you.</p>
          </div>
          <Button variant="gold" onClick={() => onNavigate("Contact")}>
            Start a Conversation →
          </Button>
        </div>
      </div>
    </div>
  );
}
