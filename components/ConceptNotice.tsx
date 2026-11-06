"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

export const PORTFOLIO_URL = "https://saumyarex.xyz";
const OPEN_EVENT = "aurio:concept";
const PILL_DISMISSED_KEY = "aurio-concept-pill-dismissed";

/** Open the concept modal from anywhere (e.g. a button's onClick). */
export function openConceptNotice() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

/**
 * Aurio is a concept landing page, not a live product. Every "Start with
 * Aurio" CTA (any link to #start, or an element with data-concept-cta) opens
 * this note instead of dead-ending, and a quiet pill credits the build.
 */
function ConceptNotice() {
  const [open, setOpen] = useState(false);
  const [pillVisible, setPillVisible] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const show = useCallback(() => {
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    setOpen(true);
  }, []);

  const hide = useCallback(() => {
    setOpen(false);
    returnFocusRef.current?.focus?.();
  }, []);

  // Intercept CTA clicks site-wide.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = (e.target as Element | null)?.closest?.(
        'a[href="#start"], [data-concept-cta]',
      );
      if (!target) return;
      e.preventDefault();
      show();
    };
    document.addEventListener("click", onClick);
    window.addEventListener(OPEN_EVENT, show);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener(OPEN_EVENT, show);
    };
  }, [show]);

  // Esc to close, lock scroll, focus the close button.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && hide();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, hide]);

  // Reveal the pill once the visitor scrolls past the hero copy.
  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = sessionStorage.getItem(PILL_DISMISSED_KEY) === "1";
    } catch {}
    if (dismissed) return;
    const onScroll = () => {
      if (window.scrollY > 480) {
        setPillVisible(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismissPill = () => {
    setPillVisible(false);
    try {
      sessionStorage.setItem(PILL_DISMISSED_KEY, "1");
    } catch {}
  };

  return (
    <>
      {/* Credit pill */}
      <AnimatePresence>
        {pillVisible && !open && (
          <motion.div
            className="fixed bottom-4 left-4 z-40 flex items-center rounded-full border border-black/8 bg-white/85 py-1 pr-1 pl-3 text-xs text-black/70 shadow-[0_4px_20px_-6px_rgba(0,0,0,0.15)] backdrop-blur-md sm:bottom-5 sm:left-5"
            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 8, filter: "blur(4px)" }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
          >
            <button
              type="button"
              onClick={show}
              className="flex items-center gap-1.5 transition-colors hover:text-neutral-950"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-neutral-900" />
              <span>
                Concept by{" "}
                <span className="font-medium text-neutral-950">Saumya</span>
              </span>
            </button>
            <button
              type="button"
              onClick={dismissPill}
              aria-label="Dismiss"
              className="ml-1.5 flex h-6 w-6 items-center justify-center rounded-full text-black/40 transition-colors hover:bg-black/5 hover:text-black/70"
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-end justify-center p-4 sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-neutral-950/30 backdrop-blur-[3px]"
              onClick={hide}
            />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="concept-title"
              className="relative w-full max-w-md rounded-2xl border border-black/8 bg-white p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] sm:p-7"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
            >
              <button
                ref={closeRef}
                type="button"
                onClick={hide}
                aria-label="Close"
                className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-lg text-black/40 transition-colors hover:bg-black/5 hover:text-black/80"
              >
                <X size={16} />
              </button>

              <p className="inline-flex items-center gap-1.5 rounded-full border border-black/8 px-2.5 py-1 text-[11px] font-medium tracking-wide text-black/60 uppercase">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
                Concept project
              </p>

              <h2
                id="concept-title"
                className="mt-4 font-[family-name:var(--font-pixelify-sans)] text-3xl leading-tight text-neutral-950"
              >
                Aurio isn&apos;t a real product (yet).
              </h2>

              <p className="mt-3 text-sm leading-6 text-black/65">
                This is a concept landing page I designed and built end to end:
                the positioning, the flows, the interface, the motion and the
                code. Thanks for clicking through.
              </p>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <a
                  href={PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener"
                  className="group relative inline-flex h-10 flex-1 items-center justify-center gap-1.5 overflow-hidden rounded-lg bg-neutral-950 px-4 text-sm font-medium whitespace-nowrap text-white transition hover:bg-neutral-800"
                >
                  See more of my work
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
                <button
                  type="button"
                  onClick={hide}
                  className="inline-flex h-10 flex-1 items-center justify-center rounded-lg border border-black/10 bg-white px-4 text-sm font-medium whitespace-nowrap text-[#141414] transition hover:bg-neutral-50"
                >
                  Keep exploring
                </button>
              </div>

              <p className="mt-4 text-center text-xs text-black/45">
                Designed &amp; built by Saumya ·{" "}
                <a
                  href={PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener"
                  className="underline decoration-black/20 underline-offset-2 hover:text-black/70"
                >
                  saumyarex.xyz
                </a>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ConceptNotice;
