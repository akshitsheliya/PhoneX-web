import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ChevronLeft, Footprints, Flame, Route as RouteIcon, Dumbbell, Sparkles } from "lucide-react";

export const Route = createFileRoute("/fitness")({
  head: () => ({ meta: [{ title: "Fitness — PhoneX" }, { name: "description", content: "Steps, calories, distance and AI health insights." }] }),
  component: Fitness,
});

const stats = [
  { Icon: Footprints, label: "Steps", value: "9,240", tone: "bg-rose-soft", grad: "bg-gradient-rose" },
  { Icon: Flame, label: "Calories", value: "428 kcal", tone: "bg-peach-soft", grad: "bg-gradient-peach" },
  { Icon: RouteIcon, label: "Distance", value: "6.4 km", tone: "bg-sky-soft", grad: "bg-gradient-sky" },
  { Icon: Dumbbell, label: "Workouts", value: "3 / 5", tone: "bg-lavender-soft", grad: "bg-gradient-lavender" },
];
const week = [40, 65, 30, 78, 55, 90, 72];
const history = [
  { day: "Today", type: "Morning run", dur: "32 min" },
  { day: "Yesterday", type: "Strength", dur: "45 min" },
  { day: "Sun", type: "Yoga", dur: "40 min" },
];
const tips = [
  "Try a 10-min walk after lunch to boost focus",
  "Hydration is 20% below your average — add 2 glasses",
  "Great streak! 3 workouts this week already",
];

function Fitness() {
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/app" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px]" />
          </Link>
          <p className="text-sm font-semibold">Fitness</p>
          <div className="w-10" />
        </div>

        <div className="mt-6">
          <h1 className="text-[26px] font-bold tracking-tight">Your Body Today</h1>
          <p className="text-sm text-muted-foreground mt-1">Balanced day — keep the streak going</p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          {stats.map((s) => (
            <div key={s.label} className={`rounded-3xl p-4 ${s.tone}`}>
              <div className={`w-9 h-9 rounded-2xl ${s.grad} grid place-items-center text-white shadow-soft`}>
                <s.Icon className="w-[18px] h-[18px]" />
              </div>
              <p className="mt-3 text-xs text-foreground/60">{s.label}</p>
              <p className="text-base font-bold tracking-tight">{s.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-3xl p-4 bg-card border border-border/60 shadow-soft">
          <p className="text-sm font-semibold">Weekly progress</p>
          <div className="mt-4 flex items-end justify-between gap-2 h-24">
            {week.map((h, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full rounded-t-lg bg-gradient-ai" style={{ height: `${h}%` }} />
                <span className="text-[10px] text-foreground/50">{["M","T","W","T","F","S","S"][i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">Workout history</p>
          <div className="mt-2 rounded-3xl bg-card border border-border/60 shadow-soft divide-y divide-border/60">
            {history.map((h) => (
              <div key={h.day} className="flex items-center gap-3 p-4">
                <div className="w-9 h-9 rounded-xl bg-gradient-rose grid place-items-center text-white shadow-soft">
                  <Dumbbell className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{h.type}</p>
                  <p className="text-[11px] text-muted-foreground">{h.day} · {h.dur}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-[24px] p-5 bg-gradient-ai text-white shadow-card relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" />
          <div className="relative inline-flex items-center gap-1.5 text-[11px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            <Sparkles className="w-3 h-3" /> AI health suggestions
          </div>
          <ul className="relative mt-3 space-y-2">
            {tips.map((s) => (
              <li key={s} className="text-sm bg-white/15 backdrop-blur-sm px-3 py-2.5 rounded-2xl">{s}</li>
            ))}
          </ul>
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
