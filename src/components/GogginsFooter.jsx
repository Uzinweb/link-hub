import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export const GogginsFooter = ({ copyright }) => {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full pt-8 pb-12 text-center px-4 mt-auto flex flex-col items-center">
      {/* Yuqoriga Qaytish Tugmasi (Scroll to Top) */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.12, y: -2 }}
        whileTap={{ scale: 0.92 }}
        title="Yuqoriga qaytish"
        className="mb-6 w-10 h-10 rounded-full flex items-center justify-center 
                   bg-white/5 hover:bg-[#c8a858] text-[#c8a858] hover:text-black 
                   border border-[#c8a858]/30 hover:border-transparent transition-all duration-200 cursor-pointer shadow-md"
      >
        <ArrowUp className="w-4 h-4" />
      </motion.button>

      {/* Nozik Oltin Divider */}
      <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#c8a858]/50 to-transparent mb-4" />

      {/* Mualliflik va Huquqlar Matni */}
      <p className="font-sans text-xs text-[#888888] tracking-wider">
        © Copyright {year}. <span className="text-[#c8a858] font-semibold">{copyright || "Salohiddin Ollayorov"}</span>
      </p>
      <p className="font-sans text-[11px] text-[#555555] tracking-wider mt-1">
        All rights reserved.
      </p>
    </footer>
  );
};
