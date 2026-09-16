import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/** Max-width container used by every marketing section. */
export function Container({
  className,
  width = "default",
  children,
}: {
  className?: string;
  width?: "default" | "wide" | "narrow";
  children: ReactNode;
}) {
  const max = {
    narrow: "max-w-[880px]",
    default: "max-w-[1200px]",
    wide: "max-w-[1280px]",
  }[width];
  return <div className={cn("mx-auto w-full px-6 md:px-10", max, className)}>{children}</div>;
}

/** Vertical rhythm wrapper. `tone` paints an optional subtle background. */
export function Section({
  className,
  tone = "plain",
  size = "default",
  id,
  children,
}: {
  className?: string;
  tone?: "plain" | "tint" | "soft";
  size?: "default" | "compact" | "hero";
  id?: string;
  children: ReactNode;
}) {
  const toneClass = {
    plain: "",
    tint: "mkt-tint",
    soft: "mkt-soft",
  }[tone];
  const sizeClass = {
    compact: "py-16 md:py-20",
    default: "py-16 md:py-20 lg:py-24",
    hero: "py-16 md:py-20 lg:py-24",
  }[size];
  return (
    <section id={id} className={cn("relative", toneClass, sizeClass, className)}>
      {children}
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1 text-[12px] font-medium tracking-[0.02em] text-muted-foreground backdrop-blur-sm",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Section heading block: eyebrow + title + short supporting line. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-[640px]",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? <Eyebrow className="mb-5">{eyebrow}</Eyebrow> : null}
      <h2 className="mkt-h2">{title}</h2>
      {description ? <p className="mkt-lead mt-4">{description}</p> : null}
    </div>
  );
}

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: ReactNode;
};

function buttonClass({ variant = "primary", size = "md" }: ButtonProps) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    size === "lg" ? "h-13 px-7 text-[15px]" : "h-11 px-5 text-sm",
    variant === "primary" &&
      "bg-foreground text-background shadow-soft hover:-translate-y-0.5 hover:shadow-card",
    variant === "secondary" &&
      "border border-border bg-card text-foreground hover:border-foreground/25 hover:bg-secondary",
    variant === "ghost" && "text-foreground/70 hover:text-foreground",
  );
}

/** Marketing CTA rendered as a router link. */
export function CTALink({
  to,
  hash,
  onClick,
  ...props
}: ButtonProps & { to: string; hash?: string; onClick?: () => void }) {
  return (
    <Link to={to} hash={hash} onClick={onClick} className={buttonClass(props)}>
      {props.children}
    </Link>
  );
}

/** Marketing CTA rendered as a plain anchor (external / store links). */
export function CTAAnchor({ href, ...props }: ButtonProps & { href: string }) {
  return (
    <a href={href} className={buttonClass(props)}>
      {props.children}
    </a>
  );
}
