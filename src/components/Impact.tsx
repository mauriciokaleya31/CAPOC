import { useState } from "react";
import { 
  Users, Landmark, FileText, GraduationCap, Factory, 
  Trees, Droplet, Heart, CheckCircle, ShieldCheck, Leaf 
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";

export default function Impact() {
  const { t, language } = useLanguage();
  const [activePractice, setActivePractice] = useState<number>(0);

  const impactos = [
    {
      title: language === "pt" ? "Criação de Emprego" :
             language === "en" ? "Job Creation" :
             language === "fr" ? "Création d'Emplois" :
             language === "es" ? "Creación de Empleos" :
             language === "zh" ? "创造就业机会" : "خلق فرص العمل",
      icon: <Users className="w-5 h-5 text-[#A89558]" />,
      desc: language === "pt" ? "Geração de centenas de postos de trabalho diretos e indiretos nos setores agrícola e industrial da Província de Cabinda, priorizando recrutamento local." :
            language === "en" ? "Generation of hundreds of direct and indirect jobs in the agricultural and industrial sectors of Cabinda Province, prioritizing local recruitment." :
            language === "fr" ? "Génération de centaines d'emplois directs et indirects dans les secteurs agricole et industriel de la province de Cabinda, en priorisant le recrutement local." :
            language === "es" ? "Generación de cientos de puestos de trabajo directos e indirectos en los sectores agrícola e industrial de la provincia de Cabinda, priorizando la contratación local." :
            language === "zh" ? "在喀宾达省农业和工业部门创造数百个直接和间接就业机会，优先招收当地员工。" : "توليد مئات من فرص العمل المباشرة وغير المباشرة في القطاعين الزراعي والصناعي في مقاطعة كابيندا، مع إعطاء الأولوية للتوظيف المحلي.",
    },
    {
      title: language === "pt" ? "Desenvolvimento Regional" :
             language === "en" ? "Regional Development" :
             language === "fr" ? "Développement Régional" :
             language === "es" ? "Desarrollo Regional" :
             language === "zh" ? "区域发展" : "التنمية الإقليمية",
      icon: <Landmark className="w-5 h-5 text-[#A89558]" />,
      desc: language === "pt" ? "Fomento de infraestrutura elétrica, saneamento civil e telecomunicações na vizinhança corporativa, integrando pequenos parceiros rurais independentes." :
            language === "en" ? "Fostering electrical infrastructure, civil sanitation, and telecommunications in the corporate neighborhood, integrating small independent rural partners." :
            language === "fr" ? "Favoriser les infrastructures électriques, l'assainissement civil et les télécommunications dans le voisinage de l'entreprise, en intégrant de petits partenaires ruraux indépendants." :
            language === "es" ? "Fomento de infraestructuras eléctricas, saneamiento civil y telecomunicaciones en el entorno corporativo, integrando a pequeños socios rurales independientes." :
            language === "zh" ? "促进企业周边的电力基础设施、民用卫生和电信建设，整合独立的小农户合作伙伴。" : "تعزيز البنية التحتية الكهربائية، والصرف الصحي المدني، والاتصالات في المنطقة المجاورة للشركة، ودمج صغار الشركاء الريفيين المستقلين.",
    },
    {
      title: language === "pt" ? "Substituição de Importações" :
             language === "en" ? "Import Substitution" :
             language === "fr" ? "Substitution des Importations" :
             language === "es" ? "Sustitución de Importaciones" :
             language === "zh" ? "进口替代" : "بدائل الاستيراد",
      icon: <FileText className="w-5 h-5 text-[#A89558]" />,
      desc: language === "pt" ? "Abastecimento local imediato de óleo purificado alimentar e sabões, economizando valiosas divisas cambiais para o Banco Central de Angola." :
            language === "en" ? "Immediate local supply of purified edible palm oil and soaps, saving valuable foreign currency reserves for the Central Bank of Angola." :
            language === "fr" ? "Approvisionnement local immédiat en huiles comestibles purifiées et savons, économisant de précieuses réserves de devises pour la Banque Centrale de l'Angola." :
            language === "es" ? "Suministro local inmediato de aceites comestibles purificados y jabones, ahorrando valiosas reservas de divisas para el Banco Central de Angola." :
            language === "zh" ? "立即向当地供应纯净食用棕榈油和肥皂，为安哥拉中央银行节省宝贵的外汇储备。" : "الإمداد المحلي الفوري لزيت النخيل والموالح، مما يوفر احتياطيات كبيرة من العملات الأجنبية للبنك المركزي الأنغولي.",
    },
    {
      title: language === "pt" ? "Transferência de Conhecimento" :
             language === "en" ? "Knowledge Transfer" :
             language === "fr" ? "Transfert de Connaissances" :
             language === "es" ? "Transferencia de Conocimiento" :
             language === "zh" ? "知识转移" : "نقل المعرفة",
      icon: <GraduationCap className="w-5 h-5 text-[#A89558]" />,
      desc: language === "pt" ? "Formação técnica permanente em microbiologia botânica vegetal, automação fabril e mecanização de colheita agrícola para residentes locais." :
            language === "en" ? "Ongoing technical training in plant botanical microbiology, factory automation, and mechanical agriculture harvesting for local residents." :
            language === "fr" ? "Formation technique continue en microbiologie botanique végétale, automatisation d'usine et mécanisation des récoltes agricoles pour les résidents locaux." :
            language === "es" ? "Capacitación técnica permanente en microbiología botánica vegetal, automatización de fábricas y mecanización de cosechas para los residentes locales." :
            language === "zh" ? "为当地居民提供植物植物微生物学、工厂自动化和机械化农业收获方面的持续技术培训。" : "التدريب التقني المستمر في علم الأحياء المجهرية النباتية، وأتمتة المصانع، والميكنة الزراعية للمقيمين المحليين.",
    },
    {
      title: language === "pt" ? "Industrialização Nacional" :
             language === "en" ? "National Industrialization" :
             language === "fr" ? "Industrialisation Nationale" :
             language === "es" ? "Industrialización Nacional" :
             language === "zh" ? "国家工业化" : "التصنيع الوطني",
      icon: <Factory className="w-5 h-5 text-[#A89558]" />,
      desc: language === "pt" ? "Posicionamento estratégico de Angola fora da volatilidade pura do crude, estruturando uma nova fileira de valor biológico estável e duradouro." :
            language === "en" ? "Strategic positioning of Angola away from raw oil volatility, structuring a new, stable, and sustainable bio-industrial value chain." :
            language === "fr" ? "Positionnement stratégique de l'Angola en dehors de la volatilité du brut, en structurant une nouvelle chaîne de valeur bio-industrielle stable et durable." :
            language === "es" ? "Posicionamiento estratégico de Angola fuera de la volatilidad del crudo, estructurando una nueva cadena de valor bioindustrial estable y sostenible." :
            language === "zh" ? "安哥拉摆脱原油价格波动的战略定位，构建一条全新稳定且可持续的生物工业价值链。" : "الموقع الاستراتيجي لأنغولا بعيداً عن تقلبات النفط الخام، وهيكلة سلسلة قيمة بيولوجية صناعية جديدة ومستدامة.",
    }
  ];

  const greenPractices = [
    {
      id: 0,
      title: language === "pt" ? "Gestão Responsável dos Recursos" : "Responsible Resource Management",
      desc: language === "pt" ? "Protocolos rígidos que salvaguardam integridade do solo contra exaustão de nutrientes através de rotação orgânica e adubação natural rica em potássio." : "Strict protocols protecting soil integrity from nutrient depletion through active organic rotation and potassium-rich natural fertilization.",
      icon: <Trees className="w-5 h-5" />
    },
    {
      id: 1,
      title: language === "pt" ? "Uso Eficiente da Água" : "Efficient Water Harvesting",
      desc: language === "pt" ? "Sistemas fechados de lavagem térmica industrial e retenção pluvial inteligente para irrigação lenta sem erosão de encostas e sem escassez hídrica local." : "Closed loop thermal factory washing systems and rainwater capture to enable slow, erosion-free agricultural irrigation without depleting regional water tables.",
      icon: <Droplet className="w-5 h-5" />
    },
    {
      id: 2,
      title: language === "pt" ? "Preservação Ambiental" : "Ecological Habitat Protection",
      desc: language === "pt" ? "Mapeamento ecológico profundo para desflorestação zero de matas nativas e preservação de corredores de circulação da fauna nativa de Cabinda." : "Deep geographical mapping guaranteeing zero deforestation of primary native canopy forests and protecting biological migration corridors of Cabinda's native fauna.",
      icon: <Leaf className="w-5 h-5" />
    },
    {
      id: 3,
      title: language === "pt" ? "Desenvolvimento Inclusivo" : "Inclusive Development Programs",
      desc: language === "pt" ? "Criação de planos de igualdade de género para admissão operacional e capacitação de infraestruturas hídricas nos bairros vizinhos." : "Gender equity action pipelines for technical hire recruitment and localized water supply micro-infrastructures built directly in surrounding host communities.",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 4,
      title: language === "pt" ? "Apoio às Comunidades" : "Direct Community Empowerment",
      desc: language === "pt" ? "Parceria direta com postos de atendimento de saúde médica comunitários móveis, distribuição de fertilizantes orgânicos e kits escolares." : "On-ground partnership supporting mobile primary medical clinics, organizing free organic fertilizer shares, and donating essential academic supplies to local schools.",
      icon: <Heart className="w-5 h-5" />
    },
    {
      id: 5,
      title: language === "pt" ? "Crescimento Sustentável" : "UN Target Alignment",
      desc: language === "pt" ? "Alinhamento corporativo contínuo com os Objetivos de Desenvolvimento Sustentável (ODS) da Organização das Nações Unidas." : "Continuous alignment of all business goals with the United Nations Sustainable Development Goals (SDGs) to drive reliable socio-economic integration.",
      icon: <ShieldCheck className="w-5 h-5" />
    }
  ];

  return (
    <div id="impacto-e-sustentabilidade">
      
      {/* ================= SECTION 9: IMPACTO ECONÓMICO E SOCIAL ================= */}
      <section className="relative py-28 bg-[#002016] text-white overflow-hidden scroll-mt-20" id="impacto">
        
        {/* IMPROVED: High contrast background picture with rich image depth */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.36.jpeg"
            alt="Fundo Plantação Cabinda"
            className="w-full h-full object-cover opacity-35 scale-102 select-none filter contrast-125 saturate-125"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002016]/95 via-[#002016]/85 to-[#002016]/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Explanatory text & High-Fidelity Portrait of an Active Local Expert */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="font-mono text-xs font-semibold text-[#A89558] uppercase tracking-widest bg-[#A89558]/10 border border-[#A89558]/30 px-3.5 py-1 rounded-full inline-block"
                >
                  {language === "pt" ? "Fomento Rural & Valor Local" : "Rural Empowerment & Regional Value"}
                </motion.span>
                
                <motion.h2 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight"
                >
                  {t("imp_title")}
                </motion.h2>
                
                <motion.p 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-gray-200 text-sm sm:text-base font-light leading-relaxed"
                >
                  {t("imp_desc")}
                </motion.p>
              </div>

              {/* REQUESTED ACTION: Imposing portrait of local operators, farmer, and active greenhouses in action */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 aspect-[4/3] group"
              >
                {/* Real-life organic farmer from Cabinda with crops */}
                <img 
                  src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.51.52.jpeg" 
                  alt="Agricultor de Palmeira de Óleo de Cabinda CAPOC" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay details */}
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
                  <div className="p-2 bg-[#A89558]/90 text-white font-mono text-[9px] uppercase font-extrabold rounded-lg shrink-0 tracking-wide">
                    +450 {language === "pt" ? "Famílias" : "Families"}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="border-l-4 border-[#A89558] pl-4 py-2 bg-white/5 pr-4 rounded-r-xl"
              >
                <p className="text-gray-200 font-medium italic text-xs leading-relaxed">
                  {language === "pt"
                    ? '"Cada vaga industrial que estabelecemos em Cabinda reduz a dependência de produtos importados e reitera a dignidade social concreta às nossas famílias."'
                    : '"Every agricultural livelihood we establish in Cabinda mitigates high import dependence and rewards regional communities with secure, lasting progress."'
                  }
                </p>
              </motion.div>
            </div>

            {/* Right: Modern icon card list with glassmorphism */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {impactos.map((imp, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-5 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-[#A89558]/40 transition-all duration-350 flex flex-col justify-between group shadow-sm hover:shadow-md"
                  id={`impacto-item-${index}`}
                >
                  <div>
                    <div className="p-3 bg-white/10 rounded-xl border border-white/5 w-fit group-hover:bg-[#A89558]/20 group-hover:border-[#A89558]/40 transition duration-300">
                      {imp.icon}
                    </div>
                    <h4 className="font-display font-extrabold text-white text-base mt-4 transition-colors group-hover:text-[#A89558]">
                      {imp.title}
                    </h4>
                    <p className="mt-2 text-gray-300 text-xs font-light leading-relaxed">
                      {imp.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 flex justify-between text-[8px] font-mono font-black uppercase text-[#A89558] tracking-widest">
                    <span>CAPOC Impact</span>
                    <span>100% Angola</span>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 10: SUSTENTABILIDADE ================= */}
      <section className="relative py-28 bg-[#002016] text-white overflow-hidden scroll-mt-20 border-t border-white/5" id="sustentabilidade">
        
        {/* Background Nature Backdrop with Dark Green Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.38.jpeg"
            alt="Manejo Sustentável CAPOC"
            className="w-full h-full object-cover opacity-20 scale-102 select-none pointer-events-none filter brightness-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#002016] via-[#002016]/95 to-[#002016] z-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="font-mono text-xs font-semibold text-[#A89558] uppercase tracking-widest bg-emerald-900/40 border border-[#A89558]/30 px-3.5 py-1 rounded-full">
              {language === "pt" ? "Sustentabilidade Ecológica" : "Ecological Balance & ODS"}
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              {language === "pt" ? "Sustentabilidade Ativa do Solo e da Vida" : "Active Soil & Biodiversity Protocol"}
            </h2>
            <p className="mt-3 text-gray-300 font-light text-sm sm:text-base leading-relaxed">
              {language === "pt" 
                ? "O amanhã de Cabinda é desenhado respeitando os ecossistemas. Adotamos padrões mundiais exigentes de manejo no agronegócio de palma orgânica."
                : "The tomorrow of Cabinda is engineered with deep environmental integrity. We adopt strict global standards for zero-emissions organic palm oil agribusiness."
              }
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 items-center">
            
            {/* Left: Dynamic practice interactive explainer cards with motion */}
            <div className="xl:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {greenPractices.map((practice, index) => {
                const isActive = activePractice === index;
                return (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    onClick={() => setActivePractice(index)}
                    className={`p-5 rounded-2xl border transition-all duration-350 cursor-pointer flex items-start space-x-4 ${
                      isActive 
                        ? "bg-[#002016] border-[#A89558] shadow-lg text-white scale-102" 
                        : "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10"
                    }`}
                    id={`sustainability-practice-${index}`}
                  >
                    <div className={`p-2.5 rounded-xl shrink-0 mt-0.5 ${
                      isActive ? "bg-[#A89558] text-white animate-pulse" : "bg-white/10 text-[#A89558]"
                    }`}>
                      {practice.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-black text-sm tracking-tight text-white select-none">
                        {practice.title}
                      </h4>
                      <p className={`mt-1.5 text-xs font-light leading-relaxed select-none ${
                        isActive ? "text-gray-200 font-medium" : "text-gray-300/80"
                      }`}>
                        {practice.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Right: Informational carbon quota details */}
            <div className="xl:col-span-4 bg-[#002016]/80 p-6 sm:p-8 rounded-2xl border border-[#A89558]/30 space-y-6 shadow-xl relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-[#A89558]/10 rounded-full blur-xl group-hover:scale-125 transition-transform" />
              
              <span className="text-[9px] uppercase font-mono tracking-widest text-[#A89558] font-black block">
                {language === "pt" ? "PROTOCOLO CARBONO REUTILIZÁVEL" : "CIRCULAR ZERO WASTE CARBON"}
              </span>
              <h3 className="font-display font-extrabold text-lg text-white">
                {language === "pt" ? "Compromissos Climáticos Registados" : "Registered Decarbonization Targets"}
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed">
                {language === "pt"
                  ? "Cada lote de palmeiras é georreferenciado e auditado por biólogos agrícolas. Os resíduos de fibra produzidos na extração física servem como adubo de cobertura, gerando carbono nulo."
                  : "Every crop zone is georeferenced and audited by specialized conservationists. Solid organic waste generated in mechanical presses is fully recycled as organic mulch, guaranteeing zero open-air carbon outputs."
                }
              </p>
              
              <div className="pt-4 border-t border-white/10 text-center">
                <span className="font-mono text-3.5xl font-black text-[#A89558]">100%</span>
                <span className="block text-[10px] text-gray-300 mt-1 uppercase font-bold tracking-wider">
                  {language === "pt" ? "Processamento Sem Aditivos Químicos" : "Zero Chemical Additive Refinement"}
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
