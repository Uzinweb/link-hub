import React from 'react';
import { motion } from 'framer-motion';

export const GogginsBanner = ({ banner }) => {
  return (
    <div className="w-full my-2">
      <motion.a
        href={banner.url}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.015, transition: { duration: 0.12, ease: "easeOut" } }}
        whileTap={{ scale: 0.99 }}
        transition={{ duration: 0.12, ease: "easeOut" }}
        className="relative min-h-[190px] sm:min-h-[220px] rounded-2xl overflow-hidden flex items-center p-4 sm:p-7 
                   bg-[#101014] border border-[#c8a858]/35 hover:border-[#c8a858] transition-colors duration-150 
                   shadow-[0_6px_25px_rgba(0,0,0,0.7)] hover:shadow-[0_0_25px_rgba(200,168,88,0.3)] group cursor-pointer block"
      >
        {/* Orqa fon rasmi */}
        <div 
          className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 opacity-35 group-hover:scale-105 transition-transform duration-300"
          style={{ backgroundImage: `url(${banner.bgImage})` }}
        />

        {/* Qorayuvchi gradient qoplama */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0d] via-[#0a0a0d]/90 to-[#0a0a0d]/70" />

        <div className="relative z-10 flex items-center gap-4 sm:gap-7 w-full">
          {/* Chap qism: 3D Kitob / Darslik Mockup */}
          <div className="flex-shrink-0 w-24 sm:w-36 h-32 sm:h-48 rounded-md overflow-hidden shadow-2xl border border-white/20 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 bg-white">
            <div className="w-full h-full p-2 sm:p-3 bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white flex flex-col justify-between border-l-4 border-[#c8a858]">
              <div>
                <div className="font-display text-[8px] sm:text-[10px] text-[#c8a858] tracking-[0.2em] uppercase font-bold mb-1 flex items-center gap-1">
                  <span>FONETIKA</span>
                  <span className="text-[#c8a858]">•</span>
                  <span>TAJVID</span>
                </div>
                <div className="font-display text-xs sm:text-base font-extrabold leading-tight text-white tracking-wide">
                  ARAB TILI
                </div>

                {/* Arabcha Kalligrafik Yozuv va Harflar */}
                <div className="mt-1.5 sm:mt-2 space-y-0.5 sm:space-y-1 select-none">
                  <div className="text-[11px] sm:text-sm text-[#c8a858] font-bold tracking-wide leading-none" style={{ fontFamily: 'Traditional Arabic, Amiri, serif' }} dir="rtl">
                    اللُّغَةُ العَرَبِيَّةُ
                  </div>
                  <div className="text-[9px] sm:text-[11px] text-[#c8a858]/90 tracking-widest" style={{ fontFamily: 'Traditional Arabic, Amiri, serif' }} dir="rtl">
                    أ ب ت ث ج ح خ
                  </div>
                </div>
              </div>

              <div className="pt-1.5 sm:pt-2 border-t border-white/10 opacity-60 flex items-center justify-between">
                <span className="w-5 sm:w-6 h-0.5 bg-[#c8a858] block rounded-full" />
                <span className="text-[7px] sm:text-[8px] text-[#c8a858] font-mono tracking-widest uppercase">
                  TAJVID
                </span>
              </div>
            </div>
          </div>

          {/* O'ng qism: Matn va Oltin Tugma */}
          <div className="flex-1 min-w-0 flex flex-col items-start gap-2">
            {/* Mualliflik izohi: Nega fonetika kursi borligini tushuntiruvchi nishon */}
            {banner.tag && (
              <span className="font-display text-[9px] sm:text-xs text-black px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-[#c8a858] tracking-widest uppercase font-black shadow-sm">
                {banner.tag}
              </span>
            )}

            <h3 className="font-display text-lg sm:text-2xl md:text-3xl font-extrabold text-white tracking-wider leading-tight uppercase">
              {banner.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-gray-300 tracking-normal leading-relaxed line-clamp-2 sm:line-clamp-none max-w-lg">
              {banner.subtitle}
            </p>

            {/* Oltin tugma - to'laqonli boy tillarang, maksimal kontrast */}
            <div className="mt-1.5 sm:mt-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-xl bg-[#c8a858] group-hover:bg-[#dfb235] text-black font-display text-xs sm:text-sm font-black tracking-widest uppercase transition-all shadow-lg flex items-center gap-2">
              <span>{banner.buttonText}</span>
              <span className="text-black font-black text-sm sm:text-base">→</span>
            </div>
          </div>
        </div>
      </motion.a>
    </div>
  );
};
