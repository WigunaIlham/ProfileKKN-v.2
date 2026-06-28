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
      viewport={{once: true, margin: "-60px"}}
      className={cn("mb-16 lg:mb-20", centered && "text-center", className)}
    >
      {tag && <span className="eyebrow mb-5">{tag}</span>}
      <h2 className="section-title mb-5" style={{color: "var(--text-primary)"}}>
        {title}
        {titleHighlight && (
          <>
            {" "}
            <span style={{color: "var(--primary)"}}>{titleHighlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p
          className={cn("section-subtitle", centered && "mx-auto")}
          style={{color: "var(--text-muted)"}}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
