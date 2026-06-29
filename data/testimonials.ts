import type {Testimonial} from "@/types";

/**
 * Testimoni untuk section "Kata Mereka".
 *
 * Tips untuk testimoni yang impactful:
 * - **Spesifik**: sebutkan program/detail nyata, bukan generic ("anaknya jadi rajin baca" > "programnya bagus")
 * - **Konteks**: isi `location` & `date` agar terasa otentik (lokasi + waktu = real)
 * - **Variasi sumber**: kepala desa, DPL, warga, anak-anak — variasi perspective
 * - **Foto asli** via `driveId` Google Drive — fallback avatar otomatis pakai initial nama
 */

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Bapak H. Suparman",
    role: "Kepala Desa Jamali",
    content:
      "Kehadiran KKN JamaLights 206 memberikan semangat baru bagi desa kami. Program literasi digital dan pelatihan UMKM-nya sangat tepat sasaran — pelaku UMKM desa sekarang sudah mulai berani jualan online.",
    avatar: "/images/testimonials/placeholder.jpg",
    location: "Desa Jamali, Kec. Mande",
    date: "Februari 2026",
  },
  {
    id: "2",
    name: "Dr. Hidayat M.Pd",
    role: "Dosen Pembimbing Lapangan",
    content:
      "Kelompok 206 menunjukkan kematangan dalam perencanaan dan implementasi. Adaptasi mereka dengan masyarakat sangat baik, dan dokumentasi setiap program rapi — bisa jadi referensi KKN tahun depan.",
    avatar: "/images/testimonials/placeholder.jpg",
    location: "UIN Sunan Gunung Djati Bandung",
    date: "Februari 2026",
  },
  {
    id: "3",
    name: "Ibu Aminah",
    role: "Kader Posyandu",
    content:
      "Posyandu Remaja yang dirintis bareng mahasiswa KKN jadi rutin tiap bulan. Anak-anak remaja desa yang dulu malu sekarang mau cek kesehatan. Saya berterima kasih sekali.",
    avatar: "/images/testimonials/placeholder.jpg",
    location: "Dusun Cikondang, RT 02",
    date: "Januari 2026",
  },
  {
    id: "4",
    name: "Rifki, Kelas 5 SD",
    role: "Murid Bimbel KKN",
    content:
      "Kakak-kakak KKN ngajarin matematika pakai cara yang seru. Sekarang aku tidak takut lagi sama soal cerita. Pulang sekolah pasti nungguin bimbel sore di balai desa.",
    avatar: "/images/testimonials/placeholder.jpg",
    location: "SDN Jamali 02",
    date: "Februari 2026",
  },
];
