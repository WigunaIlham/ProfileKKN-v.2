"use client";

import {motion} from "framer-motion";
import {Target, Eye} from "lucide-react";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {fadeLeft, fadeRight, staggerContainer} from "@/lib/motion";

const visionMission = [
  {
    icon: Eye,
    iconBg: "bg-primary-50 dark:bg-primary-900/20",
    iconColor: "text-primary-600 dark:text-primary-400",
    title: "Visi",
    content:
      "Menjadi kelompok KKN yang berdampak, inovatif, dan mampu menjadi katalisator perubahan positif yang berkelanjutan bagi desa dan masyarakat sekitar.",
    missions: undefined as string[] | undefined,
  },
  {
    icon: Target,
    iconBg: "bg-amber-50 dark:bg-amber-900/20",
    iconColor: "text-amber-600 dark:text-amber-400",
    title: "Misi",
    content: undefined,
    missions: [
      "Melaksanakan program kerja yang relevan dan berdampak nyata",
      "Memberdayakan masyarakat desa secara holistik dan berkelanjutan",
      "Membangun kemitraan strategis dengan stakeholder lokal",
      "Mendokumentasikan dan menyebarluaskan potensi desa kepada publik",
    ],
  },
];

const aboutStats = [
  {value: "15", label: "Mahasiswa"},
  {value: "40", label: "Hari KKN"},
  {value: "12+", label: "Program Kerja"},
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{background: "var(--bg)"}}
      aria-label="Tentang KKN"
    >
      <div className="container-max">
        <SectionHeader
          tag="Tentang Kami"
          title="Siapa"
          titleHighlight="JamaLights 206?"
          subtitle="Kelompok KKN yang hadir dengan semangat mengabdi, berinovasi, dan memberikan dampak nyata bagi masyarakat desa."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-60px"}}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left — Story */}
          <motion.div variants={fadeLeft} className="space-y-6">
            <span className="eyebrow">Kisah Kami</span>

            <h3
              className="font-heading font-bold text-2xl sm:text-3xl leading-snug tracking-tight"
              style={{color: "var(--text-primary)"}}
            >
              Bermula dari sebuah pertemuan,
              <br />
              berkembang menjadi sebuah{" "}
              <span className="gradient-text-earthy">keluarga</span>.
            </h3>

            <div
              className="space-y-4 leading-relaxed"
              style={{color: "var(--text-secondary)"}}
            >
              <p>
                KKN JamaLights 206 terdiri dari 15 mahasiswa UIN Sunan Gunung
                Djati Bandung yang berasal dari berbagai program studi. Kami
                dipersatukan oleh satu tujuan: memberikan kontribusi terbaik
                bagi masyarakat desa.
              </p>
              <p>
                Selama 40 hari, kami hidup, belajar, dan berkarya bersama
                masyarakat Desa Jamali. Setiap program yang kami jalankan lahir
                dari kebutuhan nyata yang kami temukan langsung di lapangan.
              </p>
              <p>
                JamaLights bukan sekadar nama kelompok — ini adalah identitas
                kami: cahaya yang hadir untuk menerangi potensi desa dan
                memberdayakan masyarakat dari dalam.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3 pt-4">
              {aboutStats.map((s) => (
                <div
                  key={s.label}
                  className="text-center p-4 rounded-xl card-earthy"
                >
                  <div
                    className="font-heading font-bold text-2xl tracking-tight"
                    style={{color: "var(--primary)"}}
                  >
                    {s.value}
                  </div>
                  <div
                    className="text-xs mt-1"
                    style={{color: "var(--text-muted)"}}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Vision Mission */}
          <motion.div variants={fadeRight} className="space-y-4">
            {visionMission.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl card-earthy card-hover"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-xl ${item.iconBg} flex items-center justify-center flex-shrink-0`}
                  >
                    <item.icon className={`w-5 h-5 ${item.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <h4
                      className="font-heading font-bold text-lg mb-2 tracking-tight"
                      style={{color: "var(--text-primary)"}}
                    >
                      {item.title}
                    </h4>
                    {item.content && (
                      <p
                        className="text-sm leading-relaxed"
                        style={{color: "var(--text-secondary)"}}
                      >
                        {item.content}
                      </p>
                    )}
                    {item.missions && (
                      <ul className="space-y-2">
                        {item.missions.map((m, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-sm leading-relaxed"
                            style={{color: "var(--text-secondary)"}}
                          >
                            <span
                              className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                              style={{background: "var(--primary)"}}
                            />
                            {m}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
