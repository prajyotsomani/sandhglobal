import React, { useState } from "react";
import { PRODUCT_TABS, PRODUCTS } from "../../data/productsData";
import { Button } from "../common/Button";

function ProductIcon({ cat }) {
  const icons = {
    food: (
      <>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </>
    ),
    textile: (
      <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z" />
    ),
    industrial: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M20 12h-2M6 12H4M19.07 19.07l-1.41-1.41M5.34 5.34L3.93 3.93M12 20v-2M12 6V4" />
      </>
    ),
    consumer: (
      <>
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </>
    ),
    health: (
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    ),
    dryfruits: (
      <>
        <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </>
    ),
    artcraft: (
      <>
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
        <circle cx="11" cy="11" r="2" />
      </>
    )
  };

  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {icons[cat] || icons.food}
    </svg>
  );
}

export function ProductCard({ item, onEnquire }) {
  return (
    <div className="bg-dark-1 border border-gold/15 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold hover:shadow-lg hover:shadow-gold/10 flex flex-col">
      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
        <ProductIcon cat={item.cat} />
      </div>

      <span className="text-[10px] font-semibold text-gold uppercase tracking-wider mb-1 block">
        {item.badge}
      </span>

      <h3 className="text-lg font-bold text-off-white mb-2">{item.title}</h3>
      <p className="text-xs text-muted leading-relaxed mb-4">{item.desc}</p>

      <ul className="mt-auto pt-4 border-t border-white/10 flex flex-col gap-1.5 list-none p-0 mb-5">
        {item.items.map((it) => (
          <li key={it} className="text-xs text-off-white/75 relative pl-4">
            <span className="text-gold absolute left-0 top-0">•</span>
            {it}
          </li>
        ))}
      </ul>

      <button
        onClick={onEnquire}
        className="w-full bg-transparent border border-gold/30 text-gold hover:bg-gold hover:text-black hover:border-gold py-2 text-xs font-semibold rounded transition-all cursor-pointer"
      >
        Enquire Now
      </button>
    </div>
  );
}

export function ProductsGrid({ onEnquire }) {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === activeTab);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {PRODUCT_TABS.map(([val, label]) => (
          <button
            key={val}
            onClick={() => setActiveTab(val)}
            className={`px-4 py-2 text-xs font-medium rounded-full border transition-all cursor-pointer ${
              activeTab === val
                ? "bg-gold text-black border-gold font-semibold shadow-md shadow-gold/20"
                : "bg-dark-2 text-off-white border-gold/20 hover:border-gold hover:text-gold"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((item, index) => (
          <ProductCard key={index} item={item} onEnquire={onEnquire} />
        ))}
      </div>
    </div>
  );
}
