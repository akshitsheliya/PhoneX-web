import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { SideMenu } from "@/components/SideMenu";
import { SidebarButton } from "@/components/SidebarButton";
import { ChevronLeft, Check, Crown, Infinity as InfinityIcon, Sparkles } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/subscription")({
  head: () => ({
    meta: [
      { title: "Subscription — PhoneX" },
      { name: "description", content: "Choose your PhoneX plan." },
    ],
  }),
  component: Subscription,
});

type Plan = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  cta: string;
  current?: boolean;
  highlight?: boolean;
  Icon: typeof Crown;
  grad: string;
};

const plans: Plan[] = [
  {
    name: "Free",
    price: "$0",
    tagline: "Get started with PhoneX",
    features: ["Basic AI", "Limited Memory", "Basic Chat", "5GB Storage", "Community Support"],
    cta: "Choose Plan",
    Icon: Sparkles,
    grad: "bg-gradient-sky",
  },
  {
    name: "PhoneX Premium",
    price: "$9.99 / mo",
    tagline: "Your everyday AI companion",
    features: ["Unlimited Chat", "Long-Term Memory", "Voice Assistant", "Advanced AI", "Personal Analytics", "Priority Support"],
    cta: "Upgrade",
    current: true,
    Icon: Crown,
    grad: "bg-gradient-lavender",
  },
  {
    name: "PhoneX Infinite",
    price: "$24.99 / mo",
    tagline: "Your personal AI operating system",
    features: ["Everything in Premium", "AI Clone", "Family Vault", "Business Brain", "Unlimited Cloud Storage", "Advanced Automations", "Future Digital Legacy"],
    cta: "Go Infinite",
    highlight: true,
    Icon: InfinityIcon,
    grad: "bg-gradient-ai",
  },
];

function Subscription() {
  const [open, setOpen] = useState(false);
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <SidebarButton onClick={() => setOpen(true)} />
            <Link to="/profile" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
              <ChevronLeft className="w-[18px] h-[18px] text-foreground/70" />
            </Link>
          </div>
        </div>

        <div className="mt-6">
          <h1 className="text-[26px] font-bold tracking-tight">Subscription</h1>
          <p className="text-sm text-muted-foreground mt-1">Choose the plan that fits your life</p>
        </div>

        <div className="mt-5 space-y-4">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative overflow-hidden rounded-[28px] p-5 shadow-card ${
                p.highlight ? "bg-gradient-ai text-white" : "bg-card border border-border/60"
              }`}
            >
              {p.highlight && (
                <>
                  <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/20 blur-2xl" />
                  <div className="absolute -bottom-16 -left-10 w-44 h-44 rounded-full bg-white/10 blur-3xl" />
                </>
              )}
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-2xl grid place-items-center text-white shadow-soft ${
                      p.highlight ? "bg-white/20 backdrop-blur-md" : p.grad
                    }`}
                  >
                    <p.Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`text-[11px] ${p.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                      {p.current ? "Current Plan" : p.tagline}
                    </p>
                    <p className="text-base font-semibold">{p.name}</p>
                  </div>
                </div>
                {p.current && (
                  <span className="text-[10px] px-2 py-1 rounded-full bg-accent text-primary font-medium">Active</span>
                )}
                {p.highlight && !p.current && (
                  <span className="text-[10px] px-2 py-1 rounded-full bg-white/20 text-white font-medium backdrop-blur-sm">Best value</span>
                )}
              </div>

              <p className={`relative mt-3 text-xl font-bold tracking-tight ${p.highlight ? "" : ""}`}>{p.price}</p>

              <div className="relative mt-4 space-y-2.5">
                {p.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-full grid place-items-center shrink-0 ${
                        p.highlight ? "bg-white/25 backdrop-blur-sm" : "bg-gradient-ai"
                      }`}
                    >
                      <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </span>
                    <span className="text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <button
                className={`relative mt-5 w-full py-3 rounded-full font-semibold text-sm ${
                  p.current
                    ? "bg-accent text-primary"
                    : p.highlight
                    ? "bg-white text-foreground"
                    : "bg-foreground text-background"
                }`}
              >
                {p.current ? "Current Plan" : p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
      <SideMenu open={open} onClose={() => setOpen(false)} />
      <BottomNav />
    </PhoneFrame>
  );
}
