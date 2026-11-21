import React from 'react';
import { motion } from 'framer-motion';

export const GogginsTwoCards = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full my-3">
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
          className="relative h-56 sm:h-64 rounded-2xl overflow-hidden flex flex-col justify-end p-5 sm:p-6 
                     bg-[#121216] border border-[#c8a858]/40 hover:border-[#f5d77f] transition-all duration-300 
                     shadow-[0_6px_25px_rgba(0,0,0,0.7)] hover:shadow-[0_0_25px_rgba(200,168,88,0.3)] group cursor-pointer"
        >
          {/* Orqa fon rasmi */}
          <div 
            className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 opacity-40 group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(${card.bgImage})` }}
          />

          {/* Qorayuvchi gradient overlay - yorug'roq, toza contrast bilan */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12] via-[#0e0e12]/85 to-[#0e0e12]/30" />

          {/* Karta Kontenti */}
          <div className="relative z-10 flex flex-col items-start gap-2.5">
            {/* Tag / Badge: aniq ajralib turuvchi, yorqinroq */}
            <span className="font-display text-xs text-[#f5d77f] px-2.5 py-1 rounded-md bg-[#c8a858]/20 border border-[#c8a858]/50 tracking-widest uppercase font-bold shadow-sm">
              {card.tag}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-wide leading-tight uppercase group-hover:text-[#f5d77f] transition-colors drop-shadow-md">
              {card.title}
            </h3>

            {/* Oltin tugma - yorqin va aniq o'qiluvchi */}
            <div className="mt-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#c8a858] via-[#f0d484] to-[#c8a858] group-hover:from-[#f0d484] group-hover:to-[#f7e39a] text-black font-display text-xs sm:text-sm font-extrabold tracking-wider uppercase transition-all shadow-lg flex items-center gap-2">
              <span>{card.buttonText}</span>
              <span className="text-black/80 font-bold">→</span>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};
