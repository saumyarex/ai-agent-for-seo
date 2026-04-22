"use client";

import React from "react";
import { AlertTriangle, Clock, Search, TrendingDown } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";

const pains = [
  {
    icon: Search,
    text: "Search is shifting to AI answers — fewer clicks, more invisibility.",
  },
  {
    icon: AlertTriangle,
    text: "Tools give you data, but no clear decisions.",
  },
  {
    icon: Clock,
    text: "SEO takes hours you don't have.",
  },
  {
    icon: TrendingDown,
    text: "By the time you act, competitors are already ahead.",
  },
];

function ProblemSection() {
  return (
    <Section id="problem" className="bg-[#f7f7f3]">
      <SectionHeading
        eyebrow="The problem"
        title="SEO isn't hard."
        titleHighlight="It's just exhausting."
        description="You're not losing because you're bad at SEO. You're losing because the game changed — and the old playbook still demands all your time."
      />

      <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2">
        {pains.map(({ icon: Icon, text }, i) => (
          <Reveal key={text} delay={i * 0.05} as="li">
            <div className="flex items-start gap-3 rounded-xl border border-black/6 bg-white p-4">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#D97706]/8 text-[#D97706]">
                <Icon size={16} />
              </div>
              <p className="text-sm leading-6 text-black/75">{text}</p>
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.25}>
        <p className="mx-auto mt-10 max-w-xl text-center text-base text-black/55 italic">
          So you open dashboards, scroll through keywords, save things for
          later… and nothing actually moves.
        </p>
      </Reveal>
    </Section>
  );
}

export default ProblemSection;
