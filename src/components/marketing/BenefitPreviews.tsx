import {
  Activity,
  BookOpen,
  Check,
  Circle,
  DollarSign,
  Gift,
  HeartPulse,
  Search,
  Sparkles,
} from "lucide-react";

const panelClass =
  "relative aspect-square w-full overflow-hidden rounded-[1.4rem] border border-border/70 bg-card p-4 shadow-soft sm:p-5";

const surfaceClass = "rounded-xl border border-border/70 bg-background/90 shadow-soft";

export function ProductivityPreview() {
  return (
    <div className={panelClass} aria-label="PhoneX task dashboard preview">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-20 bg-lavender-soft blur-3xl" />
      <div className="relative flex h-full min-h-0 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[15px] font-semibold leading-tight text-foreground">Today&apos;s Tasks</p>
            <p className="mt-1 text-[10px] text-muted-foreground">8 of 10 completed · 80%</p>
          </div>
          <span className="inline-flex h-7 items-center rounded-full bg-lavender-soft px-2.5 text-[9px] font-semibold text-primary">
            On track
          </span>
        </div>

        <div className={"mt-3 p-3 " + surfaceClass}>
          <div className="flex items-center justify-between text-[9px] text-muted-foreground">
            <span>Completion</span>
            <span className="font-medium text-foreground">80%</span>
          </div>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-secondary">
            <div className="h-full w-4/5 rounded-full bg-primary" />
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <span className="flex items-center gap-1.5 text-[9px] font-semibold uppercase text-muted-foreground">
            <Check className="h-3 w-3 text-primary" /> Completed
          </span>
          <span className="text-[9px] text-muted-foreground">4</span>
        </div>

        <div className={"mt-2 min-h-0 flex-1 divide-y divide-border/70 overflow-hidden " + surfaceClass}>
          <TaskRow title="Morning Workout" detail="Completed at 7:15 AM" done />
          <TaskRow title="Reply to Sarah" detail="Completed at 9:30 AM" done />
        </div>
      </div>
    </div>
  );
}

function TaskRow({ title, detail, done }: { title: string; detail: string; done?: boolean }) {
  return (
    <div className="flex min-h-0 flex-1 items-center gap-2.5 px-3 py-2">
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint-soft text-mint">
        {done ? <Check className="h-3 w-3" /> : <Circle className="h-3 w-3" />}
      </span>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[10px] font-medium text-foreground">{title}</p>
        <p className="mt-0.5 truncate text-[8px] text-muted-foreground">{detail}</p>
      </div>
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-mint" />
    </div>
  );
}

export function MemoryPreview() {
  return (
    <div className={panelClass} aria-label="PhoneX memory timeline preview">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-20 bg-peach-soft blur-3xl" />
      <div className="relative flex h-full min-h-0 flex-col">
        <div>
          <p className="text-[15px] font-semibold leading-tight text-foreground">Memory timeline</p>
          <p className="mt-1 text-[10px] text-muted-foreground">Moments PhoneX is keeping for you</p>
        </div>

        <div className="mt-3 flex h-8 items-center gap-2 rounded-full border border-border/70 bg-background px-3 text-muted-foreground shadow-soft">
          <Search className="h-3 w-3 shrink-0" />
          <span className="text-[9px]">Search memories</span>
        </div>

        <div className="mt-2.5 flex gap-1.5 overflow-hidden">
          <span className="rounded-full bg-foreground px-2.5 py-1 text-[8px] font-medium text-background">All</span>
          {['Personal', 'Family', 'Health'].map((filter) => (
            <span key={filter} className="rounded-full border border-border/70 bg-background px-2 py-1 text-[8px] text-muted-foreground">
              {filter}
            </span>
          ))}
        </div>

        <div className={"mt-3 min-h-0 flex-1 p-3.5 " + surfaceClass}>
          <div className="flex items-start gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-lavender-soft text-primary">
              <Gift className="h-3.5 w-3.5" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold text-foreground">Mom&apos;s birthday</p>
              <p className="mt-0.5 text-[8px] text-muted-foreground">March 12</p>
            </div>
          </div>
          <p className="mt-3 text-[9px] leading-relaxed text-muted-foreground">
            Don&apos;t forget to call her — she loves voice messages.
          </p>
          <span className="mt-3 inline-flex rounded-full bg-peach-soft px-2 py-1 text-[8px] font-medium text-muted-foreground">
            Important
          </span>
        </div>
      </div>
    </div>
  );
}

const insightItems = [
  { label: "Productivity", value: "84%", detail: "+6%", icon: Activity, tone: "bg-sky-soft text-sky" },
  { label: "Health", value: "Good", detail: "Stable", icon: HeartPulse, tone: "bg-rose-soft text-rose" },
  { label: "Finance", value: "$4,210", detail: "+12%", icon: DollarSign, tone: "bg-mint-soft text-mint" },
  { label: "Learning", value: "12h", detail: "+2h", icon: BookOpen, tone: "bg-lavender-soft text-primary" },
];

export function InsightsPreview() {
  return (
    <div className={panelClass} aria-label="PhoneX life insights preview">
      <div className="pointer-events-none absolute inset-x-8 top-0 h-20 bg-mint-soft blur-3xl" />
      <div className="relative flex h-full min-h-0 flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[15px] font-semibold leading-tight text-foreground">Life Insights</p>
            <p className="mt-1 text-[10px] text-muted-foreground">Patterns across your life</p>
          </div>
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-mint-soft text-mint">
            <Sparkles className="h-3.5 w-3.5" />
          </span>
        </div>

        <div className="mt-4 grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-2.5">
          {insightItems.map(({ label, value, detail, icon: Icon, tone }) => (
            <div key={label} className={"flex min-h-0 flex-col justify-between p-3 " + surfaceClass}>
              <div className="flex items-start justify-between gap-1">
                <span className={"flex h-7 w-7 items-center justify-center rounded-full " + tone}>
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <span className="rounded-full bg-secondary px-1.5 py-0.5 text-[7px] font-medium text-muted-foreground">
                  {detail}
                </span>
              </div>
              <div className="mt-2">
                <p className="text-[8px] text-muted-foreground">{label}</p>
                <p className="mt-0.5 text-[11px] font-semibold text-foreground">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}