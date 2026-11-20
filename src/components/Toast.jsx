import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

export const Toast = ({ show, message }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2 rounded-full 
                     bg-[#1a1a1a]/95 text-white backdrop-blur-xl 
                     border border-white/10 shadow-2xl text-xs font-ui font-medium"
        >
          <span className="w-4 h-4 rounded-full bg-[#4b81ee] flex items-center justify-center text-white">
            <Check className="w-2.5 h-2.5 stroke-[3]" />
          </span>
          <span>{message || "Havola nusxalandi!"}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
