import { MessageCircle, ListChecks, Bookmark, Mic, LineChart, Fingerprint } from "lucide-react";
import { Container, Section, Eyebrow } from "@/components/marketing/primitives";
import { AppScreen, DeviceFrame, type AppScreenKey } from "@/components/marketing/DeviceFrame";
import { useReveal } from "@/components/marketing/useReveal";
import { cn } from "@/lib/utils";

type Story = {
  id: string;
  index: string;
  eyebrow: string;
  icon: typeof MessageCircle;
  title: string;
  copy: string;
  screen: AppScreenKey;
  moment: { from: string; line: string };
  tone: string;
  tint?: string;
  side: "left" | "right"; // side the device sits on (desktop)
  kicker?: string;
};

const STORIES: Story[] = [
  {
    id: "companion",
    index: "01",
    eyebrow: "AI Companion",
    icon: MessageCircle,
    title: "An AI that feels personal.",
    copy: "Talk naturally, ask questions, share thoughts, or get help with everyday decisions — without complicated commands.",
    screen: "chat",
    moment: { from: "You", line: "Help me plan tomorrow." },
    tone: "mkt-story-lavender",
    side: "right",
  },
  {
    id: "tasks",
    index: "02",
    eyebrow: "Smart Tasks",
    icon: ListChecks,
    title: "Turn thoughts into action.",
    copy: "Capture what needs to be done, keep priorities visible, and stay on top of the things that matter.",
    screen: "tasks",
    moment: { from: "You", line: "Remind me to call Mom tomorrow." },
    tone: "mkt-story-blue",
    tint: "mkt-story-tint-lavender",
    side: "left",
    kicker: "Thought → Task → Action",
  },
  {
    id: "memories",
    index: "03",
    eyebrow: "Personal Memories",
    icon: Bookmark,
    title: "Remember what matters.",
    copy: "Keep useful thoughts, ideas, moments, and information close so you can come back to them when you need them.",
    screen: "memories",
    moment: { from: "You", line: "Save this idea for later." },
    tone: "mkt-story-peach",
    side: "right",
    kicker: "Capture → Remember → Revisit",
  },
  {
    id: "voice",
    index: "04",
    eyebrow: "Voice Interaction",
    icon: Mic,
    title: "Sometimes, talking is easier.",
    copy: "Interact with PhoneX naturally using your voice when typing isn't the easiest way to communicate.",
    screen: "voice",
    moment: { from: "You", line: "What's next on my day?" },
    tone: "mkt-story-blue",
    tint: "mkt-story-tint-blue",
    side: "left",
    kicker: "Just talk.",
  },
  {
    id: "insights",
    index: "05",
    eyebrow: "Life Insights",
    icon: LineChart,
    title: "Understand your patterns.",
    copy: "See useful patterns across your routines, productivity, goals, and everyday activities.",
    screen: "insights",
    moment: { from: "You", line: "How productive was my week?" },
    tone: "mkt-story-mint",
    side: "left",
    kicker: "Manage your day. Then understand it.",
  },
  {
    id: "clone",
    index: "06",
    eyebrow: "Personalized AI",
    icon: Fingerprint,
    title: "AI that becomes more personal over time.",
    copy: "PhoneX is designed to adapt around your preferences, context, and the way you interact with it.",
    screen: "clone",
    moment: { from: "PhoneX", line: "Personalized around you." },
    tone: "mkt-story-purple",
    tint: "mkt-story-tint-purple",
    side: "right",
    kicker: "Meet your AI Clone.",
  },
];

function StoryBlock({ story, first }: { story: Story; first: boolean }) {
  const { ref, shown } = useReveal<HTMLDivElement>(0.14);
  const Icon = story.icon;
  const deviceLeft = story.side === "left";

  return (
    <div
      ref={ref}
      className={cn(
        "mkt-story mkt-inview relative py-14 md:py-16 lg:py-18",
        shown && "is-in",
        story.tone,
        story.tint,
      )}
    >
      <Container width="wide">
        <div
          className={cn(
            "mx-auto grid max-w-[960px] items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14",
          )}
        >
          {/* Copy */}
          <div className={cn("max-w-[520px]", deviceLeft && "lg:order-2 lg:justify-self-end")}>
            <div className="flex items-center gap-3">
              <span className="mkt-story-index text-[13px] font-medium tabular-nums tracking-[0.16em]">
                {story.index}
              </span>
              <Eyebrow>
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                <span className="text-[11px] uppercase tracking-[0.14em]">{story.eyebrow}</span>
              </Eyebrow>
            </div>

            <h3 className={cn("mkt-h2 mt-5 text-[clamp(1.5rem,1.1rem+1.1vw,2.05rem)] text-balance", first && "lg:text-balance")}>
              {story.title}
            </h3>
            <p className="mkt-lead mt-4 max-w-[460px]">{story.copy}</p>

            {story.kicker ? (
              <p className="mkt-story-kicker mt-5 text-[13px] font-medium tracking-[0.02em]">
                {story.kicker}
              </p>
            ) : null}

            <div className="mkt-story-moment mt-7 inline-flex max-w-full items-start gap-3 rounded-2xl border px-4 py-3">
              <span className="mkt-story-from shrink-0 text-[11px] font-medium uppercase tracking-[0.12em]">
                {story.moment.from}
              </span>
              <span className="min-w-0 text-[14px] text-foreground/80">“{story.moment.line}”</span>
            </div>
          </div>

          {/* Device */}
          <div
            className={cn(
              "flex justify-center",
              deviceLeft ? "lg:order-1" : "",
            )}
          >
            <DeviceFrame className="w-full max-w-[240px] sm:max-w-[252px]" glow={false}>
              <div className="mkt-story-glow pointer-events-none absolute inset-[-24%] -z-10 rounded-full blur-3xl" />
              <AppScreen screen={story.screen} height={844} />
            </DeviceFrame>
          </div>
        </div>
      </Container>
    </div>
  );
}

/** Step 6 — detailed feature storytelling built around real PhoneX screens. */
export function FeatureStories() {
  const intro = useReveal<HTMLDivElement>();

  return (
    <Section id="capabilities" size="compact" className="relative overflow-hidden">
      <Container width="wide">
        <div
          ref={intro.ref}
          className={cn("mkt-inview mx-auto max-w-[660px] text-center", intro.shown && "is-in")}
        >
          <Eyebrow>
            <span className="text-[11px] uppercase tracking-[0.14em]">Built around you</span>
          </Eyebrow>
          <h2 className="mkt-h2 mt-6 text-balance">
            Designed to be useful, not just impressive.
          </h2>
          <p className="mkt-lead mx-auto mt-5 max-w-[540px]">
            PhoneX brings practical AI into the moments where it can actually make your day easier.
          </p>
        </div>
      </Container>

      <div className="mt-6">
        {STORIES.map((s, i) => (
          <StoryBlock key={s.id} story={s} first={i === 0} />
        ))}
      </div>
    </Section>
  );
}
