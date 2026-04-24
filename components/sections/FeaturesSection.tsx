"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

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
    const items = [
      "Ship /pricing rewrite",
      "Cluster 8 new queries",
      "Fix 3 broken links",
    ];
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
            <span className="text-[10px] font-medium text-black/70">
              {label}
            </span>
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
            className="bg-brand absolute bottom-[-3px] left-0 h-[2px] rounded-full"
          />
        </div>
        <div className="mt-1 flex items-center gap-1.5">
          <span className="bg-brand/15 font-pixelify text-brand rounded-sm px-1.5 py-0.5 text-[9px] tracking-wider">
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
                transition={{
                  delay: 0.25 + i * 0.1,
                  type: "spring",
                  stiffness: 300,
                }}
                viewport={{ once: true }}
                className="bg-brand/15 font-pixelify text-brand flex h-4 items-center gap-1 rounded-full px-1.5 text-[9px] font-bold tracking-wider"
              >
                <span className="bg-brand h-1 w-1 rounded-full" />
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

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <div className="h-full">
      <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-transparent p-5 transition-colors duration-300 hover:border-black/10">
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-pixelify text-brand/70 text-[11px] tracking-widest">
              0{index + 1}
            </span>
            <span className="from-brand/20 h-px flex-1 bg-gradient-to-r to-transparent" />
          </div>
          <p className="mt-3 text-[17px] leading-6 font-semibold text-black/90">
            {feature.title}
          </p>
          <p className="mt-2 text-sm leading-6 text-black/55">
            {feature.description}
          </p>
        </div>
        <div className="relative mt-5 h-20 shrink-0 overflow-hidden rounded-xl bg-black/[0.02] ring-1 ring-black/5">
          <MiniVisual kind={feature.visual} />
        </div>
      </div>
    </div>
  );
}

function FeaturesSection() {
  return (
    <Section
      id="features"
      className="relative overflow-hidden bg-[#FEFEF5] py-16! sm:py-20!"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] [background-size:22px_22px]"
      />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          title="Outcomes,"
          titleHighlight="not dashboards."
          description="Every feature replaces hours of manual work with a clear result."
          align="left"
        />

        <div className="relative mt-10 grid grid-cols-1 *:border-b *:border-black/5 md:grid-cols-3 [&>*:last-child]:border-b-0 md:[&>*:not(:nth-child(3n))]:border-r md:[&>*:not(:nth-child(3n))]:border-black/5 md:[&>*:nth-last-child(-n+3)]:border-b-0">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </Section>
  );
}

export default FeaturesSection;
