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
import {SITE_CONFIG} from "@/constants";
import {staggerContainer, fadeLeft, fadeRight} from "@/lib/motion";

const contactLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+62 812-3456-7890",
    sub: "Hubungi tim kami",
    href: SITE_CONFIG.whatsapp,
    iconBg: "#16a34a20",
    iconColor: "#16a34a",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@kkn.jamalights206",
    sub: "Follow untuk update terbaru",
    href: SITE_CONFIG.instagram,
    iconBg: "#db277720",
    iconColor: "#db2777",
  },
  {
    icon: Mail,
    label: "Email",
    value: SITE_CONFIG.email,
    sub: "Kirim pesan resmi",
    href: `mailto:${SITE_CONFIG.email}`,
    iconBg: "#4A7C5920",
    iconColor: "#4A7C59",
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
          {/* Left — Contact cards */}
          <motion.div variants={fadeLeft} className="flex flex-col gap-4">
            {/* Contact links */}
            <div className="grid sm:grid-cols-1 gap-3">
              {contactLinks.map((c) => (
                <Link
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    c.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-4 p-4 rounded-2xl card-earthy"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{background: c.iconBg}}
                  >
                    <c.icon className="w-5 h-5" style={{color: c.iconColor}} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-xs font-semibold uppercase tracking-wider mb-0.5"
                      style={{color: "var(--text-muted)"}}
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
                    className="w-4 h-4 flex-shrink-0 transition-colors duration-200"
                    style={{color: "var(--text-muted)"}}
                  />
                </Link>
              ))}
            </div>

            {/* Address card */}
            <div
              className="p-5 rounded-2xl"
              style={{
                background:
                  "linear-gradient(135deg, rgba(74,124,89,0.08), rgba(196,147,42,0.05))",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-start gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{background: "#4A7C5920"}}
                >
                  <MapPin className="w-5 h-5" style={{color: "#4A7C59"}} />
                </div>
                <div>
                  <p
                    className="text-xs font-semibold uppercase tracking-wider mb-1"
                    style={{color: "var(--text-muted)"}}
                  >
                    Lokasi KKN
                  </p>
                  <p
                    className="font-heading font-bold"
                    style={{color: "var(--text-primary)"}}
                  >
                    Desa Jamali
                  </p>
                  <p
                    className="text-sm mt-0.5"
                    style={{color: "var(--text-secondary)"}}
                  >
                    Kecamatan Mande, Kabupaten Cianjur
                  </p>
                  <p
                    className="text-sm"
                    style={{color: "var(--text-secondary)"}}
                  >
                    Jawa Barat
                  </p>
                  <Link
                    href="https://maps.google.com/?q=Desa+Jamali,Mande,Cianjur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold transition-colors duration-200"
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

          {/* Right — Google Maps embed */}
          <motion.div variants={fadeRight}>
            <div
              className="w-full h-full min-h-[380px] rounded-2xl overflow-hidden"
              style={{
                border: "1px solid var(--border)",
                boxShadow: "0 4px 24px rgba(45,74,45,0.10)",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.892764609584!2d107.14!3d-6.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69b2d5b8a4e2e1%3A0x4a1234567890abcd!2sDesa%20Jamali%2C%20Mande%2C%20Cianjur%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{border: 0, minHeight: "380px", display: "block"}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi KKN JamaLights 206 — Desa Jamali, Mande, Cianjur"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
