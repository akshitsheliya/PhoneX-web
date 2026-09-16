import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, X, Mic } from "lucide-react";
import { useT } from "@/lib/i18n";

type State = "listening" | "thinking" | "speaking";

export function PhonexAIOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const t = useT();
  const [state, setState] = useState<State>("listening");
  const [mounted, setMounted] = useState(false);
  const startY = useRef<number | null>(null);

  useEffect(() => {
    if (!open) return;
    setMounted(false);
    setState("listening");
    const r1 = requestAnimationFrame(() => setMounted(true));
    const t1 = setTimeout(() => setState("thinking"), 2600);
    const t2 = setTimeout(() => setState("speaking"), 4600);
    const t3 = setTimeout(() => setState("listening"), 8000);
    return () => {
      cancelAnimationFrame(r1);
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const statusText =
    state === "listening" ? t("Listening…")
    : state === "thinking" ? t("Thinking…")
    : t("Speaking…");

  return (
    <div
      className="absolute inset-0 z-[60]"
      onTouchStart={(e) => (startY.current = e.touches[0]?.clientY ?? null)}
      onTouchMove={(e) => {
        if (startY.current == null) return;
        const dy = (e.touches[0]?.clientY ?? 0) - startY.current;
        if (dy > 80) { startY.current = null; onClose(); }
      }}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/35 backdrop-blur-2xl transition-opacity duration-500 ${
          mounted ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-16 w-[70%] h-[70%] rounded-full opacity-60 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.85 0.12 295) 0%, transparent 70%)" }} />
        <div className="absolute -bottom-32 -right-16 w-[80%] h-[80%] rounded-full opacity-50 blur-3xl"
          style={{ background: "radial-gradient(circle, oklch(0.82 0.13 235) 0%, transparent 70%)" }} />
      </div>

      {/* Content */}
      <div
        className={`relative h-full flex flex-col items-center px-6 pt-16 pb-10 transition-all duration-500 ${
          mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
      >
        {/* Top */}
        <div className="text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/70 font-semibold">PhoneX AI</p>
          <p className="mt-2 text-2xl font-semibold text-white tracking-tight">{statusText}</p>
        </div>

        {/* Orb */}
        <div className="flex-1 grid place-items-center w-full">
          <div className="relative w-[300px] h-[300px] grid place-items-center">
            {/* Glow */}
            <span className="absolute inset-0 rounded-full bg-gradient-ai opacity-40 blur-3xl animate-breathe" />
            {/* Rings */}
            <span className="absolute inset-4 rounded-full border border-white/25 animate-shimmer-wave" />
            <span
              className="absolute inset-12 rounded-full border border-white/20 animate-shimmer-wave"
              style={{ animationDirection: "reverse", animationDuration: state === "thinking" ? "14s" : "22s" }}
            />
            <span className={`absolute inset-0 rounded-full bg-gradient-ai opacity-25 ${
              state === "speaking" ? "animate-pulse-ring" : "animate-pulse-ring"
            }`} />
            {/* Orbiting particles */}
            {state === "thinking" && (
              <div className="absolute inset-0 animate-[spin_6s_linear_infinite]">
                {Array.from({ length: 6 }).map((_, i) => {
                  const a = (i / 6) * Math.PI * 2;
                  return (
                    <span
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                      style={{
                        left: `calc(50% + ${Math.cos(a) * 130}px - 3px)`,
                        top: `calc(50% + ${Math.sin(a) * 130}px - 3px)`,
                      }}
                    />
                  );
                })}
              </div>
            )}
            {/* Core */}
            <div
              className={`relative w-44 h-44 rounded-full bg-gradient-orb shadow-orb grid place-items-center animate-breathe ${
                state === "thinking" ? "animate-[spin_10s_linear_infinite]" : ""
              }`}
              style={ state === "speaking" ? { transform: "scale(1.05)", transition: "transform 400ms ease-out" } : undefined }
            >
              <div className="absolute inset-3 rounded-full bg-white/30 backdrop-blur-md" />
              <Mic className="relative w-10 h-10 text-white" strokeWidth={2.2} />
            </div>
          </div>
        </div>

        {/* Waveform */}
        <div className="flex items-end justify-center gap-1 h-12 mb-6">
          {Array.from({ length: 36 }).map((_, i) => (
            <span
              key={i}
              className="w-[3px] rounded-full bg-white/85 animate-breathe"
              style={{
                height: `${20 + Math.sin(i * 0.5) * 22 + (i % 5) * 5}%`,
                animationDelay: `${i * 55}ms`,
                animationDuration:
                  state === "thinking" ? `${2.4 + (i % 4) * 0.2}s`
                  : state === "speaking" ? `${0.9 + (i % 4) * 0.15}s`
                  : `${1.4 + (i % 4) * 0.2}s`,
              }}
            />
          ))}
        </div>

        {/* Bottom actions */}
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/chat"
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-sm font-medium shadow-soft active:scale-95 transition-transform"
          >
            <MessageCircle className="w-4 h-4" /> {t("Chat")}
          </Link>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-foreground text-sm font-medium shadow-card active:scale-95 transition-transform"
          >
            <X className="w-4 h-4" /> {t("Close")}
          </button>
        </div>
      </div>
    </div>
  );
}
