import { Link } from "@tanstack/react-router";
import { Container } from "./primitives";

const GROUPS = [
  {
    title: "Product",
    links: [
      { to: "/features", label: "Features" },
      { to: "/get-started", label: "How it works" },
      { to: "/app", label: "Open app" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/privacy", label: "Privacy" },
      { to: "/terms", label: "Terms" },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <Container
        width="wide"
        className="grid gap-10 py-14 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16"
      >
        <div className="max-w-xs">
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-gradient-lavender text-sm font-bold text-white">
              X
            </span>
            <span className="text-[17px] font-bold tracking-tight">PhoneX</span>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Your personal AI companion for everyday life.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
          {GROUPS.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/70">
                {group.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Container>

      <Container width="wide" className="border-t border-border/60 py-6">
        <div className="flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PhoneX. All rights reserved.</p>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link to="/terms" className="hover:text-foreground">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
