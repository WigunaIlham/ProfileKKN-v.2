"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/src/logo.png";
import {ChevronDown, Instagram, MapPin, Compass} from "lucide-react";
import {SITE_CONFIG} from "@/constants";
import {fadeUp, staggerContainer} from "@/lib/motion";
import {scrollToSection} from "@/lib/utils";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-32 sm:pb-36"
      aria-label="Beranda"
    >
      {/* Background: subtle dual-tone */}
      <div
        className="dark:hidden absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, #F9F6F0 0%, #F5F0E8 40%, #EDE6D6 100%)",
        }}
      />
      <div
        className="hidden dark:block absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, #162018 0%, #0F1A10 60%, #0a120c 100%)",
        }}
      />

      {/* One subtle decorative blob */}
      <motion.div
        aria-hidden="true"
        animate={{y: [0, -20, 0], opacity: [0.35, 0.45, 0.35]}}
        transition={{duration: 12, repeat: Infinity, ease: "easeInOut"}}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(74,124,89,0.18), transparent 70%)",
        }}
      />

      {/* Main content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto"
      >
        {/* Eyebrow location */}
        <motion.div variants={fadeUp}>
          <span className="eyebrow mb-8 inline-flex">
            <MapPin className="w-3 h-3" aria-hidden="true" />
            Desa Jamali · Cianjur
          </span>
        </motion.div>

        {/* Logo — gentle float */}
        <motion.div variants={fadeUp} className="flex justify-center mb-10">
          <motion.div
            animate={{y: [0, -8, 0]}}
            transition={{duration: 6, repeat: Infinity, ease: "easeInOut"}}
            className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-1 ring-[var(--border)] shadow-[0_8px_32px_rgba(45,74,45,0.15)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
          >
            <Image
              src={logoImage}
              alt="Logo KKN Desa Jamali"
              fill
              priority
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="font-heading font-bold leading-[1.02] tracking-tight mb-6 text-[var(--text-primary)]"
          style={{fontSize: "clamp(2.75rem, 8vw, 5.25rem)"}}
        >
          KKN <span className="gradient-text-earthy">Jama</span>
          <span className="gradient-text-gold">Lights</span>{" "}
          <span style={{color: "var(--primary)"}}>206</span>
        </motion.h1>

        {/* Motto */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg font-medium tracking-tight mb-4 text-[var(--text-secondary)]"
        >
          {SITE_CONFIG.motto.join(" · ")}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-sm sm:text-base max-w-xl mx-auto mb-12 leading-relaxed text-[var(--text-muted)]"
        >
          {SITE_CONFIG.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={() => scrollToSection("#about")}
            className="btn-primary"
          >
            <Compass className="w-4 h-4" />
            Jelajahi
          </button>
          <Link
            href={SITE_CONFIG.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </Link>
        </motion.div>

        {/* Footnote */}
        <motion.p
          variants={fadeUp}
          className="mt-14 text-[10.5px] font-medium tracking-[0.18em] uppercase text-[var(--text-muted)]"
        >
          UIN Sunan Gunung Djati Bandung · {SITE_CONFIG.year}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => scrollToSection("#about")}
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 1.6, duration: 0.6}}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors duration-200"
        aria-label="Scroll ke section selanjutnya"
      >
        <span className="text-[10px] tracking-[0.18em] uppercase font-medium">
          Scroll
        </span>
        <ChevronDown
          className="w-4 h-4 animate-bounce"
          aria-hidden="true"
        />
      </motion.button>
    </section>
  );
}
