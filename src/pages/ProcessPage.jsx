import React from "react";
import { SectionHeader } from "../components/common/SectionHeader";
import { ProcessSteps } from "../components/process/ProcessSteps";
import { WhyUsGrid } from "../components/whyus/WhyUsGrid";

export function ProcessPage() {
  return (
    <div className="page-enter bg-dark-1 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="How It Works"
          title="4 Steps to"
          goldTitle="Grow in Global Markets"
          center
        />

        <ProcessSteps />

        <div className="mt-20">
          <SectionHeader
            label="Why S&H Global"
            title="Your Trusted"
            goldTitle="Worldwide Trade Partner"
            center
          />

          <WhyUsGrid />
        </div>
      </div>
    </div>
  );
}

export function WhyUsPage() {
  return <ProcessPage />;
}
