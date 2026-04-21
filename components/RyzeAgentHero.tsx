"use client";

import { useEffect, useState } from "react";

// ---- Tiny animation hook (no external dep needed) ----
function useEntryAnimation(delay = 0) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);
  return visible;
}

// ---- Typewriter for the AI response ----
function Typewriter({ text, speed = 18, started }) {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    if (!started) return;
    let i = 0;
    const iv = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else clearInterval(iv);
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed, started]);
  return (
    <span>
      {displayed}
      {displayed.length < text.length && started && (
        <span className="cursor-blink">▌</span>
      )}
    </span>
  );
}

// ---- Animated number counter ----
function Counter({ target, suffix = "", duration = 1200, started }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const iv = setInterval(() => {
      start += step;
      if (start >= target) { setValue(target); clearInterval(iv); }
      else setValue(Math.floor(start));
    }, 16);
    return () => clearInterval(iv);
  }, [target, duration, started]);
  return <span>{value.toLocaleString()}{suffix}</span>;
}

// ---- Pulse dot ----
const PulseDot = ({ color = "#22c55e" }) => (
  <span style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", width: 10, height: 10 }}>
      <span style={{ position: "absolute", width: 10, height: 10, borderRadius: "50%", background: color, opacity: 0.4, animation: "ping 1.5s ease-out infinite" }} />
    <span style={{ width: 6, height: 6, borderRadius: "50%", background: color }} />
  </span>
);

// ---- Keyword row ----
const KwRow = ({ kw, vol, diff, opp, delay }) => {
  const v = useEntryAnimation(delay);
  return (
    <div style={{
      display: "grid", gridTemplateColumns: "1fr 80px 80px 90px",
      gap: 8, padding: "7px 10px", borderRadius: 6,
      background: v ? "rgba(255,255,255,0.72)" : "transparent",
      opacity: v ? 1 : 0, transform: v ? "none" : "translateX(-10px)",
      transition: "all 0.4s ease", fontSize: 12,
      borderLeft: opp === "HIGH" ? "2px solid #16a34a" : opp === "MED" ? "2px solid #d97706" : "2px solid #94a3b8",
      border: "1px solid rgba(148,163,184,0.18)"
    }}>
      <span style={{ color: "#0f172a", fontFamily: "monospace" }}>{kw}</span>
      <span style={{ color: "#64748b", textAlign: "right", fontFamily: "monospace" }}>{vol}</span>
      <span style={{ color: diff > 60 ? "#dc2626" : diff > 40 ? "#d97706" : "#16a34a", textAlign: "right", fontFamily: "monospace" }}>{diff}</span>
      <span style={{ textAlign: "right" }}>
        <span style={{
          padding: "2px 6px", borderRadius: 4, fontSize: 10, fontWeight: 700, fontFamily: "monospace",
          background: opp === "HIGH" ? "rgba(22,163,74,0.12)" : opp === "MED" ? "rgba(217,119,6,0.12)" : "rgba(148,163,184,0.16)",
          color: opp === "HIGH" ? "#15803d" : opp === "MED" ? "#b45309" : "#64748b"
        }}>{opp}</span>
      </span>
    </div>
  );
};

// ---- Task item ----
const TaskItem = ({ icon, label, status, delay }) => {
  const v = useEntryAnimation(delay);
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 10, padding: "8px 10px",
      borderRadius: 8, background: "rgba(255,255,255,0.72)",
      opacity: v ? 1 : 0, transform: v ? "none" : "translateY(8px)",
      transition: "all 0.35s ease", border: "1px solid rgba(148,163,184,0.16)"
    }}>
      <span style={{ fontSize: 15 }}>{icon}</span>
      <span style={{ flex: 1, fontSize: 12, color: "#334155", fontFamily: "monospace" }}>{label}</span>
      <span style={{
        fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 4,
        background: status === "done" ? "rgba(22,163,74,0.12)" : status === "running" ? "rgba(52,211,153,0.14)" : "rgba(148,163,184,0.16)",
        color: status === "done" ? "#15803d" : status === "running" ? "#059669" : "#64748b",
        fontFamily: "monospace"
      }}>
        {status === "running" ? "● RUNNING" : status === "done" ? "✓ DONE" : "QUEUED"}
      </span>
    </div>
  );
};

// ---- Sparkline SVG ----
const Sparkline = ({ data, color = "#34d399" }) => {
  const w = 100, h = 32;
  const min = Math.min(...data), max = Math.max(...data);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * w;
    const y = h - ((v - min) / (max - min || 1)) * (h - 4) - 2;
    return `${x},${y}`;
  }).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      <polyline points={pts} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={pts.split(" ").at(-1).split(",")[0]} cy={pts.split(" ").at(-1).split(",")[1]} r="2.5" fill={color} />
    </svg>
  );
};

