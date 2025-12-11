import React from 'react';
import AuthCard from '../components/AuthCard';
import Navbar from '../components/Navbar';

export default function AuthPage() {
  return (
    <section className=''>
      <Navbar />
    
    <div className="bg-dust-50 dark:bg-homem-1000 flex items-center justify-center w-full min-h-screen overflow-hidden">


      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light"></div>
      <div className="relative z-10">
        <AuthCard />
      </div>
    </div>
    </section>
  );
}