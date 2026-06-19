import { motion } from "motion/react";
import { ShieldCheck, Target, Eye } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { t, language } = useLanguage();

  const stats = [
    { value: "5.000", suffix: language === "pt" ? "Hectares" : "Hectares", label: t("about_metric_ha") },
    { value: "35.000", suffix: language === "pt" ? "Ton/Ano" : "Tons/Yr", label: t("about_metric_cap") },
    { value: "6", suffix: language === "pt" ? "Produtos" : "Products", label: language === "pt" ? "Gama de Linhas Ativas" : "Active Lines range" },
    { value: "Centenas", suffix: language === "pt" ? "de Empregos" : "of Jobs", label: t("about_metric_jobs") },
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
            <p className="text-slate-700 text-base sm:text-lg font-light leading-relaxed whitespace-pre-line">
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

        {/* ================= SECTION 5: MISSÃO, VISÃO E VALORES ================= */}
        <div className="pt-24 border-t border-slate-100">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#A89558] bg-[#002016]/5 px-4 py-1.5 rounded-full inline-block border border-[#A89558]/20 shadow-xs">
              Pilares Fundamentais
            </span>
            <h3 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002016] tracking-tight">
              Propósito e Filosofia Corporativa
            </h3>
            <p className="mt-4 text-slate-500 font-light text-sm sm:text-base leading-relaxed">
              Guiados pelo desenvolvimento, sustentabilidade e integridade extrema para erguer a infraestrutura agro-industrial do amanhã em Angola.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Missão Card */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-b from-[#002016] to-[#013022] text-[#FAF9F5] p-8 sm:p-10 rounded-[32px] border border-[#A89558]/25 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_30px_rgba(0,32,22,0.03)] group"
              id="block-missao"
            >
              <div>
                <div className="p-3.5 bg-[#A89558]/10 text-[#A89558] rounded-2xl w-fit mb-8 border border-[#A89558]/35 transition-transform duration-300 group-hover:scale-105">
                  <Target className="w-6 h-6" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#A89558]/10 border border-[#A89558]/25 text-[10px] text-[#A89558] uppercase font-mono tracking-wider mb-2 font-bold">
                  Propósito
                </div>
                <h4 className="font-display font-bold text-xl uppercase tracking-wider text-[#EAE6DD]">
                  A Nossa Missão
                </h4>
                <p className="mt-4 text-emerald-100/80 text-sm font-light leading-relaxed">
                  Produzir e transformar óleo de palma Angolano e seus derivados imediatos com elevados padrões de qualidade, eficiência técnica e sustentabilidade, contribuindo directamente para o desenvolvimento industrial competitivo de Angola.
                </p>
              </div>
              <div className="mt-12 text-[10px] font-mono uppercase tracking-wider text-[#A89558] border-t border-[#A89558]/15 pt-4 font-bold flex items-center justify-between">
                <span>Cultivar com Ética</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#A89558]" />
              </div>
            </motion.div>

            {/* Visão Card */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-b from-[#002016] to-[#013022] text-[#FAF9F5] p-8 sm:p-10 rounded-[32px] border border-[#A89558]/25 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_30px_rgba(0,32,22,0.03)] group"
              id="block-visao"
            >
              <div>
                <div className="p-3.5 bg-[#A89558]/10 text-[#A89558] rounded-2xl w-fit mb-8 border border-[#A89558]/35 transition-transform duration-300 group-hover:scale-105">
                  <Eye className="w-6 h-6" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#A89558]/10 border border-[#A89558]/25 text-[10px] text-[#A89558] uppercase font-mono tracking-wider mb-2 font-bold">
                  Futuro
                </div>
                <h4 className="font-display font-bold text-xl uppercase tracking-wider text-[#EAE6DD]">
                  A Nossa Visão
                </h4>
                <p className="mt-4 text-emerald-100/80 text-sm font-light leading-relaxed">
                  Ser referência nacional e regional na indústria de óleo de palma. Aspiramos posicionar a Província de Cabinda no topo de qualidade agro-industrial africana, conquistando respeito comercial e fidelização.
                </p>
              </div>
              <div className="mt-12 text-[10px] font-mono uppercase tracking-wider text-[#A89558] border-t border-[#A89558]/15 pt-4 font-bold flex items-center justify-between">
                <span>Inovar Sempre</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#A89558]" />
              </div>
            </motion.div>

            {/* Valores Card */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-b from-[#002016] to-[#013022] text-[#FAF9F5] p-8 sm:p-10 rounded-[32px] border border-[#A89558]/25 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_30px_rgba(0,32,22,0.03)] group"
              id="block-valores"
            >
              <div>
                <div className="p-3.5 bg-[#A89558]/10 text-[#A89558] rounded-2xl w-fit mb-8 border border-[#A89558]/35 transition-transform duration-300 group-hover:scale-105">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-[#A89558]/10 border border-[#A89558]/25 text-[10px] text-[#A89558] uppercase font-mono tracking-wider mb-2 font-bold">
                  Valores
                </div>
                <h4 className="font-display font-bold text-xl uppercase tracking-wider text-[#EAE6DD]">
                  Nossos Valores
                </h4>
                
                {/* Visual grid of modern values */}
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {valoresList.map((val, id) => (
                    <div 
                      key={id} 
                      className="px-3 py-2 bg-emerald-950/40 border border-[#A89558]/15 rounded-xl flex items-center space-x-2 text-xs font-medium text-emerald-100 hover:bg-[#A89558]/10 hover:border-[#A89558]/30 transition-colors duration-200"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#A89558] shrink-0" />
                      <span className="truncate">{val}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-emerald-100/70 text-xs font-light leading-relaxed">
                  O nosso código operacional rege-se pelo desenvolvimento humano recíproco e integridade extrema em todos os contratos com parceiros e investidores.
                </p>
              </div>
              <div className="mt-8 text-[10px] font-mono uppercase tracking-wider text-[#A89558] border-t border-[#A89558]/15 pt-4 font-bold flex items-center justify-between">
                <span>CAPOC Standard</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#A89558]" />
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
