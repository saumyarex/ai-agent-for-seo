"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import Reveal from "../ui/Reveal";
import Button from "../Button";

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

        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-3 py-1 text-xs font-medium text-[#1f2937] backdrop-blur-md">
              Early access
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-pixelify mt-5 text-4xl leading-tight font-medium text-neutral-950 sm:text-5xl md:text-6xl">
              Stop doing SEO.
              <br />
              <span className="text-black/45">Start running it.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-black/65">
              Be among the first to try it. Limited spots for early users.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-8 flex flex-col items-center gap-3">
              <Button
                title="Get Early Access"
                rightIcon={ArrowRight}
                isLink
                href="#early-access"
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
