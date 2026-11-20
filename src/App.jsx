import React, { useState, useEffect } from 'react';
import { personalConfig } from './config';
import { GogginsNavbar } from './components/GogginsNavbar';
import { GogginsHero } from './components/GogginsHero';
import { GogginsTwoCards } from './components/GogginsTwoCards';
import { GogginsStats } from './components/GogginsStats';
import { GogginsBanner } from './components/GogginsBanner';
import { GogginsResources } from './components/GogginsResources';
import { GogginsFooter } from './components/GogginsFooter';
import { GogginsQrModal } from './components/GogginsQrModal';

export function App() {
  const [isQrOpen, setIsQrOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col justify-between selection:bg-[#c8a858] selection:text-black">
      {/* Keng va Zamonaviy Konteyner (max-w-4xl) */}
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col flex-1">
        {/* Tepa burchak: Rasmiy brend, Yagona Ulashish & QR Tugmasi */}
        <GogginsNavbar 
          onOpenQr={() => setIsQrOpen(true)}
        />

        {/* 1. David Goggins Hero: Ism va Tarmoqlar */}
        <GogginsHero 
          profile={personalConfig.profile} 
          socials={personalConfig.socials} 
        />

        {/* 2. Ikki Yonma-yon Karta (Telegram & Instagram) */}
        <GogginsTwoCards 
          cards={personalConfig.twoCards} 
        />

        {/* 3. Nufuz va Ishonch Metrikalari (1000+ shogirdlar) */}
        <GogginsStats 
          stats={personalConfig.stats} 
        />

        {/* 4. Katta Markaziy Kitob / Darslik Banneri */}
        <GogginsBanner 
          banner={personalConfig.featuredBanner} 
        />

        {/* 5. Pastki Qism: Aloqa va Manbalar */}
        <GogginsResources 
          resources={personalConfig.bottomResources} 
        />

        {/* 6. Footer */}
        <GogginsFooter 
          copyright={`${personalConfig.profile.firstName} ${personalConfig.profile.lastName}`} 
        />
      </div>

      {/* QR Kod va Ulashish Modali */}
      <GogginsQrModal 
        isOpen={isQrOpen} 
        onClose={() => setIsQrOpen(false)} 
        profile={personalConfig.profile} 
      />
    </div>
  );
}

export default App;
