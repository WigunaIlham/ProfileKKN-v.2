"use client";

import {motion} from "framer-motion";
import Link from "next/link";
import {
  MessageCircle,
  Instagram,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";
import {SectionHeader} from "@/components/ui/SectionHeader";
import {ContactForm} from "@/components/ui/ContactForm";
import {SITE_CONFIG} from "@/constants";
import {staggerContainer, fadeLeft, fadeRight, fadeUp} from "@/lib/motion";
import {gmailComposeUrl} from "@/lib/utils";

const contactLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 812-3456-7890",
    sub: "Hubungi tim kami",
    href: SITE_CONFIG.whatsapp,
    accent: "#16a34a",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@kkn.jamalights206",
    sub: "Follow update terbaru",
    href: SITE_CONFIG.instagram,
    accent: "#db2777",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    sub: "Kirim pesan resmi",
    href: gmailComposeUrl(SITE_CONFIG.email),
    accent: "#4A7C59",
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{background: "var(--bg)"}}
      aria-label="Kontak"
    >
      <div className="container-max">
        <SectionHeader
          tag="Hubungi Kami"
          title="Ayo"
          titleHighlight="Berkolaborasi"
          subtitle="Kami terbuka untuk kolaborasi, kemitraan, dan segala bentuk kontribusi positif bagi Desa Jamali."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-60px"}}
          className="grid lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Left — Contact cards + address */}
          <motion.div variants={fadeLeft} className="flex flex-col gap-3">
            {contactLinks.map((c) => (
              <Link
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl card-earthy card-hover"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{background: `${c.accent}1A`}}
                >
                  <c.icon className="w-5 h-5" style={{color: c.accent}} />
                </div>
                <div className="flex-1 min-w-0">
                  <p
                    className="text-[11px] font-semibold uppercase mb-0.5"
                    style={{
                      color: "var(--text-muted)",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {c.label}
                  </p>
                  <p
                    className="font-heading font-semibold text-sm truncate"
                    style={{color: "var(--text-primary)"}}
                  >
                    {c.value}
                  </p>
                  <p
                    className="text-xs mt-0.5"
                    style={{color: "var(--text-muted)"}}
                  >
                    {c.sub}
                  </p>
                </div>
                <ExternalLink
                  className="w-4 h-4 flex-shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--primary)]"
                  style={{color: "var(--text-muted)"}}
                />
              </Link>
            ))}

            {/* Address card */}
            <div
              className="p-5 rounded-2xl border"
              style={{
                background:
                  "linear-gradient(135deg, rgba(74,124,89,0.06), rgba(196,147,42,0.04))",
                borderColor: "var(--border)",
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{background: "rgba(74,124,89,0.12)"}}
                >
                  <MapPin className="w-5 h-5" style={{color: "#4A7C59"}} />
                </div>
                <div>
                  <p
                    className="text-[11px] font-semibold uppercase mb-1"
                    style={{
                      color: "var(--text-muted)",
                      letterSpacing: "0.12em",
                    }}
                  >
                    Lokasi KKN
                  </p>
                  <p
                    className="font-heading font-bold tracking-tight"
                    style={{color: "var(--text-primary)"}}
                  >
                    Desa Jamali
                  </p>
                  <p
                    className="text-sm mt-0.5 leading-relaxed"
                    style={{color: "var(--text-secondary)"}}
                  >
                    Kecamatan Mande, Kabupaten Cianjur · Jawa Barat
                  </p>
                  <Link
                    href="https://maps.google.com/?q=Desa+Jamali,Mande,Cianjur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold transition-colors duration-200 hover:opacity-80"
                    style={{color: "var(--primary)"}}
                  >
                    <MapPin className="w-3 h-3" />
                    Buka di Google Maps
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div variants={fadeRight}>
            <ContactForm />
          </motion.div>
        </motion.div>

        {/* Maps full-width */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{once: true, margin: "-60px"}}
          variants={fadeUp}
          className="mt-12"
        >
          <div
            className="w-full h-[380px] rounded-2xl overflow-hidden border"
            style={{
              borderColor: "var(--border)",
              boxShadow: "0 4px 24px rgba(45,74,45,0.08)",
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.892764609584!2d107.14!3d-6.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b2d5b8a4e2e1%3A0x4a1234567890abcd!2sDesa%20Jamali%2C%20Mande%2C%20Cianjur%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{border: 0, display: "block"}}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi KKN JamaLights 206 — Desa Jamali, Mande, Cianjur"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
