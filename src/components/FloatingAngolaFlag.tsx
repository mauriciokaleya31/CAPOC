import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";

export default function FloatingAngolaFlag() {
  const { t, language } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: [0, -8, 0],
      }}
      transition={{
        y: {
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut"
        },
        duration: 0.8,
        delay: 1.2
      }}
      className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center space-x-3 bg-white/90 backdrop-blur-md border border-gray-150 p-2.5 pr-4 rounded-full shadow-2xl hover:shadow-[#A89558]/20 hover:border-[#A89558]/40 transition group cursor-pointer"
      onClick={() => {
        // Just trigger modal or direct anchor
        window.dispatchEvent(new CustomEvent("open-partner-modal"));
      }}
      title={language === "pt" ? "CAPOC - Orgulho de Angola" : "CAPOC - Proudly Angolan"}
    >
      {/* Exquisite custom SVG design of the Angola Flag */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-md border border-white shrink-0">
        <div className="h-1/2 bg-[#CC092F]" /> {/* Red top */}
        <div className="h-1/2 bg-[#000000]" /> {/* Black bottom */}
        {/* Yellow Machete, Cogwheel, and Star graphic representation in the center */}
        <svg 
          viewBox="0 0 100 100" 
          className="absolute inset-0 w-6 h-6 m-auto text-[#FFD700] fill-current"
        >
          <path d="M50,30 C39,30 30,39 30,50 C30,61 39,70 50,70 L50,65 C41.7,65 35,58.3 35,50 C35,41.7 41.7,35 50,35 L50,30 Z" />
          <polygon points="50,42 53,49 60,49 55,53 57,60 50,56 43,60 45,53 40,49 47,49" />
          {/* Machete curved blade */}
          <path d="M42,62 L48,68 C58,62 66,50 63,38 L58,41 C60,49 54,58 42,62 Z" />
        </svg>
      </div>

      <div className="text-left font-sans">
        <span className="block text-[8px] font-mono tracking-widest text-[#A89558] font-bold uppercase leading-none">
          {language === "pt" ? "PRODUÇÃO NACIONAL" : "NATIONAL PRODUCT"}
        </span>
        <span className="block text-[10px] font-extrabold text-[#002016] mt-0.5 leading-none">
          Cabinda, Angola 🇦🇴
        </span>
      </div>

      {/* Pulsing indicator */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A89558] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#A89558]"></span>
      </span>
    </motion.div>
  );
}
export { FloatingAngolaFlag };
