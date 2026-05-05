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
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

const SIGNS = [
  '"I keep meaning to look into AI tools but never get around to it."',
  '"I tried a few things, but I\'m not sure it\'s actually helping."',
  '"I don\'t know where AI fits in my specific business."',
  '"I\'m worried I\'m falling behind my competitors."',
];

export default function GuiltSection() {
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-12 border-t border-b"
      style={{
        background: "var(--bg2)",
        borderColor: "var(--line)",
      }}
    >
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Left */}
          <div>
            <p
              className="reveal section-tag"
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
              <span
                style={{
                  display: "block",
                  width: "24px",
                  height: "1.5px",
                  background: "var(--orange)",
                  flexShrink: 0,
                }}
              />
              The Problem
            </p>
            <h2
              className="reveal reveal-delay-1"
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontSize: "clamp(38px, 4.5vw, 60px)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.02em",
              }}
            >
              <span
                style={{
                  textDecoration: "line-through",
                  textDecorationColor: "var(--orange)",
                  textDecorationThickness: "3px",
                  color: "var(--muted)",
                }}
              >
                AI guilt
              </span>
              <br />
              is real.
            </h2>
          </div>

          {/* Right */}
          <div>
            <p className="reveal" style={{ color: "var(--muted)", marginBottom: "20px", fontWeight: 300 }}>
              Every week you hear about another business using AI to{" "}
              <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                cut costs, save hours, and outpace their competition.
              </strong>{" "}
              You know you should be doing the same.
            </p>
            <p className="reveal reveal-delay-1" style={{ color: "var(--muted)", marginBottom: "20px", fontWeight: 300 }}>
              But every time you sit down to figure it out, you hit a wall. Too
              many tools. Too many options. Not enough hours in the day.
            </p>
            <p className="reveal reveal-delay-2" style={{ color: "var(--muted)", marginBottom: "20px", fontWeight: 300 }}>
              That&apos;s AI guilt — and it&apos;s costing you more than just
              lost productivity.
            </p>

            <div className="reveal reveal-delay-3 flex flex-col gap-3 mt-8">
              {SIGNS.map((sign, i) => (
                <div key={i} className="flex items-start gap-3 text-sm" style={{ color: "var(--muted)" }}>
                  <span
                    style={{
                      flexShrink: 0,
                      width: "6px",
                      height: "6px",
                      background: "var(--orange)",
                      borderRadius: "50%",
                      marginTop: "9px",
                    }}
                  />
                  {sign}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
