"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Infinity as InfinityIcon } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

type Pain = {
  title: string;
  subtext: string;
  visual: "search" | "chart" | "clock" | "race" | "loop";
};

const pains: Pain[] = [
  {
    title: "Search is changing faster than you can keep up.",
    subtext:
      "AI answers steal clicks before users even reach your site. Fewer clicks. Less visibility. Same traffic, gone.",
    visual: "search",
  },
  {
    title: "You don’t lack data — you lack direction.",
    subtext:
      "You jump between tools, export reports, stare at numbers… and still don’t know what to do next.",
    visual: "chart",
  },
  {
    title: "Everything takes longer than it should.",
    subtext:
      "One blog = keyword research → outline → writing → optimization → internal links → publishing. It eats hours. Every single time.",
    visual: "clock",
  },
  {
    title: "And while you’re figuring it out…",
    subtext: "someone else already shipped 10 pages and took your spot.",
    visual: "race",
  },
];

const finale = {
  icon: InfinityIcon,
  title: "So you stay busy — but nothing compounds.",
  subtext:
    "You’re stuck in the cycle of doing SEO, but never seeing SEO work.",
};

function MiniVisual({ kind }: { kind: Pain["visual"] }) {
  const reduce = useReducedMotion();
  const common = "absolute inset-0 w-full h-full";

  if (kind === "search") {
    return (
      <svg viewBox="0 0 160 80" className={common} aria-hidden>
        <defs>
          <linearGradient id="fade1" x1="0" x2="1">
            <stop offset="0" stopColor="var(--brand)" stopOpacity="0.9" />
            <stop offset="1" stopColor="var(--brand)" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <rect x="8" y="14" width="110" height="8" rx="4" fill="#000" opacity="0.08" />
        <rect x="8" y="30" width="86" height="6" rx="3" fill="#000" opacity="0.06" />
        <rect x="8" y="44" width="70" height="6" rx="3" fill="#000" opacity="0.05" />
        <rect x="8" y="58" width="54" height="6" rx="3" fill="#000" opacity="0.04" />
        <motion.rect
          x="0"
          y="0"
          width="160"
          height="80"
          fill="url(#fade1)"
          initial={{ x: -160 }}
          animate={reduce ? { x: 0 } : { x: [-160, 160, -160] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          opacity="0.35"
        />
        <g transform="translate(118,16)">
          <rect width="34" height="14" rx="7" fill="var(--brand)" />
          <text x="17" y="10" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="700">
            AI
          </text>
        </g>
      </svg>
    );
  }

  if (kind === "chart") {
    const bars = [28, 52, 18, 44, 12, 36, 22];
    return (
      <svg viewBox="0 0 160 80" className={common} aria-hidden>
        {bars.map((h, i) => (
          <motion.rect
            key={i}
            x={10 + i * 21}
            width="12"
            rx="2"
            fill="var(--brand)"
            opacity={0.25 + (i % 3) * 0.15}
            initial={{ y: 70, height: 0 }}
            whileInView={{ y: 70 - h, height: h }}
            transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        ))}
        <line x1="4" y1="70" x2="156" y2="70" stroke="#000" strokeOpacity="0.1" />
      </svg>
    );
  }

  if (kind === "clock") {
    const steps = ["research", "outline", "write", "optimize", "links", "publish"];
    return (
      <div className={`${common} flex flex-wrap items-center gap-1.5 p-3`}>
        {steps.map((s, i) => (
          <React.Fragment key={s}>
            <motion.span
              initial={{ opacity: 0, y: 4 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
              className="rounded-md border border-black/10 bg-white px-2 py-0.5 text-[10px] font-medium text-black/60 shadow-[0_1px_0_rgba(0,0,0,0.04)]"
            >
              {s}
            </motion.span>
            {i < steps.length - 1 && (
              <span className="text-[10px] text-brand/60">→</span>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }

  if (kind === "race") {
    return (
      <svg viewBox="0 0 160 80" className={common} aria-hidden>
        <line x1="0" y1="56" x2="160" y2="56" stroke="#000" strokeOpacity="0.08" strokeDasharray="3 3" />
        <motion.g
          initial={{ x: 0 }}
          whileInView={{ x: 110 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <rect x="0" y="44" width="28" height="14" rx="3" fill="var(--brand)" />
          <text x="14" y="54" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="700">
            them
          </text>
        </motion.g>
        <motion.g
          initial={{ x: 0 }}
          whileInView={{ x: 30 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <rect x="0" y="62" width="28" height="14" rx="3" fill="#000" opacity="0.35" />
          <text x="14" y="72" textAnchor="middle" fontSize="8" fill="#fff" fontWeight="700">
            you
          </text>
        </motion.g>
      </svg>
    );
  }

  return null;
}

function PainCard({ pain, index }: { pain: Pain; index: number }) {
  const { title, subtext } = pain;

  return (
    <div className="h-full">
      <div
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-transparent p-5 transition-all duration-300 hover:border-black/10 hover:bg-white/60 hover:shadow-[0_10px_30px_-12px_rgba(0,0,0,0.08)] hover:backdrop-blur-sm"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-brand/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-pixelify text-[11px] tracking-widest text-brand/70">
              0{index + 1}
            </span>
            <span className="h-px flex-1 bg-gradient-to-r from-brand/20 to-transparent" />
          </div>
          <p className="mt-3 text-[17px] leading-6 font-semibold text-black/90">
            {title}
          </p>
          <p className="mt-2 text-sm leading-6 text-black/55">{subtext}</p>
        </div>

        <div className="relative mt-5 h-20 shrink-0 overflow-hidden rounded-xl bg-black/[0.02] ring-1 ring-black/5 transition-colors group-hover:bg-[#F8F8F5]">
          <MiniVisual kind={pain.visual} />
        </div>
      </div>
    </div>
  );
}

function ProblemSection() {
  const reduce = useReducedMotion();
  const FinaleIcon = finale.icon;

  return (
    <Section id="problem" className="relative overflow-hidden bg-[#F8F8F5]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand/10 blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="The loop you’re stuck in"
          title="SEO isn't hard."
          titleHighlight="It's just exhausting."
          description="You're not losing because you're bad at SEO. You're losing because the game changed — and the old playbook still demands all your time."
          align="center"
        />

        <div className="relative mt-16 grid grid-cols-1 sm:grid-cols-2 *:border-b *:border-black/5 [&>*:last-child]:border-b-0 sm:[&>*:nth-last-child(-n+2)]:border-b-0 sm:[&>*:nth-child(odd)]:border-r sm:[&>*:nth-child(odd)]:border-black/5">
          {pains.map((pain, i) => (
            <PainCard key={pain.title} pain={pain} index={i} />
          ))}
        </div>

        <div className="mt-6 flex justify-center" aria-hidden>
          <div className="h-12 w-px bg-linear-to-b from-brand/40 to-transparent" />
        </div>

        <div className="relative mt-2 p-8 sm:p-12">

            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center">
              <motion.span
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-brand text-white ring-1 ring-brand/20 shadow-[0_10px_30px_-10px_rgb(var(--brand-rgb)/0.55)]"
              >
                <FinaleIcon size={26} />
              </motion.span>
              <div className="flex-1">
                <span className="font-pixelify text-[11px] tracking-widest text-brand">
                  THE TRAP
                </span>
                <p className="font-pixelify mt-2 text-2xl leading-tight text-neutral-950 sm:text-3xl md:text-4xl">
                  {finale.title}
                </p>
                <p className="mt-3 max-w-xl text-base leading-7 text-black/60">
                  {finale.subtext}
                </p>
              </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default ProblemSection;
