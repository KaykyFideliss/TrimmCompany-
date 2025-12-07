
import React from 'react';
import { Zap, Target, Heart } from 'lucide-react';
import Navbar from '../components/Navbar';
import Rodape from '../components/Footer'; 
import Cta from '../components/Cta';
import { Button } from '../components/UiComponents';

// Dados de Missão, Visão e Valores (M.V.V.)
const mva = [
    { icon: Target, title: "Nossa Missão", text: "Conectar o mercado de beleza, oferecendo ferramentas que impulsionam o sucesso de profissionais e facilitam a vida dos clientes.", color: "text-ocean-500" },
    { icon: Zap, title: "Nossa Visão", text: "Ser o sistema operacional definitivo do setor de beleza e bem-estar na América Latina até 2030.", color: "text-petal-500" },
    { icon: Heart, title: "Nossos Valores", text: "Foco no Profissional, Inovação Contínua, Transparência e Construção de Comunidade.", color: "text-emerald-500" },
];

export default function Sobre() {
  return (
    <div className="min-h-screen font-sans text-dust-900 transition-colors duration-300"> 
       <Navbar /> 
       
       <main className="pt-24">
          
          {/* Hero da Página Sobre */}
          <section className="py-24 bg-dust-50">
             <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                 <div className="space-y-6">
                     <span className="text-sm font-medium uppercase tracking-wider text-ocean-600">A Jornada Fivonn</span>
                     <h1 className="text-6xl font-display font-bold text-dust-900 leading-tight">
                         Transformando o <span className="text-ocean-500">futuro</span> da beleza.
                     </h1>
                     <p className="text-xl text-dust-500 max-w-lg">
                        Começamos com uma missão simples: modernizar a relação entre clientes e profissionais de beleza, eliminando atritos de agenda e finanças.
                     </p>
                     <Button variant="primary" className="mt-4">Ver Carreira</Button>
                 </div>
                 
                 <div className="relative h-[400px] bg-dust-200 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                       src="https://images.unsplash.com/photo-1579389083046-c92518e3c35b?q=80&w=1500&auto=format&fit=crop" 
                       alt="Equipe Fivonn" 
                       className="w-full h-full object-cover opacity-90 mix-blend-multiply" 
                    />
                 </div>
             </div>
          </section>

          {/* Seção M.V.V. */}
          <section className="py-24 bg-white">
             <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-display font-bold text-dust-900">Nossa Essência.</h2>
                    <p className="text-lg text-dust-500">Missão, Visão e os pilares que nos guiam todos os dias.</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {mva.map((item, index) => (
                        <div key={index} className="p-8 bg-dust-50 rounded-xl border border-dust-200 hover:shadow-lg transition-shadow duration-300">
                            <item.icon size={32} className={`mb-4 ${item.color}`} />
                            <h3 className="text-xl font-bold mb-2 text-dust-900">{item.title}</h3>
                            <p className="text-dust-600">{item.text}</p>
                        </div>
                    ))}
                </div>
             </div>
          </section>

          <Cta />
       </main>
       <Rodape />
    </div>
  );
}