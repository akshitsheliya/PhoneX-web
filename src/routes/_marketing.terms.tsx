import { createFileRoute } from "@tanstack/react-router";
import { Container, Section, SectionHeading } from "@/components/marketing/primitives";

export const Route = createFileRoute("/_marketing/terms")({
  head: () => ({
    meta: [
      { title: "Terms — PhoneX" },
      {
        name: "description",
        content: "The terms that apply to the PhoneX website and early access to the product.",
      },
      { property: "og:title", content: "Terms — PhoneX" },
      {
        property: "og:description",
        content: "Terms for using the PhoneX website and early access.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Section size="hero">
      <Container width="narrow">
        <SectionHeading
          eyebrow="Terms"
          title="Terms of use."
          description="PhoneX is in active development. These terms cover this website and early access to the app."
        />
        <div className="mkt-body mt-10 max-w-[640px] space-y-6 text-[15px]">
          <p>
            This website presents PhoneX and how it is intended to work. Features shown here may
            change as the product develops.
          </p>
          <p>
            Early access is provided as-is, without guarantees of availability, and may be updated
            or paused while PhoneX is being built.
          </p>
          <p>
            The PhoneX name, design, and content on this site belong to PhoneX. Complete terms will
            be published here before general availability.
          </p>
        </div>
      </Container>
    </Section>
  );
}
