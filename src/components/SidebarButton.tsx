import { Menu } from "lucide-react";

export function SidebarButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Open menu"
      className="w-10 h-10 rounded-full glass shadow-soft grid place-items-center"
    >
      <Menu className="w-[18px] h-[18px] text-foreground/80" strokeWidth={2.2} />
    </button>
  );
}
