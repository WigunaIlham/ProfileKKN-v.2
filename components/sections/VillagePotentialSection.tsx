"use client";

import {motion} from "framer-motion";
import {Wheat, Mountain, Music2, GraduationCap, Store} from "lucide-react";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {villagePotentials} from "@/data/village";
import {staggerContainer, fadeUp} from "@/lib/motion";
import type {VillagePotential} from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Wheat,
  Mountain,
  Music2,
  GraduationCap,
  Store,
};

const colorMap: Record<string, {bg: string; icon: string; ring: string}> = {
  green: {
    bg: "bg-green-50 dark:bg-green-900/20",
    icon: "text-green-600 dark:text-green-400",
    ring: "ring-green-500/20",
  },
  blue: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    icon: "text-blue-600 dark:text-blue-400",
    ring: "ring-blue-500/20",
  },
  purple: {
    bg: "bg-violet-50 dark:bg-violet-900/20",
    icon: "text-violet-600 dark:text-violet-400",
    ring: "ring-violet-500/20",
  },
  amber: {
    bg: "bg-amber-50 dark:bg-amber-900/20",
    icon: "text-amber-600 dark:text-amber-400",
    ring: "ring-amber-500/20",
  },
  rose: {
    bg: "bg-rose-50 dark:bg-rose-900/20",
    icon: "text-rose-600 dark:text-rose-400",
    ring: "ring-rose-500/20",
  },
};

export function VillagePotentialSection() {
  return (
    <section
      id="village-potential"
      className="section-padding bg-white dark:bg-slate-950"
      aria-label="Potensi Desa"
    >
      <div className="container-max">
        <SectionHeader
          tag="Potensi Desa"
          title="Kekayaan"
          titleHighlight="Desa Kami"
          subtitle="Desa [Nama Desa] memiliki beragam potensi yang siap untuk dikembangkan dan dioptimalkan bersama."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-60px"}}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {villagePotentials.map((vp: VillagePotential, index: number) => {
            const Icon = iconMap[vp.icon] || Wheat;
            const colors = colorMap[vp.color] || colorMap.green;

            return (
              <motion.div
                key={vp.id}
                variants={fadeUp}
                className={`group p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 card-hover ${index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${colors.bg} ring-4 ${colors.ring} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2">
                  {vp.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {vp.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
