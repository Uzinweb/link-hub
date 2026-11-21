import React from 'react';
import { motion } from 'framer-motion';
import { BrandMonogram } from './BrandMonogram';
import { DynamicIcon } from './DynamicIcon';

export const GogginsHero = ({ profile, socials }) => {
  return (
    <div className="relative w-full overflow-hidden pt-72 sm:pt-96 pb-8 px-4 flex flex-col items-center text-center">
      {/* 1. Asl fotosurat (Barcha qirralari — yuqori, ikki yon va pastki qismi fonga 100% silliq singdirilgan) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-sm sm:max-w-md h-[460px] sm:h-[520px] pointer-events-none select-none z-0">
        {/* Gorizontal (chap va o'ng) qirralarni silliq erituvchi qatlam */}
        <div 
          className="w-full h-full"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)'
          }}
        >
          {/* Vertikal (tepa va past) qirralarni silliq erituvchi qatlam: Yuz va jag' 100% tiniq, tepa va past fonga singadi */}
          <div 
            className="w-full h-full relative"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 58%, rgba(0,0,0,0.85) 66%, rgba(0,0,0,0.2) 76%, transparent 84%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 8%, black 58%, rgba(0,0,0,0.85) 66%, rgba(0,0,0,0.2) 76%, transparent 84%)'
            }}
          >
            <img
              src={profile.heroBg}
              alt={`${profile.firstName} ${profile.lastName}`}
              className="w-full h-full object-contain object-top drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>

        {/* Eng pastki yelka va ko'krak qismini fonga singdiruvchi yumshoq gradient */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-32 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent pointer-events-none" />
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
