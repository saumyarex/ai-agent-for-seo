"use client";

import { ArrowRight, Play, Sparkles, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import RyzeAgentHero from "./ui/RyzeAgentHero";
import Button from "./ui/Button";

const mainContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const mainChild = {
  hidden: {
    opacity: 0,
    y: 20,
    filter: "blur(20px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.6, 0.9, 0.9, 1] as [number, number, number, number],
    },
  },
};

const headingContainer = {
  hidden: {},
  show: {},
};

const headingChild = {
  hidden: { opacity: 0, y: 20, filter: "blur(15px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.6, 0.9, 0.9, 1] as [number, number, number, number],
      delay: 0.2 + Math.floor(i / 2) * 0.12,
    },
  }),
};

function HeroSection() {
  return (
    <section className="min-h-screen bg-[#f7f7f3] bg-cover bg-center bg-no-repeat text-neutral-950">
      {/* Main content container with background */}
      <div
        className="relative z-10 flex min-h-screen w-full flex-col bg-cover bg-center bg-no-repeat px-5 pt-20 sm:px-8 md:px-10 lg:px-14 lg:pt-24"
        style={{ backgroundImage: "url('/hero5.webp')" }}
      >
        {/* white background overlay to create focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.1)_24%,rgba(255,255,255,0.16)_54%,rgba(255,255,255,0.22)_78%,rgba(255,255,255,0.32)_100%)]" />

        {/* main content */}
        <motion.div
          variants={mainContainer}
          initial="hidden"
          animate="show"
          className="mx-auto flex w-full max-w-280 flex-col items-center text-center"
        >
          <div className="max-w-4xl">
            <motion.div
              variants={mainChild}
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-[#1f2937] backdrop-blur-md"
            >
              <Sparkles className="text-brand h-4 w-4" />
              Autonomous SEO — built for modern search.
            </motion.div>

            <motion.h1
              variants={headingContainer}
              initial="hidden"
              animate="show"
              className="font-pixelify mx-auto mt-8 flex w-full flex-wrap justify-center gap-x-3 text-2xl font-medium text-neutral-950 sm:text-3xl md:max-w-7xl md:text-6xl 2xl:text-8xl"
            >
              <motion.span
                variants={headingChild}
                custom={0}
                className="font-semibold"
              >
                Stop Doing
              </motion.span>
              <motion.span
                variants={headingChild}
                custom={1}
                className="font-semibold"
              >
                SEO
              </motion.span>
              <motion.span
                variants={headingChild}
                custom={2}
                className="block w-full"
              />
              <motion.span variants={headingChild} custom={2}>
                Let It Run
              </motion.span>
              <motion.span variants={headingChild} custom={3}>
                Itself
              </motion.span>
            </motion.h1>

            <motion.p
              variants={mainChild}
              className="mx-auto mt-2 max-w-lg text-sm leading-6 tracking-tight text-black/72 sm:mt-4 sm:text-lg sm:leading-7 md:max-w-xl"
            >
              An AI system that finds opportunities, creates content, fixes
              technical issues, and gets you cited in AI search — automatically.
            </motion.p>

            <motion.div
              variants={mainChild}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
            >
              <Button
                title="Start with Ryze"
                rightIcon={ArrowRight}
                isLink
                href="#start"
                variant="primary"
              />
              <Button
                title="See how it works"
                isLink
                href="#how-it-works"
                variant="secondary"
              />
            </motion.div>
            <motion.p
              variants={mainChild}
              className="mt-3 text-xs text-black/55"
            >
              Live now. Join teams already running SEO on autopilot.
            </motion.p>
          </div>

          {/* Ryze agent hero interface */}
          <motion.div
            variants={mainChild}
            className="mt-6 w-full sm:mt-8 lg:mt-12"
          >
            <RyzeAgentHero />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
