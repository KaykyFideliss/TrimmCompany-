
import React from 'react';

import Rodape from '../components/Footer'; 
import PricingPlans from '../components/PricingPlans';
import Cta from '../components/Cta'; 
export default function Planos() {
  return (
    <div className="min-h-screen font-sans text-dust-900 transition-colors duration-300"> 
       
       <main className="pt-16"> 
          <PricingPlans />
          <Cta />
       </main>
       <Rodape />
    </div>
  );
}