import React from "react";
import { Button } from "../common/Button";
import { LOGO_B64 } from "../../data/assets";

export function HeroSection({ onNavigate }) {
  return (
    <section className="relative py-16 md:py-24 px-6 overflow-hidden bg-gradient-to-b from-black via-dark-1 to-black">
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Content */}
        <div className="lg:col-span-7">
          <div className="inline-block bg-gold/10 border border-gold/30 text-gold rounded-full text-[11px] font-semibold uppercase tracking-widest px-4 py-1.5 mb-6">
            Global Trade &amp; Supply Chain Platform
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-off-white leading-[1.1] mb-6">
            Connecting <br />
            <span className="text-gold-gradient">Global</span> <br />
            Markets
          </h1>

          <p className="text-off-white/75 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
            S&amp;H Global Ltd is a worldwide B2B &amp; B2C trade platform — connecting manufacturers, exporters, and wholesalers from any country with verified buyers across global markets.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="gold" onClick={() => onNavigate("Contact")}>
              Start Your Journey →
            </Button>
            <Button variant="outline" onClick={() => onNavigate("Services")}>
              Our Services
            </Button>
          </div>
        </div>

        {/* Right Column Logo & Stats Box */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-gradient-to-br from-dark-2 to-dark-1 border border-gold/25 rounded-2xl p-8 text-center shadow-2xl shadow-black relative overflow-hidden group">
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/20 transition-all duration-500" />
            <img
              src={LOGO_B64}
              alt="S&H Global Ltd"
              className="max-h-60 sm:max-h-64 w-auto mx-auto object-contain relative z-10 filter drop-shadow-[0_6px_25px_rgba(201,168,76,0.35)] transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Stats Box */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-dark-2 border border-gold/15 rounded-xl p-5 text-center transition-all hover:border-gold/40 hover:-translate-y-1">
              <div className="text-2xl font-bold text-gold">B2B</div>
              <div className="text-[11px] text-muted uppercase tracking-wider mt-1">Wholesale Platform</div>
            </div>
            <div className="bg-dark-2 border border-gold/15 rounded-xl p-5 text-center transition-all hover:border-gold/40 hover:-translate-y-1">
              <div className="text-2xl font-bold text-gold">B2C</div>
              <div className="text-[11px] text-muted uppercase tracking-wider mt-1">Retail &amp; E-commerce</div>
            </div>
            <div className="col-span-2 bg-dark-2 border border-gold/15 rounded-xl p-5 text-center transition-all hover:border-gold/40 hover:-translate-y-1">
              <div className="text-xl md:text-2xl font-bold text-gold">Auckland, NZ</div>
              <div className="text-[11px] text-muted uppercase tracking-wider mt-1">Headquarters • Serving 50+ Countries Worldwide</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
