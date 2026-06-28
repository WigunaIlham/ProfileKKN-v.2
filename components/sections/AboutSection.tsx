"use client";

import {motion} from "framer-motion";
import {Target, Eye, Sparkles} from "lucide-react";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {fadeUp, fadeLeft, fadeRight, staggerContainer} from "@/lib/motion";

export function AboutSection() {
  return (
    <section
      id="about"
      className="section-padding bg-white dark:bg-slate-950"
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
          viewport={{once: true, margin: "-80px"}}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left — Story */}
          <motion.div variants={fadeLeft} className="space-y-6">
            <div className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold text-sm tracking-wide uppercase">
              <Sparkles className="w-4 h-4" />
              Kisah Kami
            </div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white leading-snug">
              Bermula dari sebuah pertemuan,
              <br />
              berkembang menjadi sebuah{" "}
              <span className="gradient-text">keluarga</span>.
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                KKN JamaLights 206 terdiri dari 15 mahasiswa UIN Sunan Gunung
                Djati Bandung yang berasal dari berbagai program studi. Kami
                dipersatukan oleh satu tujuan: memberikan kontribusi terbaik
                bagi masyarakat desa.
              </p>
              <p>
                Selama 40 hari, kami hidup, belajar, dan berkarya bersama
                masyarakat [Nama Desa]. Setiap program yang kami jalankan lahir
                dari kebutuhan nyata yang kami temukan langsung di lapangan.
              </p>
              <p>
                JamaLights bukan sekadar nama kelompok — ini adalah identitas
                kami: cahaya yang hadir untuk menerangi potensi desa dan
                memberdayakan masyarakat dari dalam.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {[
                {value: "15", label: "Mahasiswa"},
                {value: "40", label: "Hari KKN"},
                {value: "12+", label: "Program Kerja"},
              ].map((s) => (
                <div
                  key={s.label}
                  className="text-center p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800"
                >
                  <div className="font-heading font-bold text-2xl text-primary-600 dark:text-primary-400">
                    {s.value}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-500 mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Vision Mission */}
          <motion.div variants={fadeRight} className="space-y-4">
            {[
              {
                icon: Eye,
                color: "text-primary-600 dark:text-primary-400",
                bg: "bg-primary-50 dark:bg-primary-900/20",
                title: "Visi",
                content:
                  "Menjadi kelompok KKN yang berdampak, inovatif, dan mampu menjadi katalisator perubahan positif yang berkelanjutan bagi desa dan masyarakat sekitar.",
              },
              {
                icon: Target,
                color: "text-secondary-500 dark:text-secondary-400",
                bg: "bg-sky-50 dark:bg-sky-900/20",
                title: "Misi",
                content: null,
                missions: [
                  "Melaksanakan program kerja yang relevan dan berdampak nyata",
                  "Memberdayakan masyarakat desa secara holistik dan berkelanjutan",
                  "Membangun kemitraan strategis dengan stakeholder lokal",
                  "Mendokumentasikan dan menyebarluaskan potensi desa kepada publik",
                ],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 card-hover"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}
                  >
                    <item.icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h4>
                    {item.content && (
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {item.content}
                      </p>
                    )}
                    {item.missions && (
                      <ul className="space-y-2">
                        {item.missions.map((m, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-secondary-400 mt-2 flex-shrink-0" />
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
