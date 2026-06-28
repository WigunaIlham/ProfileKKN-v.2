"use client";

import {motion} from "framer-motion";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {fadeUp, staggerContainer} from "@/lib/motion";
import {
  Crown,
  FileText,
  Wallet,
  Camera,
  Calendar,
  Package,
  Users,
} from "lucide-react";

const orgData = [
  {
    role: "Ketua",
    icon: Crown,
    color: "bg-primary-600",
    textColor: "text-white",
    borderColor: "border-primary-600",
    level: 0,
  },
  {
    role: "Sekretaris",
    icon: FileText,
    color: "bg-sky-500",
    textColor: "text-white",
    borderColor: "border-sky-500",
    level: 1,
  },
  {
    role: "Bendahara",
    icon: Wallet,
    color: "bg-amber-500",
    textColor: "text-white",
    borderColor: "border-amber-500",
    level: 1,
  },
  {
    role: "PDD",
    icon: Camera,
    color: "bg-violet-500",
    textColor: "text-white",
    borderColor: "border-violet-500",
    level: 2,
  },
  {
    role: "Acara",
    icon: Calendar,
    color: "bg-green-500",
    textColor: "text-white",
    borderColor: "border-green-500",
    level: 2,
  },
  {
    role: "Logistik",
    icon: Package,
    color: "bg-orange-500",
    textColor: "text-white",
    borderColor: "border-orange-500",
    level: 2,
  },
  {
    role: "Humas",
    icon: Users,
    color: "bg-rose-500",
    textColor: "text-white",
    borderColor: "border-rose-500",
    level: 2,
  },
];

export function OrgStructureSection() {
  const ketua = orgData.filter((o) => o.level === 0);
  const level1 = orgData.filter((o) => o.level === 1);
  const level2 = orgData.filter((o) => o.level === 2);

  return (
    <section
      id="org-structure"
      className="section-padding bg-slate-50/50 dark:bg-slate-900/50"
      aria-label="Struktur Organisasi"
    >
      <div className="container-max">
        <SectionHeader
          tag="Struktur"
          title="Organisasi"
          titleHighlight="Kelompok"
          subtitle="Struktur organisasi KKN JamaLights 206 yang terstruktur untuk memastikan setiap program berjalan optimal."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          className="flex flex-col items-center gap-8"
        >
          {/* Level 0 — Ketua */}
          <motion.div variants={fadeUp} className="flex flex-col items-center">
            {ketua.map((node) => (
              <div
                key={node.role}
                className={`flex flex-col items-center gap-2 p-5 rounded-2xl ${node.color} shadow-2xl shadow-primary-500/30 min-w-[140px]`}
              >
                <node.icon className="w-7 h-7 text-white" />
                <span className="font-heading font-bold text-white text-sm">
                  {node.role}
                </span>
              </div>
            ))}
            <div className="w-0.5 h-8 bg-slate-300 dark:bg-slate-700" />
          </motion.div>

          {/* Level 1 */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap justify-center gap-6 sm:gap-12"
          >
            {level1.map((node, i) => (
              <div key={node.role} className="flex flex-col items-center gap-2">
                <div className="w-0.5 h-0 sm:h-0" />
                <div
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl ${node.color} shadow-lg min-w-[120px]`}
                >
                  <node.icon className="w-5 h-5 text-white" />
                  <span className="font-heading font-bold text-white text-sm">
                    {node.role}
                  </span>
                </div>
                {i === 0 && (
                  <div className="hidden sm:block w-0.5 h-8 bg-slate-300 dark:bg-slate-700" />
                )}
              </div>
            ))}
          </motion.div>

          {/* Connector */}
          <div className="hidden sm:flex items-center w-full max-w-3xl">
            <div className="flex-1 h-0.5 bg-slate-300 dark:bg-slate-700" />
            <div className="w-0.5 h-8 bg-slate-300 dark:bg-slate-700 -translate-y-4" />
            <div className="flex-1 h-0.5 bg-slate-300 dark:bg-slate-700" />
          </div>

          {/* Level 2 */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl"
          >
            {level2.map((node) => (
              <div
                key={node.role}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl ${node.color} shadow-md`}
              >
                <node.icon className="w-5 h-5 text-white" />
                <span className="font-heading font-bold text-white text-sm text-center">
                  {node.role}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
