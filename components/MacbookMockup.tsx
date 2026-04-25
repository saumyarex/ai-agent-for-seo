"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";

// Fixed internal design size — content is laid out for this exact box, then
// the whole mockup is uniformly scaled to fit the viewport (same approach as
// RyzeAgentHero) so the MacBook looks identical on mobile and desktop.
const DESIGN_W = 900;
const SCREEN_H = Math.round((DESIGN_W * 10) / 16); // 562
const BASE_H = 18;
const BASE_OVERHANG = 14;
const DESIGN_H = SCREEN_H + BASE_H;

export default function MacbookMockup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);
  const reduce = useReducedMotion();
  // Observe a non-transformed element. Safari computes IntersectionObserver
  // intersections from the transformed visual box, so a lid rotated -82deg
  // (nearly flat) never crosses the threshold and the animation never fires.
  const inView = useInView(inViewRef, { once: true, amount: 0.25 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width;
      setScale(Math.min(1, w / DESIGN_W));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <div ref={inViewRef} className={`flex w-full justify-center ${className}`}>
      <div
        ref={wrapRef}
        className="relative w-full"
        style={{ aspectRatio: `${DESIGN_W} / ${DESIGN_H}` }}
      >
        <div
          className="absolute top-0 left-0"
          style={{
            width: DESIGN_W,
            height: DESIGN_H,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
            transformStyle: "preserve-3d",
            WebkitTransformStyle: "preserve-3d",
          }}
        >
          <div
            className="relative"
            style={{
              width: DESIGN_W,
              perspective: "1800px",
              WebkitPerspective: 1800,
              transformStyle: "preserve-3d",
              WebkitTransformStyle: "preserve-3d",
            }}
          >
            {/* Lid */}
            <motion.div
              initial={reduce ? { rotateX: 0 } : { rotateX: -82 }}
              animate={
                reduce
                  ? { rotateX: 0 }
                  : { rotateX: inView ? 0 : -82 }
              }
              transition={{
                delay: 0.1,
                duration: 2.2,
                ease: [0.16, 0.84, 0.24, 1],
              }}
              style={{
                width: DESIGN_W,
                height: SCREEN_H,
                transformOrigin: "bottom center",
                transformStyle: "preserve-3d",
                WebkitTransformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
                willChange: "transform",
              }}
              className="relative rounded-t-[18px] border border-neutral-300 bg-neutral-100 p-2"
            >
              <div className="relative h-full w-full overflow-hidden rounded-lg border border-neutral-300 bg-white">
                {/* Notch */}
                <div className="pointer-events-none absolute top-0 left-1/2 z-20 h-2.5 w-24 -translate-x-1/2 rounded-b-md border-x border-b border-neutral-300 bg-neutral-100" />
                {/* Screen content */}
                <div className="relative h-full w-full">{children}</div>
              </div>
            </motion.div>

            {/* Base / keyboard deck */}
            <div
              className="relative"
              style={{
                width: DESIGN_W + BASE_OVERHANG * 2,
                height: BASE_H,
                marginLeft: -BASE_OVERHANG,
              }}
            >
              {/* Hinge line under the lid */}
              <div className="absolute inset-x-0 top-0 h-px bg-neutral-300" />
              {/* Deck */}
              <div className="absolute inset-x-0 top-px bottom-0 rounded-b-[14px] border border-t-0 border-neutral-300 bg-neutral-100" />
              {/* Trackpad notch */}
              <div className="absolute top-px left-1/2 h-1.5 w-24 -translate-x-1/2 rounded-b-md border-x border-b border-neutral-300 bg-neutral-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
