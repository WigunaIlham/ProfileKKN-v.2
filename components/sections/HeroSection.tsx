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
  const isRemoteHero = SITE_CONFIG.heroImage.startsWith("http");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 pb-32 sm:pb-36"
      aria-label="Beranda"
    >
      {/* Photo background — deepest layer */}
      <div className="absolute inset-0 -z-30">
        <Image
          src={SITE_CONFIG.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
          unoptimized={isRemoteHero}
        />
      </div>

      {/* Dark overlay for text legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(180deg, rgba(20,16,10,0.55) 0%, rgba(20,16,10,0.70) 50%, rgba(20,16,10,0.88) 100%)",
        }}
      />

      {/* Theme-adaptive warm tint on top of overlay (subtle) */}
      <div
        aria-hidden="true"
        className="dark:hidden absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(255,225,170,0.15) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="hidden dark:block absolute inset-0 -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 100%, rgba(232,168,88,0.18) 0%, transparent 65%)",
        }}
      />

      {/* Subtle decorative blob */}
      <motion.div
        aria-hidden="true"
        animate={{y: [0, -20, 0], opacity: [0.25, 0.35, 0.25]}}
        transition={{duration: 12, repeat: Infinity, ease: "easeInOut"}}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[640px] h-[640px] rounded-full blur-3xl -z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(74,124,89,0.20), transparent 70%)",
        }}
      />

      {/* Sun + clouds — anchored around hero title area (desktop only) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[12vh] h-[55vh] -z-10 overflow-hidden opacity-[0.14] hidden sm:block"
      >
        <svg
          viewBox="0 0 1440 500"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full text-primary-300"
          fill="currentColor"
        >
          <circle cx="1140" cy="260" r="62" fill="#E8A858" opacity="0.85" />
          <circle cx="1140" cy="260" r="82" fill="#E8A858" opacity="0.25" />
          <g opacity="0.45">
            <path d="M120,180 Q104,160 134,156 Q148,138 178,148 Q200,138 218,158 Q244,160 240,184 Q216,196 178,190 Q148,200 120,180 Z" />
            <path d="M580,140 Q566,124 590,120 Q604,104 628,114 Q648,108 662,128 Q684,130 680,150 Q660,160 632,154 Q606,162 580,140 Z" />
            <path d="M260,320 Q248,306 270,302 Q282,288 304,296 Q322,290 336,308 Q356,310 352,328 Q332,338 308,332 Q286,340 260,320 Z" />
            <path d="M1240,130 Q1226,114 1250,110 Q1264,94 1288,104 Q1308,98 1322,118 Q1344,120 1340,140 Q1320,150 1292,144 Q1266,152 1240,130 Z" />
            <path d="M920,200 Q910,190 924,188 Q934,178 950,184 Q962,180 970,194 Q982,196 978,208 Q966,214 950,210 Q934,214 920,200 Z" />
          </g>
        </svg>
      </div>

      {/* Village silhouette — anchored bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[26vh] sm:h-[30vh] -z-10 overflow-hidden opacity-[0.16]"
      >
        <svg
          viewBox="0 0 1440 280"
          preserveAspectRatio="xMidYMax slice"
          className="absolute inset-0 w-full h-full text-primary-300"
          fill="currentColor"
        >
          <path
            opacity="0.5"
            d="M0,140 L120,90 L240,120 L380,70 L520,110 L660,60 L800,100 L940,75 L1080,115 L1220,80 L1360,110 L1440,90 L1440,280 L0,280 Z"
          />
          <path
            opacity="0.7"
            d="M0,200 Q180,170 360,185 T720,180 T1080,190 T1440,180 L1440,280 L0,280 Z"
          />
          <rect x="0" y="240" width="1440" height="40" />
          <path
            opacity="0.55"
            d="M0,240 L0,232 L200,232 L200,240 Z M280,240 L280,235 L470,235 L470,240 Z M560,240 L560,230 L740,230 L740,240 Z M820,240 L820,235 L1000,235 L1000,240 Z M1080,240 L1080,232 L1260,232 L1260,240 Z M1300,240 L1300,236 L1440,236 L1440,240 Z"
          />
          <g>
            <polygon points="130,240 130,218 158,200 186,218 186,240" />
            <polygon points="370,240 370,212 402,192 434,212 434,240" />
            <polygon points="900,240 900,215 932,196 964,215 964,240" />
            <polygon points="1180,240 1180,212 1212,192 1244,212 1244,240" />
            <polygon points="1340,240 1340,218 1368,200 1396,218 1396,240" />
          </g>
          <g>
            <rect x="660" y="212" width="56" height="28" />
            <path d="M660,212 Q688,188 716,212 Z" />
            <rect x="685" y="180" width="3" height="14" />
            <circle cx="686.5" cy="178" r="2" />
          </g>
          <g>
            <rect x="240" y="214" width="2.5" height="26" />
            <path d="M241,214 Q225,207 215,211 Q228,212 241,217 Z" />
            <path d="M241,214 Q257,207 267,211 Q254,212 241,217 Z" />
            <path d="M241,214 Q235,202 224,202 Q238,210 241,217 Z" />
            <rect x="510" y="194" width="3" height="46" />
            <path d="M511.5,194 Q485,184 470,188 Q495,190 511.5,200 Z" />
            <path d="M511.5,194 Q538,184 553,188 Q528,190 511.5,200 Z" />
            <path d="M511.5,194 Q503,172 489,172 Q508,188 511.5,200 Z" />
            <path d="M511.5,194 Q520,172 534,172 Q515,188 511.5,200 Z" />
            <rect x="790" y="206" width="2.5" height="34" />
            <path d="M791,206 Q775,198 762,202 Q780,200 791,209 Z" />
            <path d="M791,206 Q807,198 820,202 Q802,200 791,209 Z" />
            <rect x="1050" y="198" width="3" height="42" />
            <path d="M1051.5,198 Q1028,190 1014,193 Q1033,195 1051.5,204 Z" />
            <path d="M1051.5,198 Q1075,190 1089,193 Q1070,195 1051.5,204 Z" />
            <path d="M1051.5,198 Q1045,178 1032,178 Q1048,192 1051.5,204 Z" />
            <rect x="1290,222" width="2.5" height="18" />
            <path d="M1291,222 Q1278,217 1270,220 Q1281,220 1291,224 Z" />
            <path d="M1291,222 Q1304,217 1312,220 Q1301,220 1291,224 Z" />
          </g>
        </svg>
      </div>

      {/* Main content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 sm:px-6 max-w-3xl mx-auto"
      >
        {/* Eyebrow location */}
        <motion.div variants={fadeUp}>
          <span
            className="inline-flex items-center gap-2 mb-8 text-[11px] font-semibold uppercase"
            style={{
              color: "#EFB76A",
              letterSpacing: "0.18em",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                content: "",
                width: "1.5rem",
                height: "1px",
                background: "currentColor",
                opacity: 0.5,
                display: "inline-block",
              }}
            />
            <MapPin className="w-3 h-3" aria-hidden="true" />
            Desa Jamali · Cianjur
          </span>
        </motion.div>

        {/* Logo — gentle float */}
        <motion.div variants={fadeUp} className="flex justify-center mb-10">
          <motion.div
            animate={{y: [0, -8, 0]}}
            transition={{duration: 6, repeat: Infinity, ease: "easeInOut"}}
            className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.45)]"
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
          className="font-heading font-bold leading-[1.02] tracking-tight mb-6"
          style={{
            fontSize: "clamp(2.75rem, 8vw, 5.25rem)",
            color: "#F5F0E8",
          }}
        >
          KKN <span className="gradient-text-earthy">Jama</span>
          <span className="gradient-text-gold">Lights</span>{" "}
          <span style={{color: "#EFB76A"}}>206</span>
        </motion.h1>

        {/* Motto */}
        <motion.p
          variants={fadeUp}
          className="text-base sm:text-lg font-medium tracking-tight mb-4"
          style={{color: "rgba(245,240,232,0.92)"}}
        >
          {SITE_CONFIG.motto.join(" · ")}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-sm sm:text-base max-w-xl mx-auto mb-12 leading-relaxed"
          style={{color: "rgba(245,240,232,0.78)"}}
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
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm tracking-tight transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "rgba(245,240,232,0.10)",
              color: "#F5F0E8",
              border: "1px solid rgba(245,240,232,0.30)",
              backdropFilter: "blur(8px)",
            }}
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </Link>
        </motion.div>

        {/* Footnote */}
        <motion.p
          variants={fadeUp}
          className="mt-14 text-[10.5px] font-medium tracking-[0.18em] uppercase"
          style={{color: "rgba(245,240,232,0.55)"}}
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-colors duration-200 hover:opacity-100"
        style={{color: "rgba(245,240,232,0.55)"}}
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
