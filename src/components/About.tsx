import { motion } from "motion/react";
import { 
  ShieldCheck, Target, Eye, Leaf, Droplets, TreePine, 
  Recycle, Users, Award, Landmark, FileText, GraduationCap, Factory, CheckCircle2 
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function About() {
  const { t, language } = useLanguage();

  const stats = [
    { value: "5.000", suffix: language === "pt" ? "Hectares" : "Hectares", label: t("about_metric_ha") },
    { value: "35.000", suffix: language === "pt" ? "Ton/Ano" : "Tons/Yr", label: t("about_metric_cap") },
    { value: "6", suffix: language === "pt" ? "Linhas" : "Lines", label: language === "pt" ? "Produtos Ativos" : "Active Products" },
    { value: "+450", suffix: language === "pt" ? "Famílias" : "Families", label: t("about_metric_jobs") },
  ];

  const valoresList = [
    "Integridade",
    "Excelência",
    "Sustentabilidade",
    "Inovação",
    "Compromisso",
    "Desenvolvimento Humano",
  ];

  const sustainabilityPractices = [
    {
      title: language === "pt" ? "Preservação Florestal & Zero Desflorestação" : "Forest Preservation & Zero Deforestation",
      desc: language === "pt" ? "Cultivo estritamente planeado em áreas agrícolas aprovadas, salvaguardando integralmente as florestas nativas e a biodiversidade de Cabinda." : "Strictly planned cultivation on authorized agricultural land, fully safeguarding Cabinda's native forests and biodiversity.",
      icon: <TreePine className="w-5 h-5 text-[#A89558]" />,
    },
    {
      title: language === "pt" ? "Economia Circular & Resíduos Zero" : "Circular Economy & Zero Waste",
      desc: language === "pt" ? "Todas as fibras e cascas resultantes da prensagem alimentam as caldeiras de biomassa e são convertidas em adubo orgânico de alto rendimento." : "All fibers and shells from mechanical pressing fuel biomass boilers and are converted into high-yield organic compost.",
      icon: <Recycle className="w-5 h-5 text-[#A89558]" />,
    },
    {
      title: language === "pt" ? "Eficiência Hídrica & Proteção de Bacias" : "Water Efficiency & Basin Protection",
      desc: language === "pt" ? "Sistemas avançados de decantação e reaproveitamento hídrico, garantindo zero lançamento de efluentes não tratados no ecossistema." : "Advanced decantation and water recycling systems, ensuring zero discharge of untreated effluents into the ecosystem.",
      icon: <Droplets className="w-5 h-5 text-[#A89558]" />,
    },
    {
      title: language === "pt" ? "Agricultura de Precisão & Monitoramento" : "Precision Agriculture & Monitoring",
      desc: language === "pt" ? "Georreferenciação por satélite de cada lote de palmeiras para otimizar nutrição mineral do solo e saúde das espécies botânicas." : "Satellite georeferencing of every palm parcel to optimize soil mineral nutrition and plant health.",
      icon: <Leaf className="w-5 h-5 text-[#A89558]" />,
    },
    {
      title: language === "pt" ? "Fomento Comunitário & Inclusão Rural" : "Community Empowerment & Rural Inclusion",
      desc: language === "pt" ? "Integração contínua de pequenos produtores e cooperativas locais com compra garantida de colheitas e assistência técnica agrónoma." : "Continuous integration of small local farmers with guaranteed purchase of harvests and expert agronomical technical assistance.",
      icon: <Users className="w-5 h-5 text-[#A89558]" />,
    },
    {
      title: language === "pt" ? "Padrões Internacionais de Qualidade" : "International Quality Standards",
      desc: language === "pt" ? "Processos alinhados com as melhores práticas de sustentabilidade alimentar e certificações agro-industriais para exportação." : "Processes aligned with premier food sustainability best practices and agro-industrial certifications for export.",
      icon: <Award className="w-5 h-5 text-[#A89558]" />,
    },
  ];

  const impactos = [
    {
      title: language === "pt" ? "Criação de Emprego" : "Job Creation",
      icon: <Users className="w-5 h-5 text-[#A89558]" />,
      desc: language === "pt" ? "Geração de centenas de postos de trabalho diretos e indiretos nos setores agrícola e industrial da Província de Cabinda, priorizando recrutamento local." : "Generation of hundreds of direct and indirect jobs in the agricultural and industrial sectors of Cabinda Province, prioritizing local recruitment.",
    },
    {
      title: language === "pt" ? "Desenvolvimento Regional" : "Regional Development",
      icon: <Landmark className="w-5 h-5 text-[#A89558]" />,
      desc: language === "pt" ? "Fomento de infraestrutura elétrica, saneamento civil e telecomunicações na vizinhança corporativa, integrando pequenos parceiros rurais independentes." : "Fostering electrical infrastructure, civil sanitation, and telecommunications in the corporate neighborhood, integrating small independent rural partners.",
    },
    {
      title: language === "pt" ? "Substituição de Importações" : "Import Substitution",
      icon: <FileText className="w-5 h-5 text-[#A89558]" />,
      desc: language === "pt" ? "Abastecimento local imediato de óleo purificado alimentar e sabões, economizando valiosas divisas cambiais para o Banco Central de Angola." : "Immediate local supply of purified edible palm oil and soaps, saving valuable foreign currency reserves for the Central Bank of Angola.",
    },
    {
      title: language === "pt" ? "Transferência de Conhecimento" : "Knowledge Transfer",
      icon: <GraduationCap className="w-5 h-5 text-[#A89558]" />,
      desc: language === "pt" ? "Formação técnica permanente em microbiologia botânica vegetal, automação fabril e mecanização de colheita agrícola para residentes locais." : "Ongoing technical training in plant botanical microbiology, factory automation, and mechanical agriculture harvesting for local residents.",
    },
  ];

  return (
    <div className="bg-white text-slate-800" id="sobre">
      
      {/* ================= SECTION 1: SOBRE A CAPOC ================= */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Text Institutional info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#002016] bg-[#002016]/5 border border-[#A89558]/30 px-3.5 py-1.5 rounded-full inline-block">
                {t("nav_about")}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002016] tracking-tight leading-tight">
                {t("about_title")}
              </h2>
              <p className="text-slate-700 text-base sm:text-lg font-light leading-relaxed whitespace-pre-line">
                {t("about_desc")}
              </p>

              {/* Stats highlighted in a clean grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-100">
                {stats.map((st, i) => (
                  <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-center hover:border-[#A89558]/40 transition-colors">
                    <span className="block text-2xl sm:text-3xl font-extrabold text-[#002016] tracking-tight">
                      {st.value}
                    </span>
                    <span className="block text-[11px] font-bold text-[#A89558] uppercase tracking-wide mt-0.5">
                      {st.suffix}
                    </span>
                    <span className="block text-[10px] text-slate-500 font-light mt-1">
                      {st.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Multi-image collage with Cabinda plantation photos */}
            <div className="lg:col-span-5 space-y-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-xl h-72 sm:h-80 group border border-[#A89558]/20 bg-emerald-950"
              >
                <img
                  src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.36.jpeg"
                  alt="Plantação de Palma CAPOC em Cabinda"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.43.jpeg";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <blockquote className="italic font-serif text-xs sm:text-sm text-emerald-100">
                    "Sistemas térmicos ecológicos e alta produtividade."
                  </blockquote>
                  <p className="mt-1.5 font-mono uppercase tracking-widest text-[#A89558] font-bold text-[9px]">
                    Fase Ativa de Plantação – Cabinda, Angola
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="relative rounded-xl overflow-hidden shadow-md h-40 sm:h-44 group border border-[#A89558]/20 bg-emerald-950"
                >
                  <img
                    src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.33.jpeg"
                    alt="Frutos de palma frescos Tenera"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.36.jpeg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold text-white uppercase tracking-wider">
                    Matéria-Prima Selecionada
                  </span>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="relative rounded-xl overflow-hidden shadow-md h-40 sm:h-44 group border border-[#A89558]/20 bg-emerald-950"
                >
                  <img
                    src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.42.jpeg"
                    alt="Estufas climatizadas em Cabinda"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.src = "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.40.jpeg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-[10px] font-bold text-white uppercase tracking-wider">
                    Estufas Climatizadas
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: MISSÃO, VISÃO E VALORES ================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#A89558] bg-[#002016]/5 px-4 py-1.5 rounded-full inline-block border border-[#A89558]/20 shadow-xs">
              Pilares Fundamentais
            </span>
            <h3 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002016] tracking-tight">
              Propósito e Filosofia Corporativa
            </h3>
            <p className="mt-4 text-slate-600 font-light text-sm sm:text-base leading-relaxed">
              Guiados pelo desenvolvimento, sustentabilidade e integridade extrema para erguer a infraestrutura agro-industrial do amanhã em Angola.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            
            {/* Missão Card */}
            <motion.div 
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-gradient-to-b from-[#002016] to-[#013022] text-[#FAF9F5] p-8 sm:p-10 rounded-[32px] border border-[#A89558]/25 flex flex-col justify-between transition-all duration-300 shadow-xl group"
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
              className="bg-gradient-to-b from-[#002016] to-[#013022] text-[#FAF9F5] p-8 sm:p-10 rounded-[32px] border border-[#A89558]/25 flex flex-col justify-between transition-all duration-300 shadow-xl group"
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
              className="bg-gradient-to-b from-[#002016] to-[#013022] text-[#FAF9F5] p-8 sm:p-10 rounded-[32px] border border-[#A89558]/25 flex flex-col justify-between transition-all duration-300 shadow-xl group"
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
      </section>

      {/* ================= SECTION 3: SUSTENTABILIDADE & RESPONSABILIDADE AMBIENTAL (INTEGRADA NO SOBRE) ================= */}
      <section className="py-24 bg-[#002016] text-white relative overflow-hidden" id="sustentabilidade-integrada">
        {/* Background texture with rich visible landscape */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.36.jpeg"
            alt="Fundo Florestal Cabinda"
            className="w-full h-full object-cover opacity-40 filter brightness-90 contrast-125 saturate-125 scale-105"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.43.jpeg";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002016]/85 via-[#002016]/70 to-[#002016]/90" />
          <div className="absolute inset-0 bg-[radial-gradient(#A89558_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#A89558] bg-[#A89558]/10 border border-[#A89558]/30 px-4 py-1.5 rounded-full inline-block">
              {language === "pt" ? "Sustentabilidade & Compromisso Ecológico" : "Sustainability & Ecological Commitment"}
            </span>
            <h3 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {language === "pt" ? "Compromisso com o Solo e a Vida" : "Commitment to Soil and Life"}
            </h3>
            <p className="mt-4 text-gray-300 font-light text-sm sm:text-base leading-relaxed">
              {language === "pt"
                ? "A CAPOC combina tecnologia agro-industrial de ponta com um respeito rigoroso pela biodiversidade de Cabinda, operando sob o princípio de zero emissões térmicas e ciclo fechado de carbono."
                : "CAPOC pairs state-of-the-art agro-industrial engineering with strict conservation of Cabinda's rich biodiversity, operating under zero thermal emissions and a closed-loop carbon cycle."}
            </p>
          </div>

          {/* 6 Sustainability Practice Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {sustainabilityPractices.map((prac, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#A89558]/40 transition-all duration-300 group"
              >
                <div className="p-3 bg-white/10 rounded-xl border border-white/10 w-fit group-hover:bg-[#A89558]/20 group-hover:border-[#A89558]/40 transition duration-300 mb-4">
                  {prac.icon}
                </div>
                <h4 className="font-display font-bold text-lg text-white group-hover:text-[#A89558] transition-colors">
                  {prac.title}
                </h4>
                <p className="mt-2 text-gray-300 text-xs sm:text-sm font-light leading-relaxed">
                  {prac.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: IMPACTO SOCIOECONÓMICO & COMUNIDADE ================= */}
      <section className="py-24 bg-white text-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Explanatory text & High-Fidelity Portrait */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="font-mono text-xs font-semibold text-[#002016] uppercase tracking-widest bg-[#002016]/5 border border-[#A89558]/30 px-3.5 py-1.5 rounded-full inline-block">
                  {language === "pt" ? "Fomento Rural & Valor Local" : "Rural Empowerment & Regional Value"}
                </span>
                
                <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#002016] tracking-tight leading-tight">
                  {t("imp_title")}
                </h3>
                
                <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
                  {t("imp_desc")}
                </p>
              </div>

              {/* Farmer portrait */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] group">
                <img 
                  src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.39.jpeg" 
                  alt="Agricultor de Palmeira de Óleo de Cabinda CAPOC" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.36.jpeg";
                  }}
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#002016]/90 via-transparent to-transparent flex flex-col justify-end p-6" />
                
                <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end z-10 text-white">
                  <div>
                    <span className="block text-[8px] font-mono text-[#A89558] uppercase tracking-widest font-black">
                      {language === "pt" ? "ORGANIZAÇÃO DE FOMENTO CAPOC" : "CAPOC COOPERATIVE FOSTERING"}
                    </span>
                    <h4 className="text-sm font-extrabold tracking-tight mt-0.5">
                      {language === "pt" ? "João Manuel • Parceria de Campo" : "João Manuel • Field Cultivator"}
                    </h4>
                    <p className="text-[10px] text-gray-300 font-light mt-1">
                      {language === "pt" ? '"Com o apoio técnico da CAPOC, os nossos viveiros produzem o triplo."' : '"With CAPOC physical toolkits and training, our nurseries yield three times more."'}
                    </p>
                  </div>
                  <div className="p-2 bg-[#A89558] text-[#002016] font-mono text-[9px] uppercase font-black rounded-lg shrink-0 tracking-wide">
                    +450 {language === "pt" ? "Famílias" : "Families"}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Modern icon card list */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {impactos.map((imp, index) => (
                <div 
                  key={index} 
                  className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl hover:border-[#A89558]/50 hover:bg-slate-100/80 transition-all duration-300 flex flex-col justify-between group shadow-xs"
                >
                  <div>
                    <div className="p-3 bg-white rounded-xl border border-slate-200 w-fit group-hover:bg-[#002016] group-hover:text-white transition duration-300">
                      {imp.icon}
                    </div>
                    <h4 className="font-display font-extrabold text-[#002016] text-base mt-4 transition-colors">
                      {imp.title}
                    </h4>
                    <p className="mt-2 text-slate-600 text-xs font-light leading-relaxed">
                      {imp.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-200 flex justify-between text-[8px] font-mono font-black uppercase text-[#A89558] tracking-widest">
                    <span>CAPOC Impact</span>
                    <span>100% Angola</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
