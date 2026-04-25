"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li" | "span";
}

function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      initial={{ opacity: 0, filter: shouldReduceMotion ? "blur(0px)" : "blur(15px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.4,
        ease: [0.6, 0.9, 0.9, 1],
        delay,
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

export default Reveal;
