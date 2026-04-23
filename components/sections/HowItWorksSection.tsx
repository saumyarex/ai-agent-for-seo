"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

type Step = {
  title: string;
  description: string;
  mock: "connect" | "analyze" | "approve";
};

const steps: Step[] = [
  {
    title: "Connect your website",
    description: "Plug in your site and data sources. Takes minutes.",
    mock: "connect",
  },
  {
    title: "The system starts working",
    description:
      "It analyzes performance, spots opportunities, and begins executing.",
    mock: "analyze",
  },
  {
    title: "You approve — or automate",
    description: "Review every action, or let it run hands-off. Your call.",
    mock: "approve",
  },
];

function Mock({ kind }: { kind: Step["mock"] }) {
  const reduce = useReducedMotion();
  const frame =
    "relative h-full w-full rounded-lg bg-white ring-1 ring-black/5 overflow-hidden";

  if (kind === "connect") {
    return (
      <div className={frame}>
        <div className="flex items-center gap-1.5 border-b border-black/5 px-3 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-black/15" />
        </div>
        <div className="p-3">
          <p className="text-[10px] text-black/50">Your site</p>
          <div className="mt-1.5 flex items-center gap-2 rounded-md bg-[#F8F8F5] px-2 py-1.5 ring-1 ring-black/5">
            <span className="text-[11px] text-black/70">
              https://yoursite.com
            </span>
            <motion.span
              animate={reduce ? undefined : { opacity: [1, 0, 1] }}
              transition={{ duration: 1.1, repeat: Infinity }}
              className="ml-auto inline-block h-3 w-px bg-brand"
            />
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-2.5 h-[3px] rounded-full bg-brand"
          />
          <p className="mt-1.5 text-[10px] text-black/50">Connected</p>
        </div>
      </div>
    );
  }

  if (kind === "analyze") {
    const lines = ["Crawling 412 pages", "Mapping 1,284 queries", "Ranking opportunities"];
    return (
      <div className={frame}>
        <div className="flex items-center justify-between border-b border-black/5 px-3 py-1.5">
          <span className="font-pixelify text-[10px] tracking-wider text-brand">
            ANALYZING
          </span>
          <motion.span
            aria-hidden
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            className="inline-block h-2.5 w-2.5 rounded-full border-[1.5px] border-brand/30 border-t-brand"
          />
        </div>
        <div className="p-3 space-y-1.5">
          {lines.map((l, i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-1.5"
            >
              <span className="h-1 w-1 rounded-full bg-brand" />
              <span className="text-[10px] text-black/65">{l}</span>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={frame}>
      <div className="flex h-full flex-col justify-center gap-2 p-3">
        <div className="flex items-center justify-between rounded-md bg-[#F8F8F5] px-2 py-1.5 ring-1 ring-black/5">
          <span className="text-[10px] font-medium text-black/70">Auto-approve</span>
          <motion.span
            initial={{ x: 0 }}
            whileInView={{ x: 10 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative flex h-4 w-9 items-center rounded-full bg-brand"
          >
            <span className="absolute left-0.5 h-3 w-3 rounded-full bg-white shadow" />
          </motion.span>
        </div>
        <div className="flex items-center justify-between rounded-md bg-[#F8F8F5] px-2 py-1.5 ring-1 ring-black/5">
          <span className="text-[10px] font-medium text-black/70">Review each change</span>
          <span className="relative flex h-4 w-9 items-center rounded-full bg-black/10">
            <span className="absolute left-0.5 h-3 w-3 rounded-full bg-white shadow" />
          </span>
        </div>
      </div>
    </div>
  );
}

function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="relative overflow-hidden bg-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="How it works"
          title="Set it up once."
          titleHighlight="Let it run."
        />

        <div className="relative mt-14">
          {/* animated progress line */}
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pointer-events-none absolute top-5 right-12 left-12 hidden h-[2px] origin-left bg-gradient-to-r from-brand/60 via-brand/30 to-transparent md:block"
          />

          <ol className="grid gap-5 md:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1} as="li">
                <div className="relative flex flex-col">
                  <div className="flex items-center gap-3">
                    <span className="font-pixelify relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-brand ring-1 ring-brand/25 shadow-[0_6px_18px_-8px_rgb(var(--brand-rgb)/0.4)]">
                      {i + 1}
                    </span>
                    <span className="h-px flex-1 bg-gradient-to-r from-brand/20 to-transparent" />
                  </div>

                  <p className="mt-5 text-lg font-semibold text-neutral-950">
                    {step.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-6 text-black/55">
                    {step.description}
                  </p>

                  <div className="relative mt-5 h-28 overflow-hidden rounded-xl bg-[#F8F8F5] ring-1 ring-black/5">
                    <Mock kind={step.mock} />
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

export default HowItWorksSection;
