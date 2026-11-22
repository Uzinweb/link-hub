import React from 'react';
import { motion } from 'framer-motion';
import { DynamicIcon } from './DynamicIcon';

export const GogginsHero = ({ profile, socials }) => {
  return (
    <div className="relative w-full flex flex-col items-center text-center py-2 px-2 select-none">
      {/* 1. Shaxsiy fotosurat (Barcha qirralari silliq fonga singdirilgan) */}
      <div className="relative w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[360px] h-[360px] sm:h-[410px] lg:h-[430px] mb-4">
        {/* Oltin jilo orqa nur */}
        <div className="absolute -inset-3 bg-[#c8a858]/10 rounded-full blur-2xl pointer-events-none" />

        {/* Gorizontal silliq erituvchi qatlam */}
        <div 
          className="w-full h-full relative"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)'
          }}
        >
          {/* Vertikal silliq erituvchi qatlam */}
          <div 
            className="w-full h-full relative"
            style={{
              maskImage: 'linear-gradient(to bottom, transparent 0%, black 6%, black 68%, rgba(0,0,0,0.85) 78%, transparent 95%)',
              WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 6%, black 68%, rgba(0,0,0,0.85) 78%, transparent 95%)'
            }}
          >
            <img
              src={profile.heroBg}
              alt={`${profile.firstName} ${profile.lastName}`}
              className="w-full h-full object-cover object-top drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>

        {/* Pastki qismini sayt foniga silliq singdiruvchi gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent pointer-events-none" />
      </div>

      {/* 2. To'liq Ism-Familiya */}
      <motion.h1 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-widest text-[#c8a858] uppercase mb-3 select-none"
      >
        {profile.firstName} {profile.lastName}
      </motion.h1>

      {/* 3. Asosiy Yo'nalish va Mutaxassislik (Border saqlangan holda ichidagi sariq fon 80% opacity ga keltirildi) */}
      <motion.div
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="inline-flex items-center gap-2 px-4 sm:px-5 py-1.5 rounded-full bg-[#c8a858]/80 border border-[#c8a858] text-black shadow-[0_4px_20px_rgba(200,168,88,0.3)] mb-3 select-none backdrop-blur-sm"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
        <span className="font-display text-xs sm:text-sm font-black tracking-[0.22em] uppercase">
          {profile.tagline}
        </span>
      </motion.div>

      {/* 4. Pastki 3 ustun: Sotuv | Marketing | HR (Nozik va moslashgan izoh sifatida) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="flex items-center justify-center gap-2.5 sm:gap-3 text-[11px] sm:text-xs font-display tracking-[0.22em] uppercase font-bold text-gray-300 mb-6 select-none"
      >
        <span>SOTUV</span>
        <span className="text-[#c8a858] font-black">|</span>
        <span>MARKETING</span>
        <span className="text-[#c8a858] font-black">|</span>
        <span>HR</span>
      </motion.div>

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
              whileHover={{ scale: 1.15, transition: { duration: 0.12, ease: "easeOut" } }}
              whileTap={{ scale: 0.92 }}
              transition={{ duration: 0.12, ease: "easeOut" }}
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                         bg-[#161410] hover:bg-[#c8a858] 
                         text-[#c8a858] hover:text-black
                         border border-[#c8a858]/50 hover:border-[#c8a858] shadow-md hover:shadow-[0_0_15px_rgba(200,168,88,0.35)]
                         transition-colors duration-150 cursor-pointer backdrop-blur-sm"
            >
              <DynamicIcon name={item.icon} className="w-5 h-5" />
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
};
