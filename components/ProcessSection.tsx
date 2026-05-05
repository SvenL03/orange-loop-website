"use client";

import { useEffect, useRef } from "react";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const els = el.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

const STEPS = [
  {
    num: "Step 01",
    title: "Deep-Dive Interviews",
    body: "We interview you and your key team members to map every workflow, bottleneck, and opportunity across your entire operation. Nothing is assumed.",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    num: "Step 02",
    title: "AI Opportunity Mapping",
    body: "We analyze your workflows against the current AI landscape — identifying quick wins, high-ROI projects, and the right tools for your specific situation.",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    num: "Step 03",
    title: "Roadmap Presentation",
    body: "We deliver a prioritized roadmap with specific tools, projects ranked by ROI, implementation guidance, and a clear starting point — so you can act immediately.",
    icon: (
      <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
      </svg>
    ),
  },
];

const DELIVERABLES = [
  { title: "Prioritized Project List", desc: "Ranked by ROI and ease of implementation" },
  { title: "Curated Tool Recommendations", desc: "Specific AI tools matched to your workflows" },
  { title: "Immediate Action Items", desc: "Things you can implement this week" },
  { title: "ROI Estimates", desc: "Projected time and cost savings per project" },
  { title: "Full Roadmap Deck", desc: "Shareable with your team and stakeholders" },
  { title: "Zero Guilt", desc: "You'll finally know exactly where AI fits" },
];

export default function ProcessSection() {
  const ref = useReveal();

  return (
    <section id="process" ref={ref} className="py-24 md:py-32 px-6 md:px-12" style={{ background: "var(--bg)" }}>
      <div className="max-w-[1100px] mx-auto">
        <p
          className="reveal"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--orange)",
            marginBottom: "20px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <span style={{ width: "24px", height: "1.5px", background: "var(--orange)", display: "block" }} />
          The Audit
        </p>

        <h2
          className="reveal reveal-delay-1"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(38px, 4.5vw, 58px)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            marginBottom: "16px",
            maxWidth: "600px",
          }}
        >
          Clarity in<br />three steps.
        </h2>

        <p className="reveal reveal-delay-2" style={{ color: "var(--muted)", fontWeight: 300, maxWidth: "500px", marginBottom: "72px" }}>
          A focused, structured audit that turns vague AI ambition into a concrete, prioritized action plan — built specifically for your business.
        </p>

        {/* Steps grid */}
        <div
          className="reveal grid grid-cols-1 md:grid-cols-3 border"
          style={{ background: "var(--line)", borderColor: "var(--line)", gap: "1px" }}
        >
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className={`reveal reveal-delay-${i} group relative overflow-hidden p-11 transition-colors duration-300`}
              style={{ background: "var(--bg)" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg3)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg)"; }}
            >
              <div
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--orange)",
                  marginBottom: "24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                {step.num}
                <span style={{ flex: 1, height: "1px", background: "var(--orange)", opacity: 0.3 }} />
              </div>
              <div
                style={{
                  fontFamily: "var(--font-syne), sans-serif",
                  fontSize: "22px",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  marginBottom: "14px",
                  lineHeight: 1.2,
                }}
              >
                {step.title}
              </div>
              <p style={{ fontSize: "15px", color: "var(--muted)", fontWeight: 300, lineHeight: 1.65 }}>
                {step.body}
              </p>
              <div
                className="absolute bottom-7 right-7 w-10 h-10 rounded-full flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity"
                style={{ border: "1.5px solid var(--line)", color: "var(--orange)" }}
              >
                {step.icon}
              </div>
            </div>
          ))}
        </div>

        {/* Deliverables */}
        <div
          className="reveal mt-15 p-11 border"
          style={{ background: "var(--bg3)", borderColor: "var(--line)" }}
        >
          <p
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--orange)",
              marginBottom: "8px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <span style={{ width: "24px", height: "1.5px", background: "var(--orange)", display: "block" }} />
            What You Walk Away With
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {DELIVERABLES.map((d) => (
              <div key={d.title} className="flex items-start gap-3.5">
                <div
                  className="flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{
                    width: "20px",
                    height: "20px",
                    border: "1.5px solid var(--orange)",
                    borderRadius: "50%",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      background: "var(--orange)",
                      borderRadius: "50%",
                      display: "block",
                    }}
                  />
                </div>
                <div style={{ fontSize: "15px", color: "var(--muted)", fontWeight: 300 }}>
                  <strong style={{ color: "var(--text)", fontWeight: 500, display: "block", marginBottom: "3px" }}>
                    {d.title}
                  </strong>
                  {d.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
