
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { Button } from './UiComponents';

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('cliente');
  
  const content = {
    cliente: {
      title: "Para Você",
      desc: "Encontre os melhores profissionais perto de você. Agende em segundos e compre produtos exclusivos.",
      features: ["Discovery & Geolocalização", "Marketplace Dropshipping", "Histórico & Avaliações", "Chat Direto"],
      image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=1000",
      cta: "Encontrar Barbeiro"
    },
    profissional: {
      title: "Para Autônomos",
      desc: "Sua carreira no próximo nível. Gestão completa, IA financeira e vitrine para novos clientes.",
      features: ["Agenda Inteligente", "IA Financeira", "Perfil Público", "Gestão de Serviços"],
      image: "/images/barbeiro.jpg",
      cta: "Sou Profissional"
    },
    empresa: {
      title: "Para Empresas",
      desc: "Gestão robusta para salões e barbearias. Controle equipes, comissões e contrate talentos.",
      features: ["Gestão de Equipe", "Painel de Vagas", "Analytics Avançado", "Sistema de Comissões"],
      image: "/images/salao.jpg",
      cta: "Cadastrar Empresa"
    }
  };

  return (
    // 🎯 CORREÇÃO: Removido px-6. Fundo ajustado para dust-800 no Dark Mode.
    <section id="solucoes" className="py-24 bg-dust-50 dark:bg-dust-800 border-y border-dust-200 dark:border-dust-800 transition-colors duration-300">
      
      {/* 🎯 CORREÇÃO: Adiciona px-6 aqui. */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-dust-900 dark:text-white mb-4">Um app, três experiências.</h2>
          <div className="flex justify-center gap-2 p-1 bg-dust-200 dark:bg-dust-800 rounded-full w-fit mx-auto">
            {Object.keys(content).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === key ? 'bg-white dark:bg-dust-700 shadow-sm text-dust-900 dark:text-white' : 'text-dust-500 hover:text-dust-900 dark:hover:text-dust-300'}`}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatePresence mode='wait'>
            <motion.div 
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              <h3 className="text-4xl font-bold text-dust-900 dark:text-white">{content[activeTab].title}</h3>
              <p className="text-xl text-dust-500">{content[activeTab].desc}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {content[activeTab].features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-dust-700 dark:text-dust-300">
                    <div className="w-6 h-6 rounded-full bg-ocean-100 dark:bg-ocean-900 text-ocean-600 flex items-center justify-center shrink-0">
                      <ShieldCheck size={14} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
              <Button variant="primary" className="mt-4 group">
                {content[activeTab].cta} 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"/>
              </Button>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode='wait'>
            <motion.div
              key={activeTab + '-img'}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-2xl border border-dust-200 dark:border-dust-800"
            >
              <img src={content[activeTab].image} alt={activeTab} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                 <div className="text-white">
                    <p className="font-mono text-xs opacity-70 mb-2 tracking-widest uppercase">Interface Preview</p>
                    <div className="flex gap-2">
                       <span className="w-2 h-2 rounded-full bg-red-500"/>
                       <span className="w-2 h-2 rounded-full bg-yellow-500"/>
                       <span className="w-2 h-2 rounded-full bg-green-500"/>
                    </div>
                 </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}