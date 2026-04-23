"use client";

import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import RyzeAgentHero from "./RyzeAgentHero";
import Button from "./Button";

function HeroSection() {
  return (
    <section className="min-h-screen bg-[#f7f7f3] bg-cover bg-center bg-no-repeat text-neutral-950">
      {/* Main content container with background */}
      <div
        className="relative z-10 flex min-h-screen w-full flex-col bg-cover bg-center bg-no-repeat px-5 pt-20 sm:px-8 md:px-10 lg:px-14 lg:pt-24"
        style={{ backgroundImage: "url('/hero5.webp')" }}
      >
        {/* white background overlay to create focus */}
        <div className="absolute inset-0 bg-white/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.1)_24%,rgba(255,255,255,0.16)_54%,rgba(255,255,255,0.22)_78%,rgba(255,255,255,0.32)_100%)]" />

        {/* main content */}
        <div className="mx-auto flex w-full max-w-280 flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-[#1f2937] backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-brand" />
              Autonomous SEO — built for modern search.
            </div>

            <h1 className="font-pixelify mx-auto mt-8 w-full text-2xl font-medium text-neutral-950 sm:text-3xl md:max-w-7xl md:text-6xl 2xl:text-8xl">
              <span className="block font-semibold"> Stop Doing SEO</span>
              <span className="block">Let It Run Itself</span>
            </h1>

            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 tracking-tight text-black/72 sm:mt-4 sm:text-lg sm:leading-7 md:max-w-xl">
              An AI system that finds opportunities, creates content, fixes
              technical issues, and gets you cited in AI search — automatically.
              No dashboards. No busywork. Just growth.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button
                title="Start with Ryze"
                rightIcon={ArrowRight}
                isLink
                href="#start"
                variant="primary"
              />
              <Button
                title="Watch demo"
                leftIcon={Play}
                isLink
                href="#demo"
                variant="secondary"
              />
            </div>
            <p className="mt-3 text-xs text-black/55">
              Live now. Join teams already running SEO on autopilot.
            </p>
          </motion.div>

          {/* Ryze agent hero interface */}
          <motion.div
            initial={{ opacity: 0, y: 72, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 18,
              mass: 0.7,
              delay: 0.28,
            }}
            className="mt-6 w-full sm:mt-8 lg:mt-12"
          >
            <RyzeAgentHero />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
