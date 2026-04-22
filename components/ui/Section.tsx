import React from "react";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  tone?: "default" | "dark";
}

function Section({ id, className = "", children, tone = "default" }: SectionProps) {
  const toneClass =
    tone === "dark" ? "bg-neutral-950 text-white" : "text-neutral-950";
  return (
    <section
      id={id}
      className={`${toneClass} px-5 py-24 sm:px-8 sm:py-32 md:px-10 lg:px-14 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export default Section;
