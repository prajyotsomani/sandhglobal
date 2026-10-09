import React from "react";
import { QUICK_NAV_ITEMS } from "../../data/navigationData";
import { MINI_WHY_US } from "../../data/whyUsData";

export function QuickNavStrip({ onNavigate }) {
  return (
    <div className="bg-dark-1 border-t border-b border-dark-3 px-6 py-0">
      <div className="max-w-7xl mx-auto flex items-center overflow-x-auto gap-0 divide-x divide-dark-3 no-scrollbar">
        {QUICK_NAV_ITEMS.map((item) => (
          <button
            key={item.page}
            onClick={() => onNavigate(item.page)}
            className="bg-transparent border-0 text-muted hover:text-gold text-xs uppercase tracking-widest font-medium py-4 px-6 whitespace-nowrap transition-colors cursor-pointer"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export function HighlightsStrip() {
  return (
    <section className="bg-dark-1 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gold/10 rounded-xl overflow-hidden border border-gold/15">
          {MINI_WHY_US.map((item) => (
            <div key={item.title} className="bg-dark-2 p-8 text-center transition-all hover:bg-dark-3">
              <h3 className="text-base font-bold text-off-white mb-2">{item.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
