import { createFileRoute } from "@tanstack/react-router";
import {
  Container,
  Section,
  SectionHeading,
  CTALink,
} from "@/components/marketing/primitives";
import { DeviceScreen, type AppScreenKey } from "@/components/marketing/DeviceFrame";
import { useReveal } from "@/components/marketing/useReveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_marketing/features")({
  head: () => ({
    meta: [
      { title: "Features — PhoneX personal AI companion" },
      {
        name: "description",
        content:
          "Memory, voice, tasks, insights and an AI that learns how you think — a closer look at what PhoneX does for your everyday life.",
      },
      { property: "og:title", content: "Features — PhoneX personal AI companion" },
      {
        property: "og:description",
        content: "Explore the capabilities behind the PhoneX AI companion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/features" }],
  }),
  component: FeaturesPage,
});

type Feature = {
  id: string;
  title: string;
  question: string;
  body: string;
  points: string[];
  screen: AppScreenKey;
};

const FEATURES: Feature[] = [
  {
    id: "companion",
    title: "A companion you can talk to",
    question: "Somewhere to think out loud",
    body: "Ask PhoneX to plan something, remind you later, or simply help you make sense of a busy day. It answers in plain language and keeps the context of what you already told it.",
    points: ["Natural conversation", "Keeps context between chats", "Turns a request into a plan"],
    screen: "chat",
  },
  {
    id: "tasks",
    title: "Tasks that organise themselves",
    question: "What should I do next?",
    body: "Add something in a sentence and PhoneX sorts out the timing, priority and grouping — so your list stays short and honest instead of endless.",
    points: ["Add tasks in one line", "Grouped by moment of day", "Gentle, well-timed reminders"],
    screen: "tasks",
  },
  {
    id: "memories",
    title: "Memories you can actually find",
    question: "What was that thing again?",
    body: "Names, places, decisions, small details you meant to keep — PhoneX stores them the way you said them and brings them back when they matter.",
    points: ["Save a detail in seconds", "Search the way you speak", "Resurfaced in context"],
    screen: "memories",
  },
  {
    id: "voice",
    title: "Voice for hands-free moments",
    question: "When typing is not an option",
    body: "Walking, cooking, driving — speak to PhoneX and it captures the thought, sets the reminder or answers back without you touching the screen.",
    points: ["Speak instead of typing", "Quick capture on the move", "Replies read aloud"],
    screen: "voice",
  },
  {
    id: "insights",
    title: "Insights about your week",
    question: "How is my life actually going?",
    body: "PhoneX quietly notices patterns in your days — energy, focus, routines — and shows them back in a way that is easy to read and act on.",
    points: ["Weekly rhythm at a glance", "Patterns, not raw numbers", "Suggestions you can ignore"],
    screen: "insights",
  },
  {
    id: "personal",
    title: "An AI shaped around you",
    question: "Why does it feel personal?",
    body: "Tone, routines, priorities: PhoneX adapts to how you work rather than asking you to adapt to it. You stay in control of what it knows.",
    points: ["Learns your preferences", "Adjustable personality", "You decide what it keeps"],
    screen: "clone",
  },
];

function FeaturesPage() {
  return (
    <>
      <Section size="hero">
        <Container width="wide">
          <SectionHeading
            eyebrow="Features"
            title="Everything PhoneX does for you."
            description="A closer look at how PhoneX listens, remembers and helps — built around the way you already live."
          />
        </Container>
      </Section>

      <Section id="how-it-works" size="compact" className="pt-0">
        <Container width="wide">
          <div className="mx-auto max-w-[1000px] space-y-20 md:space-y-24">
            {FEATURES.map((feature, i) => (
              <FeatureRow key={feature.id} feature={feature} flip={i % 2 === 1} />
            ))}
          </div>
        </Container>
      </Section>

      <Section size="compact" tone="tint">
        <Container width="wide">
          <div className="mx-auto max-w-[620px] text-center">
            <h2 className="mkt-h2 text-balance">Ready to try PhoneX?</h2>
            <p className="mkt-lead mx-auto mt-4 max-w-[480px]">
              See how it fits into a normal day, then start with your own companion.
            </p>
            <div className="mt-8 flex justify-center">
              <CTALink to="/get-started" size="lg">
                Get PhoneX
              </CTALink>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

function FeatureRow({ feature, flip }: { feature: Feature; flip: boolean }) {
  const block = useReveal<HTMLDivElement>();

  return (
    <article
      ref={block.ref}
      className={cn(
        "mkt-inview grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_300px] md:gap-14",
        block.shown && "is-in",
      )}
    >
      <div className={cn("min-w-0 max-w-[520px]", flip && "md:order-2 md:justify-self-end")}>
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
          {feature.question}
        </p>
        <h3 className="mkt-h2 mt-3 text-[clamp(1.4rem,1.1rem+1vw,1.9rem)]">{feature.title}</h3>
        <p className="mkt-body mt-4 text-[15px]">{feature.body}</p>
        <ul className="mt-6 space-y-2.5">
          {feature.points.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-foreground/80">
              <span
                aria-hidden="true"
                className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/35"
              />
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className={cn("mx-auto w-full max-w-[260px]", flip && "md:order-1")}>
        <DeviceScreen screen={feature.screen} height={760} glow={false} />
      </div>
    </article>
  );
}
