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
  title,
  titleHighlight,
  description,
  align = "center",
  tone = "default",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const isDark = tone === "dark";

  const titleClass = isDark ? "text-white" : "text-neutral-950";
  const highlightClass = isDark ? "text-white/55" : "text-black/45";
  const descClass = isDark ? "text-white/65" : "text-black/65";

  return (
    <div className={`${alignClass} max-w-3xl`}>
      <h2
        className={`font-pixelify mt-3 text-3xl leading-tight tracking-tight sm:text-4xl md:text-5xl ${titleClass}`}
      >
        {title}
        {titleHighlight && (
          <>
            <br />
            <span className={`${highlightClass}`}>{titleHighlight}</span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={`mt-3 text-base leading-7 sm:text-lg sm:leading-8 ${descClass}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;
