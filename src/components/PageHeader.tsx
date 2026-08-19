import { motion } from "motion/react";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  badge?: string;
  bgImage?: string;
  currentPageKey: string;
  onNavigateHome: () => void;
}

export default function PageHeader({
  title,
  subtitle,
  badge,
  bgImage = "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.36.jpeg",
  currentPageKey,
  onNavigateHome,
}: PageHeaderProps) {
  const { t } = useLanguage();

  return (
    <div className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-[#002016] text-white overflow-hidden border-b border-[#A89558]/20">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover opacity-25 filter contrast-125 saturate-110"
          referrerPolicy="no-referrer"
          onError={(e) => {
            e.currentTarget.src = "https://visa.onlyvibes.online/wp-content/uploads/2026/06/WhatsApp-Image-2026-06-18-at-18.50.36.jpeg";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002016] via-[#002016]/80 to-[#002016]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(#A89558_1px,transparent_1px)] [background-size:24px_24px] opacity-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-xs font-mono text-[#A89558] mb-6">
          <button
            onClick={onNavigateHome}
            className="flex items-center space-x-1 hover:text-white transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{t("nav_home")}</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
          <span className="text-gray-200 font-bold">{t(currentPageKey)}</span>
        </div>

        <div className="max-w-3xl space-y-4">
          {badge && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#A89558] bg-[#A89558]/10 border border-[#A89558]/30 px-3.5 py-1 rounded-full"
            >
              {badge}
            </motion.span>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight"
          >
            {title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-300 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-2xl"
          >
            {subtitle}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
