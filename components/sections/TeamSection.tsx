"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {Instagram, Crown, ExternalLink} from "lucide-react";
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
  Logistik: {bg: "#4A7C5914", text: "#3A6347", border: "#4A7C5930"},
  Humas: {bg: "#4A7C5914", text: "#3A6347", border: "#4A7C5930"},
};

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

function MemberCard({member}: {member: TeamMember}) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative rounded-2xl overflow-hidden card-earthy"
      aria-label={`${member.name} — ${member.role}`}
    >
      {/* Photo */}
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
          avatarTextClassName="text-2xl"
        />

        {/* Instagram hover overlay */}
        {member.instagram && (
          <Link
            href={member.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`Instagram ${member.name}`}
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
                  background: "rgba(245,240,232,0.2)",
                  border: "1px solid rgba(245,240,232,0.3)",
                }}
              >
                <Instagram className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-semibold tracking-wide">
                Lihat Instagram
              </span>
            </div>
          </Link>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <p
          className="font-heading font-semibold text-sm truncate leading-tight"
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

export function TeamSection() {
  const chairperson = teamMembers.find((m) => m.isChairperson);
  const rest = teamMembers.filter((m) => !m.isChairperson);

  return (
    <section
      id="team"
      className="section-padding"
      style={{background: "var(--bg)"}}
      aria-label="Tim KKN"
    >
      <div className="container-max">
        <SectionHeader
          tag="Anggota"
          title="Kenali"
          titleHighlight="Tim Kami"
          subtitle="13 mahasiswa berdedikasi yang bersatu mengabdi dan berkarya untuk Desa Jamali."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-60px"}}
          className="space-y-6"
        >
          {/* Ketua — featured center */}
          {chairperson && (
            <div className="flex justify-center">
              <motion.article
                variants={fadeUp}
                className="relative rounded-2xl overflow-hidden w-full max-w-[200px]"
                style={{
                  border: "2px solid #4A7C59",
                  boxShadow:
                    "0 12px 40px rgba(45,74,45,0.22), 0 0 0 4px rgba(74,124,89,0.12)",
                  background: "var(--bg-card)",
                }}
                aria-label={`${chairperson.name} — Ketua`}
              >
                {/* Chair crown badge */}
                <div className="absolute top-2.5 right-2.5 z-20">
                  <span
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black"
                    style={{
                      background: "linear-gradient(135deg,#D4A843,#C4932A)",
                      color: "#1C3320",
                    }}
                  >
                    <Crown className="w-2.5 h-2.5" />
                    Ketua
                  </span>
                </div>

                <div
                  className="relative aspect-square overflow-hidden"
                  style={{background: "var(--bg-secondary)"}}
                >
                  <DriveImage
                    driveId={chairperson.driveId}
                    alt={`Foto ${chairperson.name}`}
                    fallbackName={chairperson.name}
                    containerClassName="w-full h-full"
                    size={400}
                    avatarTextClassName="text-3xl"
                    priority
                  />
                  {chairperson.instagram && (
                    <Link
                      href={chairperson.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Instagram ${chairperson.name}`}
                      className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300 z-10"
                      style={{
                        background: "rgba(28,51,32,0.65)",
                        backdropFilter: "blur(4px)",
                      }}
                    >
                      <div
                        className="flex flex-col items-center gap-1.5"
                        style={{color: "#F5F0E8"}}
                      >
                        <Instagram className="w-6 h-6" />
                        <span className="text-[10px] font-semibold">
                          Instagram
                        </span>
                      </div>
                    </Link>
                  )}
                </div>

                <div className="p-4 text-center">
                  <p
                    className="font-heading font-bold"
                    style={{color: "var(--text-primary)"}}
                  >
                    {chairperson.name}
                  </p>
                  <p
                    className="text-xs mt-0.5 mb-2"
                    style={{color: "var(--text-muted)"}}
                  >
                    {chairperson.studyProgram}
                  </p>
                  <div className="flex justify-center">
                    <RoleBadge role="Ketua" />
                  </div>
                  {chairperson.instagram && (
                    <Link
                      href={chairperson.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-[11px] font-medium transition-colors duration-200"
                      style={{color: "var(--primary)"}}
                    >
                      <Instagram className="w-3 h-3" />
                      Instagram
                      <ExternalLink className="w-2.5 h-2.5" />
                    </Link>
                  )}
                </div>
              </motion.article>
            </div>
          )}

          {/* Anggota grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {rest.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
