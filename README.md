# JamaLights 206 — KKN Official Landing Page

Website resmi KKN Kelompok 206 UIN Sunan Gunung Djati Bandung.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Lightbox**: Yet Another React Lightbox
- **Carousel**: Embla Carousel
- **Theme**: next-themes
- **Package Manager**: pnpm
- **Deployment**: Vercel

## Installation

```bash
# Clone repo
git clone https://github.com/username/jamalights-206.git
cd jamalights-206

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Buka http://localhost:3000

## Folder Structure

```
├── app/                  # Next.js App Router
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Main page (assembles all sections)
│   ├── loading.tsx       # Loading UI
│   ├── error.tsx         # Error UI
│   ├── not-found.tsx     # 404 page
│   ├── robots.ts         # SEO robots
│   └── sitemap.ts        # SEO sitemap
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── sections/         # All 16 page sections
│   ├── providers/        # ThemeProvider
│   └── ui/               # Reusable UI atoms
├── constants/            # Site config, nav links
├── data/                 # All static data (team, programs, etc.)
├── lib/                  # Utilities, motion variants
├── public/               # Static assets
│   ├── images/           # Placeholder images
│   └── icons/            # PWA icons
└── types/                # TypeScript interfaces
```

## How to Replace Images

1. **Team photos**: Ganti `photo` di `data/team.ts` dengan path ke file di `/public/images/team/`
2. **Gallery**: Ganti array `src` di `data/gallery.ts` dengan URL gambar asli
3. **Logo**: Cari komponen logo (teks `JL`) di `Navbar.tsx`, `HeroSection.tsx`, dan `SplashScreen.tsx`

## How to Edit Team Members

Edit file `data/team.ts`:

```ts
{
  id: "1",
  name: "Nama Lengkap",         // Nama anggota
  studyProgram: "Teknik Informatika",
  role: "Ketua",                // Ketua / Sekretaris / Bendahara / PDD / Acara / Logistik / Humas
  isChairperson: true,          // true hanya untuk Ketua
  photo: "/images/team/nama.jpg",
  instagram: "https://instagram.com/username",
}
```

## How to Edit Programs

Edit file `data/programs.ts`:

```ts
{
  id: "1",
  name: "Nama Program",
  description: "Deskripsi singkat program",
  status: "completed",   // planned | ongoing | completed
  target: "Target sasaran",
  division: "Nama Divisi",
  icon: "Monitor",       // Icon dari Lucide React
}
```

## How to Deploy to Vercel

1. Push ke GitHub
2. Buka vercel.com → New Project → Import repo
3. Set framework: Next.js
4. Deploy!

Atau via CLI:

```bash
pnpm install -g vercel
vercel
```

## How to Customize Colors

Edit `tailwind.config.ts` bagian `theme.extend.colors`:

```ts
primary: {
  DEFAULT: "#2563EB",   // Ganti dengan warna utama
  600: "#2563EB",
  ...
}
```

## How to Add New Sections

1. Buat file baru di `components/sections/NamaSection.tsx`
2. Tambahkan data di `data/` jika diperlukan
3. Import dan render di `app/page.tsx`
4. Tambahkan ke NAV_LINKS di `constants/index.ts` jika perlu
