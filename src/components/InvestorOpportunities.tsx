import React, { useState } from "react";
import { 
  TrendingUp, Scaling, ShieldCheck, Heart, 
  Coins, Landmark, ChevronRight, X, Mail, Landmark as Bank 
} from "lucide-react";

export default function InvestorOpportunities() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", message: "" });

  const points = [
    {
      title: "Elevado Potencial de Crescimento",
      desc: "Taxa extraordinária de rentabilidade agrobiológica devido ao uso da linhagem avançada Tenera Híbrida em solos altamente férteis de Cabinda.",
      icon: <TrendingUp className="w-5 h-5 text-emerald-600" />,
    },
    {
      title: "Escalabilidade Operacional",
      desc: "Modelo escalonável replicável estruturado para expandir com máxima eficiência dos 1.000 hectares piloto até 5.000 hectares totais planeados.",
      icon: <Scaling className="w-5 h-5 text-amber-600" />,
    },
    {
      title: "Forte Impacto Económico",
      desc: "Substituição estratégica de importação de óleos vegetais de mesa, com incentivos fiscais governamentais de apoio ao produtor nacional.",
      icon: <Coins className="w-5 h-5 text-teal-600" />,
    },
    {
      title: "Mercado em Expansão",
      desc: "Alta procura recorrente de óleos alimentares de mesa e margarinas puras em Angola, resguardando retorno comercial seguro.",
      icon: <ShieldCheck className="w-5 h-5 text-indigo-600" />,
    },
    {
      title: "Diversificação de Receitas",
      desc: "Aproveitamento completo da cadeia com 6 linhas de produtos ativos: do óleo frito culinário refinado à margarina e sabão glicerinado.",
      icon: <TrendingUp className="w-5 h-5 text-rose-600" />,
    },
    {
      title: "Liderança Regional",
      desc: "Posicionamento logístico estratégico de Cabinda como centro exportador prioritário de produtos refinados para a Bacia do Congo.",
      icon: <Bank className="w-5 h-5 text-blue-600" />,
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setSubmitted(false);
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
    }, 3000);
  };

  return (
    <section className="py-24 bg-brand-50 scroll-mt-20" id="investidores">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header content intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-950 tracking-tight">
              Uma Oportunidade Estratégica para Investidores
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-sm sm:text-base font-light leading-relaxed">
              O projecto CAPOC constitui uma das mais seguras e escaláveis propostas agrícolas do mercado de Angola, unindo a força do agronegócio de palma à fomento de infra-estruturas nacionais e criação permanente de riqueza verde.
            </p>
          </div>
        </div>

        {/* Core grid of opportunities */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/60 flex flex-col justify-between hover:shadow-md transition-all duration-300"
              id={`investor-card-${idx}`}
            >
              <div>
                <div className="p-3 bg-slate-50 border border-slate-100 text-slate-800 rounded-xl w-fit">
                  {pt.icon}
                </div>
                <h3 className="mt-5 font-display text-base font-extrabold text-brand-950 leading-snug">
                  {pt.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {pt.desc}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-semibold text-brand-650 uppercase font-mono">
                <span>KPI Alvo CAPOC</span>
                <span>Rendimento Alto</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner inside opportunities */}
        <div className="mt-20 bg-brand-900 text-white rounded-2xl border border-brand-850 p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono font-bold text-brand-300 tracking-widest block uppercase mb-1">
              Participe da Expansão
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold leading-tight text-white">
              Deseja receber a nossa Apresentação Institucional detalhada?
            </h3>
            <p className="mt-2 text-brand-200/90 font-light text-xs sm:text-sm leading-relaxed">
              Disponibilizamos memorando de investimentos, demonstrações financeiras do projecto piloto e NDA corporativo padrão aos parceiros autorizados.
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-4 bg-white hover:bg-brand-50 text-brand-900 font-bold rounded-xl text-xs sm:text-sm tracking-wide transition shadow-md flex items-center space-x-2 shrink-0"
            id="btn-solicitar-apresentacao"
          >
            <span>Solicitar Apresentação Corporativa</span>
            <ChevronRight className="w-4 h-4 text-brand-900" />
          </button>
        </div>

        {/* Investor Modal Form */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[120] flex items-center justify-center p-4">
            <div 
              className="absolute inset-0 bg-brand-950/80 backdrop-blur-sm"
              onClick={() => setIsModalOpen(false)}
            />

            <div className="bg-white rounded-2xl border border-brand-100 shadow-2xl relative z-10 w-full max-w-lg overflow-hidden">
              <div className="p-6 bg-brand-900 text-white flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-brand-300 uppercase">
                    Comité Corporativo CAPOC
                  </span>
                  <h3 className="font-display text-lg font-extrabold mt-0.5">
                    Solicitar Apresentação de Investimento
                  </h3>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1 rounded-full bg-white/10 hover:bg-white/20 text-white transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {submitted ? (
                <div className="p-10 text-center space-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-950 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    ✓
                  </div>
                  <h4 className="font-display font-bold text-slate-900 text-base">
                    Pedido Enviado com Sucesso!
                  </h4>
                  <p className="text-xs text-slate-500 font-light leading-relaxed max-w-sm mx-auto">
                    Agradecemos o seu interesse estratégico. O nosso Comité de Parcerias e Investimento enviará o dossiê informativo completo de Cabinda para o seu email corporativo nas próximas 24 horas.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="p-6 space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Ex: Dr. António Silva"
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-brand-500 transition"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Empresa / Fundo *
                      </label>
                      <input
                        required
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Ex: Invest Capital"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-brand-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Cargo Corporativo
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: Diretor de Ativos"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-brand-500 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Email Corporativo *
                      </label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="investor@empresa.com"
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-brand-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Telefone / Telefone Secundário
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+244 9..."
                        className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-brand-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Mensagem de Interesse / Notas de Parceria
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      placeholder="Indique as suas notas ou volumes pretendidos no plano de investimentos de Cabinda."
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs sm:text-sm bg-slate-50 focus:bg-white focus:outline-brand-500 transition resize-none"
                    />
                  </div>

                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-100 text-[10px] text-amber-950 font-light leading-relaxed flex items-start space-x-2">
                    <span>⚠️</span>
                    <span>
                      As informações submetidas são tratadas de forma altamente confidencial, sob estrito sigilo de segurança corporativo das bacias agrícolas da CAPOC.
                    </span>
                  </div>

                  <div className="pt-2 flex justify-end space-x-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-250 text-slate-700 font-bold rounded-lg text-xs"
                    >
                      Cancelar
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-brand-750 text-white font-bold rounded-lg text-xs tracking-wider uppercase hover:bg-brand-850 transition"
                    >
                      Submeter Pedido
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
