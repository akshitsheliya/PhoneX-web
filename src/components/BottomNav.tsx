import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { Home, Compass, Mic, Sparkles, User } from "lucide-react";
import { useRef, useState } from "react";
import { useT } from "@/lib/i18n";
import { PhonexAIOverlay } from "./PhonexAIOverlay";

export function BottomNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const t = useT();
  const [overlay, setOverlay] = useState(false);
  const holdTimer = useRef<number | null>(null);
  const heldRef = useRef(false);

  const items = [
    { to: "/", icon: Home, label: t("Home") },
    { to: "/activity", icon: Compass, label: t("Life") },
    { to: "/memories", icon: Sparkles, label: t("Memory") },
    { to: "/profile", icon: User, label: t("Profile") },
  ] as const;

  const startHold = () => {
    heldRef.current = false;
    if (holdTimer.current) window.clearTimeout(holdTimer.current);
    holdTimer.current = window.setTimeout(() => {
      heldRef.current = true;
      setOverlay(true);
    }, 450);
  };
  const endHold = () => {
    if (holdTimer.current) {
      window.clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
    if (!heldRef.current) {
      navigate({ to: "/voice" });
    }
    heldRef.current = false;
  };
  const cancelHold = () => {
    if (holdTimer.current) {
      window.clearTimeout(holdTimer.current);
      holdTimer.current = null;
    }
    heldRef.current = false;
  };

  return (
    <>
      <div className="absolute bottom-5 inset-x-0 z-40 flex justify-center pointer-events-none lg:hidden">
        <div className="pointer-events-auto relative flex items-center gap-1 px-3 py-2.5 rounded-full bg-nav shadow-nav">
          {items.slice(0, 2).map((item) => (
            <NavBtn key={item.to} item={item} active={pathname === item.to} />
          ))}
          {/* Center mic — tap opens /voice, long-press opens AI overlay */}
          <button
            type="button"
            onPointerDown={startHold}
            onPointerUp={endHold}
            onPointerLeave={cancelHold}
            onPointerCancel={cancelHold}
            onContextMenu={(e) => e.preventDefault()}
            className="relative mx-1 -mt-8 grid place-items-center w-16 h-16 rounded-full bg-gradient-ai shadow-orb animate-breathe ring-4 ring-nav select-none touch-none"
            aria-label={t("Talk to PhoneX")}
          >
            <span className="absolute inset-0 rounded-full bg-gradient-ai opacity-50 animate-pulse-ring" />
            <Mic className="w-6 h-6 text-white relative z-10" strokeWidth={2.4} />
          </button>
          {items.slice(2).map((item) => (
            <NavBtn key={item.to} item={item} active={pathname === item.to} />
          ))}
        </div>
      </div>
      <PhonexAIOverlay open={overlay} onClose={() => setOverlay(false)} />
    </>
  );
}

function NavBtn({
  item,
  active,
}: {
  item: { to: string; icon: typeof Home; label: string };
  active: boolean;
}) {
  const Icon = item.icon;
  return (
    <Link
      to={item.to}
      className={`grid place-items-center w-11 h-11 rounded-full transition-all ${
        active
          ? "bg-white/15 text-nav-foreground"
          : "text-nav-foreground/55 hover:text-nav-foreground"
      }`}
      aria-label={item.label}
    >
      <Icon className="w-[18px] h-[18px]" strokeWidth={2.2} />
    </Link>
  );
}
