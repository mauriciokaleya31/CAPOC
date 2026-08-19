import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Sprout, Building2, MapPin, Layers, ChevronLeft, ChevronRight, Handshake } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, language } = useLanguage();

  const slides = [
    {
      image: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/1.png",
      tag: language === "pt" ? "Projecto Agro-Industrial Estratégico de Angola" : "Angola's Strategic Agro-Industrial Project",
      title: language === "pt" ? "Cultivamos a Terra. Produzimos Excelência." : "We Cultivate the Earth. We Produce Excellence.",
      highlightTitle: language === "pt" ? "Sustentamos o Futuro." : "Sustaining the Future.",
      desc: language === "pt" 
        ? "A Cabinda Palm Oil Corporation (CAPOC) lidera a agro-indústria moderna angolana, gerando óleos orgânicos, sabões glicerinados e bioenergia sustentável de padrão mundial."
        : "Cabinda Palm Oil Corporation (CAPOC) leads standard modern Angolan agro-industry, producing world-class organic oils, glycerin soaps, and sustainable bioenergy."
    },
    {
      image: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/2.png",
      tag: language === "pt" ? "Sustentabilidade & Desflorestação Zero" : "Sustainability & Zero Deforestation",
      title: language === "pt" ? "Harmonia Biológica e Recursos Protegidos." : "Biological Harmony & Protected Resources.",
      highlightTitle: language === "pt" ? "Desenvolvimento Verde em Cabinda." : "Green Growth in Cabinda.",
      desc: language === "pt" 
        ? "Implementamos agricultura regenerativa, estufas científicas climatizadas e programas de fomento com produtores locais associados."
        : "We implement regenerative agriculture, scientific climate-controlled greenhouses, and inclusive outgrower support schemes."
    },
    {
      image: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/3.png",
      tag: language === "pt" ? "Industrialização e Substituição de Importações" : "Industrialization & Import Substitution",
      title: language === "pt" ? "Complexo de Extração e Refinação Integrado." : "Integrated Thermal Extraction & Refining Complex.",
      highlightTitle: language === "pt" ? "100% Produzido em Angola." : "100% Produced in Angola.",
      desc: language === "pt" 
        ? "Transformamos o fruto em óleos refinados de mesa, gorduras vegetais para a indústria alimentar e sabões de higiene de alto rendimento."
        : "Transforming raw harvest into refined table cooking oils, food-grade vegetable fats, and industrial high-performance sanitation soaps."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const triggerPartnerModal = () => {
    window.dispatchEvent(new CustomEvent("open-partner-modal"));
  };

  const stats = [
    {
      icon: <Sprout className="w-5 h-5 text-[#A89558]" />,
      value: "5.000 ha",
      label: language === "pt" ? "Hectares de Cultivo" : "Cultivation Hectares",
      desc: language === "pt" ? "Plantações em Cabinda" : "Plantations in Cabinda",
    },
    {
      icon: <Building2 className="w-5 h-5 text-[#A89558]" />,
      value: "35.000 ton/ano",
      label: language === "pt" ? "Capacidade Industrial" : "Industrial Capacity",
      desc: language === "pt" ? "Processamento e refinação" : "Processing and refining",
    },
    {
      icon: <MapPin className="w-5 h-5 text-[#A89558]" />,
      value: "Cabinda, Angola",
      label: language === "pt" ? "Localização Estratégica" : "Strategic Location",
      desc: language === "pt" ? "Polo agro-industrial integrado" : "Integrated agro-industrial hub",
    },
    {
      icon: <Layers className="w-5 h-5 text-[#A89558]" />,
      value: "100% Integrado",
      label: language === "pt" ? "Ciclo Fechado & Sustentável" : "Closed & Sustainable Cycle",
      desc: language === "pt" ? "Do viveiro à distribuição" : "From seedling to distribution",
    },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-[#001710] text-white overflow-hidden pt-28 pb-10" id="hero-section">
      
      {/* Background Images Slideshow (Full Bleed Background) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                const fallbackImgs = [
                  "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.36.jpeg",
                  "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.33.jpeg",
                  "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.32.jpeg",
                ];
                e.currentTarget.src = fallbackImgs[currentSlide % fallbackImgs.length];
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Sophisticated Multi-layer Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#001710]/95 via-[#002016]/85 to-[#001710]/40 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001710]/80 via-transparent to-[#001710]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#A89558]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white border border-white/10 hover:border-white/30 backdrop-blur-md transition-all duration-300 z-30 focus:outline-none cursor-pointer hidden md:flex items-center justify-center shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3.5 rounded-full bg-black/30 hover:bg-black/60 text-white/80 hover:text-white border border-white/10 hover:border-white/30 backdrop-blur-md transition-all duration-300 z-30 focus:outline-none cursor-pointer hidden md:flex items-center justify-center shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 w-full my-auto py-12">
        <div className="max-w-3xl text-left">
          
          {/* Animated Main Title */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`title-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]">
                {slides[currentSlide].title} <br className="hidden sm:block" />
                <span className="text-[#A89558] drop-shadow-md">
                  {slides[currentSlide].highlightTitle}
                </span>
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Animated Description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`desc-${currentSlide}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-sm sm:text-base md:text-lg text-slate-200 font-light leading-relaxed max-w-2xl drop-shadow"
            >
              {slides[currentSlide].desc}
            </motion.p>
          </AnimatePresence>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={triggerPartnerModal}
              className="px-7 py-3.5 bg-[#A89558] hover:bg-[#bfa966] text-[#002016] font-extrabold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 text-xs sm:text-sm tracking-wide uppercase flex items-center space-x-2 border border-[#A89558]/50 cursor-pointer"
              id="hero-btn-partner"
            >
              <Handshake className="w-4 h-4" />
              <span>{t("hero_cta_partner")}</span>
            </button>

            <button
              onClick={() => onNavigate ? onNavigate("projectos") : null}
              className="px-7 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md border border-white/20 hover:border-white/40 transition-all duration-300 text-xs sm:text-sm tracking-wide flex items-center space-x-2 cursor-pointer shadow-lg"
              id="hero-btn-project"
            >
              <span>{language === "pt" ? "Conhecer o Projecto" : "Explore The Project"}</span>
              <ArrowRight className="w-4 h-4 text-[#A89558]" />
            </button>

            <button
              onClick={() => onNavigate ? onNavigate("produtos") : null}
              className="px-6 py-3.5 text-slate-300 hover:text-white font-medium text-xs sm:text-sm transition flex items-center space-x-1.5 underline decoration-[#A89558]/50 underline-offset-4 cursor-pointer"
            >
              <span>{language === "pt" ? "Ver Produtos" : "View Derivatives"}</span>
            </button>
          </motion.div>

          {/* Slide Indicator Bar / Dots */}
          <div className="mt-10 flex items-center space-x-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-500 cursor-pointer ${
                  currentSlide === idx
                    ? "w-10 bg-[#A89558]"
                    : "w-2.5 bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Ir para slide ${idx + 1}`}
              />
            ))}
            <span className="text-[11px] font-mono text-slate-400 ml-2">
              0{currentSlide + 1} / 0{slides.length}
            </span>
          </div>

        </div>
      </div>

      {/* Embedded Dynamic Quick Statistics Band at the Bottom */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 sm:px-12 w-full mt-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-[#001710]/85 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-white/10 shadow-2xl"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col p-2.5 ${
                idx !== stats.length - 1 ? "lg:border-r border-white/10" : ""
              }`}
            >
              <div className="flex items-center space-x-2.5">
                <div className="p-2 rounded-xl bg-white/5 text-[#A89558] border border-white/10 flex items-center justify-center">
                  {stat.icon}
                </div>
                <span className="font-mono text-lg sm:text-xl font-extrabold text-white">
                  {stat.value}
                </span>
              </div>
              <span className="mt-2 text-xs font-semibold text-slate-200">
                {stat.label}
              </span>
              <span className="mt-0.5 text-[11px] text-slate-400 font-light leading-snug">
                {stat.desc}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
