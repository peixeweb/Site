
import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const logoUrl = "https://lh3.googleusercontent.com/d/1UCMSOadfQEJ0-xsTNdVct6AMCkt-D3yr";

  return (
    <footer className="bg-[#001B3D] text-white py-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-24 h-24 flex items-center justify-center bg-white/5 rounded-xl p-1">
                <img 
                  src={logoUrl} 
                  alt="Peixeweb Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-extrabold font-montserrat tracking-tighter">
                PEIXE<span className="text-cyan-400">WEB</span>
              </span>
            </a>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
              Agência Peixeweb: Transformando negócios comuns em presenças digitais extraordinárias. Focados em ROI, transparência e crescimento real.
            </p>
            
            <div className="space-y-3">
              <h5 className="text-xs font-bold uppercase tracking-widest text-cyan-400">Redes sociais</h5>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/peixeweb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-cyan-500 transition-colors text-white"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Links Rápidos</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#servicos" className="hover:text-cyan-400 transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="hover:text-cyan-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#contato" className="hover:text-cyan-400 transition-colors">Contato</a></li>
              <li><a href="https://fishweb.my.canva.site/peixeweb" target="_blank" className="hover:text-cyan-400 transition-colors">Portfólio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Serviços</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#servicos" className="hover:text-cyan-400 transition-colors">Google Ads</a></li>
              <li><a href="#servicos" className="hover:text-cyan-400 transition-colors">Meta Ads</a></li>
              <li><a href="#servicos" className="hover:text-cyan-400 transition-colors">Criação de Sites</a></li>
              <li><a href="#servicos" className="hover:text-cyan-400 transition-colors">Lojas Virtuais</a></li>
              <li><a href="#servicos" className="hover:text-cyan-400 transition-colors">Otimização SEO</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Peixeweb Agência de Marketing. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
