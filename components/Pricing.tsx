
import React from 'react';
import { ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-6 text-[#001B3D]">PRONTO PARA ESCALAR?</h2>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          Não acreditamos em pacotes genéricos. Cada negócio tem um desafio único e merece uma estratégia personalizada.
        </p>
        
        <div className="bg-[#111] text-white rounded-[40px] p-8 md:p-12 border-4 border-emerald-500 shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left space-y-6">
              <h3 className="text-2xl font-bold text-emerald-500 uppercase tracking-wide">O que vamos fazer:</h3>
              <ul className="space-y-5">
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
                  <span className="font-medium text-lg">Análise profunda do seu negócio</span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
                  <span className="font-medium text-lg">Definição de canais de tráfego</span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
                  <span className="font-medium text-lg">Planejamento de investimento</span>
                </li>
                <li className="flex items-center gap-4">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />
                  <span className="font-medium text-lg">Projeção de resultados reais</span>
                </li>
              </ul>
            </div>

            <div className="text-center md:text-left flex flex-col justify-center h-full">
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                Fale diretamente com um de nossos estrategistas e receba um plano de ação para os próximos 30 dias.
              </p>
              <a href="https://api.whatsapp.com/send?phone=5511914716715" target="_blank" className="block w-full bg-[#25D366] hover:bg-[#20bd5a] py-6 rounded-2xl text-xl font-black uppercase tracking-tight transform hover:scale-105 transition-all mb-6 flex items-center justify-center gap-3 shadow-lg shadow-green-900/20">
                Fazer Análises
                <ArrowRight size={24} />
              </a>
              <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-slate-500">
                <ShieldCheck size={18} className="text-blue-500" />
                <span className="uppercase font-bold tracking-wider">Sem compromisso</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
