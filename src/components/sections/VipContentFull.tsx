"use client";

import { useMemo, useState } from "react";
import {
  vipFlowGroupsFull,
  vipAiStudioGroupsFull,
  vipWebAppsFull,
  vipPromptGroupsFull,
  veo31GuideFull,
} from "@/lib/aiVipBundleFull";
import type { VipTool, VipToolGroup } from "@/lib/aiVipBundle";
import { copyToClipboard } from "@/lib/clipboard";

function ToolGrid({ tools }: { tools: VipTool[] }) {
  if (tools.length === 0) return null;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {tools.map((tool) => (
        <a
          key={tool.link + tool.name}
          href={tool.link}
          target="_blank"
          rel="noopener noreferrer"
          className="card-hover bg-card border border-border rounded-xl px-4 py-3 text-sm font-medium flex items-center justify-between gap-2"
        >
          <span className="truncate">{tool.name}</span>
          <span className="shrink-0 text-accent2">↗</span>
        </a>
      ))}
    </div>
  );
}

function ToolGroupSection({
  title,
  groups,
}: {
  title: string;
  groups: VipToolGroup[];
}) {
  const total = groups.reduce((sum, g) => sum + g.tools.length, 0);
  if (total === 0) return null;
  return (
    <div>
      <h2 className="text-lg font-bold mb-5 flex items-center gap-2">
        {title}
        <span className="text-txt2 text-xs font-normal">({total})</span>
      </h2>
      <div className="space-y-6">
        {groups.map((g) => (
          <div key={g.group}>
            <p className="font-semibold text-sm text-accent2 mb-3">
              {g.group} <span className="text-txt2 font-normal">({g.tools.length})</span>
            </p>
            <ToolGrid tools={g.tools} />
          </div>
        ))}
      </div>
    </div>
  );
}

function PromptCard({ title, content }: { title: string; content: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <div className="flex items-start justify-between gap-3 mb-2">
        <p className="font-semibold text-sm">{title}</p>
        <button
          onClick={async () => {
            await copyToClipboard(content);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
          }}
          className={`btn-ghost shrink-0 border border-border text-xs font-semibold px-3 py-1.5 rounded-full transition-transform ${
            copied ? "scale-95" : ""
          }`}
        >
          {copied ? "Đã sao chép ✓" : "Copy"}
        </button>
      </div>
      <p className="text-txt2 text-xs leading-relaxed whitespace-pre-line">{content}</p>
    </div>
  );
}

function filterGroups(groups: VipToolGroup[], q: string): VipToolGroup[] {
  if (!q) return groups;
  return groups
    .map((g) => ({ ...g, tools: g.tools.filter((t) => t.name.toLowerCase().includes(q)) }))
    .filter((g) => g.tools.length > 0);
}

export function VipContentFull() {
  const [query, setQuery] = useState("");
  const [showGuide, setShowGuide] = useState(false);
  const q = query.trim().toLowerCase();

  const filteredFlow = useMemo(() => filterGroups(vipFlowGroupsFull, q), [q]);
  const filteredAiStudio = useMemo(() => filterGroups(vipAiStudioGroupsFull, q), [q]);
  const filteredWebApps = useMemo(
    () => (q ? vipWebAppsFull.filter((t) => t.name.toLowerCase().includes(q)) : vipWebAppsFull),
    [q]
  );
  const filteredPromptGroups = useMemo(() => {
    if (!q) return vipPromptGroupsFull;
    return vipPromptGroupsFull
      .map((g) => ({
        ...g,
        prompts: g.prompts.filter(
          (p) => p.title.toLowerCase().includes(q) || p.content.toLowerCase().includes(q)
        ),
      }))
      .filter((g) => g.prompts.length > 0);
  }, [q]);

  const noResults =
    filteredFlow.reduce((s, g) => s + g.tools.length, 0) === 0 &&
    filteredAiStudio.reduce((s, g) => s + g.tools.length, 0) === 0 &&
    filteredWebApps.length === 0 &&
    filteredPromptGroups.length === 0;

  return (
    <section className="relative glow overflow-hidden">
      <div className="max-w-3xl mx-auto px-5 md:px-8 pt-16 pb-10 md:pt-20 text-center">
        <span className="inline-block text-xs font-semibold tracking-wide text-accent2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
          LINK DỰ PHÒNG — NỘI BỘ
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
          Kho <span className="grad-text">AI Kinh Doanh VIP</span> — Bản đầy đủ
        </h1>
        <p className="text-txt2 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-8">
          Bấm vào từng công cụ để mở trong tab mới. Trang này không nằm trong menu chính, chỉ dùng
          để gửi riêng khi cần.
        </p>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm công cụ hoặc prompt theo tên..."
          aria-label="Tìm công cụ hoặc prompt theo tên"
          className="w-full max-w-md mx-auto block bg-card2 border border-border rounded-full px-5 py-3 text-sm outline-none transition-colors focus:border-accent"
        />
      </div>

      <div className="max-w-5xl mx-auto px-5 md:px-8 pb-20 md:pb-28 space-y-12">
        {noResults && (
          <p className="text-center text-txt2 text-sm">Không tìm thấy nội dung phù hợp.</p>
        )}

        <ToolGroupSection title="Flow App (Google Labs)" groups={filteredFlow} />
        <ToolGroupSection title="AI Studio App" groups={filteredAiStudio} />

        {filteredWebApps.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              Web App
              <span className="text-txt2 text-xs font-normal">({filteredWebApps.length})</span>
            </h2>
            <ToolGrid tools={filteredWebApps} />
          </div>
        )}

        {filteredPromptGroups.length > 0 && (
          <div>
            <h2 className="text-lg font-bold mb-4">Kho Prompt Kinh Doanh</h2>
            <div className="space-y-8">
              {filteredPromptGroups.map((g) => (
                <div key={g.group}>
                  <p className="font-semibold text-sm text-accent2 mb-3">{g.group}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {g.prompts.map((p) => (
                      <PromptCard key={p.title} title={p.title} content={p.content} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!q && (
          <div>
            <button
              onClick={() => setShowGuide((v) => !v)}
              className="w-full flex items-center justify-between gap-3 bg-card border border-border rounded-xl px-5 py-4 text-left transition-colors hover:border-accent/40"
            >
              <span className="font-bold text-sm">
                Bonus: Hướng dẫn kỹ thuật viết prompt Veo 3.1
              </span>
              <span
                className={`shrink-0 text-accent2 transition-transform duration-200 ${showGuide ? "rotate-180" : ""}`}
              >
                ↓
              </span>
            </button>
            <div
              className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
              style={{ maxHeight: showGuide ? 4000 : 0, opacity: showGuide ? 1 : 0 }}
            >
              <div className="bg-card2 border border-border border-t-0 rounded-b-xl px-5 py-4">
                <p className="text-txt2 text-xs leading-relaxed whitespace-pre-line">
                  {veo31GuideFull}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
