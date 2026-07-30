"use client";

import { useMemo, useState } from "react";
import {
  vipFlowGroups,
  vipAiStudioGroups,
  vipWebApps,
  vipPromptGroups,
  vipToolsCount,
  vipPromptsCount,
  type VipTool,
  type VipToolGroup,
} from "@/lib/aiVipBundle";

function LockedCard({ label }: { label: string }) {
  return (
    <a
      href="#mua-ngay"
      className="card-hover bg-card2 border border-border rounded-xl px-4 py-3 text-sm font-medium flex items-center justify-between gap-2 text-txt2"
    >
      <span className="truncate">{label}</span>
      <span className="shrink-0">🔒</span>
    </a>
  );
}

function LockedGrid({ tools }: { tools: VipTool[] }) {
  if (tools.length === 0) return null;
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {tools.map((tool) => (
        <LockedCard key={tool.link + tool.name} label={tool.name} />
      ))}
    </div>
  );
}

function LockedGroupSection({ title, groups }: { title: string; groups: VipToolGroup[] }) {
  const total = groups.reduce((sum, g) => sum + g.tools.length, 0);
  if (total === 0) return null;
  return (
    <div>
      <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
        {title}
        <span className="text-txt2 text-xs font-normal">({total})</span>
      </h3>
      <div className="space-y-6">
        {groups.map((g) => (
          <div key={g.group}>
            <p className="font-semibold text-sm text-accent2 mb-3">
              {g.group} <span className="text-txt2 font-normal">({g.tools.length})</span>
            </p>
            <LockedGrid tools={g.tools} />
          </div>
        ))}
      </div>
    </div>
  );
}

function filterGroups(groups: VipToolGroup[], q: string): VipToolGroup[] {
  if (!q) return groups;
  return groups
    .map((g) => ({ ...g, tools: g.tools.filter((t) => t.name.toLowerCase().includes(q)) }))
    .filter((g) => g.tools.length > 0);
}

export function VipContentPreview() {
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();

  const filteredFlow = useMemo(() => filterGroups(vipFlowGroups, q), [q]);
  const filteredAiStudio = useMemo(() => filterGroups(vipAiStudioGroups, q), [q]);
  const filteredWebApps = useMemo(
    () => (q ? vipWebApps.filter((t) => t.name.toLowerCase().includes(q)) : vipWebApps),
    [q]
  );
  const filteredPromptGroups = useMemo(() => {
    if (!q) return vipPromptGroups;
    return vipPromptGroups
      .map((g) => ({ ...g, prompts: g.prompts.filter((p) => p.title.toLowerCase().includes(q)) }))
      .filter((g) => g.prompts.length > 0);
  }, [q]);

  const noResults =
    filteredFlow.reduce((s, g) => s + g.tools.length, 0) === 0 &&
    filteredAiStudio.reduce((s, g) => s + g.tools.length, 0) === 0 &&
    filteredWebApps.length === 0 &&
    filteredPromptGroups.length === 0;

  return (
    <section className="max-w-5xl mx-auto px-5 md:px-8 py-16 md:py-20">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold tracking-widest text-accent2">XEM TRƯỚC</span>
        <h2 className="text-2xl md:text-3xl font-extrabold mt-3 mb-4">
          Bên trong có {vipToolsCount}+ công cụ &amp; {vipPromptsCount} prompt
        </h2>
        <p className="text-txt2 text-sm leading-relaxed max-w-xl mx-auto">
          Xem trước tên đầy đủ của từng công cụ/prompt bên dưới. Link truy cập thật sẽ mở khoá
          ngay sau khi thanh toán thành công.
        </p>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm công cụ hoặc prompt theo tên..."
          aria-label="Tìm công cụ hoặc prompt theo tên"
          className="w-full max-w-md mx-auto block bg-card2 border border-border rounded-full px-5 py-3 text-sm outline-none transition-colors focus:border-accent mt-6"
        />
      </div>

      <div className="space-y-12">
        {noResults && (
          <p className="text-center text-txt2 text-sm">Không tìm thấy nội dung phù hợp.</p>
        )}

        <LockedGroupSection title="Flow App (Google Labs)" groups={filteredFlow} />
        <LockedGroupSection title="AI Studio App" groups={filteredAiStudio} />

        {filteredWebApps.length > 0 && (
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              Web App
              <span className="text-txt2 text-xs font-normal">({filteredWebApps.length})</span>
            </h3>
            <LockedGrid tools={filteredWebApps} />
          </div>
        )}

        {filteredPromptGroups.length > 0 && (
          <div>
            <h3 className="text-lg font-bold mb-4">Kho Prompt Kinh Doanh</h3>
            <div className="space-y-8">
              {filteredPromptGroups.map((g) => (
                <div key={g.group}>
                  <p className="font-semibold text-sm text-accent2 mb-3">{g.group}</p>
                  <div className="grid md:grid-cols-2 gap-3">
                    {g.prompts.map((p) => (
                      <LockedCard key={p.title} label={p.title} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="text-center mt-14">
        <a
          href="#mua-ngay"
          className="grad-btn inline-block text-white font-semibold px-7 py-3.5 rounded-full"
        >
          Mua ngay để mở khoá toàn bộ →
        </a>
      </div>
    </section>
  );
}
