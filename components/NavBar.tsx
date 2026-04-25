"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Button from "./Button";

const navLinks = [
  {
    href: "#",
    label: "AI Marketer",
    children: [
      { href: "#", label: "AI Marketer" },
      { href: "#", label: "Pricing" },
    ],
  },
  {
    href: "https://www.get-ryze.ai/how-to-connect-claude-to-google-meta-ads-mcp",
    label: "MCP",
  },
  { href: "#", label: "Agency" },
  { href: "#", label: "AI SEO" },
  {
    href: "#",
    label: "About Us",
    children: [
      { href: "#", label: "Our Story" },
      { href: "#", label: "Case Studies" },
      { href: "#", label: "Community" },
    ],
  },
];

const logoLink = "https://www.get-ryze.ai//main-logo-sun-2.png";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.5,
  });

  useEffect(() => {
    const unsubscribe = smoothScrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
    return () => unsubscribe();
  }, [smoothScrollY]);

  return (
    <>
      <motion.header
        className="fixed top-0 right-0 left-0 z-50 px-5 py-3 sm:px-9 md:px-14 lg:px-20"
        initial={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
        animate={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.1)"
            : "rgba(255, 255, 255, 0)",
          backdropFilter: isScrolled ? "blur(12px)" : "blur(0px)",
        }}
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center gap-3"
            aria-label="AdAgent home"
            animate={{ scale: isScrolled ? 0.95 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            <motion.div
              animate={{
                scale: isScrolled ? 0.92 : 1,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <Image
                src={"/main-logo-sun-2.png"}
                width={35}
                height={35}
                alt="Ryze Logo"
              />
            </motion.div>
            <motion.span
              className="text-lg font-semibold text-black sm:text-2xl"
              animate={{
                scale: isScrolled ? 0.92 : 1,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
            >
              Ryze
            </motion.span>
          </motion.a>

          <motion.nav
            className="hidden items-center gap-4 text-sm font-medium text-neutral-700 lg:flex lg:gap-6"
            animate={{
              scale: isScrolled ? 0.9 : 1,
              opacity: isScrolled ? 0.9 : 1,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
          >
            {navLinks.map((link) => (
              <div key={link.label} className="group relative">
                <a
                  href={link.href}
                  className="inline-block text-sm font-medium tracking-wider transition duration-200 hover:-translate-y-0.5 hover:text-neutral-950 focus:translate-y-0 active:translate-y-0 lg:text-base"
                >
                  {link.label}
                </a>
                {link.children && (
                  <div className="pointer-events-none absolute top-full left-1/2 z-50 min-w-44 origin-top -translate-x-1/2 scale-90 pt-3 opacity-0 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100">
                    <div className="rounded-xl border border-neutral-200/60 bg-white/95 p-2 shadow-lg backdrop-blur-md">
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-700 transition hover:bg-neutral-100 hover:text-neutral-950"
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </motion.nav>

          <motion.div
            animate={{ scale: isScrolled ? 0.92 : 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="relative"
          >
            <motion.a
              href="#generator"
              className="group relative hidden h-10 items-center gap-1 overflow-hidden rounded-lg bg-neutral-950 px-4 text-sm font-medium text-white transition sm:px-5 lg:inline-flex"
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
          </motion.div>

          <button
            className="flex items-center justify-center p-2 text-neutral-700 lg:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-white/60 px-5 py-6 pt-24 backdrop-blur-lg sm:px-9 md:px-14 lg:px-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <button
              className="absolute top-6 right-5 p-2 text-neutral-700 sm:right-9 md:top-6 md:right-14 lg:right-20"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col items-start gap-3 text-base font-medium text-neutral-700">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-neutral-950"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    delay: index * 0.05,
                  }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}

              <Button
                title="Start with Ryze"
                rightIcon={ArrowRight}
                variant="primary"
                className="mt-4 cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  delay: navLinks.length * 0.05,
                }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document
                    .querySelector("#generator")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NavBar;
