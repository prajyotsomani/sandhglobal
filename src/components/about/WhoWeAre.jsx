import React from "react";
import { SectionHeader } from "../common/SectionHeader";

export function WhoWeAre() {
  const features = [
    {
      title: "Verified Buyer Network",
      desc: "Every buyer and partner on our platform is verified and trusted before any connection is made."
    },
    {
      title: "Retail Store Auckland",
      desc: "Physical presence in Auckland for direct retail and showroom experience."
    },
    {
      title: "Secure Partnerships",
      desc: "Legally structured trade agreements ensuring safe, reliable cross-border commerce."
    }
  ];

  return (
    <div>
      <SectionHeader
        label="Who We Are"
        title="Your Gateway to"
        goldTitle="Global Markets"
      />
      <p className="text-off-white/70 text-sm md:text-base leading-relaxed mb-8">
        S&amp;H Global Limited is a worldwide B2B and B2C trade platform headquartered in Auckland, New Zealand. We bridge the gap between manufacturers, exporters, wholesalers, and suppliers from any country with genuine, verified buyers across global markets worldwide.
      </p>

      <div className="flex flex-col gap-5">
        {features.map((feat) => (
          <div key={feat.title} className="flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-off-white mb-1">{feat.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{feat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function GlobalReach() {
  const reachItems = [
    { title: "Asia · Europe · Americas · Middle East", sub: "Manufacturers, Exporters, Wholesalers, Suppliers Worldwide" },
    { title: "S&H Global Ltd Platform", sub: "Global Trade Hub · Logistics · Distribution · Retail" },
    { title: "New Zealand · Australia · Pacific · Global", sub: "Distributors, Retailers, Importers, End Consumers" }
  ];

  return (
    <div>
      <span className="text-gold text-xs font-semibold uppercase tracking-widest block mb-2">Our Global Reach</span>
      <h3 className="text-xl font-bold text-off-white mb-6">Worldwide Trade Network</h3>

      <div className="flex flex-col gap-3">
        {reachItems.map((item, index) => (
          <React.Fragment key={index}>
            <div className="bg-dark-2 border border-gold/20 rounded-xl p-5 flex items-center gap-4 transition-all hover:border-gold hover:bg-dark-3">
              <div className="w-11 h-11 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                </svg>
              </div>
              <div>
                <strong className="text-gold text-xs md:text-sm font-bold block">{item.title}</strong>
                <p className="text-muted text-xs mt-0.5">{item.sub}</p>
              </div>
            </div>
            {index < 2 && <div className="text-center text-gold text-lg">⇕</div>}
          </React.Fragment>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gold/5 border border-gold/20 rounded-xl text-xs text-muted text-center leading-relaxed">
        Export • Import • Wholesale • Retail <br />
        Dropshipping • Global Trading Partner • Cross-Border Commerce
      </div>
    </div>
  );
}
