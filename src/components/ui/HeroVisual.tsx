import { AutomationIcon, ContentIcon, SparklesIcon } from "./Icons";

export function HeroVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto h-[340px] sm:h-[400px] md:h-[420px]">
      <div className="glow absolute inset-0 rounded-3xl" />
      <div className="relative w-full h-full rounded-3xl border border-border bg-card/60 backdrop-blur overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.15]" aria-hidden="true">
          <defs>
            <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
              <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#F5F5F7" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        <div className="absolute w-40 h-40 rounded-full bg-accent/25 blur-3xl top-8 left-8" />
        <div className="absolute w-32 h-32 rounded-full bg-accent2/20 blur-3xl bottom-10 right-6" />

        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-28 h-28 rounded-3xl grad-btn rotate-6 flex items-center justify-center shadow-2xl shadow-accent/30">
            <SparklesIcon className="w-14 h-14 text-white -rotate-6" />
          </div>
        </div>

        <div className="absolute top-7 right-7 flex items-center gap-2 bg-card2/90 border border-border rounded-xl px-3 py-2 backdrop-blur">
          <ContentIcon className="w-4 h-4 text-accent2 shrink-0" />
          <span className="text-xs font-semibold whitespace-nowrap">Content AI</span>
        </div>

        <div className="absolute bottom-7 left-7 flex items-center gap-2 bg-card2/90 border border-border rounded-xl px-3 py-2 backdrop-blur">
          <AutomationIcon className="w-4 h-4 text-accent2 shrink-0" />
          <span className="text-xs font-semibold whitespace-nowrap">Auto Flow</span>
        </div>
      </div>
    </div>
  );
}
