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
          className="flex items-center gap-2 sm:gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full 
                     bg-[#141418] hover:bg-[#c8a858] text-[#f5d77f] hover:text-black 
                     border border-[#c8a858]/45 hover:border-[#f5d77f] transition-all duration-200 
                     text-xs sm:text-sm font-display font-bold tracking-wider cursor-pointer shadow-md hover:shadow-[0_0_15px_rgba(200,168,88,0.35)]"
        >
          <QrCode className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#f5d77f] group-hover:text-black" />
          <span className="whitespace-nowrap">ULASHISH & QR</span>
        </motion.button>
      </div>
    </header>
  );
};
