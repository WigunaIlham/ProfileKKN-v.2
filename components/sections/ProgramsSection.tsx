"use client";

import {motion} from "framer-motion";
import {Monitor, Heart, ShoppingBag, Leaf, BookOpen, Music} from "lucide-react";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {workPrograms} from "@/data/programs";
import {statusConfig} from "@/lib/utils";
import {staggerContainer, fadeUp} from "@/lib/motion";
import type {WorkProgram} from "@/types";

const iconMap: Record<string, React.ElementType> = {
  Monitor,
  Heart,
  ShoppingBag,
  Leaf,
  BookOpen,
  Music,
};

export function ProgramsSection() {
  return (
    <section
      id="programs"
      className="section-padding"
      style={{background: "var(--bg-secondary)"}}
      aria-label="Program Kerja"
    >
      <div className="container-max">
        <SectionHeader
          tag="Program Kerja"
          title="Apa yang Kami"
          titleHighlight="Kerjakan?"
          subtitle="Program-program unggulan yang dirancang berdasarkan kebutuhan nyata masyarakat desa."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-60px"}}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {workPrograms.map((program: WorkProgram) => {
            const Icon = iconMap[program.icon] || Monitor;
            const status = statusConfig[program.status];

            return (
              <motion.div
                key={program.id}
                variants={fadeUp}
                className="group p-6 rounded-2xl card-earthy card-hover"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${status.color}`}
                  >
                    {status.label}
                  </span>
                </div>
                <h3
                  className="font-heading font-bold mb-2 tracking-tight"
                  style={{color: "var(--text-primary)"}}
                >
                  {program.name}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{color: "var(--text-secondary)"}}
                >
                  {program.description}
                </p>
                <div
                  className="flex items-center gap-2 pt-4 border-t"
                  style={{borderColor: "var(--border)"}}
                >
                  <span
                    className="text-[11px] font-semibold uppercase"
                    style={{
                      color: "var(--text-muted)",
                      letterSpacing: "0.10em",
                    }}
                  >
                    Target
                  </span>
                  <span
                    className="text-xs font-medium"
                    style={{color: "var(--text-secondary)"}}
                  >
                    · {program.target}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
