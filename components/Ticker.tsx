const ITEMS = [
  "AI Audit",
  "Clear ROI",
  "No More Guessing",
  "Real Roadmap",
  "Immediate Wins",
];

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <div
      className="overflow-hidden py-3 border-t border-black/10"
      style={{ background: "var(--orange)", whiteSpace: "nowrap" }}
      aria-hidden="true"
    >
      <div className="ticker-scroll inline-flex gap-0">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-6 px-8"
            style={{
              fontFamily: "var(--font-syne), sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#000",
            }}
          >
            {item}
            <span
              style={{
                width: "5px",
                height: "5px",
                background: "rgba(0,0,0,0.3)",
                borderRadius: "50%",
                display: "inline-block",
                flexShrink: 0,
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
