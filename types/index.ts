export interface TeamMember {
  id: string;
  name: string;
  studyProgram: string;
  role: string;
  isChairperson?: boolean;
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
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  /** Google Drive File ID foto testimoni (opsional) */
  driveId?: string;
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
