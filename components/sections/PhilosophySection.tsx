"use client";

import {motion} from "framer-motion";
import {Lightbulb, Palette, Star, Quote} from "lucide-react";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {staggerContainer, scaleUp} from "@/lib/motion";

const philosophyCards = [
  {
    icon: Lightbulb,
    title: "Makna JamaLights",
    accent: "from-primary-500 to-primary-700",
    iconBg: "bg-primary-50 dark:bg-primary-900/20",
    iconColor: "text-primary-600 dark:text-primary-400",
    content:
      '"Jama" berasal dari kata Arab yang berarti bersama/berkumpul, merepresentasikan kebersamaan kelompok kami. "Lights" melambangkan cahaya, harapan, dan penerangan yang kami bawa ke desa.',
  },
  {
    icon: Star,
    title: "Filosofi Logo",
    accent: "from-sky-400 to-sky-600",
    iconBg: "bg-sky-50 dark:bg-sky-900/20",
    iconColor: "text-sky-600 dark:text-sky-400",
    content:
      "Logo menampilkan gunung, sawah, dan jalan sebagai simbol pertumbuhan, kehidupan desa, serta perjalanan bersama menuju perubahan yang berkelanjutan.",
  },
  {
    icon: Palette,
    title: "Filosofi Warna",
    accent: "from-amber-400 to-amber-600",
    iconBg: "bg-amber-50 dark:bg-amber-900/20",
    iconColor: "text-amber-600 dark:text-amber-400",
    content:
      "Hijau melambangkan pertumbuhan dan harmoni alam. Cokelat dan krem merepresentasikan kehangatan, budaya, serta kedekatan dengan masyarakat.",
  },
  {
    icon: Quote,
    title: "Motto Kami",
    accent: "from-violet-500 to-purple-700",
    iconBg: "bg-violet-50 dark:bg-violet-900/20",
    iconColor: "text-violet-600 dark:text-violet-400",
    content:
      "“Bersama Mengabdi, Menyalakan Potensi” — komitmen untuk memberi kontribusi nyata dan tumbuh bersama masyarakat Desa Jamali.",
  },
];

export function PhilosophySection() {
  return (
    <section
      id="philosophy"
      className="section-padding"
      style={{background: "var(--bg-secondary)"}}
      aria-label="Filosofi"
    >
      <div className="container-max">
        <SectionHeader
          tag="Identitas"
          title="Filosofi"
          titleHighlight="JamaLights"
          subtitle="Setiap elemen identitas kami memiliki makna mendalam yang merepresentasikan nilai dan semangat kelompok."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-60px"}}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {philosophyCards.map((card) => (
            <motion.div
              key={card.title}
              variants={scaleUp}
              className="relative group p-6 rounded-2xl card-earthy card-hover overflow-hidden"
            >
              {/* Top accent hairline — animates in on hover */}
              <div
                aria-hidden="true"
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${card.accent} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              />

              <div
                className={`w-12 h-12 rounded-xl ${card.iconBg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
              >
                <card.icon className={`w-6 h-6 ${card.iconColor}`} />
              </div>
              <h3
                className="font-heading font-bold mb-3 tracking-tight"
                style={{color: "var(--text-primary)"}}
              >
                {card.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{color: "var(--text-secondary)"}}
              >
                {card.content}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
