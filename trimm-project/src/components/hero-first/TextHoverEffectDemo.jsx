"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export const TextHoverEffect = ({
  words = ["Bem vindo", "ao", "FIVON"],
  duration = 0,
  onFinish,
}) => {
  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const [index, setIndex] = useState(0);

 const switchDelay = 1800;  // 🔥 tempo total entre cada palavra (mais rápido)
const drawDuration = 1.5;  // 🔥 tempo da animação de stroke (mais curto)
const strokeLength = 1200;

  /** ----------------------
   * 🔥 SISTEMA DE TROCA DE PALAVRA (100% CORRIGIDO)
   * Apenas UM interval e dispara onFinish CERTINHO
   * ---------------------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = prev + 1;

        // 🔥 Quando termina a última palavra → dispara a callback apenas 1 vez
        if (next === words.length) {
          if (onFinish) onFinish();
        }

        return next % words.length;
      });
    }, switchDelay);

    return () => clearInterval(interval);
  }, [words, onFinish]);

  /** ----------------------
   * 🖱️ Movimento da máscara com mouse
   * ---------------------- */
  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;

      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  /** ----------------------
   * 📱 Animação automática no mobile
   * ---------------------- */
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    let angle = 0;

    const loop = () => {
      angle += 1;

      const cx = 50 + 20 * Math.cos(angle * 0.05);
      const cy = 50 + 20 * Math.sin(angle * 0.05);

      setMaskPosition({ cx: `${cx}%`, cy: `${cy}%` });

      requestAnimationFrame(loop);
    };

    loop();
  }, []);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className="select-none"
    >
      {/* ---------------------- */}
      {/* GRADIENTES E MÁSCARA */}
      {/* ---------------------- */}
     <defs>
  <linearGradient id="textGradient" gradientUnits="userSpaceOnUse">
    <stop offset="0%" stopColor="#eab308" />
    <stop offset="25%" stopColor="#ef4444" />
    <stop offset="50%" stopColor="#3b82f6" />
    <stop offset="75%" stopColor="#06b6d4" />
    <stop offset="100%" stopColor="#8b5cf6" />
  </linearGradient>

  <radialGradient
    id="revealMask"
    gradientUnits="userSpaceOnUse"
    cx={maskPosition.cx}
    cy={maskPosition.cy}
    r="20%"
  >
    <stop offset="0%" stopColor="white" />
    <stop offset="100%" stopColor="black" />
  </radialGradient>

  <mask id="textMask">
    <motion.rect
      x="0"
      y="0"
      width="100%"
      height="100%"
      fill="url(#revealMask)"
      animate={maskPosition}
      transition={{ duration: duration ?? 0.3, ease: "easeOut" }}
    />
  </mask>
</defs>


      {/* ---------------------- */}
      {/* SOMBRA LEVE NO HOVER */}
      {/* ---------------------- */}
      <text
        key={`static-${index}`}
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 font-[helvetica] text-[55px] font-bold dark:stroke-neutral-800"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {words[index]}
      </text>

      {/* ---------------------- */}
      {/* CONTORNO ANIMADO (ENTRA E SAI) */}
      {/* ---------------------- */}
      <motion.text
        key={`stroke-${index}`}
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-200 font-[helvetica] text-[55px] font-bold dark:stroke-neutral-800"
        initial={{ strokeDasharray: strokeLength, strokeDashoffset: strokeLength }}
        animate={{ strokeDashoffset: 0 }}
        exit={{ strokeDashoffset: strokeLength }}
        transition={{ duration: drawDuration, ease: "easeInOut" }}
      >
        {words[index]}
      </motion.text>

      {/* ---------------------- */}
      {/* TEXTO COLORIDO COM MÁSCARA */}
      {/* ---------------------- */}
      <motion.text
        key={`color-${index}`}
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-[55px] font-bold"
        initial={{ strokeDasharray: strokeLength, strokeDashoffset: strokeLength }}
        animate={{ strokeDashoffset: 0 }}
        exit={{ strokeDashoffset: strokeLength }}
        transition={{ duration: drawDuration, ease: "easeInOut" }}
      >
        {words[index]}
      </motion.text>
    </svg>
  );
};
