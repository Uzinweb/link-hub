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
        {/* Yagona Mukammal Tugma: Ulashish & QR */}
        <motion.button
          onClick={onOpenQr}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Sahifani ulashish va QR kod"
          className="flex items-center gap-2 px-4 py-1.5 sm:py-2 rounded-full 
                     bg-white/5 hover:bg-[#c8a858] text-[#c8a858] hover:text-black 
                     border border-[#c8a858]/35 transition-all duration-200 text-xs font-display tracking-wider cursor-pointer shadow-sm"
        >
          <QrCode className="w-3.5 h-3.5" />
          <span>ULASHISH & QR</span>
        </motion.button>
      </div>
    </header>
  );
};
