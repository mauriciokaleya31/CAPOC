import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layers, Droplet, Sparkles, CheckCircle, X, ShieldCheck, ShoppingCart, ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface Product {
  id: string;
  name: Record<string, string>;
  category: Record<string, string>;
  shortDesc: Record<string, string>;
  longDesc: Record<string, string>;
  icon: React.ReactNode;
  specs: { label: Record<string, string>; value: Record<string, string> }[];
  accentColor: string;
  gradient: string;
  imageUrl: string;
  badge: Record<string, string>;
}

export default function Products() {
  const { language } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Helper to translate content fields
  const tField = (obj: Record<string, string>) => {
    return obj[language] || obj["pt"] || "";
  };

  const productList: Product[] = [
    {
      id: "oleo-palma",
      name: {
        pt: "Óleo de Palma Refinado",
        en: "Refined Palm Oil",
        fr: "Huile de Palme Raffinée",
        es: "Aceite de Palma Refinado",
        zh: "精炼棕榈油",
        ar: "زيت النخيل المكرر"
      },
      category: {
        pt: "Alimentar",
        en: "Food Grade",
        fr: "Alimentaire",
        es: "Alimentación",
        zh: "食品级",
        ar: "غذائي"
      },
      shortDesc: {
        pt: "Óleo dourado puro de altíssima qualidade e refinação multi-etapas física sem resíduos químicos.",
        en: "Pure golden oil of outstanding quality and physical refining without chemical residues.",
        fr: "Huile dorée pure de qualité exceptionnelle et raffinage physique sans résidus chimiques.",
        es: "Aceite dorado puro de calidad sobresaliente y refinación física sin residuos químicos.",
        zh: "高品质纯正金黄色棕榈油，物理多级精炼，无任何化学残留物。",
        ar: "زيت ذهبي نقي بجودة فائقة وتكرير فيزيائي متعدد المراحل بدون أي مخلفات كيميائية."
      },
      longDesc: {
        pt: "O nosso principal produto alimentar é refinado de forma física para reter os nutrientes naturais essenciais e carotenos protetores. Com uma estabilidade térmica exemplar a altas temperaturas, é ideal para culinária diária, produção de snacks e culinária industrial generalizada.",
        en: "Our flagship food product is physically refined to retain essential natural nutrients and protective carotenes. With exemplary thermal stability at high temperatures, it is ideal for daily cooking, snack production, and generalized industrial culinary applications.",
        fr: "Notre produit alimentaire phare est raffiné physiquement pour conserver les nutriments naturels essentiels et les carotènes protecteurs. Avec une stabilité thermique exemplaire à haute température, il est idéal pour la cuisine quotidienne, la fabrication de snacks et la cuisine industrielle.",
        es: "Nuestro producto alimenticio estrella se refina físicamente para retener los nutrientes naturales esenciales y los carotenos protectores. Con una estabilidad térmica ejemplar a elevadas temperaturas, es ideal para la cocina diaria, snacks e industria gastronómica.",
        zh: "我们的旗舰食品级产品采用先进物理精炼工艺开发，最大程度保留了天然必需营养素和保护性胡萝卜素。在高温下表现出极高的热稳定性，非常适合日常烹饪、休闲食品生产以及大型工业级食品应用。",
        ar: "يتم تكرير منتجنا الغذائي الرئيسي بطريقة فيزيائية للاحتفاظ بالمغذيات الطبيعية الأساسية والكاروتينات العالية. مع استقرار حراري مثالي في درجات الحرارة المرتفعة، يعد خيارًا مثاليًا للطهي اليومي وإنتاج الوجبات الخفيفة والطهي الصناعي."
      },
      icon: <Droplet className="w-5 h-5 text-amber-600" />,
      accentColor: "from-amber-500 to-yellow-600",
      gradient: "from-amber-50/50 via-white to-amber-50/10 border-amber-100/70",
      imageUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/Oleo-de-Palma-Refinado.png",
      badge: {
        pt: "Refinação Ativa",
        en: "Active Refining",
        fr: "Raffinage Actif",
        es: "Refinado Activo",
        zh: "活性精炼",
        ar: "تكرير نشط"
      },
      specs: [
        { 
          label: { pt: "Acidez Máxima", en: "Max Acidity", fr: "Acidité Maximale", es: "Acidez Máxima", zh: "最大酸度", ar: "الحموضة القصوى" }, 
          value: { pt: "0.1% (FFA)", en: "0.1% (FFA)", fr: "0.1% (FFA)", es: "0.1% (FFA)", zh: "0.1% (FFA)", ar: "0.1% (FFA)" } 
        },
        { 
          label: { pt: "Índice de Iodo", en: "Iodine Value", fr: "Indice d'Iode", es: "Índice de Yodo", zh: "碘值", ar: "مؤشر اليود" }, 
          value: { pt: "52 - 58", en: "52 - 58", fr: "52 - 58", es: "52 - 58", zh: "52 - 58", ar: "52 - 58" } 
        },
        { 
          label: { pt: "Embalagens", en: "Packaging", fr: "Emballage", es: "Embalajes", zh: "包装规格", ar: "التعبئة والتغليف" }, 
          value: { pt: "1L, 5L, 20L & Granel", en: "1L, 5L, 20L & Bulk", fr: "1L, 5L, 20L & Vrac", es: "1L, 5L, 20L y Granel", zh: "1L、5L、20L瓶装及散装", ar: "1لتر، 5لتر، 20لتر وسائب" } 
        },
        { 
          label: { pt: "Certificação", en: "Certification", fr: "Certification", es: "Certificación", zh: "体系认证", ar: "الشهادات" }, 
          value: { pt: "FSSC 22000 / ISO", en: "FSSC 22000 / ISO", fr: "FSSC 22000 / ISO", es: "FSSC 22000 / ISO", zh: "FSSC 22000 / ISO", ar: "FSSC 22000 / ISO" } 
        }
      ]
    },
    {
      id: "oleo-palmiste",
      name: {
        pt: "Óleo de Palmiste (PKO)",
        en: "Palm Kernel Oil (PKO)",
        fr: "Huile de Palmiste (PKO)",
        es: "Aceite de Palmiste (PKO)",
        zh: "棕榈仁油 (PKO)",
        ar: "زيت النخيل الخام (PKO)"
      },
      category: {
        pt: "Industrial & Cosmética",
        en: "Industrial & Cosmetics",
        fr: "Industriel & Cosmétique",
        es: "Industrial y Cosmética",
        zh: "工业与化妆品级",
        ar: "صناعي وتجميلي"
      },
      shortDesc: {
        pt: "Extraído a frio da amêndoa interna (caroço) do fruto da palmeira Tenera, precioso para cosmética.",
        en: "Cold-extracted from the inner seed kernel of the Tenera palm fruit, highly prized for specialized cosmetics.",
        fr: "Extrait à froid de l'amande interne du fruit du palmier Tenera, extrêmement précieux pour les cosmétiques.",
        es: "Extraído en frío de la almendra interna del fruto de la palmera Tenera, muy apreciado en cosmética.",
        zh: "从柔嫩Tenera棕榈果实的内侧果仁冷榨提取而成，是高端护肤、洗化工业不可或缺的珍贵原料。",
        ar: "مستخلص على البارد من النواة الداخلية لثمرة نخيل تينيرا، قيم للغاية لمستحضرات التجميل الخاصة."
      },
      longDesc: {
        pt: "Rico em ácido láurico, o Óleo de Palmiste (PKO) da CAPOC destaca-se pela sua pureza e consistência sólida à temperatura ambiente. É um recurso crítico para indústrias nacionais fornecedoras de cosméticos de luxo, sabões finos de higiene e produtos oleoquímicos sob medida.",
        en: "Rich in lauric acid, CAPOC's Palm Kernel Oil (PKO) stands out for its high purity and solid consistency at room temperature. It is a critical formulation resource for luxury cosmetic makers, delicate toilet soaps, and specialized oleochemical derivatives.",
        fr: "Riche en acide laurique, l'Huile de Palmiste (PKO) de CAPOC se distingue par sa grande pureté et sa consistance solide à température ambiante. C'est un composant essentiel pour les cosmétiques de luxe, les savons fins et les produits oléochimiques personnalisés.",
        es: "Rico en ácido láurico, el Aceite de Palmiste (PKO) de CAPOC destaca por su pureza y consistencia sólida a temperatura ambiente. Es un insumo crítico para cosmética premium, jabones finos e industrias oleoquímicas.",
        zh: "棕榈仁油（PKO）富含高效月桂酸，在常温下呈现稳定的半固体物理形态。CAPOC所产出的棕榈仁油纯度极高，是高端化妆品配方、高档洗手香皂以及各类定制精密油脂化学衍生物生产的核心基石原料。",
        ar: "يتميز زيت نواة النخيل (PKO) من كابوك بغناه بحمض الغار، وتفرده بنقاوته الشديدة وقوامه الصلب في درجة حرارة الغرفة. ويعّد موردًا حيويًا لمصنعي مستحضرات التجميل الفاخرة، والصابون الناعم."
      },
      icon: <Layers className="w-5 h-5 text-[#A89558]" />,
      accentColor: "from-emerald-500 to-teal-600",
      gradient: "from-emerald-50/50 via-white to-emerald-50/10 border-emerald-100/70",
      imageUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/Oleo-de-Palmiste.png",
      badge: {
        pt: "Prensagem a Frio",
        en: "Cold Pressed",
        fr: "Pressé à Froid",
        es: "Prensado en Frío",
        zh: "机械冷榨",
        ar: "عصر على البارد"
      },
      specs: [
        { 
          label: { pt: "Método Extração", en: "Extraction", fr: "Extraction", es: "Método Extracción", zh: "提取工艺", ar: "طريقة الاستخلاص" }, 
          value: { pt: "Mecânica Física", en: "Physical Pressing", fr: "Pression Physique", es: "Prensado Físico", zh: "纯物理螺旋挤压", ar: "بسق ميكانيكي فيزيائي" } 
        },
        { 
          label: { pt: "Ácido Láurico", en: "Lauric Acid", fr: "Acide Laurique", es: "Ácido Láurico", zh: "月桂酸含量", ar: "حمض الغار" }, 
          value: { pt: "45% - 50%", en: "45% - 50%", fr: "45% - 50%", es: "45% - 50%", zh: "45% - 50%", ar: "45% - 50%" } 
        },
        { 
          label: { pt: "Aplicações", en: "Applications", fr: "Applications", es: "Aplicaciones", zh: "行业用途", ar: "الاستخدامات" }, 
          value: { pt: "Cosmética & Sabões", en: "Cosmetics & Soaps", fr: "Cosmétique & Savons", es: "Cosmética y Jabón", zh: "精细洗护、护肤基底", ar: "مستحضرات التجميل والصابون" } 
        },
        { 
          label: { pt: "Cor (Líquido)", en: "Color (Liquid)", fr: "Couleur (Liquide)", es: "Color (Líquido)", zh: "液体色泽", ar: "مستوى اللون" }, 
          value: { pt: "Claro Transparente", en: "Clear Transparent", fr: "Clair Transparent", es: "Claro Transparente", zh: "微黄透明液体", ar: "نقي شفاف" } 
        }
      ]
    },
    {
      id: "margarina",
      name: {
        pt: "Margarina Alimentar",
        en: "Food Margarine",
        fr: "Margarine Alimentaire",
        es: "Margarina Alimentaria",
        zh: "食用人造黄油 / 玛琪琳",
        ar: "مارجرين غذائي"
      },
      category: {
        pt: "Alimentar",
        en: "Food Grade",
        fr: "Alimentaire",
        es: "Alimentación",
        zh: "食品级",
        ar: "غذائي"
      },
      shortDesc: {
        pt: "Cremosidade perfeita e rica em vitaminas A e D para a mesa e padarias angolanas.",
        en: "Perfect creaminess and rich in Vitamins A & D for Angolan breakfast tables and bakeries.",
        fr: "Onctuosité parfaite et riche en vitamines A & D pour le petit-déjeuner et les boulangeries.",
        es: "Cremosidad perfecta y rica en vitaminas A y D para la mesa y panaderías de Angola.",
        zh: "拥有完美的细腻涂抹质感，富含维生素A和D，深度契合安哥拉家庭早餐与烘焙西点产业的需求。",
        ar: "قوام كريمي رائع غني بفيتامين أ و د مخصص للمائدة والمخابز في أنغولا."
      },
      longDesc: {
        pt: "Desenvolvida com óleos vegetais de palma premium selecionados, a Margarina CAPOC traz o melhor em termos de sabor, consistência e estabilidade. Perfeita tanto para a mesa do pequeno-almoço das famílias angolanas quanto para confeitarias industriais de pão e pastelaria de larga escala.",
        en: "Developed with premium selected palm vegetable oils, CAPOC Margarine delivers unmatched taste, smooth consistency, and temperature stability. Perfect for the traditional breakfast of Angolan households and for large-scale bakery and confectionery structures.",
        fr: "Développée avec des huiles végétales de palme premium sélectionnées, la margarine CAPOC offre un goût incomparable, une consistance onctueuse et une excellente stabilité. Idéale pour le petit-déjeuner des ménages ou les boulangeries industrielles.",
        es: "Formulada con aceites vegetales seleccionados de palma premium, nuestra margarina ofrece excelente sabor, consistencia y estabilidad térmica. Perfecta para el desayuno familiar angoleño y repostería industrial.",
        zh: "采用精选的CAPOC优质植物棕榈油脂配制而成，在风味、稳定物理质感和焙烤热延展性方面达到行业顶尖标准。既能完美胜任安哥拉家庭早餐桌的日常涂抹吐司，也全面支持大型工业烘焙坊、松软面包及西点制作。",
        ar: "تم تطوير مارجرين كابوك بزيوت نخيل نباتية ممتازة مختارة لتمنح أفضل طعم وقوام واستقرار. مناسبة لمائدة الفطور العائلية ومصانع المخبوزات والحلويات الكبيرة."
      },
      icon: <Sparkles className="w-5 h-5 text-yellow-600" />,
      accentColor: "from-yellow-400 to-amber-500",
      gradient: "from-yellow-50/50 via-white to-yellow-50/10 border-yellow-100/70",
      imageUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/Margarina-Alimentar.png",
      badge: {
        pt: "Cremosa & Nutritiva",
        en: "Rich & Creamy",
        fr: "Riche & Onctueux",
        es: "Cremosa y Nutritiva",
        zh: "醇香高营养",
        ar: "كريمي ومغذي"
      },
      specs: [
        { 
          label: { pt: "Matéria Gorda", en: "Fat Content", fr: "Teneur en Gras", es: "Materia Grasa", zh: "植物脂肪含量", ar: "نسبة الدهون" }, 
          value: { pt: "80% Base Vegetal", en: "80% Vegetable Base", fr: "80% Base Végétale", es: "80% Base Vegetal", zh: "80% 优质植物基", ar: "80% قاعدة نباتية" } 
        },
        { 
          label: { pt: "Enriquecimento", en: "Enrichment", fr: "Enrichi en", es: "Enriquecida", zh: "营养强化配方", ar: "العناصر المضافة" }, 
          value: { pt: "Vitamina A, D, E", en: "Vitamin A, D, E", fr: "Vitamine A, D, E", es: "Vitamina A, D, E", zh: "维生素A、D、E", ar: "فيتامين أ، د، هـ" } 
        },
        { 
          label: { pt: "Consistência", en: "Texture", fr: "Consistance", es: "Consistencia", zh: "物理形态", ar: "القوام والتماسك" }, 
          value: { pt: "Altamente Plástica", en: "Highly Plastic Flow", fr: "Hautement Plastique", es: "Plástica de Fácil Uso", zh: "良好延展性、易常温涂抹", ar: "لدنة ممتازة" } 
        },
        { 
          label: { pt: "Conservação", en: "Storage", fr: "Stockage", es: "Conservación", zh: "储运环境", ar: "طريقة الحفظ" }, 
          value: { pt: "Refrigerado (2°C-10°C)", en: "Refrigerated (2°C-10°C)", fr: "Réfrigéré (2°C-10°C)", es: "Refrigerado (2°C-10°C)", zh: "冷藏环境 2°C - 10°C", ar: "مبرد (2 إلى 10 درجات)" } 
        }
      ]
    },
    {
      id: "oleo-vegetal",
      name: {
        pt: "Óleo Vegetal de Mesa",
        en: "Vegetable Cooking Oil",
        fr: "Huile Végétale de Table",
        es: "Aceite Vegetal de Mesa",
        zh: "精制轻身无味植物食用油",
        ar: "زيت مائدة نباتي"
      },
      category: {
        pt: "Alimentar",
        en: "Food Grade",
        fr: "Alimentaire",
        es: "Alimentación",
        zh: "食品级",
        ar: "غذائي"
      },
      shortDesc: {
        pt: "Totalmente desodorizado, filtrado quatro vezes para máxima leveza em saladas e frituras.",
        en: "Completely deodorized, quadruple-filtered for maximum lightness in salads and baking.",
        fr: "Entièrement désodorisée, filtrée quatre fois pour une légèreté maximale en friture.",
        es: "Totalmente desodorizado, filtrado cuatro veces para máxima ligereza en frituras y ensaladas.",
        zh: "历经由国际精炼线组成的四道全物理深度过滤阶段，彻底脱色脱酸脱臭，质地极其清亮透澈，口感无杂质、无异味。",
        ar: "منزوع الرائحة بالكامل، ومفلتر أربع مرات لتحقيق أقصى درجات الخفة في السلطات والقلي."
      },
      longDesc: {
        pt: "O Óleo Vegetal de Mesa CAPOC passa por filtros físicos profundos para garantir neutralidade total de aroma e cor translúcida de pureza. É a escolha saudável das cozinhas e restaurantes de Angola, focado na leveza digestiva absoluta e qualidade alimentar do dia a dia.",
        en: "CAPOC Vegetable Table Oil undergoes deep physical filtrations to ensure total aroma neutrality and translucent, crystal-clear purity. It is the healthy choice for Angolan homes and restaurants, focusing on light digestion and everyday food quality.",
        fr: "L'huile végétale de table CAPOC subit des filtrations physiques intenses pour assurer une neutralité totale des arômes et une couleur translucide pure. C'est le choix sain pour les familles et restaurants d'Angola.",
        es: "El Aceite de Mesa CAPOC pasa por una filtración física profunda para garantizar absoluta neutralidad de aroma y claridad traslúcida. La opción saludable e ideal de la cocina angoleña diaria.",
        zh: "CAPOC精制植物自产食用油使用专业物理精密碳虑网和低温吸附技术，完全消除任何重味和粘质，确保油体水晶般通透澄碧。在油炸、急火快炒以及制作佐餐冷盘色拉时拥有不易起烟的特性。深受安哥拉家庭和高档餐厅的喜爱。",
        ar: "يخضع زيت المائدة النباتي من كابوك لعمليات تصفية فيزيائية عميقة لضمان حيوية كاملة وخلوه من الروائح مع لون شفاف نقي. الخيار الصحي للمطابخ والمطاعم في أنغولا لجودة فائقة وخفة ممتازة."
      },
      icon: <Droplet className="w-5 h-5 text-amber-500" />,
      accentColor: "from-amber-400 to-yellow-500",
      gradient: "from-amber-50/30 via-white to-amber-50/5 border-amber-100/60",
      imageUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/Oleo-Vegetal-de-Mesa.png",
      badge: {
        pt: "Quod-Filtrado",
        en: "4x Filtered",
        fr: "Filtré 4x",
        es: "Filtrado 4x",
        zh: "四级精密过滤",
        ar: "مفلتر 4 مرات"
      },
      specs: [
        { 
          label: { pt: "Triglicéridos", en: "Triglycerides", fr: "Triglycérides", es: "Triglicéridos", zh: "纯甘油三酯含量", ar: "ثلاثي الغليسريد" }, 
          value: { pt: "99.9% Puros", en: "99.9% Pure", fr: "99.9% Purs", es: "99.9% Puros", zh: "99.9% 极致高纯", ar: "99.9% نقي" } 
        },
        { 
          label: { pt: "Ponto de Fumo", en: "Smoke Point", fr: "Point de Fumée", es: "Punto de Humo", zh: "起烟点数值", ar: "درجة الاحتراق" }, 
          value: { pt: "Elevado (~230°C)", en: "High (~230°C)", fr: "Élevé (~230°C)", es: "Elevado (~230°C)", zh: "安全耐高温 (~230°C)", ar: "مرتفع جدا (~230°C)" } 
        },
        { 
          label: { pt: "Colesterol", en: "Cholesterol", fr: "Cholestérol", es: "Colesterol", zh: "动物胆固醇", ar: "الكوليسترول" }, 
          value: { pt: "0% (Livre de Isómeros)", en: "0% (Isomer Free)", fr: "0% / Sans Isomères", es: "0% / Libre de Isómeros", zh: "0% 零添加防腐和任何异构体", ar: "0% خالي تماما" } 
        },
        { 
          label: { pt: "Apresentação", en: "Format", fr: "Conditionnement", es: "Presentación", zh: "市售规格", ar: "أحجام التعبئة" }, 
          value: { pt: "PET 1L, Garrafão 5L", en: "PET 1L, Bottle 5L", fr: "PET 1L, Bouteille 5L", es: "PET 1L, Garrafa 5L", zh: "PET食品级 1L量贩、5L巨容量", ar: "1لتر عبوة و 5لتر جالون" } 
        }
      ]
    },
    {
      id: "sabao-industrial",
      name: {
        pt: "Sabão Industrial Azul & Vermelho",
        en: "Traditional Industrial Soap",
        fr: "Savon Industriel Bleu & Rouge",
        es: "Jabón Industrial Azul y Rojo",
        zh: "蓝红双色工业及家庭通用肥皂 / 皂块",
        ar: "صابون غسيل صناعي أزرق وأحمر"
      },
      category: {
        pt: "Limpeza & Saneamento",
        en: "Cleaning & Sanitation",
        fr: "Nettoyage & Assainissement",
        es: "Limpieza y Saneamiento",
        zh: "重垢清洁与民用级",
        ar: "النظافة والصرف الصحي"
      },
      shortDesc: {
        pt: "De alta durabilidade, consistência firme e elevado poder saponificador para as famílias angolanas.",
        en: "High durability, solid consistency, and superior saponification power for Angolan scrubbing and laundry.",
        fr: "Grande durabilité, consistance ferme et pouvoir de saponification supérieur pour la lessive en Angola.",
        es: "De gran durabilidad, consistencia compacta y excelente poder saponificador para los hogares.",
        zh: "极耐泡、不易崩裂、在粗水质中仍可激发出丰沛乳脂气泡，拥有超强力的去重油污及除污渍能力。",
        ar: "متانة عالية، وقوام متماسك، وقدرة تنظيف جبارة وموثوقة لغسيل وحماية الأسر الأنغولية."
      },
      longDesc: {
        pt: "Nosso autêntico sabão azul e vermelho tradicional é elaborado a partir das frações finais saponificadas de palma. Oferece espuma rica de longa duração, facilidade de lavagem e altíssima eficácia para higiene de têxteis pesados ou higienização geral de grandes infraestruturas.",
        en: "Our authentic blue and red traditional soap bar is formulated using saponified high-quality palm olein fractions. It produces solid long-lasting lather, rinses effortlessly, and proves extremely productive for heavy laundry, rough fabrics, and general infrastructure sanitizing.",
        fr: "Notre savon traditionnel authentique bleu et rouge est fabriqué à partir de fractions saponifiées de palme. Il offre une mousse riche et durable, un rinçage facile et une grande efficacité pour les textiles ou l'entretien général.",
        es: "El auténtico jabón tradicional azul y rojo está formulado con fracciones grasas saponificadas de palma. Genera abundante espuma persistente, es fácil de aclarar y extraordinariamente eficaz para textiles rústicos y lavado general.",
        zh: "我们沿用经典工艺配方生产的双色（传统蓝色与粉红色/红色）硬质多功能大皂条，由高饱和度的皂化棕榈提取。结构非常紧实耐用。能产生细腻而稳定的清洁泡沫，易于清水漂洗，对于衣物领口頑固汗渍、工厂油腻重污、大型工业地面设备的除污拥有令人惊喜的高效性能。",
        ar: "صابوننا الأزرق والأحمر التقليدي الأصلي تم تركيبه باستخدام دهون النخيل الممتازة بعد صبنتها. ينتج رغوة سميكة تدوم طويلاً، ويشطف دون عناء، ويثبت كفاءته البالغة في غسيل الأقمشة الكبيرة وتنظيف المرافق العمومية."
      },
      icon: <ShieldCheck className="w-5 h-5 text-blue-600" />,
      accentColor: "from-blue-500 to-sky-600",
      gradient: "from-blue-50/50 via-white to-blue-50/10 border-blue-200/70",
      imageUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/Sabao-Industrial-Azul-Vermelho.png",
      badge: {
        pt: "Alta Biodegradabilidade",
        en: "Highly Biodegradable",
        fr: "Hautement Biodégradable",
        es: "Biodegradable 100%",
        zh: "全生态绿色降解",
        ar: "تكسير حيوي متكامل"
      },
      specs: [
        { 
          label: { pt: "Massa do Bloco", en: "Block Mass", fr: "Poids du Bloc", es: "Masa del Bloque", zh: "单块规格", ar: "الوزن الوزني للشريط" }, 
          value: { pt: "200g, 400g, 1Kg Barras", en: "200g, 400g, 1Kg Bars", fr: "200g, 400g, Bars de 1Kg", es: "200g, 400g, 1Kg Barras", zh: "200克、400克及1公斤重巨盘", ar: "200 غرام، 400 غرام، 1 كلغ" } 
        },
        { 
          label: { pt: "Matéria Gorda", en: "Total Fatty Matter", fr: "Matière Grasse (TFM)", es: "Materia Activa TFM", zh: "总脂肪物含量 (TFM)", ar: "نسبة المادة الدهنية النشطة" }, 
          value: { pt: "Superior a 62%", en: "Above 62% TFM", fr: "Supérieur à 62% TFM", es: "Superior a 62% TFM", zh: "高比例 (TFM > 62%)", ar: "أكثر من 62% TFM" } 
        },
        { 
          label: { pt: "Ação de Espuma", en: "Foam Quality", fr: "Qualité de Mousse", es: "Capacidad Espuma", zh: "发泡特征", ar: "نوعية الرغوة" }, 
          value: { pt: "Rica em águas mineralizadas", en: "Rich even in hard waters", fr: "Riche en eaux dures", es: "Estable en aguas duras", zh: "硬水、深井咸水中仍能高泡", ar: "كثيفة حتى في المياه الكلسية" } 
        },
        { 
          label: { pt: "Ecológico", en: "Eco Friendly", fr: "Écologique", es: "Ecológico", zh: "生态属性", ar: "صديق للبيئة" }, 
          value: { pt: "100% Amigo do Ambiente", en: "100% Eco-neutral", fr: "100% Éco-neutral", es: "100% Amigo del Ambiente", zh: "不留残留，环境零担负", ar: "100% متوافق بيئيا" } 
        }
      ]
    },
    {
      id: "sabonetes",
      name: {
        pt: "Sabonetes de Higiene Suave",
        en: "Glycerin Toilet Soaps",
        fr: "Savons Doux Corporels",
        es: "Jabones de Tocador Suaves",
        zh: "加香丝柔甘油护肤香皂 / 柔肤洗脸皂",
        ar: "صابون تواليت ناعم بالجلسرين"
      },
      category: {
        pt: "Higiene Pessoal",
        en: "Personal Care",
        fr: "Hygiène Personnelle",
        es: "Higiene Personal",
        zh: "个护洗消级",
        ar: "العناية الشخصية"
      },
      shortDesc: {
        pt: "Com extratos de óleos suaves e glicerina natural de palma, ideal para proteção macia epidérmica.",
        en: "Infused with smooth palm kernel oil and natural botanical glycerin, ideal for delicate skin protection.",
        fr: "Enrichi en huile de palmiste douce et glycérine de palme naturelle, idéal pour la protection cutanée.",
        es: "Enriquecido con aceites botánicos suaves y glicerina de palma para una protección dermo-suave.",
        zh: "含纯植物高保湿甘油及温和油脂分子。洗后皮肤水润、杜绝干涩，散发天然热带草本的清新幽香。",
        ar: "غني بخلاصات الجلسرين النباتي وزيت نواة النخيل اللطيف، مثالي لحماية الجلد الرقيق."
      },
      longDesc: {
        pt: "Os sabonetes corporais finos da CAPOC unem o poder nutritivo da vitamina E natural do óleo de palma à glicerina protetora purificada. Desenvolvidos especificamente para cuidar de peles delicadas, limpam de modo suave mantendo a hidratação e deixando fragrâncias refrescantes de campo.",
        en: "CAPOC delicate toilet soaps blend the antioxidant power of natural Vitamin E from palm extracts with skin-friendly purified vegetable glycerin. Dermatologically conceived for tender skin profiles, they cleanse without stripping, keeping natural moisture while leaving a mild floral scent.",
        fr: "Les savons corporels fins de CAPOC allient la vitamine E nourrissante de l'huile de palme à la glycérine protectrice purifiée. Développés pour les peaux délicates, ils nettoient en douceur tout en maintenant l'hydratation de la barrière cutanée.",
        es: "Nuestros delicados jabones de tocador combinan el poder nutritivo de la vitamina E natural de la palmera con glicerina hidratante protectora. Formulados especialmente para pieles sensibles, limpian con extrema delicadeza.",
        zh: "CAPOC精密个人美容香皂完美融合了提取自油棕的丰富天然维生素E（抗氧化屏障）与温和精炼草本甘油。专为呵护脆弱敏感娇嫩肌肤而研制，轻柔细密的起泡能带走皮脂粉尘，与此同时锁住表皮原有水分，持久散发沁人心脾的高雅芬芳。",
        ar: "يجمع صابون التواليت الراقي من كابوك القوة المغذية لفيتامين هـ الطبيعي المستخلص من النخيل والجلسرين الواقي المكرر. مصمم لحماية البشرة الحساسة وتنظيفها بلطف مع العناية الرطبة."
      },
      icon: <Sparkles className="w-5 h-5 text-rose-600" />,
      accentColor: "from-rose-500 to-pink-600",
      gradient: "from-rose-50/50 via-white to-rose-50/10 border-rose-100/70",
      imageUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/Sabonetes-de-Higiene-Suave.png",
      badge: {
        pt: "pH Neutro da Pele",
        en: "Dermaceutic pH",
        fr: "pH Neutre cutané",
        es: "pH Neutro Corporal",
        zh: "亲肤中性温和pH",
        ar: "درجة حموضة متوازنة"
      },
      specs: [
        { 
          label: { pt: "pH Fisiológico", en: "Physiological pH", fr: "pH Physiologique", es: "pH Fisiológico", zh: "生理酸碱值", ar: "مستوى pH الفسيولوجي" }, 
          value: { pt: "Equilibrado (Derme)", en: "Balanced for sensitive", fr: "Équilibré (Peau douce)", es: "Balanceado Dermo-Seguro", zh: "温和贴合健康常态", ar: "متوازن ومحايد تماما" } 
        },
        { 
          label: { pt: "Componente Ativo", en: "Key Ingredient", fr: "Composant Clé", es: "Ingrediente Principal", zh: "核心保湿基底", ar: "المكون النشط" }, 
          value: { pt: "Glicerina Vegetal Pura", en: "Pure Botanical Glycerin", fr: "Glycérine Végétale Pure", es: "Glicerina Natural Vegetal", zh: "99.2%高纯天然高保湿甘油", ar: "جلسرين نباتي نقي" } 
        },
        { 
          label: { pt: "Massa Comercial", en: "Commercial Weight", fr: "Masse Commerciale", es: "Peso Comercial", zh: "克重型号", ar: "الوزن التجاري" }, 
          value: { pt: "90g e 125g Soluções", en: "90g & 125g Formats", fr: "90g et 125g Formats", es: "90g e 125g Tamaños", zh: "便携装90克、饱满装125克", ar: "90 غرام و 125 غرام" } 
        },
        { 
          label: { pt: "Embrulho", en: "Wrapping", fr: "Emballage", es: "Envoltura", zh: "包材物料", ar: "التغليف الخارجي" }, 
          value: { pt: "Papel Reciclável Matte", en: "Recyclable Matte Paper", fr: "Papel Recyclable Mat", es: "Papel Reciclable Premium", zh: "全降解磨砂纸质艺术封套", ar: "ورق مطفي قابل لإعادة التدوير" } 
        }
      ]
    }
  ];

  // Structural Translations inside the Component
  const labels: Record<string, Record<string, string>> = {
    section_sub: {
      pt: "Nossos Produtos",
      en: "Our Products",
      fr: "Nos Produits",
      es: "Nuestros Productos",
      zh: "产品体系介绍",
      ar: "منتجاتنا الفريدة"
    },
    section_title: {
      pt: "Excelência Agro-Industrial de Cabinda",
      en: "Agro-Industrial Excellence of Cabinda",
      fr: "Excellence Agro-Industrielle de Cabinda",
      es: "Excelencia Agroindustrial de Cabinda",
      zh: "源自安哥拉卡宾达的卓越农工业成果",
      ar: "التميز الزراعي الصناعي في كابيندا"
    },
    section_desc: {
      pt: "Desenvolvemos uma gama integrada de alimentos essenciais e produtos de higiene de alta utilidade, atendendo regras estritas de segurança alimentar e purificação biológica.",
      en: "We process an integrated lineup of essential food products and high-utility hygiene derivatives, conforming to international food-safety acts and high biofiltration parameters.",
      fr: "Nous développons une gamme intégrée de produits alimentaires essentiels et d'hygiène de grande utilité, répondant à des normes strictes de sécurité alimentaire et biologique.",
      es: "Desarrollamos una oferta integrada de alimentos de primera necesidad e higiene, cumpliendo rigurosas directrices de sanidad alimentaria y pureza biológica.",
      zh: "我们自主研发并高效提炼一整套包含国民必需食品调料及重型家庭消毒洗消产品的完整体系。全线贯彻严苛的环境生物纯净化监控与食品安全质检标准。",
      ar: "نحن ننتج مجموعة متكاملة من الأغذية الأساسية والمشتقات الصحية عالية الكفاءة، مع الامتثال الصارم لأحكام سلامة الغذاء والمعايير الحيوية العالمية."
    },
    btn_details: {
      pt: "Saiba Mais",
      en: "Learn More",
      fr: "En savoir plus",
      es: "Saber Más",
      zh: "查阅详情 Ficha",
      ar: "اكتشف المزيد"
    },
    brand_purity: {
      pt: "Refinação Pura CAPOC",
      en: "CAPOC Ultra-Pure Refining",
      fr: "Raffinage Pur CAPOC",
      es: "Refinación Pura CAPOC",
      zh: "CAPOC 精密绿色纯化学提纯",
      ar: "كابوك تكرير فائق النقاوة"
    },
    modal_title: {
      pt: "Ficha Técnica Completa",
      en: "Technical Specification Sheet",
      fr: "Fiche Technique Complète",
      es: "Ficha Técnica Comercial",
      zh: "官方高精密产品技术数据书",
      ar: "ورقة المواصفات الفنية الكاملة"
    },
    modal_desc_label: {
      pt: "Descrição Detalhada do Produto",
      en: "Detailed Product Breakdown",
      fr: "Description Détaillée du Produit",
      es: "Descripción Comercial Detallada",
      zh: "产品宏观物料与价值综述",
      ar: "الوصف التفصيلي والفوائد"
    },
    modal_specs_label: {
      pt: "Especificações Físico-Químicas & Logística",
      en: "Physicochemical & Logistical Standards",
      fr: "Normes Physico-Chimiques & Logistique",
      es: "Estándares Fisicoquímicos y Logística",
      zh: "理化化学指标及商业托运规格",
      ar: "المعايير الفيزيائية الكيميائية واللوجستيات"
    },
    eco_seal_title: {
      pt: "Garantia de Origem Sustentável:",
      en: "Sustainable Origin Pledge:",
      fr: "Garantie d'Origine Durable:",
      es: "Compromiso de Origen Sostenible:",
      zh: "可持续与零生态损耗准则：",
      ar: "عهد ومصداقية المصدر المستدام:"
    },
    eco_seal_text: {
      pt: "Os derivados do óleo de palma da CAPOC são isentos de desflorestação hídrica e respeitam integralmente os direitos das populações rurais de Cabinda, Angola.",
      en: "CAPOC palm oil derivatives are strictly deforestation-free, preserving rural waters and integrating local populations in Cabinda, Angola.",
      fr: "Les dérivés de palme CAPOC sont sans déforestation, préservant les zones hydriques et s'intégrant éthiquement avec les populations locales de Cabinda.",
      es: "Todos los productos CAPOC cuentan con trazabilidad plena exenta de deforestación, aportando al desarrollo social e hidrológico de Cabinda, Angola.",
      zh: "CAPOC 旗下的所有棕榈油脂提取物均在极具生态环保的林区闭环深加工。严控水源和森林滥垦，零度碳林流失，全面吸纳和造福安哥拉卡宾达当地大山里的农户。",
      ar: "إن مشتقات زيت النخيل من كابوك خالية تمامًا من أي تدمير للغابات، مع الحفاظ الكامل على مياه الغابات والمجتمعات الريفية في كابيندا، أنغولا."
    },
    btn_close: {
      pt: "Fechar Janela",
      en: "Close Window",
      fr: "Fermer la fenêtre",
      es: "Cerrar Ventana",
      zh: "关闭视窗",
      ar: "إغلاق النافذة"
    },
    btn_quote: {
      pt: "Solicitar Cotação Comercial",
      en: "Request Commercial Quote",
      fr: "Demander un devis",
      es: "Solicitar Cotización",
      zh: "立即沟通与提出报价咨询",
      ar: "طلب عرض أسعار تجاري"
    }
  };

  return (
    <section className="py-24 bg-[#FAF9F5] border-y border-[#A89558]/15 relative" id="produtos">
      {/* Decorative organic vector elements in background to look gorgeous */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#002016]/3 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#A89558]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold text-[#A89558] uppercase tracking-widest bg-[#002016]/5 border border-[#A89558]/20 px-4 py-1.5 rounded-full inline-block">
            {tField(labels.section_sub)}
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#002016] tracking-tight">
            {tField(labels.section_title)}
          </h2>
          <div className="w-16 h-1 bg-[#A89558] mx-auto mt-5 rounded-full" />
          <p className="mt-5 text-base text-slate-600 font-light leading-relaxed">
            {tField(labels.section_desc)}
          </p>
        </div>

        {/* Products Grid with magnificent animated borders and images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productList.map((prod) => (
            <motion.div
              key={prod.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-[32px] border border-[#EBE6DD] hover:border-emerald-800 transition-all duration-500 flex flex-col justify-between h-full group shadow-[0_4px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_30px_60px_rgba(0,32,22,0.06)] p-6"
              id={`prod-card-${prod.id}`}
            >
              <div>
                {/* Visual Image Container - beautiful soft vignette display plate with premium warm background and glowing aura */}
                <div className="relative h-72 w-full flex items-center justify-center p-8 bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F1] to-[#EFEADA] rounded-[24px] overflow-hidden transition-all duration-500 border border-[#D4C3A3]/35 group-hover:border-emerald-800/20">
                  
                  {/* Subtle brand palm organic leaf background overlay */}
                  <div className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-[0.08] pointer-events-none" style={{ backgroundImage: `url('https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.43.jpeg')` }} />
                  
                  {/* Elegant premium emerald glowing aura behind product */}
                  <div className="absolute w-48 h-48 bg-emerald-600/[0.08] rounded-full blur-2xl group-hover:scale-135 transition-transform duration-700 pointer-events-none" />
                  
                  {/* Product PNG image - beautifully showcased with rich natural colors preserved */}
                  <img
                    src={prod.imageUrl}
                    alt={tField(prod.name)}
                    className="h-full w-auto object-contain relative z-10 pointer-events-none select-none transition-all duration-500 ease-out group-hover:scale-105 filter drop-shadow-[0_16px_32px_rgba(4,47,31,0.15)]"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Text Metadata Panel */}
                <div className="px-1 py-5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#A89558] bg-[#FAF7F0] border border-[#D4C3A3]/30 py-1 px-3 rounded-md inline-block mb-3.5">
                    {tField(prod.category)}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#002016] tracking-tight group-hover:text-emerald-800 transition-colors duration-300 leading-snug">
                    {tField(prod.name)}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 font-light leading-relaxed min-h-[72px]">
                    {tField(prod.shortDesc)}
                  </p>
                </div>
              </div>

              {/* Bottom Card Controls Section */}
              <div className="px-1 pt-5 border-t border-slate-100 flex items-center justify-between mt-auto">
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-emerald-800/60">
                  {tField(labels.brand_purity)}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedProduct(prod)}
                  className="inline-flex items-center space-x-1.5 px-5 py-3 bg-[#002016] text-[#A89558] hover:text-white hover:bg-emerald-950 font-bold rounded-xl text-xs tracking-wide transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none cursor-pointer"
                  id={`btn-saiba-mais-${prod.id}`}
                >
                  <span>{tField(labels.btn_details)}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dynamic spec sheets specifications Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              {/* Blur transparent Overlay background backboard */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-[#002016]/80 backdrop-blur-md"
              />

              {/* Centered Modal Card frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white rounded-3xl w-full max-w-2xl border border-slate-200/80 shadow-2xl relative z-10 overflow-hidden max-h-[92vh] flex flex-col"
                id="product-details-modal"
              >
                {/* Modal Header bar holding colors */}
                <div className="p-6 bg-[#002016] text-[#A89558] flex justify-between items-start border-b border-[#A89558]/20">
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#A89558]/80 font-bold block mb-1">
                      {tField(labels.modal_title)}
                    </span>
                    <h3 className="font-display text-2xl font-black text-white leading-tight">
                      {tField(selectedProduct.name)}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="p-1.5 rounded-full bg-white/10 hover:bg-[#A89558]/20 text-white transition focus:outline-none border border-white/5"
                    aria-label="Fechar Detalhes"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Content body with custom scrolling */}
                <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
                  {/* Visual container centered in spec panel with clean, high-contrast light green tinted background and fine emerald frame */}
                  <div className="bg-gradient-to-br from-[#FAFAF7] via-emerald-50/25 to-white border-2 border-emerald-500/20 rounded-2xl p-6 flex justify-center items-center h-64 shadow-xs relative overflow-hidden">
                    <div className="absolute w-44 h-44 bg-emerald-400/5 rounded-full blur-3xl pointer-events-none" />
                    <img 
                      src={selectedProduct.imageUrl} 
                      alt={tField(selectedProduct.name)} 
                      className="h-full object-contain relative z-10 pointer-events-none select-none transition-transform duration-300 hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Description segment */}
                  <div>
                    <h4 className="text-[10px] font-mono font-extrabold text-[#A89558] tracking-widest uppercase mb-1.5 block">
                      {tField(labels.modal_desc_label)}
                    </h4>
                    <p className="text-sm text-slate-700 leading-relaxed font-light">
                      {tField(selectedProduct.longDesc)}
                    </p>
                  </div>

                  {/* Physics Specs Table Grid */}
                  <div>
                    <h4 className="text-[10px] font-mono font-extrabold text-[#A89558] tracking-widest uppercase mb-3.5 block">
                      {tField(labels.modal_specs_label)}
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProduct.specs.map((item, idx) => (
                        <div key={idx} className="p-3.5 bg-slate-50/70 hover:bg-slate-50 rounded-xl border border-slate-150 flex justify-between items-center text-xs">
                          <span className="text-slate-500 font-medium">{tField(item.label)}</span>
                          <span className="text-[#002016] font-extrabold text-right ml-2">{tField(item.value)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Organic Guarantee seal wrapper */}
                  <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-150 flex items-start space-x-3 text-xs leading-relaxed text-[#002016]">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong className="font-extrabold text-emerald-800">{tField(labels.eco_seal_title)}</strong> {tField(labels.eco_seal_text)}
                    </span>
                  </div>
                </div>

                {/* Footer and user response triggers */}
                <div className="p-5 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-2.5 justify-end">
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(null)}
                    className="px-5 py-3 bg-white border border-slate-250 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition active:scale-98 focus:outline-none"
                  >
                    {tField(labels.btn_close)}
                  </button>
                  <a
                    href="#contacto"
                    onClick={() => {
                      setSelectedProduct(null);
                      const target = document.querySelector("#contacto");
                      if (target) {
                        setTimeout(() => {
                          window.scrollTo({
                            top: target.getBoundingClientRect().top + window.scrollY - 80,
                            behavior: "smooth",
                          });
                        }, 250);
                      }
                    }}
                    className="px-5 py-3 bg-[#002016] text-[#A89558] font-bold rounded-xl text-xs tracking-wider uppercase shadow-md hover:bg-[#002419] transition flex items-center justify-center space-x-2 active:scale-98 focus:outline-none"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>{tField(labels.btn_quote)}</span>
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
