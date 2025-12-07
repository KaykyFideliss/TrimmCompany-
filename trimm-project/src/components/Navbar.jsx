import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './UiComponents';
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import useDarkMode from '../hooks/useDarkMode'; // import do hook

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useDarkMode(); // usa o hook

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 backdrop-blur-xl border-b border-dust-200/50 bg-white-50/80 dark:bg-homem-1000/90 dark:border-homem-700/80"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/Home" className="flex items-center gap-2 transition-opacity hover:scale-105">
          <span className="text-xl font-bold tracking-tight text-dust-900 dark:text-white font-poppins">fivonn</span>
        </a>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-dust-600 dark:text-gray-300">
          <a href="/solucoes" className="hover:text-ocean-500 transition-colors hover:scale-105 font-poppins">Soluções</a>
          <a href="/marketplace" className="hover:text-ocean-500 transition-colors hover:scale-105 font-poppins">Marketplace</a>
          <a href="/planos" className="hover:text-ocean-500 transition-colors hover:scale-105 font-poppins">Planos</a>
          <a href="/sobre" className="hover:text-ocean-500 transition-colors hover:scale-105 font-poppins">Sobre</a>
        </div>

        {/* Search + Buttons Desktop */}
        <div className="hidden md:flex items-center gap-4">
             <Button
            variant="outline"
            className="py-2 h-9 flex items-center justify-center"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun size={20} /> : <MdDarkMode size={20} />}
          </Button>

          <Button variant="primary" className="py-2 h-9">Criar Conta</Button>
        </div>

        {/* Hamburger Menu Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={() => setDarkMode(!darkMode)} className="focus:outline-none">
            {darkMode ? <FaSun size={20} /> : <MdDarkMode size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-dust-900 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-dust-50/95 dark:bg-gray-900/95 border-t border-dust-200/50 dark:border-gray-700 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-dust-600 dark:text-gray-300">
              <input
                type="text"
                placeholder="Pesquisar..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="px-3 py-2 rounded border border-dust-300 dark:border-gray-700 bg-dust-50 dark:bg-gray-800 text-dust-900 dark:text-gray-100 placeholder-dust-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-ocean-500"
              />
              <a href="/solucoes" className="hover:text-ocean-500 transition-colors">Soluções</a>
              <a href="/marketplace" className="hover:text-ocean-500 transition-colors">Marketplace</a>
              <a href="/planos" className="hover:text-ocean-500 transition-colors">Planos</a>
              <a href="/sobre" className="hover:text-ocean-500 transition-colors">Sobre</a>
              <div className="flex flex-col gap-2 mt-2">
                <Button variant="outline" className="py-2 w-full">Login</Button>
                <Button variant="primary" className="py-2 w-full">Criar Conta</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
