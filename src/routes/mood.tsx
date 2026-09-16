import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ChevronLeft, Smile, Sparkles } from "lucide-react";

export const Route = createFileRoute("/mood")({
  head: () => ({ meta: [{ title: "Mood — PhoneX" }, { name: "description", content: "Track your mood, journal and emotional insights." }] }),
  component: Mood,
});

const week = [
  { d: "Mon", m: "Calm", tone: "bg-sky-soft" },
  { d: "Tue", m: "Focused", tone: "bg-lavender-soft" },
  { d: "Wed", m: "Tired", tone: "bg-peach-soft" },
  { d: "Thu", m: "Happy", tone: "bg-rose-soft" },
  { d: "Fri", m: "Calm", tone: "bg-sky-soft" },
  { d: "Sat", m: "Joyful", tone: "bg-mint-soft" },
  { d: "Sun", m: "Calm", tone: "bg-sky-soft" },
];
const journal = [
  { time: "Morning", note: "Woke up rested. Coffee, sunlight, a slow start." },
  { time: "Afternoon", note: "Solid deep-work block. Felt in flow around 3pm." },
  { time: "Evening", note: "Relaxed dinner with family. Grateful day." },
];
const insights = [
  "Your mood improves on days you walk more than 6km",
  "You feel calmest between 9 and 11 in the morning",
  "Consider a 5-minute breathing session before evening meetings",
];

function Mood() {
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/app" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px]" />
          </Link>
          <p className="text-sm font-semibold">Mood</p>
          <div className="w-10" />
        </div>

        <div className="mt-6 rounded-[28px] p-6 bg-gradient-ai text-white shadow-card relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-white/20 blur-3xl" />
          <div className="relative flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/25 backdrop-blur-md grid place-items-center animate-breathe">
              <Smile className="w-7 h-7" />
            </div>
            <div>
              <p className="text-[11px] text-white/80">Today</p>
              <p className="text-2xl font-bold tracking-tight">Calm</p>
              <p className="text-[11px] text-white/80">Balanced · steady energy</p>
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-3xl p-4 bg-card border border-border/60 shadow-soft">
          <p className="text-sm font-semibold">Weekly mood</p>
          <div className="mt-3 grid grid-cols-7 gap-2">
            {week.map((w) => (
              <div key={w.d} className={`rounded-2xl p-2 text-center ${w.tone}`}>
                <p className="text-[10px] text-foreground/60">{w.d}</p>
                <p className="text-[11px] font-semibold mt-1">{w.m}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">Mood journal</p>
          <div className="mt-2 rounded-3xl bg-card border border-border/60 shadow-soft divide-y divide-border/60">
            {journal.map((j) => (
              <div key={j.time} className="p-4">
                <p className="text-[11px] text-muted-foreground">{j.time}</p>
                <p className="text-sm mt-1">{j.note}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-[24px] p-5 bg-gradient-ai text-white shadow-card relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" />
          <div className="relative inline-flex items-center gap-1.5 text-[11px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            <Sparkles className="w-3 h-3" /> Emotional insights
          </div>
          <ul className="relative mt-3 space-y-2">
            {insights.map((s) => (
              <li key={s} className="text-sm bg-white/15 backdrop-blur-sm px-3 py-2.5 rounded-2xl">{s}</li>
            ))}
          </ul>
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
