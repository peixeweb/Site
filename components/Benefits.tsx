
import React from 'react';
import { Target, TrendingUp, Zap, BarChart } from 'lucide-react';

const BenefitItem: React.FC<{ text: string }> = ({ text }) => (
  <div className="flex items-start gap-4 mb-6">
    <div className="mt-1 bg-yellow-500 rounded-full p-1 text-black">
      <Zap size={16} fill="currentColor" />
    </div>
    <p className="text-lg font-bold text-slate-200">{text}</p>
  </div>
);

const Benefits: React.FC = () => {
  return (
    <section className="py-24 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
              Com a <span className="text-yellow-600">Peixeweb</span> você será capaz de:
            </h2>
            <div className="space-y-2">
              <BenefitItem text="CRIAR CAMPANHAS DO JEITO CERTO, passo a passo, atraindo os melhores clientes para seu negócio." />
              <BenefitItem text="ESCALAR SEUS RESULTADOS e construir um marketing sólido que não depende de sorte." />
              <BenefitItem text="ACELERAR O CRESCIMENTO DA EMPRESA sem medo de desperdiçar orçamento com cliques vazios." />
              <BenefitItem text="UTILIZAR AS FERRAMENTAS MAIS ATUAIS, incluindo Inteligência Artificial para otimizar conversões." />
            </div>
            <a href="#pricing" className="mt-8 inline-block bg-[#28a745] text-white px-8 py-4 rounded-xl font-black uppercase text-center hover:scale-105 transition-all">
              Quero me inscrever agora
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" className="rounded-2xl shadow-xl" alt="Métricas" />
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" className="rounded-2xl shadow-xl mt-8" alt="Dashboard" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
