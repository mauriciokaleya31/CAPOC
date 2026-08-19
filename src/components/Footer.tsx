import React from "react";
import { Mail, Phone, MapPin, ChevronRight, Facebook, Linkedin, Twitter, Globe } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface FooterProps {
  onNavigate?: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const { t, language } = useLanguage();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, pageKey: string) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(pageKey);
    }
  };

  const productList = [
    language === "pt" ? "Óleo de Palma Refinado" : "Refined Organic Palm Oil",
    language === "pt" ? "Óleo de Palmiste (PKO)" : "Palm Kernel Oil (PKO)",
    language === "pt" ? "Margarina Alimentar" : "Vitamins Fortified Margarine",
    language === "pt" ? "Óleo Vegetal de Mesa" : "Eco Cooking Table Oils",
    language === "pt" ? "Sabão Industrial Azul/Vermelho" : "Rough Sanitation Soap",
    language === "pt" ? "Sabonetes de Higiene Suave" : "Glycerin Bath Soaps",
  ];

  const quickLinks = [
    { key: "inicio", label: t("nav_home"), href: "#/" },
    { key: "sobre", label: t("nav_about"), href: "#/sobre" },
    { key: "projectos", label: t("nav_project"), href: "#/projectos" },
    { key: "produtos", label: t("nav_products"), href: "#/produtos" },
    { key: "galeria", label: t("nav_gallery"), href: "#/galeria" },
    { key: "contactos", label: t("nav_contact"), href: "#/contactos" },
  ];

  return (
    <footer className="bg-[#001710] text-slate-300 pt-20 pb-12 border-t border-[#A89558]/20 relative z-10" id="official-footer">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          
          {/* Col 4: Logo Brand pitch */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="flex items-center space-x-3">
              <a
                href="#/"
                onClick={(e) => handleNavClick(e, "inicio")}
                className="relative w-20 h-20 flex items-center justify-center shrink-0 cursor-pointer"
              >
                <img
                  src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/logo-3.png"
                  alt="CAPOC Logo"
                  className="w-full h-full object-contain shadow-md rounded-full bg-white/5 p-1 border border-white/10"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://visa.onlyvibes.online/wp-content/uploads/2026/06/logo-2.png";
                  }}
                />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-slate-300/90 font-light leading-relaxed">
              {language === "pt" 
                ? "Desenvolvemos produtos agro-industriais premium baseados no cultivo científico sustentável de palmito na Província de Cabinda, Angola."
                : "We engineer premium raw fats and refined vegetable compounds backed by sustainable high-yield outgrower networks in Cabinda Province, Angola."
              }
            </p>

            <div className="text-[11px] text-[#A89558] font-mono italic leading-relaxed pt-2">
              {language === "pt" 
                ? "Da terra nasce a produção. Da produção nasce a indústria. Da indústria nasce o desenvolvimento." 
                : "From earth comes harvest. From harvest comes manufacturing. From manufacturing comes lasting progress."
              }
            </div>

            {/* Social icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display mb-6">
              {language === "pt" ? "Páginas do Site" : "Site Pages"}
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-300 font-light">
              {quickLinks.map((ql) => (
                <li key={ql.key}>
                  <a
                    href={ql.href}
                    onClick={(e) => handleNavClick(e, ql.key)}
                    className="hover:text-[#A89558] transition flex items-center group cursor-pointer"
                  >
                    <ChevronRight className="w-3 h-3 text-[#A89558] mr-2 group-hover:translate-x-1 transition duration-150" />
                    <span>{ql.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Products lists */}
          <div className="lg:col-span-2 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display mb-6">
              {language === "pt" ? "Portefólio" : "Derivatives"}
            </h4>
            <ul className="space-y-3 text-xs text-slate-300 font-light">
              {productList.map((prod, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#A89558] rounded-full mr-2.5 shrink-0" />
                  <span className="truncate">{prod}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Contact / Complete Corporate Directory */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display mb-6">
              {language === "pt" ? "Contactos & Linhas Directas" : "Contacts & Direct Lines"}
            </h4>
            
            <ul className="space-y-3 text-xs text-slate-300 font-light">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#A89558] shrink-0 mt-0.5" />
                <span>
                  {language === "pt" 
                    ? "Cabinda, República de Angola" 
                    : "Cabinda Province, Republic of Angola"
                  }
                </span>
              </li>
              
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#A89558] shrink-0" />
                <a href="mailto:geral@capoc.ao" className="hover:underline hover:text-white transition font-medium text-[#FAF9F5]">
                  geral@capoc.ao
                </a>
              </li>

              <li className="flex items-center space-x-3 pt-1 border-t border-white/5">
                <Phone className="w-4 h-4 text-[#A89558] shrink-0" />
                <div className="flex items-center space-x-2">
                  <span className="text-[10px] uppercase font-mono font-bold text-[#A89558]/80">Geral:</span>
                  <a href="tel:+244931228102" className="hover:underline hover:text-white transition font-medium text-[#FAF9F5]">
                    +244 931 228 102
                  </a>
                </div>
              </li>
            </ul>

            {/* Department Direct Lines Micro-Directory */}
            <div className="mt-4 pt-3 border-t border-white/5 space-y-2">
              <span className="text-[9px] uppercase font-mono tracking-widest text-[#A89558] font-bold block">
                {language === "pt" ? "Linhas Operacionais:" : "Operational Lines:"}
              </span>
              
              <div className="grid grid-cols-1 gap-1.5">
                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs hover:border-[#A89558]/30 transition">
                  <span className="font-mono font-bold text-[#A89558] text-[11px]">CAPOC:</span>
                  <a href="tel:+244955919118" className="font-mono font-semibold text-[#FAF9F5] hover:text-[#A89558] transition">
                    955 91 91 18
                  </a>
                </div>

                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs hover:border-[#A89558]/30 transition">
                  <span className="font-mono font-bold text-[#A89558] text-[11px]">LIZANDO:</span>
                  <a href="tel:+244955916811" className="font-mono font-semibold text-[#FAF9F5] hover:text-[#A89558] transition">
                    955 91 68 11
                  </a>
                </div>

                <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-xs hover:border-[#A89558]/30 transition">
                  <span className="font-mono font-bold text-[#A89558] text-[11px]">TRANSLITA:</span>
                  <a href="tel:+244955914659" className="font-mono font-semibold text-[#FAF9F5] hover:text-[#A89558] transition">
                    955 91 46 59
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Brand Bottom Legal copyright and certification */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-slate-500 font-light">
          <div className="text-center sm:text-left space-y-1">
            <p>© 2026 CAPOC – Cabinda Palm Oil Corporation. Todos os direitos reservados.</p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-4 border-l border-white/10 pl-4">
            <span className="text-[#A89558]/80">CABINDA • ANGOLA</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
