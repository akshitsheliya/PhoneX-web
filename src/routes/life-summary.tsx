import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ChevronLeft, CheckCircle2, Heart, Smile, Bookmark, Sparkles, LineChart, ArrowUpRight, Dumbbell, Briefcase, GraduationCap, Coffee } from "lucide-react";

export const Route = createFileRoute("/life-summary")({
  head: () => ({ meta: [{ title: "Life Summary — PhoneX" }, { name: "description", content: "All your life summary cards and analytics." }] }),
  component: LifeSummary,
});

const cards = [
  { to: "/tasks", Icon: CheckCircle2, label: "Tasks", value: "8/10", sub: "completed", tone: "bg-lavender-soft", grad: "bg-gradient-lavender" },
  { to: "/fitness", Icon: Heart, label: "Fitness", value: "6.4 km", sub: "walked today", tone: "bg-rose-soft", grad: "bg-gradient-rose" },
  { to: "/mood", Icon: Smile, label: "Mood", value: "Calm", sub: "balanced", tone: "bg-peach-soft", grad: "bg-gradient-peach" },
  { to: "/memories", Icon: Bookmark, label: "Memories", value: "3 saved", sub: "this week", tone: "bg-sky-soft", grad: "bg-gradient-sky" },
] as const;

const domains = [
  { Icon: Dumbbell, label: "Fitness", value: "78%", note: "Run 5km · 3× / week", progress: 78, accent: "bg-gradient-rose" },
  { Icon: Briefcase, label: "Career", value: "Q1", note: "Lead 2 product launches", progress: 55, accent: "bg-gradient-lavender" },
  { Icon: GraduationCap, label: "Learning", value: "12h", note: "This month · +2h", progress: 64, accent: "bg-gradient-sky" },
  { Icon: Coffee, label: "Personal", value: "Daily", note: "Slow mornings, jazz at night", progress: 90, accent: "bg-gradient-peach" },
] as const;

const analytics = [
  { label: "Productive hours", value: "6h 20m", sub: "+18% vs last week" },
  { label: "Focus sessions", value: "4", sub: "avg 45 min" },
  { label: "Sleep quality", value: "82%", sub: "consistent" },
  { label: "Social time", value: "2h 10m", sub: "with family" },
];

const suggestions = [
  { label: "Finish your evening walk", sub: "1.6 km to your goal", to: "/fitness" as const },
  { label: "Review weekly goals", sub: "2 goals off-track", to: "/tasks" as const },
  { label: "Save a memory from today", sub: "Nothing saved yet", to: "/memories" as const },
];

function LifeSummary() {
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-8">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/app" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px]" />
          </Link>
          <p className="text-sm font-semibold">Life Summary</p>
          <div className="w-10" />
        </div>

        <div className="mt-6 lg:mt-0 lg:flex lg:items-end lg:justify-between lg:gap-6">
          <div>
            <h1 className="text-[26px] font-bold tracking-tight lg:text-[28px]">Your Life, Today</h1>
            <p className="text-sm text-muted-foreground mt-1">80% productive · balanced day</p>
          </div>
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            {["Today", "Week", "Month"].map((f, i) => (
              <span
                key={f}
                className={`rounded-full px-3.5 py-1.5 text-[12px] font-medium ${
                  i === 0 ? "bg-gradient-ai text-white shadow-soft" : "border border-border/60 bg-card text-foreground/70"
                }`}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Snapshot metrics */}
        <div className="mt-4 grid grid-cols-2 gap-3 lg:mt-6 lg:grid-cols-4 lg:gap-4">
          {cards.map((c) => (
            <Link key={c.label} to={c.to} className={`rounded-3xl p-4 ${c.tone} transition-transform hover:scale-[1.01]`}>
              <div className={`w-9 h-9 rounded-2xl ${c.grad} grid place-items-center text-white shadow-soft`}>
                <c.Icon className="w-[18px] h-[18px]" />
              </div>
              <p className="mt-3 text-xs text-foreground/60">{c.label}</p>
              <p className="text-lg font-bold tracking-tight">{c.value}</p>
              <p className="text-[11px] text-foreground/50">{c.sub}</p>
            </Link>
          ))}
        </div>

        {/* Life domains + analytics side by side on desktop */}
        <div className="lg:mt-8 lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-6 lg:items-start">
          <section className="mt-6 lg:mt-0">
            <p className="text-[12px] uppercase tracking-wider text-muted-foreground font-semibold">Life areas</p>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-4 lg:gap-4">
              {domains.map((d) => (
                <div key={d.label} className="rounded-3xl border border-border/60 bg-card p-4 shadow-soft">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${d.accent} text-white shadow-soft`}>
                        <d.Icon className="h-[18px] w-[18px]" />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold">{d.label}</p>
                        <p className="truncate text-[11px] text-muted-foreground">{d.note}</p>
                      </div>
                    </div>
                    <span className="shrink-0 text-base font-bold tracking-tight">{d.value}</span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-secondary">
                    <div className="h-full rounded-full bg-gradient-ai" style={{ width: `${d.progress}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6 lg:mt-0">
            <p className="text-[12px] uppercase tracking-wider text-muted-foreground font-semibold">Analytics</p>
            <div className="mt-3 grid grid-cols-2 gap-3 lg:mt-4 lg:gap-4">
              {analytics.map((a) => (
                <div key={a.label} className="rounded-3xl bg-card border border-border/60 shadow-soft p-4">
                  <p className="text-[11px] text-muted-foreground">{a.label}</p>
                  <p className="text-lg font-bold tracking-tight mt-1">{a.value}</p>
                  <p className="text-[11px] text-foreground/50">{a.sub}</p>
                </div>
              ))}
            </div>

            {/* AI overview — compact, not a giant gradient slab */}
            <div className="mt-3 rounded-[24px] p-4 bg-gradient-ai text-white shadow-card relative overflow-hidden lg:mt-4 lg:p-5">
              <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" />
              <div className="relative flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/20 backdrop-blur-md">
                  <LineChart className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="inline-flex items-center gap-1.5 text-[10px] bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
                    <Sparkles className="w-3 h-3" /> AI overview
                  </div>
                  <p className="mt-1.5 text-sm font-semibold">You're 12% ahead of your weekly rhythm</p>
                  <p className="text-[11px] text-white/80">Keep evenings light — mornings are your peak.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Smart suggestions */}
        <section className="mt-6 lg:mt-8">
          <p className="text-[12px] uppercase tracking-wider text-muted-foreground font-semibold">✨ Smart suggestions</p>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-4 lg:grid-cols-3 lg:gap-4">
            {suggestions.map((s) => (
              <Link
                key={s.label}
                to={s.to}
                className="group flex items-center gap-3 rounded-3xl border border-border/60 bg-card p-4 shadow-soft transition-shadow hover:shadow-card"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{s.label}</p>
                  <p className="truncate text-[11px] text-muted-foreground">{s.sub}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground/30 transition-colors group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </section>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
