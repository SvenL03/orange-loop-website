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

export default function TestimonialSection() {
  const ref = useReveal();

  return (
    <section
      id="testimonial"
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12 border-t border-b"
      style={{ background: "var(--bg2)", borderColor: "var(--line)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="max-w-[800px] mx-auto text-center">
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
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <span style={{ width: "24px", height: "1.5px", background: "var(--orange)", display: "block" }} />
            What Clients Say
          </p>

          <span
            className="reveal"
            aria-hidden="true"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "96px",
              lineHeight: 1,
              color: "var(--orange)",
              opacity: 0.2,
              fontWeight: 800,
              display: "block",
              marginBottom: "-24px",
            }}
          >
            &ldquo;
          </span>

          <blockquote
            className="reveal reveal-delay-1"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "clamp(22px, 3vw, 34px)",
              fontWeight: 700,
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
              marginBottom: "32px",
              color: "var(--text)",
            }}
          >
            Before the audit, AI felt like a homework assignment I kept putting
            off. After?{" "}
            <em style={{ fontStyle: "normal", color: "var(--orange)" }}>
              I had a specific list
            </em>{" "}
            of tools and a clear plan — we implemented three of them in the
            first two weeks alone.
          </blockquote>

          <div className="reveal reveal-delay-2 flex items-center justify-center gap-3.5">
            <div
              className="flex items-center justify-center rounded-full overflow-hidden"
              style={{
                width: "44px",
                height: "44px",
                background: "var(--bg3)",
                border: "2px solid var(--orange)",
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                color: "var(--orange)",
              }}
            >
              JD
            </div>
            <div className="text-left">
              <div style={{ fontSize: "13px", color: "var(--orange)", letterSpacing: "2px", marginBottom: "4px" }}>
                ★★★★★
              </div>
              <div style={{ fontWeight: 500, fontSize: "15px" }}>Jane Doe</div>
              <div style={{ fontSize: "13px", color: "var(--muted)" }}>CEO, [Company Name]</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
