"use client";

import {useState} from "react";
import {motion} from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import {
  Monitor,
  Heart,
  ShoppingBag,
  Leaf,
  BookOpen,
  Music,
  ArrowUpRight,
  X,
  Target,
  Calendar as CalendarIcon,
  MapPin,
  ListChecks,
} from "lucide-react";
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
  const [selected, setSelected] = useState<WorkProgram | null>(null);

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
          subtitle="Program-program unggulan yang dirancang berdasarkan kebutuhan nyata masyarakat desa. Klik kartu untuk detail lengkap."
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
              <motion.button
                key={program.id}
                variants={fadeUp}
                onClick={() => setSelected(program)}
                aria-label={`Lihat detail program ${program.name}`}
                className="group relative p-6 rounded-2xl card-earthy card-hover text-left w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
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
                  className="text-sm leading-relaxed mb-4 line-clamp-2"
                  style={{color: "var(--text-secondary)"}}
                >
                  {program.description}
                </p>
                <div
                  className="flex items-center justify-between gap-2 pt-4 border-t"
                  style={{borderColor: "var(--border)"}}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <span
                      className="text-[11px] font-semibold uppercase flex-shrink-0"
                      style={{
                        color: "var(--text-muted)",
                        letterSpacing: "0.10em",
                      }}
                    >
                      Target
                    </span>
                    <span
                      className="text-xs font-medium truncate"
                      style={{color: "var(--text-secondary)"}}
                    >
                      · {program.target}
                    </span>
                  </div>
                  <ArrowUpRight
                    className="w-4 h-4 flex-shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{color: "var(--primary)"}}
                  />
                </div>
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
          <Dialog.Overlay
            className="fixed inset-0 z-[100] bg-black/55 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out"
            style={{
              animationDuration: "200ms",
              opacity: 1,
            }}
          />
          <Dialog.Content
            className="fixed left-1/2 top-1/2 z-[101] -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-lg max-h-[88vh] overflow-y-auto rounded-2xl shadow-[0_20px_60px_rgba(28,51,32,0.30)] focus:outline-none"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
            }}
            aria-describedby={undefined}
          >
            {selected && <ProgramDetailContent program={selected} />}
            <Dialog.Close
              aria-label="Tutup detail program"
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

function ProgramDetailContent({program}: {program: WorkProgram}) {
  const Icon = iconMap[program.icon] || Monitor;
  const status = statusConfig[program.status];

  return (
    <div className="p-6 sm:p-8">
      {/* Header */}
      <div className="flex items-start gap-4 mb-5 pr-10">
        <div className="w-14 h-14 rounded-2xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center flex-shrink-0">
          <Icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1.5">
            <span
              className="text-[11px] font-semibold uppercase"
              style={{
                color: "var(--text-muted)",
                letterSpacing: "0.14em",
              }}
            >
              Divisi {program.division}
            </span>
            <span
              className={`px-2 py-0.5 rounded-full text-[10px] font-semibold ${status.color}`}
            >
              {status.label}
            </span>
          </div>
          <Dialog.Title
            className="font-heading font-bold text-xl sm:text-2xl leading-tight tracking-tight"
            style={{color: "var(--text-primary)"}}
          >
            {program.name}
          </Dialog.Title>
        </div>
      </div>

      {/* Description */}
      <Dialog.Description
        className="text-sm leading-relaxed mb-6"
        style={{color: "var(--text-secondary)"}}
      >
        {program.details ?? program.description}
      </Dialog.Description>

      {/* Meta panel */}
      <div
        className="grid grid-cols-1 gap-3 p-4 rounded-xl mb-6"
        style={{
          background: "rgba(74,124,89,0.06)",
          border: "1px solid var(--border)",
        }}
      >
        <MetaRow icon={Target} label="Target" value={program.target} />
        {program.schedule && (
          <MetaRow
            icon={CalendarIcon}
            label="Jadwal"
            value={program.schedule}
          />
        )}
        {program.location && (
          <MetaRow icon={MapPin} label="Lokasi" value={program.location} />
        )}
      </div>

      {/* Activities */}
      {program.activities && program.activities.length > 0 && (
        <div>
          <div
            className="flex items-center gap-2 mb-3 text-[11px] font-semibold uppercase"
            style={{color: "var(--text-muted)", letterSpacing: "0.14em"}}
          >
            <ListChecks className="w-3.5 h-3.5" />
            Aktivitas
          </div>
          <ul className="space-y-2">
            {program.activities.map((a, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-sm leading-relaxed"
                style={{color: "var(--text-secondary)"}}
              >
                <span
                  className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                  style={{background: "var(--primary)"}}
                />
                {a}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

function MetaRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{background: "rgba(74,124,89,0.10)"}}
      >
        <Icon className="w-4 h-4" style={{color: "var(--primary)"}} />
      </div>
      <div className="flex-1 min-w-0">
        <p
          className="text-[10px] font-semibold uppercase"
          style={{color: "var(--text-muted)", letterSpacing: "0.12em"}}
        >
          {label}
        </p>
        <p
          className="text-sm font-medium"
          style={{color: "var(--text-primary)"}}
        >
          {value}
        </p>
      </div>
    </div>
  );
}
