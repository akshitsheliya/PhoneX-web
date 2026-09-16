import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ChevronLeft, Brain, AudioLines, Compass, BookHeart, Star } from "lucide-react";

export const Route = createFileRoute("/clone")({
  head: () => ({
    meta: [
      { title: "My AI Clone — PhoneX" },
      { name: "description", content: "Your evolving digital self — learning how you think." },
    ],
  }),
  component: Clone,
});

const sections = [
  { label: "Personality learning", value: "72%", Icon: Brain, grad: "bg-gradient-lavender" },
  { label: "Voice clone", value: "Ready", Icon: AudioLines, grad: "bg-gradient-rose" },
  { label: "Decision style", value: "Analyzed", Icon: Compass, grad: "bg-gradient-sky" },
  { label: "Life experiences", value: "318", Icon: BookHeart, grad: "bg-gradient-peach" },
  { label: "Values", value: "12 mapped", Icon: Star, grad: "bg-gradient-lavender" },
] as const;

function Clone() {
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/app" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px]" />
          </Link>
          <p className="text-sm font-semibold">AI Clone</p>
          <div className="w-10" />
        </div>

        <div className="lg:grid lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-6 lg:items-start">
          {/* Identity */}
          <div className="mt-6 flex flex-col items-center text-center lg:mt-0 lg:rounded-[28px] lg:border lg:border-border/60 lg:bg-card lg:p-7 lg:shadow-soft">
            <div className="relative w-32 h-32 grid place-items-center">
              <span className="absolute inset-0 rounded-full bg-gradient-ai opacity-30 blur-2xl animate-breathe" />
              <div className="relative w-24 h-24 rounded-full bg-gradient-orb shadow-orb grid place-items-center animate-breathe">
                <div className="w-12 h-12 rounded-full bg-white/40 backdrop-blur-md" />
              </div>
            </div>
            <h1 className="mt-4 text-[24px] font-bold tracking-tight">My AI Clone</h1>
            <p className="text-sm text-muted-foreground mt-1 max-w-[260px]">PhoneX is learning how you think, speak and decide</p>

            {/* Progress */}
            <div className="mt-6 w-full rounded-3xl p-4 bg-card border border-border/60 shadow-soft text-left lg:mt-6 lg:border-0 lg:bg-secondary/50 lg:shadow-none">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold">Learning progress</p>
                <span className="text-xs text-primary font-medium">72%</span>
              </div>
              <div className="mt-3 h-2 rounded-full bg-secondary overflow-hidden lg:bg-background">
                <div className="h-full bg-gradient-ai rounded-full" style={{ width: "72%" }} />
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">Trained on 318 conversations & 1,240 moments</p>
            </div>
          </div>

          {/* Sections */}
          <div>
            <h2 className="mt-6 text-sm font-semibold lg:mt-0 lg:text-base">What PhoneX has learned</h2>
            <div className="mt-3 space-y-3 lg:mt-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
              {sections.map((s) => (
                <div key={s.label} className="rounded-3xl p-4 bg-card border border-border/60 shadow-soft flex items-center gap-3 transition-shadow hover:shadow-card">
                  <div className={`w-11 h-11 shrink-0 rounded-2xl ${s.grad} grid place-items-center text-white shadow-soft`}>
                    <s.Icon className="w-5 h-5" />
                  </div>
                  <p className="flex-1 min-w-0 truncate text-sm font-semibold">{s.label}</p>
                  <span className="text-xs text-foreground/60 font-medium shrink-0">{s.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
