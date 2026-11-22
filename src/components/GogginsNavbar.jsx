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
          whileHover={{ scale: 1.02, transition: { duration: 0.12, ease: "easeOut" } }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.12, ease: "easeOut" }}
          title="Sahifani ulashish va QR kod"
          className="group flex items-center gap-2 sm:gap-2.5 px-4 py-2 sm:px-6 sm:py-2.5 rounded-full 
                     bg-[#141418] hover:bg-[#c8a858] text-[#c8a858] hover:text-black 
                     border-2 border-[#c8a858] hover:border-[#c8a858] transition-colors duration-150 
                     text-xs sm:text-base font-display font-extrabold tracking-wider cursor-pointer shadow-lg hover:shadow-[0_0_20px_rgba(200,168,88,0.35)]"
        >
          <QrCode className="w-4 h-4 sm:w-5 sm:h-5 text-[#c8a858] group-hover:text-black transition-colors" />
          <span className="whitespace-nowrap font-display text-xs sm:text-base font-black tracking-wider transition-colors">ULASHISH & QR</span>
        </motion.button>
      </div>
    </header>
  );
};
