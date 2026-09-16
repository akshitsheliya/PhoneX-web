import { createFileRoute, Link } from "@tanstack/react-router";
import { PhoneFrame } from "@/components/PhoneFrame";
import { ChevronLeft, ChevronRight, Lock, Languages, LogOut } from "lucide-react";
import { useT } from "@/lib/i18n";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — PhoneX" },
      { name: "description", content: "Manage your PhoneX preferences." },
    ],
  }),
  component: Settings,
});

function Settings() {
  const t = useT();
  const rows = [
    { to: "/permissions" as const, label: t("Permissions"), sub: t("Access & privacy"), Icon: Lock, grad: "bg-gradient-lavender" },
    { to: "/language" as const, label: t("Language"), sub: t("App & voice language"), Icon: Languages, grad: "bg-gradient-sky" },
  ];
  return (
    <PhoneFrame>
      <div className="px-6 pb-16 animate-fade-up">
        <div className="flex items-center justify-between lg:hidden">
          <Link to="/profile" className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center">
            <ChevronLeft className="w-[18px] h-[18px] text-foreground/70" />
          </Link>
          <p className="text-sm font-semibold">{t("Settings")}</p>
          <span className="w-10 h-10" />
        </div>

        <div className="mt-7">
          <h1 className="text-[26px] font-bold tracking-tight">{t("Settings")}</h1>
          <p className="text-sm text-muted-foreground mt-1">{t("Manage your PhoneX experience")}</p>
        </div>

        <div className="mt-6 space-y-3 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0">
          {rows.map((r) => (
            <Link
              key={r.to}
              to={r.to}
              className="flex items-center gap-3 p-4 rounded-3xl bg-card border border-border/60 shadow-soft"
            >
              <div className={`w-10 h-10 rounded-2xl ${r.grad} grid place-items-center text-white shadow-soft`}>
                <r.Icon className="w-[18px] h-[18px]" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold">{r.label}</p>
                <p className="text-[11px] text-muted-foreground">{r.sub}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-foreground/40" />
            </Link>
          ))}
        </div>

        <button className="mt-6 w-full flex items-center justify-center gap-2 p-4 rounded-3xl bg-rose-soft text-rose-600 font-semibold text-sm shadow-soft">
          <LogOut className="w-4 h-4" />
          {t("Logout")}
        </button>
      </div>
    </PhoneFrame>
  );
}
