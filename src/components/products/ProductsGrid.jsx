import React, { useState } from "react";
import { PRODUCT_TABS, PRODUCTS } from "../../data/productsData";
import { Button } from "../common/Button";

function ProductIcon({ cat }) {
  if (cat === "all") return null;

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

  if (!icons[cat]) return null;

  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {icons[cat]}
    </svg>
  );
}

const DEFAULT_PRODUCT_IMAGE = "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80";

const PRODUCT_BOX_IMAGES = {
  "Spices & Grains": "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=800&q=80",
  "Packaged Foods": "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=800&q=80",
  "Garments & Fabric": "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=800&q=80",
  "Industrial Goods": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  "Lifestyle & Home": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  "Health & Wellness": "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
  "Premium Dry Fruits": "https://images.unsplash.com/photo-1508779018996-601e37fa274e?auto=format&fit=crop&w=800&q=80",
  "Handmade & Artisan": "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=800&q=80"
};

export function ProductCard({ item, onEnquire }) {
  const bgImage = PRODUCT_BOX_IMAGES[item.title] || DEFAULT_PRODUCT_IMAGE;

  return (
    <div className="relative overflow-hidden bg-dark-1 border border-gold/20 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-xl hover:shadow-gold/10 flex flex-col group">
      {bgImage && (
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-108 pointer-events-none"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/65 to-black/90 pointer-events-none transition-colors duration-300 group-hover:from-black/35 group-hover:via-black/55 group-hover:to-black/85" />

      {item.cat !== "all" && item.title !== "All Categories" && (
        <div className="relative z-10 w-12 h-12 rounded-xl bg-black/40 border border-gold/25 backdrop-blur-sm flex items-center justify-center mb-4 shadow-sm">
          <ProductIcon cat={item.cat} />
        </div>
      )}

      <span className="relative z-10 text-[11px] font-semibold text-gold uppercase tracking-wider mb-1 block drop-shadow-sm">
        {item.badge}
      </span>

      <h3 className="relative z-10 text-xl font-bold text-white mb-2 tracking-tight drop-shadow-sm">{item.title}</h3>
      <p className="relative z-10 text-xs text-off-white/90 leading-relaxed mb-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">{item.desc}</p>

      <ul className="relative z-10 mt-auto pt-4 border-t border-white/15 flex flex-col gap-1.5 list-none p-0 mb-5">
        {item.items.map((it) => (
          <li key={it} className="text-xs text-off-white/90 relative pl-4 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
            <span className="text-gold absolute left-0 top-0 font-bold">•</span>
            {it}
          </li>
        ))}
      </ul>

      <button
        onClick={onEnquire}
        className="relative z-10 w-full bg-black/40 border border-gold/40 text-gold hover:bg-gold hover:text-black hover:border-gold py-2.5 text-xs font-semibold rounded-lg transition-all cursor-pointer backdrop-blur-xs shadow-sm"
      >
        Enquire Now
      </button>
    </div>
  );
}

const CATEGORY_TAB_IMAGES = {
  all: DEFAULT_PRODUCT_IMAGE,
  food: PRODUCT_BOX_IMAGES["Spices & Grains"],
  textile: PRODUCT_BOX_IMAGES["Garments & Fabric"],
  industrial: PRODUCT_BOX_IMAGES["Industrial Goods"],
  consumer: PRODUCT_BOX_IMAGES["Lifestyle & Home"],
  health: PRODUCT_BOX_IMAGES["Health & Wellness"],
  dryfruits: PRODUCT_BOX_IMAGES["Premium Dry Fruits"],
  artcraft: PRODUCT_BOX_IMAGES["Handmade & Artisan"]
};

export function ProductsGrid({ onEnquire }) {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === activeTab);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {PRODUCT_TABS.map(([val, label]) => {
          const isActive = activeTab === val;
          const bgImg = CATEGORY_TAB_IMAGES[val] || DEFAULT_PRODUCT_IMAGE;

          return (
            <button
              key={val}
              type="button"
              onClick={() => setActiveTab(val)}
              className={`group relative overflow-hidden isolate px-4 py-2 text-xs rounded-full border transition-all duration-300 cursor-pointer ${
                isActive
                  ? "border-gold shadow-[0_0_12px_rgba(201,168,76,0.25)] ring-1 ring-gold/50"
                  : "border-gold/30 hover:border-gold/80 bg-dark-2 hover:shadow-[0_0_8px_rgba(201,168,76,0.15)]"
              }`}
            >
              {/* Background image */}
              <span
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-110 pointer-events-none"
                style={{
                  backgroundImage: `url(${bgImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
                aria-hidden="true"
              />

              {/* Subtle dark overlay for text legibility */}
              <span
                className={`absolute inset-0 pointer-events-none transition-colors duration-300 ${
                  isActive
                    ? "bg-gradient-to-b from-black/45 via-gold/15 to-black/60 group-hover:from-black/40 group-hover:via-gold/20 group-hover:to-black/55"
                    : "bg-black/60 group-hover:bg-black/45"
                }`}
                aria-hidden="true"
              />

              {/* Category label */}
              <span
                className={`relative z-10 transition-colors duration-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] whitespace-nowrap ${
                  isActive
                    ? "text-gold font-semibold tracking-wide"
                    : "text-off-white/90 group-hover:text-white font-medium tracking-wide"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
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

