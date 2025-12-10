import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './UiComponents';
import { MdDarkMode } from "react-icons/md";
import { FaSun } from "react-icons/fa";
import useDarkMode from '../hooks/useDarkMode'; // import do hook
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useDarkMode(); // usa o hook

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 backdrop-blur-xl border-b border-dust-200/50 bg-dust-50/80 dark:bg-homem-1000/90 dark:border-homem-700/80"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-2 transition-opacity hover:scale-105">
          <span className="text-xl font-bold tracking-tight text-dust-900 dark:text-white font-display">fivonn</span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-dust-600  dark:text-gray-300">
          <Link to="/solucoes" className="hover:text-ocean-500 transition-colors hover:scale-105 font-poppins">Soluções</Link>
          <Link to="/marketplace" className="hover:text-ocean-500 transition-colors hover:scale-105 font-poppins">Marketplace</Link>
          <Link to="/planos" className="hover:text-ocean-500 transition-colors hover:scale-105 font-poppins">Planos</Link>
          <Link to="/sobre" className="hover:text-ocean-500 transition-colors hover:scale-105 font-poppins">Sobre</Link>
        </div>

        {/* Search + Buttons Desktop */}
        <div className="hidden md:flex items-center gap-4">
             <Button
            variant="outline"
            className="py-2 h-9 flex items-center justify-center hover:scale-105 border-dust-200 text-dust-900 dark:text-white  "
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <FaSun size={20} className='text-dust-50' /> : <MdDarkMode  className='text-homem-1000' size={20} />}
          </Button>

          <Link to="/auth">
            <Button variant="primary" className="py-2 h-9 font-display bg-homem-400 hover:scale-105">Criar Conta</Button>
          </Link>
        </div>

        {/* Hamburger Menu Mobile */}
        <div className="md:hidden flex items-center gap-2 ">
          <button onClick={() => setDarkMode(!darkMode)} className="focus:outline-none ">
            {darkMode ? <FaSun className='text-homem-1000 dark:text-white'  size={20} /> : <MdDarkMode className='text-homem-1000 dark:text-white' size={20} />}
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
            className="md:hidden bg-dust-50/95 dark:bg-homem-1000 border-t border-dust-200/50 dark:border-gray-700 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4 text-dust-600 dark:text-gray-300">
             
              <Link to="/solucoes" className="hover:text-ocean-500 transition-colors">Soluções</Link>
              <Link to="/marketplace" className="hover:text-ocean-500 transition-colors">Marketplace</Link>
              <Link to="/planos" className="hover:text-ocean-500 transition-colors">Planos</Link>
              <Link to="/sobre" className="hover:text-ocean-500 transition-colors">Sobre</Link>
              <div className="flex flex-col gap-2 mt-2">
            
                <Link to="/auth">
                  <Button variant="primary" className="py-2 w-full" >Criar Conta</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
