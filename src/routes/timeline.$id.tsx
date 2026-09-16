import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ChevronLeft, Dumbbell, Briefcase, Coffee, BookOpen, Users, Clock, MapPin, CheckCircle2, ListChecks } from "lucide-react";

type Detail = {
  title: string;
  subtitle: string;
  badge: string;
  time: string;
  Icon: typeof Dumbbell;
  grad: string;
  tone: string;
  sections: { label: string; Icon: typeof Clock; lines: string[] }[];
  progress?: number;
};

const data: Record<string, Detail> = {
  workout: {
    title: "Morning workout",
    subtitle: "Upper body · strength",
    badge: "Done",
    time: "07:00 · 45 min",
    Icon: Dumbbell, grad: "bg-gradient-rose", tone: "bg-rose-soft",
    progress: 100,
    sections: [
      { label: "Summary", Icon: CheckCircle2, lines: ["Strength session focused on chest & arms.", "Energy: high · Form: clean"] },
      { label: "Exercises", Icon: ListChecks, lines: ["Bench press · 4 × 8", "Push-ups · 3 × 15", "Bicep curls · 3 × 12", "Plank · 3 × 60s"] },
    ],
  },
  meeting: {
    title: "Work meeting",
    subtitle: "Product sync",
    badge: "Soon",
    time: "10:00 · 1 hr",
    Icon: Briefcase, grad: "bg-gradient-sky", tone: "bg-sky-soft",
    sections: [
      { label: "Details", Icon: Clock, lines: ["Weekly product sync with design & engineering.", "Room: Pluto · Google Meet link ready"] },
      { label: "Notes", Icon: ListChecks, lines: ["Review Q1 launch scope", "Sign-off on onboarding flow", "Assign next sprint owners"] },
    ],
  },
  lunch: {
    title: "Lunch break",
    subtitle: "Bistrot 24",
    badge: "1h",
    time: "13:00 · 45 min",
    Icon: Coffee, grad: "bg-gradient-peach", tone: "bg-peach-soft",
    sections: [
      { label: "Food reminder", Icon: CheckCircle2, lines: ["Light meal recommended after morning workout.", "Suggested: grilled chicken bowl + water"] },
      { label: "Schedule", Icon: MapPin, lines: ["Bistrot 24 · 6 min walk", "Back in office by 13:45"] },
    ],
  },
  learning: {
    title: "Learning session",
    subtitle: "Design systems",
    badge: "Auto",
    time: "16:00 · 30 min",
    Icon: BookOpen, grad: "bg-gradient-sky", tone: "bg-mint-soft",
    progress: 60,
    sections: [
      { label: "Today's focus", Icon: ListChecks, lines: ["Chapter 4: Tokens & theming", "Practice: build a color scale"] },
      { label: "Progress", Icon: CheckCircle2, lines: ["12 hr studied this month", "On track for monthly goal"] },
    ],
  },
  family: {
    title: "Family time",
    subtitle: "Dinner at Mom's",
    badge: "Upcoming",
    time: "19:00 · 2 hr",
    Icon: Users, grad: "bg-gradient-lavender", tone: "bg-lavender-soft",
    sections: [
      { label: "Details", Icon: Clock, lines: ["Casual dinner with family.", "Bring: dessert · flowers"] },
      { label: "Reminder", Icon: MapPin, lines: ["Mom's place · 18 min drive", "Leave by 18:40 to be on time"] },
    ],
  },
};

export const Route = createFileRoute("/timeline/$id")({
  head: ({ params }) => {
    const d = data[params.id];
    return {
      meta: [
        { title: d ? `${d.title} — PhoneX` : "Timeline — PhoneX" },
        { name: "description", content: d?.subtitle ?? "Timeline detail." },
      ],
    };
  },
  loader: ({ params }) => {
    if (!data[params.id]) throw notFound();
    return null;
  },
  errorComponent: ({ reset }) => (
    <PhoneFrame>
      <div className="px-6 py-10 text-center">
        <p className="text-sm">Something went wrong.</p>
        <button onClick={reset} className="mt-3 text-xs text-primary">Retry</button>
      </div>
    </PhoneFrame>
  ),
  notFoundComponent: () => (
    <PhoneFrame>
      <div className="px-6 py-10 text-center">
        <p className="text-sm">Timeline item not found.</p>
        <Link to="/activity" className="mt-3 text-xs text-primary inline-block">Back to My Life</Link>
      </div>
    </PhoneFrame>
  ),
  component: Detail,
});

function Detail() {
  const { id } = Route.useParams();
  const d = data[id]!;
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/activity" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px] text-foreground/70" />
          </Link>
          <p className="text-sm font-semibold">Timeline</p>
          <span className="w-10" />
        </div>

        <div className={`mt-6 rounded-[28px] p-5 ${d.tone}`}>
          <div className="flex items-center justify-between">
            <div className={`w-12 h-12 rounded-2xl ${d.grad} grid place-items-center text-white shadow-soft`}>
              <d.Icon className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/70 text-foreground/70">{d.badge}</span>
          </div>
          <h1 className="mt-4 text-[22px] font-bold tracking-tight">{d.title}</h1>
          <p className="text-xs text-foreground/60">{d.subtitle}</p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-foreground/70 bg-white/60 px-2 py-1 rounded-full">
            <Clock className="w-3 h-3" /> {d.time}
          </p>
          {d.progress !== undefined && (
            <div className="mt-4">
              <div className="flex items-center justify-between text-[11px] text-foreground/60">
                <span>Progress</span>
                <span>{d.progress}%</span>
              </div>
              <div className="mt-1.5 h-1.5 rounded-full bg-white/60 overflow-hidden">
                <div className={`h-full ${d.grad}`} style={{ width: `${d.progress}%` }} />
              </div>
            </div>
          )}
        </div>

        <div className="mt-5 space-y-3 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
          {d.sections.map((s) => (
            <div key={s.label} className="rounded-3xl p-4 bg-card border border-border/60 shadow-soft">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-secondary grid place-items-center">
                  <s.Icon className="w-4 h-4 text-foreground/70" />
                </div>
                <p className="text-sm font-semibold">{s.label}</p>
              </div>
              <ul className="mt-3 space-y-2">
                {s.lines.map((l) => (
                  <li key={l} className="text-sm text-foreground/80 pl-1">• {l}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
