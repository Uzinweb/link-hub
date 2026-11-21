import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Share2 } from 'lucide-react';

export const GogginsNavbar = ({ onOpenQr }) => {
  return (
    <header className="w-full flex items-center justify-between px-4 sm:px-6 pt-5 pb-3 z-20">
      <div className="font-display text-xs sm:text-sm tracking-[0.25em] text-[#c8a858] font-bold uppercase">
        SHAXSIY SAHIFA
      </div>

      <div className="flex items-center gap-2">
        {/* Yagona Mukammal Tugma: Ulashish & QR (Kattalashtirilgan, oson o'qiluvchi) */}
        <motion.button
          onClick={onOpenQr}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Sahifani ulashish va QR kod"
          className="flex items-center gap-2 sm:gap-3 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full 
                     bg-[#1a1a24] hover:bg-[#e5c468] text-[#f7e39a] hover:text-black 
                     border-2 border-[#e5c468] hover:border-white transition-all duration-200 
                     text-xs sm:text-base font-display font-extrabold tracking-wider cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(229,196,104,0.4)]"
        >
          <QrCode className="w-4 h-4 sm:w-5 sm:h-5 text-[#f7e39a] group-hover:text-black" />
          <span className="whitespace-nowrap font-display text-xs sm:text-base font-black tracking-wider">ULASHISH & QR</span>
        </motion.button>
      </div>
    </header>
  );
};
