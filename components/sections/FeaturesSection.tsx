"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

type Feature = {
  title: string;
  description: string;
  visual: "nextActions" | "citedContent" | "aiBadge";
};

const features: Feature[] = [
  {
    title: "Always know what to do next",
    description:
      "Three high-impact actions. Not fifty metrics. No decision fatigue.",
    visual: "nextActions",
  },
  {
    title: "Content that gets cited",
    description:
      "Answer a few questions. The system ships content AI engines actually reference.",
    visual: "citedContent",
  },
  {
    title: "See when AI recommends you",
    description:
      "Track visibility across AI search, not just Google. Know when you're cited — or missed.",
    visual: "aiBadge",
  },
];

function MiniVisual({ kind }: { kind: Feature["visual"] }) {
  const reduce = useReducedMotion();
  const common = "absolute inset-0 w-full h-full";

  if (kind === "nextActions") {
    const items = ["Ship /pricing rewrite", "Cluster 8 new queries", "Fix 3 broken links"];
    return (
      <div className={`${common} flex flex-col justify-center gap-1.5 p-3`}>
        {items.map((label, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 rounded-md bg-white px-2 py-1 ring-1 ring-black/5"
          >
            <span
              className={`flex h-3.5 w-3.5 items-center justify-center rounded-sm ${
                i === 0 ? "bg-brand text-white" : "bg-black/5"
              }`}
            >
              {i === 0 ? (
                <svg viewBox="0 0 10 10" className="h-2 w-2" aria-hidden>
                  <path
                    d="M1 5l3 3 5-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : null}
            </span>
            <span className="text-[10px] font-medium text-black/70">{label}</span>
          </motion.div>
        ))}
      </div>
    );
  }

  if (kind === "citedContent") {
    return (
      <div className={`${common} flex flex-col justify-center gap-1.5 p-3`}>
        <div className="h-1.5 w-4/5 rounded-full bg-black/10" />
        <div className="h-1.5 w-3/5 rounded-full bg-black/10" />
        <div className="relative">
          <div className="h-1.5 w-11/12 rounded-full bg-black/10" />
          <motion.div
            aria-hidden
            initial={{ width: 0 }}
            whileInView={{ width: "55%" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute bottom-[-3px] left-0 h-[2px] rounded-full bg-brand"
          />
        </div>
        <div className="mt-1 flex items-center gap-1.5">
          <span className="rounded-sm bg-brand/15 px-1.5 py-0.5 font-pixelify text-[9px] tracking-wider text-brand">
            CITED
          </span>
          <span className="text-[10px] text-black/50">by perplexity</span>
        </div>
      </div>
    );
  }

  if (kind === "aiBadge") {
    const sources = ["ChatGPT", "Perplexity", "Claude"];
    return (
      <div className={`${common} flex flex-col justify-center gap-1 p-3`}>
        {sources.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1 + i * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center justify-between rounded-md bg-white px-2 py-0.5 ring-1 ring-black/5"
          >
            <span className="text-[10px] font-medium text-black/70">{s}</span>
            {i < 2 ? (
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.25 + i * 0.1, type: "spring", stiffness: 300 }}
                viewport={{ once: true }}
                className="flex h-4 items-center gap-1 rounded-full bg-brand/15 px-1.5 font-pixelify text-[9px] font-bold tracking-wider text-brand"
              >
                <span className="h-1 w-1 rounded-full bg-brand" />
                LIVE
              </motion.span>
            ) : (
              <motion.span
                animate={reduce ? undefined : { opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 1.8, repeat: Infinity }}
                className="text-[10px] text-black/35"
              >
                missed
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>
    );
  }

  return null;
}

function FeaturesSection() {
  const reduce = useReducedMotion();
  return (
    <Section id="features" className="relative overflow-hidden bg-[#F8F8F5]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="What it does"
          title="Outcomes,"
          titleHighlight="not dashboards."
          description="Every feature replaces hours of manual work with a clear result."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08} className="h-full">
              <motion.div
                whileHover={reduce ? undefined : { y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-black/5 bg-white/70 p-5 shadow-[0_1px_0_rgba(0,0,0,0.03),0_10px_30px_-12px_rgba(0,0,0,0.08)] backdrop-blur-sm transition-colors hover:border-brand/20"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-brand/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-pixelify text-[11px] tracking-widest text-brand/70">
                      0{i + 1}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-brand/20 to-transparent" />
                  </div>
                  <p className="mt-3 text-[17px] leading-6 font-semibold text-black/90">
                    {feature.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-black/55">
                    {feature.description}
                  </p>
                </div>
                <div className="relative mt-5 h-24 shrink-0 overflow-hidden rounded-xl bg-[#F8F8F5] ring-1 ring-black/5">
                  <MiniVisual kind={feature.visual} />
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
