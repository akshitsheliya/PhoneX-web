import { createFileRoute } from "@tanstack/react-router";
import Features from "@/pages/Features";

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
  component: Features,
});

