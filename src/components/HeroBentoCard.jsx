import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send, Users, Sparkles } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const HeroBentoCard = ({ data }) => {
  return (
    <SpotlightCard 
      className="p-6 sm:p-7 border-[#4b81ee]/40 relative group"
      spotlightColor="rgba(75, 129, 238, 0.25)"
      borderColor="rgba(75, 129, 238, 0.6)"
    >
      {/* Orqa fon nozik to'lqini */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[radial-gradient(ellipse_at_top_right,rgba(75,129,238,0.2),transparent_70%)] pointer-events-none" />

      <div className="flex flex-col gap-4 relative z-10">
        {/* Tepa qator: Badge va Jonli indikator */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-ui font-semibold uppercase tracking-wider bg-[#4b81ee]/20 text-[#4b81ee] border border-[#4b81ee]/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{data.badge || "ASOSIY RESURS"}</span>
          </span>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/10 text-[11px] font-ui text-[#8b8b8b]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Faol kanal</span>
          </div>
        </div>

        {/* Sarlavha va Tavsif */}
        <div className="space-y-2 mt-1">
          <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white tracking-tight group-hover:text-[#4b81ee] transition-colors">
            {data.title}
          </h3>
          <p className="font-body text-xs sm:text-sm text-[#8b8b8b] leading-relaxed max-w-lg">
            {data.description}
          </p>
        </div>

        {/* Metrika va pastki harakat */}
        <div className="pt-3 border-t border-white/[0.07] flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2 text-xs font-ui text-[#8b8b8b]">
            <Users className="w-4 h-4 text-[#4b81ee]" />
            <span>{data.members}</span>
          </div>

          <a
            href={data.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#4b81ee] hover:bg-[#3b71de] 
                       text-white font-ui font-semibold text-xs tracking-wide shadow-blue-pill 
                       hover:shadow-lg transition-all duration-200 active:scale-95 group/btn"
          >
            <Send className="w-3.5 h-3.5" />
            <span>{data.buttonText || "Kanalga o'tish"}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </SpotlightCard>
  );
};
