/**
 * Instagram posts manual feed.
 *
 * Cara ganti placeholder dengan foto Instagram beneran:
 * 1. Download foto dari Instagram (tahan klik foto → Save Image / screenshot tanpa story)
 * 2. Simpan ke folder `public/images/instagram/` (buat folder kalau belum ada)
 * 3. Edit array di bawah:
 *    - ganti `src` ke path lokal: `/images/instagram/nama-file.jpg`
 *    - update `alt` jadi deskriptif (penting untuk a11y + SEO)
 *    - isi `url` dengan link post Instagram beneran (klik 3-titik di IG post → Copy Link)
 *    - update `caption` & `likes` agar match dengan post asli
 *
 * Saran ukuran foto: 600×600px minimal, format JPG/WebP, < 200KB per foto.
 *
 * Placeholder saat ini pakai picsum.photos dengan seed konsisten — kalau internet
 * mati gambar tidak muncul. Untuk production, sebaiknya pindah ke local path.
 */

export interface InstagramPost {
  id: string;
  /** Path lokal (e.g. `/images/instagram/foto1.jpg`) atau URL eksternal. */
  src: string;
  /** Alt text untuk a11y — deskripsi singkat isi foto. */
  alt: string;
  /** Link ke post Instagram asli (opsional). Kalau kosong, klik mengarah ke profil. */
  url?: string;
  /** Caption singkat post, muncul di hover overlay (opsional, max ~80 char). */
  caption?: string;
  /** Jumlah likes (opsional). */
  likes?: number;
}

export const instagramPosts: InstagramPost[] = [
  {
    id: "1",
    src: "https://picsum.photos/seed/kkn-jamali-01/600/600",
    alt: "Pembukaan KKN JamaLights 206 di Balai Desa Jamali",
    url: "https://www.instagram.com/kkn.jamalights206",
    caption: "Pembukaan KKN — kami siap mengabdi! 🌱",
    likes: 142,
  },
  {
    id: "2",
    src: "https://picsum.photos/seed/kkn-jamali-02/600/600",
    alt: "Sesi bimbingan belajar untuk anak SD Desa Jamali",
    url: "https://www.instagram.com/kkn.jamalights206",
    caption: "Bimbel bareng adek-adek SD setiap sore",
    likes: 98,
  },
  {
    id: "3",
    src: "https://picsum.photos/seed/kkn-jamali-03/600/600",
    alt: "Penanaman pohon bersama warga Desa Jamali",
    url: "https://www.instagram.com/kkn.jamalights206",
    caption: "Penghijauan — 100 bibit pohon tertanam hari ini",
    likes: 187,
  },
  {
    id: "4",
    src: "https://picsum.photos/seed/kkn-jamali-04/600/600",
    alt: "Workshop UMKM digital untuk ibu-ibu PKK",
    url: "https://www.instagram.com/kkn.jamalights206",
    caption: "Workshop UMKM go digital bareng ibu-ibu PKK",
    likes: 115,
  },
  {
    id: "5",
    src: "https://picsum.photos/seed/kkn-jamali-05/600/600",
    alt: "Posyandu remaja kolaborasi dengan Puskesmas Mande",
    url: "https://www.instagram.com/kkn.jamalights206",
    caption: "Posyandu Remaja — cek kesehatan rutin tiap bulan",
    likes: 76,
  },
  {
    id: "6",
    src: "https://picsum.photos/seed/kkn-jamali-06/600/600",
    alt: "Senja di sawah Desa Jamali",
    url: "https://www.instagram.com/kkn.jamalights206",
    caption: "Sunset Desa Jamali — selalu spektakuler ✨",
    likes: 234,
  },
];
