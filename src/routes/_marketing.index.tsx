import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { ExploreLineup } from "@/components/ExploreLineup";
import { GetToKnow } from "@/components/GetToKnow";
import { WhyPhoneX } from "@/components/WhyPhoneX";
import { DayWithPhoneX } from "@/components/DayWithPhoneX";
import { Essentials } from "@/components/Essentials";
import { Privacy } from "@/components/Privacy";
import { FinalCTA } from "@/components/FinalCTA";

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
    <div className="bg-white text-apple-text">
      {/* Apple-Style Hero */}
      <Hero />

      {/* Explore the Line-up Cards */}
      <ExploreLineup />

      {/* Get to Know PhoneX Dark Feature Cards */}
      <GetToKnow />

      {/* Why PhoneX Reasons Cards */}
      <WhyPhoneX />

      {/* A Day with PhoneX Accordion */}
      <DayWithPhoneX />

      {/* PhoneX Essentials Two Large Cards */}
      <Essentials />

      {/* Apple-Style Privacy Section */}
      <Privacy />

      {/* Apple-Style Final CTA */}
      <FinalCTA />
    </div>
  );
}

export default MarketingHome;
