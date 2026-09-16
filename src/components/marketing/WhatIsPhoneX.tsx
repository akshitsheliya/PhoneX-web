import type { ReactNode } from "react";
import { CalendarCheck, Bookmark, Compass } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/marketing/primitives";
import {
  InsightsPreview,
  MemoryPreview,
  ProductivityPreview,
} from "@/components/marketing/BenefitPreviews";
import { useReveal } from "@/components/marketing/useReveal";
import { cn } from "@/lib/utils";

/**
 * "What is PhoneX?" intro + the three core benefits, each tied to a real
 * PhoneX product preview (Tasks, Memories, Insights).
 */
export function WhatIsPhoneX() {
  const intro = useReveal<HTMLDivElement>();

  return (
    <Section id="what-is-phonex" tone="tint" className="overflow-hidden">
      <Container width="wide">
        {/* Intro */}
        <div
          ref={intro.ref}
          className={cn("mkt-inview mx-auto max-w-[720px] text-center", intro.shown && "is-in")}
        >
          <Eyebrow>
            <span className="text-[11px] uppercase tracking-[0.14em]">What is PhoneX?</span>
          </Eyebrow>
          <h2 className="mkt-h2 mkt-h2-strong mt-6 text-balance">
            More than an AI assistant.
            <br className="hidden sm:block" /> Built for everyday life.
          </h2>
          <p className="mkt-lead mx-auto mt-5 max-w-[560px]">
            PhoneX brings the things you manage every day into one intelligent experience —
            helping you stay organized, remember what matters, and make better use of your time.
          </p>
        </div>

        {/* Benefits */}
        <div className="mx-auto mt-14 grid max-w-[1100px] gap-6 md:mt-16 lg:grid-cols-3">
          <Benefit
            index="01"
            accent="lavender"
            icon={<CalendarCheck className="h-4 w-4" />}
            title="Stay ahead of your day."
            copy="PhoneX helps you organize tasks, priorities, and everyday things that need your attention."
            preview={<ProductivityPreview />}
            note="Real PhoneX Tasks"
          />
          <Benefit
            index="02"
            accent="peach"
            icon={<Bookmark className="h-4 w-4" />}
            title="Remember what matters."
            copy="Save ideas, important moments, and things you want to come back to without letting them disappear."
            preview={<MemoryPreview />}
            note="Real PhoneX Memories"
          />
          <Benefit
            index="03"
            accent="mint"
            icon={<Compass className="h-4 w-4" />}
            title="Understand your life better."
            copy="Discover useful patterns in your routines, productivity, goals, and everyday activities."
            preview={<InsightsPreview />}
            note="Real PhoneX Insights"
          />
        </div>
      </Container>
    </Section>
  );
}

function Benefit({
  index,
  accent,
  icon,
  title,
  copy,
  preview,
  note,
  className,
}: {
  index: string;
  accent: "lavender" | "peach" | "mint";
  icon: ReactNode;
  title: string;
  copy: string;
  preview: ReactNode;
  note: string;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <article
      ref={ref}
      className={cn(
        "mkt-inview mkt-benefit group relative flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/80 backdrop-blur-sm",
        `mkt-accent-${accent}`,
        shown && "is-in",
        className,
      )}
    >
      <div className="mkt-benefit-accent pointer-events-none absolute inset-x-0 top-0 h-px" />
      <div className="relative flex flex-1 flex-col p-7 sm:p-8">
        <div className="relative">
          <span className="mkt-benefit-index absolute -top-2 right-0 select-none text-[2.5rem] font-bold leading-none">
            {index}
          </span>
          <span className="mkt-benefit-chip inline-flex h-9 w-9 items-center justify-center rounded-xl">
            {icon}
          </span>
          <h3 className="mt-5 max-w-[15ch] text-[1.25rem] font-semibold leading-[1.2] tracking-normal">
            {title}
          </h3>
          <p className="mkt-body mt-3 max-w-[36ch]">{copy}</p>
          <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.13em] text-muted-foreground/70">
            {note}
          </p>
        </div>

        <div className="relative mt-7">
          <div className="mkt-benefit-glow pointer-events-none absolute -inset-6 -z-10 rounded-[40%] blur-3xl" />
          <div className="mkt-benefit-window relative mx-auto w-full max-w-[300px] transition-transform duration-500 group-hover:-translate-y-1">
            {preview}
          </div>
        </div>
      </div>
    </article>
  );
}
