"use client";

import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import {Instagram, ExternalLink} from "lucide-react";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {SITE_CONFIG} from "@/constants";
import {staggerContainer, fadeUp} from "@/lib/motion";

// Tipe data untuk post
interface Post {
  id: string;
  src: string;
  alt: string;
  likes: number;
}

export function InstagramSection() {
  // 1. Definisikan state untuk menampung feed
  const [feed, setFeed] = useState<Post[]>([]);

  // 2. Generate data acak HANYA setelah komponen masuk ke client (mounted)
  useEffect(() => {
    const generatedFeed = Array.from({length: 6}, (_, i) => ({
      id: String(i + 1),
      src: `https://picsum.photos/seed/insta${i + 1}/400/400`,
      alt: `Postingan Instagram ${i + 1}`,
      likes: Math.floor(Math.random() * 200) + 50,
    }));
    setFeed(generatedFeed);
  }, []);

  return (
    <section
      id="instagram"
      className="section-padding bg-slate-50/50 dark:bg-slate-900/50"
      aria-label="Instagram Feed"
    >
      <div className="container-max">
        <SectionHeader
          tag="Instagram"
          title="Follow"
          titleHighlight="@jamalights206"
          subtitle="Ikuti perjalanan kami di Instagram untuk update terbaru seputar program dan kegiatan KKN."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8"
        >
          {/* 3. Render feed jika datanya sudah siap di client */}
          {feed.map((post) => (
            <motion.div
              key={post.id}
              variants={fadeUp}
              className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-200 dark:bg-slate-800"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-white">
                  <Instagram className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs font-medium">{post.likes} likes</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Link
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-pink-500/30"
          >
            <Instagram className="w-5 h-5" />
            Lihat di Instagram
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
