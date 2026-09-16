import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { SideMenu } from "@/components/SideMenu";
import { SidebarButton } from "@/components/SidebarButton";
import {
  ChevronLeft, Database, Zap, Users2, Brain, Briefcase, LineChart, Cpu,
  Infinity as InfinityIcon, Sparkles,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/app/features")({
  head: () => ({
    meta: [
      { title: "PhoneX AI Core" },
      { name: "description", content: "Enter the PhoneX AI Operating System." },
    ],
  }),
  component: Features,
});

type Node = {
  to: string;
  label: string;
  preview: string;
  Icon: typeof Database;
  grad: string;
  glow: string;
  x: number; // px from center (stage 340x520)
  y: number;
  size: number; // orb diameter
  labelSide: "left" | "right" | "bottom" | "top";
};

// Organic, non-grid placement around center
const NODES: Node[] = [
  { to: "/family",    label: "Family AI",         preview: "24 members",              Icon: Users2,       grad: "linear-gradient(140deg, oklch(0.92 0.06 15), oklch(0.78 0.12 10))",   glow: "oklch(0.78 0.13 10 / 0.5)",   x:  -8,  y: -175, size: 62, labelSide: "top" },
  { to: "/business",  label: "Business Brain",    preview: "5 projects",              Icon: Briefcase,    grad: "linear-gradient(140deg, oklch(0.92 0.06 200), oklch(0.78 0.11 205))", glow: "oklch(0.72 0.13 200 / 0.5)",  x: -105, y: -108, size: 58, labelSide: "left" },
  { to: "/clone",     label: "My AI Clone",       preview: "Learning you",            Icon: Brain,        grad: "linear-gradient(140deg, oklch(0.92 0.07 295), oklch(0.76 0.13 295))", glow: "oklch(0.7 0.15 295 / 0.55)",  x:  108, y: -100, size: 58, labelSide: "right" },
  { to: "/vault",     label: "Knowledge Vault",   preview: "2,431 memories",          Icon: Database,     grad: "linear-gradient(140deg, oklch(0.92 0.06 235), oklch(0.76 0.11 230))", glow: "oklch(0.7 0.13 230 / 0.55)",  x: -128, y:   28, size: 66, labelSide: "left" },
  { to: "/insights",  label: "Life Insights",     preview: "Health 91",               Icon: LineChart,    grad: "linear-gradient(140deg, oklch(0.94 0.07 55), oklch(0.8 0.12 45))",    glow: "oklch(0.78 0.14 45 / 0.5)",   x:  128, y:   35, size: 66, labelSide: "right" },
  { to: "/actions",   label: "PhoneX Actions",    preview: "6 automations",           Icon: Zap,          grad: "linear-gradient(140deg, oklch(0.95 0.07 95), oklch(0.84 0.13 90))",   glow: "oklch(0.82 0.14 90 / 0.5)",   x:  -80, y:  148, size: 54, labelSide: "left" },
  { to: "/ecosystem", label: "PhoneX Everywhere", preview: "4 devices",               Icon: Cpu,          grad: "linear-gradient(140deg, oklch(0.9 0.06 275), oklch(0.72 0.14 270))",  glow: "oklch(0.68 0.16 270 / 0.55)", x:   36, y:  170, size: 56, labelSide: "bottom" },
  { to: "/legacy",    label: "Digital Legacy",    preview: "1,200 preserved",         Icon: InfinityIcon, grad: "linear-gradient(140deg, oklch(0.92 0.05 345), oklch(0.8 0.1 340))",   glow: "oklch(0.74 0.13 340 / 0.5)",  x:  128, y:  152, size: 58, labelSide: "right" },
];

