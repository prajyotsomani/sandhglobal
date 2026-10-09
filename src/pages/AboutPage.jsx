import React from "react";
import { WhoWeAre, GlobalReach } from "../components/about/WhoWeAre";

export function AboutPage() {
  return (
    <div className="page-enter bg-dark-1 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <WhoWeAre />
        <GlobalReach />
      </div>
    </div>
  );
}
