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
    "text-primary-600 bg-primary-50 dark:bg-primary-900/20 border-primary-200 dark:border-primary-800 ring-4 ring-primary-500/20",
  upcoming:
    "text-slate-400 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700",
};

export function TimelineSection() {
  return (
    <section
      id="timeline"
      className="section-padding bg-white dark:bg-slate-950"
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
          viewport={{once: true, margin: "-80px"}}
          className="relative max-w-3xl mx-auto"
        >
          {/* Vertical line */}
          <div
            className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-300 to-slate-200 dark:from-primary-600 dark:via-slate-700 dark:to-slate-800 hidden sm:block"
            aria-hidden="true"
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
                  <div className="flex-1 p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm card-hover">
                    <div className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${statusStyle[event.status]}`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <h3 className="font-heading font-bold text-slate-900 dark:text-white">
                            {event.phase}
                          </h3>
                          <span className="text-xs text-slate-400 dark:text-slate-500">
                            {event.date}
                          </span>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Center dot on desktop */}
                  <div
                    className="hidden sm:flex w-4 h-4 rounded-full bg-primary-600 border-4 border-white dark:border-slate-950 shadow-md absolute left-1/2 -translate-x-1/2 z-10"
                    aria-hidden="true"
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
