"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface StepCardProps {
  index: number;
  title: string;
  description: string;
  icon?: LucideIcon;
  tone?: "default" | "dark";
  className?: string;
}

function StepCard({
  index,
  title,
  description,
  icon: Icon,
  tone = "default",
  className = "",
}: StepCardProps) {
  const isDark = tone === "dark";
  const cardClass = isDark
    ? "border-white/10 bg-white/[0.03]"
    : "border-black/6 bg-white";
  const numberClass = isDark ? "text-white/25" : "text-black/15";
  const titleClass = isDark ? "text-white" : "text-neutral-950";
  const descClass = isDark ? "text-white/65" : "text-black/65";

  return (
    <div
      className={`relative rounded-xl border p-6 ${cardClass} ${className}`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`font-pixelify text-4xl leading-none ${numberClass}`}
          aria-hidden
        >
          {String(index).padStart(2, "0")}
        </span>
        {Icon && (
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#D97706]/8 text-[#D97706]">
            <Icon size={18} />
          </div>
        )}
      </div>
      <h3 className={`mt-5 text-lg font-semibold ${titleClass}`}>{title}</h3>
      <p className={`mt-2 text-sm leading-6 ${descClass}`}>{description}</p>
    </div>
  );
}

export default StepCard;
