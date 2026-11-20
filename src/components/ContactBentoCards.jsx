import React from 'react';
import { Send, Phone, ArrowUpRight, Clock, ShieldCheck } from 'lucide-react';
import { SpotlightCard } from './SpotlightCard';

export const ContactBentoCards = ({ contact, phone }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
      {/* 1. Shaxsiy Telegram Kartasi */}
      <SpotlightCard 
        className="p-5"
        spotlightColor="rgba(75, 129, 238, 0.2)"
        borderColor="rgba(75, 129, 238, 0.4)"
      >
        <div className="flex flex-col justify-between h-full gap-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-ui font-semibold uppercase tracking-wider bg-[#4b81ee]/15 text-[#4b81ee] border border-[#4b81ee]/25">
                {contact.badge || "DIREKT"}
              </span>
              <div className="w-8 h-8 rounded-full bg-[#1e1e1e] flex items-center justify-center text-[#4b81ee]">
                <Send className="w-4 h-4" />
              </div>
            </div>

            <h4 className="font-serif text-lg font-bold text-white mb-1">
              {contact.title}
            </h4>
            <p className="font-ui text-xs text-[#4b81ee] font-medium mb-2">
              {contact.username}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] font-ui text-[#8b8b8b]">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>{contact.responseTime}</span>
            </div>
          </div>

          <a
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-[#202022] hover:bg-[#4b81ee] hover:text-white 
                       text-white text-xs font-ui font-medium flex items-center justify-center gap-1.5 
                       border border-white/5 transition-all duration-200 active:scale-95 group"
          >
            <span>{contact.buttonText || "Xabar yozish"}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </SpotlightCard>

      {/* 2. Telefon / Qo'ng'iroq Kartasi */}
      <SpotlightCard 
        className="p-5"
        spotlightColor="rgba(16, 185, 129, 0.2)"
        borderColor="rgba(16, 185, 129, 0.4)"
      >
        <div className="flex flex-col justify-between h-full gap-4">
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-ui font-semibold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                {phone.badge || "QO'NG'IROQ"}
              </span>
              <div className="w-8 h-8 rounded-full bg-[#1e1e1e] flex items-center justify-center text-emerald-400">
                <Phone className="w-4 h-4" />
              </div>
            </div>

            <h4 className="font-serif text-lg font-bold text-white mb-1">
              {phone.title}
            </h4>
            <p className="font-body text-xs text-[#8b8b8b] mb-2">
              {phone.subtitle}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] font-ui text-[#8b8b8b]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#4b81ee]" />
              <span>Rasmiy kontakt</span>
            </div>
          </div>

          <a
            href={phone.url}
            className="w-full py-2.5 px-4 rounded-xl bg-[#202022] hover:bg-emerald-500 hover:text-white 
                       text-white text-xs font-ui font-medium flex items-center justify-center gap-1.5 
                       border border-white/5 transition-all duration-200 active:scale-95 group"
          >
            <span>{phone.buttonText || "Qo'ng'iroq qilish"}</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </SpotlightCard>
    </div>
  );
};
