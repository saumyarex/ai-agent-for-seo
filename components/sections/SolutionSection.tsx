"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

type NodeKind = "finds" | "decides" | "executes" | "compounds";

const nodes: {
  kind: NodeKind;
  title: string;
  description: string;
}[] = [
  {
    kind: "finds",
    title: "Finds",
    description: "Spots gaps, queries, and content ready to rank.",
  },
  {
    kind: "decides",
    title: "Decides",
    description: "Prioritizes what actually moves the needle.",
  },
  {
    kind: "executes",
    title: "Executes",
    description: "Ships updates, fixes, and structure changes.",
  },
  {
    kind: "compounds",
    title: "Compounds",
    description: "Learns from each change, then improves again.",
  },
];

/* ------------------------------------------------------------------ */
/*  Isometric scene primitives                                         */
/* ------------------------------------------------------------------ */

function IsoPlatform() {
  // shared isometric floor tile — keeps every diorama anchored to the same plane
  return (
    <g>
      <path
        d="M100 138 L168 168 L100 198 L32 168 Z"
        fill="rgba(217,119,6,0.05)"
        stroke="rgba(217,119,6,0.18)"
        strokeWidth="0.8"
      />
      <path
        d="M100 138 L168 168 M100 138 L32 168 M100 198 L32 168 M100 198 L168 168"
        stroke="rgba(0,0,0,0.05)"
        strokeWidth="0.6"
      />
      {/* subtle inner grid lines */}
      {[0.25, 0.5, 0.75].map((t) => (
        <g key={t} stroke="rgba(0,0,0,0.05)" strokeWidth="0.5">
          <line
            x1={100 - 68 * t}
            y1={138 + 30 * t}
            x2={168 - 68 * t}
            y2={168 + 30 * t}
          />
          <line
            x1={100 + 68 * t}
            y1={138 + 30 * t}
            x2={32 + 68 * t}
            y2={168 + 30 * t}
          />
        </g>
      ))}
    </g>
  );
}

