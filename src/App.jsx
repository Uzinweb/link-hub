import React, { useState, useEffect } from 'react';
import { personalConfig } from './config';
import { GogginsNavbar } from './components/GogginsNavbar';
import { GogginsHero } from './components/GogginsHero';
import { GogginsTwoCards } from './components/GogginsTwoCards';
import { GogginsStats } from './components/GogginsStats';
import { GogginsBanner } from './components/GogginsBanner';
import { GogginsQrModal } from './components/GogginsQrModal';

export function App() {
  const [isQrOpen, setIsQrOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col justify-between selection:bg-[#c8a858] selection:text-black">
      {/* Keng va Zamonaviy Konteyner (max-w-6xl - kitob shaklida keng ochiluvchi) */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col flex-1">
        {/* Tepa burchak: Rasmiy brend, Yagona Ulashish & QR Tugmasi */}
        <GogginsNavbar 
          onOpenQr={() => setIsQrOpen(true)}
        />

        {/* Kitob shaklidagi ikki ustunli asosiy tana */}
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start my-6 flex-1">
          {/* CHAP USTUN (Chap bet): Rasm, Ism-familiya, Shior va Ijtimoiy tarmoqlar */}
          <aside className="lg:col-span-5 lg:sticky lg:top-8 flex flex-col items-center">
            <GogginsHero 
              profile={personalConfig.profile} 
              socials={personalConfig.socials} 
            />
          </aside>

          {/* O'NG USTUN (O'ng bet): Barcha kartalar, metrikalar, kitob banneri va manbalar */}
          <section className="lg:col-span-7 flex flex-col gap-2">
            {/* 1. Ikki Yonma-yon Karta (Telegram & Instagram) */}
            <GogginsTwoCards 
              cards={personalConfig.twoCards} 
            />

            {/* 2. Nufuz va Ishonch Metrikalari (1000+ shogirdlar) */}
            <GogginsStats 
              stats={personalConfig.stats} 
            />

            {/* 3. Katta Markaziy Kitob / Darslik Banneri */}
            <GogginsBanner 
              banner={personalConfig.featuredBanner} 
            />
          </section>
        </main>
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
