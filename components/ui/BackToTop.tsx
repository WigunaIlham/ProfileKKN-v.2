"use client";

import {useEffect, useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {ArrowUp} from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{opacity: 0, scale: 0.8, y: 8}}
          animate={{opacity: 1, scale: 1, y: 0}}
          exit={{opacity: 0, scale: 0.8, y: 8}}
          onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
          aria-label="Kembali ke atas"
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
          style={{
            background: "linear-gradient(135deg, #4A7C59, #2D4A2D)",
            color: "#F5F0E8",
            boxShadow: "0 4px 20px rgba(45,74,45,0.35)",
          }}
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
