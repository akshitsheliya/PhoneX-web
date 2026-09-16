import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ChevronLeft, MoreHorizontal, MessageCircle, Square, Mic } from "lucide-react";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/voice")({
  head: () => ({
    meta: [
      { title: "Talking to PhoneX" },
      { name: "description", content: "Voice conversation with your PhoneX AI companion." },
    ],
  }),
  component: Voice,
});

function Voice() {
  const t = useT();
  return (
    <PhoneFrame>
      <div className="relative h-full flex flex-col px-6 pb-10 animate-fade-up"
        style={{ background: "radial-gradient(circle at 50% 35%, oklch(0.96 0.04 295) 0%, oklch(0.99 0.005 280) 70%)" }}>
        {/* Header */}
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/app" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px]" />
          </Link>
          <p className="text-sm font-semibold">PhoneX</p>
          <button className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <MoreHorizontal className="w-[18px] h-[18px]" />
          </button>
        </div>

        {/* Orb */}
        <div className="flex-1 grid place-items-center">
          <div className="relative w-[280px] h-[280px] grid place-items-center">
            <span className="absolute inset-0 rounded-full bg-gradient-ai opacity-30 blur-3xl animate-breathe" />
            <span className="absolute inset-6 rounded-full border border-primary/20 animate-shimmer-wave" />
            <span className="absolute inset-12 rounded-full border border-primary/15 animate-shimmer-wave" style={{ animationDirection: "reverse", animationDuration: "22s" }} />
            <span className="absolute inset-0 rounded-full bg-gradient-ai opacity-20 animate-pulse-ring" />
            <div className="relative w-40 h-40 rounded-full bg-gradient-orb shadow-orb grid place-items-center animate-breathe">
              <div className="absolute inset-3 rounded-full bg-white/30 backdrop-blur-md" />
              <Mic className="relative w-9 h-9 text-white" strokeWidth={2.2} />
            </div>
          </div>
        </div>

        <div className="text-center -mt-6">
          <p className="text-xl font-semibold tracking-tight">{t("Listening…")}</p>
          <p className="text-sm text-muted-foreground mt-1">{t("Hi Akshit, I'm here.")}</p>
        </div>

        {/* Waveform */}
        <div className="mt-6 flex items-end justify-center gap-1 h-10">
          {Array.from({ length: 32 }).map((_, i) => (
            <span key={i}
              className="w-[3px] rounded-full bg-gradient-ai animate-breathe"
              style={{
                height: `${20 + Math.sin(i * 0.6) * 18 + (i % 5) * 4}%`,
                animationDelay: `${i * 60}ms`,
                animationDuration: `${1.4 + (i % 4) * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Controls: Microphone · Chat · Stop */}
        <div className="mt-6 flex items-center justify-center gap-5">
          <button className="flex flex-col items-center gap-1.5">
            <span className="w-14 h-14 rounded-full bg-white shadow-card grid place-items-center">
              <Mic className="w-5 h-5 text-foreground/80" />
            </span>
            <span className="text-[10px] text-muted-foreground">{t("Microphone")}</span>
          </button>
          <Link to="/chat" className="flex flex-col items-center gap-1.5">
            <span className="w-16 h-16 rounded-full bg-gradient-ai shadow-orb grid place-items-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </span>
            <span className="text-[10px] text-muted-foreground">{t("Chat")}</span>
          </Link>
          <Link to="/app" className="flex flex-col items-center gap-1.5">
            <span className="w-14 h-14 rounded-full bg-white shadow-card grid place-items-center">
              <Square className="w-5 h-5 text-foreground/80" fill="currentColor" />
            </span>
            <span className="text-[10px] text-muted-foreground">{t("Stop")}</span>
          </Link>
        </div>
      </div>
    </PhoneFrame>
  );
}
