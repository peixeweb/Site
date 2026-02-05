
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden ocean-gradient">
      {/* Background decoration elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -ml-48 -mb-48"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left animate-[fadeIn_1s_ease-out]">
          <span className="inline-block py-1 px-4 rounded-full bg-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-6 border border-cyan-500/30">
            Especialistas em Escala Digital
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-montserrat text-white leading-tight mb-6">
            Peixeweb: Sua empresa no <span className="text-cyan-400">oceano digital.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            Ajudamos empreendedores a dominar a internet, gerar vendas constantes e posicionar sua marca com estratégia de gente grande.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="https://api.whatsapp.com/send?phone=5511914716715"
              target="_blank"
              className="bg-cyan-500 hover:bg-cyan-400 text-[#001B3D] font-bold px-8 py-4 rounded-xl text-lg flex items-center justify-center gap-2 group transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_30px_-10px_rgba(0,209,255,0.4)]"
            >
              Quero Crescer Agora
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a
              href="#servicos"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/20 font-semibold px-8 py-4 rounded-xl text-lg backdrop-blur-sm transition-all"
            >
              Ver Serviços
            </a>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="relative z-10 animate-[bounce_6s_infinite_ease-in-out]">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
              alt="Dashboard de Resultados" 
              className="rounded-3xl shadow-2xl border border-white/10"
            />
            {/* Overlay floaters */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-[pulse_3s_infinite] flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">ROI Médio</p>
                <p className="text-xl font-bold text-slate-800">+450%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-cyan-400/50">
        <ChevronDown size={32} />
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
