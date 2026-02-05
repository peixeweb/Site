
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
    <section id="resultados" className="py-24 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">RESULTADOS REAIS</h2>
          <p className="text-yellow-500 font-bold">Vejam o que dizem quem já aplica nosso método</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl overflow-hidden p-2">
            <img src="https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80&w=2070" alt="Result 1" className="rounded-lg" />
          </div>
          <div className="bg-white rounded-xl overflow-hidden p-2">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" alt="Result 2" className="rounded-lg" />
          </div>
          <div className="bg-white rounded-xl overflow-hidden p-2">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" alt="Result 3" className="rounded-lg" />
          </div>
          <div className="bg-white rounded-xl overflow-hidden p-2">
            <img src="https://images.unsplash.com/photo-1553484771-047a44eee27b?auto=format&fit=crop&q=80&w=2070" alt="Result 4" className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;
