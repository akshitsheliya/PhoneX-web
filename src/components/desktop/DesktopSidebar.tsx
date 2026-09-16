import { Link, useLocation } from "@tanstack/react-router";
import { Sparkles, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useT } from "@/lib/i18n";
import { navGroups, bottomNavItems, type NavItem } from "./nav";

export function DesktopSidebar({
  collapsed,
  onToggle,
}: {
  collapsed: boolean;
  onToggle: () => void;
}) {
  const t = useT();
  return (
    <aside
      className={`hidden lg:flex lg:flex-col lg:h-screen lg:sticky lg:top-0 shrink-0 border-r border-border/60 bg-card/70 backdrop-blur-xl transition-[width] duration-200 ${
        collapsed ? "w-[76px]" : "w-[248px]"
      }`}
    >
      {/* Brand */}
      <div className={`flex items-center gap-2.5 h-16 px-4 ${collapsed ? "justify-center" : ""}`}>
        <Link to="/app" className="flex items-center gap-2.5 min-w-0" aria-label="PhoneX home">
          <span className="w-9 h-9 shrink-0 rounded-2xl bg-gradient-ai grid place-items-center shadow-orb">
            <Sparkles className="w-4 h-4 text-white" />
          </span>
          {!collapsed && (
            <span className="min-w-0">
              <span className="block text-sm font-semibold tracking-tight truncate">PhoneX</span>
              <span className="block text-[10px] text-muted-foreground truncate">
                {t("Your AI life companion")}
              </span>
            </span>
          )}
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 pb-4 space-y-5">
        {navGroups.map((group) => (
          <div key={group.label}>
            {!collapsed && (
              <p className="px-3 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/70">
                {t(group.label)}
              </p>
            )}
            <ul className="space-y-0.5">
              {group.items.map((item) => (
                <li key={item.to}>
                  <SidebarLink item={item} collapsed={collapsed} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="px-3 pb-3 pt-2 border-t border-border/60 space-y-0.5">
        {bottomNavItems.map((item) => (
          <SidebarLink key={item.to} item={item} collapsed={collapsed} />
        ))}
        <button
          type="button"
          onClick={onToggle}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={`mt-1 w-full flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
            collapsed ? "justify-center" : ""
          }`}
        >
          {collapsed ? (
            <PanelLeftOpen className="w-[18px] h-[18px] shrink-0" />
          ) : (
            <>
              <PanelLeftClose className="w-[18px] h-[18px] shrink-0" />
              <span className="truncate">Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}

function SidebarLink({ item, collapsed }: { item: NavItem; collapsed: boolean }) {
  const { pathname } = useLocation();
  const t = useT();
  const Icon = item.icon;
  const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
  return (
    <Link
      to={item.to}
      title={collapsed ? t(item.label) : undefined}
      aria-label={t(item.label)}
      className={`group relative flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
        collapsed ? "justify-center" : ""
      } ${
        active
          ? "bg-accent text-accent-foreground"
          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
      }`}
    >
      <Icon className="w-[18px] h-[18px] shrink-0" strokeWidth={2.1} />
      {!collapsed && <span className="truncate">{t(item.label)}</span>}
      {collapsed && (
        <span className="pointer-events-none absolute left-full ml-2 z-50 whitespace-nowrap rounded-xl bg-nav px-2.5 py-1.5 text-xs font-medium text-nav-foreground opacity-0 shadow-nav transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          {t(item.label)}
        </span>
      )}
    </Link>
  );
}
