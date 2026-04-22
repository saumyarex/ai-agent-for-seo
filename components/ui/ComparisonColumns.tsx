"use client";

import React from "react";
import { Check, X } from "lucide-react";
import Reveal from "./Reveal";

interface Column {
  title: string;
  items: string[];
}

interface ComparisonColumnsProps {
  left: Column;
  right: Column;
  leftMuted?: boolean;
  tone?: "default" | "dark";
}

function ComparisonColumns({
  left,
  right,
  leftMuted = true,
  tone = "default",
}: ComparisonColumnsProps) {
  const isDark = tone === "dark";
  const baseBorder = isDark ? "border-white/10" : "border-black/6";
  const leftBg = isDark ? "bg-white/[0.02]" : "bg-[#fafafa]";
  const rightBg = isDark ? "bg-white/[0.04]" : "bg-white";
  const titleLeft = isDark ? "text-white/55" : "text-black/45";
  const titleRight = isDark ? "text-white" : "text-neutral-950";
  const itemLeft = leftMuted
    ? isDark
      ? "text-white/40 line-through decoration-white/20"
      : "text-black/40 line-through decoration-black/20"
    : isDark
      ? "text-white/70"
      : "text-black/65";
  const itemRight = isDark ? "text-white/85" : "text-neutral-900";

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <Reveal>
        <div className={`rounded-2xl border ${baseBorder} ${leftBg} p-6`}>
          <h3 className={`text-sm font-semibold tracking-wide uppercase ${titleLeft}`}>
            {left.title}
          </h3>
          <ul className="mt-4 space-y-3">
            {left.items.map((item) => (
              <li key={item} className={`flex items-start gap-2 text-sm ${itemLeft}`}>
                <X size={16} className="mt-0.5 shrink-0 opacity-60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <div
          className={`rounded-2xl border ${baseBorder} ${rightBg} p-6 shadow-[0_8px_30px_-16px_rgba(17,24,39,0.12)]`}
        >
          <h3 className={`text-sm font-semibold tracking-wide uppercase ${titleRight}`}>
            {right.title}
          </h3>
          <ul className="mt-4 space-y-3">
            {right.items.map((item) => (
              <li key={item} className={`flex items-start gap-2 text-sm ${itemRight}`}>
                <Check size={16} className="mt-0.5 shrink-0 text-[#D97706]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </div>
  );
}

export default ComparisonColumns;
