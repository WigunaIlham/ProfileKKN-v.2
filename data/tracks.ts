/**
 * Musik untuk floating MusicPlayer.
 *
 * Cara menambah lagu:
 * 1. Letakkan file MP3 di folder `public/audio/`
 * 2. Tambahkan entry di array `tracks` di bawah dengan path-nya
 *
 * Contoh:
 *   {
 *     id: "1",
 *     title: "Pagi di Desa Jamali",
 *     artist: "Nature Ambience",
 *     src: "/audio/pagi-desa.mp3"
 *   }
 *
 * Format yang didukung: MP3, OGG, WAV — yang umum di-support browser modern.
 * Disarankan MP3 karena ukuran kecil dan didukung universal.
 */

export interface Track {
  id: string;
  title: string;
  artist?: string;
  src: string;
}

export const tracks: Track[] = [
  // Tambah file MP3 di public/audio/ lalu uncomment & isi di sini:
  // {id: "1", title: "Sunrise Jamali", artist: "Ambient", src: "/audio/sunrise.mp3"},
  // {id: "2", title: "Senja Cianjur", artist: "Ambient", src: "/audio/senja.mp3"},
];
