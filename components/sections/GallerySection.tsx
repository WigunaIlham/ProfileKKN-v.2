"use client";

import {useState, useMemo} from "react";
import {motion, AnimatePresence} from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {DriveImage} from "@/components/ui/DriveImage";
import {galleryItems, filterGallery} from "@/data/gallery";
import {buildDriveUrl} from "@/lib/drive";
import {staggerContainer, fadeUp} from "@/lib/motion";
import type {GalleryItem} from "@/types";

const CATEGORIES = [
  {key: "all", label: "Semua"},
  {key: "activities", label: "Kegiatan"},
  {key: "team", label: "Tim"},
  {key: "village", label: "Desa"},
  {key: "behind-the-scene", label: "Behind The Scene"},
] as const;

/** Tinggi container berdasarkan aspect ratio foto */
const aspectClass: Record<GalleryItem["aspect"], string> = {
  landscape: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
  square: "aspect-square",
};

function GalleryCard({
  item,
  index,
  onClick,
}: {
  item: GalleryItem;
  index: number;
  onClick: (i: number) => void;
}) {
  return (
    <motion.div
      layout
      variants={fadeUp}
      className={[
        "group relative overflow-hidden rounded-2xl cursor-pointer",
        "bg-slate-200 dark:bg-slate-800",
        aspectClass[item.aspect],
      ].join(" ")}
      onClick={() => onClick(index)}
      role="button"
      tabIndex={0}
      aria-label={`Buka foto: ${item.alt}`}
      onKeyDown={(e) => e.key === "Enter" && onClick(index)}
    >
      <DriveImage
        driveId={item.driveId}
        alt={item.alt}
        fallbackName={item.caption ?? item.alt}
        containerClassName="w-full h-full"
        className="group-hover:scale-105 transition-transform duration-500"
        size={800}
        avatarTextClassName="text-base"
        skeletonRounded=""
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
        {item.caption && (
          <p className="text-white text-xs font-medium leading-snug line-clamp-2">
            {item.caption}
          </p>
        )}
      </div>

      {/* Zoom icon */}
      <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <svg
          className="w-3.5 h-3.5 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
          />
        </svg>
      </div>
    </motion.div>
  );
}

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const filtered = useMemo(
    () => filterGallery(galleryItems, activeCategory),
    [activeCategory],
  );

  // Build lightbox slides — pakai resolusi lebih besar untuk lightbox
  const slides = useMemo(
    () =>
      filtered.map((item) => ({
        src: item.driveId
          ? buildDriveUrl(item.driveId, 1600)
          : `https://picsum.photos/seed/${item.id}/1200/800`,
        alt: item.alt,
        description: item.caption,
      })),
    [filtered],
  );

  return (
    <section
      id="gallery"
      className="section-padding bg-slate-50/50 dark:bg-slate-900/50"
      aria-label="Galeri"
    >
      <div className="container-max">
        <SectionHeader
          tag="Galeri"
          title="Momen"
          titleHighlight="Berharga"
          subtitle="Dokumentasi perjalanan KKN JamaLights 206 yang penuh kenangan dan inspirasi."
        />

        {/* Filter tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-10"
          role="tablist"
          aria-label="Filter galeri"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={activeCategory === cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={[
                "px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200",
                activeCategory === cat.key
                  ? "bg-primary-600 text-white shadow-md shadow-primary-500/20"
                  : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-700",
              ].join(" ")}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry-style grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            exit={{opacity: 0}}
            className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4"
          >
            {filtered.length === 0 ? (
              <motion.div
                variants={fadeUp}
                className="col-span-full text-center py-16 text-slate-400 dark:text-slate-600"
              >
                <p className="text-sm">Belum ada foto di kategori ini.</p>
                <p className="text-xs mt-1">
                  Tambahkan driveId di data/gallery.ts
                </p>
              </motion.div>
            ) : (
              filtered.map((item, index) => (
                <div key={item.id} className="break-inside-avoid mb-3 sm:mb-4">
                  <GalleryCard
                    item={item}
                    index={index}
                    onClick={setLightboxIndex}
                  />
                </div>
              ))
            )}
          </motion.div>
        </AnimatePresence>

        {/* Empty state kalau semua driveId kosong */}
        {galleryItems.every((g) => !g.driveId) && (
          <div className="mt-6 p-4 rounded-xl border border-dashed border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/10 text-center">
            <p className="text-sm text-amber-700 dark:text-amber-400 font-medium">
              Gallery belum terisi — isi driveId di{" "}
              <code className="font-mono text-xs bg-amber-100 dark:bg-amber-900/30 px-1 rounded">
                data/gallery.ts
              </code>
            </p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        close={() => setLightboxIndex(-1)}
        slides={slides}
        plugins={[Captions]}
        captions={{showToggle: true, descriptionTextAlign: "center"}}
        styles={{
          container: {backgroundColor: "rgba(0,0,0,0.95)"},
        }}
      />
    </section>
  );
}
