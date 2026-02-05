
import React from 'react';
import { Target, Users, ShieldCheck, Zap, Rocket, Fish, ArrowLeft } from 'lucide-react';
import { ViewState } from '../types';

interface DetailedAboutProps {
  setView: (view: ViewState) => void;
}

const ValueCard: React.FC<{ icon: React.ReactNode, title: string, text: string }> = ({ icon, title, text }) => (
  <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-lg hover:border-cyan-500/30 transition-all">
    <div className="text-cyan-500 mb-6">{icon}</div>
    <h3 className="text-xl font-bold text-[#001B3D] mb-3">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{text}</p>
  </div>
);

const DetailedAbout: React.FC<DetailedAboutProps> = ({ setView }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation Helper */}
      <div className="bg-slate-50 pt-8 px-6">
        <div className="container mx-auto">
          <button 
            onClick={() => setView('home')}
            className="flex items-center gap-2 text-[#001B3D] hover:text-cyan-600 transition-colors font-bold text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={18} />
            Voltar para Home
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pb-24 pt-12 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-500/5 -skew-x-12"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-cyan-600 font-bold uppercase tracking-widest text-sm mb-4 block">Manifesto Peixeweb</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#001B3D] mb-8 font-montserrat leading-tight">
              Ajudando negócios a nadar contra a corrente da <span className="text-cyan-500 italic">invisibilidade.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed font-light mb-8">
              A Peixeweb não é apenas mais uma agência de marketing. Somos parceiros estratégicos de empreendedores que cansarão de "testar" e agora querem vender.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
             <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
                 alt="Nossa Cultura" 
                 className="w-full h-auto"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#001B3D]/80 to-transparent"></div>
               <div className="absolute bottom-8 left-8">
                 <div className="flex items-center gap-3 text-white">
                   <Fish size={40} className="text-cyan-400" />
                   <div>
                     <p className="text-sm font-bold uppercase opacity-60">Fundação</p>
                     <p className="text-2xl font-black">2024</p>
                   </div>
                 </div>
               </div>
             </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-extrabold text-[#001B3D] mb-6">Por que Peixeweb?</h2>
            <p className="text-slate-600 mb-6 text-lg">
              No vasto oceano da internet, muitas empresas são como pequenos peixes perdidos, tentando encontrar o caminho para o cliente. Nós criamos as correntes certas para que você chegue ao seu destino com agilidade.
            </p>
            <p className="text-slate-600 mb-8 text-lg">
              Nosso nome carrega nossa essência: a fluidez da água (digital) aliada à agilidade do peixe (sua empresa) navegando na teia (web). Focamos no regional porque acreditamos que a proximidade gera confiança e resultados mais rápidos.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
                <ShieldCheck className="text-green-500" />
                <span className="font-bold text-slate-700">Compromisso com o ROI (Retorno)</span>
              </div>
              <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl">
                <Target className="text-red-500" />
                <span className="font-bold text-slate-700">Estratégias 100% Data-Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#001B3D]">Nossos Pilares</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<Zap size={32} />}
              title="Agilidade Digital"
              text="O mercado muda em horas. Nós respondemos em minutos. Nossas campanhas são otimizadas diariamente para não perder oportunidades."
            />
            <ValueCard 
              icon={<Users size={32} />}
              title="Foco no Regional"
              text="Conhecemos a realidade do empreendedor local. Nossa linguagem e estratégia são adaptadas para o público da sua região."
            />
            <ValueCard 
              icon={<ShieldCheck size={32} />}
              title="Ética e Transparência"
              text="Acesso total às suas contas de anúncios. Sem taxas escondidas, sem contratos abusivos. Parceria de verdade."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="bg-[#001B3D] rounded-[50px] p-12 md:p-20 text-center relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 relative z-10">
               Pronto para dominar o seu <span className="text-cyan-400">mercado?</span>
             </h2>
             <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto relative z-10">
               Não deixe sua empresa à deriva. Vamos construir o motor de vendas que você sempre precisou.
             </p>
             <a 
               href="https://api.whatsapp.com/send?phone=5511914716715"
               target="_blank"
               className="inline-flex items-center gap-3 bg-cyan-500 text-[#001B3D] font-bold px-12 py-5 rounded-2xl hover:bg-cyan-400 transition-all text-xl relative z-10 hover:scale-105"
             >
               Agendar Consultoria Grátis
               <Rocket size={24} />
             </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailedAbout;
