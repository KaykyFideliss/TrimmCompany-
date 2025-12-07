import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import FeatureTabs from '../components/FeatureTabs';
import FeaturesGrid from '../components/FeaturesGrid';
import Cta from '../components/Cta';
import Rodape from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-dust-900 dark:bg-mulher-700 transition-colors duration-300"> 
      <Navbar /> 
      <main>
        <Hero />
        <FeatureTabs />
        <FeaturesGrid />
        <Cta />
      </main>
      <Rodape />
    </div>
  );
}
