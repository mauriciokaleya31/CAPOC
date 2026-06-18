/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectDetails from "./components/ProjectDetails";
import Products from "./components/Products";
import Impact from "./components/Impact";
import Gallery from "./components/Gallery";
import InvestorOpportunities from "./components/InvestorOpportunities";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { LanguageProvider } from "./LanguageContext";
import PartnerModal from "./components/PartnerModal";
import FloatingAngolaFlag from "./components/FloatingAngolaFlag";

function AppContent() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: "-25% 0px -65% 0px", // triggers when section is in active focus window
    });

    const targetIds = [
      "sobre", 
      "projeto", 
      "produtos", 
      "sustentabilidade", 
      "impacto", 
      "galeria", 
      "investidores", 
      "contacto"
    ];
    targetIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      targetIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#f8fafc] selection:bg-[#002016] selection:text-[#A89558]" id="main-application-wrapper">
      {/* Floating navigation bar */}
      <Navbar activeSection={activeSection} />

      {/* Main sections layout assembly */}
      <main>
        {/* Banner with Majestic headlines */}
        <Hero />

        {/* Section 1: Institutional Core Info */}
        <About />

        {/* Section 2: Technical/Industrial Aspects */}
        <ProjectDetails />

        {/* Section 3: Products & derivatives list details */}
        <Products />

        {/* Section 4: Socio-economical Impact & Sustainability Details */}
        <Impact />

        {/* Section 5: Beautiful Interactive filterable Gallery */}
        <Gallery />

        {/* Section 6: Investor Strategic Advantages */}
        <InvestorOpportunities />

        {/* Section 8: Standardized Contact Interface */}
        <ContactForm />
      </main>

      {/* Floating Angola Pride widget brand */}
      <FloatingAngolaFlag />

      {/* Registration/Application Form Modal for Partners */}
      <PartnerModal />

      {/* Structured Legal and Presence Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
