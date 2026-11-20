import React from 'react';
import { motion } from 'framer-motion';
import { QrCode, Share2, Sun, Moon, ArrowUp } from 'lucide-react';
import { DynamicIcon } from './DynamicIcon';

export const FloatingDock = ({ 
  socials, 
  onShare, 
  onOpenQr, 
  darkMode, 
  setDarkMode 
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 select-none">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, type: "spring", stiffness: 300, damping: 25 }}
        className="flex items-center gap-1.5 p-2 rounded-full 
                   bg-[#141416]/85 dark:bg-[#141416]/85 backdrop-blur-2xl 
                   border border-white/[0.12] shadow-dock-float"
      >
        {/* Ijtimoiy Tarmoq Ikonkalari */}
        {socials.map((item, index) => {
          const isPhone = item.url.startsWith('tel:');
          return (
            <motion.a
              key={index}
              href={item.url}
              target={isPhone ? undefined : "_blank"}
              rel={isPhone ? undefined : "noopener noreferrer"}
              title={item.name}
              whileHover={{ scale: 1.25, y: -4 }}
              whileTap={{ scale: 0.9 }}
              className="w-10 h-10 rounded-full flex items-center justify-center 
                         bg-white/[0.05] hover:bg-[#4b81ee] text-slate-300 hover:text-white 
                         border border-white/[0.06] hover:border-transparent transition-colors"
            >
              <DynamicIcon name={item.icon} className="w-4 h-4" />
            </motion.a>
          );
        })}

        <div className="w-[1px] h-5 bg-white/10 mx-1" />

        {/* QR Kod Modalini ochish */}
        <motion.button
          onClick={onOpenQr}
          title="QR Kod va Kontaktni saqlash"
          whileHover={{ scale: 1.25, y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full flex items-center justify-center 
                     bg-white/[0.05] hover:bg-emerald-500 text-slate-300 hover:text-white 
                     border border-white/[0.06] hover:border-transparent transition-colors cursor-pointer"
        >
          <QrCode className="w-4 h-4" />
        </motion.button>

        {/* Sahifani ulashish */}
        <motion.button
          onClick={onShare}
          title="Havolani ulashish"
          whileHover={{ scale: 1.25, y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full flex items-center justify-center 
                     bg-white/[0.05] hover:bg-[#4b81ee] text-slate-300 hover:text-white 
                     border border-white/[0.06] hover:border-transparent transition-colors cursor-pointer"
        >
          <Share2 className="w-4 h-4" />
        </motion.button>

        {/* Kun/Tun rejimi */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          title="Mavzuni almashtirish"
          whileHover={{ scale: 1.25, y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full flex items-center justify-center 
                     bg-white/[0.05] hover:bg-amber-500 text-slate-300 hover:text-white 
                     border border-white/[0.06] hover:border-transparent transition-colors cursor-pointer"
        >
          {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
        </motion.button>

        {/* Yuqoriga qaytish */}
        <motion.button
          onClick={scrollToTop}
          title="Tepaga"
          whileHover={{ scale: 1.25, y: -4 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 rounded-full flex items-center justify-center 
                     bg-white/[0.05] hover:bg-white/20 text-slate-300 hover:text-white 
                     border border-white/[0.06] transition-colors cursor-pointer"
        >
          <ArrowUp className="w-4 h-4" />
        </motion.button>
      </motion.div>
    </div>
  );
};
