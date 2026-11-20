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
          className="relative h-52 sm:h-64 rounded-2xl overflow-hidden flex flex-col justify-end p-5 sm:p-6 
                     border border-black/10 dark:border-white/10 hover:border-[#c8a858] transition-all duration-300 shadow-xl group cursor-pointer"
        >
          {/* Orqa fon rasmi */}
          <div 
            className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 group-hover:scale-105 transition-transform duration-500"
            style={{ backgroundImage: `url(${card.bgImage})` }}
          />

          {/* Qorayuvchi gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/20" />

          {/* Karta Kontenti */}
          <div className="relative z-10 flex flex-col items-start gap-2">
            <span className="font-display text-xs text-[#e5c468] tracking-widest uppercase font-semibold">
              {card.tag}
            </span>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide leading-tight uppercase group-hover:text-[#e5c468] transition-colors">
              {card.title}
            </h3>

            {/* Oltin tugma */}
            <div className="mt-2 px-4 py-2 rounded-sm bg-[#c8a858] group-hover:bg-[#e5c468] text-black font-display text-xs sm:text-sm font-bold tracking-wider uppercase transition-all shadow-md">
              {card.buttonText}
            </div>
          </div>
        </motion.a>
      ))}
    </div>
  );
};
