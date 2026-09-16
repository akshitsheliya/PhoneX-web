import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import {
  Bell, CheckCircle2, Heart, Smile, Bookmark, Calendar, Sparkles, ArrowUpRight, MessageCircle, LineChart,
  Dumbbell, Target, Users, Clock,
} from "lucide-react";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "PhoneX — Your AI Life Companion" },
      { name: "description", content: "PhoneX is your digital life companion — an AI that knows you, remembers you, and helps you every day." },
      { property: "og:title", content: "PhoneX — Your AI Life Companion" },
      { property: "og:description", content: "A premium AI companion that lives in your phone." },
    ],
  }),
  component: Home,
});

const schedule = [
  { time: "11:30", title: "Design review", sub: "Sarah & product team", tone: "bg-lavender-soft" },
  { time: "14:00", title: "Focus block", sub: "Dashboard layout", tone: "bg-sky-soft" },
  { time: "18:00", title: "Call Mom", sub: "Family", tone: "bg-peach-soft" },
];

function Home() {
  const t = useT();
  const { searchStr } = useLocation();
  const isHeroPreview = new URLSearchParams(searchStr).get("preview") === "hero-readable";
  const quickActions = [t("Plan my day"), t("Remember something"), t("Track my health"), t("Solve a problem")];
  const suggestions = [
    { Icon: Dumbbell, label: t("Complete your workout"), sub: t("20 min left today"), to: "/fitness" as const, tone: "bg-rose-soft" },
    { Icon: Target, label: t("Review weekly goals"), sub: t("2 goals need attention"), to: "/tasks" as const, tone: "bg-lavender-soft" },
    { Icon: Users, label: t("Schedule family time"), sub: t("Nothing planned this week"), to: "/family" as const, tone: "bg-peach-soft" },
    { Icon: Bookmark, label: t("Save today's moment"), sub: t("3 memories this week"), to: "/memories" as const, tone: "bg-sky-soft" },
  ];

  return (
    <PhoneFrame>
      <div className={`px-6 pb-40 animate-fade-up lg:px-0 lg:pb-8${isHeroPreview ? " hero-phone-preview" : ""}`}>
        {/* Top bar — mobile only; desktop identity lives in the header */}
        <div className="flex items-center justify-between lg:hidden">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-gradient-lavender grid place-items-center text-white font-semibold shadow-soft">A</div>
            <div>
              <p className="hero-phone-profile-name text-sm font-semibold flex items-center gap-1.5">
                Akshit
                <span className="hero-phone-status inline-flex items-center gap-1 text-[10px] text-primary bg-accent px-1.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> {t("active")}
                </span>
              </p>
              <p className="hero-phone-premium text-[11px] text-muted-foreground">{t("PhoneX Premium")}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
          <Link to="/notifications" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
              <Bell className="w-[18px] h-[18px] text-foreground/70" />
            </Link>
          </div>
        </div>

        {/* ── Hero: AI companion ─────────────────────────────── */}
        <div className="relative mt-7 rounded-[28px] p-5 bg-gradient-ai text-white shadow-card overflow-hidden lg:mt-0 lg:p-8">
          <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/20 blur-2xl lg:w-64 lg:h-64" />
          <div className="relative lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
            <div className="min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <div className="hero-phone-ai-status inline-flex items-center gap-1.5 text-[11px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                    <Sparkles className="w-3 h-3" /> {t("Your AI companion is active")}
                  </div>
                  <p className="hero-phone-ai-heading mt-3 text-lg font-semibold leading-snug max-w-[220px] lg:text-[28px] lg:leading-tight lg:max-w-[460px]">
                    {t("How can I help you?")}
                  </p>
                </div>
                <Link to="/voice" aria-label={t("Talk")} className="w-12 h-12 shrink-0 rounded-full bg-white/25 backdrop-blur-md grid place-items-center animate-breathe lg:hidden">
                  <div className="w-7 h-7 rounded-full bg-white/80" />
                </Link>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2 lg:mt-6 lg:flex lg:flex-wrap lg:gap-2.5">
                {quickActions.map((q) => (
                  <button key={q} className="hero-phone-quick-action text-left text-xs font-medium bg-white/15 hover:bg-white/25 transition px-3 py-2.5 rounded-2xl backdrop-blur-sm lg:rounded-full lg:px-4 lg:py-2 lg:text-[13px]">
                    {q}
                  </button>
                ))}
              </div>

              <div className="mt-2 grid grid-cols-2 gap-2 lg:mt-6 lg:flex lg:gap-3">
                <Link to="/voice" className="hero-phone-primary-action flex items-center justify-center gap-1.5 text-xs font-semibold bg-white text-foreground px-3 py-2.5 rounded-2xl lg:rounded-full lg:px-6 lg:py-3 lg:text-sm">
                  {t("Talk")} <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <Link to="/chat" className="hero-phone-secondary-action flex items-center justify-center gap-1.5 text-xs font-semibold bg-white/20 backdrop-blur-md text-white px-3 py-2.5 rounded-2xl border border-white/30 lg:rounded-full lg:px-6 lg:py-3 lg:text-sm">
                  <MessageCircle className="w-3.5 h-3.5" /> {t("Chat")}
                </Link>
              </div>
            </div>

            {/* Desktop orb */}
            <Link
              to="/voice"
              aria-label={t("Talk")}
              className="hidden lg:grid relative h-[172px] w-[172px] shrink-0 place-items-center rounded-full"
            >
              <span className="absolute inset-0 rounded-full bg-white/10 animate-pulse-ring" />
              <span className="absolute inset-4 rounded-full border border-white/25" />
              <span className="relative grid h-28 w-28 place-items-center rounded-full bg-white/25 backdrop-blur-md animate-breathe">
                <span className="h-16 w-16 rounded-full bg-white/80" />
              </span>
            </Link>
          </div>
        </div>

        {/* ── Summary + schedule ─────────────────────────────── */}
        <div className="lg:mt-8 lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-6 lg:items-start">
          <section>
            <div className="mt-6 flex items-end justify-between lg:mt-0">
              <div>
                <h2 className="hero-phone-summary-heading text-base font-semibold lg:text-lg">{t("Today's life summary")}</h2>
                <p className="hero-phone-productivity text-xs text-muted-foreground">{t("80% productive")}</p>
              </div>
              <Link to="/life-summary" className="hero-phone-see-all text-xs text-primary font-medium hover:underline">{t("See all")}</Link>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-3 lg:mt-4 lg:grid-cols-4 lg:gap-4">
              <Link to="/tasks" className="rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><OverviewCard tone="lavender" Icon={CheckCircle2} label={t("Tasks")} value="8/10" sub={t("completed")} /></Link>
              <Link to="/fitness" className="rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><OverviewCard tone="rose" Icon={Heart} label={t("Fitness")} value="6.4 km" sub={t("walked today")} /></Link>
              <Link to="/mood" className="rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><OverviewCard tone="peach" Icon={Smile} label={t("Mood")} value={t("Calm")} sub={t("balanced")} /></Link>
              <Link to="/memories" className="rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><OverviewCard tone="sky" Icon={Bookmark} label={t("Memories")} value={t("3 saved")} sub={t("this week")} /></Link>
            </div>

            {/* Life insights — compact banner, not a giant block */}
            <Link
              to="/insights"
              className="mt-4 block rounded-[24px] p-4 bg-gradient-ai text-white shadow-card overflow-hidden relative transition-transform hover:scale-[1.005] lg:mt-5 lg:p-5"
            >
              <div className="absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" />
              <div className="relative flex items-center gap-3">
                <div className="w-11 h-11 shrink-0 rounded-2xl bg-white/20 backdrop-blur-md grid place-items-center">
                  <LineChart className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="inline-flex items-center gap-1.5 text-[10px] bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm">
                    <Sparkles className="w-3 h-3" /> {t("AI analyzing your life")}
                  </div>
                  <p className="mt-1.5 text-sm font-semibold">{t("Life Insights")}</p>
                  <p className="text-[11px] text-white/80 truncate">{t("Patterns, health, productivity & goals")}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 shrink-0 opacity-80" />
              </div>
            </Link>
          </section>

          {/* Next up */}
          <aside className="mt-6 lg:mt-0">
            <div className="flex items-end justify-between">
              <h2 className="text-base font-semibold lg:text-lg">{t("Next up")}</h2>
              <Link to="/activity" className="text-xs text-primary font-medium hover:underline">{t("Open")}</Link>
            </div>
            <div className="mt-3 rounded-3xl border border-border/60 bg-card shadow-soft divide-y divide-border/60 overflow-hidden lg:mt-4">
              {schedule.map((s) => (
                <div key={s.time} className="flex items-center gap-3 p-4">
                  <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${s.tone}`}>
                    <Calendar className="h-[18px] w-[18px] text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{t(s.title)}</p>
                    <p className="truncate text-[11px] text-muted-foreground">{t(s.sub)}</p>
                  </div>
                  <span className="shrink-0 inline-flex items-center gap-1 text-[11px] font-medium text-foreground/60">
                    <Clock className="h-3 w-3" /> {s.time}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>

        {/* ── Smart suggestions ──────────────────────────────── */}
        <section className="mt-6 lg:mt-8">
          <div className="flex items-end justify-between">
            <h2 className="text-base font-semibold lg:text-lg inline-flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" /> {t("Smart suggestions")}
            </h2>
            <span className="text-xs text-muted-foreground">{t("Updated just now")}</span>
          </div>
          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-4 lg:grid-cols-4 lg:gap-4">
            {suggestions.map((s) => (
              <Link
                key={s.label}
                to={s.to}
                className="group flex items-start gap-3 rounded-3xl border border-border/60 bg-card p-4 shadow-soft transition-shadow hover:shadow-card"
              >
                <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${s.tone}`}>
                  <s.Icon className="h-[18px] w-[18px] text-primary" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold leading-snug">{s.label}</p>
                  <p className="mt-0.5 text-[11px] text-muted-foreground">{s.sub}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground/30 transition-colors group-hover:text-primary" />
              </Link>
            ))}
          </div>
        </section>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}

function OverviewCard({
  tone, Icon, label, value, sub,
}: { tone: "lavender" | "rose" | "peach" | "sky"; Icon: typeof Heart; label: string; value: string; sub: string }) {
  const toneClass = {
    lavender: "bg-lavender-soft",
    rose: "bg-rose-soft",
    peach: "bg-peach-soft",
    sky: "bg-sky-soft",
  }[tone];
  const iconBg = {
    lavender: "bg-gradient-lavender",
    rose: "bg-gradient-rose",
    peach: "bg-gradient-peach",
    sky: "bg-gradient-sky",
  }[tone];
  return (
    <div className={`relative h-full rounded-3xl p-4 ${toneClass} overflow-hidden`}>
      <div className={`w-9 h-9 rounded-2xl ${iconBg} grid place-items-center text-white shadow-soft`}>
        <Icon className="w-[18px] h-[18px]" />
      </div>
      <p className="hero-phone-card-label mt-3 text-xs text-foreground/60">{label}</p>
      <p className="hero-phone-card-value text-lg font-bold tracking-tight">{value}</p>
      <p className="hero-phone-card-sub text-[11px] text-foreground/50">{sub}</p>
    </div>
  );
}
