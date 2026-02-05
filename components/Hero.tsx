
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { ViewState } from '../types';

const Hero: React.FC<{ setView: (view: ViewState) => void }> = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 bg-black overflow-hidden border-b border-white/5">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="z-10 text-center lg:text-left">
          <img src="https://lh3.googleusercontent.com/d/1UCMSOadfQEJ0-xsTNdVct6AMCkt-D3yr" alt="Peixeweb" className="w-32 mb-8 mx-auto lg:mx-0 opacity-80" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-montserrat text-white leading-tight mb-6">
            O Único Método de <span className="text-yellow-500">Tráfego Pago</span> que seu negócio precisa para escalar.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8 leading-relaxed font-light">
            Não gaste dinheiro com "testes". Use a estratégia que já faturou milhões para nossos clientes e transforme cliques em lucro real.
          </p>
          
          <div className="flex flex-col gap-4 mb-10">
            <div className="flex items-center gap-3 text-slate-300 justify-center lg:justify-start">
              <CheckCircle className="text-green-500" size={20} />
              <span>Estratégias de Google & Meta Ads</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 justify-center lg:justify-start">
              <CheckCircle className="text-green-500" size={20} />
              <span>Foco total em ROI e Conversão</span>
            </div>
          </div>

          <a
            href="#pricing"
            className="inline-block bg-[#28a745] hover:bg-[#218838] text-white font-black px-12 py-5 rounded-xl text-xl uppercase tracking-tighter transition-all transform hover:scale-105 shadow-2xl shadow-green-500/20"
          >
            Quero Vender Mais Agora
          </a>
          <p className="text-xs text-slate-500 mt-4 uppercase font-bold tracking-widest">Acesso imediato à nossa equipe</p>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-yellow-500/10 blur-[100px] rounded-full"></div>
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2426" 
            alt="Especialistas analisando dados" 
            className="relative z-10 rounded-[40px] border-4 border-white/10 grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
