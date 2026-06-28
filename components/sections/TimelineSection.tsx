"use client";

import {motion} from "framer-motion";
import {CheckCircle2, Circle, Clock} from "lucide-react";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {timelineEvents} from "@/data/timeline";
import {staggerContainer, fadeLeft, fadeRight} from "@/lib/motion";
import type {TimelineEvent} from "@/types";

const statusIcon = {
  done: CheckCircle2,
  active: Clock,
  upcoming: Circle,
};

const statusStyle = {
  done: "text-green-500 bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800",
  active:
    "text-primary-600 bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800 ring-4 ring-primary-500/15",
  upcoming:
    "text-slate-400 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700",
};

export function TimelineSection() {
  return (
    <section
      id="timeline"
      className="section-padding"
      style={{background: "var(--bg)"}}
      aria-label="Timeline KKN"
    >
      <div className="container-max">
        <SectionHeader
          tag="Perjalanan"
          title="Timeline"
          titleHighlight="KKN"
          subtitle="Alur perjalanan KKN JamaLights 206 dari awal persiapan hingga penutupan yang berkesan."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-60px"}}
          className="relative max-w-3xl mx-auto"
        >
          {/* Vertical line — gradient from full color top to faded bottom */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 -translate-x-px top-2 bottom-2 w-px hidden sm:block"
            style={{
              background:
                "linear-gradient(180deg, rgba(74,124,89,0.6) 0%, rgba(74,124,89,0.3) 60%, rgba(74,124,89,0.05) 100%)",
            }}
          />

          <div className="space-y-8">
            {timelineEvents.map((event: TimelineEvent, index: number) => {
              const Icon = statusIcon[event.status];
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={event.id}
                  variants={isLeft ? fadeLeft : fadeRight}
                  className={`relative flex items-center gap-4 sm:gap-8 ${isLeft ? "sm:flex-row" : "sm:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className="flex-1 p-5 rounded-2xl card-earthy card-hover">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-9 h-9 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${statusStyle[event.status]}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-1.5">
                          <h3
                            className="font-heading font-bold tracking-tight"
                            style={{color: "var(--text-primary)"}}
                          >
                            {event.phase}
                          </h3>
                          <span
                            className="text-[11px] font-semibold uppercase"
                            style={{
                              color: "var(--text-muted)",
                              letterSpacing: "0.10em",
                            }}
                          >
                            · {event.date}
                          </span>
                        </div>
                        <p
                          className="text-sm leading-relaxed"
                          style={{color: "var(--text-secondary)"}}
                        >
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center dot — desktop */}
                  <div
                    aria-hidden="true"
                    className="hidden sm:flex w-3 h-3 rounded-full absolute left-1/2 -translate-x-1/2 z-10"
                    style={{
                      background: "var(--primary)",
                      boxShadow:
                        "0 0 0 3px var(--bg), 0 0 0 4px rgba(74,124,89,0.30)",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
