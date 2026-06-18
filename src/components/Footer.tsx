import React from "react";
import { Mail, Phone, MapPin, ChevronRight, Facebook, Linkedin, Twitter, Globe } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
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
    { label: t("nav_about"), href: "#sobre" },
    { label: t("nav_project"), href: "#projeto" },
    { label: t("nav_products"), href: "#produtos" },
    { label: t("nav_impact"), href: "#sustentabilidade" },
    { label: t("nav_investors"), href: "#investidores" },
    { label: t("nav_contact"), href: "#contacto" },
  ];

  return (
    <footer className="bg-[#002016] text-slate-300 pt-24 pb-12 border-t border-white/5 relative z-10" id="official-footer">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 pb-20 border-b border-white/5">
          
          {/* Col 4: Logo Brand pitch */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="flex items-center space-x-3">
              <div className="relative w-20 h-20 flex items-center justify-center shrink-0">
                <img
                  src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/logo-3.png"
                  alt="CAPOC Logo"
                  className="w-full h-full object-contain shadow-md rounded-full bg-white/5 p-1 border border-white/10"
                  referrerPolicy="no-referrer"
                />
              </div>
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
            <div className="flex items-center space-x-3 pt-3">
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

          {/* Col 3: Navigation Links */}
          <div className="lg:col-span-3 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display mb-6">
              {language === "pt" ? "Ligações Rápidas" : "Quick Navigation"}
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-305 font-light">
              {quickLinks.map((ql, idx) => (
                <li key={idx}>
                  <a
                    href={ql.href}
                    onClick={(e) => handleScrollTo(e, ql.href)}
                    className="hover:text-[#A89558] transition flex items-center group"
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
                  <span className="w-1.5 h-1.5 bg-[#A89558] rounded-full mr-2.5" />
                  <span>{prod}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Contact / Presence */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display mb-6">
              {language === "pt" ? "Contacto Sede" : "Office Desk"}
            </h4>
            <ul className="space-y-4 text-xs text-slate-300 font-light">
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
                <a href="mailto:info@capoc-angola.com" className="hover:underline hover:text-white transition">
                  info@capoc-angola.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#A89558] shrink-0" />
                <a href="tel:+244931228102" className="hover:underline hover:text-white transition">
                  +244 931 228 102
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Brand Bottom Legal copyright and certification */}
        <div className="mt-10 flex flex-col sm:flex-row justify-between items-center text-[10px] font-mono text-slate-500 font-light">
          <div className="text-center sm:text-left space-y-1">
            <p>© 2026 CAPOC. All Rights Reserved.</p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-4 border-l border-white/5 pl-4">
            <span>REGISTO EM CERTIFICAÇÃO SU-2026/AO</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
