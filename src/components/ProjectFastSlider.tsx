import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowRight, Sparkles, Sprout, Eye, Zap, 
  Play, Pause, FastForward, CheckCircle2, ChevronRight, X
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface ProjectFastSliderProps {
  onNavigate: (page: string) => void;
}

interface ProjectSlide {
  id: number;
  title: string;
  category: string;
  location: string;
  imgUrl: string;
  metric: string;
  desc: string;
}

export default function ProjectFastSlider({ onNavigate }: ProjectFastSliderProps) {
  const { language } = useLanguage();
  const [speed, setSpeed] = useState<"fast" | "normal" | "paused">("fast");
  const [activeModalSlide, setActiveModalSlide] = useState<ProjectSlide | null>(null);

  const slides: ProjectSlide[] = [
    {
      id: 1,
      title: language === "pt" ? "Arroteamento e Preparação de 5.000 ha" : "Land Clearing & 5,000 ha Preparation",
      category: language === "pt" ? "Fase Agrícola" : "Agricultural Phase",
      location: "Cabinda, Angola",
      imgUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.43.jpeg",
      metric: "5.000 ha",
      desc: language === "pt" 
        ? "Mapeamento topográfico e preparação mecânica do solo sem queimadas para plantio intensivo de palma de alto rendimento."
        : "Topographic mapping and clean mechanical soil preparation with zero burning for high-yield oil palm planting.",
    },
    {
      id: 2,
      title: language === "pt" ? "Colheita e Seleção de Cachos Dendém (FFB)" : "Harvest & Selection of Fresh Fruit Bunches",
      category: language === "pt" ? "Matéria-Prima" : "Raw Material",
      location: "Área de Recepção, Cabinda",
      imgUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.33.jpeg",
      metric: "100% Orgânico",
      desc: language === "pt"
        ? "Cachos de dendém selecionados no ponto ideal de maturação com alto teor de óleo vegetal alimentar puro."
        : "Selected fresh fruit bunches at peak ripeness ensuring top-grade virgin palm oil yield.",
    },
    {
      id: 3,
      title: language === "pt" ? "Construção de Estufas e Viveiros Climatizados" : "Construction of Climate-Controlled Greenhouses",
      category: language === "pt" ? "Biotecnologia" : "Biotechnology",
      location: "Centro de Germinação CAPOC",
      imgUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.42.jpeg",
      metric: "+150.000 Mudas",
      desc: language === "pt"
        ? "Estrutura moderna de micro-irrigação e climatização para multiplicação botânica de mudas de palma Tenera."
        : "Modern micro-irrigation and shade structure for rapid botanical propagation of certified Tenera seedlings.",
    },
    {
      id: 4,
      title: language === "pt" ? "Supervisão Técnica e Equipa de Campo" : "Field Agronomy & Engineering Operations",
      category: language === "pt" ? "Fomento Rural" : "Rural Empowerment",
      location: "Campos de Fomento, Cabinda",
      imgUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.39.jpeg",
      metric: "+450 Empregos",
      desc: language === "pt"
        ? "Agrónomos e técnicos residentes capacitando produtores locais com tecnologia de adubação e colheita mecanizada."
        : "Resident agronomists training local farmers in soil nourishment and efficient harvesting techniques.",
    },
    {
      id: 5,
      title: language === "pt" ? "Povoamento Vegetal e Viveiro em Expansão" : "Vegetation Stand & Expanding Nursery",
      category: language === "pt" ? "Cultivo Ativo" : "Active Cultivation",
      location: "Parque Agro-Industrial, Cabinda",
      imgUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.36.jpeg",
      metric: "1.000 ha Fase 1",
      desc: language === "pt"
        ? "Fileiras contínuas de palmeiras sob rigoroso controlo sanitário e hídrico com emissões zero de carbono."
        : "Continuous palm tree rows under strict sanitation and water monitoring with zero carbon footprint.",
    },
    {
      id: 6,
      title: language === "pt" ? "Acessos e Infraestrutura Industrial" : "Industrial Infrastructure & Roads",
      category: language === "pt" ? "Engenharia Civil" : "Civil Engineering",
      location: "Eixo Logístico Cabinda",
      imgUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.37.jpeg",
      metric: "Estruturado",
      desc: language === "pt"
        ? "Criação de vias de escoamento e acessos rápidos aos silos de refinação e armazenamento de óleo bruto."
        : "Development of dedicated transport corridors for seamless delivery to refinery silos and extraction plants.",
    },
  ];

  // Duplicate list to achieve continuous endless marquee ticker
  const duplicatedSlides = [...slides, ...slides, ...slides];

  return (
    <section className="py-20 bg-[#001810] text-white relative overflow-hidden border-t border-[#A89558]/20" id="projectos-slide-rapido">
      
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[#A89558]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-950/40 rounded-full blur-2xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#A89558_1px,transparent_1px)] [background-size:28px_28px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center space-x-2">
              <span className="p-1.5 bg-[#A89558]/20 border border-[#A89558]/40 rounded-lg text-[#A89558]">
                <Zap className="w-4 h-4" />
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#A89558]">
                {language === "pt" ? "Galeria Dinâmica dos Projectos em Campo" : "Dynamic Field Projects Showcase"}
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {language === "pt" ? "Operações & Infraestrutura em Movimento" : "Operations & Field Execution in Motion"}
            </h2>
            <p className="text-emerald-100/70 text-sm sm:text-base font-light">
              {language === "pt"
                ? "Acompanhe a evolução do projeto agro-industrial da CAPOC na Província de Cabinda: abertura de terras, viveiros climatizados e colheita intensiva de dendém."
                : "Follow the active execution of CAPOC agro-industrial hub in Cabinda Province: land preparation, climate-controlled nurseries, and mechanical palm processing."}
            </p>
          </div>

          {/* Controls: Speed selector & direct action */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center p-1 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md">
              <button
                type="button"
                id="btn-slide-rapido"
                onClick={() => setSpeed("fast")}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  speed === "fast"
                    ? "bg-[#A89558] text-[#002016] shadow-md"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <FastForward className="w-3.5 h-3.5" />
                <span>{language === "pt" ? "Rápido" : "Fast"}</span>
              </button>
              
              <button
                type="button"
                id="btn-slide-normal"
                onClick={() => setSpeed("normal")}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  speed === "normal"
                    ? "bg-[#A89558] text-[#002016] shadow-md"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <Play className="w-3.5 h-3.5" />
                <span>{language === "pt" ? "Normal" : "Normal"}</span>
              </button>

              <button
                type="button"
                id="btn-slide-pause"
                onClick={() => setSpeed("paused")}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                  speed === "paused"
                    ? "bg-rose-500 text-white shadow-md"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <Pause className="w-3.5 h-3.5" />
                <span>{language === "pt" ? "Pausar" : "Pause"}</span>
              </button>
            </div>

            <button
              type="button"
              id="btn-ver-todos-projectos"
              onClick={() => onNavigate("projeto")}
              className="px-4 py-2 bg-white/10 hover:bg-[#A89558] hover:text-[#002016] border border-white/20 hover:border-[#A89558] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl transition-all flex items-center space-x-2"
            >
              <span>{language === "pt" ? "Ver Projecto" : "Explore Project"}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* ================= FAST SLIDE TAPE / MARQUEE CAROUSEL ================= */}
      <div className="relative w-full overflow-hidden py-4 group">
        
        {/* Left & Right gradient fade masks */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#001810] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#001810] to-transparent z-20 pointer-events-none" />

        <div
          className={`flex gap-6 w-max animate-marquee ${
            speed === "fast" ? "duration-20s" : speed === "normal" ? "duration-45s" : "animation-paused"
          }`}
          style={{
            animationDuration: speed === "fast" ? "22s" : speed === "normal" ? "48s" : "0s",
            animationPlayState: speed === "paused" ? "paused" : "running",
          }}
        >
          {duplicatedSlides.map((slide, idx) => (
            <div
              key={`${slide.id}-${idx}`}
              onClick={() => setActiveModalSlide(slide)}
              className="w-72 sm:w-84 md:w-96 shrink-0 bg-white/5 border border-white/10 hover:border-[#A89558] rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-white/10 cursor-pointer group/card flex flex-col justify-between"
            >
              {/* Photo */}
              <div className="relative aspect-[16/10] overflow-hidden bg-emerald-950">
                <img
                  src={slide.imgUrl}
                  alt={slide.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.36.jpeg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001810] via-[#001810]/30 to-transparent" />
                
                {/* Metric pill */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-[#A89558] text-[#002016] font-mono font-black text-xs uppercase tracking-wider rounded-full shadow-lg">
                  {slide.metric}
                </div>

                {/* Category badge */}
                <div className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] uppercase font-bold rounded-lg">
                  {slide.category}
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-[#002016]/80 backdrop-blur-xs opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="px-4 py-2 bg-[#A89558] text-[#002016] rounded-xl font-bold text-xs flex items-center space-x-2 transform translate-y-2 group-hover/card:translate-y-0 transition-transform">
                    <Eye className="w-4 h-4" />
                    <span>{language === "pt" ? "Ver Detalhe" : "Quick View"}</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-[#A89558] font-bold">
                    {slide.location}
                  </span>
                  <h4 className="font-display text-base sm:text-lg font-bold text-white mt-1 group-hover/card:text-[#A89558] transition-colors leading-snug">
                    {slide.title}
                  </h4>
                  <p className="text-gray-300 text-xs font-light line-clamp-2 mt-2 leading-relaxed">
                    {slide.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-emerald-200/80">
                  <span className="font-mono text-[10px] text-gray-400">CAPOC Cabinda Hub</span>
                  <span className="flex items-center text-[#A89558] font-bold text-xs group-hover/card:translate-x-1 transition-transform">
                    {language === "pt" ? "Detalhes" : "Details"} →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer Callout */}
      <div className="max-w-7xl mx-auto px-6 mt-12">
        <div className="p-6 sm:p-8 bg-gradient-to-r from-emerald-950/80 via-[#002016] to-[#01281c] border border-[#A89558]/30 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-[#A89558]/20 border border-[#A89558]/40 flex items-center justify-center text-[#A89558] shrink-0">
              <Sprout className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                {language === "pt" ? "Deseja consultar o plano técnico completo?" : "Looking for the comprehensive master plan?"}
              </h4>
              <p className="text-gray-300 text-xs sm:text-sm font-light">
                {language === "pt"
                  ? "Explore os cronogramas de plantio, a refinaria de extração e o impacto socioeconómico em Cabinda."
                  : "Explore planting phases, extraction plants, and regional socio-economic development."}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
            <button
              type="button"
              id="cta-ir-projecto-master"
              onClick={() => onNavigate("projeto")}
              className="w-full sm:w-auto px-6 py-3 bg-[#A89558] hover:bg-[#b8a669] text-[#002016] font-bold text-xs sm:text-sm uppercase tracking-wider font-mono rounded-xl transition-all flex items-center justify-center space-x-2 shadow-lg shadow-[#A89558]/20"
            >
              <span>{language === "pt" ? "Explorar Projecto Completo" : "Explore Full Project"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ================= LIGHTBOX MODAL FOR SLIDE DETAILS ================= */}
      <AnimatePresence>
        {activeModalSlide && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActiveModalSlide(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#002016] border border-[#A89558]/40 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl relative text-white"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalSlide(null)}
                className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 hover:bg-[#A89558] hover:text-[#002016] text-white rounded-full transition-colors backdrop-blur-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video bg-emerald-950">
                <img
                  src={activeModalSlide.imgUrl}
                  alt={activeModalSlide.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.36.jpeg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002016] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="px-3 py-1 bg-[#A89558] text-[#002016] font-mono text-xs font-black uppercase rounded-full">
                    {activeModalSlide.metric}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#A89558] uppercase">
                  <span>{activeModalSlide.category}</span>
                  <span>•</span>
                  <span>{activeModalSlide.location}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                  {activeModalSlide.title}
                </h3>

                <p className="text-gray-300 text-sm font-light leading-relaxed">
                  {activeModalSlide.desc}
                </p>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center space-x-2 text-xs text-emerald-200">
                    <CheckCircle2 className="w-4 h-4 text-[#A89558]" />
                    <span>{language === "pt" ? "Operação em execução em Cabinda" : "Active execution in Cabinda"}</span>
                  </div>
                  
                  <button
                    type="button"
                    onClick={() => {
                      setActiveModalSlide(null);
                      onNavigate("projeto");
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 bg-[#A89558] text-[#002016] font-bold text-xs uppercase tracking-wider font-mono rounded-xl hover:bg-[#b8a669] transition-all flex items-center justify-center space-x-2"
                  >
                    <span>{language === "pt" ? "Ver Página de Projectos" : "Go to Projects Page"}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
