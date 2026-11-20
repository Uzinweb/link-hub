/**
 * ==============================================================================
 * DAVID GOGGINS USLUBIDAGI ANIQ SHAXSIY MA'LUMOTLAR
 * ==============================================================================
 */

export const personalConfig = {
  profile: {
    firstName: "SALOHIDDIN",
    lastName: "OLLAYOROV",
    username: "@qirqming",
    tagline: "BIZNESNI TIZIMLASHTIRISH",
    // Foydalanuvchining shaxsiy portret fotosurati
    heroBg: "/profile_cutout.png",
    avatar: "/profile_cutout.png",
  },

  // Tilla doiradagi ijtimoiy tarmoqlar (Faqat Telegram, Instagram va YouTube)
  socials: [
    { name: "Telegram", url: "https://t.me/qirqming", icon: "telegram" },
    { name: "Instagram", url: "https://www.instagram.com/tizimbek_/", icon: "instagram" },
    { name: "YouTube", url: "https://youtube.com/@qirqming", icon: "youtube" },
  ],

  // 1. Nufuz va Ishonch Metrikalari (1000+ shogirdlar bilan)
  stats: [
    { value: "5+ YIL", label: "TAJRIBA", desc: "Ta'lim va tizimlashtirish" },
    { value: "1,000+", label: "SHOGIRDLAR", desc: "Muvaffaqiyatli bitiruvchilar" },
    { value: "30+", label: "LOYIHALAR", desc: "Tizimlashtirilgan bizneslar" },
  ],

  // 2 ta Yonma-yon Karta (Grid 2 cols)
  twoCards: [
    {
      id: "telegram-chat",
      tag: "TEZKOR ALOQA",
      title: "TELEGRAM",
      buttonText: "XABAR YOZISH",
      url: "https://t.me/tizimbek_",
      bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "instagram-profile",
      tag: "RASMIY SAHIFA",
      title: "INSTAGRAM",
      buttonText: "KUZATISH",
      url: "https://www.instagram.com/tizimbek_/",
      bgImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=600&q=80",
    }
  ],

  // Katta Markaziy Banner
  featuredBanner: {
    title: "ARAB TILI VA FONETIKA",
    subtitle: "TOVUSHLARNI TO'G'RI VA GO'ZAL TALAFFUZ QILISH SIRLARI",
    buttonText: "BOG'LANISH",
    url: "https://t.me/qirqming",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1000&q=80",
  },

  // Pastki qism: "ALOQA & MANBALAR" (4 ta noyob va mustaqil manbalar)
  bottomResources: [
    {
      title: "Bog'lanish uchun telefon",
      subtitle: "Qo'ng'iroq qilish uchun bosing",
      url: "tel:+998888900058",
      icon: "phone",
      badge: "Tezkor",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=200&q=80",
    },
    {
      title: "Telegram Kanalim",
      subtitle: "Fonetika darslari va maqolalar (@qirqming)",
      url: "https://t.me/qirqming",
      icon: "telegram",
      badge: "Kanal",
      image: "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=200&q=80",
    },
    {
      title: "YouTube Video Darslar",
      subtitle: "Video tahlillar va amaliy mashg'ulotlar",
      url: "https://youtube.com/@qirqming",
      icon: "youtube",
      badge: "Video",
      image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=200&q=80",
    },
    {
      title: "Biznesni Tizimlashtirish",
      subtitle: "Jarayonlarni tartibga solish bo'yicha maslahat",
      url: "https://t.me/qirqming",
      icon: "briefcase",
      badge: "Biznes",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=200&q=80",
    },
  ],

  footer: {
    copyright: "Salohiddin Ollayorov",
  }
};
