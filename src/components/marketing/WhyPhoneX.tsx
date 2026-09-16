import { ListChecks, Bookmark, MessageCircle, LineChart, ArrowRight } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/marketing/primitives";
import { AppScreen, DeviceFrame } from "@/components/marketing/DeviceFrame";
import { useReveal } from "@/components/marketing/useReveal";
import { cn } from "@/lib/utils";

const CONCEPTS = [
  { key: "tasks", label: "Tasks", icon: ListChecks, tone: "mkt-why-blue", pos: "lg:left-0 lg:top-[6%]" },
  { key: "memories", label: "Memories", icon: Bookmark, tone: "mkt-why-peach", pos: "lg:right-0 lg:top-[6%]" },
  { key: "chat", label: "Conversations", icon: MessageCircle, tone: "mkt-why-lavender", pos: "lg:left-0 lg:bottom-[10%]" },
  { key: "insights", label: "Insights", icon: LineChart, tone: "mkt-why-mint", pos: "lg:right-0 lg:bottom-[10%]" },
] as const;

const DIFFERENTIATORS = [
  {
    index: "01",
    title: "Built around your everyday life.",
    copy: "PhoneX is designed around the things you actually do every day — not around a single task or conversation.",
    },
  {
    index: "02",
    title: "One experience, not disconnected tools.",
    copy: "Your conversations, tasks, memories, and insights can live within one connected PhoneX experience.",
    },
  {
    index: "03",
    title: "Becomes more personal over time.",
    copy: "PhoneX is designed to adapt around your preferences, context, and the way you use it.",
    },
] as const;

function ConceptChip({
  label,
  Icon,
  tone,
  className,
}: {
  label: string;
  Icon: typeof ListChecks;
  tone: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mkt-why-chip inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[13px] font-medium",
        tone,
        className,
      )}
    >
      <Icon className="mkt-why-chip-icon h-3.5 w-3.5" aria-hidden="true" />
      {label}
    </div>
  );
}

/** Step 7 — Why PhoneX: scattered concepts converging into one experience. */
export function WhyPhoneX() {
  const intro = useReveal<HTMLDivElement>();
  const diagram = useReveal<HTMLDivElement>(0.12);
  const diffs = useReveal<HTMLDivElement>(0.1);
  const compare = useReveal<HTMLDivElement>(0.2);

  return (
    <Section id="why-phonex" className="mkt-why relative overflow-hidden">
      <Container width="wide">
        {/* Intro */}
        <div
          ref={intro.ref}
          className={cn("mkt-inview mx-auto max-w-[680px] text-center", intro.shown && "is-in")}
        >
          <Eyebrow>
            <span className="text-[11px] uppercase tracking-[0.14em]">Why PhoneX</span>
          </Eyebrow>
          <h2 className="mkt-h2 mt-6 text-balance">
            Everything works better when it works together.
          </h2>
          <p className="mkt-lead mx-auto mt-5 max-w-[560px]">
            PhoneX connects the everyday things you think about, remember, plan, and do into one
            personal experience.
          </p>
        </div>

        {/* Scattered → connected */}
        <div
          ref={diagram.ref}
          className={cn("mkt-inview mt-12 lg:mt-14", diagram.shown && "is-in")}
        >
          {/* Mobile: vertical progression */}
          <div className="lg:hidden">
            <div className="mx-auto flex max-w-[320px] flex-col items-center gap-2.5">
              {CONCEPTS.map((c) => (
                <ConceptChip key={c.key} label={c.label} Icon={c.icon} tone={c.tone} />
              ))}
              <span className="mkt-why-rail h-10 w-px" aria-hidden="true" />
              <p className="mkt-why-center text-[13px] font-semibold uppercase tracking-[0.14em]">
                PhoneX
              </p>
              <div className="mt-5 w-full max-w-[248px]">
                <DeviceFrame glow={false}>
                  <div className="mkt-why-glow pointer-events-none absolute inset-[-26%] -z-10 rounded-full blur-3xl" />
                  <AppScreen screen="home" height={844} />
                </DeviceFrame>
              </div>
              <p className="mkt-body mt-4 text-center text-[13px]">
                Different things in different places — brought into one connected experience.
              </p>
            </div>
          </div>

          {/* Desktop: converging composition */}
          <div className="relative mx-auto hidden max-w-[1000px] lg:block">
            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 1000 620"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              {[
                "M 190 96 C 330 150, 400 200, 470 270",
                "M 810 96 C 670 150, 600 200, 530 270",
                "M 190 528 C 330 470, 400 420, 470 356",
                "M 810 528 C 670 470, 600 420, 530 356",
              ].map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill="none"
                  className={cn("mkt-why-line", diagram.shown && "is-in")}
                  style={{ animationDelay: `${0.15 + i * 0.12}s` }}
                />
              ))}
            </svg>

            <div className="relative grid min-h-[560px] place-items-center">
              {CONCEPTS.map((c) => (
                <ConceptChip
                  key={c.key}
                  label={c.label}
                  Icon={c.icon}
                  tone={c.tone}
                  className={cn("absolute", c.pos)}
                />
              ))}

              <div className="relative w-[250px]">
                <div className="mkt-why-glow pointer-events-none absolute inset-[-40%] -z-10 rounded-full blur-3xl" />
                <DeviceFrame glow={false}>
                  <AppScreen screen="home" height={844} />
                </DeviceFrame>
              </div>
            </div>

            <p className="mkt-body mt-2 text-center text-[13px]">
              Different things in different places, brought into one connected PhoneX experience.
            </p>
          </div>
        </div>

        {/* Differentiators — editorial, staggered */}
        <div
          ref={diffs.ref}
          className={cn("mkt-inview mx-auto mt-16 max-w-[1000px] lg:mt-20", diffs.shown && "is-in")}
        >
          <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {DIFFERENTIATORS.map((d) => (
              <li key={d.index} className="max-w-[320px]">
                <span className="mkt-why-index text-[13px] font-medium tabular-nums tracking-[0.16em]">
                  {d.index}
                </span>
                <h3 className="mkt-h3 mt-3 text-[19px] text-balance">{d.title}</h3>
                <p className="mkt-body mt-2.5 text-[14px]">{d.copy}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* Mini comparison */}
        <div
          ref={compare.ref}
          className={cn(
            "mkt-inview mx-auto mt-16 max-w-[760px] text-center lg:mt-20",
            compare.shown && "is-in",
          )}
        >
          <h3 className="mkt-h3">Less switching. More doing.</h3>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="mkt-why-compare rounded-3xl border p-6 text-left">
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Without PhoneX
              </p>
              <p className="mkt-body mt-3 text-[15px] leading-relaxed">
                Think <Sep /> Search <Sep /> Switch app <Sep /> Remember <Sep /> Switch again
              </p>
            </div>
            <div className="mkt-why-compare mkt-why-compare-strong rounded-3xl border p-6 text-left">
              <p className="mkt-why-center text-[11px] font-medium uppercase tracking-[0.14em]">
                With PhoneX
              </p>
              <p className="mt-3 text-[15px] font-medium leading-relaxed text-foreground">
                Think <Sep /> PhoneX <Sep /> Action
              </p>
            </div>
          </div>
          <p className="mkt-body mt-10 text-[14px]">Designed around the way you live.</p>
        </div>
      </Container>
    </Section>
  );
}

function Sep() {
  return (
    <ArrowRight
      className="mx-1.5 inline h-3.5 w-3.5 -translate-y-px text-muted-foreground/70"
      aria-hidden="true"
    />
  );
}
