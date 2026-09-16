import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { MoreHorizontal, Calendar, Dumbbell, Users, Coffee, BookOpen, HeartPulse, Target, Briefcase, GraduationCap, User, Sparkles } from "lucide-react";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/activity")({
  head: () => ({
    meta: [
      { title: "My Life — PhoneX" },
      { name: "description", content: "Your personal life operating system — timeline, goals, and AI suggestions." },
    ],
  }),
  component: LifePage,
});

const days = ["M", "T", "W", "T", "F", "S", "S"];

const timeline = [
  { id: "workout", time: "07:00", title: "Morning workout", sub: "45 min · upper body", tone: "rose", Icon: Dumbbell, badge: "Done" },
  { id: "meeting", time: "10:00", title: "Work meeting", sub: "Product sync · 1h", tone: "sky", Icon: Briefcase, badge: "Soon" },
  { id: "lunch", time: "13:00", title: "Lunch break", sub: "Bistrot 24", tone: "peach", Icon: Coffee, badge: "1h" },
  { id: "learning", time: "16:00", title: "Learning session", sub: "Design systems · 30 min", tone: "mint", Icon: BookOpen, badge: "Auto" },
  { id: "family", time: "19:00", title: "Family time", sub: "Dinner at Mom's", tone: "lavender", Icon: Users, badge: "Upcoming" },
  { id: null, time: "22:00", title: "Health tracking", sub: "Sleep coaching ready", tone: "rose", Icon: HeartPulse, badge: "Auto" },
] as const;

const goals = [
  { label: "Fitness", value: "78%", sub: "Run 5km · 3×/week", tone: "rose", Icon: HeartPulse },
  { label: "Career", value: "Q1", sub: "Lead 2 launches", tone: "sky", Icon: Briefcase },
  { label: "Learning", value: "12h", sub: "this month", tone: "mint", Icon: GraduationCap },
  { label: "Personal", value: "Daily", sub: "Slow mornings", tone: "lavender", Icon: User },
] as const;

const suggestions = [
  "Complete your workout today",
  "Review your weekly goals",
  "Schedule family time on Sunday",
];

function LifePage() {
  const t = useT();
  const goalsT = goals.map(g => ({ ...g, labelT: t(g.label) }));
  const suggestionsT = suggestions.map(s => t(s));
  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        <div className="flex items-center justify-end">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
              <Calendar className="w-[18px] h-[18px] text-foreground/70" />
            </button>
            <button className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
              <MoreHorizontal className="w-[18px] h-[18px] text-foreground/70" />
            </button>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">{t("Friday, January 17")}</p>

        {/* Day strip */}
        <div className="mt-5 flex items-center justify-between">
          {days.map((d, i) => {
            const date = 13 + i;
            const active = i === 4;
            return (
              <div key={i} className="flex flex-col items-center gap-1.5">
                <span className="text-[11px] text-muted-foreground">{d}</span>
                <div className={`w-10 h-10 rounded-full grid place-items-center text-sm font-semibold ${
                  active ? "bg-gradient-ai text-white shadow-orb" : "bg-secondary text-foreground/70"
                }`}>{date}</div>
              </div>
            );
          })}
        </div>

        {/* Timeline */}
        <h2 className="mt-7 text-sm font-semibold">{t("Daily timeline")}</h2>
        <div className="mt-3 relative">
          <div className="absolute left-[42px] top-2 bottom-2 w-px bg-border" />
          <div className="space-y-3 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
            {timeline.map((item, i) => (
              <TimelineItem key={i} {...item} tBadge={t(item.badge)} />
            ))}
          </div>
        </div>

        {/* Goals */}
        <h2 className="mt-7 text-sm font-semibold">{t("Goals")}</h2>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {goals.map((g) => {
            const tone: Record<string, string> = {
              rose: "bg-rose-soft", sky: "bg-sky-soft", mint: "bg-mint-soft", lavender: "bg-lavender-soft", peach: "bg-peach-soft",
            };
            const grad: Record<string, string> = {
              rose: "bg-gradient-rose", sky: "bg-gradient-sky", mint: "bg-gradient-sky", lavender: "bg-gradient-lavender", peach: "bg-gradient-peach",
            };
            return (
              <div key={g.label} className={`rounded-3xl p-4 ${tone[g.tone]}`}>
                <div className="flex items-center justify-between">
                  <div className={`w-9 h-9 rounded-2xl ${grad[g.tone]} grid place-items-center text-white shadow-soft`}>
                    <g.Icon className="w-[18px] h-[18px]" />
                  </div>
                  <Target className="w-3.5 h-3.5 text-foreground/40" />
                </div>
                <p className="mt-3 text-xs text-foreground/60">{t(g.label)}</p>
                <p className="text-lg font-bold tracking-tight">{g.value}</p>
                <p className="text-[11px] text-foreground/50">{g.sub}</p>
              </div>
            );
          })}
        </div>

        {/* AI Suggestions */}
        <div className="mt-6 rounded-[28px] p-5 bg-gradient-ai text-white shadow-card relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" />
          <div className="relative inline-flex items-center gap-1.5 text-[11px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            <Sparkles className="w-3 h-3" /> {t("Smart suggestions")}
          </div>
          <ul className="relative mt-3 space-y-2">
            {suggestionsT.map((s) => (
              <li key={s} className="text-sm bg-white/15 backdrop-blur-sm px-3 py-2.5 rounded-2xl">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <BottomNav />
    </PhoneFrame>
  );
}

function TimelineItem({ id, time, title, sub, tone, Icon, badge, tBadge }: typeof timeline[number] & { tBadge: string }) {
  const statusBg: Record<string, string> = {
    Done: "bg-mint-soft",
    Soon: "bg-sky-soft",
    "1h": "bg-peach-soft",
    Upcoming: "bg-lavender-soft",
    Auto: "bg-rose-soft",
  };
  const statusBadge: Record<string, string> = {
    Done: "bg-mint/60 text-foreground/80",
    Soon: "bg-sky/60 text-foreground/80",
    "1h": "bg-peach/60 text-foreground/80",
    Upcoming: "bg-lavender/60 text-white",
    Auto: "bg-white/70 text-foreground/70",
  };
  const dot: Record<string, string> = {
    rose: "bg-gradient-rose", sky: "bg-gradient-sky", peach: "bg-gradient-peach", lavender: "bg-gradient-lavender", mint: "bg-gradient-sky",
  };
  const cardBg = statusBg[badge] ?? "bg-secondary";
  const badgeBg = statusBadge[badge] ?? "bg-white/70 text-foreground/70";

  const body = (
    <div className={`flex-1 rounded-2xl p-4 ${cardBg} ${id ? "active:scale-[0.99] transition" : ""}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={`w-8 h-8 rounded-xl ${dot[tone]} grid place-items-center text-white shadow-soft`}>
            <Icon className="w-4 h-4" />
          </div>
          <p className="text-sm font-semibold">{title}</p>
        </div>
        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${badgeBg}`}>{tBadge}</span>
      </div>
      <p className="text-xs text-foreground/60 mt-2 pl-10">{sub}</p>
    </div>
  );

  return (
    <div className="flex items-start gap-3">
      <div className="w-10 text-[11px] text-muted-foreground text-right pt-4">{time}</div>
      <div className="relative z-10 w-5 mt-4 grid place-items-center">
        <span className={`w-3 h-3 rounded-full ${dot[tone]} ring-4 ring-background`} />
      </div>
      {id ? (
        <Link to="/timeline/$id" params={{ id }} className="flex-1">
          {body}
        </Link>
      ) : (
        body
      )}
    </div>
  );
}
