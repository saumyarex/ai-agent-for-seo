"use client";

import { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  LayoutGrid,
  Star,
  Clock,
  MessageSquare,
  FileText,
  Image as ImageIcon,
  Settings,
} from "lucide-react";

const recommendations = [
  {
    category: "Keywords",
    finding: "14 high-intent gaps vs. top 3 competitors",
    action: "Generate content briefs",
  },
  {
    category: "Content",
    finding: "8 pages with thin content (<400 words)",
    action: "Expand with AI outlines",
  },
  {
    category: "Tech SEO",
    finding: "LCP 3.8s on /blog/seo-tips",
    action: "Inline critical CSS",
  },
  {
    category: "On-Page",
    finding: "Duplicate H1s on 14 pages",
    action: "Rewrite headings",
  },
  {
    category: "Backlinks",
    finding: "5 broken inbound links losing equity",
    action: "Reclaim via redirects",
  },
  {
    category: "Schema",
    finding: "Missing FAQ schema on 12 pages",
    action: "Add structured data",
  },
];

const channels = [
  { name: "Organic Search", current: "18.2K", target: "24K", pct: 76 },
  { name: "AI Overviews", current: "4.1K", target: "6K", pct: 68 },
  { name: "Long-tail Queries", current: "2.8K", target: "5K", pct: 56 },
  { name: "Branded Search", current: "9.4K", target: "10K", pct: 94 },
];

const topPages = [
  { page: "/ai-content-brief", pos: "3.2", clicks: "2.1K" },
  { page: "/seo-audit-tool", pos: "5.8", clicks: "1.6K" },
  { page: "/keyword-gap", pos: "7.1", clicks: "940" },
  { page: "/technical-seo", pos: "9.4", clicks: "612" },
];

const sidebarIcons = [
  { icon: Sparkles, active: true },
  { icon: LayoutGrid, active: false },
  { icon: Star, active: false },
  { icon: Clock, active: false },
  { icon: MessageSquare, active: false },
  { icon: FileText, active: false },
  { icon: ImageIcon, active: false },
];

// Fixed internal design size — everything inside is laid out for this exact
// box, then the whole thing is uniformly scaled to fit the viewport.
const DESIGN_W = 960;
const DESIGN_H = 540;

