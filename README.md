# 🌟 Personal Link Hub (LinkTree Muqobili)

Zamonaviy, nafis va premium **"Dark Glassmorphism"** uslubidagi shaxsiy havolalar markazi (LinkTree muqobili). Mobil qurilmalarga to'liq moslashgan (Mobile-First) va kompyuter ekranlarida ixcham, markazlashgan tarzda namoyon bo'ladi.

---

## 🚀 Texnologik Stek

- **Frontend:** React 18 (Vite bilan)
- **Dizayn & Stillar:** Tailwind CSS
- **Ikonkalar:** Lucide React + rasmiy vektorlar (SVG)
- **Animatsiyalar:** Framer Motion (hover, click, tap va suzuvchi effektlar)
- **Mavzular:** Dark Mode (Glassmorphism) & Light Mode

---

## 📁 Loyiha Tuzilishi

```text
├── public/                 # Statik fayllar (rasmlar, ikonlar)
├── src/
│   ├── components/         # Qayta ishlatiluvchi UI komponentlar
│   │   ├── BackgroundOrbs.jsx  # Orqa fondagi nurli suzuvchi sharlar
│   │   ├── DynamicIcon.jsx     # Dinamik tarmoq ikonkalarini chiqaruvchi
│   │   ├── Footer.jsx          # Pastki ijtimoiy tarmoqlar bloki
│   │   ├── LinkCard.jsx        # Alohida shishasimon havola kartochkasi
│   │   ├── LinksList.jsx       # Barcha havolalar ro'yxati konteyneri
│   │   ├── Navbar.jsx          # Share va Dark/Light mode tugmalari
│   │   ├── ProfileHeader.jsx   # Avatar, ism, taxallus va bio bloki
│   │   └── Toast.jsx           # "Nusxalandi" bildirishnomasi
│   ├── config.js           # ⚙️ BARCHA MA'LUMOTLAR SHU YERDA SAQLANADI
│   ├── App.jsx             # Asosiy sahifa
│   ├── index.css           # Tailwind va shishasimon (glass) stillari
│   └── main.jsx            # React kirish nuqtasi
├── index.html              # Asosiy HTML hujjati
├── tailwind.config.js      # Tailwind konfiguratsiyasi
├── vite.config.js          # Vite konfiguratsiyasi
└── package.json
```

---

## ⚙️ Ma'lumotlarni O'zgartirish (`src/config.js`)

Loyiha kodi bilan ishlashingiz shart emas! Istalgan vaqtda havolalarni qo'shish, ism yoki rasmni o'zgartirish uchun faqat bitta faylni tahrirlaysiz: **`src/config.js`**.

Ushbu fayl ichida:
- **`profile`**: Ism, taxallus (`username`), bio, rasm havolasi va tasdiqlanganlik nishoni (`verified`).
- **`links`**: Asosiy katta havolalar. Har bir havola uchun sarlavha, qisqa tavsif, havola manzili, ikonka nomi va `highlight: true/false` (alohida ajratib ko'rsatish).
- **`socials`**: Sahifa pastidagi kichik ijtimoiy tarmoq tugmalari (Telegram, Instagram, YouTube, Telefon va boshqalar).

---

## 💻 Mahalliy Serverda Ishga Tushirish

1. **Paketlarni o'rnatish:**
   ```bash
   npm install
   ```

2. **Dasturchi rejimini ishga tushirish (Dev server):**
   ```bash
   npm run dev
   ```
   Terminalda paydo bo'lgan havola (odatda `http://localhost:5173`) orqali brauzerda oching.

3. **Ishlab chiqarish (Production) uchun yig'ish:**
   ```bash
   npm run build
   ```

---

## 🌐 Deploy Qilish Bo'yicha Qo'llanma

### 1-Usul: Vercel orqali deploy qilish (Tavsiya etiladi - Eng tez va oson)

1. Loyihangizni [GitHub](https://github.com) hisobingizga yuklang (push qiling).
2. [Vercel.com](https://vercel.com) saytiga kiring va GitHub profilingiz orqali ro'yxatdan o'ting.
3. **"Add New..."** -> **"Project"** tugmasini bosing.
4. O'zingizning havolalar loyihangizni tanlang.
5. Sozlamalarni o'zgartirish shart emas (Vite avtomatik aniqlanadi).
6. **"Deploy"** tugmasini bosing. 1 daqiqa ichida sizga bepul `https://sizning-nomingiz.vercel.app` domeni beriladi.

---

### 2-Usul: GitHub Pages orqali deploy qilish

`vite.config.js` faylida `base: './'` sozlangan, shuning uchun GitHub Pages'da to'g'ridan-to'g'ri ishlaydi:

1. **`gh-pages` paketini o'rnating:**
   ```bash
   npm install -D gh-pages
   ```

2. **`package.json` faylidagi `"scripts"` bo'limiga quyidagilarni qo'shing:**
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Deploy buyrug'ini bering:**
   ```bash
   npm run deploy
   ```

4. GitHub omboringiz (repository) sozlamalariga kiring: **Settings -> Pages**. `Source` qismida `Deploy from a branch` va branch sifatida `gh-pages` tanlanganini tekshiring. Bir necha daqiqada sahifangiz jonli efirga chiqadi!

---

## ✨ Muallif

- **Muallif:** Salohiddin Ollayorov ([@qirqming](https://t.me/qirqming))
- **Bog'lanish:** [@tizimbek_](https://t.me/tizimbek_) | +998 88 890 00 58
