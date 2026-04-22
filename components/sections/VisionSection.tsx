"use client";

import React from "react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import ComparisonColumns from "../ui/ComparisonColumns";

function VisionSection() {
  return (
    <Section id="vision" className="bg-[#f7f7f3]">
      <SectionHeading
        eyebrow="The future"
        title="The future of SEO isn't more work."
        titleHighlight="It's systems that work for you."
      />

      <div className="mt-12">
        <ComparisonColumns
          left={{
            title: "While others",
            items: [
              "Check dashboards",
              "Write generic AI content",
              "React to algorithm changes",
            ],
          }}
          right={{
            title: "You",
            items: [
              "Run a system that adapts",
              "Ship content that gets cited",
              "Compound growth month over month",
            ],
          }}
        />
      </div>
    </Section>
  );
}

export default VisionSection;
