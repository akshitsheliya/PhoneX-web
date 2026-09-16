import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Container,
  Section,
  SectionHeading,
  CTALink,
} from "@/components/marketing/primitives";
import { DeviceScreen } from "@/components/marketing/DeviceFrame";
import { useReveal } from "@/components/marketing/useReveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_marketing/get-started")({
  head: () => ({
    meta: [
      { title: "Get started with PhoneX — your personal AI companion" },
      {
        name: "description",
        content:
          "See how PhoneX works in three simple steps and open the live PhoneX experience to try it for yourself.",
      },
      { property: "og:title", content: "Get started with PhoneX" },
      {
        property: "og:description",
        content: "How PhoneX works, and how to start using it today.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/get-started" }],
  }),
  component: GetStartedPage,
});

const STEPS = [
  {
    n: "01",
    title: "Open PhoneX",
    body: "Start with the home screen — your day, your reminders and anything worth knowing right now, in one place.",
  },
  {
    n: "02",
    title: "Tell it what matters",
    body: "Speak or type a task, a detail to remember, or something on your mind. PhoneX takes it from a sentence to something organised.",
  },
  {
    n: "03",
    title: "Let it learn your rhythm",
    body: "The more you use PhoneX, the better it understands your routines — and the more useful its reminders and insights become.",
  },
];

function GetStartedPage() {
  const steps = useReveal<HTMLDivElement>();

  return (
    <>
      <Section size="hero">
        <Container width="wide">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16">
            <div className="max-w-[560px]">
              <SectionHeading
                eyebrow="How it works"
                title="Start in minutes. Improve every day."
                description="PhoneX learns quietly in the background — the longer you use it, the more personal it becomes."
              />
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <CTALink to="/app" size="lg" className="w-full sm:w-auto">
                  Experience PhoneX
                </CTALink>
                <Link
                  to="/features"
                  className="inline-flex h-13 items-center justify-center rounded-xl border border-border bg-card px-7 text-[15px] font-semibold text-foreground transition-all duration-200 hover:border-foreground/25 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  See all features
                </Link>
              </div>
              <p className="mkt-body mt-6 text-[13px]">
                PhoneX is in early access. The live experience opens in your browser — no account or
                install needed yet.
              </p>
            </div>

            <div className="mx-auto w-full max-w-[260px]">
              <DeviceScreen screen="home" height={800} glow={false} />
            </div>
          </div>
        </Container>
      </Section>

      <Section size="compact" tone="tint">
        <Container width="wide">
          <div
            ref={steps.ref}
            className={cn(
              "mkt-inview mx-auto grid max-w-[1000px] gap-8 md:grid-cols-3 md:gap-10",
              steps.shown && "is-in",
            )}
          >
            {STEPS.map((s) => (
              <div key={s.n} className="max-w-[340px]">
                <p className="text-[13px] font-medium tracking-[0.12em] text-muted-foreground">
                  {s.n}
                </p>
                <h2 className="mkt-h3 mt-3">{s.title}</h2>
                <p className="mkt-body mt-2.5">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section size="compact">
        <Container width="wide">
          <div className="mx-auto max-w-[620px] text-center">
            <h2 className="mkt-h2 text-balance">Try it the way you would use it.</h2>
            <p className="mkt-lead mx-auto mt-4 max-w-[480px]">
              Open PhoneX and move through a normal day — plan something, save a detail, ask a
              question.
            </p>
            <div className="mt-8 flex justify-center">
              <CTALink to="/app" size="lg">
                Experience PhoneX
              </CTALink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
