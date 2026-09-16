import { useEffect, useState, type ReactNode } from "react";
import { DesktopSidebar } from "./desktop/DesktopSidebar";
import { DesktopHeader } from "./desktop/DesktopHeader";

const STORAGE_KEY = "phonex.sidebar.collapsed";

export function PhoneFrame({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    try {
      setCollapsed(window.localStorage.getItem(STORAGE_KEY) === "1");
    } catch {
      /* ignore */
    }
  }, []);

  const toggle = () =>
    setCollapsed((prev) => {
      const next = !prev;
      try {
        window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
      } catch {
        /* ignore */
      }
      return next;
    });

  return (
    <div className="phonex-shell-bg min-h-screen w-full flex items-center justify-center p-4 md:p-10 lg:items-stretch lg:justify-start lg:p-0">
      <DesktopSidebar collapsed={collapsed} onToggle={toggle} />

      <div className="relative w-full max-w-[400px] lg:flex lg:h-screen lg:min-w-0 lg:max-w-none lg:flex-1 lg:flex-col">
        <DesktopHeader />

        {/* Phone shell — chrome only applies below lg */}
        <div className="relative rounded-[3rem] bg-[oklch(0.12_0.02_280)] p-[10px] shadow-[0_40px_80px_-20px_oklch(0.2_0.06_285/0.4)] lg:min-h-0 lg:flex-1 lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none">
          <div className="relative h-[820px] overflow-hidden rounded-[2.6rem] bg-background lg:h-full lg:rounded-none lg:bg-transparent">
            {/* Status bar (mobile chrome) */}
            <div className="absolute top-0 inset-x-0 z-30 flex items-center justify-between px-8 pt-3 text-xs font-semibold text-foreground lg:hidden">
              <span>9:41</span>
              <span className="flex items-center gap-1 opacity-80">
                <span className="text-[10px]">●●●●</span>
                <span className="text-[10px]">􀙇</span>
              </span>
            </div>
            {/* Dynamic island */}
            <div className="absolute top-2 left-1/2 z-30 h-7 w-28 -translate-x-1/2 rounded-full bg-black lg:hidden" />

            <div className="h-full overflow-y-auto scrollbar-none pt-12 lg:pt-0">
              <div className="desktop-main lg:mx-auto lg:w-full lg:max-w-[1360px] lg:px-4 lg:py-7">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
