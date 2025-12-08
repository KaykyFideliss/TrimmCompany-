// src/components/Footer.jsx
import React from 'react';
import { Logo } from './UiComponents';

export default function Rodape() { 
  return (
    // LIGHT MODE ONLY
    <footer className="bg-dust-50 dark:bg-homem-1000 pt-20 pb-10 border-t transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-10 mb-16">
        {/* ... (Logo e Descrição) ... */}
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <Logo className="w-8 h-8 text-dust-900" />
            <span className="text-xl font-bold tracking-tight text-dust-900">fivonn</span>
          </div>
          <p className="text-dust-500 max-w-xs mb-6 text-sm leading-relaxed">
            Transformando o mercado da beleza com tecnologia, dados e conexão real entre profissionais e clientes.
          </p>
          <div className="flex gap-4">
             {/* Socials Placeholder */}
             {[1,2,3].map(i => (
                <div key={i} className="w-8 h-8 rounded-full bg-dust-200 hover:bg-ocean-500 hover:text-white transition-colors cursor-pointer flex items-center justify-center">
                  <span className="w-2 h-2 bg-current rounded-full"></span>
                </div>
             ))}
          </div>
        </div>
        
        {/* ... (Produto) ... */}
        <div>
          <h4 className="font-bold mb-6 text-dust-900">Produto</h4>
          <ul className="space-y-4 text-sm text-dust-500">
            <li><a href="#" className="hover:text-ocean-500 transition-colors">Para Clientes</a></li>
            <li><a href="#" className="hover:text-ocean-500 transition-colors">Para Profissionais</a></li>
            <li><a href="#" className="hover:text-ocean-500 transition-colors">Para Empresas</a></li>
            <li><a href="#" className="hover:text-ocean-500 transition-colors">Marketplace</a></li>
          </ul>
        </div>
  
        {/* ... (Empresa) ... */}
        <div>
          <h4 className="font-bold mb-6 text-dust-900">Empresa</h4>
          <ul className="space-y-4 text-sm text-dust-500">
            {/* 🎯 CORREÇÃO 2: Link para a nova página Sobre */}
            <li><a href="/sobre" className="hover:text-ocean-500 transition-colors">Sobre Nós</a></li> 
            <li><a href="#" className="hover:text-ocean-500 transition-colors">Carreiras</a></li>
            <li><a href="#" className="hover:text-ocean-500 transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-ocean-500 transition-colors">Contato</a></li>
          </ul>
        </div>
  
        {/* ... (Legal) ... */}
        <div>
          <h4 className="font-bold mb-6 text-dust-900">Legal</h4>
          <ul className="space-y-4 text-sm text-dust-500">
            <li><a href="#" className="hover:text-ocean-500 transition-colors">Privacidade</a></li>
            <li><a href="#" className="hover:text-ocean-500 transition-colors">Termos de Uso</a></li>
            <li><a href="#" className="hover:text-ocean-500 transition-colors">Cookies</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-dust-200 flex flex-col md:flex-row justify-between items-center text-xs text-dust-500">
        <p>© 2025 Fivonn Technologies Inc.</p>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <span className="flex h-2 w-2 relative">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          Todos os sistemas operacionais
        </div>
      </div>
    </footer>
  );
}