import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ChevronLeft, Activity, HeartPulse, Wallet, GraduationCap, Plane, TrendingUp, AlertTriangle, Target, Briefcase, Cake, Moon, Sun, Repeat } from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Life Insights — PhoneX" },
      { name: "description", content: "Analytics across your productivity, health, finance, learning and travel." },
    ],
  }),
  component: Insights,
});

const stats = [
  { label: "Productivity", value: "84%", trend: "+6%", Icon: Activity, tone: "bg-sky-soft", grad: "bg-gradient-sky" },
  { label: "Health", value: "Good", trend: "stable", Icon: HeartPulse, tone: "bg-rose-soft", grad: "bg-gradient-rose" },
  { label: "Finance", value: "$4,210", trend: "+12%", Icon: Wallet, tone: "bg-mint-soft", grad: "bg-gradient-sky" },
  { label: "Learning", value: "12h", trend: "+2h", Icon: GraduationCap, tone: "bg-lavender-soft", grad: "bg-gradient-lavender" },
  { label: "Travel", value: "3 trips", trend: "this yr", Icon: Plane, tone: "bg-peach-soft", grad: "bg-gradient-peach" },
] as const;

const predictions = [
  { Icon: Target, label: "Goal forecast", text: "You'll hit Q1 fitness goal in 9 days" },
  { Icon: Briefcase, label: "Career growth", text: "Promotion-ready window: April" },
  { Icon: AlertTriangle, label: "Burnout warning", text: "Sleep down 18% — slow down next week" },
  { Icon: TrendingUp, label: "Financial trend", text: "Savings on track for +18% YoY" },
];

const weekly = [
  { day: "M", value: 62 },
  { day: "T", value: 78 },
  { day: "W", value: 84 },
  { day: "T", value: 71 },
  { day: "F", value: 90 },
  { day: "S", value: 48 },
  { day: "S", value: 56 },
];

function Insights() {
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-8">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/app" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px]" />
          </Link>
          <p className="text-sm font-semibold">Insights</p>
          <div className="w-10" />
        </div>

        <div className="mt-7 lg:mt-0">
          <h1 className="text-[28px] font-bold tracking-tight">Life Insights</h1>
          <p className="text-sm text-muted-foreground mt-1">AI analyzing patterns across your life</p>
        </div>

        {/* Metric strip */}
        <div className="mt-5 grid grid-cols-2 gap-3 lg:mt-6 lg:grid-cols-5 lg:gap-4">
          {stats.map((s) => (
            <div key={s.label} className={`rounded-3xl p-4 ${s.tone}`}>
              <div className="flex items-center justify-between">
                <div className={`w-9 h-9 rounded-2xl ${s.grad} grid place-items-center text-white shadow-soft`}>
                  <s.Icon className="w-[18px] h-[18px]" />
                </div>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/70 text-foreground/70">{s.trend}</span>
              </div>
              <p className="mt-3 text-xs text-foreground/60">{s.label}</p>
              <p className="text-lg font-bold tracking-tight">{s.value}</p>
            </div>
          ))}
        </div>

        {/* Trend + life timeline */}
        <div className="lg:mt-8 lg:grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-6 lg:items-start">
          <section className="mt-6 rounded-3xl border border-border/60 bg-card p-5 shadow-soft lg:mt-0">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-semibold">Weekly life rhythm</p>
                <p className="text-[11px] text-muted-foreground">Energy & output balance</p>
              </div>
              <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-primary">+6% vs last week</span>
            </div>
            <div className="mt-5 flex h-40 items-end gap-2.5">
              {weekly.map((w, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-2">
                  <div className="flex w-full flex-1 items-end">
                    <div
                      className="w-full rounded-t-xl rounded-b-md bg-gradient-ai"
                      style={{ height: `${w.value}%` }}
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground">{w.day}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-6 space-y-4 lg:mt-0">
            <div className="rounded-[24px] p-5 bg-gradient-ai text-white shadow-card overflow-hidden relative">
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" />
              <div className="relative flex items-center gap-3">
                <div className="w-11 h-11 shrink-0 rounded-2xl bg-white/20 backdrop-blur-md grid place-items-center">
                  <Cake className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] text-white/80">Birthday · March 14</p>
                  <p className="text-sm font-semibold">28 years · 10,234 days lived</p>
                </div>
              </div>
              <div className="relative mt-4 h-1.5 rounded-full bg-white/20 overflow-hidden">
                <div className="h-full bg-white/80" style={{ width: "35%" }} />
              </div>
              <p className="relative mt-2 text-[11px] text-white/80">Life timeline · ~35% of average lifespan</p>
            </div>

            <div className="rounded-3xl border border-border/60 bg-card p-5 shadow-soft">
              <p className="text-sm font-semibold">Personal patterns</p>
              <div className="mt-3 space-y-2.5">
                {[
                  { Icon: Sun, label: "Most productive 9–11 AM" },
                  { Icon: Moon, label: "Best sleep on Sun & Wed" },
                  { Icon: Repeat, label: "You repeat workouts every 2 days" },
                ].map((p) => (
                  <div key={p.label} className="flex items-center gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary">
                      <p.Icon className="h-4 w-4 text-foreground/70" />
                    </div>
                    <p className="text-sm font-medium">{p.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Predictions */}
        <section className="mt-6 lg:mt-8">
          <p className="text-[12px] uppercase tracking-wider text-muted-foreground font-semibold">AI predictions</p>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-4 lg:grid-cols-4 lg:gap-4">
            {predictions.map((p) => (
              <div key={p.label} className="flex h-full items-start gap-3 rounded-3xl border border-border/60 bg-card p-4 shadow-soft">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-ai text-white shadow-soft">
                  <p.Icon className="h-[18px] w-[18px]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] text-muted-foreground">{p.label}</p>
                  <p className="mt-0.5 text-sm font-medium leading-snug">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
