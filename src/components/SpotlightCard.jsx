import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const SpotlightCard = ({ 
  children, 
  className = "", 
  onClick, 
  spotlightColor = "rgba(75, 129, 238, 0.18)",
  borderColor = "rgba(75, 129, 238, 0.35)",
  glow = false
}) => {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative rounded-2xl overflow-hidden transition-all duration-300
                 bg-[#121214] dark:bg-[#121214] light:bg-white
                 border border-white/[0.07] dark:border-white/[0.07]
                 hover:border-white/[0.18] shadow-2xl ${className}`}
    >
      {/* Spotlight Radial Gradient (Kursor nuri) */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
        }}
      />

      {/* Chegara nuri (Border Glow) */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 z-0"
        style={{
          opacity,
          border: `1px solid ${borderColor}`,
        }}
      />

      {/* Asosiy kontent */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};
