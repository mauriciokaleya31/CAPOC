import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HomeView from "./components/HomeView";
import About from "./components/About";
import ProjectDetails from "./components/ProjectDetails";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import PageHeader from "./components/PageHeader";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import PartnerModal from "./components/PartnerModal";
import FloatingAngolaFlag from "./components/FloatingAngolaFlag";

type PageType = "inicio" | "sobre" | "projectos" | "produtos" | "galeria" | "contactos";

function AppContent() {
  const [currentPage, setCurrentPage] = useState<PageType>("inicio");
  const { t, language } = useLanguage();

  // Synchronize with URL hash on mount & on hashchange
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.toLowerCase().replace("#", "").replace("/", "");
      if (hash === "sobre") return "sobre";
      if (hash === "projectos" || hash === "projeto" || hash === "projetos") return "projectos";
      if (hash === "produtos" || hash === "produto") return "produtos";
      if (hash === "galeria") return "galeria";
      if (hash === "contactos" || hash === "contacto") return "contactos";
      return "inicio";
    };

    setCurrentPage(parseHash());

    const handleHashChange = () => {
      setCurrentPage(parseHash());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Block right-click context menu across the entire website as requested
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  const handleNavigate = (pageKey: string) => {
    let normalizedPage: PageType = "inicio";
    if (pageKey === "sobre") normalizedPage = "sobre";
    else if (pageKey === "projectos" || pageKey === "projeto") normalizedPage = "projectos";
    else if (pageKey === "produtos") normalizedPage = "produtos";
    else if (pageKey === "galeria") normalizedPage = "galeria";
    else if (pageKey === "contactos" || pageKey === "contacto") normalizedPage = "contactos";

    setCurrentPage(normalizedPage);
    window.location.hash = normalizedPage === "inicio" ? "/" : `/${normalizedPage}`;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative min-h-screen bg-[#f8fafc] selection:bg-[#002016] selection:text-[#A89558] flex flex-col justify-between" id="main-application-wrapper">
      {/* Top Main Navigation Bar present on all pages */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Content Router */}
      <main className="flex-grow">
        {currentPage === "inicio" && (
          <HomeView onNavigate={handleNavigate} />
        )}

        {currentPage === "sobre" && (
          <div>
            <PageHeader
              title={language === "pt" ? "Sobre a CAPOC & Sustentabilidade" : "About CAPOC & Sustainability"}
              subtitle={language === "pt" 
                ? "Conheça a história, os pilares fundamentais e o compromisso ecológico que guiam a Cabinda Palm Oil Corporation."
                : "Discover the history, core pillars, and ecological commitment driving Cabinda Palm Oil Corporation."
              }
              badge={language === "pt" ? "Institucional & Ecologia" : "Institutional & Ecology"}
              bgImage="https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.36.jpeg"
              currentPageKey="nav_about"
              onNavigateHome={() => handleNavigate("inicio")}
            />
            <About />
          </div>
        )}

        {currentPage === "projectos" && (
          <div>
            <PageHeader
              title={language === "pt" ? "Os Nossos Projectos" : "Our Projects"}
              subtitle={language === "pt"
                ? "Estruturação das componentes Agrícola e Industrial em Cabinda, integrando tecnologia de ponta e desenvolvimento comunitário."
                : "Development of Agricultural and Industrial pillars in Cabinda, combining modern engineering and local outgrower integration."
              }
              badge={language === "pt" ? "Engenharia & Campo" : "Engineering & Operations"}
              bgImage="https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.42.jpeg"
              currentPageKey="nav_project"
              onNavigateHome={() => handleNavigate("inicio")}
            />
            <ProjectDetails />
          </div>
        )}

        {currentPage === "produtos" && (
          <div>
            <PageHeader
              title={language === "pt" ? "Catálogo de Produtos e Derivados" : "Product Catalog & Derivatives"}
              subtitle={language === "pt"
                ? "Óleos alimentares de alta pureza, óleo de palmiste, sabões industriais, sabonetes de higiene e bagaço para nutrição animal."
                : "High purity edible cooking oils, palm kernel oil, industrial soaps, toilet soaps, and animal feed meal."
              }
              badge={language === "pt" ? "Portefólio 100% Angola" : "100% Angolan Portfolio"}
              bgImage="https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.33.jpeg"
              currentPageKey="nav_products"
              onNavigateHome={() => handleNavigate("inicio")}
            />
            <Products />
          </div>
        )}

        {currentPage === "galeria" && (
          <div>
            <PageHeader
              title={language === "pt" ? "Galeria Fotográfica" : "Photo Gallery"}
              subtitle={language === "pt"
                ? "Imagens reais das nossas plantações, viveiros de sementes Tenera, estufas e infraestruturas industriais em Cabinda."
                : "Real photos from our plantations, Tenera nurseries, greenhouses, and industrial facilities in Cabinda."
              }
              badge={language === "pt" ? "Registo Visual no Terreno" : "Field Visual Record"}
              bgImage="https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.39.jpeg"
              currentPageKey="nav_gallery"
              onNavigateHome={() => handleNavigate("inicio")}
            />
            <Gallery />
          </div>
        )}

        {currentPage === "contactos" && (
          <div>
            <PageHeader
              title={language === "pt" ? "Contactos e Localização" : "Contacts & Location"}
              subtitle={language === "pt"
                ? "Entre em contacto com a nossa equipa comercial e corporativa em Cabinda ou Luanda."
                : "Get in touch with our commercial and executive teams in Cabinda or Luanda."
              }
              badge={language === "pt" ? "Linhas Directas" : "Direct Lines"}
              bgImage="https://visa.onlyvibes.online/wp-content/uploads/2026/06/1.png"
              currentPageKey="nav_contact"
              onNavigateHome={() => handleNavigate("inicio")}
            />
            <ContactForm />
          </div>
        )}
      </main>

      {/* Floating Angola Pride widget */}
      <FloatingAngolaFlag />

      {/* Registration / Partnership Form Modal */}
      <PartnerModal />

      {/* Structured Legal and Navigation Footer */}
      <Footer onNavigate={handleNavigate} />
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
