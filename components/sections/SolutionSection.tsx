"use client";

import React from "react";
import { Compass, Target, Zap, TrendingUp } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import StepCard from "../ui/StepCard";
import Reveal from "../ui/Reveal";

const steps = [
  {
    icon: Compass,
    title: "Finds opportunities",
    description:
      "Discovers what can move your traffic right now — gaps, queries, and content ready to rank.",
  },
  {
    icon: Target,
    title: "Decides what matters",
    description:
      "Cuts through noise and gives you clear priorities, ranked by real impact.",
  },
  {
    icon: Zap,
    title: "Executes changes",
    description:
      "Updates content, fixes technical issues, and improves structure — automatically.",
  },
  {
    icon: TrendingUp,
    title: "Improves continuously",
    description:
      "Learns from every change, adapts the strategy, and compounds results over time.",
  },
];

function SolutionSection() {
  return (
    <Section id="solution" className="bg-[#f7f7f3]">
      <SectionHeading
        eyebrow="The solution"
        title="Meet your autonomous"
        titleHighlight="SEO system."
        description="Not another tool you have to operate. A system that continuously grows your visibility — while you stay in control."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.05}>
            <StepCard
              index={i + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default SolutionSection;
