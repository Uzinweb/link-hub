import React from 'react';

export const BackgroundCanvas = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
      {/* Yuqori markaziy Cyber Horizon & Mesh Glow */}
      <div 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[550px] 
                   bg-[radial-gradient(circle_at_top,rgba(75,129,238,0.22),rgba(139,92,246,0.12),transparent_70%)] 
                   blur-3xl dark:opacity-100 opacity-60"
      />

      {/* Chapdagi nozik zumrad nur */}
      <div 
        className="absolute top-1/3 -left-40 w-[500px] h-[500px] 
                   bg-[radial-gradient(circle,rgba(16,185,129,0.08),transparent_70%)] 
                   blur-3xl dark:opacity-100 opacity-40"
      />

      {/* Pastdagi Horizon Blue Glow */}
      <div 
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] 
                   bg-[radial-gradient(ellipse_at_bottom,rgba(75,129,238,0.18),transparent_70%)] 
                   blur-3xl dark:opacity-100 opacity-50"
      />

      {/* Ultra-nozik texnologik Grid to'r */}
      <div 
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.045]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.3) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />
    </div>
  );
};
