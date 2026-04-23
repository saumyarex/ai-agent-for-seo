"use client";

import React from "react";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "center" | "left";
  tone?: "default" | "dark";
}

function SectionHeading({
  eyebrow,
  title,
  titleHighlight,
  description,
  align = "center",
  tone = "default",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const isDark = tone === "dark";

  const eyebrowClass = isDark
    ? "border-white/15 bg-white/5 text-white/80"
    : "border-black/10 bg-white/70 text-[#1f2937]";

  const titleClass = isDark ? "text-white" : "text-neutral-950";
  const highlightClass = isDark ? "text-white/55" : "text-black/45";
  const descClass = isDark ? "text-white/65" : "text-black/65";

  return (
    <div className={`${alignClass} max-w-3xl`}>
      {eyebrow && (
        <Reveal>
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium backdrop-blur-md ${eyebrowClass}`}
          >
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={`font-pixelify mt-5 text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl ${titleClass}`}
        >
          {title}
          {titleHighlight && (
            <>
              <br />
              <span className={`${highlightClass}`}>{titleHighlight}</span>
            </>
          )}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p
            className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${descClass}`}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

export default SectionHeading;
