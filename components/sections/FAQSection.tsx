"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {Plus, Minus} from "lucide-react";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {faqs} from "@/data/faqs";
import {staggerContainer, fadeUp} from "@/lib/motion";
import type {FAQ} from "@/types";

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("1");

  return (
    <section
      id="faq"
      className="section-padding bg-slate-50/50 dark:bg-slate-900/50"
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
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "border-primary-200 dark:border-primary-800 bg-white dark:bg-slate-900 shadow-md shadow-primary-500/10"
                    : "border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900"
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span
                    className={`font-heading font-semibold text-sm sm:text-base transition-colors duration-200 ${
                      isOpen
                        ? "text-primary-600 dark:text-primary-400"
                        : "text-slate-900 dark:text-white"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors duration-200 ${
                      isOpen
                        ? "bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </span>
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
                        <div className="h-px bg-primary-100 dark:bg-primary-900/30 mb-4" />
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
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
