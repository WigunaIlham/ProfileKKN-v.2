"use client";

import {useState, useCallback, useEffect} from "react";
import {motion} from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {Quote, ChevronLeft, ChevronRight, MapPin, Calendar} from "lucide-react";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {DriveImage} from "@/components/ui/DriveImage";
import {testimonials} from "@/data/testimonials";
import {fadeUp} from "@/lib/motion";
import type {Testimonial} from "@/types";

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop: true, align: "center"}, [
    Autoplay({delay: 4500, stopOnInteraction: true}),
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
      className="section-padding"
      style={{background: "var(--bg)"}}
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
            <div className="flex">
              {testimonials.map((t: Testimonial) => (
                <div
                  key={t.id}
                  className="flex-none w-[85vw] sm:w-[55vw] lg:w-[42vw] max-w-lg px-3 sm:px-4"
                >
                  <div className="h-full p-6 sm:p-8 rounded-2xl card-earthy flex flex-col">
                    <Quote
                      className="w-8 h-8 mb-4 flex-shrink-0"
                      style={{color: "rgba(196,147,42,0.30)"}}
                    />
                    <p
                      className="leading-relaxed mb-6 italic flex-1"
                      style={{color: "var(--text-secondary)"}}
                    >
                      “{t.content}”
                    </p>

                    {/* Author block */}
                    <div
                      className="flex items-start gap-3 pt-5 border-t"
                      style={{borderColor: "var(--border)"}}
                    >
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <DriveImage
                          driveId={t.driveId}
                          alt={`Foto ${t.name}`}
                          fallbackName={t.name}
                          containerClassName="w-full h-full"
                          size={100}
                          avatarTextClassName="text-sm"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="font-heading font-semibold text-sm tracking-tight truncate"
                          style={{color: "var(--text-primary)"}}
                        >
                          {t.name}
                        </p>
                        <p
                          className="text-xs mt-0.5 truncate"
                          style={{color: "var(--text-muted)"}}
                        >
                          {t.role}
                        </p>
                        {(t.location || t.date) && (
                          <div
                            className="flex items-center gap-3 mt-2 text-[10px] font-medium flex-wrap"
                            style={{color: "var(--text-muted)"}}
                          >
                            {t.location && (
                              <span className="inline-flex items-center gap-1">
                                <MapPin className="w-2.5 h-2.5" />
                                {t.location}
                              </span>
                            )}
                            {t.date && (
                              <span className="inline-flex items-center gap-1">
                                <Calendar className="w-2.5 h-2.5" />
                                {t.date}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              aria-label="Testimoni sebelumnya"
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:-translate-x-0.5"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-muted)",
                background: "var(--bg-card)",
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  aria-label={`Slide ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === selectedIndex ? "1.5rem" : "0.375rem",
                    height: "0.375rem",
                    background:
                      i === selectedIndex
                        ? "var(--primary)"
                        : "rgba(74,124,89,0.25)",
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => emblaApi?.scrollNext()}
              aria-label="Testimoni berikutnya"
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-200 hover:translate-x-0.5"
              style={{
                borderColor: "var(--border)",
                color: "var(--text-muted)",
                background: "var(--bg-card)",
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
