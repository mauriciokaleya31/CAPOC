import { motion } from "motion/react";
import { 
  ShieldCheck, Award, Leaf, Lightbulb, Handshake, Heart, 
  Target, Eye, Compass, Cpu, TrendingUp, Users, Factory, Sparkles, Sprout
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { t, language } = useLanguage();

  const stats = [
    { value: "5.000", suffix: language === "pt" ? "Hectares" : "Hectares", label: t("about_metric_ha") },
    { value: "35.000", suffix: language === "pt" ? "Ton/Ano" : "Tons/Yr", label: t("about_metric_cap") },
    { value: "6", suffix: language === "pt" ? "Produtos" : "Products", label: language === "pt" ? "Gama de Linhas Ativas" : "Active Lines range" },
    { value: "Centenas", suffix: language === "pt" ? "de Empregos" : "of Jobs", label: t("about_metric_jobs") },
  ];

  const quemSomosCards = [
    {
      title: "Inovação Tecnológica",
      desc: "Automação no processamento industrial, viveiros climatizados e controle laboratorial contínuo.",
      icon: <Cpu className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50/50 border-emerald-100",
    },
    {
      title: "Sustentabilidade Ambiental",
      desc: "Protocolos rigorosos de desflorestação zero, conservação de bacias hídricas e uso de energia limpa.",
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      bg: "bg-green-50/50 border-green-100",
    },
    {
      title: "Desenvolvimento Económico",
      desc: "Fortalecimento do mercado interno angolano, geração de valor tributário e diversificação produtiva.",
      icon: <TrendingUp className="w-6 h-6 text-amber-600" />,
      bg: "bg-amber-50/50 border-amber-100",
    },
    {
      title: "Impacto Social",
      desc: "Apoio ativo à educação regional, saneamento comunitário e formação de mão de obra de Cabinda.",
      icon: <Users className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50/50 border-blue-100",
    },
    {
      title: "Industrialização Nacional",
      desc: "Instalação da maior planta refinadora física moderna integrada da África Central.",
      icon: <Factory className="w-6 h-6 text-indigo-600" />,
      bg: "bg-indigo-50/50 border-indigo-100",
    },
    {
      title: "Criação de Valor",
      desc: "Transformar solo fértil em autossuficiência de bens de consumo diário para toda a nação.",
      icon: <Sparkles className="w-6 h-6 text-rose-600" />,
      bg: "bg-rose-50/50 border-rose-100",
    },
  ];

  const valoresList = [
    "Integridade",
    "Excelência",
    "Sustentabilidade",
    "Inovação",
    "Compromisso",
    "Desenvolvimento Humano",
  ];

  return (
    <section className="py-24 bg-white scroll-mt-20" id="sobre">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ================= SECTION 3: SOBRE A CAPOC ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Left: Text Institutional info */}
          <div className="lg:col-span-7 space-y-6">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-700 bg-brand-100 px-3 py-1 rounded-full w-fit">
              {t("nav_about")}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight leading-tight">
              {t("about_title")}
            </h2>
            <p className="text-slate-700 text-base sm:text-lg font-light leading-relaxed">
              {t("about_desc")}
            </p>

            {/* Stats highlighted in a clean grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100">
              {stats.map((st, i) => (
                <div key={i} className="p-4 bg-slate-50/80 rounded-xl border border-slate-100/75 text-center">
                  <span className="block text-2xl font-extrabold text-brand-850 tracking-tight">
                    {st.value}
                  </span>
                  <span className="block text-[11px] font-bold text-brand-650 uppercase tracking-wide mt-0.5">
                    {st.suffix}
                  </span>
                  <span className="block text-[10px] text-slate-500 font-light mt-1">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Beautiful lateral frame image */}
          {/* Right: Beautiful multi-image collage for a premium feel with lots of photos */}
          <div className="lg:col-span-5 space-y-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-lg h-72 sm:h-80 group border border-amber-500/10"
            >
              <img
                src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.36.jpeg"
                alt="Plantação de Palma CAPOC em Cabinda"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <blockquote className="italic font-serif text-xs sm:text-sm">
                  "Sistemas térmicos ecológicos e alta produtividade."
                </blockquote>
                <p className="mt-1.5 font-mono uppercase tracking-widest text-[#A89558] font-bold text-[8px] sm:text-[9px]">
                  Fase Ativa de Plantação – Cabinda
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="relative rounded-xl overflow-hidden shadow-md h-40 sm:h-44 group border border-amber-500/10"
              >
                <img
                  src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.33.jpeg"
                  alt="Frutos de palma frescos Tenera"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold text-white uppercase tracking-wider">
                  Matéria-Prima Selecionada
                </span>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative rounded-xl overflow-hidden shadow-md h-40 sm:h-44 group border border-amber-500/10"
              >
                <img
                  src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.42.jpeg"
                  alt="Estufas climatizadas em Cabinda"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] font-bold text-white uppercase tracking-wider">
                  Estufas Climatizadas
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ================= SECTION 4: QUEM SOMOS ================= */}
        <div className="mb-24 pt-12 border-t border-slate-100">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-700 bg-brand-100 px-3 py-1 rounded-full">
              Quem Somos
            </span>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-brand-950">
              Liderança, Tecnologia e Foco Agro-Industrial
            </h3>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              Consolidamos o nosso pioneirismo através de seis pilares de atuação integrados, garantindo eficiência de ponta a ponta, desde a semente até ao consumidor final em Angola.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quemSomosCards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.15 }}
                className={`p-6 rounded-2xl border ${card.bg} transition-all duration-300 h-full flex flex-col justify-between`}
                id={`qs-card-${idx}`}
              >
                <div>
                  <div className="p-3 bg-white rounded-xl shadow-xs border border-slate-100 w-fit mb-5">
                    {card.icon}
                  </div>
                  <h4 className="font-display font-bold text-brand-950 text-base">
                    {card.title}
                  </h4>
                  <p className="mt-2.5 text-slate-600 text-xs sm:text-sm font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
                <div className="mt-6 flex items-center text-[10px] font-mono font-bold uppercase tracking-wider text-brand-600">
                  <Compass className="w-3.5 h-3.5 mr-1" />
                  <span>Excelência CAPOC</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= SECTION 5: MISSÃO, VISÃO E VALORES ================= */}
        <div className="pt-12 border-t border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-700 bg-brand-100 px-3 py-1 rounded-full">
              Pilares Fundamentais
            </span>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold text-brand-950">
              Propósito e Filosofia Corporativa
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Missão */}
            <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-2xl flex flex-col justify-between" id="block-missao">
              <div>
                <div className="p-3 bg-emerald-100/75 text-emerald-900 rounded-xl w-fit mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="font-display font-extrabold text-brand-950 text-lg uppercase tracking-wider">
                  A Nossa Missão
                </h4>
                <p className="mt-4 text-slate-700 text-sm font-light leading-relaxed">
                  Produzir e transformar óleo de palma Angolano e seus derivados imediatos com elevados padrões de qualidade, eficiência técnica e sustentabilidade, contribuindo directamente para o desenvolvimento industrial competitivo de Angola.
                </p>
              </div>
              <div className="mt-8 text-[11px] font-mono uppercase tracking-wider text-emerald-700 border-t border-slate-200/60 pt-4 font-bold">
                Cultivar com Ética
              </div>
            </div>

            {/* Visão */}
            <div className="bg-slate-50 border border-slate-200/60 p-8 rounded-2xl flex flex-col justify-between" id="block-visao">
              <div>
                <div className="p-3 bg-amber-100/75 text-amber-900 rounded-xl w-fit mb-6">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="font-display font-extrabold text-brand-950 text-lg uppercase tracking-wider">
                  A Nossa Visão
                </h4>
                <p className="mt-4 text-slate-700 text-sm font-light leading-relaxed">
                  Ser referência nacional e regional na indústria de óleo de palma. Aspiramos posicionar a Província de Cabinda no topo de qualidade agro-industrial africana, conquistando respeito comercial e fidelização.
                </p>
              </div>
              <div className="mt-8 text-[11px] font-mono uppercase tracking-wider text-amber-700 border-t border-slate-200/60 pt-4 font-bold">
                Inovar Sempre
              </div>
            </div>

            {/* Valores */}
            <div className="bg-brand-900 text-white p-8 rounded-2xl flex flex-col justify-between shadow-lg shadow-brand-900/10" id="block-valores">
              <div>
                <div className="p-3 bg-brand-800 text-brand-300 rounded-xl w-fit mb-6">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="font-display font-extrabold text-white text-lg uppercase tracking-wider">
                  Nossos Valores
                </h4>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {valoresList.map((val, id) => (
                    <div key={id} className="flex items-center space-x-1.5 text-xs text-brand-200 font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />
                      <span>{val}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-brand-200/90 text-xs font-light leading-relaxed">
                  O nosso código operacional rege-se pelo desenvolvimento humano recíproco e integridade extrema em todos os contratos com parceiros e investidores.
                </p>
              </div>
              <div className="mt-6 text-[11px] font-mono uppercase tracking-wider text-brand-450 border-t border-brand-800 pt-4 font-bold">
                CAPOC Standard
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
