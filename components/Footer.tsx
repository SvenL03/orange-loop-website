"use client";

export default function Footer() {
  return (
    <footer
      className="flex flex-col sm:flex-row items-center justify-between gap-4 px-6 md:px-12 py-9 border-t text-center sm:text-left"
      style={{ borderColor: "var(--line)" }}
    >
      <a
        href="#"
        className="flex items-center gap-2 no-underline"
        style={{
          fontFamily: "var(--font-syne), sans-serif",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--muted)",
          textDecoration: "none",
        }}
      >
        <div className="logo-loop-sm" />
        Orange Loop AI
      </a>

      <p style={{ fontSize: "13px", color: "var(--muted)" }}>
        © 2025 Orange Loop AI. All rights reserved.
      </p>

      <a
        href="https://www.linkedin.com/company/orange-loop-ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition-colors no-underline"
        style={{ fontSize: "13px", color: "var(--muted)" }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--orange)"; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--muted)"; }}
      >
        LinkedIn
      </a>
    </footer>
  );
}
