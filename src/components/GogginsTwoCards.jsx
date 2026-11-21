import React from 'react';
import { motion } from 'framer-motion';

export const GogginsTwoCards = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full my-4">
      {cards.map((card, index) => (
        <motion.a
          key={card.id || index}
          href={card.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative h-60 sm:h-68 rounded-2xl overflow-hidden flex flex-col justify-end p-5 sm:p-7 
                     bg-[#1a1a24] border-2 border-[#e5c468] hover:border-white transition-all duration-300 
                     shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_0_30px_rgba(229,196,104,0.35)] group cursor-pointer"
        >
          {/* Orqa fon rasmi */}
          <div 
            className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 opacity-35 group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(${card.bgImage})` }}
          />

          {/* Qorayuvchi gradient overlay - kartani qorong'ilatmaydigan, toza va yorug' kontrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#14141e]/95 via-[#14141e]/65 to-[#14141e]/25" />

          {/* Karta Kontenti */}
          <div className="relative z-10 flex flex-col items-start gap-3">
            {/* Tag / Badge: to'liq yorqin tilla fon va qora matn (aniq ajralib turuvchi) */}
            <span className="font-display text-xs text-black px-3.5 py-1 rounded-md bg-[#e5c468] tracking-widest uppercase font-black shadow-md">
              {card.tag}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-wider leading-tight uppercase group-hover:text-[#f7e39a] transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {card.title}
            </h3>

            {/* Oltin tugma - yirik, yorqin va maksimal kontrastli */}
            <div className="mt-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#f5d77f] via-[#fff] to-[#e5c468] group-hover:from-[#fff] group-hover:to-[#f5d77f] text-black font-display text-xs sm:text-sm font-black tracking-wider uppercase transition-all shadow-xl flex items-center gap-2.5 border border-white/60">
              <span>{card.buttonText}</span>
              <span className="text-black font-black text-base">→</span>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};
