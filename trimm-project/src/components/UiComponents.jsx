import React from 'react';
import { motion } from 'framer-motion';

export const Logo = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <path d="M50 0 L55 35 L90 35 L60 55 L70 90 L50 70 L30 90 L40 55 L10 35 L45 35 Z" />
    <circle cx="50" cy="50" r="15" />
  </svg>
);

export const RevealText = ({ children, delay = 0 }) => {
  return (
    <div className="overflow-hidden relative inline-block align-bottom">
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
        className="block"
      >
        {children}
      </motion.span>
    </div>
  );
};

export const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-200 text-sm active:scale-95";
  
  const variants = {
    primary: "bg-ocean-500 text-white hover:bg-ocean-600 shadow-lg shadow-ocean-500/20",
    outline: "border border-dust-200 dark:border-dust-700 text-dust-900 dark:text-dust-100 hover:border-ocean-500 dark:hover:border-ocean-500 bg-transparent hover:text-ocean-500 dark:hover:text-ocean-500",
    ghost: "text-dust-600 hover:text-ocean-500 dark:text-dust-400 dark:hover:text-ocean-400"
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};