"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import HeroProduct from "@/components/HeroProduct";

function HeroSection() {
  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#f7f7f3] bg-cover bg-center bg-no-repeat text-neutral-950"
      style={{ backgroundImage: "url('/hero5.png')" }}
    >
      <div className="absolute inset-0 bg-white/5" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.1)_24%,rgba(255,255,255,0.26)_54%,rgba(255,255,255,0.52)_78%,rgba(255,255,255,0.72)_100%)]" />

      <div className="relative z-10 flex min-h-[calc(100vh-7rem)] flex-col px-5 pt-20 pb-10 sm:px-8 md:px-10 lg:px-14 lg:pt-24">
        <div className="mx-auto flex w-full max-w-[1120px] flex-1 flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            //transition={{ duration: 0.5, ease: "easeInOut" }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-[#1f2937] backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-[#003d38]" />
              Ryze AI for modern SEO teams
            </div>

            <h1 className="font-pixelify mx-auto mt-8 text-2xl font-medium text-neutral-950 sm:text-3xl md:max-w-7xl md:text-6xl">
              What if your SEO just… handled itself?
            </h1>

            <p className="mx-auto mt-2 max-w-lg text-sm leading-6 tracking-tight text-black/72 sm:mt-4 sm:text-lg sm:leading-7 md:max-w-xl">
              One AI agent that finds ranking opportunities, builds content
              plans, flags technical blockers, and gives your team the clearest
              next step to win more qualified traffic.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <motion.a
                href="#generator"
                className="group relative inline-flex h-10 items-center gap-0.5 overflow-hidden rounded-lg bg-neutral-950 px-4 text-sm font-medium text-white transition sm:px-5"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="pointer-events-none absolute inset-y-1 -left-10 w-10 rounded-full bg-white/40 opacity-0 blur-md transition-all duration-500 ease-out group-hover:left-[calc(100%+0.5rem)] group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.02)_38%,rgba(255,255,255,0.09)_50%,rgba(255,255,255,0.02)_62%,transparent_100%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative z-10">Start with Ryze</span>
                <ArrowRight
                  size={16}
                  className="relative z-10 transition-all duration-200 group-hover:translate-x-0.5"
                />
              </motion.a>
              <motion.a
                href="#generator"
                className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-black/10 bg-white/72 px-4 text-base font-medium text-[#141414] backdrop-blur-md transition-colors duration-200 hover:bg-white"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play
                  size={16}
                  className="relative z-10 fill-current transition-all duration-200 group-hover:translate-x-0.5"
                />
                <span className="relative z-10">Watch demo</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 20,
              mass: 0.5,
              delay: 0.12,
            }}
            className="relative mt-14 w-full max-w-[1160px]"
          >
            {/* <HeroProduct /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
