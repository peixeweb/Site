
import React from 'react';
import { CheckCircle2, Rocket } from 'lucide-react';

const Feature: React.FC<{ title: string; desc: string }> = ({ title, desc }) => (
  <div className="flex gap-4 text-left bg-slate-50 p-6 rounded-2xl border border-slate-100 transition-all hover:shadow-md">
    <div className="mt-1 shrink-0">
      <CheckCircle2 className="text-cyan-500" size={24} />
    </div>
    <div>
      <h4 className="font-bold text-[#001B3D] text-lg mb-1">{title}</h4>
      <p className="text-slate-600">{desc}</p>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Blobs moved to background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
        <div className="absolute left-0 top-0 w-96 h-96 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute right-0 bottom-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-cyan-500 font-bold tracking-widest uppercase text-sm mb-4 block">Quem Somos</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#001B3D] mb-8 leading-tight">
            Somos novos no mercado, mas experientes no <span className="text-cyan-500 underline decoration-cyan-500/30 underline-offset-8">sucesso do cliente.</span>
          </h2>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            A <strong>Peixeweb</strong> nasceu com o propósito de democratizar o marketing digital de alta performance. Somos uma agência jovem, ágil e movida por resultados concretos. Nosso foco é o crescimento regional: acreditamos que o sucesso do empreendedor local movimenta toda a economia.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Feature 
              title="Estratégia Sob Medida" 
              desc="Não acreditamos em fórmulas prontas. Cada negócio recebe uma análise profunda antes da execução."
            />
            <Feature 
              title="Transparência Total" 
              desc="Relatórios claros e diretos. Você sabe exatamente onde seu dinheiro está sendo investido."
            />
            <Feature 
              title="Agilidade de Resposta" 
              desc="Por sermos focados no regional, nosso suporte é humano, próximo e extremamente rápido."
            />
            <div className="flex gap-4 text-left bg-cyan-500 p-6 rounded-2xl border border-cyan-400 transition-all hover:shadow-lg">
              <div className="mt-1 shrink-0 text-[#001B3D]">
                <Rocket size={24} />
              </div>
              <div>
                <h4 className="font-bold text-[#001B3D] text-lg mb-1">Nossa Missão</h4>
                <p className="text-[#001B3D]/80">Transformar pequenos negócios em referências digitais através do crescimento regional.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
             <a href="https://fishweb.my.canva.site/peixeweb" target="_blank" className="inline-flex items-center gap-2 font-bold text-cyan-600 hover:text-cyan-700 transition-colors group text-lg">
               Ver nosso portfólio completo
               <div className="group-hover:translate-x-1 transition-transform">
                 <Rocket size={20} />
               </div>
             </a>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default About;
