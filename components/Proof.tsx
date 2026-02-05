
import React from 'react';
import { Star } from 'lucide-react';

const Testimonial: React.FC<{ name: string; text: string }> = ({ name, text }) => (
  <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
    <div className="flex gap-1 text-yellow-500 mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
    </div>
    <p className="text-slate-300 italic mb-6">"{text}"</p>
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-black">
        {name[0]}
      </div>
      <p className="font-bold text-white">{name}</p>
    </div>
  </div>
);

const Proof: React.FC = () => {
  return (
    // Changed py-24 to pt-24 pb-8 to reduce bottom spacing
    <section id="resultados" className="pt-24 pb-8 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">RESULTADOS REAIS</h2>
          <p className="text-yellow-500 font-bold">Vejam o que dizem quem já aplica nosso método</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Testimonial 
            name="Tiago M." 
            text="Sinceramente, essas aulas sobre estratégias de lances são épicas. Mudou meu jogo no Google Ads." 
          />
          <Testimonial 
            name="Samir A." 
            text="Só assisti a primeira aula e já parei de perder dinheiro. O suporte é fenomenal." 
          />
          <Testimonial 
            name="David G." 
            text="Conteúdo direto ao ponto. Consegui mudar minha estrutura e as vendas começaram a cair." 
          />
        </div>
      </div>
    </section>
  );
};

export default Proof;
