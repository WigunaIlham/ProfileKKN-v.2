"use client";

import Link from "next/link";
import Image from "next/image";
import logoImage from "@/src/logo.png";
import {
  Instagram,
  MessageCircle,
  Mail,
  Heart,
  ArrowUp,
  MapPin,
} from "lucide-react";
import {SITE_CONFIG, NAV_LINKS} from "@/constants";
import {scrollToSection, gmailComposeUrl} from "@/lib/utils";

const FOOTER_TEXT = "#A8C8A8";
const FOOTER_TEXT_DIM = "#7A9A7A";
const FOOTER_TEXT_FAINT = "#4A5C4A";
const FOOTER_ACCENT = "#C4932A";

const socials = [
  {
    icon: Instagram,
    href: SITE_CONFIG.instagram,
    label: "Instagram KKN",
  },
  {
    icon: MessageCircle,
    href: SITE_CONFIG.whatsapp,
    label: "WhatsApp",
  },
  {
    icon: Mail,
    href: gmailComposeUrl(SITE_CONFIG.email),
    label: "Email",
  },
];

export function FooterSection() {
  const scrollTop = () => window.scrollTo({top: 0, behavior: "smooth"});

  return (
    <footer
      className="relative overflow-hidden"
      role="contentinfo"
      style={{background: "#0F1A10"}}
    >
      {/* Top accent gradient hairline */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(196,147,42,0.5), transparent)",
        }}
      />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative">
        {/* Main grid */}
        <div
          className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b"
          style={{borderColor: "rgba(74,124,89,0.20)"}}
        >
          {/* Brand */}
          <div className="lg:col-span-2 max-w-md">
            <div className="flex items-center gap-3.5 mb-5">
              <div
                className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0"
                style={{
                  background: "rgba(245,240,232,0.06)",
                  boxShadow: "0 0 0 1px rgba(245,240,232,0.10)",
                }}
              >
                <Image
                  src={logoImage}
                  alt="Logo KKN Desa Jamali"
                  fill
                  className="object-cover scale-[1.09] rounded-full"
                />
              </div>
              <div>
                <p
                  className="font-heading font-bold text-xl leading-none tracking-tight"
                  style={{color: "#F5F0E8"}}
                >
                  KKN JamaLights 206
                </p>
                <p
                  className="text-xs mt-2 tracking-wide"
                  style={{color: FOOTER_TEXT_DIM}}
                >
                  UIN Sunan Gunung Djati Bandung
                </p>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-5"
              style={{color: FOOTER_TEXT_DIM}}
            >
              {SITE_CONFIG.description}
            </p>

            {/* Motto chips */}
            <div
              className="flex items-center gap-2 mb-6 text-[11px] font-semibold uppercase"
              style={{
                color: FOOTER_ACCENT,
                letterSpacing: "0.18em",
              }}
            >
              {SITE_CONFIG.motto.map((m, i) => (
                <span key={m} className="flex items-center gap-2">
                  {m}
                  {i < SITE_CONFIG.motto.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="w-1 h-1 rounded-full"
                      style={{background: FOOTER_ACCENT, opacity: 0.6}}
                    />
                  )}
                </span>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="group w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 bg-white/[0.04] border border-white/[0.08] text-[#A8C8A8] hover:bg-[#4A7C59] hover:text-[#F5F0E8] hover:border-transparent"
                >
                  <s.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4
              className="font-heading font-semibold text-[11px] uppercase mb-5"
              style={{color: FOOTER_ACCENT, letterSpacing: "0.18em"}}
            >
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm transition-colors duration-200 text-[#7A9A7A] hover:text-[#C4932A]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4
              className="font-heading font-semibold text-[11px] uppercase mb-5"
              style={{color: FOOTER_ACCENT, letterSpacing: "0.18em"}}
            >
              Info KKN
            </h4>
            <ul
              className="space-y-2.5 text-sm"
              style={{color: FOOTER_TEXT_DIM}}
            >
              <li className="flex items-start gap-2 leading-relaxed">
                <MapPin
                  className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                  style={{color: "#4A7C59"}}
                />
                <span>Desa Jamali, Kec. Mande, Kab. Cianjur</span>
              </li>
              <li>{SITE_CONFIG.university}</li>
              <li>KKN Kelompok 206 · Tahun {SITE_CONFIG.year}</li>
              <li className="pt-1">
                <Link
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 text-[#4A7C59] hover:text-[#C4932A]"
                >
                  @kkn.jamalights206
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs flex items-center gap-1.5"
            style={{color: FOOTER_TEXT_FAINT}}
          >
            © {new Date().getFullYear()} KKN JamaLights 206. Dibuat dengan
            <Heart
              className="w-3 h-3 inline"
              style={{color: FOOTER_ACCENT, fill: FOOTER_ACCENT}}
            />
            untuk Desa Jamali.
          </p>
          <button
            onClick={scrollTop}
            aria-label="Kembali ke atas"
            className="group flex items-center gap-1.5 text-xs transition-colors duration-200 text-[#4A5C4A] hover:text-[#C4932A]"
          >
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            Kembali ke atas
          </button>
        </div>
      </div>
    </footer>
  );
}
