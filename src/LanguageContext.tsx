import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "pt" | "en" | "fr" | "es" | "zh" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  pt: {
    // Navbar
    nav_about: "Sobre",
    nav_project: "Projecto",
    nav_products: "Produtos",
    nav_impact: "Sustentabilidade",
    nav_gallery: "Galeria",
    nav_investors: "Investidores",
    nav_contact: "Contactos",
    nav_btn_partner: "Ser Parceiro",

    // Hero
    hero_title: "Ciclos Verdes de Alta Produtividade e Refinação",
    hero_desc: "A Cabinda Palm Oil Corporation (CAPOC) lidera a agro-indústria moderna angolana, gerando óleos orgânicos, sabões glicerinados e bioenergia sustentável de padrão mundial.",
    hero_cta_invest: "Oportunidades de Investimento",
    hero_cta_partner: "Torne-se Parceiro",
    hero_badge: "100% Produzido em Cabinda, Angola",

    // About
    about_title: "A Nossa Visão de Desenvolvimento",
    about_desc: "A CAPOC nasceu para posicionar Cabinda no centro da autossuficiência de gorduras alimentares e derivados biológicos de Angola. Alinhando ecologia e tecnologia, garantimos zero emissões térmicas.",
    about_metric_ha: "Hectares de Cultivo",
    about_metric_cap: "Capacidade Anual",
    about_metric_jobs: "Empregos Locais",
    about_card_1: "Sistemas Térmicos Ecológicos e alta produtividade.",
    about_card_2: "Matéria-prima de excelência botânica.",
    about_card_3: "Estufas científicas totalmente climatizadas em Cabinda.",

    // Project Details
    proj_title: "As Duas Vertentes Estratégicas do Projeto",
    proj_desc: "Estruturámos um ecossistema agro-industrial altamente tecnológico e sinérgico divido em duas componentes elementares que alimentam o progresso de Cabinda.",
    proj_tab_agri: "Componente Agrícola",
    proj_tab_ind: "Componente Industrial",
    proj_operational: "Grau Operacional da Matriz",
    proj_growth_title: "Crescimento Planeado da Produção Alvo",
    proj_growth_desc: "Estágios de escalabilidade de refinação em Cabinda (Toneladas/Ano)",
    proj_step_1: "Primeira Fase de Arranque",
    proj_step_2: "Expansão de Pico Óptimo",

    // Impact / Sustainability Section
    imp_title: "Geração de Impacto Económico & Social",
    imp_desc: "As operações da CAPOC foram projetadas para criar valor real e duradouro. Não extraímos apenas óleo, estamos a semear as bases para o progresso do interior de Angola de forma resiliente.",
    imp_sustainability_title: "Práticas e Responsabilidade Ambiental",
    imp_sustainability_desc: "Monitoramento e impacto 100% sustentável para a proteção do ecossistema de Cabinda.",

    // Gallery
    gallery_title: "As Nossas Instalações em Imagens",
    gallery_desc: "Uma vista detalhada e real sobre os nossos campos agrícolas, estufas integradas e infraestrutura fabril na Província de Cabinda.",

    // Investors
    invest_title: "Uma Oportunidade Estratégica para Investidores",
    invest_desc: "Oferecemos retornos financeiros previsíveis assentes num mercado de elevada procura local, com isenções aduaneiras e incentivo estatal ao desenvolvimento agro-industrial.",

    // Contact
    contact_title: "Inicie uma Conversa Connosco",
    contact_form_title: "Candidatura & Propostas de Negócio",
    contact_field_name: "Seu Nome Completo *",
    contact_field_email: "Correio Electrónico *",
    contact_field_phone: "Contacto Telefónico",
    contact_field_company: "Nome da Empresa / Entidade",
    contact_field_profile: "Selecione o seu Perfil de Parceria *",
    contact_field_subject: "Assunto Principal",
    contact_field_message: "Mensagem Detalhada *",
    contact_btn_submit: "Submeter Proposta de Parceria",
    contact_submitting: "A enviar dados comerciais...",
    contact_success_title: "Proposta Submetida com Sucesso!",
    contact_success_desc: "Agradecemos o seu contacto com a CAPOC. O nosso comité irá analisar os dados e responder em até 24 horas úteis.",

    // Partner Modal
    modal_title: "Torne-se Parceiro da CAPOC",
    modal_subtitle: "Preencha a sua ficha de interesse comercial ou de fomento de forma rápida e segura.",
    modal_field_nif: "Número de Identificação Fiscal (NIF) *",
    modal_field_loc: "Província / Localização Geográfica *",
    modal_field_intent: "O que pretende adquirir ou fornecer? *",
    modal_placeholder_intent: "ex. Desejo adquirir óleo de palma bruto refinado / Desejo ser produtor associado de palma...",
    modal_btn_submit: "Enviar Ficha de Candidatura",
    modal_success: "Candidatura de parceria enviada com sucesso! Analisaremos o NIF e dados empresariais nas próximas horas.",

    // general labels
    badge_angola: "Orgulho Angolano • Cabinda",
    btn_close: "Fechar",
  },
  en: {
    nav_about: "About Us",
    nav_project: "The Project",
    nav_products: "Products",
    nav_impact: "Sustainability",
    nav_gallery: "Gallery",
    nav_investors: "Investors",
    nav_contact: "Contact",
    nav_btn_partner: "Become a Partner",

    hero_title: "High Productivity Green Cycles and Refining",
    hero_desc: "Cabinda Palm Oil Corporation (CAPOC) leads standard modern Angolan agro-industry, producing world-class organic oils, glycerin soaps, and sustainable bioenergy.",
    hero_cta_invest: "Investment Opportunities",
    hero_cta_partner: "Join as Partner",
    hero_badge: "100% Produced in Cabinda, Angola",

    about_title: "Our Vision for Growth",
    about_desc: "CAPOC was founded to put Cabinda at the heart of Angola's self-sufficiency in fats and biological derivatives. Combining ecology and technology, we guarantee zero thermal waste.",
    about_metric_ha: "Cultivation Hectares",
    about_metric_cap: "Annual Capacity",
    about_metric_jobs: "Local Jobs",
    about_card_1: "Ecological thermal systems & elevated productivity.",
    about_card_2: "Raw material of botanical excellence.",
    about_card_3: "Fully climatized scientific greenhouses in Cabinda.",

    proj_title: "The Two Strategic Project Verticals",
    proj_desc: "We structured a highly technological and synergistic agro-industrial ecosystem divided into two elementary components feeding Cabinda's progress.",
    proj_tab_agri: "Agricultural Component",
    proj_tab_ind: "Industrial Component",
    proj_operational: "Operational Level of the Matrix",
    proj_growth_title: "Planned Target Production Growth",
    proj_growth_desc: "Scalability stages of palm oil refining in Cabinda (Tons/Year)",
    proj_step_1: "First Operational Phase",
    proj_step_2: "Optimal Peak Expansion",

    imp_title: "Generating Economic & Social Impact",
    imp_desc: "CAPOC operations are designed to create real and lasting value. We do not just extract oil; we are sowing the seeds for resilient progress in rural Angola.",
    imp_sustainability_title: "Green Environmental Practices",
    imp_sustainability_desc: "100% sustainable monitoring and impact for protecting Cabinda's delicate ecosystem.",

    gallery_title: "Our Facilities in Pictures",
    gallery_desc: "A detailed real view of our agricultural fields, integrated automated greenhouses, and factory infrastructure in Cabinda Province.",

    invest_title: "A Strategic Opportunity for Investors",
    invest_desc: "We offer predictable financial returns based on high local demand, customs duty exemptions, and strong state support for agro-industrial growth.",

    contact_title: "Start a Conversation with Us",
    contact_form_title: "Application & Business Proposals",
    contact_field_name: "Your Full Name *",
    contact_field_email: "Email Address *",
    contact_field_phone: "Phone Number",
    contact_field_company: "Company Name / Entity",
    contact_field_profile: "Select your Partnership Profile *",
    contact_field_subject: "Main Subject",
    contact_field_message: "Detailed Message *",
    contact_btn_submit: "Submit Partnership Proposal",
    contact_submitting: "Sending commercial data...",
    contact_success_title: "Proposal Submitted Successfully!",
    contact_success_desc: "Thank you for contacting CAPOC. Our strategic board will review your data and respond within 24 working hours.",

    modal_title: "Become a CAPOC Partner",
    modal_subtitle: "Fill in your commercial or farming interest profile quickly and securely.",
    modal_field_nif: "Tax Identification Number (NIF) *",
    modal_field_loc: "Province / Geographic Location *",
    modal_field_intent: "What do you intend to buy or supply? *",
    modal_placeholder_intent: "e.g., I wish to purchase refined crude palm oil / I want to be an associated grower...",
    modal_btn_submit: "Submit Application Profile",
    modal_success: "Partnership application submitted successfully! We will review your tax ID and corporate profile shortly.",

    badge_angola: "Angolan Pride • Cabinda",
    btn_close: "Close",
  },
  fr: {
    nav_about: "À Propos",
    nav_project: "Le Projet",
    nav_products: "Produits",
    nav_impact: "Durabilité",
    nav_gallery: "Galerie",
    nav_investors: "Investisseurs",
    nav_contact: "Contacts",
    nav_btn_partner: "Devenir Partenaire",

    hero_title: "Cycles Verts à Haute Productivité et Raffinage",
    hero_desc: "La Cabinda Palm Oil Corporation (CAPOC) dirige l'agro-industrie moderne en Angola, produisant des huiles biologiques, des savons et de la bioénergie durables mondiale.",
    hero_cta_invest: "Opportunités d'Investissement",
    hero_cta_partner: "Rejoindre comme Partenaire",
    hero_badge: "100% Produit à Cabinda, Angola",

    about_title: "Notre Vision de Croissance",
    about_desc: "CAPOC est née pour positionner Cabinda au centre de l'autosuffisance en graisses alimentaires de l'Angola. Alliant écologie et technologie, nous garantissons zéro déchet thermique.",
    about_metric_ha: "Hectares de Culture",
    about_metric_cap: "Capacité Annuelle",
    about_metric_jobs: "Emplois Locaux",
    about_card_1: "Systèmes thermiques écologiques et rendement élevé.",
    about_card_2: "Matière première d'excellence botanique.",
    about_card_3: "Serres scientifiques entièrement climatisées à Cabinda.",

    proj_title: "Les Deux Composantes du Projet",
    proj_desc: "Nous avons structuré un écosystème agro-industriel hautement technologique divisé en deux composantes qui alimentent le progrès de Cabinda.",
    proj_tab_agri: "Composante Agricole",
    proj_tab_ind: "Composante Industrielle",
    proj_operational: "Niveau Opérationnel du Réseau",
    proj_growth_title: "Croissance Planifiée de la Production",
    proj_growth_desc: "Phases d'évolutivité du raffinage de l'huile de palme à Cabinda (Tonnes/An)",
    proj_step_1: "Première Phase de Lancement",
    proj_step_2: "Expansion Optimale Majeure",

    imp_title: "Génération d'Impact Économique & Social",
    imp_desc: "Les opérations de la CAPOC sont conçues pour créer une valeur durable. Nous n'extrayons pas seulement de l'huile; nous semons les graines du progrès résilient en Angola.",
    imp_sustainability_title: "Pratiques Écologiques Cruciales",
    imp_sustainability_desc: "Suivi environnemental 100% durable de l'écosystème délicat de Cabinda.",

    gallery_title: "Nos Installations en Images",
    gallery_desc: "Une vue réelle et détaillée de nos champs, de nos serres scientifiques et de notre infrastructure d'usine à Cabinda.",

    invest_title: "Opportunité Stratégique d'Investissement",
    invest_desc: "Nous offrons des rendements financiers prévisibles basés sur une forte demande locale, des exonérations douanières et un soutien étatique fort.",

    contact_title: "Entrez en Contact avec Nous",
    contact_form_title: "Candidature & Propositions Commerciales",
    contact_field_name: "Nom Complet *",
    contact_field_email: "Adresse Email *",
    contact_field_phone: "Téléphone",
    contact_field_company: "Nom de l'Entreprise / Entité",
    contact_field_profile: "Sélectionnez votre Profil de Partenariat *",
    contact_field_subject: "Sujet Principal",
    contact_field_message: "Message Détaillé *",
    contact_btn_submit: "Soumettre la Proposition de Partenariat",
    contact_submitting: "Envoi des données en cours...",
    contact_success_title: "Proposition Soumise avec Succès!",
    contact_success_desc: "Merci d'avoir contacté la CAPOC. Notre comité examinera vos données et vous répondra sous 24 heures ouvrables.",

    modal_title: "Devenir Partenaire CAPOC",
    modal_subtitle: "Remplissez votre dossier d'intérêt commercial en toute sécurité.",
    modal_field_nif: "Numéro de Tva / Identifiant Fiscal (NIF) *",
    modal_field_loc: "Province / Localisation *",
    modal_field_intent: "Que souhaitez-vous acheter ou fournir? *",
    modal_placeholder_intent: "ex. Je souhaite acheter de l'huile de palme raffinée...",
    modal_btn_submit: "Soumettre le Dossier",
    modal_success: "Dossier envoyé avec succès! Nous analyserons vos coordonnées d'entreprise dans les plus brefs délais.",

    badge_angola: "Fierté Angolaise • Cabinda",
    btn_close: "Fermer",
  },
  es: {
    nav_about: "Sobre Nosotros",
    nav_project: "El Proyecto",
    nav_products: "Productos",
    nav_impact: "Sostenibilidad",
    nav_gallery: "Galería",
    nav_investors: "Inversores",
    nav_contact: "Contacto",
    nav_btn_partner: "Ser Socio",

    hero_title: "Ciclos Verdes de Alta Productividad y Refinación",
    hero_desc: "A Cabinda Palm Oil Corporation (CAPOC) lidera el agronegocio angoleño moderno, fabricando aceites orgánicos, jabones purificados y bioenergía verde de nivel global.",
    hero_cta_invest: "Oportunidades de Inversión",
    hero_cta_partner: "Unirse como Socio",
    hero_badge: "100% Producido en Cabinda, Angola",

    about_title: "Nuestra Visión de Desarrollo",
    about_desc: "CAPOC nació para posicionar a Cabinda en el centro de la autosuficiencia de aceites de Angola, alineando ecología con tecnología de punta.",
    about_metric_ha: "Hectáreas Cultivadas",
    about_metric_cap: "Capacidad Anual",
    about_metric_jobs: "Empleos Locales",
    about_card_1: "Sistemas térmicos limpios y alta productividad.",
    about_card_2: "Materia prima botánica selecta.",
    about_card_3: "Invernaderos climatizados automatizados en Cabinda.",

    proj_title: "Las Dos Vertientes del Proyecto",
    proj_desc: "Estructuramos un ecosistema agroindustrial avanzado y sinérgico dividido en dos componentes que impulsan el porvenir local.",
    proj_tab_agri: "Componente Agrícola",
    proj_tab_ind: "Componente Industrial",
    proj_operational: "Nivel Operativo de la Red",
    proj_growth_title: "Crecimiento de Producción Planificado",
    proj_growth_desc: "Fases de escalabilidad de refinación biológica en Cabinda (Toneladas/Año)",
    proj_step_1: "Primera Fase de Arranque",
    proj_step_2: "Expansión Máxima Optimizada",

    imp_title: "Generación de Impacto Social & Económico",
    imp_desc: "Nuestras operaciones agrícolas están creadas para sentar bases sólidas de progreso en el interior de Angola.",
    imp_sustainability_title: "Prácticas de Cuidado Ambiental",
    imp_sustainability_desc: "Seguimiento bioecológico transparente bajo el protocolo cero derrames.",

    gallery_title: "Instalaciones en Imágenes",
    gallery_desc: "Un recorrido visual por nuestros campos, invernaderos mecanizados y complejo de extracción en la Provincia de Cabinda.",

    invest_title: "Oportunidad para Inversores Estratégicos",
    invest_desc: "Retornos financieros robustos en un mercado con alta demanda interior de grasas saludables e incentivos estatales únicos.",

    contact_title: "Inicie una Conversación",
    contact_form_title: "Formulario de Alianza Comercial",
    contact_field_name: "Nombre Completo *",
    contact_field_email: "Correo Electrónico *",
    contact_field_phone: "Teléfono",
    contact_field_company: "Nombre de su Empresa",
    contact_field_profile: "Seleccione su Perfil de Asociación *",
    contact_field_subject: "Asunto Principal",
    contact_field_message: "Mensaje Detallado *",
    contact_btn_submit: "Enviar Propuesta de Asociación",
    contact_submitting: "Enviando datos...",
    contact_success_title: "¡Contacto Enviado con Éxito!",
    contact_success_desc: "Agradecemos su interés en CAPOC. El comité de desarrollo comercial analizará la información y responderá en un plazo máximo de 24 horas hábiles.",

    modal_title: "Convertirse en Socio de CAPOC",
    modal_subtitle: "Rellene su formulario de interés mercantil de forma rápida y confidencial.",
    modal_field_nif: "NIF / Registro Fiscal de su País *",
    modal_field_loc: "Provincia / Ubicación de Operaciones *",
    modal_field_intent: "¿Qué producto desea adquirir o suministrar? *",
    modal_placeholder_intent: "p. ej., Deseo comprar aceite de palma refinado al por mayor...",
    modal_btn_submit: "Enviar Datos de Asociación",
    modal_success: "¡Solicitud registrada correctamente! Analizaremos el perfil fiscal de su empresa en el menor tiempo posible.",

    badge_angola: "Orgullo de Angola • Cabinda",
    btn_close: "Cerrar",
  },
  zh: {
    nav_about: "关于我们",
    nav_project: "项目概览",
    nav_products: "科技产品",
    nav_impact: "可持续发展",
    nav_gallery: "实景画廊",
    nav_investors: "投资者关系",
    nav_contact: "联系我们",
    nav_btn_partner: "成为合作伙伴",

    hero_title: "高产能绿色循环与精密炼制",
    hero_desc: "卡宾达棕榈油公司（CAPOC）引领安哥拉现代化农业，生产符合国际高标准的有机棕榈油、优质皂基及100%绿色生物能。",
    hero_cta_invest: "战略投资机会",
    hero_cta_partner: "加入我们",
    hero_badge: "100% 安哥拉卡宾达本地制造",

    about_title: "我们的发展愿景",
    about_desc: "CAPOC旨在使卡宾达成为安哥拉健康食用油脂及相关衍生品的供应核心。我们秉承科技与生态融合，实现零热损耗生产。",
    about_metric_ha: "种植面积(公顷)",
    about_metric_cap: "年度总产量产能",
    about_metric_jobs: "创造本地岗位",
    about_card_1: "绿色生态热力系统，领先产能。",
    about_card_2: "卓越的植物系遗传学原材料幼苗。",
    about_card_3: "位于卡宾达的高标准科学温控育苗大棚。",

    proj_title: "两大核心双向战略维度",
    proj_desc: "我们构建了高效农业种植与全自动精炼工业的一体化生态圈，为卡宾达的可持续发展带来长期活力。",
    proj_tab_agri: "精密农业种植",
    proj_tab_ind: "全自动精炼工业",
    proj_operational: "矩阵设施运行等级",
    proj_growth_title: "卡宾达炼油厂逐步扩产规划图",
    proj_growth_desc: "未来年产量阶段性规划（吨/年）",
    proj_step_1: "第一阶段量产启动",
    proj_step_2: "全面量产技术峰值",

    imp_title: "深耕本地 创造经济与社会福祉",
    imp_desc: "CAPOC项目不仅开采高品质棕榈油，更为安哥拉内陆地区的自主发展播下希望的种子，与当地社区共同繁荣。",
    imp_sustainability_title: "绿色责任与环评自律",
    imp_sustainability_desc: "实施100%低碳循环，绝不向大自然排放任何未经处理的化学废液。",

    gallery_title: "实景基地风采",
    gallery_desc: "带您直观走进我们位于卡宾达省的生态棕榈林、全空调控制温室及尖端精炼厂区。",

    invest_title: "投资安全与高增长潜力",
    invest_desc: "面对安哥拉本国食用油脂巨大的供需缺口，投资者将享有丰厚、可预测的回报、税收减免以及政府的专项扶持政策。",

    contact_title: "与我们开启商业合作",
    contact_form_title: "商务洽谈与合作方案",
    contact_field_name: "您的姓名 *",
    contact_field_email: "电子邮件 *",
    contact_field_phone: "联系电话",
    contact_field_company: "企业/机构名称",
    contact_field_profile: "选择合作角色 *",
    contact_field_subject: "咨询主题",
    contact_field_message: "合作详情描述 *",
    contact_btn_submit: "提交您的合作方案",
    contact_submitting: "正在为您递交商业数据...",
    contact_success_title: "方案递交成功！",
    contact_success_desc: "感谢您联系CAPOC。我们的项目发展委员会将在24个工作小时内为您发送详细初评估复函。",

    modal_title: "加入CAPOC商业合作圈",
    modal_subtitle: "请安全便捷地填写您及企业的核心采购或供应链供给意愿。",
    modal_field_nif: "企业税号（NIF / 注册号）*",
    modal_field_loc: "企业总部省份 / 地理位置 *",
    modal_field_intent: "您希望采购或供给何种产品/服务？*",
    modal_placeholder_intent: "例如：我司希望大宗采购精炼食用棕榈油 / 申请成为合作种植商等...",
    modal_btn_submit: "确认递交申请",
    modal_success: "申请信息已成功录入！商务部将在审核您的企业税号（NIF）后，派专人与您对接。",

    badge_angola: "安哥拉的自豪 • 卡宾达制造",
    btn_close: "关闭窗口",
  },
  ar: {
    nav_about: "من نحن",
    nav_project: "المشروع",
    nav_products: "المنتجات",
    nav_impact: "الاستدامة",
    nav_gallery: "المعرض",
    nav_investors: "المستثمرون",
    nav_contact: "اتصل بنا",
    nav_btn_partner: "كن شريكاً",

    hero_title: "دورات بيئية عالية الإنتاجية وتكرير متطور",
    hero_desc: "تقود مؤسسة زيت النخيل بكابيندا (CAPOC) الصناعات الزراعية الحديثة في أنغولا، لإنتاج زيوت عضوية ممتازة وصابون غليسرين وطاقة حيوية صديقة للبيئة.",
    hero_cta_invest: "الفرص الاستثمارية المستدامة",
    hero_cta_partner: "انضم إلينا كشريك",
    hero_badge: "منتج برأس مال وطني ١٠٠٪ في مقاطعة كابيندا، أنغولا",

    about_title: "رؤيتنا للتنمية والريادة الغذائية",
    about_desc: "تأسست CAPOC لتكون كابيندا قلب الاكتفاء الذاتي من الزيوت والدهون والمكملات العضوية في أنغولا بشكل يحمي البيئة ووفق أحدث أنظمة تكرير خالية من الانبعاثات الحرارية الضارة.",
    about_metric_ha: "هكتار زراعي نشط",
    about_metric_cap: "القدرة الإنتاجية السنوية",
    about_metric_jobs: "وظيفة للمجتمع المحلي",
    about_card_1: "أنظمة حرارية صديقة للبيئة وإنتاجية مرتفعة للغاية.",
    about_card_2: "بذور ممتازة من النخيل المهجن علمياً.",
    about_card_3: "بيوت زراعية ذكية مجهزة بالكامل ومكيفة في كابيندا.",

    proj_title: "الركيزتان الاستراتيجيتان للمشروع",
    proj_desc: "بنينا نظاماً إنتاجياً متكاملاً يتكون من شق زراعي استثنائي ونشاط صناعي ثقيل يعملان بانسجام تام لنهضة أنغولا البترولية والزراعية.",
    proj_tab_agri: "الشق الزراعي والري",
    proj_tab_ind: "المجمع الصناعي والتكرير",
    proj_operational: "المعدل التشغيلي الحالي لمنشآتنا",
    proj_growth_title: "النمو الإنتاجي المخطط لمصفاة كابيندا",
    proj_growth_desc: "مستويات التدرج في التكرير والصناعة التحويلية (طن سنوي)",
    proj_step_1: "مرحلة الانطلاق الأولى والخط التجريبي",
    proj_step_2: "مرحلة الطاقة القصوى للإنتاج المستهدف",

    imp_title: "صناعة التأثير الاقتصادي والاجتماعي الملموس",
    imp_desc: "تم تصميم كافة مشاريعنا وخططنا لخلق فرص عمل حقيقية وتطوير قدرات المزارعين المستقلين وربط كابيندا بشبكات ري خضراء.",
    imp_sustainability_title: "الالتزام الصارم بالمعايير البيئية",
    imp_sustainability_desc: "حماية البيئة الطبيعية ومنع كلي لأي تصريف كيميائي غير معالج.",

    gallery_title: "منشآتنا وحقولنا في صور",
    gallery_desc: "جولة واقعية داخل مزارعنا الحديثة ومعداتنا المتطورة في قلب مقاطعة كابيندا.",

    invest_title: "فرصة شراكة واعدة للمستثمرين وبنوك التنمية",
    invest_desc: "عوائد مالية آمنة وثابتة في قطاع حيوي متنامي، مع إعفاءات ضريبية وحوافز حكومية استثنائية لشركائنا المؤسسيين.",

    contact_title: "ابدأ محادثة مثمرة معنا اليوم",
    contact_form_title: "طلب شراكة واستفسار تجاري",
    contact_field_name: "الاسم الكامل بالكامل *",
    contact_field_email: "البريد الإلكتروني *",
    contact_field_phone: "رقم الهاتف والرمز الدولي",
    contact_field_company: "اسم الشركة أو الهيئة",
    contact_field_profile: "يرجى تحديد نوع الشراكة المطلوبة *",
    contact_field_subject: "عنوان الطلب الأساسي",
    contact_field_message: "تفاصيل رسالتكم والتفاصيل الفنية *",
    contact_btn_submit: "إرسال طلب الشراكة والبيانات",
    contact_submitting: "جارٍ نقل البيانات والتشفير...",
    contact_success_title: "تم إرسال طلبكم بنجاح!",
    contact_success_desc: "نشكركم على اهتمامكم بـ CAPOC. سيقوم فريقنا بمراجعة طلبكم والرد خلال ٢٤ ساعة عمل.",

    modal_title: "كن شريكاً رسمياً في برنامج CAPOC",
    modal_subtitle: "يرجى تعبئة استمارة التسجيل التجاري بدقة لضمان التواصل الفوري والموثوق.",
    modal_field_nif: "الرقم الضريبي للمنشأة أو السجل التجاري (NIF) *",
    modal_field_loc: "المحافظة أو الموقع الجغرافي للمقر الرئيسي *",
    modal_field_intent: "ما هي المنتجات التي تود الحصول عليها أو توريدها؟ *",
    modal_placeholder_intent: "مثال: أرغب في شراء زيت النخيل المكرر بكميات تجارية لتصنيع الزيوت...",
    modal_btn_submit: "تأكيد وإيداع طلب الشراكة",
    modal_success: "تم تخزين طلبك بنجاح! سيقوم مستشارو الاستثمار بمراجعة السجل الضريبي والتواصل معك فوراً.",

    badge_angola: "صنيع أنغولي نفتخر به • كابيندا",
    btn_close: "إغلاق النافذة",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  const t = (key: string): string => {
    return translations[language][key] || translations["pt"][key] || key;
  };

  const isRtl = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      <div dir={isRtl ? "rtl" : "ltr"} className={isRtl ? "font-serif" : "font-sans"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