/* Scene 1 — FINDS: a radar sweep over a grid of opportunity dots */
function FindsScene({ reduce }: { reduce: boolean | null }) {
  const dots = [
    { x: 70, y: 150, hit: false },
    { x: 92, y: 162, hit: true },
    { x: 118, y: 152, hit: false },
    { x: 138, y: 168, hit: true },
    { x: 80, y: 174, hit: false },
    { x: 110, y: 180, hit: true },
  ];
  return (
    <svg viewBox="0 0 200 210" className="h-full w-full">
      <IsoPlatform />

      {/* opportunity dots embedded in the floor */}
      {dots.map((d, i) => (
        <motion.circle
          key={i}
          cx={d.x}
          cy={d.y}
          r={d.hit ? 2.4 : 1.6}
          fill={d.hit ? "var(--brand)" : "rgba(0,0,0,0.35)"}
          initial={{ opacity: 0.4 }}
          animate={
            reduce
              ? undefined
              : { opacity: d.hit ? [0.4, 1, 0.4] : [0.3, 0.6, 0.3] }
          }
          transition={{
            duration: 2.4,
            repeat: Infinity,
            delay: i * 0.25,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* magnifying glass — floats above the platform */}
      <motion.g
        initial={{ y: 0 }}
        animate={reduce ? undefined : { y: [-2, 2, -2] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* shadow */}
        <ellipse cx="108" cy="158" rx="14" ry="4" fill="rgba(0,0,0,0.08)" />
        {/* lens ring */}
        <circle
          cx="108"
          cy="118"
          r="20"
          fill="rgba(255,255,255,0.9)"
          stroke="var(--brand)"
          strokeWidth="2.4"
        />
        {/* sweeping highlight inside lens */}
        <motion.path
          d="M108 118 L108 98 A20 20 0 0 1 128 118 Z"
          fill="rgba(217,119,6,0.18)"
          initial={{ rotate: 0 }}
          animate={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: "108px 118px" }}
        />
        {/* handle */}
        <line
          x1="123"
          y1="133"
          x2="138"
          y2="148"
          stroke="var(--brand)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
      </motion.g>
    </svg>
  );
}

/* Scene 2 — DECIDES: stacked iso cards, top one elevated as priority */
function DecidesScene({ reduce }: { reduce: boolean | null }) {
  const card = (cx: number, cy: number, highlight = false, key: string) => (
    <g key={key}>
      {/* top face */}
      <path
        d={`M${cx} ${cy - 8} L${cx + 32} ${cy + 6} L${cx} ${cy + 20} L${cx - 32} ${cy + 6} Z`}
        fill={highlight ? "var(--brand)" : "white"}
        stroke={highlight ? "var(--brand)" : "rgba(0,0,0,0.12)"}
        strokeWidth="1"
      />
      {/* right face */}
      <path
        d={`M${cx} ${cy + 20} L${cx + 32} ${cy + 6} L${cx + 32} ${cy + 12} L${cx} ${cy + 26} Z`}
        fill={highlight ? "rgba(217,119,6,0.7)" : "rgba(0,0,0,0.06)"}
      />
      {/* left face */}
      <path
        d={`M${cx} ${cy + 20} L${cx - 32} ${cy + 6} L${cx - 32} ${cy + 12} L${cx} ${cy + 26} Z`}
        fill={highlight ? "rgba(217,119,6,0.55)" : "rgba(0,0,0,0.04)"}
      />
      {/* row marks on top face */}
      {!highlight && (
        <>
          <line
            x1={cx - 14}
            y1={cy + 2}
            x2={cx + 6}
            y2={cy + 10}
            stroke="rgba(0,0,0,0.18)"
            strokeWidth="0.8"
          />
          <line
            x1={cx - 10}
            y1={cy + 6}
            x2={cx + 2}
            y2={cy + 12}
            stroke="rgba(0,0,0,0.12)"
            strokeWidth="0.8"
          />
        </>
      )}
    </g>
  );

  return (
    <svg viewBox="0 0 200 210" className="h-full w-full">
      <IsoPlatform />

      {/* bottom card */}
      {card(100, 158, false, "b")}
      {/* middle card */}
      {card(100, 138, false, "m")}
      {/* top (priority) card — gently lifts to signal selection */}
      <motion.g
        initial={{ y: 0 }}
        animate={reduce ? undefined : { y: [-2, -8, -2] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      >
        {card(100, 110, true, "t")}
        {/* pin/marker */}
        <circle cx="100" cy="86" r="3.5" fill="var(--brand)" />
        <line
          x1="100"
          y1="89"
          x2="100"
          y2="100"
          stroke="var(--brand)"
          strokeWidth="1.4"
          strokeDasharray="2 2"
        />
      </motion.g>
    </svg>
  );
}

/* Scene 3 — EXECUTES: an iso cube/server with a deploy arrow + ship trail */
function ExecutesScene({ reduce }: { reduce: boolean | null }) {
  return (
    <svg viewBox="0 0 200 210" className="h-full w-full">
      <IsoPlatform />

      {/* iso cube (the system) */}
      <g>
        {/* top face */}
        <path
          d="M100 96 L138 116 L100 136 L62 116 Z"
          fill="white"
          stroke="rgba(0,0,0,0.14)"
          strokeWidth="1"
        />
        {/* right face */}
        <path
          d="M100 136 L138 116 L138 144 L100 164 Z"
          fill="rgba(0,0,0,0.06)"
          stroke="rgba(0,0,0,0.12)"
          strokeWidth="1"
        />
        {/* left face */}
        <path
          d="M100 136 L62 116 L62 144 L100 164 Z"
          fill="rgba(0,0,0,0.03)"
          stroke="rgba(0,0,0,0.12)"
          strokeWidth="1"
        />
        {/* status light pulses on the cube */}
        <motion.circle
          cx="100"
          cy="116"
          r="2.6"
          fill="var(--brand)"
          animate={reduce ? undefined : { opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.6, repeat: Infinity }}
        />
        {/* slot lines */}
        <line
          x1="78"
          y1="128"
          x2="100"
          y2="140"
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="0.8"
        />
        <line
          x1="100"
          y1="146"
          x2="122"
          y2="134"
          stroke="rgba(0,0,0,0.18)"
          strokeWidth="0.8"
        />
      </g>

      {/* outgoing packets — small iso chips flying out along iso-up axis */}
      {[0, 1, 2].map((i) => (
        <motion.g
          key={i}
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={
            reduce
              ? undefined
              : {
                  x: [0, 28, 56],
                  y: [0, -14, -28],
                  opacity: [0, 1, 0],
                }
          }
          transition={{
            duration: 2.2,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeOut",
          }}
        >
          <path
            d="M138 96 L148 101 L138 106 L128 101 Z"
            fill="var(--brand)"
            opacity="0.9"
          />
        </motion.g>
      ))}

      {/* arrow trail line */}
      <path
        d="M138 96 L172 78"
        stroke="rgba(217,119,6,0.35)"
        strokeWidth="1"
        strokeDasharray="2 3"
      />
    </svg>
  );
}

/* Scene 4 — COMPOUNDS: ascending iso bars with a rising curve overlay */
function CompoundsScene({ reduce }: { reduce: boolean | null }) {
  const bars = [
    { x: 64, h: 18 },
    { x: 88, h: 30 },
    { x: 112, h: 46 },
    { x: 136, h: 64 },
  ];
  return (
    <svg viewBox="0 0 200 210" className="h-full w-full">
      <IsoPlatform />

      {bars.map((b, i) => {
        // base anchor on the iso floor — y = 168 is platform mid
        const baseY = 168 - (b.x - 100) * 0.44;
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0.35, y: 6 }}
            animate={
              reduce
                ? { opacity: 1, y: 0 }
                : {
                    opacity: [0.35, 1, 1, 0.55, 0.35],
                    y: [6, 0, 0, 0, 6],
                  }
            }
            transition={{
              duration: 4.2,
              repeat: Infinity,
              delay: i * 0.3,
              times: [0, 0.15, 0.7, 0.9, 1],
              ease: "easeOut",
            }}
          >
            {/* top */}
            <path
              d={`M${b.x} ${baseY - b.h} L${b.x + 12} ${baseY - b.h + 5} L${b.x} ${baseY - b.h + 10} L${b.x - 12} ${baseY - b.h + 5} Z`}
              fill="var(--brand)"
            />
            {/* right */}
            <path
              d={`M${b.x} ${baseY - b.h + 10} L${b.x + 12} ${baseY - b.h + 5} L${b.x + 12} ${baseY + 5} L${b.x} ${baseY + 10} Z`}
              fill="rgba(217,119,6,0.7)"
            />
            {/* left */}
            <path
              d={`M${b.x} ${baseY - b.h + 10} L${b.x - 12} ${baseY - b.h + 5} L${b.x - 12} ${baseY + 5} L${b.x} ${baseY + 10} Z`}
              fill="rgba(217,119,6,0.45)"
            />
          </motion.g>
        );
      })}

      {/* rising curve threading through bar tops — loops */}
      <motion.path
        d="M64 150 Q90 138 112 122 T160 84"
        fill="none"
        stroke="var(--brand)"
        strokeWidth="1.6"
        strokeDasharray="220 220"
        initial={{ strokeDashoffset: 220 }}
        animate={
          reduce
            ? { strokeDashoffset: 0 }
            : { strokeDashoffset: [220, 0, 0, -220] }
        }
        transition={{
          duration: 4.2,
          repeat: Infinity,
          times: [0, 0.45, 0.75, 1],
          ease: "easeInOut",
        }}
      />
      {/* arrowhead on curve end */}
      <motion.circle
        cx="160"
        cy="84"
        r="3"
        fill="var(--brand)"
        animate={
          reduce
            ? { opacity: 1 }
            : { opacity: [0, 1, 1, 0], scale: [0.8, 1.2, 1, 0.8] }
        }
        transition={{
          duration: 4.2,
          repeat: Infinity,
          times: [0.4, 0.5, 0.8, 0.95],
          ease: "easeOut",
        }}
      />
    </svg>
  );
}

function Scene({ kind, reduce }: { kind: NodeKind; reduce: boolean | null }) {
  if (kind === "finds") return <FindsScene reduce={reduce} />;
  if (kind === "decides") return <DecidesScene reduce={reduce} />;
  if (kind === "executes") return <ExecutesScene reduce={reduce} />;
  return <CompoundsScene reduce={reduce} />;
}

/* ------------------------------------------------------------------ */
/*  Section                                                            */
/* ------------------------------------------------------------------ */

function SolutionSection() {
  const reduce = useReducedMotion();

  return (
    <Section id="solution" className="relative overflow-hidden bg-white py-16! sm:py-20!">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(0,0,0,0.04)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_75%)] [background-size:22px_22px]"
      />
      <div
        aria-hidden
        className="bg-brand/8 pointer-events-none absolute top-1/2 left-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <p className="text-center text-base text-black/55 sm:text-lg">
          SEO is no longer something you <em className="text-black/40">do</em>.
          It&rsquo;s something you <span className="text-brand">run</span>.
        </p>

        <div className="mt-4">
          <SectionHeading
            title="Meet your autonomous"
            titleHighlight="SEO system."
          />
        </div>

        <div className="relative mt-16">
          <ul className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            {nodes.map(({ kind, title, description }, i) => {
              const dividerClasses = [
                // i=0: no dividers
                "",
                // i=1: left on sm+ ; top on mobile
                "border-t border-black/8 sm:border-t-0 sm:border-l",
                // i=2: top on mobile & sm; left on md
                "border-t border-black/8 md:border-t-0 md:border-l",
                // i=3: top on mobile & sm; left on sm & md
                "border-t border-black/8 sm:border-l md:border-t-0",
              ][i];
              return (
                <div
                  key={title}
                  className={`group relative flex h-full flex-col overflow-hidden p-3 transition-all duration-300 hover:bg-black/[0.015] ${dividerClasses ?? ""}`}
                >
                  {/* iso scene canvas */}
                  <div className="relative aspect-[5/4] w-full overflow-hidden rounded-xl">
                    <div
                      aria-hidden
                      className="absolute inset-0 opacity-0 transition-opacity duration-300 [background:radial-gradient(ellipse_at_50%_70%,rgba(217,119,6,0.07),transparent_60%)] group-hover:opacity-100"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 [background-image:linear-gradient(60deg,rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(-60deg,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:18px_31px] opacity-0 transition-opacity duration-300 group-hover:opacity-50"
                    />
                    <div className="absolute inset-0 flex items-end justify-center p-2">
                      <Scene kind={kind} reduce={reduce} />
                    </div>
                    {/* step chip */}
                    <span className="font-pixelify absolute top-3 left-3 inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] tracking-[0.18em] text-black/55">
                      <span className="text-brand">0{i + 1}</span>
                      <span className="text-black/30">/</span>
                      <span>04</span>
                    </span>
                  </div>

                  {/* copy */}
                  <div className="flex flex-1 flex-col px-2 pt-4 pb-2">
                    <p className="text-base font-semibold text-neutral-950">
                      {title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-black/55">
                      {description}
                    </p>
                  </div>
                </div>
              );
            })}
          </ul>

          <div className="mt-12 flex items-center justify-center">
            <div className="text-brand/85 font-pixelify ring-brand/20 inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1.5 text-[11px] tracking-[0.22em] ring-1 backdrop-blur">
              <motion.span
                aria-hidden
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="inline-block"
              >
                ↻
              </motion.span>
              RUNS CONTINUOUSLY
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default SolutionSection;
