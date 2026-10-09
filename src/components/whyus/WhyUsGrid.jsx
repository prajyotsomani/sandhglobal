import React from "react";
import { WHY_US_FEATURES } from "../../data/whyUsData";

export function WhyUsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {WHY_US_FEATURES.map((item) => (
        <div key={item.title} className="bg-dark-2 border border-gold/15 rounded-xl p-8 transition-all hover:border-gold hover:-translate-y-1 hover:bg-dark-3">
          <div className="mb-4">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
          </div>
          <h3 className="text-base font-bold text-off-white mb-2">{item.title}</h3>
          <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}
