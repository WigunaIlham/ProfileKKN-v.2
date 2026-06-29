export interface TeamMember {
  id: string;
  name: string;
  studyProgram: string;
  role: string;
  /** Ketua keseluruhan KKN — hanya 1 orang. */
  isChairperson?: boolean;
  /** Ketua divisi (PDD/Acara/HumLog) — hanya 1 orang per divisi. */
  isLead?: boolean;
  /** Google Drive File ID. Kosongkan ("") jika belum ada foto → fallback avatar. */
  driveId?: string;
  /** @deprecated Gunakan driveId. Field ini masih dibaca sebagai fallback. */
  photo?: string;
  instagram?: string;
}

export interface WorkProgram {
  id: string;
  name: string;
  description: string;
  status: "planned" | "ongoing" | "completed";
  target: string;
  division: string;
  icon: string;
  /** Penjelasan panjang yang ditampilkan saat card di-klik (modal detail). */
  details?: string;
  /** Daftar aktivitas/kegiatan dalam program — bullet list di modal. */
  activities?: string[];
  /** Jadwal pelaksanaan (opsional, tampil di modal). */
  schedule?: string;
  /** Lokasi spesifik (opsional, tampil di modal). */
  location?: string;
}

export interface GalleryItem {
  id: string;
  /** Google Drive File ID foto */
  driveId: string;
  alt: string;
  category: "activities" | "team" | "village" | "behind-the-scene";
  /** Aspect ratio hint untuk layout masonry: "landscape" | "portrait" | "square" */
  aspect: "landscape" | "portrait" | "square";
  /** Caption opsional untuk lightbox */
  caption?: string;
}

export interface TimelineEvent {
  id: string;
  phase: string;
  date: string;
  description: string;
  status: "done" | "active" | "upcoming";
}

export interface Division {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface VillagePotential {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  /** Penjelasan panjang untuk modal detail (klik card). */
  details?: string;
  /** Daftar highlight/keunggulan — bullet list di modal. */
  highlights?: string[];
  /** Lokasi spesifik di desa (opsional, tampil di modal). */
  location?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  /** Google Drive File ID foto testimoni (opsional) */
  driveId?: string;
  /** Lokasi/asal testimoni (opsional, e.g. "Dusun Cikondang, RT 02") */
  location?: string;
  /** Tanggal testimoni (opsional, e.g. "Februari 2026") */
  date?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface StatItem {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}
