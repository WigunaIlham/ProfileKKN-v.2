"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {
  Instagram,
  Crown,
  Camera,
  Calendar,
  Megaphone,
  Star,
  type LucideIcon,
} from "lucide-react";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {DriveImage} from "@/components/ui/DriveImage";
import {teamMembers} from "@/data/team";
import {staggerContainer, fadeUp} from "@/lib/motion";
import type {TeamMember} from "@/types";

const roleStyle: Record<string, {bg: string; text: string; border: string}> = {
  Ketua: {bg: "#4A7C5920", text: "#2D4A2D", border: "#4A7C5940"},
  Sekretaris: {bg: "#C4932A20", text: "#6E4A0A", border: "#C4932A40"},
  Bendahara: {bg: "#C4932A20", text: "#6E4A0A", border: "#C4932A40"},
  PDD: {bg: "#4A7C5914", text: "#3A6347", border: "#4A7C5930"},
  Acara: {bg: "#4A7C5914", text: "#3A6347", border: "#4A7C5930"},
  HumLog: {bg: "#4A7C5914", text: "#3A6347", border: "#4A7C5930"},
};

const divisionMeta: {
  role: string;
  title: string;
  icon: LucideIcon;
}[] = [
  {role: "PDD", title: "Publikasi, Dokumentasi & Desain", icon: Camera},
  {role: "Acara", title: "Acara", icon: Calendar},
  {role: "HumLog", title: "Humas & Logistik", icon: Megaphone},
];

function RoleBadge({role}: {role: string}) {
  const s = roleStyle[role] ?? roleStyle.PDD;
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wide border"
      style={{background: s.bg, color: s.text, borderColor: s.border}}
    >
      {role}
    </span>
  );
}

function InstagramOverlay({
  href,
  name,
}: {
  href: string;
  name: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      aria-label={`Instagram ${name}`}
      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
      style={{
        background: "rgba(28,51,32,0.65)",
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        className="flex flex-col items-center gap-1.5"
        style={{color: "#F5F0E8"}}
      >
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(245,240,232,0.18)",
            border: "1px solid rgba(245,240,232,0.28)",
          }}
        >
          <Instagram className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-semibold tracking-wide">
          Lihat Instagram
        </span>
      </div>
    </Link>
  );
}

interface MemberCardProps {
  member: TeamMember;
  highlight?: "chair" | "lead";
}

function MemberCard({member, highlight}: MemberCardProps) {
  const isChair = highlight === "chair";
  const isLead = highlight === "lead";

  return (
    <motion.article
      variants={fadeUp}
      className="group relative rounded-2xl overflow-hidden card-earthy card-hover"
      style={
        isChair
          ? {
              border: "1.5px solid rgba(74,124,89,0.45)",
              boxShadow:
                "0 8px 28px rgba(45,74,45,0.14), 0 0 0 3px rgba(74,124,89,0.08)",
            }
          : isLead
            ? {
                border: "1.5px solid rgba(196,147,42,0.45)",
                boxShadow:
                  "0 8px 28px rgba(196,147,42,0.12), 0 0 0 3px rgba(196,147,42,0.08)",
              }
            : undefined
      }
      aria-label={`${member.name} — ${member.role}`}
    >
      {/* Top-right badge for chair/lead */}
      {(isChair || isLead) && (
        <div className="absolute top-2 right-2 z-20">
          <span
            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold"
            style={{
              background: isChair ? "#C4932A" : "rgba(196,147,42,0.95)",
              color: "#1C3320",
            }}
          >
            {isChair ? (
              <>
                <Crown className="w-2.5 h-2.5" />
                Ketua
              </>
            ) : (
              <>
                <Star className="w-2.5 h-2.5" />
                Lead
              </>
            )}
          </span>
        </div>
      )}

      <div
        className="relative aspect-square overflow-hidden"
        style={{background: "var(--bg-secondary)"}}
      >
        <DriveImage
          driveId={member.driveId}
          alt={`Foto ${member.name}`}
          fallbackName={member.name}
          containerClassName="w-full h-full"
          className="group-hover:scale-105 transition-transform duration-500"
          size={400}
          avatarTextClassName="text-xl"
          priority={isChair}
        />

        {member.instagram && (
          <InstagramOverlay href={member.instagram} name={member.name} />
        )}
      </div>

      <div className="p-3">
        <p
          className="font-heading font-semibold text-sm truncate leading-tight tracking-tight"
          style={{color: "var(--text-primary)"}}
        >
          {member.name}
        </p>
        <p
          className="text-[11px] truncate mt-0.5 mb-2"
          style={{color: "var(--text-muted)"}}
        >
          {member.studyProgram}
        </p>
        <RoleBadge role={member.role} />
      </div>
    </motion.article>
  );
}

