"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Wheat,
  Mountain,
  Music2,
  GraduationCap,
  Store,
  ArrowUpRight,
  X,
  MapPin,
  Sparkles,
} from "lucide-react";
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
    ring: "ring-green-500/15",
  },
  blue: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    icon: "text-blue-600 dark:text-blue-400",
    ring: "ring-blue-500/15",
  },
  purple: {
    bg: "bg-violet-50 dark:bg-violet-900/20",
    icon: "text-violet-600 dark:text-violet-400",
    ring: "ring-violet-500/15",
  },
  amber: {
    bg: "bg-amber-50 dark:bg-amber-900/20",
    icon: "text-amber-600 dark:text-amber-400",
    ring: "ring-amber-500/15",
  },
  rose: {
    bg: "bg-rose-50 dark:bg-rose-900/20",
    icon: "text-rose-600 dark:text-rose-400",
    ring: "ring-rose-500/15",
  },
};

export function VillagePotentialSection() {
  const [selected, setSelected] = useState<VillagePotential | null>(null);

  return (
    <section
      id="village-potential"
      className="section-padding"
      style={{background: "var(--bg)"}}
      aria-label="Potensi Desa"
    >
      <div className="container-max">
        <SectionHeader
          tag="Potensi Desa"
          title="Kekayaan"
          titleHighlight="Desa Kami"
          subtitle="Desa Jamali memiliki beragam potensi yang siap untuk dikembangkan dan dioptimalkan bersama. Klik kartu untuk detail lengkap."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-60px"}}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {villagePotentials.map((vp: VillagePotential, index: number) => {
            const Icon = iconMap[vp.icon] || Wheat;
            const colors = colorMap[vp.color] || colorMap.green;

            return (
              <motion.button
                key={vp.id}
                variants={fadeUp}
                onClick={() => setSelected(vp)}
                aria-label={`Lihat detail potensi ${vp.title}`}
                className={`group relative p-6 rounded-2xl card-earthy card-hover text-left w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)] ${index === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-2xl ${colors.bg} ring-4 ${colors.ring} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <ArrowUpRight
                    className="w-5 h-5 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{color: "var(--primary)"}}
                  />
                </div>
                <h3
                  className="font-heading font-bold text-xl mb-2 tracking-tight"
                  style={{color: "var(--text-primary)"}}
                >
                  {vp.title}
                </h3>
                <p
                  className="text-sm leading-relaxed line-clamp-3"
                  style={{color: "var(--text-secondary)"}}
                >
                  {vp.description}
                </p>
              </motion.button>
            );
          })}
        </motion.div>
      </div>

      {/* Detail Modal */}
      <Dialog.Root
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/55 backdrop-blur-sm" />
          <Dialog.Content
            className="fixed left-1/2 top-1/2 z-[101] -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-lg max-h-[88vh] overflow-y-auto rounded-2xl shadow-[0_20px_60px_rgba(28,51,32,0.30)] focus:outline-none"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
            aria-describedby={undefined}
          >
            {selected && <PotentialDetailContent vp={selected} />}
            <Dialog.Close
              aria-label="Tutup detail"
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-150"
              style={{
                background: "rgba(74,124,89,0.06)",
                color: "var(--text-secondary)",
              }}
            >
              <X className="w-4 h-4" />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}

function PotentialDetailContent({vp}: {vp: VillagePotential}) {
  const Icon = iconMap[vp.icon] || Wheat;
  const colors = colorMap[vp.color] || colorMap.green;

  return (
    <div className="p-6 sm:p-8">
      {/* Header */}
      <div className="flex items-start gap-4 mb-5 pr-10">
        <div
          className={`w-14 h-14 rounded-2xl ${colors.bg} ring-4 ${colors.ring} flex items-center justify-center flex-shrink-0`}
        >
          <Icon className={`w-7 h-7 ${colors.icon}`} />
        </div>
        <div className="flex-1 min-w-0">
          <span
            className="text-[11px] font-semibold uppercase mb-1.5 inline-block"
            style={{
              color: "var(--text-muted)",
              letterSpacing: "0.14em",
            }}
          >
            Potensi Desa
          </span>
          <Dialog.Title
            className="font-heading font-bold text-xl sm:text-2xl leading-tight tracking-tight"
            style={{color: "var(--text-primary)"}}
          >
            {vp.title}
          </Dialog.Title>
        </div>
      </div>

      {/* Description */}
      <Dialog.Description
        className="text-sm leading-relaxed mb-6"
        style={{color: "var(--text-secondary)"}}
      >
        {vp.details ?? vp.description}
      </Dialog.Description>

      {/* Location panel */}
      {vp.location && (
        <div
          className="flex items-center gap-3 p-4 rounded-xl mb-6"
          style={{
            background: "rgba(74,124,89,0.06)",
            border: "1px solid var(--border)",
          }}
        >
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{background: "rgba(74,124,89,0.10)"}}
          >
            <MapPin className="w-4 h-4" style={{color: "var(--primary)"}} />
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="text-[10px] font-semibold uppercase"
              style={{color: "var(--text-muted)", letterSpacing: "0.12em"}}
            >
              Lokasi
            </p>
            <p
              className="text-sm font-medium"
              style={{color: "var(--text-primary)"}}
            >
              {vp.location}
            </p>
          </div>
        </div>
      )}

      {/* Highlights */}
      {vp.highlights && vp.highlights.length > 0 && (
        <div>
          <div
            className="flex items-center gap-2 mb-3 text-[11px] font-semibold uppercase"
            style={{color: "var(--text-muted)", letterSpacing: "0.14em"}}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Keunggulan
          </div>
          <ul className="space-y-2">
            {vp.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm leading-relaxed"
                style={{color: "var(--text-secondary)"}}
              >
                <span
                  className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                  style={{background: "var(--primary)"}}
                />
                {h}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
