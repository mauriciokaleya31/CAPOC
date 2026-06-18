import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, Sprout, Building2, MapPin, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, language } = useLanguage();

  const slides = [
    {
      image: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/1.png",
      tag: language === "pt" ? "Projecto Estratégico de Angola" : "Strategic Project of Angola",
      title: language === "pt" ? "Cultivamos a Terra. Produzimos Excelência." : "We Cultivate Earth. We Produce Excellence.",
      highlightTitle: language === "pt" ? "Sustentamos o Futuro." : "Supporting the Future.",
      desc: t("hero_desc")
    },
    {
      image: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/2.png",
      tag: language === "pt" ? "Sustentabilidade Ecológica" : "Ecological Sustainability",
      title: language === "pt" ? "Harmonia Biológica e Recursos Protegidos." : "Biological Harmony & Protected Resources.",
      highlightTitle: language === "pt" ? "Proteção Ambiental Activa." : "Active Environmental Care.",
      desc: language === "pt" ? "Utilizamos práticas de desflorestação zero e preservação de corredores rurais." : "We utilize zero deforestation models and protect critical ecological reserves."
    },
    {
      image: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/3.png",
      tag: language === "pt" ? "Industrialização de Alto Teor" : "Industrialization Excellence",
      title: language === "pt" ? "Complexo de Extração e Refinação Integrado." : "Integrated Thermal Oil Extraction Plant.",
      highlightTitle: "Made in Angola.",
      desc: language === "pt" ? "Transformamos o fruto em óleos premium, margarinas puras e sabão ecológico azul e vermelho." : "We refine high-grade organic palm oils, margarines, and premium pure glycerin soaps."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const stats = [
    {
      icon: <Sprout className="w-5 h-5 text-brand-300" />,
      value: "5.000",
      label: "Hectares Planeados",
      desc: "Área total projetada de cultivo",
    },
    {
      icon: <Building2 className="w-5 h-5 text-brand-300" />,
      value: "35.000",
      label: "Toneladas/Ano",
      desc: "Capacidade de processamento industrial",
    },
    {
      icon: <MapPin className="w-5 h-5 text-brand-300" />,
      value: "Cabinda",
      label: "Angola",
      desc: "Localização estratégica tropical",
    },
    {
      icon: <Layers className="w-5 h-5 text-brand-300" />,
      value: "Integrada",
      label: "Produção Integrada",
      desc: "Do viveiro ao produto processado final",
    },
  ];

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-[92vh] lg:min-h-[100vh] flex flex-col justify-center bg-brand-950 text-white overflow-hidden pt-28 pb-12 lg:pb-0" id="hero-section">
      {/* Background Slideshow with Dark Vignette/Overlay for Premium contrast */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={slides[currentSlide].image}
            alt="Slide de Fundo CAPOC"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.45, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover select-none"
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/85 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950 via-transparent to-brand-950/60 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-between">
        
        {/* Navigation Arrow buttons overlay for high-end feel */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col space-y-3 z-30 hidden md:flex">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/5 hover:bg-white/11 text-white border border-white/10 hover:border-white/20 transition backdrop-blur-md cursor-pointer"
            aria-label="Slide anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-white/5 hover:bg-white/11 text-white border border-white/10 hover:border-white/20 transition backdrop-blur-md cursor-pointer"
            aria-label="Próximo slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Main Content Info block */}
        <div className="max-w-3xl mt-6 lg:mt-12">

          {/* Majestic Hero Headline */}
          <div className="min-h-[140px] sm:min-h-[160px] lg:min-h-[180px]">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45 }}
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
              >
                {slides[currentSlide].title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-emerald-400 to-amber-300 block sm:inline">
                  {slides[currentSlide].highlightTitle}
                </span>
              </motion.h1>
            </AnimatePresence>
          </div>

          <div className="min-h-[60px] sm:min-h-[80px] mt-4">
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${currentSlide}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.45, delay: 0.05 }}
                className="text-base sm:text-lg lg:text-xl text-brand-100/90 leading-relaxed font-light"
              >
                {slides[currentSlide].desc}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <a
              href="#projeto"
              onClick={(e) => handleScrollToSection(e, "#projeto")}
              className="px-8 py-4 bg-[#002016] text-[#A89558] border border-white/10 font-bold rounded-xl shadow-lg hover:bg-[#002016]/95 transition text-center"
              id="hero-cta-prime"
            >
              {language === "pt" ? "Conheça o Projecto" : "Explore the Project"}
            </a>
            <button
              onClick={() => window.dispatchEvent(new CustomEvent("open-partner-modal"))}
              className="px-8 py-4 bg-white/10 text-white border border-white/20 font-bold rounded-xl hover:bg-white/15 transition backdrop-blur-xs text-center"
              id="hero-cta-sec"
            >
              {t("nav_btn_partner")}
            </button>
          </motion.div>

          {/* Slider bottom dots */}
          <div className="flex items-center space-x-2 mt-8">
            {slides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setCurrentSlide(dotIdx)}
                className={`w-3 h-3 rounded-full transition-all duration-350 cursor-pointer ${
                  currentSlide === dotIdx 
                    ? "bg-brand-400 w-8" 
                    : "bg-white/25 hover:bg-white/40"
                }`}
                aria-label={`Ir para slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Floating Quick Stats Panel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl relative z-10"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col p-3 ${
                idx !== stats.length - 1 ? "sm:border-r border-white/10" : ""
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-1.5 rounded-lg bg-brand-500/25">
                  {stat.icon}
                </div>
                <span className="font-mono text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {stat.value}
                </span>
              </div>
              <span className="mt-2 text-xs sm:text-sm font-semibold text-brand-200">
                {stat.label}
              </span>
              <span className="mt-1 text-[11px] text-brand-300/80 font-light">
                {stat.desc}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Scroll down indicator absolute styling */}
        <div className="hidden lg:flex justify-center mt-6">
          <button
            onClick={(e) => handleScrollToSection(e, "#sobre")}
            className="flex flex-col items-center text-brand-300 hover:text-white transition focus:outline-none bg-transparent"
            aria-label="Rolar para baixo"
          >
            <span className="text-[10px] font-mono tracking-widest uppercase mb-1">
              Desvendar CAPOC
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
