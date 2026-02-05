
import React from 'react';
import { TrendingUp, Layout, Search, Instagram, MousePointer2 } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <div className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-cyan-200/50 transition-all duration-300 hover:-translate-y-2">
    <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 text-[#001B3D]">{title}</h3>
    <p className="text-slate-600 leading-relaxed">
      {description}
    </p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#001B3D] mb-4">
            Serviços para sua <span className="text-cyan-500">evolução</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Combinamos tecnologia e criatividade para colocar sua empresa em destaque no radar dos seus clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<TrendingUp size={32} />}
            title="Google Ads"
            description="Apareça no topo das buscas do Google. Atraímos clientes qualificados no exato momento em que eles procuram pelo seu produto."
          />
          <ServiceCard
            icon={<Instagram size={32} />}
            title="Meta Ads"
            description="Domine o Instagram e Facebook. Criamos anúncios que geram desejo, engajamento e vendas diretas através de públicos segmentados."
          />
          <ServiceCard
            icon={<Layout size={32} />}
            title="Sites e Lojas"
            description="Desenvolvemos plataformas modernas, rápidas e otimizadas. Sua vitrine digital aberta 24h por dia para o mundo."
          />
          <ServiceCard
            icon={<Search size={32} />}
            title="SEO Profissional"
            description="Fique nas primeiras posições orgânicas. Otimizamos seu site para que ele seja encontrado sem depender apenas de anúncios."
          />
        </div>
        
        <div className="mt-16 bg-[#001B3D] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
           <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full -mr-16 -mt-16"></div>
           <div className="relative z-10 text-center md:text-left">
              <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">Precisa de uma estratégia personalizada?</h4>
              <p className="text-cyan-100/70">Vamos analisar seu negócio e propor o melhor caminho para o crescimento.</p>
           </div>
           <a 
            href="https://api.whatsapp.com/send?phone=5511914716715"
            target="_blank"
            className="relative z-10 bg-cyan-500 hover:bg-cyan-400 text-[#001B3D] font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 active:scale-95 whitespace-nowrap"
           >
             Falar com Consultor
           </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
