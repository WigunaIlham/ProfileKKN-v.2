"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/src/logo.png";
import {motion, AnimatePresence} from "framer-motion";
import {Menu, X, Sun, Moon, Instagram} from "lucide-react";
import {useTheme} from "next-themes";
import {cn, scrollToSection} from "@/lib/utils";
import {NAV_LINKS, SITE_CONFIG} from "@/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const {theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navTo = (href: string) => {
    setMobileOpen(false);
    scrollToSection(href);
  };

  return (
    <>
      <motion.header
        initial={{y: -80, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.5, ease: [0.22, 1, 0.36, 1]}}
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300",
          scrolled
            ? "bg-[var(--bg)]/80 backdrop-blur-xl border-b border-[var(--border)]/60 shadow-[0_1px_0_rgba(45,74,45,0.04)]"
            : "bg-transparent border-b border-transparent",
        )}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => navTo("#hero")}
              className="flex items-center gap-2.5 group rounded-lg -ml-1 px-1 py-1 transition-opacity duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-[var(--primary)]"
              aria-label="KKN JamaLights 206 — Beranda"
            >
              <div className="relative w-9 h-9 rounded-full overflow-hidden ring-1 ring-[var(--border)] group-hover:ring-[var(--primary)]/40 transition-all duration-200">
                <Image
                  src={logoImage}
                  alt="Logo KKN Desa Jamali"
                  fill
                  priority
                  className="object-cover scale-[1.18] rounded-full"
                />
              </div>
              <div className="hidden sm:flex flex-col leading-tight text-left">
                <span className="font-heading font-bold text-[15px] tracking-tight text-[var(--text-primary)]">
                  JamaLights 206
                </span>
                <span className="text-[10.5px] font-medium tracking-wide text-[var(--text-muted)]">
                  Desa Jamali · Cianjur
                </span>
              </div>
            </button>

            {/* Desktop nav */}
            <nav
              className="hidden lg:flex items-center gap-1"
              aria-label="Navigasi utama"
            >
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => navTo(link.href)}
                  className="nav-link"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1.5">
              {/* Dark mode toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  aria-label={
                    theme === "dark" ? "Aktifkan mode terang" : "Aktifkan mode gelap"
                  }
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text-muted)] hover:text-[var(--primary)] hover:bg-[var(--primary)]/[0.06] transition-colors duration-150"
                >
                  {theme === "dark" ? (
                    <Sun className="w-[18px] h-[18px]" />
                  ) : (
                    <Moon className="w-[18px] h-[18px]" />
                  )}
                </button>
              )}

              {/* Instagram CTA — desktop */}
              <Link
                href={SITE_CONFIG.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex btn-primary !py-2 !px-4 !text-xs ml-1.5"
              >
                <Instagram className="w-3.5 h-3.5" />
                Instagram
              </Link>

              {/* Hamburger */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg text-[var(--text-primary)] hover:bg-[var(--primary)]/[0.06] transition-colors duration-150"
                aria-label={mobileOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={mobileOpen ? "x" : "menu"}
                    initial={{rotate: -90, opacity: 0}}
                    animate={{rotate: 0, opacity: 1}}
                    exit={{rotate: 90, opacity: 0}}
                    transition={{duration: 0.15}}
                    className="inline-flex"
                  >
                    {mobileOpen ? (
                      <X className="w-5 h-5" />
                    ) : (
                      <Menu className="w-5 h-5" />
                    )}
                  </motion.span>
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer + backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              transition={{duration: 0.2}}
              className="fixed inset-0 z-30 bg-black/30 backdrop-blur-[2px] lg:hidden"
              onClick={() => setMobileOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              id="mobile-nav"
              key="drawer"
              initial={{opacity: 0, y: -12}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -12}}
              transition={{duration: 0.22, ease: [0.22, 1, 0.36, 1]}}
              className="fixed top-16 inset-x-3 z-40 lg:hidden rounded-2xl bg-[var(--bg-card)] border border-[var(--border)] shadow-[0_12px_40px_rgba(28,51,32,0.18)] overflow-hidden"
              role="dialog"
              aria-label="Menu navigasi"
              aria-modal="true"
            >
              <nav className="flex flex-col p-2">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => navTo(link.href)}
                    className="text-left px-4 py-3 text-sm font-medium rounded-xl text-[var(--text-primary)] hover:bg-[var(--primary)]/[0.06] hover:text-[var(--primary)] transition-colors duration-150"
                  >
                    {link.label}
                  </button>
                ))}
                <div className="h-px bg-[var(--border)] mx-2 my-2" />
                <Link
                  href={SITE_CONFIG.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary justify-center m-2"
                  onClick={() => setMobileOpen(false)}
                >
                  <Instagram className="w-4 h-4" />
                  Follow Instagram KKN
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
