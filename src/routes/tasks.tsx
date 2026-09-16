import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { BottomNav } from "@/components/BottomNav";
import { ChevronLeft, CheckCircle2, Clock, Sparkles, Plus, Timer, Flag, Calendar, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/tasks")({
  head: () => ({ meta: [{ title: "Tasks — PhoneX" }, { name: "description", content: "Your tasks, completion & AI suggestions." }] }),
  component: Tasks,
});

const filters = ["All", "Completed", "In Progress", "New", "Today's", "High Priority"] as const;

const completed = [
  { name: "Morning Workout", time: "7:15 AM" },
  { name: "Reply to Sarah", time: "9:30 AM" },
  { name: "Review Design PRs", time: "10:45 AM" },
  { name: "Read 20 Pages", time: "11:20 AM" },
];

const inProgress = [
  { name: "Design Dashboard", progress: 65, remaining: "25 min remaining", priority: "High" },
  { name: "Weekly Report", progress: 40, remaining: "1h 10m remaining", priority: "Medium" },
];

const newTasks = [
  { name: "Driving License Exam", due: "30 July • 10:00 AM", category: "Personal", priority: "High" },
  { name: "Team Offsite Planning", due: "2 Aug • 3:00 PM", category: "Work", priority: "Medium" },
  { name: "Call Mom", due: "Today • 6:00 PM", category: "Family", priority: "Low" },
];

