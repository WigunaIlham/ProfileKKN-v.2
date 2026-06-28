"use client";

import {useState, useEffect} from "react";
import {motion} from "framer-motion";
import Link from "next/link";
import {Instagram, ExternalLink} from "lucide-react";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {SITE_CONFIG} from "@/constants";
import {staggerContainer, fadeUp} from "@/lib/motion";

interface Post {
  id: string;
  src: string;
  alt: string;
  likes: number;
}

export function InstagramSection() {
  const [feed, setFeed] = useState<Post[]>([]);

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
      className="section-padding"
      style={{background: "var(--bg-secondary)"}}
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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10"
        >
          {feed.map((post) => (
            <motion.div
              key={post.id}
              variants={fadeUp}
              className="group relative aspect-square overflow-hidden rounded-2xl"
              style={{background: "var(--bg-card)"}}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.src}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(28,51,32,0.20), rgba(28,51,32,0.75))",
                }}
              >
                <div className="text-center text-white">
                  <Instagram className="w-6 h-6 mx-auto mb-1" />
                  <p className="text-xs font-semibold">{post.likes} likes</p>
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
