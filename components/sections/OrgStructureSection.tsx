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
  type LucideIcon,
} from "lucide-react";

interface OrgNode {
  role: string;
  icon: LucideIcon;
  color: string;
}

const ketua: OrgNode = {role: "Ketua", icon: Crown, color: "bg-primary-600"};
const officials: OrgNode[] = [
  {role: "Sekretaris", icon: FileText, color: "bg-sky-500"},
  {role: "Bendahara", icon: Wallet, color: "bg-amber-500"},
];
const divisions: OrgNode[] = [
  {role: "PDD", icon: Camera, color: "bg-violet-500"},
  {role: "Acara", icon: Calendar, color: "bg-green-500"},
  {role: "Logistik", icon: Package, color: "bg-orange-500"},
  {role: "Humas", icon: Users, color: "bg-rose-500"},
];

function Card({
  node,
  big = false,
  pulseDelay = 0,
}: {
  node: OrgNode;
  big?: boolean;
  pulseDelay?: number;
}) {
  return (
    <div
      className={`card-wave relative flex flex-col items-center justify-center gap-2 rounded-2xl text-white transition-all duration-300 hover:-translate-y-0.5 ${node.color} ${
        big
          ? "p-6 min-w-[170px] shadow-[0_8px_24px_rgba(45,74,45,0.18)] hover:shadow-[0_14px_32px_rgba(45,74,45,0.25)]"
          : "p-4 min-w-[110px] shadow-[0_4px_14px_rgba(45,74,45,0.12)] hover:shadow-[0_10px_24px_rgba(45,74,45,0.20)]"
      }`}
      style={{animationDelay: `${pulseDelay}s`}}
    >
      <node.icon
        className={big ? "w-8 h-8" : "w-5 h-5"}
        aria-hidden="true"
      />
      <span
        className={`font-heading font-semibold ${big ? "text-base" : "text-sm"}`}
      >
        {node.role}
      </span>
    </div>
  );
}

// Continuous SVG path — no gaps at junctions.
// Coordinates are percentages of the chart container's bounding box.
// Desktop layout: 3-col Sek/Ben + 4-col divisions.
const DESKTOP_PATH = [
  "M 50 25 L 50 34", // Ketua → bar-1
  "M 16.67 34 L 83.33 34", // bar-1
  "M 16.67 34 L 16.67 42", // bar-1 → Sek
  "M 83.33 34 L 83.33 42", // bar-1 → Ben
  "M 50 34 L 50 71", // center continuing → bar-2
  "M 12.5 71 L 87.5 71", // bar-2
  "M 12.5 71 L 12.5 79", // bar-2 → PDD
  "M 37.5 71 L 37.5 79", // bar-2 → Acara
  "M 62.5 71 L 62.5 79", // bar-2 → Logistik
  "M 87.5 71 L 87.5 79", // bar-2 → Humas
].join(" ");

// Mobile layout: 3-col Sek/Ben + 2×2 divisions grid (PDD/Acara top, Logistik/Humas bottom).
const MOBILE_PATH = [
  // Ketua → H-bar 1
  "M 50 19 L 50 25",
  "M 16.67 25 L 83.33 25", // h-bar 1
  "M 16.67 25 L 16.67 32", // V → Sek
  "M 83.33 25 L 83.33 32", // V → Ben
  // Center V continues from h-bar 1 down to h-bar 2 (div row 1)
  "M 50 25 L 50 56",
  "M 25 56 L 75 56", // h-bar 2
  "M 25 56 L 25 62", // V → PDD (top-left)
  "M 75 56 L 75 62", // V → Acara (top-right)
  // Center V continues down between row-1 cards to h-bar 3 (div row 2)
  "M 50 56 L 50 80",
  "M 25 80 L 75 80", // h-bar 3
  "M 25 80 L 25 86", // V → Logistik (bottom-left)
  "M 75 80 L 75 86", // V → Humas (bottom-right)
].join(" ");

export function OrgStructureSection() {
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
          viewport={{once: true, margin: "-60px"}}
          className="relative mx-auto max-w-3xl"
        >
          {/* SVG connectors — desktop */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none text-primary-500/55 dark:text-primary-400/70 hidden sm:block"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <path
              d={DESKTOP_PATH}
              stroke="currentColor"
              strokeWidth="1.25"
              fill="none"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {/* SVG connectors — mobile */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none text-primary-500/55 dark:text-primary-400/70 sm:hidden"
            preserveAspectRatio="none"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <path
              d={MOBILE_PATH}
              stroke="currentColor"
              strokeWidth="1.25"
              fill="none"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="relative flex flex-col items-center">
            {/* L0: Ketua */}
            <motion.div variants={fadeUp} className="mb-14">
              <Card node={ketua} big pulseDelay={0} />
            </motion.div>

            {/* L1: Sekretaris — Bendahara (3-col grid, middle empty for passthrough) */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-3 items-center w-full mb-14"
            >
              <div className="flex justify-center">
                <Card node={officials[0]} pulseDelay={0.4} />
              </div>
              <div aria-hidden="true" />
              <div className="flex justify-center">
                <Card node={officials[1]} pulseDelay={0.8} />
              </div>
            </motion.div>

            {/* L2: 4 divisions — wider vertical gap on mobile so row 2 sits lower */}
            <motion.div
              variants={fadeUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-14 sm:gap-y-4 w-full"
            >
              {divisions.map((node, i) => (
                <div key={node.role} className="flex justify-center">
                  <Card node={node} pulseDelay={1.2 + i * 0.3} />
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
