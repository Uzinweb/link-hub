import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Share2, Check } from 'lucide-react';

export const Navbar = ({ darkMode, setDarkMode, onShare, isCopied }) => {
  return (
    <header className="w-full max-w-[540px] mx-auto flex items-center justify-between pt-6 pb-3 px-4 select-none font-ui">
      {/* Chap qism: Status nishoni */}
      <motion.div 
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-2 px-3 py-1 rounded-full 
                   bg-[#151515] dark:bg-[#151515] bg-opacity-70 dark:bg-opacity-70 backdrop-blur-md
                   border border-black/5 dark:border-white/5 text-xs font-medium 
                   text-slate-600 dark:text-[#8b8b8b]"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4b81ee] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4b81ee]"></span>
        </span>
        <span className="tracking-wide text-[11px] uppercase">Faol / Aloqada</span>
      </motion.div>

      {/* O'ng qism: Share va Rejim tugmalari */}
      <div className="flex items-center gap-2">
        {/* Ulashish (Share) tugmasi - Obsidian Pill */}
        <motion.button
          onClick={onShare}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Ulashish"
          className="relative flex items-center gap-1.5 px-3.5 py-1.5 rounded-full 
                     bg-[#1a1a1a] dark:bg-[#1a1a1a] light:bg-slate-100
                     border border-slate-200 dark:border-white/10 
                     text-slate-700 dark:text-[#ffffff] hover:text-[#4b81ee] dark:hover:text-[#4b81ee]
                     transition-colors duration-200 text-xs font-medium cursor-pointer shadow-sm"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isCopied ? (
              <motion.span
                key="check"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                className="flex items-center gap-1 text-[#4b81ee] font-semibold"
              >
                <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Nusxalandi</span>
              </motion.span>
            ) : (
              <motion.span
                key="share"
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                className="flex items-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Ulashish</span>
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>

        {/* Mavzu almashtirish (Dark/Light) */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Mavzuni almashtirish"
          className="p-2 rounded-full bg-[#1a1a1a] dark:bg-[#1a1a1a]
                     border border-slate-200 dark:border-white/10 
                     text-slate-700 dark:text-[#ffffff] hover:text-[#4b81ee] dark:hover:text-[#4b81ee]
                     transition-colors duration-200 cursor-pointer shadow-sm"
        >
          {darkMode ? (
            <Sun className="w-3.5 h-3.5 text-amber-400" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-indigo-500" />
          )}
        </motion.button>
      </div>
    </header>
  );
};
