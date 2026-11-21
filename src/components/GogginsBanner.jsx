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
                   bg-[#101014] border border-[#c8a858]/35 hover:border-[#f5d77f] transition-all duration-300 
                   shadow-[0_6px_25px_rgba(0,0,0,0.7)] hover:shadow-[0_0_25px_rgba(200,168,88,0.25)] group cursor-pointer block"
      >
        {/* Orqa fon rasmi */}
        <div 
          className="absolute inset-0 bg-cover bg-center filter grayscale contrast-125 opacity-35 group-hover:scale-105 transition-transform duration-500"
          style={{ backgroundImage: `url(${banner.bgImage})` }}
        />

        {/* Qorayuvchi gradient qoplama */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0d] via-[#0a0a0d]/90 to-[#0a0a0d]/70" />

        <div className="relative z-10 flex items-center gap-5 sm:gap-8 w-full">
          {/* Chap qism: 3D Kitob / Darslik Mockup */}
          <div className="flex-shrink-0 w-28 sm:w-36 h-36 sm:h-48 rounded-md overflow-hidden shadow-2xl border border-white/20 transform -rotate-2 group-hover:rotate-0 transition-transform duration-300 bg-white">
            <div className="w-full h-full p-2.5 sm:p-3 bg-gradient-to-br from-slate-950 via-black to-slate-900 text-white flex flex-col justify-between border-l-4 border-[#c8a858]">
              <div>
                <div className="font-display text-[9px] sm:text-[10px] text-[#f7e39a] tracking-[0.2em] uppercase font-bold mb-1.5 flex items-center gap-1.5">
                  <span>FONETIKA</span>
                  <span className="text-[#c8a858]">•</span>
                  <span>TAJVID</span>
                </div>
                <div className="font-display text-sm sm:text-base font-extrabold leading-tight text-white tracking-wide">
                  ARAB TILI
                </div>

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
            <div className="mt-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#c8a858] via-[#f0d484] to-[#c8a858] group-hover:from-[#f0d484] group-hover:to-[#f7e39a] text-black font-display text-xs sm:text-sm font-extrabold tracking-widest uppercase transition-all shadow-lg flex items-center gap-2">
              <span>{banner.buttonText}</span>
              <span className="text-black/80 font-bold">→</span>
            </div>
          </div>
        </div>
      </motion.a>
    </div>
  );
};
