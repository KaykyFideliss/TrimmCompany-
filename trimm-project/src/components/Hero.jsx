
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Smartphone } from 'lucide-react';
import { Button, RevealText } from './UiComponents';

export default function Hero() {
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    // 🎯 CORREÇÃO: Removido o px-6 daqui. O fundo é transparente e herda do <body>
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Background Noise (Mantido, se estende de ponta a ponta) */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light"></div>
      
      {/* 🎯 CORREÇÃO: px-6 aplicado ao container interno. */}
      <div className="max-w-7xl mx-auto w-full z-10 px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="mb-6 flex items-center gap-2 text-ocean-600 dark:text-ocean-400 font-medium text-sm tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-ocean-500 animate-pulse"></span>
            Plataforma All-in-One
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-semibold tracking-tighter leading-[0.95] text-homem-1000 dark:text-white mb-8">
            <RevealText delay={0}>Fivonn</RevealText> <br />
            <RevealText  delay={0.1}>Barber</RevealText> <br />
            <span className=" bg-clip-text bg-gradient-to-r from-ocean-500 to-indigo-600">
              <RevealText delay={0.2} className="text-homem-1000 dark:text-white " >and Salon</RevealText>
            </span>
          </h1>
          
          <p className="text-lg text-dust-500 max-w-lg mb-10 leading-relaxed">
            Conecte-se ao ecossistema definitivo para barbeiros, salões e clientes. Agendamento, gestão financeira com IA e marketplace em um só lugar.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="group">
              Baixar App 
              <Smartphone className="ml-2 w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline">Para Empresas</Button>
          </div>
        </div>

        {/* Visual Element Parallax (Mantido) */}
        <motion.div style={{ y: yParallax }} className="relative h-[500px] lg:h-[600px] w-full hidden lg:block perspective-1000">
           <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-dust-200 dark:bg-dust-800 rounded-3xl overflow-hidden shadow-2xl rotate-3 transition-transform hover:rotate-0 duration-500">
              
              <img 
                src="img/barber-hero.png" 
                alt="Barber working" 
                className="w-full h-full object-cover opacity-90 mix-blend-multiply dark:mix-blend-normal dark:opacity-70 grayscale hover:grayscale-0 transition-all duration-700"
              />
           </div>
           
           {/* Floating Card Analytics (Mantido) */}
           <motion.div 
             initial={{ x: -50, opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             transition={{ delay: 0.5 }}
             className="absolute bottom-10 left-0 w-2/3 bg-white dark:bg-dust-900 p-6 rounded-2xl shadow-xl border border-dust-100 dark:border-white/20 backdrop-blur-sm"
           >
              <div className="flex justify-between items-center mb-4 font-display">
                 <div>
                    <h3 className="font-bold text-dust-900 dark:text-white">Receita Mensal</h3>
                    <p className="text-xs text-dust-500  ">IA Analytics • Dezembro</p>
                 </div>
                 <div className="px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded text-sm font-bold">+24%</div>
              </div>
              <div className="flex items-end gap-1 h-20">
                 {[30, 45, 35, 60, 50, 75, 60, 80, 70, 90].map((h, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ height: 0 }}
                      whileInView={{ height: `${h}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + (i * 0.05), type: "spring" }}
                      className={`flex-1 rounded-t-sm ${i % 2 === 0 ? 'bg-ocean-500' : 'bg-mulher-400'} opacity-80`} 
                    />
                 ))}
              </div>
           </motion.div>
        </motion.div>
      </div>
    </section>
  );
}