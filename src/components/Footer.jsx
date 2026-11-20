import React from 'react';
import { motion } from 'framer-motion';
import { DynamicIcon } from './DynamicIcon';

export const Footer = ({ socials, footerInfo }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full flex flex-col items-center justify-center px-4 pt-8 pb-10 mt-auto">
      {/* Ijtimoiy Tarmoq Ikonkalari */}
      <div className="flex items-center justify-center gap-2.5 flex-wrap mb-5">
        {socials.map((social, index) => {
          const isPhone = social.url.startsWith('tel:');
          return (
            <motion.a
              key={index}
              href={social.url}
              target={isPhone ? undefined : "_blank"}
              rel={isPhone ? undefined : "noopener noreferrer"}
              title={social.name}
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.92 }}
              className="w-10 h-10 rounded-full flex items-center justify-center
                         bg-white/[0.04] hover:bg-[#4b81ee] text-[#8b8b8b] hover:text-white
                         border border-white/[0.06] hover:border-transparent
                         transition-all duration-200"
            >
              <DynamicIcon name={social.icon} className="w-4 h-4" />
            </motion.a>
          );
        })}
      </div>

      {/* Copyright */}
      <p className="text-xs font-ui text-[#5a5a5a]">
        © {currentYear} {footerInfo?.copyright || "Salohiddin Ollayorov"}
      </p>
    </footer>
  );
};
