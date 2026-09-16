import { Link } from "@tanstack/react-router";
import { Container, Section, CTALink } from "@/components/marketing/primitives";
import { AppScreen, DeviceFrame } from "@/components/marketing/DeviceFrame";
import { useReveal } from "@/components/marketing/useReveal";
import { cn } from "@/lib/utils";

/** Step 8 — Final conversion CTA. One dominant action, calm pastel environment. */
export function FinalCTA() {
  const block = useReveal<HTMLDivElement>();

  return (
    <Section id="get-phonex" size="compact" className="mkt-cta relative overflow-hidden">
      <div className="mkt-cta-aura pointer-events-none absolute inset-x-0 top-0 -z-10 h-full" aria-hidden="true" />
      <Container width="wide">
        <div
          ref={block.ref}
          className={cn("mkt-inview mx-auto max-w-[720px] text-center", block.shown && "is-in")}
        >
          <h2 className="mkt-h2 text-balance">Make your everyday life a little easier.</h2>
          <p className="mkt-lead mx-auto mt-5 max-w-[540px]">
            Meet PhoneX — your personal AI companion for the things you think, plan, remember, and
            do every day.
          </p>

          <div className="mt-9 flex flex-col items-center gap-4">
            <CTALink to="/get-started" size="lg" className="w-full sm:w-auto">
              Get PhoneX
            </CTALink>
            <Link
              to="/features"
              className="rounded-md px-1 py-1 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Explore PhoneX
            </Link>
          </div>

          <p className="mkt-body mt-6 text-[13px]">Designed for everyday use.</p>
        </div>

        <div className="mkt-cta-device relative mx-auto mt-12 w-full max-w-[236px]">
          <div className="mkt-cta-glow pointer-events-none absolute inset-[-34%] -z-10 rounded-full blur-3xl" />
          <DeviceFrame glow={false}>
            <AppScreen screen="lifeSummary" height={844} />
          </DeviceFrame>
        </div>
      </Container>
    </Section>
  );
}
