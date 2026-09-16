import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container, CTALink } from "./primitives";

const NAV = [
  { to: "/", label: "Home", exact: true },
  { to: "/features", label: "Features", exact: false },
  { to: "/get-started", label: "How it works", exact: false },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border/70 bg-background/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <Container className="relative flex h-[72px] items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-gradient-lavender text-sm font-bold text-white shadow-soft">
            X
          </span>
          <span className="text-[17px] font-bold tracking-tight">PhoneX</span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:font-semibold data-[status=active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>


        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="/app"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Open app
          </Link>
          <CTALink to="/get-started">Get PhoneX</CTALink>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card md:hidden"
        >
          {open ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
        </button>
      </Container>

      {open ? (
        <div className="border-t border-border/70 bg-background/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-xl px-2 py-3 text-[15px] font-medium text-foreground/80 hover:bg-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/app"
              onClick={() => setOpen(false)}
              className="rounded-xl px-2 py-3 text-[15px] font-medium text-foreground/80 hover:bg-secondary"
            >
              Open app
            </Link>
            <CTALink to="/get-started" size="lg" className="mt-2 w-full" onClick={() => setOpen(false)}>
              Get PhoneX
            </CTALink>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
