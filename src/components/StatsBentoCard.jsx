import React from 'react';
import { Award, BookCheck, Briefcase } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const StatsBentoCard = ({ stats, skills }) => {
  return (
    <SpotlightCard 
      className="p-5 sm:p-6"
      spotlightColor="rgba(139, 92, 246, 0.18)"
      borderColor="rgba(139, 92, 246, 0.35)"
    >
      <div className="flex flex-col gap-4">
        {/* Metrikalar qatori */}
        <div className="grid grid-cols-3 gap-2 divide-x divide-white/[0.08] text-center">
          {stats.map((item, index) => (
            <div key={index} className="px-1.5 first:pl-0 last:pr-0">
              <div className="font-serif text-lg sm:text-2xl font-bold text-white bg-gradient-to-r from-white via-white to-slate-300 bg-clip-text">
                {item.value}
              </div>
              <div className="font-ui text-[11px] font-semibold text-[#4b81ee] mt-0.5">
                {item.label}
              </div>
              <div className="hidden sm:block font-body text-[10px] text-[#8b8b8b] mt-0.5 truncate">
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Ixtisoslik teglari */}
        <div className="pt-3 border-t border-white/[0.08]">
          <div className="font-ui text-[11px] font-medium uppercase tracking-wider text-[#8b8b8b] mb-2.5">
            Asosiy Yo'nalishlar
          </div>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill, index) => (
              <span 
                key={index}
                className="px-2.5 py-1 rounded-lg text-[11px] font-ui font-medium 
                           bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white 
                           border border-white/[0.06] transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
};
