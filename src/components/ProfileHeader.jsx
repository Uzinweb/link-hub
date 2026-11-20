import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

export const ProfileHeader = ({ profile }) => {
  const [imageError, setImageError] = useState(false);

  const initials = profile.name
    ? profile.name
        .split(' ')
        .map(n => n[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()
    : 'SO';

  return (
    <div className="flex flex-col items-center text-center px-4 pt-4 pb-5">
      {/* Avatar (Toza va premium) */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative mb-4"
      >
        <div className="w-24 h-24 rounded-full p-[2.5px] bg-gradient-to-b from-white/20 to-white/5 shadow-xl">
          <div className="w-full h-full rounded-full overflow-hidden bg-[#151515] flex items-center justify-center border border-white/10">
            {!imageError && profile.avatar ? (
              <img
                src={profile.avatar}
                alt={profile.name}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover object-center"
              />
            ) : (
              <span className="font-serif text-2xl font-bold text-white">
                {initials}
              </span>
            )}
          </div>
        </div>

        {/* Yashil onlayn nuqta */}
        <span 
          title="Onlayn"
          className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#0a0a0c]"
        />
      </motion.div>

      {/* Ism va Tasdiqlanganlik nishoni */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.3 }}
        className="flex items-center justify-center gap-1.5 mb-1"
      >
        <h1 className="font-serif text-2xl sm:text-[28px] font-bold text-white tracking-tight">
          {profile.name}
        </h1>
        {profile.verified && (
          <BadgeCheck className="w-5 h-5 fill-[#4b81ee] text-[#0a0a0c]" />
        )}
      </motion.div>

      {/* Taxallus */}
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.3 }}
        className="mb-2.5"
      >
        <a 
          href={`https://t.me/${profile.username.replace('@', '')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-ui font-medium text-[#4b81ee] hover:underline"
        >
          {profile.username}
        </a>
      </motion.div>

      {/* Qisqa Bio */}
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="max-w-[380px] text-xs sm:text-sm text-[#8b8b8b] font-body leading-relaxed"
      >
        {profile.bio}
      </motion.p>
    </div>
  );
};
