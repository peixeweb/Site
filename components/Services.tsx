
import React from 'react';
import { TrendingUp, Layout, Search, Instagram, ArrowRight, CheckCircle2 } from 'lucide-react';

const ServiceCard: React.FC<{ title: string; description: string; icon: React.ReactNode; benefits: string[] }> = ({ title, description, icon, benefits }) => (
  <div className="group bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-cyan-200/50 transition-all duration-300 hover:-translate-y-2">
    <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-6 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4 text-[#001B3D]">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-6">
      {description}
    </p>
    <ul className="space-y-3 mb-8">
      {benefits.map((b, i) => (
        <li key={i} className="flex items-center gap-2 text-sm font-medium text-slate-700">
          <CheckCircle2 size={16} className="text-cyan-500" />
          {b}
        </li>
      ))}
    </ul>
    <a 
      href="#contato"
      className="text-cyan-600 font-bold flex items-center gap-2 text-sm group-hover:gap-3 transition-all hover:text-cyan-400"
    >
      Solicitar Estratégia <ArrowRight size={16} />
    </a>
  </div>
);

const Services: React.FC<{ setView: any }> = () => {
  return (
    <section id="servicos" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4 block">Fase de Atração</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#001B3D] mb-4">
            Soluções que geram <span className="text-cyan-500">lucro real</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Não entregamos apenas cliques ou visualizações. Entregamos o que seu negócio precisa: clientes qualificados e dinheiro no caixa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            icon={<TrendingUp size={28} />}
            title="Google Ads"
            description="Seja a primeira resposta quando seu cliente procurar por você."
            benefits={["Campanhas de Pesquisa", "Otimização de CPC", "Remarketing"]}
          />
          <ServiceCard
            icon={<Instagram size={28} />}
            title="Meta Ads"
            description="Transforme seguidores em compradores fiéis e constantes."
            benefits={["Instagram & FB Ads", "Gestão de Criativos", "Escala de Vendas"]}
          />
          <ServiceCard
            icon={<Layout size={28} />}
            title="Sites e Lojas"
            description="Plataformas feitas para converter visitantes em clientes."
            benefits={["Landing Pages", "E-commerces", "SEO Integrado"]}
          />
          <ServiceCard
            icon={<Search size={28} />}
            title="SEO Local"
            description="Domine sua região e seja encontrado organicamente."
            benefits={["Google Maps", "Audit Técnico", "Autoridade Digital"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
