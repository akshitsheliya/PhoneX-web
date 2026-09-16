import { useEffect, useRef, useState, type ReactNode } from "react";
import { useNearViewport } from "@/components/marketing/useReveal";
import { cn } from "@/lib/utils";

/**
 * Catalogue of REAL PhoneX app screens that marketing sections can showcase.
 * Each entry points at an existing application route — no fake mockups.
 */
export const APP_SCREENS = {
  home: { path: "/app", label: "Daily home", blurb: "Your life summary, at a glance" },
  chat: { path: "/chat", label: "AI companion", blurb: "Talk it through, any time" },
  voice: { path: "/voice", label: "Voice", blurb: "Hands-free, natural conversation" },
  tasks: { path: "/tasks", label: "Tasks", blurb: "Plans that keep themselves in order" },
  memories: { path: "/memories", label: "Memories", blurb: "Moments PhoneX remembers for you" },
  clone: { path: "/clone", label: "AI Clone", blurb: "An AI that learns how you think" },
  insights: { path: "/insights", label: "Insights", blurb: "Patterns across your week" },
  fitness: { path: "/fitness", label: "Health", blurb: "Movement, sleep and energy" },
  lifeSummary: { path: "/life-summary", label: "Life summary", blurb: "Today, understood" },
} as const;

export type AppScreenKey = keyof typeof APP_SCREENS;

/** The real app shell has 16px of preview-page clearance on every side. */
const APP_FRAME_INSET = 16;
const APP_FRAME_HEIGHT = 840;
const APP_VIEWPORT_HEIGHT = APP_FRAME_HEIGHT + APP_FRAME_INSET * 2;
/** Keep a sliver of the page around the device so its bezel is never edge-clipped. */
const DEVICE_SAFE_AREA = 2;
const DEVICE_VIEW_HEIGHT = APP_FRAME_HEIGHT + DEVICE_SAFE_AREA * 2;
/** The embedded app shell is unusually narrow; widen its presentation without making it taller. */
const DEVICE_WIDTH_FACTOR = 1.08;

/**
 * Renders a real PhoneX app route inside a phone-sized, non-interactive viewport.
 * The route is loaded at 390px logical width and scaled to fit the frame.
 */
export function AppScreen({
  screen,
  className,
  width = 390,
  preview,
}: {
  screen: AppScreenKey;
  className?: string;
  width?: number;
  height?: number;
  preview?: "hero-readable";
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const near = useNearViewport(wrapRef);
  const inset = APP_FRAME_INSET - DEVICE_SAFE_AREA;
  const visibleWidth = width - inset * 2;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / (visibleWidth * DEVICE_WIDTH_FACTOR));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [visibleWidth]);

  return (
    <div
      ref={wrapRef}
      className={cn(
        "relative -ml-[4%] w-[108%] max-w-none overflow-hidden rounded-[3rem]",
        className,
      )}
      style={{
        aspectRatio: `${visibleWidth * DEVICE_WIDTH_FACTOR} / ${DEVICE_VIEW_HEIGHT}`,
      }}
      aria-hidden="true"
    >
      {near ? (
        <iframe
          src={`${APP_SCREENS[screen].path}${preview === "hero-readable" ? "?preview=hero-readable" : ""}`}
          title={APP_SCREENS[screen].label}
          tabIndex={-1}
          loading="lazy"
          className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
          style={
            preview === "hero-readable"
              ? {
                  width,
                  height: APP_VIEWPORT_HEIGHT,
                  left: -inset * scale * DEVICE_WIDTH_FACTOR,
                  top: -inset * scale,
                  zoom: scale,
                  transform: `scaleX(${DEVICE_WIDTH_FACTOR})`,
                }
              : {
                  width,
                  height: APP_VIEWPORT_HEIGHT,
                  transform: `scale(${scale * DEVICE_WIDTH_FACTOR}, ${scale}) translate(${-inset}px, ${-inset}px)`,
                }
          }
        />
      ) : null}
    </div>
  );
}

/**
 * Product-visual wrapper. The PhoneX app already renders its own phone chrome
 * on small viewports, so this only adds the ambient glow and drop shadow.
 */
export function DeviceFrame({
  className,
  glow = true,
  children,
}: {
  className?: string;
  glow?: boolean;
  children: ReactNode;
}) {
  return (
    <div className={cn("relative", className)}>
      {glow ? (
        <div className="mkt-device-glow pointer-events-none absolute -inset-12 -z-10 rounded-[50%] blur-3xl" />
      ) : null}
      <div className="relative drop-shadow-[0_40px_60px_oklch(0.25_0.08_285/0.22)]">{children}</div>
    </div>
  );
}

/** Convenience: framed real app screen. */
export function DeviceScreen({
  screen,
  className,
  glow,
  height,
  preview,
}: {
  screen: AppScreenKey;
  className?: string;
  glow?: boolean;
  height?: number;
  preview?: "hero-readable";
}) {
  return (
    <DeviceFrame className={className} glow={glow}>
      <AppScreen screen={screen} height={height} preview={preview} />
    </DeviceFrame>
  );
}

/**
 * A cropped window onto a real PhoneX screen — used when a full device mockup
 * would be too heavy for the composition.
 *
 * `logicalWidth` is the app viewport width, `cropTop` / `cropHeight` are in that
 * same logical space. This is intentionally a content crop, never a device crop.
 */
export function AppScreenCrop({
  screen,
  className,
  logicalWidth = 390,
  cropTop = 120,
  cropHeight = 300,
  cropSide = 26,
}: {
  screen: AppScreenKey;
  className?: string;
  logicalWidth?: number;
  cropTop?: number;
  cropHeight?: number;
  cropSide?: number;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const near = useNearViewport(wrapRef);
  const visibleWidth = logicalWidth - cropSide * 2;

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setScale(el.clientWidth / visibleWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [visibleWidth]);

  return (
    <div
      ref={wrapRef}
      className={cn("relative w-full overflow-hidden", className)}
      style={{ height: scale ? cropHeight * scale : undefined }}
      aria-hidden="true"
    >
      {near && scale ? (
        <iframe
          src={APP_SCREENS[screen].path}
          title={APP_SCREENS[screen].label}
          tabIndex={-1}
          loading="lazy"
          scrolling="no"
          className="pointer-events-none absolute left-0 top-0 origin-top-left border-0"
          style={{
            width: logicalWidth,
            height: APP_VIEWPORT_HEIGHT,
            transform: `scale(${scale}) translate(${-cropSide}px, ${-cropTop}px)`,
          }}
        />

      ) : null}
    </div>
  );
}

