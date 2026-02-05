
import React from 'react';
import { TrendingUp, Instagram, Layout, Search, ArrowRight, CheckCircle2, ShoppingCart, Globe, ArrowLeft } from 'lucide-react';
import { ViewState } from '../App';

interface DetailedServicesProps {
  setView: (view: ViewState) => void;
}

const ServiceDetail: React.FC<{ icon: React.ReactNode, title: string, description: string, list: string[] }> = ({ icon, title, description, list }) => (
  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 hover:shadow-cyan-200/20 transition-all">
    <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center text-cyan-600 mb-6">
      {icon}
    </div>
    <h3 className="text-2xl font-extrabold text-[#001B3D] mb-4">{title}</h3>
    <p className="text-slate-600 mb-8 leading-relaxed text-lg">
      {description}
    </p>
    <ul className="grid md:grid-cols-2 gap-4">
      {list.map((item, i) => (
        <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
          <CheckCircle2 size={18} className="text-cyan-500" />
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const DetailedServices: React.FC<DetailedServicesProps> = ({ setView }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Navigation Helper */}
      <div className="bg-[#001B3D] pt-8 px-6">
        <div className="container mx-auto">
          <button 
            onClick={() => setView('home')}
            className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors font-bold text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={18} />
            Voltar para Home
          </button>
        </div>
      </div>

      {/* Header Section */}
      <section className="pb-20 pt-12 bg-[#001B3D] text-white text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold font-montserrat mb-6">
            Nossas <span className="text-cyan-400">Soluções</span> Digitais
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Estratégias personalizadas para tirar sua empresa da invisibilidade e colocá-la na frente dos seus melhores clientes.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 space-y-16">
          <ServiceDetail 
            icon={<TrendingUp size={40} />}
            title="Gestão de Tráfego: Google Ads"
            description="Apareça para quem já está procurando pelo que você vende. O Google Ads é a ferramenta mais poderosa de intenção de compra do mundo."
            list={[
              "Campanhas de Pesquisa",
              "Youtube Ads",
              "Remarketing Inteligente",
              "Google Shopping",
              "Rede de Display",
              "Otimização de CPC"
            ]}
          />

          <ServiceDetail 
            icon={<Instagram size={40} />}
            title="Gestão de Tráfego: Meta Ads"
            description="Crie desejo e engajamento. No Instagram e Facebook, encontramos seu cliente ideal com base no comportamento e interesses dele."
            list={[
              "Anúncios no Feed & Stories",
              "Campanhas de WhatsApp",
              "Geração de Leads",
              "Venda Direta (Catalog)",
              "Audiências Lookalike",
              "A/B Testing de Criativos"
            ]}
          />

          <ServiceDetail 
            icon={<Globe size={40} />}
            title="Desenvolvimento Web"
            description="Seu site é seu cartão de visitas e sua maior ferramenta de vendas. Criamos experiências rápidas, modernas e focadas em conversão."
            list={[
              "Landing Pages de Alta Conversão",
              "Sites Institucionais",
              "Lojas Virtuais (E-commerce)",
              "Blogs e Portais",
              "Otimização de Velocidade",
              "Design Responsivo (Mobile First)"
            ]}
          />

          <ServiceDetail 
            icon={<Search size={40} />}
            title="SEO & Autoridade"
            description="Construa um ativo de longo prazo. Otimizamos seu site para que o Google o entenda como a melhor resposta para as dúvidas dos seus clientes."
            list={[
              "Auditoria Técnica",
              "Pesquisa de Palavras-chave",
              "Otimização On-Page",
              "Link Building Ético",
              "SEO Local (Google Maps)",
              "Produção de Conteúdo"
            ]}
          />
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 ocean-gradient text-white overflow-hidden relative">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16">Nosso Processo de Trabalho</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Imersão', desc: 'Entendemos seu negócio, público e objetivos reais.' },
              { step: '02', title: 'Estratégia', desc: 'Traçamos o plano tático para atingir suas metas.' },
              { step: '03', title: 'Execução', desc: 'Colocamos as campanhas e tecnologias no ar.' },
              { step: '04', title: 'Escala', desc: 'Analisamos dados e aumentamos o que traz lucro.' },
            ].map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="text-6xl font-black text-white/5 absolute -top-10 left-1/2 -translate-x-1/2 group-hover:text-cyan-400/10 transition-colors">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold mb-2 text-cyan-400">{item.title}</h4>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-20">
            <a 
              href="https://api.whatsapp.com/send?phone=5511914716715"
              target="_blank"
              className="inline-flex items-center gap-3 bg-white text-[#001B3D] font-bold px-10 py-5 rounded-2xl hover:bg-cyan-400 transition-all text-xl"
            >
              Iniciar meu Projeto
              <ArrowRight size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailedServices;