// ---- MAIN COMPONENT ----
export default function RyzeAgentHero() {
  const panel = useEntryAnimation(100);
  const statsStarted = useEntryAnimation(400);
  const kwStarted = useEntryAnimation(700);
  const aiStarted = useEntryAnimation(1100);

  const aiText = `Based on my crawl of your site and competitor analysis, I found 3 critical gaps:\n\n1. You're missing topical clusters around "AI content brief" (2.4K/mo, KD 38) — competitors rank with thin pages you can beat easily.\n\n2. Your /blog/seo-tips page has a 3.8s LCP — fixing it could push it from position 9 → top 5.\n\n3. 14 pages have duplicate H1s. Want me to generate fixes now?`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Press+Start+2P&display=swap');
        @keyframes ping { 0%,100%{transform:scale(1);opacity:0.4} 50%{transform:scale(2);opacity:0} }
        @keyframes cursor-blink { 0%,100%{opacity:1} 50%{opacity:0} }
        .cursor-blink { animation: cursor-blink 0.8s infinite; }
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(80px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes ambient-sweep {
          0% { transform: translateX(-130%) skewX(-18deg); opacity: 0; }
          14% { opacity: 0.16; }
          34% { opacity: 0.08; }
          52%, 100% { transform: translateX(180%) skewX(-18deg); opacity: 0; }
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes glow-breathe {
          0%, 100% { box-shadow: 0 0 0 rgba(16,185,129,0.0); filter: saturate(1); }
          50% { box-shadow: 0 10px 24px rgba(16,185,129,0.18); filter: saturate(1.08); }
        }
        @keyframes badge-breathe {
          0%, 100% { background: rgba(52,211,153,0.14); border-color: rgba(16,185,129,0.22); }
          50% { background: rgba(52,211,153,0.22); border-color: rgba(16,185,129,0.32); }
        }
        .agent-hero-wrap { animation: slide-in 0.7s cubic-bezier(.22,.68,0,1.2) both; }
        .glass-panel {
          position: relative;
          background: rgba(255, 255, 255, 0.84);
          border: 1px solid rgba(148,163,184,0.20);
          backdrop-filter: blur(20px);
          border-radius: 18px;
          box-shadow: 0 40px 100px rgba(15,23,42,0.10), inset 0 1px 0 rgba(255,255,255,0.7);
        }
        .ambient-sweep {
          position: absolute;
          top: 0;
          left: 0;
          width: 34%;
          height: 100%;
          pointer-events: none;
          background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.28) 48%, transparent 100%);
          filter: blur(18px);
          animation: ambient-sweep 9s ease-in-out infinite;
        }
        .stat-card {
          background: rgba(255,255,255,0.72);
          border: 1px solid rgba(148,163,184,0.16);
          border-radius: 10px;
          padding: 14px 16px;
          display: flex; flex-direction: column; gap: 6px;
        }
        .floating-chip { animation: float-gentle 4.6s ease-in-out infinite; }
        .agent-glow { animation: glow-breathe 4.8s ease-in-out infinite; }
        .live-badge { animation: badge-breathe 2.8s ease-in-out infinite; }
        .send-button-loop { animation: glow-breathe 3.8s ease-in-out infinite, float-gentle 3.8s ease-in-out infinite; }
        .tab-btn {
          font-family: 'Space Mono', monospace;
          font-size: 10px; font-weight: 700;
          padding: 5px 12px; border-radius: 6px; cursor: pointer;
          border: 1px solid rgba(255,255,255,0.08);
          transition: all 0.2s;
        }
        .tab-active { background: rgba(52,211,153,0.12); border-color: rgba(16,185,129,0.24); color: #059669; }
        .tab-inactive { background: transparent; color: #64748b; }
        .tab-inactive:hover { color: #0f172a; }
        .scrollbar-thin::-webkit-scrollbar { width: 3px; }
        .scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
        .scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(52,211,153,0.22); border-radius: 99px; }
      `}</style>

      <div className="agent-hero-wrap" style={{ width: "100%", display: "flex", justifyContent: "center", padding: "0 24px 64px" }}>
        <div className="glass-panel" style={{ width: "100%", maxWidth: 920, overflow: "hidden" }}>
          <div className="ambient-sweep" />

          {/* — Title Bar — */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 18px", borderBottom: "1px solid rgba(148,163,184,0.16)", background: "rgba(248,250,252,0.92)" }}>
            <div style={{ display: "flex", gap: 6 }}>
              {["#f87171","#facc15","#4ade80"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.8 }} />)}
            </div>
            <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
              <div className="floating-chip" style={{ background: "rgba(255,255,255,0.86)", border: "1px solid rgba(148,163,184,0.16)", borderRadius: 6, padding: "3px 14px", fontSize: 11, color: "#64748b", fontFamily: "Space Mono, monospace" }}>
                app.ryze.ai / agent / dashboard
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <PulseDot color="#4ade80" />
              <span style={{ fontSize: 10, color: "#4ade80", fontFamily: "Space Mono, monospace", fontWeight: 700 }}>AGENT ACTIVE</span>
            </div>
          </div>

          {/* — Sidebar + Main — */}
          <div style={{ display: "flex", height: 560 }}>

            {/* SIDEBAR */}
            <div style={{ width: 200, borderRight: "1px solid rgba(148,163,184,0.16)", padding: "16px 12px", display: "flex", flexDirection: "column", gap: 4, background: "rgba(248,250,252,0.72)", flexShrink: 0 }}>
              <div style={{ fontSize: 9, color: "#64748b", fontFamily: "Space Mono, monospace", fontWeight: 700, letterSpacing: 2, marginBottom: 8, padding: "0 6px" }}>WORKSPACE</div>
              {[
                { icon: "⬡", label: "Agent Overview", active: true },
                { icon: "🔍", label: "Keyword Intel", active: false },
                { icon: "📄", label: "Content Briefs", active: false },
                { icon: "⚙️", label: "Tech Audit", active: false },
                { icon: "📈", label: "Rank Tracker", active: false },
                { icon: "🔗", label: "Backlinks", active: false },
              ].map(({ icon, label, active }) => (
                <div key={label} style={{
                  display: "flex", alignItems: "center", gap: 8, padding: "8px 10px", borderRadius: 7, cursor: "pointer",
                  background: active ? "rgba(52,211,153,0.14)" : "transparent",
                  border: active ? "1px solid rgba(16,185,129,0.22)" : "1px solid transparent",
                  color: active ? "#059669" : "#64748b",
                  fontSize: 11, fontFamily: "Space Mono, monospace",
                  transition: "all 0.2s"
                }}>
                  <span style={{ fontSize: 12 }}>{icon}</span>
                  <span>{label}</span>
                  {active && <span className="live-badge" style={{ marginLeft: "auto", width: 5, height: 5, borderRadius: "50%", background: "#10b981" }} />}
                </div>
              ))}

              <div style={{ marginTop: "auto", padding: "12px 0 0", borderTop: "1px solid rgba(148,163,184,0.14)" }}>
                <div style={{ fontSize: 9, color: "#64748b", fontFamily: "Space Mono, monospace", fontWeight: 700, letterSpacing: 2, marginBottom: 8, padding: "0 6px" }}>AGENT TASKS</div>
                <TaskItem icon="🕷️" label="Crawl site" status="done" delay={900} />
                <div style={{ height: 4 }} />
                <TaskItem icon="🧠" label="Analyze gaps" status="running" delay={1000} />
                <div style={{ height: 4 }} />
                <TaskItem icon="✍️" label="Build briefs" status="queued" delay={1100} />
              </div>
            </div>

            {/* MAIN CONTENT */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

              {/* Stats row */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10, padding: "14px 16px", borderBottom: "1px solid rgba(148,163,184,0.16)" }}>
                {[
                  { label: "Opportunities", value: 147, suffix: "", color: "#10b981", spark: [20,35,28,50,45,70,65,90,85,110,147] },
                  { label: "Ranking Pages", value: 38, suffix: "", color: "#4ade80", spark: [10,12,18,15,22,25,28,30,32,36,38] },
                  { label: "Avg. Position", value: 14, suffix: ".2", color: "#facc15", spark: [38,35,32,30,28,25,22,20,18,16,14] },
                  { label: "Est. Traffic", value: 12400, suffix: "", color: "#f472b6", spark: [1000,2000,1800,3000,4500,5200,6800,8000,9500,11000,12400] },
                ].map(({ label, value, suffix, color, spark }) => (
                  <div key={label} className="stat-card">
                    <div style={{ fontSize: 9, color: "#64748b", fontFamily: "Space Mono, monospace", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase" }}>{label}</div>
                    <div style={{ fontSize: 22, fontWeight: 700, color, fontFamily: "Space Mono, monospace", lineHeight: 1 }}>
                      <Counter target={value} suffix={suffix} started={statsStarted} />
                    </div>
                    <Sparkline data={spark} color={color} />
                  </div>
                ))}
              </div>

              {/* Tabs + content */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
                <div style={{ display: "flex", gap: 6, padding: "12px 16px 0", borderBottom: "1px solid rgba(148,163,184,0.16)" }}>
                  {["Keyword Gaps", "AI Insights", "Tech Issues"].map((t, i) => (
                    <button key={t} className={`tab-btn ${i === 0 ? "tab-active" : "tab-inactive"}`}>{t}</button>
                  ))}
                  <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 10, color: "#64748b", fontFamily: "Space Mono, monospace" }}>Last scan: 4m ago</span>
                    <button style={{ fontSize: 10, fontFamily: "Space Mono, monospace", color: "#059669", background: "rgba(52,211,153,0.12)", border: "1px solid rgba(16,185,129,0.22)", borderRadius: 5, padding: "4px 10px", cursor: "pointer" }}>↻ Re-scan</button>
                  </div>
                </div>

                <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr", overflow: "hidden" }}>

                  {/* Keyword table */}
                  <div style={{ borderRight: "1px solid rgba(255,255,255,0.06)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 80px 90px", gap: 8, padding: "8px 10px", fontSize: 9, color: "#64748b", fontFamily: "Space Mono, monospace", fontWeight: 700, letterSpacing: 1, borderBottom: "1px solid rgba(148,163,184,0.12)" }}>
                      <span>KEYWORD</span><span style={{ textAlign: "right" }}>VOL/MO</span><span style={{ textAlign: "right" }}>KD</span><span style={{ textAlign: "right" }}>OPPTY</span>
                    </div>
                    <div className="scrollbar-thin" style={{ overflowY: "auto", flex: 1, padding: "4px 0" }}>
                      {[
                        ["ai content brief", "2,400", 38, "HIGH"],
                        ["seo audit tool", "5,800", 52, "MED"],
                        ["technical seo checklist", "3,200", 41, "HIGH"],
                        ["keyword gap analysis", "1,900", 35, "HIGH"],
                        ["seo content strategy", "4,100", 61, "MED"],
                        ["rank tracking software", "6,600", 68, "LOW"],
                        ["on-page seo tool", "2,800", 44, "HIGH"],
                        ["seo competitor analysis", "3,500", 55, "MED"],
                      ].map(([kw, vol, diff, opp], i) => (
                        <KwRow key={kw} kw={kw} vol={vol} diff={diff} opp={opp} delay={800 + i * 80} />
                      ))}
                    </div>
                  </div>

                  {/* AI Chat panel */}
                  <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
                    <div style={{ padding: "10px 14px", borderBottom: "1px solid rgba(148,163,184,0.12)", display: "flex", alignItems: "center", gap: 8 }}>
                      <div className="agent-glow" style={{ width: 28, height: 28, borderRadius: 8, background: "linear-gradient(135deg,#34d399,#10b981)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#ecfdf5" }}>✦</div>
                      <div>
                        <div style={{ fontSize: 11, fontWeight: 700, color: "#0f172a", fontFamily: "Space Mono, monospace" }}>Ryze Agent</div>
                        <div style={{ fontSize: 9, color: "#059669", fontFamily: "Space Mono, monospace" }}>● Analyzing your site…</div>
                      </div>
                    </div>
                    <div className="scrollbar-thin" style={{ flex: 1, overflowY: "auto", padding: "14px" }}>
                      {/* user message */}
                      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
                        <div style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(16,185,129,0.18)", borderRadius: "12px 12px 2px 12px", padding: "8px 12px", maxWidth: "80%", fontSize: 12, color: "#047857", fontFamily: "Space Mono, monospace", lineHeight: 1.6 }}>
                          What should I fix first to grow organic traffic?
                        </div>
                      </div>
                      {/* AI message */}
                      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                        <div className="agent-glow" style={{ width: 24, height: 24, borderRadius: 6, background: "linear-gradient(135deg,#34d399,#10b981)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, flexShrink: 0, marginTop: 2, color: "#ecfdf5" }}>✦</div>
                        <div style={{ background: "rgba(255,255,255,0.78)", border: "1px solid rgba(148,163,184,0.16)", borderRadius: "2px 12px 12px 12px", padding: "10px 12px", fontSize: 11, color: "#475569", fontFamily: "Space Mono, monospace", lineHeight: 1.8, whiteSpace: "pre-wrap" }}>
                          <Typewriter text={aiText} speed={14} started={aiStarted} />
                        </div>
                      </div>
                    </div>
                    {/* Input */}
                    <div style={{ padding: "10px 14px", borderTop: "1px solid rgba(148,163,184,0.14)" }}>
                      <div style={{ display: "flex", gap: 8, background: "rgba(255,255,255,0.78)", border: "1px solid rgba(148,163,184,0.16)", borderRadius: 10, padding: "8px 12px", alignItems: "center" }}>
                        <input readOnly placeholder="Ask Ryze anything about your SEO…" style={{ flex: 1, background: "transparent", border: "none", outline: "none", fontSize: 11, color: "#64748b", fontFamily: "Space Mono, monospace" }} />
                        <button className="send-button-loop" style={{ background: "linear-gradient(135deg,#34d399,#10b981)", border: "none", borderRadius: 6, width: 26, height: 26, cursor: "pointer", color: "white", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center" }}>↑</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
