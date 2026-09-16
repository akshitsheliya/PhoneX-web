import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/personality")({
  head: () => ({
    meta: [
      { title: "PhoneX Personality" },
      { name: "description", content: "Choose how your AI companion speaks to you." },
    ],
  }),
  component: PersonalityPage,
});

const personalities = [
  { id: "friendly", label: "Friendly", tone: "bg-gradient-peach" },
  { id: "motivational", label: "Motivational", tone: "bg-gradient-rose" },
  { id: "professional", label: "Professional", tone: "bg-gradient-sky" },
  { id: "calm", label: "Calm", tone: "bg-gradient-lavender" },
] as const;

function PersonalityPage() {
  const [picked, setPicked] = useState<string>("calm");
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/profile" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px] text-foreground/70" />
          </Link>
          <p className="text-sm font-semibold">Personality</p>
          <span className="w-10 h-10" />
        </div>

        <div className="mt-7">
          <h1 className="text-[26px] font-bold tracking-tight">PhoneX personality</h1>
          <p className="text-sm text-muted-foreground mt-1">How your companion speaks to you</p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2.5">
          {personalities.map((p) => {
            const active = picked === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setPicked(p.id)}
                className={`relative rounded-2xl p-4 text-left transition-all overflow-hidden ${
                  active ? "ring-2 ring-primary shadow-card" : "bg-card border border-border"
                }`}
              >
                {active && <span className={`absolute inset-0 ${p.tone} opacity-90`} />}
                <span className={`relative text-sm font-semibold ${active ? "text-white" : "text-foreground"}`}>
                  {p.label}
                </span>
                <span className={`relative block text-[10px] mt-1 ${active ? "text-white/80" : "text-muted-foreground"}`}>
                  Tap to use
                </span>
              </button>
            );
          })}
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}
