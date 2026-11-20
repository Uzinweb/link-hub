import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, ArrowUpRight, Sparkles } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const AudioWaveCard = ({ snippet }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Audio to'lqin barlari soni
  const waveBars = [
    35, 60, 20, 85, 45, 95, 70, 30, 80, 50, 100, 65, 40, 90, 75, 25, 60, 85, 40, 70, 55, 30, 90, 45, 75, 35
  ];

  const togglePlay = (e) => {
    e.preventDefault();
    setIsPlaying(!isPlaying);
  };

  return (
    <SpotlightCard 
      className="p-5"
      spotlightColor="rgba(16, 185, 129, 0.2)"
      borderColor="rgba(16, 185, 129, 0.4)"
    >
      <div className="flex flex-col gap-4">
        {/* Tepa qator: Badge va Davomiylik */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-ui font-semibold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Sparkles className="w-3 h-3 text-emerald-400" />
            <span>Fonetika Darsi</span>
          </span>
          <span className="text-xs font-ui text-[#8b8b8b]">
            {snippet.duration || "01:24"}
          </span>
        </div>

        {/* O'rta qism: Sarlavha va Play tugmasi */}
        <div className="flex items-center gap-4">
          {/* Play/Pause Aylanasi */}
          <button
            onClick={togglePlay}
            className="w-12 h-12 rounded-2xl flex-shrink-0 flex items-center justify-center 
                       bg-emerald-500 hover:bg-emerald-400 text-white shadow-lg shadow-emerald-500/25 
                       transition-all duration-200 active:scale-95 cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-white" />
            ) : (
              <Play className="w-5 h-5 fill-white ml-0.5" />
            )}
          </button>

          <div className="flex-1 min-w-0">
            <h4 className="font-serif text-base sm:text-lg font-bold text-white tracking-tight truncate">
              {snippet.title}
            </h4>
            <p className="font-body text-xs text-[#8b8b8b] truncate mt-0.5">
              {isPlaying ? "Talaffuz va mahrajlar tahlili tinglanmoqda..." : snippet.subtitle}
            </p>
          </div>
        </div>

        {/* Interaktiv Jonli To'lqinlar (Animated Waveform) */}
        <div className="flex items-center gap-[3px] sm:gap-1 h-8 px-2 py-1 bg-black/30 rounded-xl overflow-hidden">
          {waveBars.map((height, i) => (
            <motion.div
              key={i}
              className={`flex-1 rounded-full transition-colors duration-300 ${
                isPlaying 
                  ? 'bg-gradient-to-t from-emerald-500 to-cyan-400' 
                  : 'bg-white/15'
              }`}
              animate={isPlaying ? {
                height: [
                  `${Math.max(15, height * 0.4)}%`,
                  `${Math.min(100, height * 1.2)}%`,
                  `${Math.max(20, height * 0.7)}%`
                ]
              } : { height: `${height * 0.5}%` }}
              transition={{
                duration: 0.6 + (i % 5) * 0.1,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: i * 0.04
              }}
            />
          ))}
        </div>

        {/* Pastki havola */}
        <a
          href={snippet.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between pt-2 border-t border-white/[0.06] text-xs font-ui text-[#8b8b8b] hover:text-emerald-400 transition-colors group"
        >
          <span>Kanalda to'liq darslarni tinglash</span>
          <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
    </SpotlightCard>
  );
};
