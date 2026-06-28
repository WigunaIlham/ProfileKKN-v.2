"use client";

import {useRef} from "react";
import {motion, useInView} from "framer-motion";
import CountUp from "react-countup";
import {stats} from "@/data/stats";
import {staggerContainer, scaleUp} from "@/lib/motion";

export function StatsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, {once: true, margin: "-60px"});

  return (
    <section
      id="stats"
      className="relative section-padding overflow-hidden"
      aria-label="Statistik KKN"
      style={{
        background:
          "linear-gradient(180deg, #1C3320 0%, #2D4A2D 60%, #1C3320 100%)",
      }}
    >
      {/* Single subtle gold blob */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full blur-3xl opacity-[0.08]"
        style={{background: "#C4932A"}}
      />

      <div className="container-max relative">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{once: true}}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {stats.map((stat) => (
            <motion.div key={stat.id} variants={scaleUp}>
              <div
                className="group flex flex-col items-center p-6 rounded-2xl text-center border transition-all duration-300 hover:-translate-y-1 bg-white/[0.04] border-white/[0.08] backdrop-blur-md hover:bg-white/[0.08] hover:border-white/[0.16]"
              >
                <div
                  className="font-heading font-bold mb-1 tracking-tight"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 2.75rem)",
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
                  className="text-[11px] font-semibold uppercase mt-1"
                  style={{
                    color: "#D4A843",
                    letterSpacing: "0.18em",
                  }}
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
