import React from "react";

export function SectionHeader({ label, title, goldTitle, desc, center = false }) {
  return (
    <div className={`mb-12 ${center ? "text-center" : ""}`}>
      {label && (
        <span className="text-gold text-xs font-semibold uppercase tracking-widest block mb-2">
          {label}
        </span>
      )}
      <h2 className="text-2xl md:text-4xl font-bold text-off-white tracking-tight">
        {title} {goldTitle && <span className="text-gold-gradient">{goldTitle}</span>}
      </h2>
      <div className={`h-0.5 w-16 bg-gradient-to-r from-gold to-transparent my-4 ${center ? "mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" : ""}`} />
      {desc && (
        <p className={`text-off-white/70 text-sm md:text-base leading-relaxed ${center ? "max-w-xl mx-auto" : "max-w-2xl"}`}>
          {desc}
        </p>
      )}
    </div>
  );
}