function Features() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const [phase, setPhase] = useState<"idle" | "converge" | "leaving">("idle");
  const navigate = useNavigate();

  useEffect(() => {
    if (phase !== "converge" || selected === null) return;
    const t1 = setTimeout(() => setPhase("leaving"), 520);
    const t2 = setTimeout(() => navigate({ to: NODES[selected].to }), 880);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [phase, selected, navigate]);

  const tap = (i: number) => {
    if (selected !== null) return;
    setSelected(i);
    setPhase("converge");
  };

  return (
    <PhoneFrame>
      <div className="relative h-full w-full overflow-hidden">
        {/* Ambient radial light */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 46%, oklch(0.99 0.02 295), transparent 55%), radial-gradient(circle at 12% 88%, oklch(0.97 0.04 230 / 0.7), transparent 50%), radial-gradient(circle at 92% 8%, oklch(0.97 0.04 15 / 0.7), transparent 50%)",
          }}
        />
        <Particles />

        {/* Blur veil during transition */}
        <div
          className={`absolute inset-0 pointer-events-none transition-all duration-700 ${
            phase === "idle" ? "opacity-0" : "opacity-100"
          }`}
          style={{ backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)", background: "oklch(1 0 0 / 0.3)" }}
        />

        {/* Header */}
        <div className="relative z-30 px-6 pt-2 flex items-center justify-between lg:hidden">
          <div className="flex items-center gap-2">
            <SidebarButton onClick={() => setOpen(true)} />
            <Link to="/profile" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
              <ChevronLeft className="w-[18px] h-[18px] text-foreground/70" />
            </Link>
          </div>
          <div className="inline-flex items-center gap-1.5 text-[10px] font-medium glass px-2.5 py-1 rounded-full shadow-soft">
            <Sparkles className="w-3 h-3 text-primary" /> AI OS
          </div>
        </div>

        {/* Title */}
        <div className="relative z-30 px-6 mt-3 text-center">
          <h1 className="text-[22px] font-bold tracking-tight">PhoneX Core</h1>
          <p className="text-[11px] text-muted-foreground mt-0.5">Your intelligence, orbiting</p>
        </div>

        {/* Stage */}
        <div className="relative z-10 mx-auto mt-2 lg:mt-10 lg:scale-[1.35]" style={{ width: 340, height: 540 }}>
          {/* Orbital rings */}
          <Ring size={210} dur="50s" />
          <Ring size={300} dur="80s" reverse />
          <Ring size={380} dur="120s" faint />

          {/* AI Core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
              className={`relative transition-all duration-700 ease-out ${
                phase === "converge" ? "scale-[1.4]" : phase === "leaving" ? "scale-[2.6] opacity-90" : "scale-100"
              }`}
            >
              <span className="absolute inset-0 rounded-full animate-pulse-ring bg-gradient-orb opacity-40" />
              <span className="absolute inset-0 rounded-full animate-pulse-ring bg-gradient-orb opacity-30" style={{ animationDelay: "1.2s" }} />
              <span
                className="absolute -inset-4 rounded-full opacity-70"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent, oklch(0.85 0.14 295 / 0.75) 25%, transparent 50%, oklch(0.85 0.12 230 / 0.7) 75%, transparent)",
                  filter: "blur(8px)",
                  animation: "shimmer-wave 14s linear infinite",
                }}
              />
              <div className="relative w-[120px] h-[120px] rounded-full bg-gradient-orb shadow-orb animate-breathe grid place-items-center">
                <div
                  className="absolute inset-2 rounded-full"
                  style={{ background: "radial-gradient(circle at 32% 28%, oklch(1 0 0 / 0.85), transparent 45%)" }}
                />
                <Sparkles className="relative w-7 h-7 text-white/95 drop-shadow" />
              </div>
            </div>
          </div>

          {/* Feature nodes */}
          {NODES.map((n, i) => {
            const isSel = selected === i;
            const isOther = selected !== null && !isSel;
            const tx = isSel && phase !== "idle" ? 0 : n.x;
            const ty = isSel && phase !== "idle" ? 0 : n.y;
            return (
              <button
                key={n.to}
                onClick={() => tap(i)}
                className="absolute left-1/2 top-1/2 focus:outline-none group"
                style={{
                  transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(${isSel && phase !== "idle" ? 0.3 : 1})`,
                  transition: "transform 800ms cubic-bezier(.4,0,.2,1), opacity 500ms ease",
                  opacity: isOther ? 0 : 1,
                  zIndex: isSel ? 25 : 15,
                }}
              >
                <div
                  style={{
                    animation: phase === "idle" ? `float-slow ${5 + (i % 4)}s ease-in-out ${i * 0.35}s infinite` : undefined,
                  }}
                >
                {/* Circular orb icon */}
                <div className="relative">
                  <span
                    className="absolute inset-0 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition"
                    style={{ background: n.glow }}
                  />
                  <div
                    className="relative rounded-full grid place-items-center text-foreground/85 border border-white/70 shadow-card group-active:scale-90 transition"
                    style={{
                      width: n.size,
                      height: n.size,
                      background: n.grad,
                      boxShadow: `0 12px 32px -14px ${n.glow}, inset 0 0 0 1px oklch(1 0 0 / 0.55), inset 0 -8px 16px -8px oklch(0 0 0 / 0.08)`,
                    }}
                  >
                    <div
                      className="absolute inset-1 rounded-full pointer-events-none"
                      style={{ background: "radial-gradient(circle at 30% 25%, oklch(1 0 0 / 0.7), transparent 50%)" }}
                    />
                    <n.Icon className="relative w-5 h-5" />
                  </div>
                </div>

                {/* Label + preview, positioned around the orb (no boxes) */}
                <LabelBlock label={n.label} preview={n.preview} side={n.labelSide} size={n.size} />
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer hint */}
        <div className="absolute bottom-24 inset-x-0 text-center z-10 px-8 lg:bottom-6">
          <p className="text-[10px] text-muted-foreground">One intelligence. Eight signals. Tap to enter.</p>
        </div>
      </div>
      <SideMenu open={open} onClose={() => setOpen(false)} />
      <BottomNav />
    </PhoneFrame>
  );
}

function LabelBlock({
  label, preview, side, size,
}: { label: string; preview: string; side: "left" | "right" | "top" | "bottom"; size: number }) {
  const base = "absolute pointer-events-none whitespace-nowrap";
  const half = size / 2;
  const pad = 8;
  if (side === "left") {
    return (
      <div className={`${base} text-right`} style={{ right: half + pad, top: "50%", transform: "translateY(-50%)" }}>
        <p className="text-[11px] font-semibold text-foreground/85 leading-tight">{label}</p>
        <p className="text-[9.5px] text-foreground/55 leading-tight mt-0.5">{preview}</p>
      </div>
    );
  }
  if (side === "right") {
    return (
      <div className={`${base} text-left`} style={{ left: half + pad, top: "50%", transform: "translateY(-50%)" }}>
        <p className="text-[11px] font-semibold text-foreground/85 leading-tight">{label}</p>
        <p className="text-[9.5px] text-foreground/55 leading-tight mt-0.5">{preview}</p>
      </div>
    );
  }
  if (side === "top") {
    return (
      <div className={`${base} text-center`} style={{ bottom: half + pad, left: "50%", transform: "translateX(-50%)" }}>
        <p className="text-[11px] font-semibold text-foreground/85 leading-tight">{label}</p>
        <p className="text-[9.5px] text-foreground/55 leading-tight mt-0.5">{preview}</p>
      </div>
    );
  }
  return (
    <div className={`${base} text-center`} style={{ top: half + pad, left: "50%", transform: "translateX(-50%)" }}>
      <p className="text-[11px] font-semibold text-foreground/85 leading-tight">{label}</p>
      <p className="text-[9.5px] text-foreground/55 leading-tight mt-0.5">{preview}</p>
    </div>
  );
}

function Ring({ size, dur, reverse, faint }: { size: number; dur: string; reverse?: boolean; faint?: boolean }) {
  return (
    <span
      className="absolute left-1/2 top-1/2 rounded-full pointer-events-none"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        border: `1px dashed oklch(0.7 0.08 285 / ${faint ? 0.18 : 0.32})`,
        animation: `shimmer-wave ${dur} linear infinite ${reverse ? "reverse" : ""}`,
      }}
    />
  );
}

function Particles() {
  const dots = Array.from({ length: 26 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((_, i) => {
        const size = 2 + (i % 4);
        const left = (i * 41) % 100;
        const top = (i * 67) % 100;
        const dur = 6 + (i % 6);
        const delay = (i % 7) * 0.35;
        const hue = 230 + (i * 17) % 120;
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              background: `oklch(0.8 0.1 ${hue} / 0.35)`,
              filter: "blur(0.5px)",
              animation: `float-slow ${dur}s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
