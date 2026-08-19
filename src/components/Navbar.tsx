import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, Globe, ChevronDown } from "lucide-react";
import { useLanguage, Language } from "../LanguageContext";

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { key: "inicio", label: t("nav_home"), href: "#/" },
    { key: "sobre", label: t("nav_about"), href: "#/sobre" },
    { key: "projectos", label: t("nav_project"), href: "#/projectos" },
    { key: "produtos", label: t("nav_products"), href: "#/produtos" },
    { key: "galeria", label: t("nav_gallery"), href: "#/galeria" },
    { key: "contactos", label: t("nav_contact"), href: "#/contactos" },
  ];

  const languagesList: { code: Language; label: string; flag: string }[] = [
    { code: "pt", label: "Português", flag: "🇵🇹" },
    { code: "en", label: "English", flag: "🇬🇧" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "es", label: "Español", flag: "🇪🇸" },
    { code: "zh", label: "中文", flag: "🇨🇳" },
    { code: "ar", label: "العربية", flag: "🇦🇪" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, pageKey: string) => {
    e.preventDefault();
    onNavigate(pageKey);
    setIsMobileMenuOpen(false);
  };

  const currentLangObj = languagesList.find((l) => l.code === language) || languagesList[0];

  const triggerPartnerModal = () => {
    window.dispatchEvent(new CustomEvent("open-partner-modal"));
    setIsMobileMenuOpen(false);
  };

  // Check if we should use solid header (when scrolled or on subpages for top legibility)
  const isSolid = isScrolled || currentPage !== "inicio";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Corporate Info Bar */}
      <div className="bg-[#001710] text-[#A89558]/90 hidden md:block border-b border-white/5 text-[11px] font-mono py-2 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-1.5 hover:text-white transition">
              <MapPin className="w-3.5 h-3.5 text-[#A89558]" />
              <span>Cabinda, Angola 🇦🇴</span>
            </span>
            <a href="mailto:geral@capoc.ao" className="flex items-center space-x-1.5 hover:text-white transition">
              <Mail className="w-3.5 h-3.5 text-[#A89558]" />
              <span>geral@capoc.ao</span>
            </a>
            <span className="flex items-center space-x-1.5 hover:text-white transition">
              <Phone className="w-3.5 h-3.5 text-[#A89558]" />
              <span>+244 931 228 102</span>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">100% SUSTENTÁVEL • CABINDA PALM OIL CORPORATION</span>
          </div>
        </div>
      </div>

      {/* Main Floating Header */}
      <div
        className={`w-full px-6 transition-all duration-300 ${
          isSolid
            ? "bg-[#002016]/95 backdrop-blur-md shadow-xl py-3 text-white border-b border-[#A89558]/20"
            : "bg-transparent py-4 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a
            href="#/"
            onClick={(e) => handleNavClick(e, "inicio")}
            className="flex items-center group focus:outline-none cursor-pointer"
            id="brand-logo-link"
          >
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center shrink-0">
              <img
                src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/logo-3.png"
                alt="CAPOC Logo"
                className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://visa.onlyvibes.online/wp-content/uploads/2026/06/logo-2.png";
                }}
              />
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.key;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.key)}
                  className={`px-3.5 py-2 rounded-xl text-xs xl:text-sm font-semibold transition-all duration-200 cursor-pointer relative ${
                    isActive
                      ? "text-[#FAF9F5] bg-white/10 shadow-xs border-b-2 border-[#A89558]"
                      : "text-gray-200 hover:text-white hover:bg-white/5"
                  }`}
                  id={`nav-link-${item.key}`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#A89558] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Language Switcher Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition bg-white/10 hover:bg-white/20 text-white border border-white/15 cursor-pointer"
                id="language-selector-button"
              >
                <Globe className="w-3.5 h-3.5 text-[#A89558]" />
                <span>{currentLangObj.flag}</span>
                <span className="uppercase text-[11px] font-bold">{currentLangObj.code}</span>
                <ChevronDown className="w-3 h-3 ml-0.5 opacity-70" />
              </button>

              {/* Language Dropdown Menu */}
              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-[#002016] border border-[#A89558]/30 rounded-xl shadow-2xl py-1.5 z-50 backdrop-blur-xl">
                  {languagesList.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLanguage(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full px-3.5 py-2 text-left text-xs flex items-center space-x-2.5 hover:bg-white/10 transition cursor-pointer ${
                        language === lang.code
                          ? "text-[#A89558] font-bold bg-white/5"
                          : "text-gray-200"
                      }`}
                    >
                      <span className="text-sm">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* "Ser Parceiro" CTA Button */}
            <button
              onClick={triggerPartnerModal}
              className="px-5 py-2 rounded-xl text-xs font-bold font-mono tracking-wide uppercase transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 cursor-pointer bg-[#A89558] hover:bg-[#bfa966] text-[#002016] border border-[#A89558]"
              id="nav-partner-button"
            >
              {t("nav_btn_partner")}
            </button>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex items-center space-x-2 lg:hidden">
            {/* Quick Mobile Language button */}
            <button
              onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              className="p-2 rounded-lg bg-white/10 text-white text-xs flex items-center space-x-1"
            >
              <span>{currentLangObj.flag}</span>
              <span className="uppercase font-mono text-[10px]">{currentLangObj.code}</span>
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none transition cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Language Popover */}
      {isLangDropdownOpen && (
        <div className="lg:hidden bg-[#001710] border-b border-[#A89558]/30 px-6 py-3 flex flex-wrap gap-2 justify-center">
          {languagesList.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsLangDropdownOpen(false);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs flex items-center space-x-1.5 border ${
                language === lang.code
                  ? "bg-[#A89558] text-[#002016] font-bold border-[#A89558]"
                  : "bg-white/5 text-gray-200 border-white/10"
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#002016] text-white border-b border-[#A89558]/30 shadow-2xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-300">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.key;
              return (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.key)}
                  className={`block px-4 py-3 rounded-xl text-sm font-semibold transition cursor-pointer ${
                    isActive
                      ? "bg-white/10 text-[#A89558] border-l-4 border-[#A89558]"
                      : "text-gray-200 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-3">
            <button
              onClick={triggerPartnerModal}
              className="w-full py-3 bg-[#A89558] hover:bg-[#bfa966] text-[#002016] font-extrabold rounded-xl text-center text-xs tracking-wider uppercase shadow-md cursor-pointer"
            >
              {t("nav_btn_partner")}
            </button>

            <div className="pt-2 text-[11px] font-mono text-gray-400 space-y-1 text-center">
              <div>Cabinda, Angola 🇦🇴</div>
              <a href="mailto:geral@capoc.ao" className="text-[#A89558] hover:underline block">
                geral@capoc.ao
              </a>
              <div>+244 931 228 102</div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
