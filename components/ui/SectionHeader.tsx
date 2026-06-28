"use client";

import {motion} from "framer-motion";
import {cn} from "@/lib/utils";
import {fadeUp} from "@/lib/motion";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  tag,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{once: true, margin: "-50px"}}
      className={cn("mb-12 lg:mb-16", centered && "text-center", className)}
    >
      {tag && (
        <span className="badge-earthy mb-4 inline-flex">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{background: "#4A7C59"}}
          />
          {tag}
        </span>
      )}
      <h2 className="section-title mb-4" style={{color: "var(--text-primary)"}}>
        {title}{" "}
        {titleHighlight && (
          <span className="gradient-text-earthy">{titleHighlight}</span>
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "section-subtitle leading-relaxed",
            centered && "mx-auto",
          )}
          style={{color: "var(--text-secondary)"}}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
