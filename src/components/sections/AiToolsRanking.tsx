import { aiTools } from "@/lib/constants";

export function AiToolsRanking() {
  return (
    <section id="cong-cu" className="max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-28">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-semibold tracking-widest text-accent2">CÔNG CỤ AI</span>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-4">Bảng xếp hạng AI Tools</h2>
        <p className="text-txt2 leading-relaxed">
          Những công cụ AI được đội ngũ KOL AI SYSTEM tuyển chọn và khuyên dùng.
        </p>
      </div>

      <div className="space-y-4 max-w-3xl mx-auto">
        {aiTools.map((tool) => (
          <div
            key={tool.rank}
            className="card-hover flex items-center gap-5 bg-card border border-border rounded-2xl p-5"
          >
            <span
              className={`rank-badge shrink-0 w-10 h-10 rounded-full font-extrabold flex items-center justify-center ${
                tool.rank === 1
                  ? "grad-btn text-white"
                  : "bg-card2 border border-border"
              }`}
            >
              {tool.rank}
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="font-bold">{tool.name}</h3>
              <p className="text-txt2 text-sm truncate">{tool.desc}</p>
            </div>
            <a
              href="#lien-he"
              className={`shrink-0 text-sm font-semibold px-5 py-2 rounded-full ${
                tool.rank === 1
                  ? "grad-btn text-white"
                  : "btn-ghost border border-border"
              }`}
            >
              Dùng thử
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
