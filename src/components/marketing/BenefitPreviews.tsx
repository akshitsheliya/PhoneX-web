import {
  Activity,
  BookOpen,
  Check,
  DollarSign,
  Gift,
  HeartPulse,
  Search,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const cardContainerClass =
  "relative mx-auto w-full max-w-[480px] overflow-hidden rounded-[2rem] border border-border/70 bg-card p-6 sm:p-8 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.06),0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_-18px_rgba(0,0,0,0.09)]";

const innerSurfaceClass =
  "rounded-2xl border border-border/70 bg-background/70 shadow-[0_1px_2px_rgba(0,0,0,0.02)]";

/**
 * Feature 01: Today's Tasks preview card
 */
export function ProductivityPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(cardContainerClass, className)}
      aria-label="PhoneX task dashboard preview"
    >
      {/* Soft lavender ambient glow */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 rounded-full bg-lavender-soft/90 blur-3xl" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-xl font-bold tracking-tight text-foreground sm:text-[22px]">
              Today&apos;s Tasks
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              8 of 10 completed · 80%
            </p>
          </div>
          <span className="inline-flex items-center rounded-full bg-lavender-soft px-3 py-1 text-xs font-semibold text-primary">
            On track
          </span>
        </div>

        {/* Completion Progress Box */}
        <div className={cn("mt-6 p-4 sm:p-5", innerSurfaceClass)}>
          <div className="flex items-center justify-between text-xs">
            <span className="font-medium text-muted-foreground">Completion</span>
            <span className="text-base font-bold text-foreground sm:text-lg">80%</span>
          </div>
          <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary/80">
            <div className="h-full w-4/5 rounded-full bg-primary" />
          </div>
        </div>

        {/* Completed Tasks Header */}
        <div className="mt-6 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-muted-foreground/80">
            <Check className="h-3.5 w-3.5 text-primary stroke-[2.5]" /> COMPLETED
          </span>
          <span className="text-xs font-medium text-muted-foreground">4</span>
        </div>

        {/* Task Items List */}
        <div
          className={cn(
            "mt-3 divide-y divide-border/60 overflow-hidden",
            innerSurfaceClass,
          )}
        >
          <TaskRow title="Morning Workout" detail="Completed at 7:15 AM" />
          <TaskRow title="Reply to Sarah" detail="Completed at 9:30 AM" />
        </div>
      </div>
    </div>
  );
}

function TaskRow({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="flex items-center justify-between gap-3 px-4 py-3.5">
      <div className="flex min-w-0 items-center gap-3">
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint-soft text-mint">
          <Check className="h-3.5 w-3.5 stroke-[2.5]" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-foreground">{title}</p>
          <p className="mt-0.5 truncate text-xs text-muted-foreground">{detail}</p>
        </div>
      </div>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
    </div>
  );
}

/**
 * Feature 02: Memory Timeline preview card
 */
export function MemoryPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(cardContainerClass, className)}
      aria-label="PhoneX memory timeline preview"
    >
      {/* Soft peach ambient glow */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 rounded-full bg-peach-soft/90 blur-3xl" />

      <div className="relative">
        {/* Header */}
        <div>
          <h4 className="text-xl font-bold tracking-tight text-foreground sm:text-[22px]">
            Memory timeline
          </h4>
          <p className="mt-1 text-xs text-muted-foreground">
            Moments PhoneX is keeping for you
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-5 flex h-10 items-center gap-2.5 rounded-full border border-border/70 bg-background px-4 text-xs text-muted-foreground shadow-xs">
          <Search className="h-3.5 w-3.5 shrink-0 text-muted-foreground/70" />
          <span className="text-[11px] sm:text-xs">Search memories</span>
        </div>

        {/* Category Filter Pills */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-foreground px-3.5 py-1 text-xs font-medium text-background">
            All
          </span>
          {["Personal", "Family", "Health"].map((filter) => (
            <span
              key={filter}
              className="rounded-full border border-border/80 bg-background px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              {filter}
            </span>
          ))}
        </div>

        {/* Timeline connector & Memory card */}
        <div className="relative mt-6 pl-5 sm:pl-6">
          {/* Vertical timeline rail */}
          <div className="absolute bottom-2.5 left-1.5 top-2.5 w-[2px] rounded-full bg-peach-soft" />
          {/* Timeline pin point */}
          <div className="absolute left-[3px] top-4 h-2 w-2 rounded-full bg-peach ring-4 ring-card" />

          {/* Memory Card */}
          <div className={cn("p-4 sm:p-5", innerSurfaceClass)}>
            <div className="flex items-start gap-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-lavender-soft text-primary">
                <Gift className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground">
                  Mom&apos;s birthday
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">March 12</p>
              </div>
            </div>

            <p className="mt-3.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
              Don&apos;t forget to call her — she loves voice messages.
            </p>

            <div className="mt-4">
              <span className="inline-flex rounded-full bg-peach-soft px-3 py-1 text-xs font-medium text-peach">
                Important
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const insightItems = [
  {
    label: "Productivity",
    value: "84%",
    detail: "+6%",
    progress: 84,
    icon: Activity,
    tone: "bg-sky-soft text-sky",
  },
  {
    label: "Health",
    value: "Good",
    detail: "Stable",
    progress: 70,
    icon: HeartPulse,
    tone: "bg-rose-soft text-rose",
  },
  {
    label: "Finance",
    value: "$4,210",
    detail: "+12%",
    progress: 75,
    icon: DollarSign,
    tone: "bg-mint-soft text-mint",
  },
  {
    label: "Learning",
    value: "12h",
    detail: "+2h",
    progress: 65,
    icon: BookOpen,
    tone: "bg-lavender-soft text-primary",
  },
];

/**
 * Feature 03: Life Insights preview card
 */
export function InsightsPreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(cardContainerClass, className)}
      aria-label="PhoneX life insights preview"
    >
      {/* Soft mint ambient glow */}
      <div className="pointer-events-none absolute -right-6 -top-6 h-48 w-48 rounded-full bg-mint-soft/90 blur-3xl" />

      <div className="relative">
        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h4 className="text-xl font-bold tracking-tight text-foreground sm:text-[22px]">
              Life Insights
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Patterns across your life
            </p>
          </div>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-mint-soft text-mint">
            <Sparkles className="h-4 w-4" />
          </span>
        </div>

        {/* 2x2 Grid of Metrics Cards */}
        <div className="mt-6 grid grid-cols-2 gap-3.5">
          {insightItems.map(({ label, value, detail, progress, icon: Icon, tone }) => (
            <div
              key={label}
              className={cn("flex flex-col justify-between p-4", innerSurfaceClass)}
            >
              <div className="flex items-start justify-between gap-1">
                <span
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full",
                    tone,
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span className="rounded-full bg-secondary/80 px-2 py-0.5 text-[9px] font-semibold text-muted-foreground">
                  {detail}
                </span>
              </div>

              <div className="mt-3">
                <p className="text-xs font-medium text-muted-foreground">{label}</p>
                <p className="mt-0.5 text-base font-bold text-foreground sm:text-lg">
                  {value}
                </p>
                {/* Purple progress bar matching Image 1 */}
                <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary/80">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}