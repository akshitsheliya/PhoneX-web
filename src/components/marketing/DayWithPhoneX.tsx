import type { ReactNode } from "react";
import { Sun, Zap, Moon, Quote } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/marketing/primitives";
import { DeviceScreen, type AppScreenKey } from "@/components/marketing/DeviceFrame";
import { useReveal } from "@/components/marketing/useReveal";
import { cn } from "@/lib/utils";

type Stage = {
  key: string;
  time: string;
  icon: ReactNode;
  tone: "morning" | "afternoon" | "evening";
  title: string;
  copy: string;
  screen: AppScreenKey;
  caption: string;
  moment: { from: string; line: string };
};

const STAGES: Stage[] = [
  {
    key: "morning",
    time: "Morning",
    icon: <Sun className="h-4 w-4" />,
    tone: "morning",
    title: "Start your day with clarity.",
    copy: "See what matters, organize your priorities, and begin your day with a clear plan.",
    screen: "home",
    caption: "Let's plan your day.",
    moment: { from: "You", line: "What do I need to focus on today?" },
  },
  {
    key: "afternoon",
    time: "Afternoon",
    icon: <Zap className="h-4 w-4" />,
    tone: "afternoon",
    title: "Stay on track without keeping everything in your head.",
    copy: "Keep up with important tasks, save things you want to remember, and stay focused on what matters.",
    screen: "memories",
    caption: "Don't forget that idea.",
    moment: { from: "You", line: "Remember this idea for later." },
  },
  {
    key: "evening",
    time: "Evening",
    icon: <Moon className="h-4 w-4" />,
    tone: "evening",
    title: "Understand more about your day.",
    copy: "Reflect on what you accomplished, notice useful patterns, and see how your day came together.",
    screen: "insights",
    caption: "Here's how your day went.",
    moment: { from: "PhoneX", line: "You completed most of your priorities today." },
  },
];

/** "A day with PhoneX" — one connected story across morning, afternoon and evening. */
export function DayWithPhoneX() {
  const intro = useReveal<HTMLDivElement>();

  return (
    <Section id="a-day-with-phonex" className="mkt-day relative overflow-hidden">
      <Container width="wide">
        <div
          ref={intro.ref}
          className={cn("mkt-inview mx-auto max-w-[680px] text-center", intro.shown && "is-in")}
        >
          <Eyebrow>
            <span className="text-[11px] uppercase tracking-[0.14em]">A day with PhoneX</span>
          </Eyebrow>
          <h2 className="mkt-h2 mt-6 text-balance">
            One companion.
            <br className="hidden sm:block" /> There when you need it.
          </h2>
          <p className="mkt-lead mx-auto mt-5 max-w-[540px]">
            PhoneX fits naturally into your day — helping you plan, remember, stay on track, and
            reflect along the way.
          </p>
        </div>

        <div className="relative mt-14 lg:mt-16">
          {/* connecting rail (desktop) */}
          <div className="mkt-day-rail pointer-events-none absolute inset-y-0 left-1/2 hidden w-px -translate-x-1/2 lg:block" />

          <div className="flex flex-col gap-16 lg:gap-20">
            {STAGES.map((stage, i) => (
              <StageBlock key={stage.key} stage={stage} flip={i % 2 === 1} step={i + 1} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}

function StageBlock({ stage, flip, step }: { stage: Stage; flip: boolean; step: number }) {
  const reveal = useReveal<HTMLDivElement>(0.15);

  return (
    <div
      ref={reveal.ref}
      className={cn(
        "mkt-inview mkt-stage relative",
        `mkt-stage-${stage.tone}`,
        reveal.shown && "is-in",
      )}
    >
      {/* time-of-day ambience */}
      <div className="mkt-stage-aura pointer-events-none absolute -inset-x-10 -inset-y-16 -z-10 blur-3xl" />

      {/* timeline node */}
      <div className="mkt-stage-node absolute left-1/2 top-2 hidden h-3 w-3 -translate-x-1/2 rounded-full lg:block" />

      <div
        className={cn(
          "grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16",
        )}
      >
        {/* Copy */}
        <div
          className={cn(
            "max-w-[460px] lg:pt-2",
            flip ? "lg:order-2 lg:justify-self-start lg:pl-12" : "lg:order-1 lg:justify-self-end lg:pr-12",
          )}
        >
          <div className="mkt-stage-label inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em]">
            {stage.icon}
            {stage.time}
          </div>

          <h3 className="mkt-stage-title mt-5 text-balance text-[1.6rem] font-semibold leading-[1.15] tracking-normal md:text-[2rem]">
            {stage.title}
          </h3>
          <p className="mkt-body mt-4 max-w-[420px] text-[0.975rem]">{stage.copy}</p>

          <div className="mkt-stage-moment mt-7 max-w-[380px] rounded-2xl border px-4 py-3.5">
            <div className="flex items-start gap-2.5">
              <Quote className="mkt-stage-quote mt-0.5 h-3.5 w-3.5 shrink-0" />
              <div>
                <p className="text-[13px] font-medium leading-snug text-foreground/85">
                  {stage.moment.line}
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">
                  {stage.moment.from}
                </p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-[12px] text-muted-foreground/80">Step {step} of 3</p>
        </div>

        {/* Real PhoneX screen */}
        <div
          className={cn(
            "flex w-full justify-center",
            flip ? "lg:order-1 lg:justify-end lg:pr-12" : "lg:order-2 lg:justify-start lg:pl-12",
          )}
        >
          <div className="relative w-full max-w-[244px] pb-8 sm:max-w-[258px]">
            <div className="mkt-stage-glow pointer-events-none absolute inset-[-22%] -z-10 rounded-full blur-3xl" />
            <DeviceScreen screen={stage.screen} height={844} glow={false} />
            <div className="mkt-stage-caption absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border px-3.5 py-1.5 text-[12px] font-medium shadow-soft backdrop-blur-md">
              {stage.caption}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
