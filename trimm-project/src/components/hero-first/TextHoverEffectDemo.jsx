"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = () => {
  const words = ["Bem vindo", "ao", "Fivon"];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState(words[0]);
  const [drawFinished, setDrawFinished] = useState(false);
  const [exiting, setExiting] = useState(false);

  const svgRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Movimento do mouse só quando NÃO está trocando a palavra
  useEffect(() => {
    if (exiting || isMobile || !svgRef.current) return;

    const rect = svgRef.current.getBoundingClientRect();
    const cx = ((cursor.x - rect.left) / rect.width) * 100;
    const cy = ((cursor.y - rect.top) / rect.height) * 100;
    setMaskPosition({ cx: `${cx}%`, cy: `${cy}%` });
  }, [cursor, exiting, isMobile]);

  // ANIMAÇÃO MOBILE
  const mobileAnimation = {
    cx: ["0%", "100%", "0%"],
    cy: "50%",
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  };

  // Tempo de exibição antes de desaparecer
  useEffect(() => {
    if (!drawFinished || exiting) return;

    const hold = setTimeout(() => {
      setExiting(true);
    }, 1500);

    return () => clearTimeout(hold);
  }, [drawFinished, exiting]);

  // Após saída → troca palavra
  const handleExitComplete = () => {
    setExiting(false);
    setDrawFinished(false);

    const next = (index + 1) % words.length;
    setIndex(next);
    setText(words[next]);
  };

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      className="select-none"
      onMouseMove={(e) => !isMobile && setCursor({ x: e.clientX, y: e.clientY })}
      onMouseEnter={() => !isMobile && !exiting && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
    >
      <defs>
        <linearGradient id="textGradient" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="40%" stopColor="#6366f1" />
          <stop offset="70%" stopColor="#a855f7" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r="20%"
          initial={{ cx: "50%", cy: "50%" }}
          animate={isMobile ? mobileAnimation : maskPosition}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>

        <filter id="neonBlur">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <mask id="textMask">
          <rect width="100%" height="100%" fill="url(#revealMask)" />
        </mask>
      </defs>

      {/* STROKE → entrada/saída */}
      <motion.text
        key={text + "-stroke"}
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-transparent stroke-neutral-200 dark:stroke-neutral-900 text-6xl font-bold"
        strokeWidth="0.5"
        initial={{ strokeDasharray: 900, strokeDashoffset: 900 }}
        animate={{ strokeDashoffset: exiting ? 900 : 0 }}
        transition={{ duration: 1.6, ease: "easeInOut" }}
        onAnimationComplete={() => {
          if (!exiting) setDrawFinished(true);
          else handleExitComplete();
        }}
      >
        {text}
      </motion.text>

      {/* GRADIENTE + BLUR — agora funciona PERFEITO no hover */}
      {!exiting && drawFinished && (
        <motion.text
          key={text + "-grad"}
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          mask="url(#textMask)"
          stroke="url(#textGradient)"
          strokeWidth="0.6"
          className="fill-transparent text-6xl font-bold"
          style={{
            filter: (hovered || isMobile) ? "url(#neonBlur)" : "blur(1px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered || isMobile ? 1 : 0.5 }}
          transition={{ duration: 0.4 }}
        >
          {text}
        </motion.text>
      )}
    </svg>
  );
};
