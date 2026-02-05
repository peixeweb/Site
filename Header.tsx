
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLinkProps } from '../types';

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-slate-200 hover:text-cyan-400 font-medium transition-colors duration-200 text-sm uppercase tracking-wider"
  >
    {children}
  </a>
);

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Direct link format for Google Drive images
  const logoUrl = "https://lh3.googleusercontent.com/d/1UCMSOadfQEJ0-xsTNdVct6AMCkt-D3yr";

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#001B3D]/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative w-24 h-24 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <img 
              src={logoUrl} 
              alt="Peixeweb Logo" 
              className="w-full h-full object-contain"
              onError={(e) => {
                // Fallback in case of link failure
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <span className="text-2xl font-extrabold font-montserrat text-white tracking-tighter">
            PEIXE<span className="text-cyan-400">WEB</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#servicos">Serviços</NavLink>
          <NavLink href="#sobre">Sobre</NavLink>
          <NavLink href="#contato">Contato</NavLink>
          <a
            href="https://api.whatsapp.com/send?phone=5511914716715"
            target="_blank"
            className="bg-cyan-500 hover:bg-cyan-400 text-[#001B3D] font-bold px-6 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
          >
            Começar
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#001B3D] border-t border-blue-900 transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 py-8' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          <NavLink href="#home" onClick={() => setIsOpen(false)}>Home</NavLink>
          <NavLink href="#servicos" onClick={() => setIsOpen(false)}>Serviços</NavLink>
          <NavLink href="#sobre" onClick={() => setIsOpen(false)}>Sobre</NavLink>
          <NavLink href="#contato" onClick={() => setIsOpen(false)}>Contato</NavLink>
          <a
            href="https://api.whatsapp.com/send?phone=5511914716715"
            target="_blank"
            className="bg-cyan-500 text-[#001B3D] font-bold px-8 py-3 rounded-full"
          >
            Quero um Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
