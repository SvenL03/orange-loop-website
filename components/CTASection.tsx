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

export default function CTASection() {
  const ref = useReveal();

  return (
    <section
      id="audit"
      ref={ref}
      className="relative text-center overflow-hidden py-36 px-6 md:px-12"
      style={{ background: "var(--bg)" }}
    >
      {/* Glow */}
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        style={{
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(255,105,0,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Rings */}
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <div className="ring" style={{ width: "200px", height: "200px", animationDelay: "0s" }} />
        <div className="ring" style={{ width: "360px", height: "360px", animationDelay: "0.8s" }} />
        <div className="ring" style={{ width: "520px", height: "520px", animationDelay: "1.6s" }} />
      </div>

      <div className="max-w-[1100px] mx-auto relative" style={{ zIndex: 1 }}>
        <h2
          className="reveal"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontSize: "clamp(42px, 5.5vw, 76px)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: "24px",
          }}
        >
          End the guilt.<br />
          <span style={{ color: "var(--orange)" }}>Start the audit.</span>
        </h2>

        <p
          className="reveal reveal-delay-1"
          style={{
            fontSize: "18px",
            fontWeight: 300,
            color: "var(--muted)",
            maxWidth: "460px",
            margin: "0 auto 44px",
          }}
        >
          Book a 20-minute intro call. We&apos;ll confirm fit, answer your
          questions, and get your audit scheduled.
        </p>

        <div className="reveal reveal-delay-2 inline-flex flex-col items-center gap-3.5">
          <a
            href="https://www.linkedin.com/company/orange-loop-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 no-underline transition-all duration-200"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              background: "var(--orange)",
              color: "#000",
              border: "none",
              padding: "20px 52px",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#ff8533";
              el.style.transform = "translateY(-3px)";
              el.style.boxShadow = "0 12px 40px rgba(255, 105, 0, 0.35)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--orange)";
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "none";
            }}
          >
            Schedule Your Audit
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <p style={{ fontSize: "13px", color: "var(--muted)", letterSpacing: "0.05em" }}>
            Limited spots available each month
          </p>
        </div>
      </div>
    </section>
  );
}
