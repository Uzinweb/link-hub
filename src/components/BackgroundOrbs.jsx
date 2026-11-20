import React from 'react';

export const BackgroundOrbs = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
      {/* Tepadagi Royal Blue nur (Ambient Glow) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] 
                   bg-[radial-gradient(ellipse_at_top,rgba(75,129,238,0.18),transparent_70%)] 
                   dark:opacity-100 opacity-60"
      />

      {/* Pastdagi nozik ko'k nur (Footer Glow) */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] 
                   bg-[radial-gradient(ellipse_at_bottom,rgba(75,129,238,0.12),transparent_70%)] 
                   dark:opacity-100 opacity-50"
      />

      {/* Nozik minimalist to'r chiziqlari (Grid Pattern) */}
      <div 
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
    </div>
  );
};
