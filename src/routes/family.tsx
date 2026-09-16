import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ChevronLeft, Cake, Camera, Film, BookOpen, CalendarHeart, Sparkles } from "lucide-react";

export const Route = createFileRoute("/family")({
  head: () => ({
    meta: [
      { title: "Family AI — PhoneX" },
      { name: "description", content: "Family memories, tree, and stories preserved by PhoneX." },
    ],
  }),
  component: Family,
});

const tiles = [
  { label: "Timeline", sub: "120 moments", Icon: CalendarHeart, grad: "bg-gradient-lavender" },
  { label: "Family tree", sub: "4 generations", Icon: BookOpen, grad: "bg-gradient-sky" },
  { label: "Photos", sub: "2,140", Icon: Camera, grad: "bg-gradient-rose" },
  { label: "Videos", sub: "58", Icon: Film, grad: "bg-gradient-peach" },
] as const;

const dates = [
  { label: "Mom's birthday", date: "Mar 12" },
  { label: "Parents' anniversary", date: "Jul 04" },
  { label: "Cousin Mia's birthday", date: "Sep 21" },
];

const questions = [
  "Who is my grandfather?",
  "Show family history from 90s",
  "When is cousin's birthday?",
];

function Family() {
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/app" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px]" />
          </Link>
          <p className="text-sm font-semibold">Family</p>
          <div className="w-10" />
        </div>

        <div className="mt-7">
          <h1 className="text-[28px] font-bold tracking-tight">Family Memories</h1>
          <p className="text-sm text-muted-foreground mt-1">Generations, preserved together</p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          {tiles.map((t) => (
            <div key={t.label} className="rounded-3xl p-4 bg-card border border-border/60 shadow-soft">
              <div className={`w-10 h-10 rounded-2xl ${t.grad} grid place-items-center text-white shadow-soft`}>
                <t.Icon className="w-[18px] h-[18px]" />
              </div>
              <p className="mt-3 text-sm font-semibold">{t.label}</p>
              <p className="text-[11px] text-muted-foreground">{t.sub}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-7 text-sm font-semibold">Important dates</h2>
        <div className="mt-3 rounded-3xl bg-card border border-border/60 shadow-soft divide-y divide-border/60">
          {dates.map((d) => (
            <div key={d.label} className="flex items-center gap-3 p-4">
              <div className="w-9 h-9 rounded-xl bg-peach-soft grid place-items-center">
                <Cake className="w-4 h-4 text-foreground/70" />
              </div>
              <p className="flex-1 text-sm font-medium">{d.label}</p>
              <span className="text-[11px] text-muted-foreground">{d.date}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[28px] p-5 bg-gradient-ai text-white shadow-card relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" />
          <div className="relative inline-flex items-center gap-1.5 text-[11px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            <Sparkles className="w-3 h-3" /> Ask PhoneX
          </div>
          <ul className="relative mt-3 space-y-2">
            {questions.map((q) => (
              <li key={q} className="text-sm bg-white/15 backdrop-blur-sm px-3 py-2.5 rounded-2xl">"{q}"</li>
            ))}
          </ul>
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
