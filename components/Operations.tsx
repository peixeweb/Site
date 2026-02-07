
import React from 'react';
import { BarChart3, Target, MousePointer2, Zap } from 'lucide-react';

const MetricBadge: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl flex flex-col items-center flex-1">
    <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">{label}</span>
    <span className="text-white text-3xl font-extrabold font-montserrat">{value}</span>
  </div>
);

const Operations: React.FC = () => {
  return (
    <section id="resultados" className="py-24 ocean-gradient relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 text-emerald-400 text-sm font-semibold tracking-widest uppercase mb-6 border border-white/10">
            Desejo & Autoridade
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 leading-tight font-montserrat">
            Nós vivemos por <span className="text-emerald-400">números.</span>
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed font-light">
            Nossa estratégia é pautada no seu ROI. Monitoramos cada clique em tempo real para garantir a máxima eficiência do seu orçamento.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <MetricBadge label="ROI Médio" value="4.8x" />
          <MetricBadge label="Conversões" value="+12k" />
          <MetricBadge label="Economia em Ads" value="-35%" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <Target size={28} />
            </div>
            <h4 className="text-white font-bold mb-2">Públicos Qualificados</h4>
            <p className="text-slate-400 text-sm">Focamos em quem realmente tem o cartão na mão para comprar.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <MousePointer2 size={28} />
            </div>
            <h4 className="text-white font-bold mb-2">Testes A/B Incansáveis</h4>
            <p className="text-slate-400 text-sm">Testamos até encontrar o criativo que traz o menor custo por venda.</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <Zap size={28} />
            </div>
            <h4 className="text-white font-bold mb-2">Escala Explosiva</h4>
            <p className="text-slate-400 text-sm">Expandimos seu negócio assim que validamos o lucro da operação.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Operations;
