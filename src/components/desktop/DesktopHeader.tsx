import { Link, useLocation } from "@tanstack/react-router";
import { Bell, Languages, Mic, Settings } from "lucide-react";
import { useState } from "react";
import { useT } from "@/lib/i18n";
import { PhonexAIOverlay } from "@/components/PhonexAIOverlay";
import { pageMeta } from "./nav";

export function DesktopHeader() {
  const { pathname } = useLocation();
  const t = useT();
  const [overlay, setOverlay] = useState(false);

  const meta = pageMeta[pathname];
  const title = meta?.title ?? "PhoneX";

  return (
    <>
      <header className="hidden lg:flex sticky top-0 z-40 h-16 shrink-0 items-center gap-4 border-b border-border/60 bg-background/80 px-6 backdrop-blur-xl">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] text-muted-foreground">PhoneX</p>
          <h1 className="truncate text-base font-semibold tracking-tight">{t(title)}</h1>
        </div>

        <button
          type="button"
          onClick={() => setOverlay(true)}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-ai px-4 py-2 text-xs font-semibold text-white shadow-soft transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Mic className="h-4 w-4" />
          {t("Talk to PhoneX")}
        </button>

        <div className="flex items-center gap-1">
          <HeaderIcon to="/notifications" label={t("Notifications")} icon={Bell} />
          <HeaderIcon to="/language" label={t("Language")} icon={Languages} />
          <HeaderIcon to="/settings" label={t("Settings")} icon={Settings} />
        </div>

        <Link
          to="/profile"
          className="flex items-center gap-2.5 rounded-full border border-border/60 bg-card py-1 pl-1 pr-3 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-lavender text-sm font-semibold text-white">
            A
          </span>
          <span className="min-w-0 text-left">
            <span className="block truncate text-xs font-semibold leading-tight">Akshit</span>
            <span className="block truncate text-[10px] leading-tight text-muted-foreground">
              {t("PhoneX Premium")}
            </span>
          </span>
        </Link>
      </header>

      {overlay && (
        <div className="fixed inset-0 z-[70]">
          <PhonexAIOverlay open onClose={() => setOverlay(false)} />
        </div>
      )}
    </>
  );
}

function HeaderIcon({
  to,
  label,
  icon: Icon,
}: {
  to: string;
  label: string;
  icon: typeof Bell;
}) {
  return (
    <Link
      to={to}
      aria-label={label}
      title={label}
      className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Icon className="h-[18px] w-[18px]" />
    </Link>
  );
}
