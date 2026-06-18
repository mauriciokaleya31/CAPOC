import React, { useState } from "react";
import { Mail, Phone, MapPin, CheckCircle, Send, Users2, Landmark, Clock, ArrowRight, Sparkles, Handshake, Globe } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";

export default function ContactForm() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    category: "partner", // partner | investor | general
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (validationError) setValidationError("");
  };

  // Quick action templates ("Algo Novo" Match Assistant)
  const applyAssistantTemplate = (type: "wholesale" | "invest" | "grower") => {
    if (type === "wholesale") {
      setFormData((prev) => ({
        ...prev,
        category: "partner",
        subject: language === "pt" ? "Distribuição de Óleos e Sabões" : "Refined Oils & Soap Wholesale",
        message: language === "pt" 
          ? "Gostaríamos de obter informações sobre preços FOB, embalagens e quantidades mínimas para a comercialização de óleos refinados e sabão de Cabinda em grande escala."
          : "We are interested in detailed FOB prices, container specs, and MOQ metrics for regional wholesale distribution of organic certified Cabinda oils and soaps."
      }));
    } else if (type === "invest") {
      setFormData((prev) => ({
        ...prev,
        category: "investor",
        subject: language === "pt" ? "Investimento Estratégico CAPOC" : "Joint-Venture Strategy",
        message: language === "pt"
          ? "Temos interesse em compreender o plano diretor industrial completo da CAPOC e os incentivos/isenções vigentes."
          : "We represent a finance pool interested in capital matching or joint equity structures matching CAPOC master plan phase assets."
      }));
    } else if (type === "grower") {
      setFormData((prev) => ({
        ...prev,
        category: "general",
        subject: language === "pt" ? "Inclusão de Pequenos Agricultores" : "Smallholder Integration",
        message: language === "pt"
          ? "Pretendemos aderir à cooperativa de pequenos plantadores associados em Cabinda para fornecimento de cachos de fruta fresca de palma."
          : "We want to consult with agricultural board representatives to register our close family land tenure fields into physical seedling foster plans."
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setValidationError(
        language === "pt" ? "Por favor preencha todos os campos obrigatórios (*)." : "Please fill in all required fields (*)."
      );
      return;
    }

    setIsSubmitting(true);
    setValidationError("");

    // Simulate safe API storage proxy request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        category: "partner",
        subject: "",
        message: "",
      });
    }, 1200);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="contacto">
      {/* Subtle graphic background details */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#A89558]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#002016]/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Block: Ultra-premium Deep Forest Green Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#002016] text-white rounded-3xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-2xl border border-white/5"
          >
            {/* Background design elements */}
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#A89558]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-8 relative z-10">
              <div>
                <span className="font-mono text-[10px] font-bold text-[#A89558] uppercase tracking-widest border border-[#A89558]/35 px-2.5 py-1 rounded-full bg-[#A89558]/5">
                  {language === "pt" ? "Contacto Oficial" : "Official Channels"}
                </span>
                <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {t("contact_title")}
                </h2>
                <p className="mt-3 text-gray-300 text-sm sm:text-base font-light leading-relaxed">
                  {language === "pt" 
                    ? "Temos equipas comerciais e técnicas baseadas em Cabinda e Luanda, prontas para responder a solicitações de parcerias industriais e propostas de investimento."
                    : "We maintain localized legal, technical and advisory teams in Cabinda and Luanda to assist in commercial wholesale onboarding and secure capital matching."
                  }
                </p>
              </div>

              {/* Enhanced Contact Info items */}
              <div className="space-y-6">
                
                {/* Item: Address */}
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-white/5 text-[#A89558] rounded-2xl border border-white/10 group-hover:bg-[#A89558]/10 transition duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-[#A89558] uppercase tracking-wide font-bold">
                      {language === "pt" ? "Sede Administrativa" : "HQ Operations"}
                    </span>
                    <h4 className="font-display font-bold text-white text-sm mt-0.5">
                      Zona Industrial Integrada de Cabinda
                    </h4>
                    <p className="mt-1 text-xs text-gray-300 leading-relaxed font-light">
                      Província de Cabinda, República de Angola.
                    </p>
                  </div>
                </div>

                {/* Item: Email */}
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-white/5 text-[#A89558] rounded-2xl border border-white/10 group-hover:bg-[#A89558]/10 transition duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-[#A89558] uppercase tracking-wide font-bold">
                      {language === "pt" ? "Canal Digital Principal" : "Direct Digital Access"}
                    </span>
                    <a href="mailto:info@capoc-angola.com" className="font-display font-bold text-white text-sm block hover:text-[#A89558] hover:underline transition mt-0.5">
                      info@capoc-angola.com
                    </a>
                    <span className="text-[10px] text-gray-400 font-mono mt-0.5 block flex items-center">
                      <Clock className="w-3 h-3 mr-1 text-[#A89558]" /> 
                      {language === "pt" ? "Resposta em até 24 Horas" : "Response during 24h workdays"}
                    </span>
                  </div>
                </div>

                {/* Item: Phone */}
                <div className="flex items-start space-x-4 group">
                  <div className="p-3 bg-white/5 text-[#A89558] rounded-2xl border border-white/10 group-hover:bg-[#A89558]/10 transition duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-[#A89558] uppercase tracking-wide font-bold">
                      {language === "pt" ? "Contacto Telefónico" : "Phone Operations"}
                    </span>
                    <a href="tel:+244931228102" className="font-display font-bold text-white text-sm block hover:text-[#A89558] hover:underline transition mt-0.5">
                      +244 931 228 102
                    </a>
                    <span className="text-[10px] text-gray-400 font-mono mt-0.5 block">
                      {language === "pt" ? "Segunda a Sexta • 08h às 17h" : "Monday to Friday • GMT+1 8AM to 5PM"}
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Privacy note */}
            <div className="mt-8 pt-6 border-t border-white/5 relative z-10">
              <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl border border-white/5">
                <Landmark className="w-5 h-5 text-[#A89558] shrink-0" />
                <p className="text-[10px] text-gray-300 font-light leading-relaxed">
                  <strong className="text-[#A89558] font-bold">{language === "pt" ? "Confidencialidade Rigorosa" : "Absolute Shield NDA"}:</strong> {language === "pt" ? "Fichas cadastrais de capital, dados de NIF e propostas de fomento cumprem termos estritos de blindagem contra vazamentos." : "Corporate tax identifiers and partnership portfolios comply strictly with regional data protection standards."}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Block: Redesigned Modern Form with Interactive Template Assistant */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-xl relative"
          >
            {submitSuccess && (
              <div className="absolute inset-0 bg-white/98 backdrop-blur-sm rounded-3xl flex flex-col justify-center items-center p-8 text-center animate-fadeIn z-20">
                <div className="p-4 bg-emerald-50 text-emerald-600 rounded-full mb-6 animate-bounce">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-[#002016]">
                  {t("contact_success_title")}
                </h3>
                <p className="mt-3 text-gray-650 text-sm max-w-md font-light leading-relaxed">
                  {t("contact_success_desc")}
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-8 px-6 py-3 bg-[#002016] text-white rounded-xl text-sm font-semibold hover:bg-[#002016]/90 transition shadow-lg flex items-center space-x-2 border border-white/10"
                >
                  <span>{language === "pt" ? "Enviar Nova Mensagem" : "Send Another Message"}</span>
                  <ArrowRight className="w-4 h-4 text-[#A89558]" />
                </button>
              </div>
            )}

            {/* Template Assist Container ("Algo Novo") */}
            <div className="mb-6 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="flex items-center text-[10px] font-mono font-bold text-[#A89558] uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#A89558]" />
                {language === "pt" ? "Assistente Rápido de Correspondência" : "Instant Correspondence Assistant"}
              </span>
              <div className="grid grid-cols-3 gap-2">
                <button 
                  type="button"
                  onClick={() => applyAssistantTemplate("wholesale")}
                  className="p-2 text-left bg-white hover:bg-[#002016]/5 border border-slate-200 hover:border-[#A89558] rounded-xl transition duration-200"
                >
                  <span className="block text-[9px] font-black text-[#002016]">Grossista</span>
                  <span className="block text-[8px] text-slate-500 mt-0.5 truncate">{language === "pt" ? "Quero Comprar Sabão/Óleo" : "Buy refined oils"}</span>
                </button>
                <button 
                  type="button"
                  onClick={() => applyAssistantTemplate("invest")}
                  className="p-2 text-left bg-white hover:bg-[#002016]/5 border border-slate-200 hover:border-[#A89558] rounded-xl transition duration-200"
                >
                  <span className="block text-[9px] font-black text-[#002016]">Investidor</span>
                  <span className="block text-[8px] text-slate-500 mt-0.5 truncate">{language === "pt" ? "Oportunidades de Capital" : "Capital matching"}</span>
                </button>
                <button 
                  type="button"
                  onClick={() => applyAssistantTemplate("grower")}
                  className="p-2 text-left bg-white hover:bg-[#002016]/5 border border-slate-200 hover:border-[#A89558] rounded-xl transition duration-200"
                >
                  <span className="block text-[9px] font-black text-[#002016]">Produtor</span>
                  <span className="block text-[8px] text-slate-500 mt-0.5 truncate">{language === "pt" ? "Fornecer Frutos Palma" : "Supply raw palm"}</span>
                </button>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="border-b border-gray-100 pb-3">
                <h3 className="font-display text-lg font-extrabold text-[#002016] flex items-center space-x-2">
                  <Handshake className="w-5.5 h-5.5 text-[#A89558]" />
                  <span>{t("contact_form_title")}</span>
                </h3>
                <p className="text-[10px] text-gray-500 mt-1 font-light">
                  {language === "pt" ? "Os campos marcados com (*) são de preenchimento obrigatório." : "All fields containing asterisks (*) must be filled."}
                </p>
              </div>

              {validationError && (
                <div className="p-4 bg-red-50 text-red-600 border border-red-100 rounded-xl text-xs font-semibold">
                  {validationError}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#002016] block uppercase tracking-wider font-semibold">
                    {t("contact_field_name")}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Eng. António Manuel"
                    className="w-full bg-[#faf9f6] border border-gray-200 focus:border-[#A89558] focus:ring-1 focus:ring-[#A89558] focus:outline-none rounded-xl px-4 py-2.5 text-xs transition text-[#002016] placeholder-gray-400"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#002016] block uppercase tracking-wider font-semibold">
                    {t("contact_field_email")}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="e.g. antonio@empresa.ao"
                    className="w-full bg-[#faf9f6] border border-gray-200 focus:border-[#A89558] focus:ring-1 focus:ring-[#A89558] focus:outline-none rounded-xl px-4 py-2.5 text-xs transition text-[#002016] placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#002016] block uppercase tracking-wider font-semibold">
                    {t("contact_field_phone")}
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+244 931..."
                    className="w-full bg-[#faf9f6] border border-gray-200 focus:border-[#A89558] focus:ring-1 focus:ring-[#A89558] focus:outline-none rounded-xl px-4 py-2.5 text-xs transition text-[#002016] placeholder-gray-400"
                  />
                </div>

                {/* Company */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-[#002016] block uppercase tracking-wider font-semibold">
                    {t("contact_field_company")}
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Sua Empresa Lda"
                    className="w-full bg-[#faf9f6] border border-gray-200 focus:border-[#A89558] focus:ring-1 focus:ring-[#A89558] focus:outline-none rounded-xl px-4 py-2.5 text-xs transition text-[#002016] placeholder-gray-400"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#002016] block uppercase tracking-wider font-semibold">
                  {t("contact_field_profile")}
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full bg-[#faf9f6]/80 border border-gray-200 focus:border-[#A89558] focus:ring-1 focus:ring-[#A89558] focus:outline-none rounded-xl px-4 py-2.5 text-xs transition text-[#002016]"
                >
                  <option value="partner">
                    {language === "pt" ? "Parceiro Comercial & Grossista (Sabão & Óleos)" : "Commercial Wholesale & Distribution partner"}
                  </option>
                  <option value="investor">
                    {language === "pt" ? "Investidor Nacional / Fundo de Investimento" : "National / Institutional Joint Venture Investment"}
                  </option>
                  <option value="general">
                    {language === "pt" ? "Assuntos Comunitários ou Fomento Associativo" : "Outgrower Association or Local Matters"}
                  </option>
                </select>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#002016] block uppercase tracking-wider font-semibold">
                  {t("contact_field_subject")}
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Proposta Técnica de Fornecimento"
                  className="w-full bg-[#faf9f6] border border-gray-200 focus:border-[#A89558] focus:ring-1 focus:ring-[#A89558] focus:outline-none rounded-xl px-4 py-2.5 text-xs transition text-[#002016] placeholder-gray-400"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-[#002016] block uppercase tracking-wider font-semibold">
                  {t("contact_field_message")}
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Por favor, detalhe a sua proposta, candidatura ou dúvida..."
                  className="w-full bg-[#faf9f6] border border-gray-200 focus:border-[#A89558] focus:ring-1 focus:ring-[#A89558] focus:outline-none rounded-xl px-4 py-2.5 text-xs transition text-[#002016] placeholder-gray-400"
                />
              </div>

              {/* Submit Trigger with motion hover */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3.5 bg-[#002016] hover:bg-[#002016]/95 text-white rounded-xl text-xs font-black shadow-lg disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-200 flex items-center justify-center space-x-2 border border-white/5"
                id="submit-form-btn"
              >
                <span>{isSubmitting ? t("contact_submitting") : t("contact_btn_submit")}</span>
                <Send className="w-3.5 h-3.5 text-[#A89558]" />
              </motion.button>
            </form>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
