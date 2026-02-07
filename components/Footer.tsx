
import React from 'react';
import { Instagram, ArrowUp, Mail } from 'lucide-react';

const Footer: React.FC<{ setView: any }> = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8">
           <img 
            src="https://lh3.googleusercontent.com/d/1UCMSOadfQEJ0-xsTNdVct6AMCkt-D3yr" 
            alt="Peixeweb Logo" 
            className="h-12 md:h-16 w-auto mx-auto mb-4 opacity-90 brightness-110"
          />
          <p className="text-slate-500 mt-4 text-sm max-w-md mx-auto font-medium tracking-wide uppercase">
            Experiência de 03 anos
          </p>
        </div>

        <div className="mb-8">
           <a href="mailto:contato@peixeweb.com.br" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors text-lg font-medium">
             <Mail size={20} />
             contato@peixeweb.com.br
           </a>
        </div>
        
        <div className="mb-8">
          <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-4">Redes Sociais:</h4>
          <div className="flex justify-center gap-6">
            <a href="https://www.instagram.com/peixeweb/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-emerald-500 transition-colors">
              <Instagram size={32} />
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 text-[10px] text-slate-600 uppercase font-bold tracking-[0.2em]">
          <p>© {new Date().getFullYear()} PEIXEWEB AGÊNCIA DIGITAL. TODOS OS DIREITOS RESERVADOS.</p>
        </div>
        
        <a href="#home" className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mt-8 text-xs font-bold uppercase tracking-widest">
          <ArrowUp size={14} /> Voltar ao Topo
        </a>
      </div>
    </footer>
  );
};

export default Footer;
