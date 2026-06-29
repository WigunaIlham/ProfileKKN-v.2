"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {Instagram, ExternalLink, Heart} from "lucide-react";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {SITE_CONFIG} from "@/constants";
import {staggerContainer, fadeUp} from "@/lib/motion";
import {instagramPosts} from "@/data/instagram";

export function InstagramSection() {
  return (
    <section
      id="instagram"
      className="section-padding"
      style={{background: "var(--bg-secondary)"}}
      aria-label="Instagram Feed"
    >
      <div className="container-max">
        <SectionHeader
          tag="Instagram"
          title="Follow"
          titleHighlight="@kkn.jamalights206"
          subtitle="Ikuti perjalanan kami di Instagram untuk update terbaru seputar program dan kegiatan KKN."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10"
        >
          {instagramPosts.map((post) => {
            const href = post.url ?? SITE_CONFIG.instagram;
            return (
              <motion.div key={post.id} variants={fadeUp}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka post: ${post.alt}`}
                  className="group relative block aspect-square overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
                  style={{background: "var(--bg-card)"}}
                >
                  <Image
                    src={post.src}
                    alt={post.alt}
                    fill
                    sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized={post.src.startsWith("http")}
                  />

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3 text-center"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(28,51,32,0.20), rgba(28,51,32,0.80))",
                    }}
                  >
                    <Instagram className="w-6 h-6 text-white mb-1.5" />
                    {post.caption && (
                      <p className="text-[11px] font-medium text-white leading-snug line-clamp-2 mb-1.5">
                        {post.caption}
                      </p>
                    )}
                    {typeof post.likes === "number" && (
                      <p className="text-[10px] font-semibold text-white/90 flex items-center gap-1">
                        <Heart className="w-2.5 h-2.5 fill-current" />
                        {post.likes}
                      </p>
                    )}
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center">
          <Link
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <Instagram className="w-4 h-4" />
            Lihat di Instagram
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