/**
 * Single sheep silhouette (Shaun the Sheep–inspired). Centered at (0,0).
 * Fluffy wool body + small head + 2 ears + 4 legs.
 */
function Sheep() {
  return (
    <g>
      {/* Body main blob */}
      <ellipse cx="0" cy="-2" rx="20" ry="10" />
      {/* Wool bumps on top */}
      <circle cx="-13" cy="-9" r="5.5" />
      <circle cx="-5" cy="-12" r="5.5" />
      <circle cx="4" cy="-12" r="5.5" />
      <circle cx="12" cy="-9" r="5.5" />
      {/* Head */}
      <ellipse cx="-21" cy="2" rx="4.5" ry="5.5" />
      {/* Ears */}
      <ellipse
        cx="-23"
        cy="-3"
        rx="1.5"
        ry="3"
        transform="rotate(-15 -23 -3)"
      />
      <ellipse
        cx="-19"
        cy="-4"
        rx="1.5"
        ry="2.8"
        transform="rotate(-25 -19 -4)"
      />
      {/* Legs */}
      <rect x="-12" y="7" width="1.6" height="7" rx="0.6" />
      <rect x="-5" y="7" width="1.6" height="7" rx="0.6" />
      <rect x="3" y="7" width="1.6" height="7" rx="0.6" />
      <rect x="10" y="7" width="1.6" height="7" rx="0.6" />
    </g>
  );
}

// 15 sheep — 1 per team member. Grazing on a flat grass field.
// Coordinates are SVG viewBox units (0-1440 x, 0-220 y) of the meadow strip.
// Grass top is at y=140, so sheep feet rest around y=145-152.
const SHEEP_FLOCK: {x: number; y: number; s: number; flip: boolean}[] = [
  {x: 55, y: 158, s: 0.85, flip: false},
  {x: 145, y: 160, s: 0.95, flip: true},
  {x: 230, y: 156, s: 0.8, flip: false},
  {x: 315, y: 162, s: 0.9, flip: false},
  {x: 405, y: 158, s: 1.0, flip: true},
  {x: 490, y: 162, s: 0.85, flip: false},
  {x: 580, y: 156, s: 0.9, flip: true},
  {x: 670, y: 160, s: 0.95, flip: false},
  {x: 850, y: 162, s: 0.85, flip: true},
  {x: 940, y: 158, s: 0.9, flip: false},
  {x: 1030, y: 162, s: 0.8, flip: true},
  {x: 1115, y: 158, s: 0.95, flip: false},
  {x: 1200, y: 160, s: 1.0, flip: true},
  {x: 1290, y: 156, s: 0.85, flip: false},
  {x: 1375, y: 162, s: 0.9, flip: true},
];

function DivisionHeader({
  title,
  icon: Icon,
}: {
  title: string;
  icon: LucideIcon;
}) {
  return (
    <div className="flex items-center justify-center gap-4 mb-6">
      <div
        className="h-px w-10 sm:w-16"
        style={{background: "var(--border)"}}
      />
      <div
        className="flex items-center gap-2"
        style={{color: "var(--text-muted)"}}
      >
        <Icon className="w-3.5 h-3.5" />
        <span
          className="text-[11px] font-semibold uppercase"
          style={{letterSpacing: "0.18em"}}
        >
          Divisi {title}
        </span>
      </div>
      <div
        className="h-px w-10 sm:w-16"
        style={{background: "var(--border)"}}
      />
    </div>
  );
}

