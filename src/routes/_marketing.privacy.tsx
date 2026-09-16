import { createFileRoute } from "@tanstack/react-router";
import { Container, Section, SectionHeading } from "@/components/marketing/primitives";

export const Route = createFileRoute("/_marketing/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy — PhoneX" },
      {
        name: "description",
        content:
          "How PhoneX approaches privacy, transparency, and user control while the product is being built.",
      },
      { property: "og:title", content: "Privacy — PhoneX" },
      {
        property: "og:description",
        content: "PhoneX privacy principles: user control, transparency, and clear choices.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Section size="hero">
      <Container width="narrow">
        <SectionHeading
          eyebrow="Privacy"
          title="Our approach to your privacy."
          description="PhoneX is still being built. This page describes the principles guiding the product today."
        />
        <div className="mkt-body mt-10 max-w-[640px] space-y-6 text-[15px]">
          <p>
            <strong className="text-foreground">You stay in control.</strong> PhoneX is designed so
            that the information you share, and how it is used inside the app, remains your choice.
          </p>
          <p>
            <strong className="text-foreground">Privacy is part of the product.</strong> Privacy
            considerations are part of how features are designed, not something added at the end.
          </p>
          <p>
            <strong className="text-foreground">Clear about what matters.</strong> Important
            controls and choices should be understandable, not buried in complicated settings.
          </p>
          <p>
            A full, detailed privacy policy will be published here before PhoneX becomes generally
            available.
          </p>
        </div>
      </Container>
    </Section>
  );
}
