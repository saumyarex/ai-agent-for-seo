"use client";

import React from "react";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import ComparisonColumns from "../ui/ComparisonColumns";
import Reveal from "../ui/Reveal";

function ReframeSection() {
  return (
    <Section id="reframe">
      <SectionHeading
        eyebrow="The shift"
        title="You don't need another SEO tool."
        titleHighlight="You need a system."
      />

      <div className="mt-12">
        <ComparisonColumns
          left={{
            title: "Old SEO",
            items: [
              "You do the work",
              "Tools assist",
              "Results are slow",
            ],
          }}
          right={{
            title: "New SEO",
            items: [
              "You define the goal",
              "The system executes",
              "Results compound",
            ],
          }}
        />
      </div>

      <Reveal delay={0.2}>
        <p className="font-pixelify mx-auto mt-12 max-w-2xl text-center text-2xl leading-snug text-neutral-950 sm:text-3xl">
          SEO is no longer something you <em className="text-black/55">do</em>.
          <br />
          It&rsquo;s something you <span className="text-[#D97706]">run</span>.
        </p>
      </Reveal>
    </Section>
  );
}

export default ReframeSection;
