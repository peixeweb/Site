
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-yellow-500 transition-colors"
      >
        <span className="text-lg font-bold uppercase tracking-tight">{q}</span>
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>
      {isOpen && (
        <div className="pb-6 text-slate-400 leading-relaxed">
          {a}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16">AINDA COM DÚVIDA?</h2>
        <div className="space-y-2">
          <FAQItem q="Quanto tempo demora para ter resultados?" a="Os resultados iniciais no Google Ads podem aparecer nas primeiras 48h de campanha ativa. A escala real acontece entre o primeiro e o terceiro mês." />
          <FAQItem q="Preciso ter um site para começar?" a="Não. Se você não tiver, nós criamos a sua estrutura de alta conversão (Landing Page) inclusa em nosso método." />
          <FAQItem q="Quanto preciso investir em anúncios?" a="Recomendamos um investimento mínimo de R$ 30,00 por dia para ter dados suficientes para otimização inicial." />
          <FAQItem q="Tenho suporte durante o processo?" a="Sim. Você terá acesso direto aos nossos especialistas via WhatsApp para tirar dúvidas e analisar métricas." />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
