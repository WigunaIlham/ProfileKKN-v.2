"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Plus} from "lucide-react";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {faqs} from "@/data/faqs";
import {staggerContainer, fadeUp} from "@/lib/motion";
import type {FAQ} from "@/types";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <section
      id="faq"
      className="section-padding"
      style={{background: "var(--bg-secondary)"}}
      aria-label="FAQ"
    >
      <div className="container-max">
        <SectionHeader
          tag="FAQ"
          title="Pertanyaan yang"
          titleHighlight="Sering Ditanya"
          subtitle="Temukan jawaban atas pertanyaan umum seputar KKN JamaLights 206."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-60px"}}
          className="max-w-2xl mx-auto space-y-3"
        >
          {faqs.map((faq: FAQ) => {
            const isOpen = openId === faq.id;

            return (
              <motion.div
                key={faq.id}
                variants={fadeUp}
                className="rounded-2xl border overflow-hidden transition-all duration-300"
                style={{
                  background: "var(--bg-card)",
                  borderColor: isOpen
                    ? "rgba(74,124,89,0.4)"
                    : "var(--border)",
                  boxShadow: isOpen
                    ? "0 4px 20px rgba(74,124,89,0.10)"
                    : "0 1px 2px rgba(45,74,45,0.03)",
                }}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left group"
                >
                  <span
                    className="font-heading font-semibold text-sm sm:text-base tracking-tight transition-colors duration-200"
                    style={{
                      color: isOpen
                        ? "var(--primary)"
                        : "var(--text-primary)",
                    }}
                  >
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{rotate: isOpen ? 45 : 0}}
                    transition={{duration: 0.25, ease: [0.22, 1, 0.36, 1]}}
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200"
                    style={{
                      background: isOpen
                        ? "rgba(74,124,89,0.12)"
                        : "rgba(74,124,89,0.06)",
                      color: "var(--primary)",
                    }}
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{height: 0, opacity: 0}}
                      animate={{height: "auto", opacity: 1}}
                      exit={{height: 0, opacity: 0}}
                      transition={{duration: 0.3, ease: [0.22, 1, 0.36, 1]}}
                    >
                      <div className="px-5 pb-5">
                        <div
                          className="h-px mb-4"
                          style={{background: "var(--border)"}}
                        />
                        <p
                          className="text-sm leading-relaxed"
                          style={{color: "var(--text-secondary)"}}
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
