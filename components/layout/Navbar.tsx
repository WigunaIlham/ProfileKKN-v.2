"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/src/logo.png";
import {motion, AnimatePresence} from "framer-motion";
import {Menu, X, Sun, Moon, Instagram} from "lucide-react";
import {useTheme} from "next-themes";
import {cn} from "@/lib/utils";
import {NAV_LINKS, SITE_CONFIG} from "@/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navTo = (href: string) => {
    setMobileOpen(false);
    document
      .querySelector(href)
      ?.scrollIntoView({behavior: "smooth", block: "start"});
  };

  return (
    <>
      <motion.header
        initial={{y: -80, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.6, ease: [0.22, 1, 0.36, 1]}}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-400",
          scrolled ? "glass-earthy shadow-earthy py-2" : "bg-transparent py-3",
        )}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <button
              onClick={() => navTo("#hero")}
              className="flex items-center gap-2.5 group"
              aria-label="KKN JamaLights 206 — Beranda"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-2 ring-primary-500/30 group-hover:ring-primary-500/60 transition-all duration-300">
                <Image
                  src={logoImage}
                  alt="Logo KKN Desa Jamali"
                  fill
                  priority
                  className="
                    object-cover
                    scale-[1.18]
                    rounded-full
                    transition-transform
                    duration-300
                    group-hover:scale-[1.09]
                  "
                />
              </div>

              <div className="hidden sm:flex flex-col leading-tight">
                <span
                  className="font-heading font-bold text-sm"
                  style={{color: "var(--text-primary)"}}
                >
                  JamaLights 206
                </span>

                <span
                  className="text-[10px] font-medium"
                  style={{color: "var(--text-muted)"}}
                >
                  Desa Jamali, Cianjur
                </span>
              </div>
            </button>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-0.5"
              aria-label="Navigasi utama"
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => navTo(link.href)}
                  className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                  style={{color: "var(--text-secondary)"}}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "var(--primary)";
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(74,124,89,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "var(--text-secondary)";
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "transparent";
                  }}
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Dark mode toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label="Toggle dark mode"
                  className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-200"
                  style={{color: "var(--text-muted)"}}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color =
                      "var(--primary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color =
                      "var(--text-muted)")
                  }
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </button>
              )}

              {/* Instagram CTA */}
              <Link
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex btn-primary !py-2 !px-4 !text-xs"
              >
                <Instagram className="w-3.5 h-3.5" />
                Instagram
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors duration-200"
                style={{color: "var(--text-muted)"}}
                aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{opacity: 0, y: -8}}
            animate={{opacity: 1, y: 0}}
            exit={{opacity: 0, y: -8}}
            transition={{duration: 0.2}}
            className="fixed top-[60px] left-0 right-0 z-40 glass-earthy border-t lg:hidden"
            style={{borderColor: "rgba(74,124,89,0.2)"}}
          >
            <nav className="flex flex-col gap-1 p-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => navTo(link.href)}
                  className="text-left px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200"
                  style={{color: "var(--text-secondary)"}}
                >
                  {link.label}
                </button>
              ))}
              <Link
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 btn-primary justify-center"
                onClick={() => setMobileOpen(false)}
              >
                <Instagram className="w-4 h-4" />
                Follow Instagram KKN
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
