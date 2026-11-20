import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Share2, Check, QrCode, UserPlus } from 'lucide-react';

export const GogginsQrModal = ({ isOpen, onClose, profile }) => {
  if (!isOpen) return null;

  const [isCopied, setIsCopied] = useState(false);
  const currentUrl = window.location.href;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(currentUrl)}&color=e5c468&bgcolor=08080a&margin=12`;

  // Ulashish va nusxalash funksiyasi
  const handleShare = async () => {
    const shareData = {
      title: `${profile.firstName} ${profile.lastName} | Shaxsiy Sahifa`,
      text: profile.tagline,
      url: currentUrl,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // bekor qilinsa nusxalashga o'tadi
      }
    }

    try {
      await navigator.clipboard.writeText(currentUrl);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2200);
    } catch (err) {
      const textArea = document.createElement("textarea");
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2200);
      } catch (e) {}
      document.body.removeChild(textArea);
    }
  };

  // VCard (.vcf) yuklab olish funksiyasi
  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Salohiddin Ollayorov
N:Ollayorov;Salohiddin;;;
TITLE:Biznesni tizimlashtirish | Arab tili fonetikasi ustozi
TEL;TYPE=CELL:+998888900058
URL:https://t.me/qirqming
NOTE:Telegram: @qirqming | Rasmiy shaxsiy sahifa
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Salohiddin_Ollayorov.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-sm rounded-3xl p-6 sm:p-7 bg-[#0d0d10] border border-[#c8a858]/35 shadow-2xl text-center"
        >
          {/* Yopish tugmasi */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Sarlavha */}
          <div className="flex items-center justify-center gap-2 mb-1">
            <QrCode className="w-5 h-5 text-[#c8a858]" />
            <h3 className="font-display text-lg sm:text-xl font-bold tracking-widest text-[#e5c468] uppercase">
              ULASHISH & QR KOD
            </h3>
          </div>
          <p className="font-sans text-xs text-gray-400 mb-5">
            Kamerangiz bilan skanerlang yoki havolani ulashing
          </p>

          {/* QR Kod Ramkasi */}
          <div className="w-56 h-56 mx-auto rounded-2xl p-3 bg-[#08080a] border border-[#c8a858]/25 flex items-center justify-center mb-5 shadow-inner">
            <img 
              src={qrUrl} 
              alt="Salohiddin Ollayorov QR Kod" 
              className="w-full h-full object-contain rounded-xl"
            />
          </div>

          {/* ASOSIY OLTIN TUGMA: HAVOLANI ULASHISH */}
          <button
            onClick={handleShare}
            className="w-full py-3 px-4 rounded-xl bg-[#c8a858] hover:bg-[#e5c468] text-black font-display text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-lg active:scale-95 cursor-pointer"
          >
            {isCopied ? (
              <>
                <Check className="w-4 h-4 stroke-[3] text-black" />
                <span>HAVOLA NUSXALANDI!</span>
              </>
            ) : (
              <>
                <Share2 className="w-4 h-4 stroke-[2.5]" />
                <span>HAVOLANI ULASHISH</span>
              </>
            )}
          </button>

          {/* Yordamchi kontakt saqlash tugmasi */}
          <button
            onClick={downloadVCard}
            className="mt-3.5 w-full py-2 text-center text-xs font-sans text-gray-400 hover:text-[#e5c468] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <UserPlus className="w-3.5 h-3.5 text-[#c8a858]" />
            <span>Kontaktni telefoningizga saqlash (.vcf)</span>
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
