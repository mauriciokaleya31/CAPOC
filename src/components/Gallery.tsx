import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Trees, Microscope, Landmark, Map, Eye, Tag, Grid, Users } from "lucide-react";
// Import our physical existing images
// @ts-ignore
import plantationImg from "../assets/images/cabinda_palm_plantation_1781810423032.jpg";
// @ts-ignore
import facilityImg from "../assets/images/palm_oil_facility_1781810440230.jpg";

interface GalleryItem {
  id: number;
  category: "plantacao" | "viveiro" | "processamento" | "comunidades" | "equipamento" | "infraestrutura";
  title: string;
  location: string;
  desc: string;
  imgUrl: string;
  badge: string;
}

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filterOptions = [
    { value: "all", label: "Ver Tudo", icon: <Grid className="w-3.5 h-3.5" /> },
    { value: "plantacao", label: "Plantações", icon: <Trees className="w-3.5 h-3.5" /> },
    { value: "viveiro", label: "Viveiros", icon: <Microscope className="w-3.5 h-3.5" /> },
    { value: "processamento", label: "Processamento Industrial", icon: <Landmark className="w-3.5 h-3.5" /> },
    { value: "comunidades", label: "Comunidades", icon: <Users className="w-3.5 h-3.5" /> },
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 0,
      category: "plantacao",
      title: "Arroteamento e Preparação de Solos",
      location: "Campos de Cultivo, Cabinda",
      desc: "Trabalhos de limpeza mecânica inteligente e preparação de terras para início do plantio das mudas de palma Tenera.",
      imgUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.43.jpeg",
      badge: "Preparação de Solos"
    },
    {
      id: 1,
      category: "processamento",
      title: "Preparo de Lotes de Frutos de Dendém (FFB)",
      location: "Unidade de Armazenagem, Cabinda",
      desc: "Recolha e seleção cuidadosa de cachos de frutos frescos de palma com alta concentração de óleo para processamento mecânico.",
      imgUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.33.jpeg",
      badge: "Matéria-Prima"
    },
    {
      id: 2,
      category: "viveiro",
      title: "Construção de Estufas de Climatização para Mudas",
      location: "Centro de Germinação CAPOC, Cabinda",
      desc: "Montagem das estruturas de sombreamento térmico para acolhimento inicial e crescimento controlado de milhares de mudas botânicas.",
      imgUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.42.jpeg",
      badge: "Infraestrutura Agrícola"
    },
    {
      id: 3,
      category: "comunidades",
      title: "Planeamento Técnico no Terreno com a Equipa",
      location: "Campos de Cabinda, Angola",
      desc: "Supervisores e pessoal técnico efetuando medições de curvas de nível, alinhamento e mapeamento das micro-bacias locais.",
      imgUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.39.jpeg",
      badge: "Mapeamento & Equipa"
    },
    {
      id: 4,
      category: "plantacao",
      title: "Arruamento e Preparação de Vias Internas",
      location: "Lotes de Expansão Norte, Cabinda",
      desc: "Uso de maquinarias pesadas para nivelamento de acessos internos que ligam os talhões de plantio à futura fábrica.",
      imgUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.40.jpeg",
      badge: "Logística Agrícola"
    },
    {
      id: 5,
      category: "processamento",
      title: "Montagem Tecnológica e Tubagens Industriais",
      location: "Fábrica de Extração, Cabinda",
      desc: "Ensaios de pressão nas tubagens secundárias e estruturação das instalações industriais de extração térmica.",
      imgUrl: "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.32.jpeg",
      badge: "Complexo Industrial"
    }
  ];

  const filteredItems = selectedFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  return (
    <section className="py-24 bg-slate-50 border-b border-brand-100" id="galeria">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="font-mono text-xs font-semibold text-brand-700 uppercase tracking-widest bg-brand-200/55 px-3 py-1 rounded-full">
            Registos Visuais
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
            A Galeria do Projeto CAPOC
          </h2>
          <p className="mt-4 text-base text-slate-600 font-light leading-relaxed">
            Consulte fotografias de alta qualidade que mostram desde os nossos campos agrícolas à tecnologia industrial instalada e à formação contínua em Cabinda.
          </p>
        </div>

        {/* Filter Toolbar controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterOptions.map((fOption) => {
            const isSelected = selectedFilter === fOption.value;
            return (
              <button
                key={fOption.value}
                onClick={() => setSelectedFilter(fOption.value)}
                className={`flex items-center space-x-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold border transition-all duration-300 ${
                  isSelected
                    ? "bg-brand-750 text-white border-brand-750 shadow-md shadow-brand-750/15"
                    : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900"
                }`}
                id={`filter-btn-${fOption.value}`}
              >
                {fOption.icon}
                <span>{fOption.label}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                onClick={() => setLightboxIndex(item.id)}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group"
                id={`gallery-item-card-${item.id}`}
              >
                {/* Image frame */}
                <div className="relative h-60 overflow-hidden bg-brand-950">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-transparent flex items-end p-5" />
                  
                  {/* Absolute positioning tags */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-850/80 text-brand-200 border border-brand-500/30 text-[10px] font-bold tracking-widest uppercase rounded-md backdrop-blur-xs">
                      {item.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                    <div className="flex items-center space-x-1 text-[10px] font-mono text-brand-300 mb-1">
                      <Map className="w-3 h-3 text-brand-400" />
                      <span>{item.location}</span>
                    </div>
                    <h3 className="font-display font-bold text-sm sm:text-base leading-snug tracking-tight">
                      {item.title}
                    </h3>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-brand-950/40">
                    <div className="p-3 bg-white/20 backdrop-blur-xs rounded-full text-white border border-white/40">
                      <Eye className="w-5 h-5 animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Info summary */}
                <div className="p-5 border-t border-slate-100">
                  <p className="text-xs text-slate-500 font-light leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-[10px] font-semibold text-brand-600">
                    <span className="flex items-center space-x-1">
                      <Tag className="w-3 h-3" />
                      <span className="capitalize">{item.category}</span>
                    </span>
                    <span>Ampliar Registo →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Modal display toggle */}
        <AnimatePresence>
          {lightboxIndex !== null && (
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setLightboxIndex(null)}
                className="absolute inset-0 bg-brand-950/95 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-2xl w-full max-w-4xl border border-brand-100 shadow-2xl relative z-10 overflow-hidden flex flex-col md:flex-row max-h-[85vh]"
                id="gallery-lightbox"
              >
                {/* Photo frame */}
                <div className="md:w-3/5 bg-black h-56 md:h-auto min-h-[300px] relative">
                  <img
                    src={galleryItems[lightboxIndex].imgUrl}
                    alt={galleryItems[lightboxIndex].title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-950/80 text-white border border-brand-500/30 text-[10px] font-bold uppercase rounded-md backdrop-blur-xs">
                      {galleryItems[lightboxIndex].badge}
                    </span>
                  </div>
                </div>

                {/* Details side bar panel */}
                <div className="md:w-2/5 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <span className="text-[10px] font-mono bg-brand-50 text-brand-700 px-2 py-0.5 rounded uppercase border border-brand-100 font-bold">
                          {galleryItems[lightboxIndex].category}
                        </span>
                        <div className="flex items-center space-x-1.5 text-xs text-slate-500 font-light mt-1.5">
                          <Map className="w-3.5 h-3.5 text-brand-500" />
                          <span>{galleryItems[lightboxIndex].location}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setLightboxIndex(null)}
                        className="p-1 rounded-full bg-slate-150 hover:bg-slate-200 text-slate-700 transition"
                      >
                        ✕
                      </button>
                    </div>

                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-brand-950 tracking-tight leading-snug">
                      {galleryItems[lightboxIndex].title}
                    </h3>

                    <p className="mt-4 text-sm text-slate-600 leading-relaxed font-light">
                      {galleryItems[lightboxIndex].desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-500">
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                      <span>PROJECTO CAPOC</span>
                      <span>CABINDA, ANGOLA</span>
                    </div>
                    <button
                      onClick={() => setLightboxIndex(null)}
                      className="w-full py-2.5 bg-slate-100 hover:bg-slate-150 rounded-lg text-slate-800 text-xs font-bold transition mt-2"
                    >
                      Fechar Galeria
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
