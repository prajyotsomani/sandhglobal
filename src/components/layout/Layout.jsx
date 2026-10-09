import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "../common/WhatsAppFloat";

export function Layout({ children, currentPage, onNavigate }) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-off-white font-sans selection:bg-gold selection:text-black">
      <Navbar currentPage={currentPage} onNavigate={onNavigate} />
      <main className="flex-grow">{children}</main>
      <Footer onNavigate={onNavigate} />
      <WhatsAppFloat />
    </div>
  );
}
