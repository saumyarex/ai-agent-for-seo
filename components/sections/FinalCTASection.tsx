"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import Reveal from "../ui/Reveal";
import Button from "../Button";

type Metric = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

const metrics: Metric[] = [
  { label: "Avg. ROAS", value: 5.6, suffix: "x", decimals: 1 },
  { label: "Revenue driven", value: 4.2, prefix: "$", suffix: "M", decimals: 1 },
  { label: "Organic visits", value: 23.5, suffix: "M", decimals: 1 },
  { label: "Keywords on page 1", value: 48, suffix: "k+" },
  { label: "Conversion lift", value: 32, prefix: "+", suffix: "%" },
];

function AnimatedNumber({
  target,
  decimals = 0,
  start,
  duration = 1600,
}: {
  target: number;
  decimals?: number;
  start: boolean;
  duration?: number;
}) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(target * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return <>{value.toFixed(decimals)}</>;
}

function LiveResultsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div
      ref={ref}
      className="mx-auto w-full max-w-4xl rounded-2xl border border-black/5 bg-white/70 p-5 shadow-sm backdrop-blur-md sm:p-6 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none lg:backdrop-blur-none"
    >
      <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] text-neutral-700">
        <span className="inline-block h-2 w-2 bg-emerald-400" />
        LIVE RESULTS · 2,000+ CLIENTS
      </div>

      <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3 md:grid-cols-5">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 8 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.35, delay: i * 0.06 }}
            className="flex flex-col items-center text-center"
          >
            <div className="font-pixelify text-2xl font-bold tabular-nums text-neutral-950 sm:text-3xl">
              {m.prefix}
              <AnimatedNumber
                target={m.value}
                decimals={m.decimals ?? 0}
                start={inView}
              />
              {m.suffix}
            </div>
            <div className="mt-1 text-xs leading-snug text-black/60">
              {m.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2 font-pixelify text-[11px] text-emerald-700">
        <span className="inline-block h-1.5 w-1.5 bg-emerald-400" />
        All systems ok
      </div>
    </div>
  );
}

function FinalCTASection() {
  return (
    <section
      id="cta"
      className="relative isolate overflow-hidden bg-[#f7f7f3] text-neutral-950"
    >
      <div
        className="relative flex min-h-160 w-full flex-col items-center justify-center bg-cover bg-bottom bg-no-repeat px-5 py-24 sm:min-h-180 sm:py-32"
        style={{ backgroundImage: "url('/footer.webp')" }}
      >
        {/* white background overlay to create focus */}
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.1)_24%,rgba(255,255,255,0.16)_54%,rgba(255,255,255,0.22)_78%,rgba(255,255,255,0.32)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.55)_0%,rgba(255,255,255,0.25)_38%,transparent_72%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <Reveal>
            <LiveResultsStrip />
          </Reveal>

          <div className="mt-14 h-px w-24 bg-black/10" />

          <Reveal delay={0.05}>
            <p className="font-pixelify mt-10 text-base text-black/55 sm:text-lg">
              While others still check dashboards,{" "}
              <span className="text-brand">you compound</span>.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-[#1f2937] backdrop-blur-md">
              Available now
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-pixelify mt-5 text-4xl leading-tight font-medium text-neutral-950 sm:text-5xl md:text-6xl">
              Stop doing SEO.
              <br />
              <span className="text-black/45">Start running it.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-black/65">
              Ryze is live. Join the teams already running SEO on autopilot.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-col items-center gap-3">
              <Button
                title="Start with Ryze"
                rightIcon={ArrowRight}
                isLink
                href="#start"
                variant="primary"
              />
              <p className="text-xs text-black/50">
                No spam. No fluff. Just results.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default FinalCTASection;
