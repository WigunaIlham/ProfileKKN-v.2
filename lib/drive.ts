/**
 * Google Drive Image Integration
 *
 * Cara kerja:
 * Google Drive punya dua format URL untuk preview gambar:
 * 1. thumbnail (cepat, ada size limit): https://drive.google.com/thumbnail?id=FILE_ID&sz=w800
 * 2. uc?export=view (original): https://drive.google.com/uc?export=view&id=FILE_ID
 *
 * Kita pakai thumbnail karena bisa set size & lebih reliable untuk next/image.
 */

export type DriveImageSize = 100 | 200 | 400 | 800 | 1200 | 1600;

/**
 * Convert Google Drive File ID ke thumbnail URL
 */
export function driveUrl(fileId: string, size: DriveImageSize = 800): string {
  if (!fileId || fileId === "") return "";
  return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${size}`;
}

/**
 * Extract File ID dari berbagai format Google Drive URL:
 * - https://drive.google.com/file/d/FILE_ID/view?usp=sharing
 * - https://drive.google.com/open?id=FILE_ID
 * - https://drive.google.com/uc?id=FILE_ID
 * - Raw FILE_ID langsung
 */
export function extractDriveId(input: string): string {
  if (!input) return "";

  // Sudah raw ID (tidak mengandung slash atau google.com)
  if (!input.includes("/") && !input.includes("google.com")) {
    return input.trim();
  }

  // Format: /file/d/FILE_ID/
  const fileMatch = input.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (fileMatch) return fileMatch[1];

  // Format: ?id=FILE_ID atau &id=FILE_ID
  const idMatch = input.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (idMatch) return idMatch[1];

  return "";
}

/**
 * Build URL dari input apapun (raw ID atau full Drive URL)
 */
export function buildDriveUrl(
  input: string,
  size: DriveImageSize = 800,
): string {
  if (!input) return "";
  const id = extractDriveId(input);
  if (!id) return "";
  return driveUrl(id, size);
}

/**
 * Cek apakah string adalah valid Google Drive file ID
 * Drive file IDs biasanya 28-44 karakter alphanumeric + underscore + dash
 */
export function isValidDriveId(id: string): boolean {
  return /^[a-zA-Z0-9_-]{15,60}$/.test(id.trim());
}

/**
 * Generate initials dari nama untuk fallback avatar
 */
export function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0].toUpperCase())
    .join("");
}

/**
 * Generate warna avatar konsisten berdasarkan nama
 * Setiap nama selalu dapat warna yang sama
 */
const AVATAR_GRADIENTS = [
  ["#2563EB", "#38BDF8"],
  ["#7C3AED", "#A78BFA"],
  ["#059669", "#34D399"],
  ["#DC2626", "#FB7185"],
  ["#D97706", "#FCD34D"],
  ["#0891B2", "#67E8F9"],
  ["#9333EA", "#C084FC"],
  ["#16A34A", "#86EFAC"],
] as const;

export function getAvatarGradient(name: string): [string, string] {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % AVATAR_GRADIENTS.length;
  return AVATAR_GRADIENTS[index] as [string, string];
}
