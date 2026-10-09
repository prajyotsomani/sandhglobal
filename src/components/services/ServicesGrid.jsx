import React from "react";
import { SERVICES } from "../../data/servicesData";

export function ServiceCard({ card }) {
  return (
    <div className="bg-dark-1 border border-gold/15 rounded-2xl p-8 relative flex flex-col transition-all duration-300 hover:-translate-y-2 hover:border-gold hover:shadow-xl hover:shadow-black hover:shadow-gold/10 group">
      <span className="text-4xl font-extrabold text-gold/15 absolute top-6 right-6 font-serif">
        {card.num}
      </span>
      
      <span className="bg-gold/10 text-gold border border-gold/30 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded w-fit mb-4">
        {card.badge}
      </span>

      <h3 className="text-xl font-bold text-off-white mb-2">{card.title}</h3>
      <p className="text-xs md:text-sm text-muted leading-relaxed mb-6">{card.desc}</p>

      <ul className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-2.5 list-none p-0">
        {card.items.map((item) => (
          <li key={item} className="text-xs text-off-white/80 relative pl-4">
            <span className="text-gold absolute left-0 top-0">▸</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {SERVICES.map((card) => (
        <ServiceCard key={card.num} card={card} />
      ))}
    </div>
  );
}
