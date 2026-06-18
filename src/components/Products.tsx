import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Layers, Droplet, Sparkles, CheckCircle, X, ShieldCheck, ShoppingCart, HelpCircle } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  icon: React.ReactNode;
  specs: { label: string; value: string }[];
  accentColor: string;
  gradient: string;
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const productList: Product[] = [
    {
      id: "oleo-palma",
      name: "Óleo de Palma Refinado",
      category: "Alimentar",
      shortDesc: "Óleo dourado puro de altíssima qualidade e refinação multi-etapas física sem resíduos químicos.",
      longDesc: "O nosso principal produto alimentar é refinado de forma física para reter os nutrientes naturais essenciais e carotenos protetores. Com uma estabilidade térmica exemplar a altas temperaturas, é ideal para culinária diária, produção de snacks e culinária industrial generalizada.",
      icon: <Droplet className="w-8 h-8 text-amber-600" />,
      accentColor: "from-amber-500 to-yellow-600",
      gradient: "bg-gradient-to-br from-amber-50 to-amber-100/40 text-amber-900 border-amber-200/60",
      specs: [
        { label: "Acidez Máxima", value: "0.1% (FFA)" },
        { label: "Índice de Iodo", value: "52 - 58" },
        { label: "Embalagens", value: "1L, 5L, 20L e Granel (~20 Ton)" },
        { label: "Certificação", value: "Padrão Alimentar ISO 22000" }
      ]
    },
    {
      id: "oleo-palmiste",
      name: "Óleo de Palmiste (PKO)",
      category: "Industrial & Cosmética",
      shortDesc: "Extraído a frio da amêndoa interna (caroço) do fruto da palmeira Tenera, precioso para cosmética.",
      longDesc: "Rico em ácido láurico, o Óleo de Palmiste (PKO) da CAPOC destaca-se pela sua pureza e consistência sólida à temperatura ambiente. É um recurso crítico para indústrias nacionais fornecedoras de cosméticos de luxo, sabões finos de higiene e produtos oleoquímicos sob medida.",
      icon: <Layers className="w-8 h-8 text-emerald-600" />,
      accentColor: "from-emerald-500 to-teal-600",
      gradient: "bg-gradient-to-br from-emerald-50 to-emerald-100/40 text-emerald-900 border-emerald-200/60",
      specs: [
        { label: "Método de Extração", value: "Prensagem Física Mecânica" },
        { label: "Esterificação", value: "Excelente índice saponificável" },
        { label: "Aplicações", value: "Bases saboeiras, pomadas, cremes" },
        { label: "Padrão de Cor", value: "Claro Transparente (Líquido)" }
      ]
    },
    {
      id: "margarina",
      name: "Margarina Alimentar",
      category: "Alimentar",
      shortDesc: "Cremosidade perfeita e rica em vitaminas A e D para a mesa e padarias angolanas.",
      longDesc: "Desenvolvida com óleos vegetais de palma premium selecionados, a Margarina CAPOC traz o melhor em termos de sabor, consistência e estabilidade. Perfeita tanto para a mesa do pequeno-almoço das famílias angolanas quanto para confeitarias industriais de pão e pastelaria de larga escala.",
      icon: <Sparkles className="w-8 h-8 text-yellow-600" />,
      accentColor: "from-yellow-400 to-amber-500",
      gradient: "bg-gradient-to-br from-yellow-50 to-yellow-100/40 text-yellow-950 border-yellow-200/60",
      specs: [
        { label: "Teor de Matéria Gorda", value: "80% de base vegetal" },
        { label: "Enriquecimento", value: "Vitaminas A, D, E solúveis" },
        { label: "Consistência", value: "Plástica e Cremosa à frio" },
        { label: "Conservação", value: "Refrigerado 2°C a 10°C" }
      ]
    },
    {
      id: "oleo-vegetal",
      name: "Óleo Vegetal de Mesa",
      category: "Alimentar",
      shortDesc: "Totalmente desodorizado, filtrado quatro vezes para máxima leveza em saladas e frituras.",
      longDesc: "O Óleo Vegetal de Mesa CAPOC passa por filtros físicos profundos para garantir neutralidade total de aroma e cor translúcida de pureza. É a escolha saudável das cozinhas e restaurantes de Angola, focado na leveza digestiva absoluta e qualidade alimentar do dia a dia.",
      icon: <Droplet className="w-8 h-8 text-amber-500" />,
      accentColor: "from-amber-400 to-yellow-500",
      gradient: "bg-gradient-to-br from-amber-50/70 to-yellow-100/20 text-brand-950 border-amber-150",
      specs: [
        { label: "Teor Lipídico", value: "99.9% Triglicéridos Puros" },
        { label: "Ponto de Fumo", value: "Elevado (~230°C)" },
        { label: "Pureza", value: "Livre de colesterol animal" },
        { label: "Embalagem Padrão", value: "Frascos PET 1L, Garrafas 5L" }
      ]
    },
    {
      id: "sabao-industrial",
      name: "Sabão Industrial Azul & Vermelho",
      category: "Limpeza & Saneamento",
      shortDesc: "De alta durabilidade, consistência firme e elevado poder saponificador para as famílias angolanas.",
      longDesc: "Nosso autêntico sabão azul e vermelho tradicional é elaborado a partir das frações finais saponificadas de palma. Oferece espuma rica de longa duração, facilidade de lavagem e altíssima eficácia para higiene de têxteis pesados ou higienização geral de grandes infraestruturas.",
      icon: <ShieldCheck className="w-8 h-8 text-sky-600" />,
      accentColor: "from-blue-500 to-sky-600",
      gradient: "bg-gradient-to-br from-blue-50 to-blue-100/40 text-blue-950 border-blue-200/60",
      specs: [
        { label: "Peso da Barra", value: "200g, 400g, 1Kg" },
        { label: "Índice Ativo", value: "Total Fatty Matter > 62%" },
        { label: "Ação de Espuma", value: "Estável mesmo em águas duras" },
        { label: "Biodegradabilidade", value: "100% Amigo do Ambiente" }
      ]
    },
    {
      id: "sabonetes",
      name: "Sabonetes de Higiene Suave",
      category: "Higiene Pessoal",
      shortDesc: "Com extratos de óleos suaves e glicerina natural de palma, ideal para proteção macia epidérmica.",
      longDesc: "Os sabonetes corporais finos da CAPOC unem o poder nutritivo da vitamina E natural do óleo de palma à glicerina protetora purificada. Desenvolvidos especificamente para cuidar de peles delicadas, limpam de modo suave mantendo a hidratação e deixando fragrâncias refrescantes de campo.",
      icon: <Sparkles className="w-8 h-8 text-rose-600" />,
      accentColor: "from-rose-500 to-pink-600",
      gradient: "bg-gradient-to-br from-rose-50 to-rose-100/40 text-rose-950 border-rose-200/60",
      specs: [
        { label: "pH Fisiológico", value: "Balançado para pele sensível" },
        { label: "Composição", value: "Glicerinada, Óleo Suave Palmiste" },
        { label: "Peso Comercial", value: "90g e 125g individuais" },
        { label: "Embalagem", value: "Papel reciclável selado premium" }
      ]
    }
  ];

  return (
    <section className="py-24 bg-white border-y border-brand-100" id="produtos">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="font-mono text-xs font-semibold text-brand-700 uppercase tracking-widest bg-brand-100 px-3 py-1 rounded-full">
            Nossos Produtos
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
            Excelência Agro-Industrial de Cabinda
          </h2>
          <p className="mt-4 text-base text-slate-600 font-light leading-relaxed">
            Desenvolvemos uma gama integrada de alimentos essenciais e produtos de higiene de alta utilidade, atendendo regras estritas de segurança alimentar e purificação biológica.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productList.map((prod) => (
            <motion.div
              key={prod.id}
              whileHover={{ y: -6, transition: { duration: 0.15 } }}
              className={`p-6 rounded-2xl border flex flex-col justify-between transition-all duration-300 shadow-xs ${prod.gradient}`}
              id={`prod-card-${prod.id}`}
            >
              <div>
                <span className="inline-block px-2.5 py-0.5 bg-white text-brand-850 text-[10px] font-bold uppercase tracking-widest rounded-full border border-brand-100/50 mb-4">
                  {prod.category}
                </span>

                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-white rounded-xl shadow-xs border border-brand-50 shrink-0">
                    {prod.icon}
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-950 leading-snug">
                    {prod.name}
                  </h3>
                </div>

                <p className="text-sm text-slate-800 font-light leading-relaxed mb-6">
                  {prod.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-brand-100/50 flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-brand-600">
                  Refinação Pura CAPOC
                </span>
                <button
                  onClick={() => setSelectedProduct(prod)}
                  className="px-4 py-2 bg-brand-750 hover:bg-brand-800 text-white font-bold rounded-lg text-xs tracking-wide transition shadow-sm hover:shadow"
                  id={`btn-saiba-mais-${prod.id}`}
                >
                  Saiba Mais
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Product Modal Option */}
        <AnimatePresence>
          {selectedProduct && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              {/* Overlay background */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-brand-950/70 backdrop-blur-sm"
              />

              {/* Modal Card frame */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="bg-white rounded-2xl w-full max-w-2xl border border-brand-100 shadow-2xl relative z-10 overflow-hidden max-h-[90vh] flex flex-col"
                id="product-details-modal"
              >
                {/* Header banner style */}
                <div className={`p-6 bg-gradient-to-r ${selectedProduct.accentColor} text-white flex justify-between items-start`}>
                  <div>
                    <span className="text-xs uppercase font-mono tracking-widest text-brand-100/90 font-bold">
                      Ficha Técnica Completa
                    </span>
                    <h3 className="font-display text-2xl font-extrabold mt-1">
                      {selectedProduct.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="p-1 rounded-full bg-white/20 hover:bg-white/30 text-white transition focus:outline-none"
                    aria-label="Fechar Detalhes"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Content body containing scrolling data */}
                <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                  <div>
                    <h4 className="text-xs font-mono font-bold text-brand-700 tracking-wider uppercase mb-2">
                      Descrição Detalhada do Produto
                    </h4>
                    <p className="text-sm text-slate-800 leading-relaxed font-light">
                      {selectedProduct.longDesc}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono font-bold text-brand-700 tracking-wider uppercase mb-3">
                      Especificações Físico-Químicas & Logística
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedProduct.specs.map((item, id) => (
                        <div key={id} className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex justify-between items-center text-xs">
                          <span className="text-slate-600 font-medium">{item.label}</span>
                          <span className="text-brand-950 font-bold text-right">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-150 flex items-start space-x-3 text-xs leading-relaxed text-emerald-950 font-light">
                    <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      <strong>Garantia de Origem Sustentável:</strong> Os derivados do óleo de palma da CAPOC são isentos de desflorestação hídrica e respeitam integralmente os direitos das populações rurais de Cabinda, Angola.
                    </span>
                  </div>
                </div>

                {/* Footer modal controls */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row gap-2 justify-end">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="px-5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                  >
                    Fechar Janela
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
                    className="px-5 py-2.5 bg-brand-750 text-white font-bold rounded-lg text-xs tracking-wider uppercase shadow-xs hover:bg-brand-850 transition flex items-center justify-center space-x-1.5"
                  >
                    <ShoppingCart className="w-3.5 h-3.5" />
                    <span>Solicitar Cotação Comercial</span>
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
