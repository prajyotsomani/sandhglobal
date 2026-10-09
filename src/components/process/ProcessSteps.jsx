import React from "react";
import { PROCESS_STEPS } from "../../data/processData";

export function ProcessSteps() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {PROCESS_STEPS.map((step, idx) => (
        <div key={idx} className="bg-dark-2 border border-gold/15 rounded-xl p-6 text-center transition-all hover:border-gold hover:-translate-y-1">
          <div className="w-12 h-12 rounded-full bg-gold-gradient text-black font-extrabold text-lg flex items-center justify-center mx-auto mb-4 shadow-md shadow-gold/30">
            {idx + 1}
          </div>
          <h3 className="text-base font-bold text-off-white mb-2">{step.title}</h3>
          <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}
