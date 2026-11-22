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
          whileHover={{ scale: 1.02, transition: { duration: 0.12, ease: "easeOut" } }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.12, ease: "easeOut" }}
          className="relative h-60 sm:h-68 rounded-2xl overflow-hidden flex flex-col justify-end p-5 sm:p-7 
                     bg-[#121216] border border-[#c8a858]/40 hover:border-[#c8a858] transition-colors duration-150 
                     shadow-[0_8px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_0_30px_rgba(200,168,88,0.35)] group cursor-pointer"
        >
          {/* Orqa fon rasmi */}
          <div 
            className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 opacity-35 group-hover:scale-105 transition-transform duration-300"
            style={{ backgroundImage: `url(${card.bgImage})` }}
          />

          {/* Qorayuvchi gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e12]/95 via-[#0e0e12]/70 to-[#0e0e12]/30" />

          {/* Karta Kontenti */}
          <div className="relative z-10 flex flex-col items-start gap-3">
            {/* Tag / Badge: to'liq toza tilla rang */}
            <span className="font-display text-xs text-black px-3.5 py-1 rounded-md bg-[#c8a858] tracking-widest uppercase font-black shadow-md">
              {card.tag}
            </span>
            <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-wider leading-tight uppercase group-hover:text-[#c8a858] transition-colors drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {card.title}
            </h3>

            {/* Oltin tugma - to'laqonli boy tillarang, hech qanday oq aralashmasiz */}
            <div className="mt-2 px-6 py-2.5 rounded-xl bg-[#c8a858] group-hover:bg-[#dfb235] text-black font-display text-xs sm:text-sm font-black tracking-wider uppercase transition-all shadow-lg flex items-center gap-2.5">
              <span>{card.buttonText}</span>
              <span className="text-black font-black text-base">→</span>
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};
