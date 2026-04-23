"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { Compass, Target, Zap, TrendingUp } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const nodes = [
  {
    icon: Compass,
    title: "Finds",
    description: "Spots gaps, queries, and content ready to rank.",
  },
  {
    icon: Target,
    title: "Decides",
    description: "Prioritizes what actually moves the needle.",
  },
  {
    icon: Zap,
    title: "Executes",
    description: "Ships updates, fixes, and structure changes.",
  },
  {
    icon: TrendingUp,
    title: "Compounds",
    description: "Learns from each change, then improves again.",
  },
];

function SolutionSection() {
  const reduce = useReducedMotion();

  return (
    <Section id="solution" className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/8 blur-[120px]"
      />

      <div className="relative mx-auto max-w-5xl">
        <Reveal>
          <p className="font-pixelify text-center text-base text-black/55 sm:text-lg">
            SEO is no longer something you{" "}
            <em className="text-black/40">do</em>. It&rsquo;s something you{" "}
            <span className="text-brand">run</span>.
          </p>
        </Reveal>

        <div className="mt-4">
          <SectionHeading
            eyebrow="The system"
            title="Meet your autonomous"
            titleHighlight="SEO system."
            description="A loop that finds what matters, ships the work, and compounds results — while you stay in control."
          />
        </div>

        <div className="relative mt-16">
          {/* desktop connector */}
          <svg
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-7 hidden md:block"
            height="2"
            width="100%"
            preserveAspectRatio="none"
            viewBox="0 0 100 2"
          >
            <motion.line
              x1="6"
              y1="1"
              x2="94"
              y2="1"
              stroke="var(--brand)"
              strokeOpacity="0.45"
              strokeWidth="0.5"
              strokeDasharray="1 1.2"
              initial={{ strokeDashoffset: 0 }}
              animate={reduce ? undefined : { strokeDashoffset: [-4, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
            />
          </svg>

          <ul className="relative grid gap-8 md:grid-cols-4 md:gap-4">
            {nodes.map(({ icon: Icon, title, description }, i) => (
              <Reveal key={title} delay={i * 0.08} as="li">
                <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
                  <div className="relative">
                    <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white text-brand ring-1 ring-brand/25 shadow-[0_8px_20px_-10px_rgb(var(--brand-rgb)/0.35)]">
                      <Icon size={22} />
                    </span>
                    <span className="font-pixelify absolute -top-2 -right-2 z-20 flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[11px] font-bold text-white ring-2 ring-white">
                      {i + 1}
                    </span>
                  </div>
                  <p className="mt-5 text-lg font-semibold text-neutral-950">
                    {title}
                  </p>
                  <p className="mt-1.5 max-w-[14rem] text-sm leading-6 text-black/55 md:max-w-none">
                    {description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.4}>
            <div className="mt-12 flex items-center justify-center gap-2 text-xs font-medium tracking-[0.2em] text-brand/80">
              <motion.span
                aria-hidden
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                ↻
              </motion.span>
              RUNS CONTINUOUSLY
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

export default SolutionSection;
