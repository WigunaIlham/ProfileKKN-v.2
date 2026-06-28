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

export function FooterSection() {
  const scrollTop = () => window.scrollTo({top: 0, behavior: "smooth"});

  return (
    <footer
      className="relative overflow-hidden"
      role="contentinfo"
      style={{
        background:
          "linear-gradient(160deg, #1C3320 0%, #2D4A2D 60%, #1a2e1a 100%)",
      }}
    >
      {/* Decorative top border gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, #4A7C59, #C4932A, #4A7C59, transparent)",
        }}
      />

      {/* Subtle texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#F5F0E8 1px,transparent 1px),linear-gradient(to bottom,#F5F0E8 1px,transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative">
        {/* Main footer grid */}
        <div
          className="py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-b"
          style={{borderColor: "rgba(74,124,89,0.25)"}}
        >
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-4">
              <div
                className="
                  relative
                  w-16 h-16
                  rounded-full
                  overflow-hidden
                  ring-2 ring-[#C4932A]/30
                  flex-shrink-0
                "
              >
                <Image
                  src={logoImage}
                  alt="Logo KKN Desa Jamali"
                  fill
                  priority
                  className="object-cover scale-[1.09] rounded-full"
                />
              </div>

              <div>
                <p
                  className="font-heading font-bold text-2xl leading-none"
                  style={{color: "#F5F0E8"}}
                >
                  KKN JamaLights 206
                </p>

                <p className="text-sm mt-2" style={{color: "#7A9A7A"}}>
                  UIN Sunan Gunung Djati Bandung
                </p>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-4 max-w-xs"
              style={{color: "#7A9A7A"}}
            >
              {SITE_CONFIG.description}
            </p>

            {/* Motto */}
            <div className="flex items-center gap-2 mb-5">
              {SITE_CONFIG.motto.map((m, i) => (
                <span key={m} className="flex items-center gap-2">
                  <span
                    className="text-xs font-bold tracking-wide"
                    style={{color: "#C4932A"}}
                  >
                    {m}
                  </span>
                  {i < SITE_CONFIG.motto.length - 1 && (
                    <span
                      className="w-0.5 h-0.5 rounded-full"
                      style={{background: "#C4932A"}}
                    />
                  )}
                </span>
              ))}
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5">
              {[
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
                  href: `mailto:${SITE_CONFIG.email}`,
                  label: "Email",
                },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "rgba(245,240,232,0.08)",
                    border: "1px solid rgba(245,240,232,0.12)",
                    color: "#A8C8A8",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "#4A7C59";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#F5F0E8";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(245,240,232,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "#A8C8A8";
                  }}
                >
                  <s.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4
              className="font-heading font-bold text-sm mb-4"
              style={{color: "#C4932A"}}
            >
              Navigasi
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() =>
                      document
                        .querySelector(link.href)
                        ?.scrollIntoView({behavior: "smooth"})
                    }
                    className="text-sm transition-colors duration-200"
                    style={{color: "#7A9A7A"}}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.color =
                        "#C4932A")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLButtonElement).style.color =
                        "#7A9A7A")
                    }
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
              className="font-heading font-bold text-sm mb-4"
              style={{color: "#C4932A"}}
            >
              Info KKN
            </h4>
            <ul className="space-y-2.5 text-sm" style={{color: "#7A9A7A"}}>
              <li className="flex items-start gap-2">
                <MapPin
                  className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                  style={{color: "#4A7C59"}}
                />
                <span>Desa Jamali, Kec. Mande, Kab. Cianjur</span>
              </li>
              <li>{SITE_CONFIG.university}</li>
              <li>KKN Kelompok 206</li>
              <li>Tahun {SITE_CONFIG.year}</li>
              <li className="pt-1">
                <Link
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200"
                  style={{color: "#4A7C59"}}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "#C4932A")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "#4A7C59")
                  }
                >
                  @kkn.jamalights206
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="text-xs flex items-center gap-1.5"
            style={{color: "#4A5C4A"}}
          >
            © {new Date().getFullYear()} KKN JamaLights 206. Dibuat dengan
            <Heart
              className="w-3 h-3 inline"
              style={{color: "#C4932A", fill: "#C4932A"}}
            />
            untuk Desa Jamali.
          </p>
          <button
            onClick={scrollTop}
            aria-label="Kembali ke atas"
            className="flex items-center gap-1.5 text-xs transition-colors duration-200"
            style={{color: "#4A5C4A"}}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color = "#C4932A")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.color = "#4A5C4A")
            }
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Kembali ke atas
          </button>
        </div>
      </div>
    </footer>
  );
}