export function TeamSection() {
  const chairperson = teamMembers.find((m) => m.isChairperson);
  const sekretaris = teamMembers.find((m) => m.role === "Sekretaris");
  const bendahara = teamMembers.find((m) => m.role === "Bendahara");

  // Build division groups (lead first, then 3 anggota)
  const divisionGroups = divisionMeta.map(({role, title, icon}) => {
    const members = teamMembers.filter((m) => m.role === role);
    const lead = members.find((m) => m.isLead) ?? members[0];
    const anggota = members.filter((m) => m.id !== lead?.id);
    return {role, title, icon, lead, anggota};
  });

  return (
    <section
      id="team"
      className="relative section-padding overflow-hidden"
      style={{background: "var(--bg)"}}
      aria-label="Tim KKN"
    >
      {/* Padang rumput + 15 sheep — anchored bottom of section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[220px] overflow-hidden opacity-[0.22] dark:opacity-[0.28]"
      >
        <svg
          viewBox="0 0 1440 220"
          preserveAspectRatio="xMidYMax slice"
          className="absolute inset-0 w-full h-full text-primary-700 dark:text-primary-300"
          fill="currentColor"
        >
          {/* Flat grass field — gently wavy top edge */}
          <path
            opacity="0.55"
            d="M0,140 Q180,135 360,140 T720,140 T1080,140 T1440,138 L1440,220 L0,220 Z"
          />

          {/* Scattered grass tufts on the field */}
          <g opacity="0.5">
            {[
              25, 95, 175, 260, 350, 440, 520, 615, 700, 790, 880, 960, 1050,
              1140, 1230, 1320, 1410,
            ].map((x) => (
              <path
                key={x}
                d={`M${x},143 L${x + 2},137 L${x + 4},143 Z M${x + 4},143 L${x + 6},139 L${x + 8},143 Z`}
              />
            ))}
          </g>

          {/* 15 sheep grazing on the meadow */}
          {SHEEP_FLOCK.map(({x, y, s, flip}, i) => (
            <g
              key={i}
              transform={`translate(${x} ${y}) scale(${flip ? -s : s} ${s})`}
            >
              <Sheep />
            </g>
          ))}
        </svg>
      </div>

      <div className="container-max relative">
        <SectionHeader
          tag="Anggota"
          title="Kenali"
          titleHighlight="Tim Kami"
          subtitle="15 mahasiswa berdedikasi yang bersatu mengabdi dan berkarya untuk Desa Jamali."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-60px"}}
          className="max-w-[336px] sm:max-w-[832px] mx-auto space-y-12 sm:space-y-14"
        >
          {/* L0 — Ketua KKN (fixed card width per breakpoint) */}
          {chairperson && (
            <div className="flex justify-center">
              <div className="w-[160px] sm:w-[190px]">
                <MemberCard member={chairperson} highlight="chair" />
              </div>
            </div>
          )}

          {/* L1 — Sekretaris & Bendahara (matches 2 cells of 4-col grid on desktop) */}
          {(sekretaris || bendahara) && (
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-[336px] sm:max-w-[404px] mx-auto">
              {sekretaris && <MemberCard member={sekretaris} />}
              {bendahara && <MemberCard member={bendahara} />}
            </div>
          )}

          {/* L2 — Division groups (2-col mobile, 4-col desktop — all 160/190px) */}
          <div className="space-y-10 sm:space-y-12">
            {divisionGroups.map((group) => (
              <div key={group.role}>
                <DivisionHeader title={group.title} icon={group.icon} />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                  {group.lead && (
                    <MemberCard member={group.lead} highlight="lead" />
                  )}
                  {group.anggota.map((m) => (
                    <MemberCard key={m.id} member={m} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