function Tasks() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  return (
    <PhoneFrame>
      <div className="px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6">
        {/* Header */}
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/app" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px]" />
          </Link>
          <p className="text-sm font-semibold">Tasks</p>
          <div className="w-10" />
        </div>

        {/* Title */}
        <div className="mt-6 lg:mt-0">
          <h1 className="text-[26px] font-bold tracking-tight lg:text-[28px]">Today's Tasks</h1>
          <p className="text-sm text-muted-foreground mt-1">8 of 10 completed · 80%</p>
        </div>

        {/* Filters */}
        <div className="mt-4 flex gap-2 overflow-x-auto scrollbar-none -mx-6 px-6 lg:mx-0 lg:flex-wrap lg:px-0">
          {filters.map((f) => {
            const isActive = active === f;
            return (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`shrink-0 px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all ${
                  isActive
                    ? "bg-gradient-ai text-white shadow-soft"
                    : "glass text-foreground/70 border border-border/50"
                }`}
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Progress card */}
        <div className="mt-4 rounded-3xl p-4 bg-lavender-soft lg:max-w-[520px]">
          <div className="flex items-center justify-between text-xs text-foreground/60">
            <span>Completion</span><span>80%</span>
          </div>
          <div className="mt-2 h-2 rounded-full bg-white/60 overflow-hidden">
            <div className="h-full w-[80%] bg-gradient-ai rounded-full" />
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-3 lg:gap-6 lg:items-start">
        <div>
        {/* Completed */}
        <SectionHeader emoji="✅" title="Completed" count={completed.length} />
        <div className="mt-2 rounded-3xl bg-card border border-border/60 shadow-soft divide-y divide-border/60 overflow-hidden">
          {completed.map((t) => (
            <div key={t.name} className="flex items-center gap-3 p-4">
              <div className="w-9 h-9 rounded-2xl grid place-items-center" style={{ background: "oklch(0.94 0.05 155)" }}>
                <CheckCircle2 className="w-[18px] h-[18px]" style={{ color: "oklch(0.55 0.14 155)" }} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground/80 truncate">{t.name}</p>
                <p className="text-[11px] text-foreground/50 mt-0.5">Completed at {t.time}</p>
              </div>
              <span className="w-2 h-2 rounded-full" style={{ background: "oklch(0.65 0.15 155)" }} />
            </div>
          ))}
        </div>

        </div>
        <div>
        {/* In Progress */}
        <SectionHeader emoji="🟡" title="In Progress" count={inProgress.length} />
        <div className="mt-2 space-y-3">
          {inProgress.map((t) => (
            <div key={t.name} className="rounded-3xl p-4 border border-border/60 shadow-soft" style={{ background: "oklch(0.96 0.03 235)" }}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-2xl grid place-items-center" style={{ background: "oklch(0.88 0.07 235)" }}>
                    <Timer className="w-[18px] h-[18px]" style={{ color: "oklch(0.45 0.14 235)" }} />
                  </div>
                  <p className="text-sm font-semibold truncate">{t.name}</p>
                </div>
                <PriorityBadge level={t.priority} />
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-foreground/60">
                <span>Progress</span>
                <span className="font-semibold" style={{ color: "oklch(0.45 0.14 235)" }}>{t.progress}%</span>
              </div>
              <div className="mt-1.5 h-2 rounded-full bg-white/70 overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${t.progress}%`, background: "linear-gradient(90deg, oklch(0.75 0.12 235), oklch(0.65 0.15 250))" }}
                />
              </div>
              <p className="mt-2 text-[11px] text-foreground/60 flex items-center gap-1.5">
                <Clock className="w-3 h-3" /> {t.remaining}
              </p>
            </div>
          ))}
        </div>

        </div>
        <div>
        {/* New Tasks */}
        <SectionHeader emoji="🆕" title="New Tasks" count={newTasks.length} />
        <div className="mt-2 space-y-3">
          {newTasks.map((t) => (
            <div key={t.name} className="rounded-3xl p-4 border border-border/60 shadow-soft" style={{ background: "oklch(0.96 0.03 295)" }}>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-2xl grid place-items-center" style={{ background: "oklch(0.88 0.08 295)" }}>
                    <Calendar className="w-[18px] h-[18px]" style={{ color: "oklch(0.45 0.16 295)" }} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate">{t.name}</p>
                    <p className="text-[11px] text-foreground/55 mt-0.5">{t.due}</p>
                  </div>
                </div>
                <PriorityBadge level={t.priority} />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/70 text-foreground/70">{t.category}</span>
                <button className="text-[11px] font-medium inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-ai text-white shadow-soft">
                  Start <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        </div>
        </div>

        {/* AI Suggestion */}
        <div className="mt-6 rounded-[24px] p-5 bg-gradient-ai text-white shadow-card relative overflow-hidden lg:mt-6">
          <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" />
          <div className="relative inline-flex items-center gap-1.5 text-[11px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
            <Sparkles className="w-3 h-3" /> PhoneX Suggestion
          </div>
          <p className="relative mt-3 text-sm leading-relaxed">
            You have 3 remaining tasks today. Completing <span className="font-semibold">"Driving License Exam Preparation"</span> first will help you stay on schedule.
          </p>
        </div>
      </div>

      {/* Floating + button */}
      <button
        aria-label="Create new task"
        className="absolute bottom-28 right-6 z-40 w-14 h-14 lg:bottom-8 lg:right-8 rounded-full bg-gradient-ai text-white grid place-items-center shadow-card active:scale-95 transition-transform"
      >
        <Plus className="w-6 h-6" />
      </button>

      <BottomNav />
    </PhoneFrame>
  );
}

function SectionHeader({ emoji, title, count }: { emoji: string; title: string; count: number }) {
  return (
    <div className="mt-6 flex items-center justify-between">
      <p className="text-[12px] uppercase tracking-wider text-muted-foreground font-semibold">
        <span className="mr-1.5">{emoji}</span>{title}
      </p>
      <span className="text-[11px] text-foreground/50">{count}</span>
    </div>
  );
}

function PriorityBadge({ level }: { level: string }) {
  const styles: Record<string, { bg: string; color: string }> = {
    High: { bg: "oklch(0.94 0.05 20)", color: "oklch(0.55 0.16 20)" },
    Medium: { bg: "oklch(0.95 0.05 70)", color: "oklch(0.55 0.14 70)" },
    Low: { bg: "oklch(0.95 0.04 160)", color: "oklch(0.5 0.12 160)" },
  };
  const s = styles[level] ?? styles.Medium;
  return (
    <span className="shrink-0 inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: s.bg, color: s.color }}>
      <Flag className="w-2.5 h-2.5" /> {level}
    </span>
  );
}
