"use client";

import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import CountUp from "react-countup";
import {stats} from "@/data/stats";
import {staggerContainer, scaleUp} from "@/lib/motion";

export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: "-80px"});

  return (
    <section
      id="stats"
      className="relative section-padding overflow-hidden"
      aria-label="Statistik KKN"
      style={{
        background:
          "linear-gradient(135deg, #2D4A2D 0%, #4A7C59 50%, #3A6347 100%)",
      }}
    >
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Decorative blobs */}
      <div
        className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-10"
        style={{background: "#C4932A", transform: "translate(30%, -30%)"}}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{background: "#C4932A", transform: "translate(-30%, 30%)"}}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#F5F0E8 1px,transparent 1px),linear-gradient(to bottom,#F5F0E8 1px,transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

      <div className="container-max relative">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5"
        >
          {stats.map((stat) => (
            <motion.div key={stat.id} variants={scaleUp}>
              <div
                className="flex flex-col items-center p-6 rounded-2xl text-center transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "rgba(245,240,232,0.10)",
                  border: "1px solid rgba(245,240,232,0.15)",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(245,240,232,0.16)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(245,240,232,0.10)";
                }}
              >
                <div
                  className="font-heading font-black mb-1"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.8rem)",
                    color: "#F5F0E8",
                  }}
                >
                  {stat.prefix}
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.2}
                      delay={0.1}
                      separator="."
                    />
                  ) : (
                    "0"
                  )}
                  {stat.suffix}
                </div>
                <div
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{color: "#C4932A"}}
                >
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
