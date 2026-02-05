
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Modules from './components/Modules';
import Proof from './components/Proof';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import AIImageLab from './components/AIImageLab';
// Import missing components to handle view transitions
import DetailedServices from './components/DetailedServices';
import DetailedAbout from './components/DetailedAbout';
import About from './components/About';
import { MessageCircle } from 'lucide-react';

// Fix: Export ViewState type to resolve "missing member" errors in subcomponents
export type ViewState = 'home' | 'sobre' | 'servicos' | 'resultados' | 'pricing';

const App: React.FC = () => {
  // Fix: Track the active view in state
  const [currentView, setView] = useState<ViewState>('home');

  // Fix: Ensure scroll to top when navigation occurs
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-yellow-500 selection:text-black">
      {/* Fix: Pass the current view state and its setter to the Header */}
      <Header setView={setView} currentView={currentView} />
      
      <main>
        {/* Fix: Implement conditional rendering based on currentView */}
        {currentView === 'home' ? (
          <>
            {/* ATENÇÃO */}
            <Hero setView={setView} />
            
            {/* INTERESSE */}
            <About setView={setView} />
            <Benefits />
            
            {/* DESEJO (Resultados e Tecnologia) */}
            <Proof />
            <AIImageLab />
            <Modules />
            
            {/* AÇÃO */}
            <Pricing />
            <FAQ />
          </>
        ) : currentView === 'servicos' ? (
          <DetailedServices setView={setView} />
        ) : currentView === 'sobre' ? (
          <DetailedAbout setView={setView} />
        ) : null}
      </main>

      {/* Fix: Pass setView to Footer for consistent navigation capability */}
      <Footer setView={setView} />

      {/* Floating WhatsApp CTA */}
      <a
        href="https://api.whatsapp.com/send?phone=5511914716715"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

export default App;
