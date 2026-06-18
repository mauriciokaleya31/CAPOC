import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, Globe, ChevronDown } from "lucide-react";
import { useLanguage, Language } from "../LanguageContext";

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("nav_about"), href: "#sobre" },
    { label: t("nav_project"), href: "#projeto" },
    { label: t("nav_products"), href: "#produtos" },
    { label: t("nav_impact"), href: "#sustentabilidade" },
    { label: t("nav_gallery"), href: "#galeria" },
    { label: t("nav_investors"), href: "#investidores" },
    { label: t("nav_contact"), href: "#contacto" },
  ];

  const languagesList: { code: Language; label: string; flag: string }[] = [
    { code: "pt", label: "Português", flag: "🇵🇹" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "zh", label: "中文", flag: "🇨🇳" },
    { code: "ar", label: "العربية", flag: "🇦🇪" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offsetTop = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const currentLangObj = languagesList.find((l) => l.code === language) || languagesList[0];

  const triggerPartnerModal = () => {
    window.dispatchEvent(new CustomEvent("open-partner-modal"));
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Address/Contact Bar for Corporate Prestige */}
      <div className="bg-[#002016] text-[#A89558]/90 hidden md:block border-b border-white/5 text-[11px] font-mono py-2.5 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 hover:text-white transition">
              <MapPin className="w-3.5 h-3.5 text-[#A89558]" />
              <span>Cabinda, Angola 🇦🇴</span>
            </span>
            <span className="flex items-center space-x-1.5 hover:text-white transition">
              <Mail className="w-3.5 h-3.5 text-[#A89558]" />
              <span>info@capoc-angola.com</span>
            </span>
            <span className="flex items-center space-x-1.5 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-[#A89558]" />
              <span>+244 931 228 102</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">100% SUSTENTÁVEL • ZERO WASTE</span>
          </div>
        </div>
      </div>

      {/* Main Floating Glassmorphic Header */}
      <div
        className={`w-full px-6 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-3 text-[#002016] border-b border-gray-150"
            : "bg-transparent py-5 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Brand Block */}
          <a
            href="#hero-section"
            onClick={(e) => handleScrollTo(e, "#hero-section")}
            className="flex items-center group focus:outline-none"
            id="brand-logo-link"
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
              <img
                src={
                  isScrolled
                    ? "https://visa.onlyvibes.online/wp-content/uploads/2026/06/logo-2.png"
                    : "https://visa.onlyvibes.online/wp-content/uploads/2026/06/logo-3.png"
                }
                alt="CAPOC Logo"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const cleanedID = item.href.slice(1);
              const isActive = activeSection === cleanedID;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? isScrolled
                        ? "bg-[#002016]/5 text-[#002016] border-b-2 border-[#A89558]"
                        : "bg-white/10 text-white shadow-xs"
                      : isScrolled
                      ? "text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                      : "text-gray-100 hover:bg-white/5 hover:text-white"
                  }`}
                  id={`nav-link-${cleanedID}`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Languages & CTA Column */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs font-bold border transition ${
                  isScrolled
                    ? "border-gray-200 hover:bg-slate-50 text-slate-700"
                    : "border-white/15 hover:bg-white/5 text-white"
                }`}
              >
                <span>{currentLangObj.flag}</span>
                <span className="uppercase">{currentLangObj.code}</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#A89558]" />
              </button>

              {isLangDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-10" onClick={() => setIsLangDropdownOpen(false)} />
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 z-20 animate-fadeIn">
                    {languagesList.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 hover:bg-slate-50 flex items-center space-x-2.5 text-xs font-semibold ${
                          language === lang.code ? "text-[#A89558] bg-[#002016]/5" : "text-[#002016]"
                        }`}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Custom CTA triggering Partner application modal */}
            <button
              onClick={triggerPartnerModal}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide shadow-xs transition-all duration-300 transform hover:-translate-y-0.5 ${
                isScrolled
                  ? "bg-[#002016] text-[#A89558] hover:bg-[#002016]/95 hover:shadow-md"
                  : "bg-white text-[#002016] hover:bg-gray-100"
              }`}
              id="header-cta"
            >
              {t("nav_btn_partner")}
            </button>
          </div>

          {/* Mobile Right Bar: language flag and menu toggler */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={() => {
                // cycle language on mobile for immediate simple satisfaction, or toggle language list
                const currentIndex = languagesList.findIndex((l) => l.code === language);
                const nextIndex = (currentIndex + 1) % languagesList.length;
                setLanguage(languagesList[nextIndex].code);
              }}
              className={`p-2 rounded-xl text-[14px] border ${
                isScrolled ? "border-gray-200 text-slate-700 bg-slate-50" : "border-white/10 text-white bg-white/5"
              }`}
              title="Mudar Língua / Change Language"
            >
              {currentLangObj.flag} <span className="text-[10px] uppercase font-mono font-bold">{currentLangObj.code}</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition ${
                isScrolled ? "hover:bg-slate-100 text-gray-950" : "hover:bg-white/10 text-white"
              }`}
              aria-label="Alternar Menu"
              id="mobile-menu-btn"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-lg shadow-2xl border-b border-gray-150 py-6 px-6 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleScrollTo(e, item.href)}
                className="px-4 py-3 rounded-xl text-sm font-bold text-slate-800 hover:bg-slate-50 hover:text-[#A89558] transition"
                id={`mobile-nav-${item.href.replace('#', '')}`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 flex flex-col space-y-3.5">
              <span className="text-[10px] font-mono font-bold text-[#A89558] tracking-widest uppercase">Mudar Idioma:</span>
              <div className="grid grid-cols-3 gap-2 pb-2">
                {languagesList.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`py-2 rounded-xl text-xs font-semibold border flex flex-col items-center justify-center space-y-1 ${
                      language === lang.code ? "border-[#A89558] bg-[#002016]/5 text-[#002016]" : "border-gray-150 text-slate-600"
                    }`}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span className="uppercase text-[9px]">{lang.code}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={triggerPartnerModal}
                className="w-full text-center bg-[#002016] text-[#A89558] py-3.5 rounded-xl font-bold shadow-md hover:bg-[#002016]/90 transition"
              >
                {t("nav_btn_partner")}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
