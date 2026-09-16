import { createFileRoute, Link } from "@tanstack/react-router";
import { Container, Section, CTALink, Eyebrow } from "@/components/marketing/primitives";
import { DeviceScreen } from "@/components/marketing/DeviceFrame";
import { WhatIsPhoneX } from "@/components/marketing/WhatIsPhoneX";
import { DayWithPhoneX } from "@/components/marketing/DayWithPhoneX";
import { PhonexInAction } from "@/components/marketing/PhonexInAction";
import { FeatureStories } from "@/components/marketing/FeatureStories";
import { WhyPhoneX } from "@/components/marketing/WhyPhoneX";
import { PrivacyTrust } from "@/components/marketing/PrivacyTrust";
import { FinalCTA } from "@/components/marketing/FinalCTA";
import { Sparkles, Brain, BarChart3 } from "lucide-react";


export const Route = createFileRoute("/_marketing/")({
  head: () => ({
    meta: [
      { title: "PhoneX — Your Personal AI Companion" },
      {
        name: "description",
        content:
          "PhoneX is a personal AI companion designed to help you plan, remember, stay organized, and understand your everyday life.",
      },
      { property: "og:title", content: "PhoneX — Your Personal AI Companion" },
      {
        property: "og:description",
        content:
          "A personal AI companion for planning your day, remembering what matters, and understanding your life.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: MarketingHome,
});

function MarketingHome() {
  return (
    <>
    <Section size="hero" className="overflow-hidden">

      <Container
        width="wide"
        className="grid items-center gap-14 lg:grid-cols-[minmax(0,50fr)_minmax(0,50fr)] lg:gap-12"
      >
        {/* Left: message */}
        <div className="mkt-reveal max-w-[560px]">
          <Eyebrow>
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="tracking-[0.14em] uppercase text-[11px]">Meet PhoneX</span>
          </Eyebrow>

          <h1 className="mkt-h1 mt-6 text-balance">
            Your everyday life,
            <br className="hidden sm:block" /> made easier by AI.
          </h1>

          <p className="mkt-lead mt-5 max-w-[480px]">
            PhoneX is your personal AI companion that helps you organize your day, remember
            what matters, stay on track, and understand your life better.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <CTALink to="/get-started" size="lg">
              Get PhoneX
            </CTALink>
            <Link
              to="/features"
              hash="how-it-works"
              className="inline-flex h-13 items-center justify-center rounded-xl border border-border bg-card px-7 text-[15px] font-semibold text-foreground transition-all duration-200 hover:border-foreground/25 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              See how it works
            </Link>
          </div>

          <p className="mkt-body mt-6 text-[13px]">
            Private by design. Your day, your memories, your data.
          </p>
        </div>

        {/* Right: real PhoneX app inside a device */}
        <div className="mkt-reveal mkt-reveal-2 flex justify-center lg:justify-end">
          <div className="relative w-full max-w-[288px] sm:max-w-[300px]">
            <div className="mkt-hero-aura pointer-events-none absolute inset-[-28%] -z-10 rounded-full blur-3xl" />

            <DeviceScreen screen="home" height={844} glow={false} preview="hero-readable" />

            <HeroCallout
              className="top-[14%] -left-6 mkt-reveal mkt-reveal-2 hidden md:flex lg:-left-[210px]"
              icon={<Brain className="h-3.5 w-3.5 text-primary" />}
              label="Plan your day"
            />
            <HeroCallout
              className="top-[45%] -right-6 mkt-reveal mkt-reveal-3 hidden md:flex lg:-left-[230px] lg:right-auto"
              icon={<Sparkles className="h-3.5 w-3.5 text-primary" />}
              label="Remember what matters"
            />
            <HeroCallout
              className="bottom-[16%] -left-4 mkt-reveal mkt-reveal-3 hidden lg:flex lg:-left-[195px]"
              icon={<BarChart3 className="h-3.5 w-3.5 text-primary" />}
              label="Understand your life"
            />
          </div>
        </div>

      </Container>
    </Section>
    <WhatIsPhoneX />
    <DayWithPhoneX />
    <PhonexInAction />
    <FeatureStories />
    <WhyPhoneX />
    <PrivacyTrust />
    <FinalCTA />
    </>
  );
}

function HeroCallout({
  className,
  icon,
  label,
}: {
  className?: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div
      className={`absolute z-10 items-center gap-2 rounded-full border border-border/70 bg-card/85 px-3.5 py-2 text-[13px] font-medium text-foreground/80 shadow-soft backdrop-blur-md ${className ?? ""}`}
    >
      {icon}
      {label}
    </div>
  );
}
