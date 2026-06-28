"use client";

import {useState, useCallback, useEffect} from "react";
import {motion} from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {Quote, ChevronLeft, ChevronRight} from "lucide-react";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {DriveImage} from "@/components/ui/DriveImage";
import {testimonials} from "@/data/testimonials";
import {fadeUp} from "@/lib/motion";
import type {Testimonial} from "@/types";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: "center"}, [
    Autoplay({delay: 4000, stopOnInteraction: true}),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <section
      id="testimonials"
      className="section-padding bg-white dark:bg-slate-950"
      aria-label="Testimoni"
    >
      <div className="container-max">
        <SectionHeader
          tag="Testimoni"
          title="Kata"
          titleHighlight="Mereka"
          subtitle="Apresiasi dan kesan dari berbagai pihak yang telah merasakan dampak langsung dari program KKN kami."
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
        >
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 sm:gap-6">
              {testimonials.map((t: Testimonial) => (
                <div
                  key={t.id}
                  className="flex-none w-[85vw] sm:w-[50vw] lg:w-[38vw] max-w-lg"
                >
                  <div className="h-full p-6 sm:p-8 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
                    <Quote className="w-8 h-8 text-primary-200 dark:text-primary-900 mb-4" />
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 italic">
                      {t.content}
                    </p>
                    <div className="flex items-center gap-3">
                      {/* Avatar — DriveImage dengan fallback dari nama */}
                      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                        <DriveImage
                          driveId={t.driveId}
                          alt={`Foto ${t.name}`}
                          fallbackName={t.name}
                          containerClassName="w-full h-full"
                          size={100}
                          avatarTextClassName="text-sm"
                        />
                      </div>
                      <div>
                        <p className="font-heading font-semibold text-sm text-slate-900 dark:text-white">
                          {t.name}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">
                          {t.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Testimoni sebelumnya"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === selectedIndex
                      ? "w-6 h-2 bg-primary-600"
                      : "w-2 h-2 bg-slate-300 dark:bg-slate-700"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Testimoni berikutnya"
              className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:border-primary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
