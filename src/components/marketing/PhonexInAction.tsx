import { useState } from "react";
import { CalendarCheck, Bookmark, MessageCircle, LineChart, Quote } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/marketing/primitives";
import { AppScreen, type AppScreenKey } from "@/components/marketing/DeviceFrame";
import { useReveal } from "@/components/marketing/useReveal";
import { cn } from "@/lib/utils";

type Experience = {
  key: "plan" | "remember" | "talk" | "understand";
  tab: string;
  icon: typeof CalendarCheck;
  tone: string;
  title: string;
  copy: string;
  screen: AppScreenKey;
  label: string;
  moment: { from: string; line: string };
};

const EXPERIENCES: Experience[] = [
  {
    key: "plan",
    tab: "Plan",
    icon: CalendarCheck,
    tone: "mkt-act-plan",
    title: "Plan your day without the mental clutter.",
    copy: "Turn everyday thoughts and priorities into a clearer plan with PhoneX.",
    screen: "tasks",
    label: "Daily priorities",
    moment: { from: "You", line: "What should I focus on today?" },
  },
  {
    key: "remember",
    tab: "Remember",
    icon: Bookmark,
    tone: "mkt-act-remember",
    title: "Keep what matters close.",
    copy: "Save ideas, important moments, and useful information so they don't get lost in everyday life.",
    screen: "memories",
    label: "Saved memory",
    moment: { from: "You", line: "Remember the restaurant Sarah recommended." },
  },
  {
    key: "talk",
    tab: "Talk",
    icon: MessageCircle,
    tone: "mkt-act-talk",
    title: "Just talk to PhoneX.",
    copy: "Ask questions, share thoughts, or get help naturally — without learning complicated commands.",
    screen: "voice",
    label: "AI companion",
    moment: { from: "You", line: "Help me organize tomorrow." },
  },
  {
    key: "understand",
    tab: "Understand",
    icon: LineChart,
    tone: "mkt-act-understand",
    title: "See the patterns in your everyday life.",
    copy: "PhoneX can help you understand useful patterns across your routines, productivity, and daily activities.",
    screen: "insights",
    label: "Life insights",
    moment: { from: "PhoneX", line: "Here's how your week is coming together." },
  },
];

/** "See PhoneX in action" — interactive showcase of four real app experiences. */
export function PhonexInAction() {
  const [active, setActive] = useState<Experience["key"]>("plan");
  const [loaded, setLoaded] = useState<Experience["key"][]>(["plan"]);
  const intro = useReveal<HTMLDivElement>();
  const body = useReveal<HTMLDivElement>(0.12);

  const current = EXPERIENCES.find((e) => e.key === active)!;

  const select = (key: Experience["key"]) => {
    setActive(key);
    setLoaded((prev) => (prev.includes(key) ? prev : [...prev, key]));
  };

  const onTabKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next =
      (index + (e.key === "ArrowRight" ? 1 : EXPERIENCES.length - 1)) % EXPERIENCES.length;
    select(EXPERIENCES[next].key);
    const el = document.getElementById(`mkt-act-tab-${EXPERIENCES[next].key}`);
    el?.focus();
  };

  return (
    <Section id="see-phonex-in-action" className="mkt-act relative overflow-hidden">
      <Container width="wide">
        <div
          ref={intro.ref}
          className={cn("mkt-inview mx-auto max-w-[680px] text-center", intro.shown && "is-in")}
        >
          <Eyebrow>
            <span className="text-[11px] uppercase tracking-[0.14em]">See PhoneX in action</span>
          </Eyebrow>
          <h2 className="mkt-h2 mt-6 text-balance">
            One app. Many ways to make life easier.
          </h2>
          <p className="mkt-lead mx-auto mt-5 max-w-[560px]">
            Explore how PhoneX helps you plan, remember, talk, and understand — all from one
            personal AI companion.
          </p>
        </div>

        <div
          ref={body.ref}
          className={cn(
            "mkt-inview mx-auto mt-12 grid max-w-[980px] items-center gap-12 lg:mt-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14",
            body.shown && "is-in",
            current.tone,
          )}
        >
          {/* Left: tabs + copy */}
          <div className="max-w-[520px]">
            <div
              role="tablist"
              aria-label="PhoneX experiences"
              className="mkt-act-tabs -mx-6 flex snap-x gap-1.5 overflow-x-auto px-6 pb-1 scrollbar-none lg:mx-0 lg:px-0"
            >
              {EXPERIENCES.map((exp, i) => {
                const Icon = exp.icon;
                const isActive = exp.key === active;
                return (
                  <button
                    key={exp.key}
                    id={`mkt-act-tab-${exp.key}`}
                    role="tab"
                    type="button"
                    aria-selected={isActive}
                    aria-controls="mkt-act-panel"
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => select(exp.key)}
                    onKeyDown={(e) => onTabKeyDown(e, i)}
                    className={cn(
                      "mkt-act-tab shrink-0 snap-start inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[14px] font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      isActive
                        ? "is-active font-semibold"
                        : "border-transparent text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {exp.tab}
                  </button>
                );
              })}
            </div>

            <div
              id="mkt-act-panel"
              role="tabpanel"
              aria-labelledby={`mkt-act-tab-${current.key}`}
              className="mt-8 min-h-[240px]"
            >
              <div key={current.key} className="mkt-act-swap">
                <h3 className="text-balance text-[1.55rem] font-semibold leading-[1.15] tracking-normal md:text-[2rem]">
                  {current.title}
                </h3>
                <p className="mkt-body mt-4 max-w-[440px] text-[0.975rem]">{current.copy}</p>

                <div className="mkt-act-moment mt-7 max-w-[400px] rounded-2xl border px-4 py-3.5">
                  <div className="flex items-start gap-2.5">
                    <Quote className="mkt-act-quote mt-0.5 h-3.5 w-3.5 shrink-0" />
                    <div>
                      <p className="text-[13px] font-medium leading-snug text-foreground/85">
                        {current.moment.line}
                      </p>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                        {current.moment.from}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: real PhoneX device */}
          <div className="flex w-full justify-center lg:justify-end">
            <div className="relative w-full max-w-[248px] sm:max-w-[260px]">
              <div className="mkt-act-glow pointer-events-none absolute inset-[-26%] -z-10 rounded-full blur-3xl" />
              <div className="relative grid drop-shadow-[0_40px_60px_oklch(0.25_0.08_285/0.22)]">
                {EXPERIENCES.map((exp) => (
                  <div
                    key={exp.key}
                    className={cn(
                      "col-start-1 row-start-1 transition-all duration-500 ease-out",
                      exp.key === active
                        ? "opacity-100 scale-100"
                        : "pointer-events-none opacity-0 scale-[0.985]",
                    )}
                    aria-hidden={exp.key !== active}
                  >
                    {loaded.includes(exp.key) ? (
                      <AppScreen screen={exp.screen} height={844} />
                    ) : null}
                  </div>
                ))}
              </div>

              <div
                key={current.key}
                className="mkt-act-chip mkt-act-swap absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[12px] font-medium shadow-soft backdrop-blur-md"
              >
                {current.label}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
