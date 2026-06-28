import type {GalleryItem} from "@/types";

/**
 * CARA MENGISI GALLERY:
 *
 * 1. Upload semua foto ke satu folder Google Drive
 * 2. Share folder: Klik kanan folder → Share → "Anyone with the link" → Done
 * 3. Untuk setiap foto, klik kanan → Share → Copy link
 * 4. Ambil FILE_ID dari URL dan isi di driveId
 *
 * Tips:
 * - Foto landscape (lebar) → aspect: "landscape"
 * - Foto portrait (tinggi, biasa foto orang) → aspect: "portrait"
 * - Foto kotak → aspect: "square"
 * - Variasikan aspect supaya masonry grid terlihat dinamis
 */
export const galleryItems: GalleryItem[] = [
  // ── ACTIVITIES ─────────────────────────────────────────────────────────────
  {
    id: "act-1",
    driveId: "", // ← Ganti dengan File ID Google Drive
    alt: "Kegiatan pembukaan KKN JamaLights 206",
    category: "activities",
    aspect: "landscape",
    caption: "Pembukaan KKN JamaLights 206",
  },
  {
    id: "act-2",
    driveId: "",
    alt: "Program literasi digital untuk warga desa",
    category: "activities",
    aspect: "portrait",
    caption: "Literasi Digital Desa",
  },
  {
    id: "act-3",
    driveId: "",
    alt: "Bimbingan belajar untuk siswa desa",
    category: "activities",
    aspect: "square",
    caption: "Bimbingan Belajar Gratis",
  },
  {
    id: "act-4",
    driveId: "",
    alt: "Program posyandu remaja",
    category: "activities",
    aspect: "landscape",
    caption: "Posyandu Remaja",
  },
  {
    id: "act-5",
    driveId: "",
    alt: "Pendampingan UMKM go digital",
    category: "activities",
    aspect: "portrait",
    caption: "UMKM Go Digital",
  },
  // ── TEAM ───────────────────────────────────────────────────────────────────
  {
    id: "team-1",
    driveId: "",
    alt: "Foto bersama tim KKN JamaLights 206",
    category: "team",
    aspect: "landscape",
    caption: "Tim KKN JamaLights 206",
  },
  {
    id: "team-2",
    driveId: "",
    alt: "Rapat koordinasi tim",
    category: "team",
    aspect: "square",
    caption: "Rapat Koordinasi",
  },
  {
    id: "team-3",
    driveId: "",
    alt: "Tim saat survei lokasi",
    category: "team",
    aspect: "landscape",
    caption: "Survei Lokasi Desa",
  },
  // ── VILLAGE ────────────────────────────────────────────────────────────────
  {
    id: "village-1",
    driveId: "",
    alt: "Pemandangan alam desa",
    category: "village",
    aspect: "landscape",
    caption: "Panorama Desa",
  },
  {
    id: "village-2",
    driveId: "",
    alt: "Lahan pertanian desa",
    category: "village",
    aspect: "portrait",
    caption: "Pertanian Desa",
  },
  {
    id: "village-3",
    driveId: "",
    alt: "Suasana desa dan warga",
    category: "village",
    aspect: "square",
    caption: "Kebersamaan dengan Warga",
  },
  {
    id: "village-4",
    driveId: "",
    alt: "Potensi wisata desa",
    category: "village",
    aspect: "landscape",
    caption: "Wisata Desa",
  },
  // ── BEHIND THE SCENE ────────────────────────────────────────────────────────
  {
    id: "bts-1",
    driveId: "",
    alt: "Persiapan program kerja",
    category: "behind-the-scene",
    aspect: "square",
    caption: "Persiapan Program",
  },
  {
    id: "bts-2",
    driveId: "",
    alt: "Momen santai bersama tim",
    category: "behind-the-scene",
    aspect: "portrait",
    caption: "Momen Kebersamaan",
  },
  {
    id: "bts-3",
    driveId: "",
    alt: "Di balik layar kegiatan KKN",
    category: "behind-the-scene",
    aspect: "landscape",
    caption: "Behind The Scene",
  },
];

/**
 * Helper: filter gallery berdasarkan category
 */
export function filterGallery(
  items: GalleryItem[],
  category: string,
): GalleryItem[] {
  if (category === "all") return items;
  return items.filter((item) => item.category === category);
}

/**
 * Helper: ambil hanya item yang sudah punya driveId
 * Berguna untuk debug — cek berapa foto yang sudah terisi
 */
export function getFilledGallery(items: GalleryItem[]): GalleryItem[] {
  return items.filter((item) => item.driveId.trim() !== "");
}
