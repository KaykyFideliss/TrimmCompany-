"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";

export const TextHoverEffect = ({
  words = ["Bem vindo", "ao", "FIVON"],
  duration = 0,
  onFinish,
  className,
}) => {
  const svgRef = useRef(null);

  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const [index, setIndex] = useState(0);

  const drawDuration = 1.2;
  const strokeLength = 1200;

  /* 🔥 troca 1 palavra por segundo — AGORA FUNCIONANDO SEM TRAVAR */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev + 1 < words.length) {
          return prev + 1;
        } else {
          clearInterval(interval);

          setTimeout(() => {
            onFinish && onFinish();
          }, 800);

          return prev;
        }
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  /* Mascara segue cursor */
  useEffect(() => {
    if (!svgRef.current) return;

    const rect = svgRef.current.getBoundingClientRect();
    const cx = ((cursor.x - rect.left) / rect.width) * 100;
    const cy = ((cursor.y - rect.top) / rect.height) * 100;

    setMaskPosition({ cx: `${cx}%`, cy: `${cy}%` });
  }, [cursor]);

  /* Mascara animada no mobile */
  useEffect(() => {
    if (window.innerWidth >= 768) return;

    let angle = 0;
    const loop = () => {
      angle += 0.8;
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
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={className}
    >
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
            width="100%"
            height="100%"
            fill="url(#revealMask)"
            animate={maskPosition}
            transition={{ duration: duration ?? 0.25, ease: "easeOut" }}
          />
        </mask>
      </defs>

      {/* Sombra */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="fill-transparent stroke-neutral-300 dark:stroke-neutral-800 font-[helvetica] text-[55px] font-bold opacity-40"
      >
        {words[index]}
      </text>

      {/* Contorno */}
      <motion.text
        key={`stroke-${index}`}
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="fill-transparent stroke-neutral-200 dark:stroke-neutral-900 font-[helvetica] text-[55px] font-bold"
        strokeWidth={0.35}
        initial={{ strokeDasharray: strokeLength, strokeDashoffset: strokeLength }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: drawDuration, ease: "easeInOut" }}
      >
        {words[index]}
      </motion.text>

      {/* Gradiente + máscara */}
      <motion.text
        key={`color-${index}`}
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth={0.45}
        mask="url(#textMask)"
        className="fill-transparent font-[helvetica] text-[55px] font-bold"
        initial={{ strokeDasharray: strokeLength, strokeDashoffset: strokeLength }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ duration: drawDuration, ease: "easeInOut" }}
      >
        {words[index]}
      </motion.text>
    </svg>
  );
};
