
import React from 'react';
import { Layout, Search, Instagram, TrendingUp, ShoppingBag, Target } from 'lucide-react';

const ModuleCard: React.FC<{ num: string; title: string; desc: string; icon: React.ReactNode }> = ({ num, title, desc, icon }) => (
  <div className="bg-[#111] p-8 rounded-2xl border border-white/10 hover:border-yellow-500/50 transition-all group">
    <div className="flex justify-between items-start mb-6">
      <div className="text-yellow-500 group-hover:scale-110 transition-transform">{icon}</div>
      <span className="text-white/20 font-black text-2xl">{num}</span>
    </div>
    <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tighter">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
  </div>
);

const Modules: React.FC = () => {
  return (
    // Changed py-24 to pt-8 pb-24 to reduce top spacing
    <section id="servicos" className="pt-8 pb-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 uppercase">O que você vai receber:</h2>
          <div className="h-1 w-24 bg-yellow-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ModuleCard 
            num="01" 
            icon={<Target size={32} />} 
            title="Google Ads" 
            desc="Domine a rede de pesquisa e apareça para quem já quer comprar seu produto agora." 
          />
          <ModuleCard 
            num="02" 
            icon={<Instagram size={32} />} 
            title="Meta Ads" 
            desc="Crie desejo e gere leads qualificados através do Instagram e Facebook de forma profissional." 
          />
          <ModuleCard 
            num="03" 
            icon={<Layout size={32} />} 
            title="Páginas de Alta Conversão" 
            desc="Design focado em vendas. Transformamos seu site em um vendedor que trabalha 24h." 
          />
          <ModuleCard 
            num="04" 
            icon={<TrendingUp size={32} />} 
            title="Estratégia de Escala" 
            desc="Aprenda a analisar métricas e aumentar o investimento onde o lucro é garantido." 
          />
          <ModuleCard 
            num="05" 
            icon={<ShoppingBag size={32} />} 
            title="Google Shopping" 
            desc="Exponha seus produtos na vitrine do Google e aumente suas vendas de e-commerce." 
          />
          <ModuleCard 
            num="06" 
            icon={<Search size={32} />} 
            title="SEO & Inteligência" 
            desc="Fique orgânico e utilize IA para produzir conteúdos que vendem mais rápido." 
          />
        </div>
      </div>
    </section>
  );
};

export default Modules;
