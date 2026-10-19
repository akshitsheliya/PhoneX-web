import type { ReactNode } from "react";
import { Calendar, Bookmark, Compass } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/marketing/primitives";
import {
  InsightsPreview,
  MemoryPreview,
  ProductivityPreview,
} from "@/components/marketing/BenefitPreviews";
import { useReveal } from "@/components/marketing/useReveal";
import { cn } from "@/lib/utils";

/**
 * "What is PhoneX?" section featuring alternating 2-column benefit showcases
 * matching the redesigned UI.
 */
export function WhatIsPhoneX() {
  const intro = useReveal<HTMLDivElement>();

  return (
    <Section id="what-is-phonex" tone="tint" className="overflow-hidden py-20 md:py-28 lg:py-32">
      <Container width="wide">
        {/* Section Header */}
        <div
          ref={intro.ref}
          className={cn("mkt-inview mx-auto max-w-[720px] text-center", intro.shown && "is-in")}
        >
          <Eyebrow>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em]">
              What is PhoneX?
            </span>
          </Eyebrow>
          <h2 className="mkt-h2 mkt-h2-strong mt-6 text-balance">
            More than an AI assistant.
            <br className="hidden sm:block" /> Built for everyday life.
          </h2>
          <p className="mkt-lead mx-auto mt-5 max-w-[580px]">
            PhoneX brings the things you manage every day into one intelligent experience —
            helping you stay organized, remember what matters, and make better use of your time.
          </p>
        </div>

        {/* Alternating Feature Rows */}
        <div className="mx-auto mt-20 max-w-[1140px] space-y-24 md:mt-28 md:space-y-32 lg:space-y-36">
          {/* Feature 01: Stay ahead of your day */}
          <FeatureRow
            featureNumber="FEATURE 01"
            icon={<Calendar className="h-4 w-4" />}
            accent="lavender"
            title={
              <>
                Stay ahead of
                <br />
                your day.
              </>
            }
            description="PhoneX helps you organize tasks, priorities, and everyday things that need your attention."
            note="REAL PHONEX TASKS"
            preview={<ProductivityPreview />}
            reversed={false}
          />

          {/* Feature 02: Remember what matters */}
          <FeatureRow
            featureNumber="FEATURE 02"
            icon={<Bookmark className="h-4 w-4" />}
            accent="peach"
            title={
              <>
                Remember what
                <br />
                matters.
              </>
            }
            description="Save ideas, important moments, and things you want to come back to without letting them disappear."
            note="REAL PHONEX MEMORIES"
            preview={<MemoryPreview />}
            reversed={true}
          />

          {/* Feature 03: Understand your life better */}
          <FeatureRow
            featureNumber="FEATURE 03"
            icon={<Compass className="h-4 w-4" />}
            accent="mint"
            title={
              <>
                Understand your
                <br />
                life better.
              </>
            }
            description="Discover useful patterns in your routines, productivity, goals, and everyday activities."
            note="REAL PHONEX INSIGHTS"
            preview={<InsightsPreview />}
            reversed={false}
          />
        </div>
      </Container>
    </Section>
  );
}

function FeatureRow({
  featureNumber,
  icon,
  accent,
  title,
  description,
  note,
  preview,
  reversed,
}: {
  featureNumber: string;
  icon: ReactNode;
  accent: "lavender" | "peach" | "mint";
  title: ReactNode;
  description: string;
  note: string;
  preview: ReactNode;
  reversed?: boolean;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  const accentStyles = {
    lavender: "bg-lavender-soft text-primary",
    peach: "bg-peach-soft text-peach",
    mint: "bg-mint-soft text-mint",
  }[accent];

  return (
    <div
      ref={ref}
      className={cn(
        "mkt-inview grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20",
        shown && "is-in",
      )}
    >
      {/* Content Column */}
      <div
        className={cn(
          "flex flex-col justify-center",
          reversed ? "order-1 md:order-2 md:pl-6 lg:pl-10" : "order-1 md:pr-6 lg:pr-10",
        )}
      >
        {/* Eyebrow badge with icon */}
        <div className="inline-flex items-center gap-2.5">
          <span
            className={cn(
              "inline-flex h-7 w-7 items-center justify-center rounded-lg shadow-2xs",
              accentStyles,
            )}
          >
            {icon}
          </span>
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground/80">
            {featureNumber}
          </span>
        </div>

        {/* Feature Title */}
        <h3 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[40px] lg:leading-[1.18]">
          {title}
        </h3>

        {/* Feature Description */}
        <p className="mt-4 max-w-[440px] text-base leading-relaxed text-muted-foreground sm:text-[17px]">
          {description}
        </p>

        {/* Feature Note/Category */}
        <p className="mt-7 text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground/60">
          {note}
        </p>
      </div>

      {/* Visual Preview Column */}
      <div
        className={cn(
          "flex justify-center",
          reversed ? "order-2 md:order-1" : "order-2",
        )}
      >
        {preview}
      </div>
    </div>
  );
}
