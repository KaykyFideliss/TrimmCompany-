
import React from 'react';
import { motion } from 'framer-motion';
import { Button, Logo } from './UiComponents';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      
      className="fixed w-full z-50 backdrop-blur-xl border-b border-dust-200/50 bg-dust-50/80"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        
        <a href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <Logo className="w-8 h-8 text-ocean-600" />
          <span className="text-xl font-bold tracking-tight text-dust-900 font-display">fivonn</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-dust-600">
          
          <a href="/#solucoes" className="hover:text-ocean-500 transition-colors">Soluções</a>
          <a href="/marketplace" className="hover:text-ocean-500 transition-colors">Marketplace</a>
          <a href="/planos" className="hover:text-ocean-500 transition-colors">Planos</a> 
          <a href="/sobre" className="hover:text-ocean-500 transition-colors">Sobre</a> 
        </div>

        <div className="flex items-center gap-4">
          <Button variant="outline" className="hidden sm:flex py-2 h-9">Login</Button>
          <Button variant="primary" className="py-2 h-9">Criar Conta</Button>
        </div>
      </div>
    </motion.nav>
  );
}