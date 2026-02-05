
import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white text-black">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-black mb-12">FAÇA SUA INSCRIÇÃO AGORA:</h2>
        
        <div className="bg-[#111] text-white rounded-[40px] p-8 md:p-16 border-4 border-yellow-500 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-yellow-500 text-black font-black px-6 py-2 rounded-bl-3xl uppercase text-xs tracking-widest">Oferta Limitada</div>
          
          <div className="mb-12">
            <p className="text-slate-500 line-through text-2xl font-bold mb-2 uppercase">De: R$ 2.500,00</p>
            <p className="text-yellow-500 font-black text-lg mb-4 uppercase">Por apenas:</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2">
              <span className="text-3xl font-bold">12x de</span>
              <span className="text-6xl md:text-8xl font-black text-white">R$ 129,45</span>
            </div>
            <p className="text-slate-400 mt-4 uppercase font-bold tracking-widest">Ou R$ 1.297,00 à vista</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-left mb-12 max-w-xl mx-auto">
            <div className="flex items-center gap-3"><Check className="text-yellow-500" /> <span>Consultoria Estratégica</span></div>
            <div className="flex items-center gap-3"><Check className="text-yellow-500" /> <span>Gestão de Google & Meta</span></div>
            <div className="flex items-center gap-3"><Check className="text-yellow-500" /> <span>Criação de Landing Page</span></div>
            <div className="flex items-center gap-3"><Check className="text-yellow-500" /> <span>Bônus: IA para Anúncios</span></div>
          </div>

          <a href="https://api.whatsapp.com/send?phone=5511914716715" className="block w-full bg-[#28a745] hover:bg-[#218838] py-6 rounded-2xl text-2xl font-black uppercase tracking-tight transform hover:scale-105 transition-all mb-8">
            Quero Me Inscrever Agora
          </a>

          <div className="flex items-center justify-center gap-4 border-t border-white/10 pt-8">
            <ShieldCheck className="text-green-500" size={32} />
            <div className="text-left">
              <p className="font-bold uppercase leading-none">Garantia Incondicional</p>
              <p className="text-sm text-slate-500">7 dias para testar ou seu dinheiro de volta.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
