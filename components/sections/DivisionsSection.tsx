"use client";

import {motion} from "framer-motion";
import {Camera, Calendar, Package, Users} from "lucide-react";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {divisions} from "@/data/divisions";
import {staggerContainer, scaleUp} from "@/lib/motion";

const iconMap: Record<string, React.ElementType> = {
  Camera,
  Calendar,
  Package,
  Users,
};

const colorMap: Record<
  string,
  {bg: string; icon: string; border: string; grad: string}
> = {
  blue: {
    bg: "bg-primary-50 dark:bg-primary-900/20",
    icon: "text-primary-600 dark:text-primary-400",
    border: "hover:border-primary-300 dark:hover:border-primary-700",
    grad: "from-primary-500 to-primary-700",
  },
  purple: {
    bg: "bg-violet-50 dark:bg-violet-900/20",
    icon: "text-violet-600 dark:text-violet-400",
    border: "hover:border-violet-300 dark:hover:border-violet-700",
    grad: "from-violet-500 to-purple-700",
  },
  amber: {
    bg: "bg-amber-50 dark:bg-amber-900/20",
    icon: "text-amber-600 dark:text-amber-400",
    border: "hover:border-amber-300 dark:hover:border-amber-700",
    grad: "from-amber-400 to-amber-600",
  },
  green: {
    bg: "bg-green-50 dark:bg-green-900/20",
    icon: "text-green-600 dark:text-green-400",
    border: "hover:border-green-300 dark:hover:border-green-700",
    grad: "from-green-500 to-emerald-700",
  },
};

export function DivisionsSection() {
  return (
    <section
      id="divisions"
      className="section-padding bg-white dark:bg-slate-950"
      aria-label="Divisi"
    >
      <div className="container-max">
        <SectionHeader
          tag="Divisi"
          title="Struktur"
          titleHighlight="Divisi"
          subtitle="Empat divisi yang bekerja secara sinergis untuk memastikan kelancaran setiap program dan kegiatan KKN."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-60px"}}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {divisions.map((div) => {
            const Icon = iconMap[div.icon] || Camera;
            const colors = colorMap[div.color] || colorMap.blue;

            return (
              <motion.div
                key={div.id}
                variants={scaleUp}
                className={`group relative p-6 rounded-2xl border border-slate-100 dark:border-slate-800 ${colors.border} bg-white dark:bg-slate-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden cursor-pointer`}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${colors.grad} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                />

                <div
                  className={`w-14 h-14 rounded-2xl ${colors.bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white mb-2">
                  {div.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {div.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
