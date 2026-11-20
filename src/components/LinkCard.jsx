import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { DynamicIcon } from './DynamicIcon';

export const LinkCard = ({ item, index }) => {
  const isExternal = item.url.startsWith('http') || item.url.startsWith('https');
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.a
      ref={cardRef}
      href={item.url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 + index * 0.06, duration: 0.3 }}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`group relative flex items-center justify-between p-4 rounded-xl 
                 transition-all duration-200 cursor-pointer overflow-hidden
                 ${item.highlight 
                   ? 'bg-[#151518] border border-[#4b81ee]/40 shadow-[0_0_20px_-5px_rgba(75,129,238,0.2)]' 
                   : 'bg-[#121214] border border-white/[0.06] hover:border-white/[0.15]'
                 }`}
    >
      {/* Kursor Nuri (Radial Spotlight) */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(280px circle at ${mousePos.x}px ${mousePos.y}px, rgba(75, 129, 238, 0.12), transparent 80%)`,
        }}
      />

      {/* Chap qism: Ikonka va Matn */}
      <div className="flex items-center gap-3.5 relative z-10 flex-1 min-w-0">
        <div 
          className={`flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-colors duration-200
                     ${item.highlight 
                       ? 'bg-[#4b81ee] text-white shadow-md' 
                       : 'bg-white/[0.06] text-[#8b8b8b] group-hover:bg-[#4b81ee] group-hover:text-white'
                     }`}
        >
          <DynamicIcon name={item.icon} className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0 text-left">
          <div className="flex items-center gap-2">
            <h3 className="font-ui text-sm sm:text-base font-semibold text-white group-hover:text-[#4b81ee] transition-colors">
              {item.title}
            </h3>
            {item.badge && (
              <span className="text-[10px] font-ui font-semibold uppercase px-2 py-0.5 rounded-full bg-[#4b81ee]/20 text-[#4b81ee] border border-[#4b81ee]/30">
                {item.badge}
              </span>
            )}
          </div>
          {item.subtitle && (
            <p className="font-body text-xs text-[#8b8b8b] truncate mt-0.5">
              {item.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* O'ng qism: Yo'nalish belgisi */}
      <div className="flex-shrink-0 ml-3 relative z-10">
        <div className="w-8 h-8 rounded-full flex items-center justify-center 
                        bg-white/[0.04] text-[#8b8b8b] 
                        group-hover:bg-[#4b81ee] group-hover:text-white 
                        transition-all duration-200 group-hover:rotate-45">
          <ArrowUpRight className="w-4 h-4 stroke-[2]" />
        </div>
      </div>
    </motion.a>
  );
};
