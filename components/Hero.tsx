
import React from 'react';
import { CheckCircle } from 'lucide-react';
import { ViewState } from '../types';

const Hero: React.FC<{ setView: (view: ViewState) => void }> = () => {
  return (
    // Ajustado padding-top para compensar o header maior, mas mantendo pb-8 para banner compacto
    <section id="home" className="relative pt-44 md:pt-52 pb-8 bg-black overflow-hidden border-b border-white/5">
      
      {/* Background Images Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {/* Imagem Google Ads / Analytics (Esquerda) */}
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
          alt="Google Ads Analytics" 
          className="absolute top-0 left-0 w-2/3 h-full object-cover opacity-[0.08] mix-blend-luminosity -translate-x-1/4 rotate-3"
        />
        
        {/* Imagem Meta Ads / Mobile (Direita) */}
        <img 
          src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1974" 
          alt="Meta Ads Interface" 
          className="absolute top-0 right-0 w-2/3 h-full object-cover opacity-[0.08] mix-blend-luminosity translate-x-1/4 -rotate-3"
        />

        {/* Gradientes de Fusão para manter o fundo preto predominante */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="text-center lg:text-left">
          <div className="inline-block py-2 px-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-[0.3em] mb-8 animate-pulse">
            Agência Especialista em Escala
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black font-montserrat text-white leading-[1.1] mb-8">
            A Única <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Agência de Tráfego</span> que escala seu lucro.
          </h1>

          {/* Vídeo Inserido com Ajuste de Recorte (Crop) para esconder botão de saída */}
          <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-[0_0_40px_-10px_rgba(6,182,212,0.3)] border border-white/10 mb-10 relative z-20 group">
            {/* Wrapper para controle de overflow e posicionamento */}
            <div className="relative w-full h-full overflow-hidden">
               <iframe 
                 src="https://drive.google.com/file/d/1LXZjisKk1hT14xE2T3-p0DlmsPX2zAE8Ps_StDkmsqc/preview?autoplay=1" 
                 // -mt-[55px] puxa o vídeo para cima escondendo a barra do Drive
                 // h-[calc(100%+55px)] compensa a altura perdida
                 className="absolute top-0 left-0 w-full h-[calc(100%+55px)] -mt-[55px]" 
                 allow="autoplay; encrypted-media" 
                 allowFullScreen
                 title="Apresentação Peixeweb"
               ></iframe>
            </div>
            {/* Bloqueio de clique invisível na parte superior para garantir que não cliquem em áreas vazias se o crop falhar em algum navegador */}
            <div className="absolute top-0 left-0 w-full h-12 bg-transparent pointer-events-auto z-30"></div>
          </div>

          <div className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed font-light max-w-xl mx-auto lg:mx-0">
            <p>Não gaste dinheiro com "testes". Use a estratégia que vai trazer clientes e transforme cliques em lucro real.</p>
            
            {/* Texto de Destaque Adicionado */}
            <div className="mt-6 p-4 bg-cyan-900/20 border-l-4 border-cyan-500 rounded-r-xl text-left backdrop-blur-sm">
              <p className="text-white font-bold text-xl md:text-2xl leading-tight">
                Você precisa de mais clientes? <br />
                <span className="text-cyan-400">Eu tenho mais clientes para te trazer!</span>
              </p>
            </div>
          </div>
          
          <div className="flex flex-col gap-5 mb-12">
            <div className="flex items-center gap-3 text-slate-300 justify-center lg:justify-start group">
              <CheckCircle className="text-cyan-500 w-6 h-6 group-hover:text-cyan-300 transition-colors" />
              <span className="font-medium group-hover:text-white transition-colors">Estratégias Avançadas de Google & Meta Ads</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300 justify-center lg:justify-start group">
              <CheckCircle className="text-cyan-500 w-6 h-6 group-hover:text-cyan-300 transition-colors" />
              <span className="font-medium group-hover:text-white transition-colors">Foco total em ROI e Conversão Validada</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#pricing"
              className="inline-block bg-[#28a745] hover:bg-[#218838] text-white font-black px-12 py-6 rounded-2xl text-xl uppercase tracking-tighter transition-all transform hover:scale-105 shadow-2xl shadow-green-500/30"
            >
              Quero Vender Mais Agora
            </a>
          </div>
          <p className="text-[10px] text-slate-500 mt-6 uppercase font-bold tracking-[0.4em] opacity-50">Sua jornada rumo ao topo começa aqui</p>
        </div>

        <div className="relative group">
          <div className="absolute -inset-10 bg-cyan-500/20 blur-[120px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <div className="relative z-10 p-2 bg-white/5 rounded-[48px] backdrop-blur-sm border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2426" 
              alt="Especialistas analisando dados" 
              className="relative z-10 rounded-[40px] grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-3xl shadow-2xl hidden md:block animate-bounce-slow border-l-4 border-cyan-500">
             <p className="text-[#001B3D] font-black text-2xl leading-none">+3 Anos</p>
             <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">De Experiência</p>
          </div>
        </div>
      </div>
       <style>{`
          @keyframes bounce-slow {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow {
              animation: bounce-slow 4s infinite ease-in-out;
          }
      `}</style>
    </section>
  );
};

export default Hero;
