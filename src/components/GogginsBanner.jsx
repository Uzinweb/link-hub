import React from 'react';
import { motion } from 'framer-motion';

export const GogginsBanner = ({ banner }) => {
  return (
    <div className="w-full my-3">
      <motion.a
        href={banner.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.4 }}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="relative min-h-[190px] sm:min-h-[220px] rounded-2xl overflow-hidden flex items-center p-5 sm:p-8 
                   border border-black/10 dark:border-white/10 hover:border-[#c8a858] transition-all duration-300 shadow-xl group cursor-pointer block"
      >
        {/* Orqa fon rasmi */}
        <div 
          className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 opacity-35 group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${banner.bgImage})` }}
        />

        {/* Qorayuvchi gradient qoplama */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />

        <div className="relative z-10 flex items-center gap-5 sm:gap-8 w-full">
          {/* Chap qism: 3D Kitob / Darslik Mockup */}
          <div className="flex-shrink-0 w-28 sm:w-36 h-36 sm:h-48 rounded-md overflow-hidden shadow-2xl border border-white/20 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 bg-white">
            <div className="w-full h-full p-2.5 sm:p-3 bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white flex flex-col justify-between border-l-4 border-[#c8a858]">
              <div>
                <span className="font-display text-[9px] sm:text-[10px] text-[#e5c468] tracking-widest uppercase block">
                  FONETIKA
                </span>
                <span className="font-display text-sm sm:text-base font-bold leading-tight block mt-0.5">
                  ARAB TILI
                </span>

                {/* Arabcha Kalligrafik Yozuv va Harflar */}
                <div className="mt-2 space-y-1 select-none">
                  <div className="text-xs sm:text-sm text-[#e5c468] font-bold tracking-wide leading-none" style={{ fontFamily: 'Traditional Arabic, Amiri, serif' }} dir="rtl">
                    اللُّغَةُ العَرَبِيَّةُ
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-[#c8a858]/90 tracking-widest" style={{ fontFamily: 'Traditional Arabic, Amiri, serif' }} dir="rtl">
                    أ ب ت ث ج ح خ
                  </div>
                  <div className="text-[9px] sm:text-[10px] text-gray-400 tracking-wider" style={{ fontFamily: 'Traditional Arabic, Amiri, serif' }} dir="rtl">
                    د ذ ر ز س ش ص
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 opacity-60 flex items-center justify-between">
                <span className="w-6 h-0.5 bg-[#c8a858] block rounded-full" />
                <span className="text-[8px] text-[#e5c468]/80 font-mono tracking-widest uppercase">
                  TAJVID
                </span>
              </div>
            </div>
          </div>

          {/* O'ng qism: Matn va Oltin Tugma */}
          <div className="flex-1 flex flex-col items-start gap-2">
            <h3 className="font-display text-xl sm:text-3xl font-extrabold text-white tracking-wider leading-tight uppercase">
              {banner.title}
            </h3>
            <p className="font-display text-xs sm:text-sm text-gray-200 tracking-wider uppercase leading-relaxed max-w-lg">
              {banner.subtitle}
            </p>

            {/* Oltin tugma */}
            <div className="mt-2 px-5 py-2 sm:py-2.5 rounded-sm bg-[#c8a858] group-hover:bg-[#e5c468] text-black font-display text-xs sm:text-sm font-bold tracking-widest uppercase transition-colors shadow-lg">
              {banner.buttonText}
            </div>
          </div>
        </div>
      </motion.a>
    </div>
  );
};
