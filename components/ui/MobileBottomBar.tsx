"use client";

import {useState, useEffect} from "react";
import Link from "next/link";
import {motion, AnimatePresence} from "framer-motion";
import {Mail, Instagram} from "lucide-react";
import {SITE_CONFIG} from "@/constants";
import {scrollToSection} from "@/lib/utils";

/**
 * Mobile-only floating bottom bar with the page's primary action ("Hubungi Tim")
 * + a quick Instagram shortcut. Hidden while user is in the hero (so they can
 * see the full hero) and on tablet+ (where the navbar is more accessible).
 */
export function MobileBottomBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show once user scrolls past ~70% of viewport (out of hero area)
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{y: 80, opacity: 0}}
          animate={{y: 0, opacity: 1}}
          exit={{y: 80, opacity: 0}}
          transition={{duration: 0.25, ease: [0.22, 1, 0.36, 1]}}
          className="sm:hidden fixed bottom-0 inset-x-0 z-30 px-3 pb-3 pt-2"
          style={{
            paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))",
            background:
              "linear-gradient(180deg, transparent 0%, var(--bg) 30%)",
          }}
          role="region"
          aria-label="Aksi cepat"
        >
          <div
            className="flex items-center gap-2 rounded-2xl p-1.5"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              boxShadow: "0 12px 32px rgba(45,74,45,0.18)",
            }}
          >
            <button
              onClick={() => scrollToSection("#contact")}
              className="btn-primary flex-1 !py-3 !text-[13px]"
            >
              <Mail className="w-4 h-4" />
              Hubungi Tim
            </button>
            <Link
              href={SITE_CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram KKN JamaLights 206"
              className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
              style={{
                background: "rgba(74,124,89,0.08)",
                color: "var(--primary)",
              }}
            >
              <Instagram className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
