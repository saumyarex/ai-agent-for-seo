"use client";

import React from "react";
import { Compass, PenLine, Settings, Eye, Link2 } from "lucide-react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "../ui/FeatureCard";
import Reveal from "../ui/Reveal";

const features = [
  {
    icon: Compass,
    title: "Always know what to do next",
    description:
      "Get 3 clear, high-impact actions — not 50 confusing metrics. No decision fatigue.",
  },
  {
    icon: PenLine,
    title: "Turn thoughts into content that ranks",
    description:
      "Answer a few questions. The system turns your insights into content AI engines actually cite.",
  },
  {
    icon: Settings,
    title: "Fix technical SEO automatically",
    description:
      "No developers. No audits. Your site stays optimized quietly in the background.",
  },
  {
    icon: Eye,
    title: "See when AI recommends you",
    description:
      "Track your visibility across AI search — not just Google rankings. Know when you're cited or missed.",
  },
  {
    icon: Link2,
    title: "No more spreadsheets",
    description:
      "Keyword clustering, internal linking, content updates — all handled for you, end to end.",
  },
];

function FeaturesSection() {
  return (
    <Section id="features">
      <SectionHeading
        eyebrow="What it does"
        title="Outcomes, not dashboards."
        description="Every feature exists to replace hours of manual work with a clear result."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={i * 0.05}>
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export default FeaturesSection;
