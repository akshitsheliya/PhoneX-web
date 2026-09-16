import { Container, Section, Eyebrow } from "@/components/marketing/primitives";
import { AppScreen, DeviceFrame } from "@/components/marketing/DeviceFrame";
import { useReveal } from "@/components/marketing/useReveal";
import { cn } from "@/lib/utils";

const PRINCIPLES = [
  {
    index: "01",
    title: "You stay in control.",
    copy: "Your personal experience should remain yours, with clear controls over the information you choose to share and use.",
  },
  {
    index: "02",
    title: "Privacy is part of the product.",
    copy: "Privacy should not feel like an afterthought. It is considered throughout the PhoneX experience.",
  },
  {
    index: "03",
    title: "Clear about what matters.",
    copy: "PhoneX aims to make important choices and controls understandable, instead of hiding them behind complicated settings.",
  },
] as const;

/** Step 8 — Privacy / trust section. Calm, product-connected, no security clichés. */
export function PrivacyTrust() {
  const intro = useReveal<HTMLDivElement>();
  const visual = useReveal<HTMLDivElement>(0.12);
  const list = useReveal<HTMLDivElement>(0.1);

  return (
    <Section id="privacy" className="mkt-trust relative overflow-hidden">
      <Container width="wide">
        <div
          ref={intro.ref}
          className={cn("mkt-inview mx-auto max-w-[660px] text-center", intro.shown && "is-in")}
        >
          <Eyebrow>
            <span className="text-[11px] uppercase tracking-[0.14em]">Built with trust in mind</span>
          </Eyebrow>
          <h2 className="mkt-h2 mt-6 text-balance">
            Your personal AI should respect your privacy.
          </h2>
          <p className="mkt-lead mx-auto mt-5 max-w-[560px]">
            PhoneX is being designed with privacy, transparency, and user control at the center of
            the experience.
          </p>
        </div>

        <div
          ref={visual.ref}
          className={cn("mkt-inview mt-12 lg:mt-14", visual.shown && "is-in")}
        >
          <div className="mx-auto w-full max-w-[246px]">
            <DeviceFrame glow={false}>
              <div className="mkt-trust-glow pointer-events-none absolute inset-[-30%] -z-10 rounded-full blur-3xl" />
              <AppScreen screen="home" height={844} />
            </DeviceFrame>
          </div>
        </div>

        <div
          ref={list.ref}
          className={cn(
            "mkt-inview mx-auto mt-14 grid max-w-[1000px] gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-12",
            list.shown && "is-in",
          )}
        >
          {PRINCIPLES.map((p) => (
            <div key={p.index} className="max-w-[320px]">
              <span className="mkt-trust-index text-[12px] font-semibold tracking-[0.18em]">
                {p.index}
              </span>
              <span className="mkt-trust-rule mt-3 block h-px w-10" aria-hidden="true" />
              <h3 className="mkt-h3 mt-4 text-[19px]">{p.title}</h3>
              <p className="mkt-body mt-2.5 text-[14px]">{p.copy}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
