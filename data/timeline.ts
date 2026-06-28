import type {TimelineEvent} from "@/types";

export const timelineEvents: TimelineEvent[] = [
  {
    id: "1",
    phase: "Persiapan",
    date: "Juni 2026",
    description:
      "Pembentukan kelompok, rapat koordinasi, dan penyusunan program kerja awal.",
    status: "done",
  },
  {
    id: "2",
    phase: "Survei Lokasi",
    date: "Juli 2026",
    description:
      "Kunjungan awal ke desa untuk identifikasi potensi dan permasalahan setempat.",
    status: "done",
  },
  {
    id: "3",
    phase: "Observasi",
    date: "Juli 2026",
    description:
      "Pengamatan mendalam terhadap kondisi sosial, ekonomi, dan budaya desa.",
    status: "done",
  },
  {
    id: "4",
    phase: "Pelaksanaan",
    date: "Juli - Agustus 2026",
    description:
      "Implementasi seluruh program kerja KKN bersama masyarakat desa.",
    status: "active",
  },
  {
    id: "5",
    phase: "Evaluasi",
    date: "Agustus 2026",
    description:
      "Evaluasi capaian program kerja bersama DPL dan perangkat desa.",
    status: "upcoming",
  },
  {
    id: "6",
    phase: "Penutupan",
    date: "Agustus 2026",
    description:
      "Serah terima hasil program, acara perpisahan, dan penyusunan laporan akhir.",
    status: "upcoming",
  },
];
