import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sprout, Factory, CheckCircle2, TrendingUp, HelpCircle, 
  BarChart3, Layers, Calendar, ChevronRight, Play, Info,
  Cpu, Droplets, Leaf, Award
} from "lucide-react";
import { useLanguage } from "../LanguageContext";
// Import our physical existing images
// @ts-ignore
import facilityImg from "../assets/images/palm_oil_facility_1781810440230.jpg";
// @ts-ignore
import plantationImg from "../assets/images/cabinda_palm_plantation_1781810423032.jpg";

export default function ProjectDetails() {
  const { t, language } = useLanguage();
  const [activeSegment, setActiveSegment] = useState<"agricola" | "industrial">("agricola");
  const [selectedChartPhase, setSelectedChartPhase] = useState<number>(3); // Year index: 1-2, 3, 5, 8
  const [activeHotspot, setActiveHotspot] = useState<number>(0);

  // Reset active hotspot when swapping segments to prevent out of bounds
  const handleSegmentChange = (segment: "agricola" | "industrial") => {
    setActiveSegment(segment);
    setActiveHotspot(0);
  };

  const agricolaData = {
    title: "Componente Agrícola",
    subtitle: "Cultivo em Larga Escala & Gestão de Recursos",
    stats: [
      { label: "Área Total Planeada", val: "5.000 ha" },
      { label: "Fase Operacional Inicial", val: "1.000 ha" },
      { label: "Viveiros Especializados", val: "Instalados" },
      { label: "Boas Práticas Agrícolas", val: "Certificadas" },
    ],
    bullets: [
      "Área total proyectada de 5.000 hectares localizados na Província de Cabinda, ideal em termos de microclima tropical.",
      "Fase piloto inicial ativa de 1.000 hectares com acompanhamento agro-botânico de ponta.",
      "Viveiros especializados climatizados com sementes pré-germinadas selecionadas de alta pureza genética.",
      "Expansão estruturada e progressiva respeitando bacias hídricas e proteção de florestas intactas.",
      "Boas práticas agrícolas rigorosas de manejo de solos livres de queimadas químicas artificiais.",
    ],
    highlights: ["Sementes Clonadas", "Sem Queimadas", "Manejo Hídrico", "Colheita Manual"],
  };

  const industrialData = {
    title: "Componente Industrial",
    subtitle: "Complexo de Refinação & Processamento Térmico",
    stats: [
      { label: "Derivados Principais", val: "6 Subprodutos" },
      { label: "Extração Secundária", val: "Óleo de Palmiste" },
      { label: "Saneamento e Sabões", val: "Integrados" },
      { label: "Qualidade Padrão", val: "ISO 22000" },
    ],
    bullets: [
      "Processamento integrado multi-etapas de prensagem térmica imediata após a colheita do campo de palma.",
      "Ativação de linha secundária para Óleo de Palmiste a partir da moagem protegida do caroço interno.",
      "Instalação moderna para extração de margarinas ricas em minerais e óleos de cozinha purificados.",
      "Fábrica química de sabão industrial tradicional azul/vermelho altamente durável e sabonetes finos dermatológicos.",
      "Sustentabilidade térmica reaproveitando biomassa das amêndoas secas prensadas como combustível da caldeira.",
    ],
    highlights: ["Margarinas Alimentares", "Óleo Desodorizado", "Sabão Glicerinado", "Biocombustível Fabril"],
  };

  const currentData = activeSegment === "agricola" ? agricolaData : industrialData;

  // Projection Chart Data representing growth from 7,000 Ton/Year to 35,000 Ton/Year
  const phases = [
    { 
      year: language === "pt" ? "Anos 1-2" : "Years 1-2", 
      hectares: "1.000 ha", 
      production: 0, 
      label: language === "pt" ? "Implantação e Viveiros" : "Deployment & Nurseries", 
      desc: language === "pt" ? "Desenvolvimento botânico dos viveiros científicos e germinação preliminar ativa das mudas." : "Botanical development of physical nurseries and high-yield seed germination." 
    },
    { 
      year: language === "pt" ? "Ano 3" : "Year 3", 
      hectares: "1.500 ha", 
      production: 7000, 
      label: language === "pt" ? "Fase de Arranque (Produção Inicial)" : "Startup Phase (Initial Output)", 
      desc: language === "pt" ? "Início da colheita dos primeiros frutos e arranque da prensa industrial: 7.000 Ton/Ano." : "First physical harvests start and modern extraction machinery kicks off at 7,000 Tons/Yr." 
    },
    { 
      year: language === "pt" ? "Anos 4-5" : "Years 4-5", 
      hectares: "3.500 ha", 
      production: 18000, 
      label: language === "pt" ? "Expansão Operacional" : "Operational Scaling", 
      desc: language === "pt" ? "Aumento de área mecanizada ativa de plantio e aceleração da planta de refinação física integrada." : "Extension of active plantations and commissioning of multi-stage refining pipelines." 
    },
    { 
      year: language === "pt" ? "Ano 6+" : "Year 6+", 
      hectares: "5.000 ha", 
      production: 35000, 
      label: language === "pt" ? "Plano Diretor (Produção Alvo Completa)" : "Master Plan (Full Production Capacity)", 
      desc: language === "pt" ? "Amadurecimento total das palmeiras e alcance de 35.000 Ton/Ano de óleo e derivados refinados." : "Total mature harvest yield reaching stable 35,000 Tons/Yr of certified sustainable oils." 
    },
  ];

  return (
    <section className="py-24 bg-slate-50 scroll-mt-20" id="projeto">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= SECTION 6: O PROJETO CAPOC ================= */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold text-brand-700 uppercase tracking-widest bg-brand-100 px-3 py-1 rounded-full">
            Modelo de Negócio
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
            {t("proj_title")}
          </h2>
          <p className="mt-4 text-base text-slate-600 font-light leading-relaxed">
            {t("proj_desc")}
          </p>
        </div>

        {/* Component Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white p-1 rounded-xl border border-slate-200 flex shadow-xs">
            <button
              onClick={() => handleSegmentChange("agricola")}
              className={`flex items-center space-x-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeSegment === "agricola"
                  ? "bg-brand-750 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Sprout className="w-4 h-4" />
              <span>Componente Agrícola</span>
            </button>
            <button
              onClick={() => handleSegmentChange("industrial")}
              className={`flex items-center space-x-2 px-5 py-3 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeSegment === "industrial"
                  ? "bg-brand-750 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Factory className="w-4 h-4" />
              <span>Componente Industrial</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSegment}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 bg-white rounded-[32px] border border-[#EBE6DD] p-6 sm:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.015)]"
          >
            {/* Left: Dynamic Visual Showcase Container with Hotspots */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="relative w-full aspect-video sm:aspect-[4/3] rounded-[24px] overflow-hidden group shadow-md border border-slate-200 bg-slate-900">
                <img
                  src={activeSegment === "agricola" ? plantationImg : facilityImg}
                  alt={currentData.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none select-none"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.36.jpeg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                {/* Hotspots Mapping */}
                {(() => {
                  const hotspots = activeSegment === "agricola" ? [
                    {
                      id: 0,
                      top: "28%",
                      left: "32%",
                      title: language === "pt" ? "Estufas Científicas" : "Scientific Greenhouses",
                      desc: language === "pt"
                        ? "Viveiros climatizados com controlo térmico de humidade e sementes de alta genética."
                        : "Climate-controlled greenhouses with advanced botanical humidity models."
                    },
                    {
                      id: 1,
                      top: "54%",
                      left: "72%",
                      title: language === "pt" ? "Reflorestamento Zero" : "Zero Deforestation",
                      desc: language === "pt"
                        ? "Afastamento estrito de bacias hídricas e conservação de florestas virgens intactas."
                        : "Strict setbacks protecting river basins and conserving unique primary forests."
                    },
                    {
                      id: 2,
                      top: "75%",
                      left: "45%",
                      title: language === "pt" ? "Solos de Cabinda" : "Cabinda Organic Soils",
                      desc: language === "pt"
                        ? "Manejo responsável sem aditivos químicos para assegurar a pureza biológica original."
                        : "Responsible ground management free of chemical fire clears."
                    }
                  ] : [
                    {
                      id: 0,
                      top: "35%",
                      left: "30%",
                      title: language === "pt" ? "Prensagem Física" : "Physical Refinement",
                      desc: language === "pt"
                        ? "Extração mecânica limpa imediata por vapor e vácuo, sem solventes químicos."
                        : "Immediate mechanical extraction under vacuum steam, 100% free of solvent residues."
                    },
                    {
                      id: 1,
                      top: "50%",
                      left: "68%",
                      title: language === "pt" ? "Turbinas de Biomassa" : "Biomass Generators",
                      desc: language === "pt"
                        ? "Eletricidade e vapor gerados 100% de carapaças secas, assegurando desperdício zero."
                        : "Integrated thermal generators running fully on dry byproduct kernels."
                    },
                    {
                      id: 2,
                      top: "72%",
                      left: "52%",
                      title: language === "pt" ? "Sabão e Manteigas" : "Soap & Solid Butters",
                      desc: language === "pt"
                        ? "Saponificação de alta pureza e extração automatizada de margarinas minerais."
                        : "Automated physical separation streams creating highly durable traditional blue soap."
                    }
                  ];

                  return hotspots.map((spot) => {
                    const isSelected = activeHotspot === spot.id;
                    return (
                      <button
                        key={spot.id}
                        onClick={() => setActiveHotspot(spot.id)}
                        className="absolute w-8 h-8 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer focus:outline-none transition-transform active:scale-95"
                        style={{ top: spot.top, left: spot.left }}
                        id={`hotspot-${activeSegment}-${spot.id}`}
                      >
                        {/* Glow animation */}
                        <span className={`absolute inline-flex h-full w-full rounded-full transition-all duration-300 ${
                          isSelected ? "bg-amber-400 opacity-60 animate-ping" : "bg-[#A89558] opacity-40 hover:bg-amber-400"
                        }`} />
                        {/* Solid center dot */}
                        <span className={`relative rounded-full transition-all duration-300 shadow-md ${
                          isSelected ? "h-4.5 w-4.5 bg-amber-400 border border-white" : "h-3.5 w-3.5 bg-[#A89558] hover:bg-amber-400 border border-white"
                        }`} />
                      </button>
                    );
                  });
                })()}

                {/* Floating Glass Highlight Banner */}
                <div className="absolute top-4 left-4 bg-emerald-950/90 text-[#A89558] text-[9px] font-mono tracking-wider font-bold py-1.5 px-3.5 rounded-full border border-emerald-500/20 backdrop-blur-md shadow-sm z-20">
                  {activeSegment === "agricola" ? "5.000 HECTARES PLANEADOS" : "PADRÃO ISO 22000 INTEGRADO"}
                </div>
              </div>

              {/* Dynamic Information Display Box */}
              {(() => {
                const hotspots = activeSegment === "agricola" ? [
                  {
                    id: 0,
                    title: language === "pt" ? "Estufas Científicas" : "Scientific Greenhouses",
                    desc: language === "pt"
                      ? "Viveiros climatizados com controlo térmico de humidade e sementes de alta genética."
                      : "Climate-controlled greenhouses with advanced botanical humidity models."
                  },
                  {
                    id: 1,
                    title: language === "pt" ? "Reflorestamento Zero" : "Zero Deforestation",
                    desc: language === "pt"
                      ? "Afastamento estrito de bacias hídricas e conservação de florestas virgens intactas."
                      : "Strict setbacks protecting river basins and conserving unique primary forests."
                  },
                  {
                    id: 2,
                    title: language === "pt" ? "Solos de Cabinda" : "Cabinda Organic Soils",
                    desc: language === "pt"
                      ? "Manejo responsável sem aditivos químicos para assegurar a pureza biológica original."
                      : "Responsible ground management free of chemical fire clears."
                  }
                ] : [
                  {
                    id: 0,
                    title: language === "pt" ? "Prensagem Física" : "Physical Refinement",
                    desc: language === "pt"
                      ? "Extração mecânica limpa imediata por vapor e vácuo, sem solventes químicos."
                      : "Immediate mechanical extraction under vacuum steam, 100% free of solvent residues."
                  },
                  {
                    id: 1,
                    title: language === "pt" ? "Turbinas de Biomassa" : "Biomass Generators",
                    desc: language === "pt"
                      ? "Eletricidade e vapor gerados 100% de carapaças secas, assegurando desperdício zero."
                      : "Integrated thermal generators running fully on dry byproduct kernels."
                  },
                  {
                    id: 2,
                    title: language === "pt" ? "Sabão e Manteigas" : "Soap & Solid Butters",
                    desc: language === "pt"
                      ? "Saponificação de alta pureza e extração automatizada de margarinas minerais."
                      : "Automated physical separation streams creating highly durable traditional blue soap."
                  }
                ];

                const currentSpot = hotspots[activeHotspot] || hotspots[0];

                return (
                  <div className="mt-4 p-5 bg-[#FAF9F5] border border-[#D4C3A3]/30 rounded-[20px] transition-all duration-300 shadow-2xs">
                    <div className="flex items-center space-x-2 text-emerald-800">
                      <CheckCircle2 className="w-4 h-4 text-[#A89558]" />
                      <span className="font-display font-extrabold text-[#002016] text-xs sm:text-sm uppercase tracking-wider">
                        {currentSpot.title}
                      </span>
                    </div>
                    <p className="mt-2 text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                      {currentSpot.desc}
                    </p>
                    <span className="mt-3 inline-block font-mono text-[9px] text-amber-800 bg-amber-500/[0.08] px-2.5 py-1 rounded">
                      {language === "pt"
                        ? "💡 Clique nos pontos brilhantes acima para mudar de tópico"
                        : "💡 Click the glowing status dots above to explore details"}
                    </span>
                  </div>
                );
              })()}
            </div>

            {/* Right: Rich Interactive Specifications Info Panel */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6 lg:space-y-0 text-left">
              <div className="space-y-4">
                <div>
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-[#A89558] bg-[#FAF7F0] border border-[#D4C3A3]/30 px-3.5 py-1 rounded-md inline-block">
                    Infraestrutura CAPOC
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#002016] mt-2.5 leading-snug">
                    {currentData.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm italic font-light mt-1">
                    {currentData.subtitle}
                  </p>
                </div>

                {/* Grid of Mini-Feature Cards to make it visually rich but clean */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {activeSegment === "agricola" ? (
                    <>
                      <div className="p-4 rounded-xl border border-slate-100 bg-[#FAF9F5]/40 hover:border-emerald-800/10 transition-all">
                        <div className="p-2 bg-emerald-50 text-emerald-800 rounded-lg w-fit mb-3">
                          <Leaf className="w-4 h-4" />
                        </div>
                        <h4 className="font-display font-bold text-xs sm:text-sm text-[#002016]">Fomento Integrado</h4>
                        <p className="mt-1 text-slate-500 text-xs font-light leading-relaxed">Fomento sustentável com pequenos produtores para robustecer a colheita em Cabinda.</p>
                      </div>
                      <div className="p-4 rounded-xl border border-slate-100 bg-[#FAF9F5]/40 hover:border-emerald-800/10 transition-all">
                        <div className="p-2 bg-emerald-50 text-emerald-800 rounded-lg w-fit mb-3">
                          <Sprout className="w-4 h-4" />
                        </div>
                        <h4 className="font-display font-bold text-xs sm:text-sm text-[#002016]">Gestão Botânica</h4>
                        <p className="mt-1 text-slate-500 text-xs font-light leading-relaxed">Colheita manual e logística eficiente de descarga que garante zero oxidação da fruta.</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="p-4 rounded-xl border border-slate-100 bg-[#FAF9F5]/40 hover:border-emerald-800/10 transition-all">
                        <div className="p-2 bg-emerald-50 text-emerald-800 rounded-lg w-fit mb-3">
                          <Award className="w-4 h-4" />
                        </div>
                        <h4 className="font-display font-bold text-xs sm:text-sm text-[#002016]">Complexo Avançado</h4>
                        <p className="mt-1 text-slate-500 text-xs font-light leading-relaxed">A maior planta integrada de refinação física moderna da África Central.</p>
                      </div>
                      <div className="p-4 rounded-xl border border-slate-100 bg-[#FAF9F5]/40 hover:border-emerald-800/10 transition-all">
                        <div className="p-2 bg-emerald-50 text-emerald-800 rounded-lg w-fit mb-3">
                          <Cpu className="w-4 h-4" />
                        </div>
                        <h4 className="font-display font-bold text-xs sm:text-sm text-[#002016]">Padronização Global</h4>
                        <p className="mt-1 text-slate-500 text-xs font-light leading-relaxed">Processamento refinado estrito alinhado às diretrizes de controle químico internacionais.</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Progress Level bar */}
                <div className="pt-4 border-t border-slate-100">
                  <span className="text-xs font-bold text-[#002016] block mb-2">
                    Grau Operacional da Matriz
                  </span>
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-emerald-800 h-2 rounded-full transition-all duration-700" 
                      style={{ width: activeSegment === "agricola" ? "80%" : "60%" }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-slate-500 mt-1.5 font-mono">
                    <span>Início</span>
                    <span className="text-emerald-800 font-bold">
                      {activeSegment === "agricola" ? "Fase Ativa de Cultivo" : "Prensagem & Caldeiras"}
                    </span>
                    <span>100%</span>
                  </div>
                </div>
              </div>

              {/* Stats Box list row & tags box */}
              <div className="space-y-4 pt-4 border-t border-slate-100">
                <div className="grid grid-cols-2 gap-4">
                  {currentData.stats.map((st, i) => (
                    <div key={i} className="px-4 py-3 bg-[#FAF7F0]/40 border border-[#FAF6ED] rounded-xl flex flex-col justify-center">
                      <span className="text-[9px] text-[#A89558] font-bold uppercase tracking-wider block">
                        {st.label}
                      </span>
                      <span className="text-sm font-extrabold text-[#002016] tracking-tight mt-0.5">
                        {st.val}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {currentData.highlights.map((tag, id) => (
                    <span key={id} className="text-[9px] uppercase tracking-wide font-bold bg-[#FAF7F0] text-emerald-800 border border-[#D4C3A3]/20 px-2.5 py-1 rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Industrial Interlude graphics */}
        <div className="mt-16 relative rounded-2xl overflow-hidden h-72 shadow-sm group">
          <img
            src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.32.jpeg"
            alt="Fábrica Prensadora CAPOC em Cabinda"
            className="w-full h-full object-cover transition duration-500 scale-102 group-hover:scale-105"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.36.jpeg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/60 to-transparent flex flex-col justify-end p-8" />
          <div className="absolute bottom-6 left-6 right-6 text-white text-xs max-w-2xl z-10">
            <span className="uppercase text-brand-300 font-bold font-mono tracking-widest text-[9px] block">
              Tecnologia Termomecânica de Ponta
            </span>
            <h4 className="font-display font-extrabold text-xl sm:text-2xl mt-1 leading-snug text-white">
              Extração Térmica de Óleo com Desperdício Zero
            </h4>
            <p className="mt-1.5 text-brand-100 font-light hidden sm:block text-xs leading-relaxed">
              Equipámos o complexo fabril em Cabinda com geradores alimentados por resíduos de carapaça, produzindo óleo de palma refinado, farinha de palmiste e sabonetes finos sob padrões globais ISO sem prejudicar bacias atmosféricas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
