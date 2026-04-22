"use client";

import React from "react";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";

const audiences = [
  "Solo founders",
  "Small teams",
  "People tired of doing SEO",
];

function SocialProofSection() {
  return (
    <Section id="who-for">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-[#1f2937] backdrop-blur-md">
            Built for
          </span>
        </Reveal>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {audiences.map((a, i) => (
            <Reveal key={a} delay={i * 0.05}>
              <span className="inline-flex items-center rounded-full border border-black/8 bg-white/80 px-4 py-2 text-sm font-medium text-neutral-900 backdrop-blur-md">
                {a}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 text-base leading-7 text-black/65">
            Join early users testing a new way to grow traffic —
            <br className="hidden sm:block" />
            without the dashboards, the audits, or the weekend work.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

export default SocialProofSection;
