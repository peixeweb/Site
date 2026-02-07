
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-emerald-500 transition-colors group"
      >
        <span className="text-lg font-bold uppercase tracking-tight group-hover:text-emerald-400 transition-colors">{q}</span>
        {isOpen ? <ChevronUp className="text-emerald-500" /> : <ChevronDown className="text-slate-500 group-hover:text-emerald-500" />}
      </button>
      {isOpen && (
        <div className="pb-6 text-slate-300 leading-relaxed text-base border-l-2 border-emerald-500/30 pl-4 ml-1">
          {a}
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-4">AINDA COM DÚVIDA?</h2>
        <p className="text-center text-slate-400 mb-16 max-w-xl mx-auto">
          Respostas diretas para quem não tem tempo a perder e quer escalar o faturamento da empresa.
        </p>
        <div className="space-y-2">
          <FAQItem 
            q="Quanto tempo demora para ver o dinheiro voltar?" 
            a="Diferente de SEO ou Branding que levam meses, o Tráfego Pago coloca sua empresa na frente de quem está comprando agora. Muitas vezes geramos leads qualificados nas primeiras 48h. Nosso foco é acelerar seu ROI (Retorno sobre Investimento) para que o próprio lucro pague a campanha e financie o crescimento do próximo mês." 
          />
          <FAQItem 
            q="Meu site é antigo ou não tenho um. Isso impede o projeto?" 
            a="De forma alguma. Não deixe a tecnologia travar seu crescimento. Se seu site não converte, nós resolvemos. Parte da nossa estratégia inclui a criação de Landing Pages de Alta Conversão, desenhadas especificamente para transformar visitantes em pedidos de orçamento. Entregamos a máquina de vendas completa, você só precisa atender os clientes." 
          />
          <FAQItem 
            q="Tenho medo de investir e não ter retorno. Qual a garantia?" 
            a="O tráfego não é uma aposta, é matemática. Não exigimos verbas milionárias para começar. Definimos um orçamento inicial seguro para validar os criativos e o público. Assim que o lucro começar a entrar e o Custo por Aquisição (CPA) estiver validado, nós escalamos. Você só coloca mais dinheiro quando o dinheiro já estiver voltando para o caixa da empresa." 
          />
          <FAQItem 
            q="Como funciona o acompanhamento? Vou falar com robôs?" 
            a="Esqueça tickets de suporte e robôs. Na Peixeweb, você é tratado como parceiro de negócios. Você terá acesso direto ao estrategista responsável via WhatsApp e reuniões periódicas de alinhamento. Não somos apenas executores de anúncios, somos o braço direito de crescimento comercial da sua empresa. Monitoramos suas campanhas diariamente." 
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
