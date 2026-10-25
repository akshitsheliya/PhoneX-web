import { createFileRoute, Outlet } from "@tanstack/react-router";
import { SiteHeader } from "@/components/marketing/SiteHeader";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/_marketing")({
  component: MarketingLayout,
});

function MarketingLayout() {
  return (
    <div className="min-h-screen bg-bg-primary text-ink-primary font-sans selection:bg-accent selection:text-white">
      <SiteHeader />
      <main className="w-full">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MarketingLayout;
