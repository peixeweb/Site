
import React from 'react';
import { Mail, Phone, MapPin, Instagram, ExternalLink } from 'lucide-react';

const ContactInfo: React.FC<{ icon: React.ReactNode; label: string; value: string; link?: string }> = ({ icon, label, value, link }) => (
  <div className="flex items-start gap-4">
    <div className="p-3 bg-white/10 rounded-xl text-cyan-400">
      {icon}
    </div>
    <div>
      <p className="text-sm font-medium text-slate-400 uppercase tracking-wider">{label}</p>
      {link ? (
        <a href={link} target="_blank" className="text-white font-bold text-lg hover:text-cyan-400 transition-colors">
          {value}
        </a>
      ) : (
        <p className="text-white font-bold text-lg">{value}</p>
      )}
    </div>
  </div>
);

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-[#001B3D] relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-xl rounded-[40px] border border-white/10 p-8 md:p-16">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                Vamos pescar grandes <span className="text-cyan-400">oportunidades?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-10">
                Seja para tirar uma dúvida ou iniciar o projeto que vai mudar o rumo da sua empresa, estamos prontos para ouvir você.
              </p>

              <div className="space-y-8">
                <ContactInfo 
                  icon={<Phone size={24} />} 
                  label="WhatsApp" 
                  value="(11) 91471-6715" 
                  link="https://api.whatsapp.com/send?phone=5511914716715"
                />
                <ContactInfo 
                  icon={<Instagram size={24} />} 
                  label="Instagram" 
                  value="@peixeweb" 
                  link="https://www.instagram.com/peixeweb/"
                />
                <ContactInfo 
                  icon={<Mail size={24} />} 
                  label="E-mail" 
                  value="peixeweb@gmail.com" 
                />
                <ContactInfo 
                  icon={<MapPin size={24} />} 
                  label="Atendimento" 
                  value="Brasil" 
                />
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#001B3D] mb-2">Inicie sua Consultoria</h3>
                <p className="text-slate-500">Preencha o formulário e entramos em contato em até 24h.</p>
              </div>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Nome Completo</label>
                  <input type="text" placeholder="Ex: João Silva" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">E-mail Corporativo</label>
                  <input type="email" placeholder="joao@empresa.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Seu WhatsApp</label>
                  <input type="tel" placeholder="(11) 99999-9999" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1">Qual seu principal objetivo?</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all">
                    <option>Mais Vendas</option>
                    <option>Criação de Site</option>
                    <option>Gestão de Anúncios</option>
                    <option>Consultoria Estratégica</option>
                  </select>
                </div>
                <button className="w-full bg-cyan-500 hover:bg-cyan-400 text-[#001B3D] font-bold py-4 rounded-xl text-lg transition-all shadow-lg hover:shadow-cyan-500/30 flex items-center justify-center gap-2">
                   Enviar Mensagem
                   <ExternalLink size={20} />
                </button>
              </form>
              <p className="text-center text-xs text-slate-400 mt-4 italic">
                Ao clicar em enviar, você concorda em ser contatado por nossa equipe via WhatsApp ou E-mail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
