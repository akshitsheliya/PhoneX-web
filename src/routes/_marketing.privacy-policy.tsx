import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_marketing/privacy-policy")({
  beforeLoad: () => {
    throw redirect({ to: "/privacy" });
  },
});
