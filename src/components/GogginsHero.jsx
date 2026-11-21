import React from 'react';
import { motion } from 'framer-motion';
import { BrandMonogram } from './BrandMonogram';
import { DynamicIcon } from './DynamicIcon';

export const GogginsHero = ({ profile, socials }) => {
  return (
    <div className="relative w-full overflow-hidden pt-72 sm:pt-96 pb-8 px-4 flex flex-col items-center text-center">
      {/* 1. To'liq Qirqilgan Shaffof Portret Fotosurat (Orqa foni yo'q, barcha qirralari fonga silliq singdirilgan) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-sm sm:max-w-md h-[460px] sm:h-[520px] pointer-events-none select-none z-0">
        <div 
          className="w-full h-full relative"
          style={{
            maskImage: 'linear-gradient(to bottom, black 20%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.25) 50%, transparent 65%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 20%, rgba(0,0,0,0.85) 35%, rgba(0,0,0,0.25) 50%, transparent 65%)'
          }}
        >
          <img
            src={profile.heroBg}
            alt={`${profile.firstName} ${profile.lastName}`}
            className="w-full h-full object-contain object-top drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
          />
        </div>

        {/* Fonga to'liq silliq singdiruvchi qora gradient qoplama */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/40 via-35% to-[#050505] to-68% pointer-events-none" />
      </div>

      {/* 2. So'zlar va Elementlar (Rasm ostida / ko'krak sohasida) */}
      <div className="relative z-10 flex flex-col items-center mt-auto">
        {/* To'liq Ism-Familiya */}
        <motion.h1 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="font-display text-2xl sm:text-4xl md:text-5xl font-bold tracking-widest text-transparent bg-clip-text 
                     bg-gradient-to-r from-[#7a5a18] via-[#a8822d] to-[#7a5a18] 
                     dark:from-[#c8a858] dark:via-[#f7e39a] dark:to-[#c8a858] uppercase mb-2
                     drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        >
          {profile.firstName} {profile.lastName}
        </motion.h1>

        {/* Yo'nalish va Shior */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="font-display text-xs sm:text-base tracking-[0.15em] sm:tracking-[0.2em] text-[#334155] dark:text-[#e2e8f0] uppercase font-semibold max-w-xl mb-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
        >
          {profile.tagline}
        </motion.p>

        {/* Oltin Rangli Dumaloq Ijtimoiy Tarmoqlar Qatori */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
          className="flex items-center justify-center gap-3.5 sm:gap-4 flex-wrap"
        >
          {socials.map((item, index) => {
            const isPhone = item.url.startsWith('tel:');
            return (
              <motion.a
                key={index}
                href={item.url}
                target={isPhone ? undefined : "_blank"}
                rel={isPhone ? undefined : "noopener noreferrer"}
                title={item.name}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                           bg-white/95 dark:bg-[#18150f]/90 hover:bg-[#c8a858] dark:hover:bg-[#c8a858] 
                           text-[#8a6820] dark:text-[#c8a858] hover:text-black dark:hover:text-black
                           border border-black/[0.08] dark:border-[#c8a858]/40 hover:border-[#c8a858] shadow-md hover:shadow-lg
                           transition-all duration-200 cursor-pointer backdrop-blur-sm"
              >
                <DynamicIcon name={item.icon} className="w-5 h-5" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};
