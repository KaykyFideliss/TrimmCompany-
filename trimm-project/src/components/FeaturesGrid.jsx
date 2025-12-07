
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShoppingBag, MapPin, Users } from 'lucide-react';

export default function FeaturesGrid() {
  return (
    
    <section className="py-24 transition-colors duration-300"> 
      
      {}
      <div className="max-w-7xl mx-auto px-6"> 
         <div className="mb-16 md:w-2/3">
           <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-dust-900 dark:text-white">Tecnologia que impulsiona beleza.</h2>
           <p className="text-dust-500 text-lg">De inteligência artificial a dropshipping integrado. O Fivonn não é apenas uma agenda, é o sistema operacional do seu negócio.</p>
         </div>
  
         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {}
            <motion.div whileHover={{ y: -5 }} className="col-span-1 md:col-span-2 p-8 rounded-2xl bg-dust-50 dark:bg-dust-800 border border-dust-200 dark:border-dust-800 relative overflow-hidden group">
               <div className="relative z-10">
                  <div className="w-12 h-12 bg-white dark:bg-dust-700 rounded-lg flex items-center justify-center mb-6 shadow-sm border border-dust-100 dark:border-dust-700">
                     <TrendingUp className="text-ocean-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-dust-900 dark:text-white">IA Financeira Integrada</h3>
                  <p className="text-dust-500 max-w-sm">Algoritmos que analisam seus serviços menos rentáveis, sugerem combos e preveem horários de pico.</p>
               </div>
               {}
            </motion.div>
  
            <motion.div whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-dust-50 dark:bg-dust-800 border border-dust-200 dark:border-dust-800">
               <div className="w-12 h-12 bg-white dark:bg-dust-700 rounded-lg flex items-center justify-center mb-6 shadow-sm border border-dust-100 dark:border-dust-700">
                 <ShoppingBag className="w-6 h-6 text-petal-500" />
               </div>
               <h3 className="text-xl font-bold mb-2 text-dust-900 dark:text-white">Marketplace & Dropshipping</h3>
               <p className="text-dust-500 text-sm">Venda produtos sem estoque. Ganhe comissões a cada venda realizada diretamente pelo seu perfil.</p>
            </motion.div>
  
            <motion.div whileHover={{ y: -5 }} className="p-8 rounded-2xl bg-dust-50 dark:bg-dust-800 border border-dust-200 dark:border-dust-800">
               <div className="w-12 h-12 bg-white dark:bg-dust-700 rounded-lg flex items-center justify-center mb-6 shadow-sm border border-dust-100 dark:border-dust-700">
                 <MapPin className="w-6 h-6 text-emerald-500" />
               </div>
               <h3 className="text-xl font-bold mb-2 text-dust-900 dark:text-white">Geolocalização Inteligente</h3>
               <p className="text-dust-500 text-sm">O cliente te encontra pela proximidade, avaliação ou estilo de corte, com mapas integrados.</p>
            </motion.div>
  
            <motion.div whileHover={{ y: -5 }} className="col-span-1 md:col-span-2 p-8 rounded-2xl bg-dust-50 dark:bg-dust-800 border border-dust-200 dark:border-dust-800 flex flex-col md:flex-row items-center gap-8">
               <div className="flex-1">
                  <div className="w-12 h-12 bg-white dark:bg-dust-700 rounded-lg flex items-center justify-center mb-6 shadow-sm border border-dust-100 dark:border-dust-700">
                    <Users className="w-6 h-6 text-indigo-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-dust-900 dark:text-white">Painel de Vagas & Contratação</h3>
                  <p className="text-dust-500">Salões podem publicar vagas e encontrar profissionais avaliados. O match perfeito para sua cadeira vazia.</p>
               </div>
               
               {}
               <div className="flex-1 w-full bg-white dark:bg-dust-700 p-4 rounded-xl border border-dust-200 dark:border-dust-700 shadow-sm">
                  <div className="flex items-center gap-3 mb-3">
                     <div className="w-8 h-8 rounded-full bg-dust-200 dark:bg-dust-600" />
                     <div>
                        <div className="h-2 w-24 bg-dust-200 dark:bg-dust-600 rounded mb-1" />
                        <div className="h-2 w-16 bg-dust-200 dark:bg-dust-600 rounded" />
                     </div>
                  </div>
                  <div className="flex gap-2">
                     <div className="px-2 py-1 bg-ocean-50 dark:bg-ocean-900/30 text-ocean-600 dark:text-ocean-400 text-[10px] rounded border border-ocean-100 dark:border-ocean-900">Barba</div>
                     <div className="px-2 py-1 bg-ocean-50 dark:bg-ocean-900/30 text-ocean-600 dark:text-ocean-400 text-[10px] rounded border border-ocean-100 dark:border-ocean-900">Corte</div>
                  </div>
               </div>
            </motion.div>
         </div>
      </div>
    </section>
  );
}