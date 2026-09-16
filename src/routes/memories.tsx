import { createFileRoute } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { MoreHorizontal, Gift, Target, MessageCircle, Heart, Camera, Search, Plus } from "lucide-react";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/memories")({
  head: () => ({
    meta: [
      { title: "Memories — PhoneX" },
      { name: "description", content: "PhoneX remembers the moments that matter to you." },
    ],
  }),
  component: Memories,
});

const memories = [
  { tone: "lavender", Icon: Gift, title: "Mom's birthday", date: "March 12", tag: "Important", note: "Don't forget to call her — she loves voice messages." },
  { tone: "rose", Icon: Target, title: "Fitness goal", date: "Ongoing", tag: "Health", note: "Run 5km three times a week. You're on a 12-day streak." },
  { tone: "sky", Icon: MessageCircle, title: "Conversation with Dad", date: "Last Sunday", tag: "Family", note: "He talked about the trip to Kyoto in spring." },
  { tone: "peach", Icon: Heart, title: "Things you love", date: "Auto", tag: "Personal", note: "Espresso at 7am, slow mornings, jazz at night." },
  { tone: "mint", Icon: Camera, title: "Weekend in Lisbon", date: "Jan 8", tag: "Travel", note: "Saved 24 photos and 3 voice notes from this trip." },
] as const;

const stats = [
  { label: "Total memories", value: "128" },
  { label: "This week", value: "3" },
  { label: "Auto-captured", value: "41" },
];

function Memories() {
  const t = useT();
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-8">
        <div className="flex items-center justify-end gap-2 lg:hidden">
          <button className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <MoreHorizontal className="w-[18px] h-[18px] text-foreground/70" />
          </button>
        </div>

        <div className="mt-7 lg:mt-0 lg:flex lg:items-end lg:justify-between lg:gap-6">
          <div>
            <h1 className="text-[28px] font-bold tracking-tight">{t("Memory timeline")}</h1>
            <p className="text-sm text-muted-foreground mt-1">{t("Moments PhoneX is keeping for you")}</p>
          </div>
          <button className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-ai px-4 py-2.5 text-[13px] font-semibold text-white shadow-soft transition-transform hover:scale-[1.02]">
            <Plus className="h-4 w-4" /> {t("New memory")}
          </button>
        </div>

        {/* Library toolbar */}
        <div className="mt-5 lg:mt-6 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-4">
          <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2.5 shadow-soft">
            <Search className="h-4 w-4 shrink-0 text-foreground/40" />
            <input
              placeholder={t("Search memories")}
              className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="mt-3 hidden lg:mt-0 lg:flex lg:items-center lg:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border/60 bg-card px-4 py-2 text-right shadow-soft">
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{t(s.label)}</p>
                <p className="text-sm font-bold tracking-tight">{s.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto scrollbar-none -mx-6 px-6 lg:mx-0 lg:flex-wrap lg:px-0">
          {["All", "Personal", "Family", "Health", "Travel", "Ideas"].map((tab, i) => (
            <button key={tab} className={`whitespace-nowrap text-xs px-3.5 py-2 rounded-full border ${
              i === 0 ? "bg-foreground text-background border-foreground" : "bg-card border-border text-foreground/70"
            }`}>{t(tab)}</button>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4">
          {memories.map((m, i) => {
            const toneBg: Record<string, string> = {
              lavender: "bg-lavender-soft", rose: "bg-rose-soft", sky: "bg-sky-soft", peach: "bg-peach-soft", mint: "bg-mint-soft",
            };
            const grad: Record<string, string> = {
              lavender: "bg-gradient-lavender", rose: "bg-gradient-rose", sky: "bg-gradient-sky", peach: "bg-gradient-peach", mint: "bg-gradient-sky",
            };
            const Icon = m.Icon;
            return (
              <article key={i} className="flex h-full flex-col rounded-3xl border border-border/60 bg-card p-4 shadow-soft transition-shadow hover:shadow-card">
                <div className="flex items-start gap-3">
                  <div className={`w-11 h-11 rounded-2xl ${grad[m.tone]} grid place-items-center text-white shadow-soft shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{m.title}</p>
                    <p className="text-[11px] text-muted-foreground">{m.date}</p>
                  </div>
                </div>
                <p className="mt-3 flex-1 text-xs leading-relaxed text-foreground/70">{m.note}</p>
                <div className="mt-3 flex items-center justify-between border-t border-border/60 pt-3">
                  <span className={`inline-block text-[10px] font-medium px-2 py-0.5 rounded-full ${toneBg[m.tone]} text-foreground/70`}>
                    {m.tag}
                  </span>
                  <button aria-label={t("More")} className="grid h-7 w-7 place-items-center rounded-full text-foreground/40 transition-colors hover:bg-secondary hover:text-foreground">
                    <MoreHorizontal className="h-4 w-4" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
