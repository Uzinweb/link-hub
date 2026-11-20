import React from 'react';
import { motion } from 'framer-motion';
import { DynamicIcon } from './DynamicIcon';

export const GogginsResources = ({ resources }) => {
  return (
    <div className="w-full my-6">
      {/* Bo'lim Sarlavhasi */}
      <div className="flex items-center gap-4 mb-4">
        <h4 className="font-display text-base sm:text-lg font-bold tracking-[0.2em] text-[#64748b] dark:text-[#999999] uppercase whitespace-nowrap">
          ALOQA VA MANBALAR
        </h4>
        <div className="flex-1 h-[1px] bg-black/[0.08] dark:bg-white/10" />
      </div>

      {/* Grid Kartalar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        {resources.map((item, index) => {
          const isPhone = item.url.startsWith('tel:');
          return (
            <motion.a
              key={index}
              href={item.url}
              target={isPhone ? undefined : "_blank"}
              rel={isPhone ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.08, duration: 0.3 }}
              whileHover={{ x: 3 }}
              className="flex items-center gap-4 p-3.5 sm:p-4 rounded-xl 
                         bg-white dark:bg-[#0e0e0e] hover:bg-[#fafafb] dark:hover:bg-[#151515] 
                         border border-black/[0.06] dark:border-white/5 hover:border-[#b88e28]/60 dark:hover:border-[#c8a858]/60 
                         transition-all duration-200 group cursor-pointer shadow-sm hover:shadow-md"
            >
              {/* Kichik Kvadrat Thumbnail */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden flex-shrink-0 relative bg-slate-100 dark:bg-[#181818] border border-black/[0.06] dark:border-white/10 flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/35 flex items-center justify-center">
                  <DynamicIcon name={item.icon} className="w-5 h-5 text-[#e5c468]" />
                </div>
              </div>

              {/* Matn Qismi */}
              <div className="flex-1 min-w-0">
                <h5 className="font-display text-sm sm:text-base font-bold text-[#1e293b] dark:text-white uppercase tracking-wide truncate group-hover:text-[#8a6820] dark:group-hover:text-[#c8a858] transition-colors">
                  {item.title}
                </h5>
                <p className="font-sans text-xs sm:text-sm text-[#64748b] dark:text-[#888888] truncate mt-0.5">
                  {item.subtitle}
                </p>
              </div>
            </motion.a>
          );
        })}
      </div>
    </div>
  );
};
