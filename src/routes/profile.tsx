import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { SideMenu } from "@/components/SideMenu";
import { SidebarButton } from "@/components/SidebarButton";
import { Shield, ChevronRight, Settings, Sparkles, BookHeart, Mic, Activity, Lightbulb, Target, Trophy, TrendingUp, Wand2 } from "lucide-react";
import { useState } from "react";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/profile")({
  head: () => ({
    meta: [
      { title: "Profile — PhoneX" },
      { name: "description", content: "Your PhoneX dashboard." },
    ],
  }),
  component: Profile,
});

const features = [
  { Icon: Sparkles, label: "AI Assistant", sub: "Always with you", grad: "bg-gradient-lavender" },
  { Icon: BookHeart, label: "Personal Memory", sub: "Remembers your life", grad: "bg-gradient-rose" },
  { Icon: Mic, label: "Voice Companion", sub: "Talk naturally", grad: "bg-gradient-sky" },
  { Icon: Activity, label: "Life Tracking", sub: "Habits & wellbeing", grad: "bg-gradient-peach" },
  { Icon: Lightbulb, label: "Smart Recommendations", sub: "Personalized for you", grad: "bg-gradient-ai" },
];

const growth = [
  { Icon: Target, label: "Goals", value: "5 active", tone: "bg-lavender-soft", grad: "bg-gradient-lavender" },
  { Icon: Trophy, label: "Achievements", value: "12 earned", tone: "bg-peach-soft", grad: "bg-gradient-peach" },
  { Icon: TrendingUp, label: "Daily progress", value: "78%", tone: "bg-mint-soft", grad: "bg-gradient-sky" },
  { Icon: Wand2, label: "AI suggestions", value: "3 new", tone: "bg-rose-soft", grad: "bg-gradient-rose" },
] as const;

function Profile() {
  const [menu, setMenu] = useState(false);
  const t = useT();
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-between">
          <SidebarButton onClick={() => setMenu(true)} />
          <Link to="/settings" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <Settings className="w-[18px] h-[18px] text-foreground/70" />
          </Link>
        </div>

        {/* Identity */}
        <div className="mt-6 flex flex-col items-center text-center">
          <div className="relative">
            <div className="w-20 h-20 rounded-full bg-gradient-lavender grid place-items-center text-white text-2xl font-semibold shadow-orb">A</div>
            <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-ai grid place-items-center ring-4 ring-background">
              <span className="w-2 h-2 rounded-full bg-white" />
            </span>
          </div>
          <h1 className="mt-3 text-xl font-bold tracking-tight">Akshit Carter</h1>
          <p className="text-xs text-muted-foreground">{t("PhoneX Premium")} · since 2024</p>
        </div>

        {/* Dashboard */}
        <div className="mt-7">
          <h2 className="text-base font-semibold">{t("Your PhoneX Dashboard")}</h2>
          <p className="text-xs text-muted-foreground">{t("Everything your companion can do")}</p>
        </div>

        {/* Features Available */}
        <div className="mt-4">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">{t("PhoneX features available")}</p>
          <div className="mt-3 rounded-3xl bg-card border border-border/60 shadow-soft divide-y divide-border/60">
            {features.map((f) => (
              <div key={f.label} className="flex items-center gap-3 p-4">
                <div className={`w-9 h-9 rounded-xl ${f.grad} grid place-items-center text-white shadow-soft`}>
                  <f.Icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">{t(f.label)}</p>
                  <p className="text-[11px] text-muted-foreground">{t(f.sub)}</p>
                </div>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent text-primary">{t("On")}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Growth */}
        <div className="mt-6">
          <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-medium">{t("Personal growth")}</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {growth.map((g) => (
              <div key={g.label} className={`rounded-3xl p-4 ${g.tone}`}>
                <div className={`w-9 h-9 rounded-2xl ${g.grad} grid place-items-center text-white shadow-soft`}>
                  <g.Icon className="w-[18px] h-[18px]" />
                </div>
                <p className="mt-3 text-xs text-foreground/60">{t(g.label)}</p>
                <p className="text-base font-bold tracking-tight">{t(g.value)}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Privacy */}
        <div className="mt-6 rounded-3xl p-4 bg-gradient-ai text-white shadow-card overflow-hidden relative">
          <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/20 blur-2xl" />
          <div className="relative flex items-start gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md grid place-items-center">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">{t("Your data stays protected")}</p>
              <p className="text-[11px] text-white/80 mt-1 leading-relaxed">
                {t("Conversations are encrypted on-device. You decide what PhoneX remembers.")}
              </p>
            </div>
            <ChevronRight className="w-4 h-4 mt-1 opacity-80" />
          </div>
        </div>
      </div>
      <SideMenu open={menu} onClose={() => setMenu(false)} />
      <BottomNav />
    </PhoneFrame>
  );
}
