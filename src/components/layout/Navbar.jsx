import React, { useState } from "react";
import { LOGO_B64 } from "../../data/assets";
import { PAGES } from "../../data/navigationData";

export function Navbar({ currentPage, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-gold-subtle px-4 md:px-10 py-2.5 md:py-3 flex items-center justify-between">
        {/* Brand Logo - Enlarged & Crisp */}
        <div
          onClick={() => onNavigate("Home")}
          className="cursor-pointer flex items-center transition-transform hover:scale-105 py-1"
        >
          <img
            src={LOGO_B64}
            alt="S&H Global Ltd"
            className="h-16 sm:h-18 md:h-20 w-auto max-w-[260px] md:max-w-[320px] object-contain drop-shadow-[0_4px_14px_rgba(201,168,76,0.35)]"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-7 lg:gap-8 list-none m-0 p-0">
          {PAGES.map((page) => (
            <li key={page}>
              <button
                onClick={() => onNavigate(page)}
                className={`text-xs lg:text-sm uppercase tracking-widest font-medium transition-all duration-300 relative py-1 cursor-pointer ${
                  currentPage === page ? "text-gold opacity-100" : "text-off-white/80 hover:text-gold hover:opacity-100"
                }`}
              >
                {page}
                {currentPage === page && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gold shadow-[0_0_8px_rgba(201,168,76,0.8)] rounded-full" />
                )}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => onNavigate("Contact")}
          className="hidden md:inline-block bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider px-5 py-2.5 rounded shadow-md shadow-gold/20 hover:brightness-110 hover:-translate-y-0.5 transition-all cursor-pointer"
        >
          Get in Touch
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-0 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-[2px] bg-gold transition-all ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-[2px] bg-gold transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[2px] bg-gold transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed top-[82px] left-0 right-0 bg-[#101010]/95 backdrop-blur-xl border-b border-gold-subtle p-6 flex flex-col gap-3 z-40 page-enter">
          {PAGES.map((page) => (
            <button
              key={page}
              onClick={() => {
                onNavigate(page);
                setMobileOpen(false);
              }}
              className={`text-left text-sm uppercase tracking-wider font-medium py-3 px-4 rounded transition-all cursor-pointer ${
                currentPage === page ? "bg-gold/15 text-gold" : "text-off-white hover:bg-gold/10 hover:text-gold"
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={() => {
              onNavigate("Contact");
              setMobileOpen(false);
            }}
            className="w-full mt-2 bg-gold-gradient text-black font-semibold text-xs uppercase tracking-wider py-3 rounded text-center cursor-pointer"
          >
            Get in Touch
          </button>
        </div>
      )}
    </>
  );
}
