import { Link } from "@tanstack/react-router";
import { X, Info, Sparkles, CreditCard, Heart } from "lucide-react";
import { useT } from "@/lib/i18n";

export function SideMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const t = useT();
  if (!open) return null;
  return (
    <div className="absolute inset-0 z-50">
      <button
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-foreground/30 backdrop-blur-[2px] animate-fade-up"
      />
      <aside
        className="absolute top-0 bottom-0 left-0 w-[78%] glass border-r border-border/40 shadow-card p-5 pt-14 flex flex-col"
        style={{ animation: "fade-up 0.35s ease-out both" }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl bg-gradient-ai grid place-items-center shadow-orb">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold">Akshit</p>
              <p className="text-[10px] text-muted-foreground">{t("Your AI life companion")}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-card border border-border/60 grid place-items-center"
          >
            <X className="w-[16px] h-[16px] text-foreground/70" />
          </button>
        </div>

        <div className="mt-6 space-y-2">
          <Link
            to="/about"
            onClick={onClose}
            className="w-full flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/60 shadow-soft"
          >
            <span className="w-9 h-9 rounded-xl bg-gradient-lavender grid place-items-center text-white">
              <Info className="w-4 h-4" />
            </span>
            <span className="text-sm font-semibold">{t("About PhoneX")}</span>
          </Link>
          <Link
            to="/subscription"
            onClick={onClose}
            className="w-full flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/60 shadow-soft"
          >
            <span className="w-9 h-9 rounded-xl bg-gradient-peach grid place-items-center text-white">
              <CreditCard className="w-4 h-4" />
            </span>
            <span className="text-sm font-semibold">{t("Subscription Details")}</span>
          </Link>
          <Link
            to="/personality"
            onClick={onClose}
            className="w-full flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/60 shadow-soft"
          >
            <span className="w-9 h-9 rounded-xl bg-gradient-rose grid place-items-center text-white">
              <Heart className="w-4 h-4" />
            </span>
            <span className="text-sm font-semibold">{t("PhoneX Personality")}</span>
          </Link>
        </div>

        <div className="mt-auto pt-4">
          <div className="rounded-2xl p-4 bg-gradient-ai text-white text-[11px] leading-relaxed">
            {t("PhoneX learns from you privately. Conversations stay encrypted on-device.")}
          </div>
        </div>
      </aside>
    </div>
  );
}
