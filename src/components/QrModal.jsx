import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, UserPlus, ExternalLink } from 'lucide-react';

export const QrModal = ({ isOpen, onClose, profile }) => {
  if (!isOpen) return null;

  const currentUrl = window.location.href;
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(currentUrl)}&color=ffffff&bgcolor=151515&margin=10`;

  // VCard (.vcf) yuklab olish funksiyasi
  const downloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Salohiddin Ollayorov
N:Ollayorov;Salohiddin;;;
TITLE:Arab tili va fonetika ustozi | Biznes tizimlashtirish
TEL;TYPE=CELL:+998888900058
URL:https://t.me/qirqming
NOTE:Telegram: @tizimbek_ | Kanal: @qirqming
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
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-sm rounded-3xl p-6 bg-[#151518] border border-white/10 shadow-2xl text-center font-ui"
        >
          {/* Yopish tugmasi */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-[#8b8b8b] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          <h3 className="font-serif text-xl font-bold text-white mb-1">
            Tezkor QR Kod
          </h3>
          <p className="font-body text-xs text-[#8b8b8b] mb-5">
            Kamerangiz orqali ushbu kodni skanerlang
          </p>

          {/* QR Kod ramkasi */}
          <div className="w-52 h-52 mx-auto rounded-2xl p-3 bg-[#0d0d0d] border border-white/10 flex items-center justify-center mb-5 shadow-inner">
            <img 
              src={qrUrl} 
              alt="QR Kod" 
              className="w-full h-full object-contain rounded-xl"
            />
          </div>

          {/* VCard saqlash tugmasi */}
          <button
            onClick={downloadVCard}
            className="w-full py-3 px-4 rounded-xl bg-[#4b81ee] hover:bg-[#3b71de] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-blue-pill active:scale-95 cursor-pointer"
          >
            <UserPlus className="w-4 h-4" />
            <span>Kontaktni telefonga saqlash (.vcf)</span>
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
