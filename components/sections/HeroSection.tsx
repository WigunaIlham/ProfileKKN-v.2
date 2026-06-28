"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/src/logo.png";
import {ChevronDown, Instagram, MapPin, Compass} from "lucide-react";
import {SITE_CONFIG} from "@/constants";
import {fadeUp, staggerContainer} from "@/lib/motion";

export function HeroSection() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({behavior: "smooth"});

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Beranda"
    >
      {/* Background gradient — earthy */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, #F9F6F0 0%, #EDE6D6 35%, #deeede 70%, #c8e0c8 100%)",
        }}
      />
      <div
        className="dark:hidden absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg,#F9F6F0 0%,#EDE6D6 35%,#deeede 70%,#c8e0c8 100%)",
        }}
      />
      <div
        className="hidden dark:block absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg,#0F1A10 0%,#1C2E1E 40%,#162018 100%)",
        }}
      />

      {/* Floating decoration shapes */}
      <div
        aria-hidden="true"
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {/* Large blobs */}
        <motion.div
          animate={{y: [0, -25, 0], rotate: [0, 4, 0]}}
          transition={{duration: 9, repeat: Infinity, ease: "easeInOut"}}
          className="absolute top-16 right-[8%] w-72 h-72 rounded-full blur-3xl opacity-30"
          style={{background: "radial-gradient(circle, #4A7C59, transparent)"}}
        />
        <motion.div
          animate={{y: [0, 18, 0], rotate: [0, -3, 0]}}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute bottom-24 left-[6%] w-80 h-80 rounded-full blur-3xl opacity-20"
          style={{background: "radial-gradient(circle, #C4932A, transparent)"}}
        />
        <motion.div
          animate={{y: [0, -12, 0]}}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute top-1/3 left-[15%] w-40 h-40 rounded-full blur-2xl opacity-25"
          style={{background: "radial-gradient(circle, #4A7C59, transparent)"}}
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right,#2D4A2D 1px,transparent 1px),linear-gradient(to bottom,#2D4A2D 1px,transparent 1px)",
            backgroundSize: "52px 52px",
          }}
        />

        {/* Decorative leaf-ish SVG top right */}
        <motion.svg
          animate={{rotate: [0, 8, 0], y: [0, -10, 0]}}
          transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}
          className="absolute top-24 right-[18%] w-24 h-24 opacity-10"
          viewBox="0 0 100 100"
          fill="none"
        >
          <path
            d="M50 5 C70 5 95 30 95 55 C95 80 70 95 50 95 C30 95 5 80 5 55 C5 30 30 5 50 5Z"
            fill="#4A7C59"
          />
          <line
            x1="50"
            y1="95"
            x2="50"
            y2="5"
            stroke="#2D4A2D"
            strokeWidth="2"
          />
          <line
            x1="50"
            y1="50"
            x2="20"
            y2="30"
            stroke="#2D4A2D"
            strokeWidth="1.5"
          />
          <line
            x1="50"
            y1="60"
            x2="78"
            y2="42"
            stroke="#2D4A2D"
            strokeWidth="1.5"
          />
        </motion.svg>
      </div>

      {/* Main content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto"
      >
        {/* Location badge */}
        <motion.div variants={fadeUp}>
          <span className="badge-earthy mb-6 inline-flex">
            <MapPin className="w-3 h-3" />
            Desa Jamali · Kec. Mande · Kab. Cianjur
          </span>
        </motion.div>

        {/* Logo */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <div className="relative">
            <div
              className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary-500/30 shadow-2xl"
              style={{
                boxShadow: "0 20px 60px rgba(45,74,45,0.35)",
              }}
            >
              {/* Logo asli */}
              <Image
                src={logoImage}
                alt="Logo KKN Desa Jamali"
                fill
                priority
                className="object-contain z-10"
              />
            </div>

            {/* Glow ring (tetap) */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-full"
              style={{
                border: "2px solid #efc95a",
              }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="font-heading font-black leading-[1.05] tracking-tight mb-4"
          style={{
            fontSize: "clamp(2.8rem, 8vw, 5.5rem)",
            color: "var(--text-primary)",
          }}
        >
          KKN <span className="gradient-text-earthy">Jama</span>
          <span className="gradient-text-gold">Lights</span>
          <br />
          <span
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--text-secondary)",
            }}
          >
            206
          </span>
        </motion.h1>

        {/* Motto */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-3 mb-4"
        >
          {SITE_CONFIG.motto.map((m, i) => (
            <span key={m} className="flex items-center gap-3">
              <span
                className="font-heading font-semibold text-base sm:text-lg"
                style={{color: "var(--primary)"}}
              >
                {m}
              </span>
              {i < SITE_CONFIG.motto.length - 1 && (
                <span
                  className="w-1 h-1 rounded-full"
                  style={{background: "#C4932A"}}
                />
              )}
            </span>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="text-sm sm:text-base max-w-xl mx-auto mb-10 leading-relaxed"
          style={{color: "var(--text-muted)"}}
        >
          {SITE_CONFIG.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <button onClick={() => scrollTo("#about")} className="btn-primary">
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
            Follow Instagram
          </Link>
        </motion.div>

        {/* Motto strip */}
        <motion.div
          variants={fadeUp}
          className="mt-12 flex items-center justify-center gap-2 text-xs font-medium tracking-widest uppercase"
          style={{color: "var(--text-muted)"}}
        >
          <div
            className="h-px w-12"
            style={{background: "var(--primary)", opacity: 0.4}}
          />
          UIN Sunan Gunung Djati Bandung · 2026
          <div
            className="h-px w-12"
            style={{background: "var(--primary)", opacity: 0.4}}
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 2, duration: 0.6}}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        aria-hidden="true"
      >
        <span
          className="text-[10px] tracking-widest uppercase font-medium"
          style={{color: "var(--text-muted)"}}
        >
          Scroll
        </span>
        <div
          className="w-5 h-8 rounded-full border-2 flex justify-center pt-1.5"
          style={{borderColor: "rgba(74,124,89,0.4)"}}
        >
          <motion.div
            animate={{y: [0, 8, 0], opacity: [1, 0, 1]}}
            transition={{duration: 1.6, repeat: Infinity, ease: "easeInOut"}}
            className="w-1 h-1.5 rounded-full"
            style={{background: "var(--primary)"}}
          />
        </div>
        <ChevronDown
          className="w-4 h-4 animate-bounce"
          style={{color: "var(--primary)"}}
        />
      </motion.div>
    </section>
  );
}
