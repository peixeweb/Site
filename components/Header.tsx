
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { ViewState } from '../types';

interface HeaderProps {
  setView: (view: ViewState) => void;
  currentView: ViewState;
}

const Header: React.FC<HeaderProps> = ({ setView, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Resultados', href: '#resultados' },
    { name: 'Orçamento', href: '#pricing' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      
      if (currentView !== 'home') {
        setView('home');
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
      setIsOpen(false);
    }
  };

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b border-slate-100 ${
        scrolled 
          ? 'bg-white py-2 shadow-xl' 
          : 'bg-white/95 py-4 backdrop-blur-md'
      }`}
    >
      <div className="container mx-auto px-6 flex flex-col items-center relative">
        {/* Logo Aumentado 2x conforme solicitado */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center justify-center mb-4 lg:mb-2 transition-all duration-300"
        >
          <img 
            src="https://lh3.googleusercontent.com/d/1UCMSOadfQEJ0-xsTNdVct6AMCkt-D3yr" 
            alt="Peixeweb Logo" 
            // Aumentado de h-16/20 para h-32/40 no estado inicial
            className={`${scrolled ? 'h-16 md:h-20' : 'h-32 md:h-40'} w-auto transition-all duration-300 hover:scale-105`}
          />
        </a>

        {/* Menu Desktop */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#001B3D] hover:text-cyan-600 font-bold transition-colors text-xs uppercase tracking-[0.2em]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=5511914716715"
            target="_blank"
            className="bg-[#001B3D] text-white font-black px-8 py-3 rounded-xl text-xs uppercase tracking-widest hover:bg-cyan-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-cyan-500/20"
          >
            Falar no Whats
          </a>
        </nav>

        {/* Botão Mobile */}
        <button className="lg:hidden absolute right-6 top-8 text-[#001B3D] p-2 hover:bg-slate-100 rounded-lg transition-colors" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Menu Mobile */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white transition-all duration-300 overflow-hidden border-t border-slate-100 ${
          isOpen ? 'max-h-screen opacity-100 py-8 shadow-2xl' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#001B3D] font-black uppercase tracking-widest text-lg hover:text-cyan-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://api.whatsapp.com/send?phone=5511914716715"
            target="_blank"
            className="bg-green-500 text-white font-black px-10 py-4 rounded-2xl text-sm uppercase tracking-widest shadow-lg mt-4"
          >
            WhatsApp Direto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
