import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, ShieldCheck, Landmark, FileText, Send, Building2 } from "lucide-react";
import { useLanguage } from "../LanguageContext";

export default function PartnerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();

  const [formData, setFormData] = useState({
    nome: "",
    empresa: "",
    nif: "",
    localizacao: "",
    pretensao: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      setSuccess(false);
      setError("");
    };
    window.addEventListener("open-partner-modal", handleOpen);
    return () => {
      window.removeEventListener("open-partner-modal", handleOpen);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.nome.trim() || !formData.empresa.trim() || !formData.nif.trim() || !formData.localizacao.trim() || !formData.pretensao.trim()) {
      setError(language === "pt" ? "Por favor preencha todos os campos obrigatórios." : "Please fill in all required fields.");
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({
        nome: "",
        empresa: "",
        nif: "",
        localizacao: "",
        pretensao: "",
      });
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-[#00100b]/80 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 z-10 my-8"
        >
          {/* Header decoration bar with deep-forest gradient and gold touch */}
          <div className="bg-[#002016] text-white p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#A89558]/10 rounded-full blur-2xl pointer-events-none" />
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="font-mono text-[9px] font-bold text-[#A89558] uppercase tracking-widest border border-[#A89558]/35 px-2.5 py-1 rounded-full bg-[#A89558]/5">
              {t("nav_btn_partner")}
            </span>
            <h3 className="mt-3 font-display text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t("modal_title")}
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm font-light leading-relaxed mt-2.5">
              {t("modal_subtitle")}
            </p>
          </div>

          <div className="p-6 sm:p-8">
            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 bg-[#A89558]/10 text-[#A89558] border border-[#A89558]/20 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl font-extrabold text-[#002016]">
                  {language === "pt" ? "Candidatura Recebida!" : "Application Received!"}
                </h4>
                <p className="mt-3 text-sm text-gray-600 max-w-md font-light leading-relaxed">
                  {t("modal_success")}
                </p>
                <button
                  onClick={() => setIsOpen(false)}
                  className="mt-8 px-6 py-3 bg-[#002016] text-white rounded-xl text-sm font-bold shadow-lg hover:bg-[#002016]/90 transition"
                >
                  {t("btn_close")}
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-4 bg-red-50 text-red-600 border border-red-100 rounded-xl text-xs font-semibold">
                    {error}
                  </div>
                )}

                {/* Grid Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#002016] block uppercase tracking-wider font-semibold">
                      {language === "pt" ? "Nome Completo do Proponente *" : "Proponent Full Name *"}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === "pt" ? "ex. Dr. João de Almeida" : "e.g., John Doe"}
                      className="w-full bg-[#faf9f6] border border-gray-200 focus:border-[#A89558] focus:ring-1 focus:ring-[#A89558] focus:outline-none rounded-xl px-4 py-3 text-sm transition text-[#002016]"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#002016] block uppercase tracking-wider font-semibold">
                      {language === "pt" ? "Denominação da Empresa *" : "Company Legal Name *"}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder={language === "pt" ? "ex. Distribuidora Angola Lda" : "e.g., Angola Trading LLC"}
                        className="w-full bg-[#faf9f6]/80 border border-gray-200 focus:border-[#A89558] focus:ring-1 focus:ring-[#A89558] focus:outline-none rounded-xl px-4 py-3 text-sm transition text-[#002016]"
                        value={formData.empresa}
                        onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#002016] block uppercase tracking-wider font-semibold">
                      {t("modal_field_nif")}
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        placeholder="ex. 5001293849"
                        className="w-full bg-[#faf9f6]/80 border border-gray-200 focus:border-[#A89558] focus:ring-1 focus:ring-[#A89558] focus:outline-none rounded-xl px-4 py-3 text-sm transition text-[#002016]"
                        value={formData.nif}
                        onChange={(e) => setFormData({ ...formData, nif: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-[#002016] block uppercase tracking-wider font-semibold">
                      {t("modal_field_loc")}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={language === "pt" ? "ex. Cabinda, Luanda, Benguela" : "e.g., Cabinda, Luanda"}
                      className="w-full bg-[#faf9f6]/80 border border-gray-200 focus:border-[#A89558] focus:ring-1 focus:ring-[#A89558] focus:outline-none rounded-xl px-4 py-3 text-sm transition text-[#002016]"
                      value={formData.localizacao}
                      onChange={(e) => setFormData({ ...formData, localizacao: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#002016] block uppercase tracking-wider font-semibold">
                    {t("modal_field_intent")}
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder={t("modal_placeholder_intent")}
                    className="w-full bg-[#faf9f6]/80 border border-gray-200 focus:border-[#A89558] focus:ring-1 focus:ring-[#A89558] focus:outline-none rounded-xl px-4 py-3 text-sm transition text-[#002016] placeholder-gray-400"
                    value={formData.pretensao}
                    onChange={(e) => setFormData({ ...formData, pretensao: e.target.value })}
                  />
                </div>

                <div className="pt-2">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    disabled={loading}
                    className="w-full px-6 py-4 bg-[#002016] hover:bg-[#002016]/95 text-white rounded-xl text-sm font-extrabold shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200 flex items-center justify-center space-x-2 border border-white/10"
                  >
                    <span>{loading ? (language === "pt" ? "A processar ficha..." : "Processing...") : t("modal_btn_submit")}</span>
                    <Send className="w-4 h-4 text-[#A89558]" />
                  </motion.button>
                </div>

                <div className="flex items-center justify-center space-x-2 pt-2 text-[10px] text-gray-400 uppercase font-mono">
                  <ShieldCheck className="w-4 h-4 text-[#A89558]" />
                  <span>{language === "pt" ? "Canal Criptografado CAPOC" : "CAPOC Encrypted Channel"}</span>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
