import React from 'react';
import { motion } from 'framer-motion';

export const GogginsStats = ({ stats }) => {
  return (
    <div className="w-full my-3 px-0">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="w-full p-4 sm:p-6 rounded-2xl bg-[#121216] border border-[#c8a858]/35 hover:border-[#f5d77f] transition-all duration-300 shadow-[0_6px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_0_20px_rgba(200,168,88,0.2)]"
      >
        <div className="grid grid-cols-3 gap-2 sm:gap-4 divide-x divide-white/10 text-center">
          {stats.map((item, index) => (
            <div key={index} className="px-1 sm:px-3 first:pl-0 last:pr-0 flex flex-col items-center justify-center">
              {/* Katta Oltin Raqam */}
              <div className="font-display text-xl sm:text-3xl md:text-4xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#c8a858] via-[#f7e39a] to-[#c8a858]">
                {item.value}
              </div>

              {/* Sarlavha */}
              <div className="font-display text-[11px] sm:text-xs font-bold tracking-[0.18em] text-white uppercase mt-1">
                {item.label}
              </div>

              {/* Qisqa Ta'rif */}
              <div className="hidden sm:block font-sans text-[11px] text-gray-400 mt-0.5 truncate max-w-[140px]">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
