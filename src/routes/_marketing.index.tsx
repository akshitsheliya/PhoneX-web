import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { WhatIsPhoneX } from "@/components/marketing/WhatIsPhoneX";
import { ProductShowcase } from "@/components/marketing/ProductShowcase";
import { DayWithPhoneX } from "@/components/marketing/DayWithPhoneX";
import { SeeInAction } from "@/components/marketing/SeeInAction";
import { Comparison } from "@/components/Comparison";
import { Capabilities } from "@/components/Capabilities";
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
    <>
      {/* PROMPT 2: Editorial Asymmetric Hero Section */}
      <Hero />

      {/* PROMPT 3: What is PhoneX */}
      <WhatIsPhoneX />

      {/* PROMPT 4: Interactive Product Showcase */}
      <ProductShowcase />

      {/* PROMPT 5: A Day with PhoneX */}
      <DayWithPhoneX />

      {/* PROMPT 6: See PhoneX in Action */}
      <SeeInAction />

      {/* PROMPT 7: Comparison (Why PhoneX) */}
      <Comparison />

      {/* PROMPT 8: Capabilities (Asymmetric 7-5-5-7 Grid) */}
      <Capabilities />

      {/* PROMPT 9: Privacy & Trust */}
      <Privacy />

      {/* PROMPT 10: Final CTA */}
      <FinalCTA />
    </>
  );
}
