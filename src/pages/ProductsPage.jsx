import React from "react";
import { SectionHeader } from "../components/common/SectionHeader";
import { ProductsGrid } from "../components/products/ProductsGrid";
import { Button } from "../components/common/Button";

export function ProductsPage({ onNavigate }) {
  return (
    <div className="page-enter bg-black py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="What We Trade"
          title="Our Product"
          goldTitle="Categories"
          desc="We source and distribute a wide range of product categories globally — connecting the right suppliers with the right buyers across every market."
          center
        />

        <ProductsGrid onEnquire={() => onNavigate("Contact")} />

        {/* Custom Sourcing Banner */}
        <div className="mt-16 bg-gradient-to-r from-dark-3 to-dark-1 border border-gold-subtle rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-off-white mb-1">Don't see your product category?</h3>
            <p className="text-xs md:text-sm text-off-white/60">We handle custom sourcing for any product globally. Tell us what you need.</p>
          </div>
          <Button variant="gold" onClick={() => onNavigate("Contact")}>
            Request Custom Sourcing →
          </Button>
        </div>
      </div>
    </div>
  );
}
