const seeds: Record<string, { cx: number; cy: number }[]> = {
  AI: [
    { cx: 20, cy: 30 },
    { cx: 75, cy: 60 },
  ],
  GPT: [
    { cx: 70, cy: 25 },
    { cx: 25, cy: 70 },
  ],
  KOL: [
    { cx: 30, cy: 20 },
    { cx: 70, cy: 75 },
  ],
};

export function BlogCover({ tag }: { tag: string }) {
  const dots = seeds[tag] ?? seeds.AI;
  return (
    <div className="relative h-40 bg-card2 border-b border-border overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-[0.12]" aria-hidden="true">
        <defs>
          <pattern id={`grid-${tag}`} width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#F5F5F7" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#grid-${tag})`} />
      </svg>
      {dots.map((d, i) => (
        <div
          key={i}
          className="absolute w-24 h-24 rounded-full bg-accent/25 blur-2xl"
          style={{ left: `${d.cx}%`, top: `${d.cy}%`, transform: "translate(-50%, -50%)" }}
        />
      ))}
      <div className="relative w-full h-full flex items-center justify-center">
        <span className="text-3xl font-black grad-text tracking-tight">{tag}</span>
      </div>
    </div>
  );
}
