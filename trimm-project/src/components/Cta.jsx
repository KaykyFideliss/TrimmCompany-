import React from 'react';
import { Button } from './UiComponents';

export default function Cta() {
  return (
    <section className="py-32 px-6 bg-dust-950 text-white relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute inset-0 bg-ocean-900/20 radial-gradient"></div>
       <div className="absolute -top-24 -right-24 w-96 h-96 bg-ocean-500/20 rounded-full blur-3xl"></div>
       <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-petal-500/10 rounded-full blur-3xl"></div>

       <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tighter text-white">Comece o futuro hoje.</h2>
          <p className="text-xl text-dust-400 mb-10 max-w-2xl mx-auto">
            Junte-se a milhares de profissionais que estão escalando seus negócios com a tecnologia Fivonn.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button variant="primary" className="px-8 py-4 text-lg rounded-full">Criar Conta Grátis</Button>
             <Button variant="outline" className="px-8 py-4 text-lg rounded-full border-dust-700 text-white hover:bg-dust-800 hover:border-dust-600">
               Agendar Demo
             </Button>
          </div>
       </div>
    </section>
  );
}