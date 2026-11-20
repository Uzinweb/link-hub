import React from 'react';

export const BrandMonogram = ({ className = "w-14 h-14" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hashamatli Oltin Heraldik / Geometrik Monogramma (David Goggins Crest uslubida) */}
      <circle cx="50" cy="50" r="46" stroke="#c8a858" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="50" cy="50" r="40" stroke="#c8a858" strokeWidth="1.2" opacity="0.8" />
      
      {/* Markaziy nayza / qalam / ramz */}
      <path
        d="M50 15L53 38H47L50 15Z"
        fill="#c8a858"
      />
      <path
        d="M50 85L47 62H53L50 85Z"
        fill="#c8a858"
      />
      <line x1="50" y1="20" x2="50" y2="80" stroke="#c8a858" strokeWidth="2.5" />
      
      {/* Qanotlar / Qo'shaloq yoylar */}
      <path
        d="M32 35C24 45 24 55 32 65C38 61 42 55 42 50C42 45 38 39 32 35Z"
        stroke="#c8a858"
        strokeWidth="2.2"
        fill="none"
      />
      <path
        d="M68 35C76 45 76 55 68 65C62 61 58 55 58 50C58 45 62 39 68 35Z"
        stroke="#c8a858"
        strokeWidth="2.2"
        fill="none"
      />

      {/* Markaziy olmos */}
      <polygon points="50,44 56,50 50,56 44,50" fill="#e5c468" />
    </svg>
  );
};
