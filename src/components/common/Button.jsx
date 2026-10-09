import React from "react";

export function Button({ children, variant = "gold", onClick, className = "", type = "button" }) {
  const baseStyles = "font-semibold text-xs md:text-sm uppercase tracking-wider py-3 px-6 rounded transition-all duration-300 inline-flex items-center justify-center gap-2 cursor-pointer";
  
  const variants = {
    gold: "bg-gold-gradient text-black shadow-lg shadow-gold/20 hover:-translate-y-0.5 hover:shadow-gold/40 hover:brightness-105",
    outline: "bg-transparent text-off-white border border-gold/40 hover:bg-gold/10 hover:border-gold hover:text-gold hover:-translate-y-0.5"
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.gold} ${className}`}
    >
      {children}
    </button>
  );
}