export default function RyzeAgentHero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

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
    <div className="flex w-full justify-center px-3 pb-10 sm:px-6 sm:pb-16">
      <div
        ref={wrapRef}
        className="relative w-full max-w-240 overflow-hidden"
        style={{ aspectRatio: `${DESIGN_W} / ${DESIGN_H}` }}
      >
        <style>{`
          .ryze-scroll::-webkit-scrollbar { width: 4px; }
          .ryze-scroll::-webkit-scrollbar-track { background: transparent; }
          .ryze-scroll::-webkit-scrollbar-thumb { background: rgba(16,185,129,0.3); border-radius: 99px; }
        `}</style>
        <div
          className="absolute top-0 left-0"
          style={{
            width: DESIGN_W,
            height: DESIGN_H,
            transform: `scale(${scale})`,
            transformOrigin: "top left",
          }}
        >
          {/* Main glass panel */}
          <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/50 bg-white/60 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.25)] backdrop-blur-2xl">
            <div className="flex h-full">
              {/* Sidebar */}
              <div className="flex flex-col items-center gap-1 border-r border-slate-200/60 bg-white/40 px-2.5 py-4">
                {sidebarIcons.map(({ icon: Icon, active }, i) => (
                  <button
                    key={i}
                    className={`group relative flex h-9 w-9 items-center justify-center rounded-lg transition-colors ${
                      active
                        ? "bg-slate-900 text-white"
                        : "text-slate-500 hover:bg-slate-900/10 hover:text-slate-900"
                    }`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.8} />
                  </button>
                ))}
                <div className="mt-auto pt-4">
                  <button className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-900/10 hover:text-slate-900">
                    <Settings className="h-4 w-4" strokeWidth={1.8} />
                  </button>
                </div>
              </div>

              {/* Main content */}
              <div className="ryze-scroll flex min-w-0 flex-1 flex-col gap-3 overflow-y-auto p-4">
                {/* Hero chat window */}
                <div className="flex flex-col items-center justify-center gap-5 rounded-xl border border-slate-200/70 bg-white/70 px-6 py-10">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/main-logo-sun-2.png"
                    alt="Ryze"
                    className="h-14 w-14 object-contain"
                  />
                  <div className="text-center">
                    <h3 className="text-[28px] leading-tight font-semibold tracking-tight text-slate-900">
                      Ryze AI SEO
                    </h3>
                    <p className="mt-1 text-[12px] text-slate-500">
                      Ask anything. I&apos;ll audit, plan, and execute across
                      your site.
                    </p>
                  </div>
                  <div className="flex w-full max-w-130 items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 shadow-sm">
                    <Sparkles
                      className="h-3.5 w-3.5 shrink-0 text-emerald-500"
                      strokeWidth={2}
                    />
                    <input
                      readOnly
                      placeholder="Ask Ryze anything about your SEO…"
                      className="flex-1 bg-transparent text-[12px] text-slate-600 outline-none placeholder:text-slate-400"
                    />
                    <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900 text-white transition hover:bg-slate-800">
                      <span className="text-[12px]">↑</span>
                    </button>
                  </div>
                  <div className="flex flex-wrap justify-center gap-1.5">
                    {[
                      "Find keyword gaps",
                      "Audit technical SEO",
                      "Write content brief",
                    ].map((s) => (
                      <button
                        key={s}
                        className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[10px] text-slate-600 transition hover:border-slate-300 hover:bg-white"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-400">
                    <span>Scroll for live insights</span>
                    <span className="animate-bounce">↓</span>
                  </div>
                </div>

                {/* Recommendations table */}
                <div className="overflow-hidden rounded-xl border border-slate-200/70 bg-white/70">
                  <div className="grid grid-cols-[96px_1fr_1fr_86px] gap-3 border-b border-slate-200/70 px-4 py-1.5 text-[9px] font-semibold tracking-wider text-slate-400 uppercase">
                    <span>Area</span>
                    <span>Finding</span>
                    <span>Recommendation</span>
                    <span className="text-right">Action</span>
                  </div>
                  <ul className="divide-y divide-slate-200/60">
                    {recommendations.map((r) => (
                      <li
                        key={r.category}
                        className="grid grid-cols-[96px_1fr_1fr_86px] items-center gap-3 px-4 py-1.5 text-[11px] transition-colors hover:bg-slate-900/3"
                      >
                        <span className="font-medium text-slate-900">
                          {r.category}
                        </span>
                        <span className="truncate text-slate-600">
                          {r.finding}
                        </span>
                        <span className="truncate text-slate-500">
                          {r.action}
                        </span>
                        <div className="flex justify-end gap-1.5">
                          <button className="rounded-md border border-slate-300 bg-white px-2 py-0.5 text-[10px] font-medium text-slate-600 transition hover:bg-slate-50">
                            Deny
                          </button>
                          <button className="rounded-md bg-slate-900 px-2 py-0.5 text-[10px] font-medium text-white transition hover:bg-slate-800">
                            OK
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Two column: Growth pacing + Top pages */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-slate-200/70 bg-white/70 p-3">
                    <div className="mb-2 text-center text-[9px] font-semibold tracking-wider text-slate-400 uppercase">
                      Monthly Growth Pacing
                    </div>
                    <ul className="space-y-1.5">
                      {channels.map((c) => (
                        <li key={c.name} className="space-y-1">
                          <div className="flex items-center justify-between text-[11px]">
                            <span className="text-slate-700">{c.name}</span>
                            <span className="font-mono text-slate-500">
                              {c.current} / {c.target}
                            </span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-slate-200/70">
                            <div
                              className="h-full rounded-full bg-linear-to-r from-emerald-400 to-emerald-500"
                              style={{ width: `${c.pct}%` }}
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-xl border border-slate-200/70 bg-white/70 p-3">
                    <div className="mb-2 text-center text-[9px] font-semibold tracking-wider text-slate-400 uppercase">
                      Top Ranking Pages
                    </div>
                    <ul className="divide-y divide-slate-200/60">
                      {topPages.map((p) => (
                        <li
                          key={p.page}
                          className="flex items-center justify-between py-1 text-[11px]"
                        >
                          <span className="truncate font-mono text-slate-700">
                            {p.page}
                          </span>
                          <div className="flex shrink-0 items-center gap-3">
                            <span className="text-slate-500">
                              pos{" "}
                              <span className="font-mono text-slate-900">
                                {p.pos}
                              </span>
                            </span>
                            <span className="font-mono text-emerald-600">
                              {p.clicks}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer bar */}
                <div className="flex items-center justify-between rounded-xl border border-slate-200/70 bg-white/70 px-4 py-2">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[11px] text-slate-600">
                      Agent running —{" "}
                      <span className="font-medium text-slate-900">
                        6 tasks queued
                      </span>
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-slate-400">
                    Last scan 4m ago
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
