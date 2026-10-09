import React, { useState, useRef } from "react";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ServicesPage } from "./pages/ServicesPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProcessPage, WhyUsPage } from "./pages/ProcessPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const pageKey = useRef(0);

  const handleNavigate = (page) => {
    pageKey.current += 1;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <HomePage key={pageKey.current} onNavigate={handleNavigate} />;
      case "About":
        return <AboutPage key={pageKey.current} />;
      case "Services":
        return <ServicesPage key={pageKey.current} onNavigate={handleNavigate} />;
      case "Products":
        return <ProductsPage key={pageKey.current} onNavigate={handleNavigate} />;
      case "Process":
        return <ProcessPage key={pageKey.current} />;
      case "Why Us":
        return <WhyUsPage key={pageKey.current} />;
      case "Contact":
        return <ContactPage key={pageKey.current} />;
      default:
        return <HomePage key={pageKey.current} onNavigate={handleNavigate} />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {renderPage()}
    </Layout>
  );
}
