import type {WorkProgram} from "@/types";

export const workPrograms: WorkProgram[] = [
  {
    id: "1",
    name: "Literasi Digital Desa",
    description:
      "Pelatihan penggunaan teknologi dan internet sehat untuk warga desa.",
    status: "completed",
    target: "Warga Desa Usia 15-45 Tahun",
    division: "Pendidikan",
    icon: "Monitor",
  },
  {
    id: "2",
    name: "Posyandu Remaja",
    description:
      "Program kesehatan remaja desa berkolaborasi dengan Puskesmas setempat.",
    status: "completed",
    target: "Remaja Usia 10-18 Tahun",
    division: "Kesehatan",
    icon: "Heart",
  },
  {
    id: "3",
    name: "UMKM Go Digital",
    description:
      "Pendampingan pelaku UMKM desa dalam pemasaran produk secara online.",
    status: "ongoing",
    target: "20 Pelaku UMKM",
    division: "Ekonomi",
    icon: "ShoppingBag",
  },
  {
    id: "4",
    name: "Penghijauan Desa",
    description:
      "Penanaman pohon dan tanaman obat keluarga di lingkungan desa.",
    status: "ongoing",
    target: "500 Pohon",
    division: "Lingkungan",
    icon: "Leaf",
  },
  {
    id: "5",
    name: "Bimbingan Belajar",
    description: "Program bimbel gratis untuk siswa SD dan SMP di desa.",
    status: "completed",
    target: "50 Siswa",
    division: "Pendidikan",
    icon: "BookOpen",
  },
  {
    id: "6",
    name: "Festival Budaya Desa",
    description:
      "Penyelenggaraan festival seni dan budaya lokal sebagai upaya pelestarian.",
    status: "planned",
    target: "Seluruh Warga Desa",
    division: "Kebudayaan",
    icon: "Music",
  },
];
