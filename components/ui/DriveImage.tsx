"use client";

import {useState, useCallback} from "react";
import Image from "next/image";
import {buildDriveUrl, isValidDriveId} from "@/lib/drive";
import {AvatarFallback} from "@/components/ui/AvatarFallback";
import {ImageSkeleton} from "@/components/ui/ImageSkeleton";
import {cn} from "@/lib/utils";
import type {DriveImageSize} from "@/lib/drive";

interface DriveImageProps {
  /**
   * Google Drive File ID atau full Drive URL.
   * Kalau kosong / undefined → langsung render fallback avatar.
   */
  driveId?: string;
  alt: string;
  /**
   * Fallback: nama untuk generate avatar otomatis.
   * Wajib diisi supaya fallback tetap informatif.
   */
  fallbackName: string;
  className?: string;
  containerClassName?: string;
  size?: DriveImageSize;
  fill?: boolean;
  width?: number;
  height?: number;
  priority?: boolean;
  avatarTextClassName?: string;
  skeletonRounded?: string;
  /** Dijalankan saat gambar berhasil load */
  onLoad?: () => void;
}

type ImageState = "loading" | "loaded" | "error";

export function DriveImage({
  driveId,
  alt,
  fallbackName,
  className,
  containerClassName,
  size = 800,
  fill = true,
  width,
  height,
  priority = false,
  avatarTextClassName,
  skeletonRounded,
  onLoad,
}: DriveImageProps) {
  const [state, setState] = useState<ImageState>(driveId ? "loading" : "error");

  // Build URL dari driveId — validasi dulu biar tidak kirim request invalid
  const hasValidDrive =
    driveId &&
    (isValidDriveId(driveId) || driveId.includes("drive.google.com"));
  const src = hasValidDrive ? buildDriveUrl(driveId, size) : "";

  const handleLoad = useCallback(() => {
    setState("loaded");
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setState("error");
  }, []);

  // Kalau tidak ada driveId valid → langsung render avatar
  if (!hasValidDrive || !src) {
    return (
      <div className={cn("relative overflow-hidden", containerClassName)}>
        <AvatarFallback
          name={fallbackName}
          textClassName={avatarTextClassName}
        />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      {/* Skeleton saat loading */}
      {state === "loading" && (
        <ImageSkeleton
          className="absolute inset-0 w-full h-full z-10"
          rounded={skeletonRounded ?? ""}
        />
      )}

      {/* Fallback avatar kalau error */}
      {state === "error" && (
        <AvatarFallback
          name={fallbackName}
          textClassName={avatarTextClassName}
        />
      )}

      {/* Actual image — tetap di-render di DOM meski state error, 
          supaya browser bisa retry. Hidden via opacity. */}
      {state !== "error" && (
        <Image
          src={src}
          alt={alt}
          {...(fill
            ? {fill: true}
            : {width: width ?? 400, height: height ?? 400})}
          className={cn(
            "object-cover transition-opacity duration-500",
            state === "loaded" ? "opacity-100" : "opacity-0",
            className,
          )}
          onLoad={handleLoad}
          onError={handleError}
          priority={priority}
          unoptimized
          // unoptimized karena Google Drive URL tidak bisa di-proxy oleh next/image
          // tanpa konfigurasi tambahan. Ini approach paling reliable.
          sizes={
            fill
              ? "(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              : undefined
          }
        />
      )}
    </div>
  );
}
