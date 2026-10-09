import React from "react";
import { LOGO_B64 } from "../../data/assets";
import { PAGES, FOOTER_SERVICES } from "../../data/navigationData";

export function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#050505] border-t border-gold-subtle pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Info - Enlarged Logo */}
          <div className="md:col-span-2">
            <img
              src={LOGO_B64}
              alt="S&H Global Ltd"
              className="h-20 sm:h-24 md:h-28 w-auto max-w-[320px] md:max-w-[380px] mb-5 object-contain filter drop-shadow-[0_4px_16px_rgba(201,168,76,0.35)]"
            />
            <p className="text-muted text-xs md:text-sm leading-relaxed max-w-md mb-6">
              Connecting manufacturers, exporters and wholesalers worldwide with verified global buyers through our B2B &amp; B2C trade platform — headquartered in Auckland, New Zealand.
            </p>
            <div className="flex gap-3">
              {[
                { href: "mailto:info@sandhgloballtd.co.nz", label: "Email", icon: "M" },
                { href: "tel:+64225557076", label: "Phone", icon: "P" },
                { href: "http://www.sandhgloballtd.co.nz", label: "Website", icon: "W" }
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center transition-colors hover:bg-gold hover:border-gold group"
                >
                  <span className="text-gold text-xs font-bold group-hover:text-black">{item.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Pages */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-4">Pages</h4>
            <ul className="flex flex-col gap-2.5 list-none p-0">
              {PAGES.map((p) => (
                <li key={p}>
                  <button
                    onClick={() => onNavigate(p)}
                    className="text-muted hover:text-off-white text-xs md:text-sm transition-all hover:translate-x-1 cursor-pointer"
                  >
                    {p}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-gold font-bold mb-4">Services</h4>
            <ul className="flex flex-col gap-2.5 list-none p-0">
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => onNavigate("Services")}
                    className="text-muted hover:text-off-white text-xs md:text-sm transition-all hover:translate-x-1 cursor-pointer text-left"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted text-center md:text-left">
          <span>© 2025 S&amp;H Global Ltd. All rights reserved. | Auckland, NZ | Global Operations</span>
          <span>
            Worldwide Trade |{" "}
            <a href="mailto:info@sandhgloballtd.co.nz" className="text-gold hover:underline">
              info@sandhgloballtd.co.nz
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
