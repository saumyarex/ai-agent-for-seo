"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";

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
              className="bg-brand ml-auto inline-block h-3 w-px"
            />
          </div>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-brand mt-2.5 h-[3px] rounded-full"
          />
          <p className="mt-1.5 text-[10px] text-black/50">Connected</p>
        </div>
      </div>
    );
  }

  if (kind === "analyze") {
    const lines = [
      "Crawling 412 pages",
      "Mapping 1,284 queries",
      "Ranking opportunities",
    ];
    return (
      <div className={frame}>
        <div className="flex items-center justify-between border-b border-black/5 px-3 py-1.5">
          <span className="font-pixelify text-brand text-[10px] tracking-wider">
            ANALYZING
          </span>
          <motion.span
            aria-hidden
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            className="border-brand/30 border-t-brand inline-block h-2.5 w-2.5 rounded-full border-[1.5px]"
          />
        </div>
        <div className="space-y-1.5 p-3">
          {lines.map((l, i) => (
            <motion.div
              key={l}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 + i * 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-1.5"
            >
              <span className="bg-brand h-1 w-1 rounded-full" />
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
          <span className="text-[10px] font-medium text-black/70">
            Auto-approve
          </span>
          <motion.span
            initial={{ backgroundColor: "rgba(0,0,0,0.15)" }}
            whileInView={
              reduce
                ? undefined
                : {
                    backgroundColor: [
                      "rgba(0,0,0,0.15)",
                      "rgba(0,0,0,0.15)",
                      "rgba(217, 119, 6, 1)",
                    ],
                  }
            }
            transition={{
              duration: 0.5,
              delay: 0.4,
              ease: "easeInOut",
              times: [0, 0.9, 1],
            }}
            viewport={{ once: true }}
            className="relative flex h-4 w-9 items-center rounded-full"
          >
            <motion.span
              initial={{ x: 0 }}
              whileInView={reduce ? undefined : { x: 20 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="absolute left-0.5 h-3 w-3 rounded-full bg-white shadow"
            />
          </motion.span>
        </div>
        <div className="flex items-center justify-between rounded-md bg-[#F8F8F5] px-2 py-1.5 ring-1 ring-black/5">
          <span className="text-[10px] font-medium text-black/70">
            Review each change
          </span>
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
    <Section
      id="how-it-works"
      className="relative overflow-hidden bg-white py-16! sm:py-20!"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] [background-size:22px_22px]"
      />

      <div className="relative mx-auto max-w-5xl">
        <SectionHeading title="Set it up once." titleHighlight="Let it run." />

        {/* numbered circles with animated connecting line */}
        <div className="relative mt-12 hidden md:block">
          <div
            aria-hidden
            className="absolute top-1/2 right-12 left-12 h-px -translate-y-1/2 bg-black/5"
          />
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="from-brand/60 via-brand/40 to-brand/20 absolute top-1/2 right-12 left-12 h-px origin-left -translate-y-1/2 bg-linear-to-r"
          />
          <ol className="relative grid grid-cols-3">
            {steps.map((step, i) => (
              <li key={step.title} className="flex justify-center">
                <motion.span
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{
                    delay: 0.2 + i * 0.55,
                    duration: 0.4,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="font-pixelify text-brand ring-brand/30 relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold ring-1"
                >
                  {i + 1}
                </motion.span>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative mt-8 grid grid-cols-1 *:border-b *:border-black/5 md:grid-cols-3 [&>*:last-child]:border-b-0 md:[&>*:not(:nth-child(3n))]:border-r md:[&>*:not(:nth-child(3n))]:border-black/5 md:[&>*:nth-last-child(-n+3)]:border-b-0">
          {steps.map((step) => (
            <div key={step.title} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-transparent p-5 transition-colors duration-300">
                <div className="flex-1">
                  <p className="text-[17px] leading-6 font-semibold text-black/90">
                    {step.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-black/55">
                    {step.description}
                  </p>
                </div>
                <div className="relative mt-5 h-28 shrink-0 overflow-hidden rounded-xl bg-black/[0.02] ring-1 ring-black/5">
                  <Mock kind={step.mock} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default HowItWorksSection;
