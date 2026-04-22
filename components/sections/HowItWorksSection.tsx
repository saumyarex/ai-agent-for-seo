"use client";

import React from "react";
import { Link as LinkIcon, Sparkles, CircleCheck } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import StepCard from "../ui/StepCard";
import Reveal from "../ui/Reveal";

const steps = [
  {
    icon: LinkIcon,
    title: "Connect your website",
    description: "A few minutes. Plug in your site and data sources — that's it.",
  },
  {
    icon: Sparkles,
    title: "The system starts working",
    description:
      "It analyzes performance, finds opportunities, and begins executing within minutes.",
  },
  {
    icon: CircleCheck,
    title: "You approve or automate",
    description:
      "Review every action — or let it run fully hands-off. You stay in control either way.",
  },
];

function HowItWorksSection() {
  return (
    <Section id="how-it-works" className="bg-[#f7f7f3]">
      <SectionHeading
        eyebrow="How it works"
        title="Set it up once."
        titleHighlight="Let it run."
      />

      <div className="relative mt-14">
        <div
          className="pointer-events-none absolute top-10 right-8 left-8 hidden h-px bg-gradient-to-r from-transparent via-black/10 to-transparent md:block"
          aria-hidden
        />
        <div className="grid gap-4 md:grid-cols-3">
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
      </div>
    </Section>
  );
}

export default HowItWorksSection;
