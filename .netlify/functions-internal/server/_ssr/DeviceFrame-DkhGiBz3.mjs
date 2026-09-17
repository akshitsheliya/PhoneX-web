import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { o as cn } from "./primitives-DGSZxQ5e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/DeviceFrame-DkhGiBz3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/** Reveals an element once it scrolls into view (calm, one-shot). */
function useReveal(threshold = .2) {
	const ref = (0, import_react.useRef)(null);
	const [shown, setShown] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setShown(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				setShown(true);
				io.disconnect();
			}
		}, {
			threshold,
			rootMargin: "0px 0px -8% 0px"
		});
		io.observe(el);
		return () => io.disconnect();
	}, [threshold]);
	return {
		ref,
		shown
	};
}
/**
* True once the element comes within `margin` of the viewport.
* Used to defer mounting heavy product visuals until they are nearly visible.
*/
function useNearViewport(ref, margin = "600px") {
	const [near, setNear] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		if (typeof IntersectionObserver === "undefined") {
			setNear(true);
			return;
		}
		const io = new IntersectionObserver((entries) => {
			for (const e of entries) if (e.isIntersecting) {
				setNear(true);
				io.disconnect();
			}
		}, { rootMargin: `${margin} 0px ${margin} 0px` });
		io.observe(el);
		return () => io.disconnect();
	}, [ref, margin]);
	return near;
}
/**
* Catalogue of REAL PhoneX app screens that marketing sections can showcase.
* Each entry points at an existing application route — no fake mockups.
*/
var APP_SCREENS = {
	home: {
		path: "/app",
		label: "Daily home",
		blurb: "Your life summary, at a glance"
	},
	chat: {
		path: "/chat",
		label: "AI companion",
		blurb: "Talk it through, any time"
	},
	voice: {
		path: "/voice",
		label: "Voice",
		blurb: "Hands-free, natural conversation"
	},
	tasks: {
		path: "/tasks",
		label: "Tasks",
		blurb: "Plans that keep themselves in order"
	},
	memories: {
		path: "/memories",
		label: "Memories",
		blurb: "Moments PhoneX remembers for you"
	},
	clone: {
		path: "/clone",
		label: "AI Clone",
		blurb: "An AI that learns how you think"
	},
	insights: {
		path: "/insights",
		label: "Insights",
		blurb: "Patterns across your week"
	},
	fitness: {
		path: "/fitness",
		label: "Health",
		blurb: "Movement, sleep and energy"
	},
	lifeSummary: {
		path: "/life-summary",
		label: "Life summary",
		blurb: "Today, understood"
	}
};
var APP_VIEWPORT_HEIGHT = 872;
var DEVICE_VIEW_HEIGHT = 844;
/** The embedded app shell is unusually narrow; widen its presentation without making it taller. */
var DEVICE_WIDTH_FACTOR = 1.08;
/**
* Renders a real PhoneX app route inside a phone-sized, non-interactive viewport.
* The route is loaded at 390px logical width and scaled to fit the frame.
*/
function AppScreen({ screen, className, width = 390, preview }) {
	const wrapRef = (0, import_react.useRef)(null);
	const [scale, setScale] = (0, import_react.useState)(0);
	const near = useNearViewport(wrapRef);
	const visibleWidth = width - 28;
	(0, import_react.useEffect)(() => {
		const el = wrapRef.current;
		if (!el) return;
		const update = () => setScale(el.clientWidth / (visibleWidth * DEVICE_WIDTH_FACTOR));
		update();
		const ro = new ResizeObserver(update);
		ro.observe(el);
		return () => ro.disconnect();
	}, [visibleWidth]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: wrapRef,
		className: cn("relative -ml-[4%] w-[108%] max-w-none overflow-hidden rounded-[3rem]", className),
		style: { aspectRatio: `${visibleWidth * DEVICE_WIDTH_FACTOR} / ${DEVICE_VIEW_HEIGHT}` },
		"aria-hidden": "true",
		children: near ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			src: `${APP_SCREENS[screen].path}${preview === "hero-readable" ? "?preview=hero-readable" : ""}`,
			title: APP_SCREENS[screen].label,
			tabIndex: -1,
			loading: "lazy",
			className: "pointer-events-none absolute left-0 top-0 origin-top-left border-0",
			style: preview === "hero-readable" ? {
				width,
				height: APP_VIEWPORT_HEIGHT,
				left: -14 * scale * DEVICE_WIDTH_FACTOR,
				top: -14 * scale,
				zoom: scale,
				transform: `scaleX(${DEVICE_WIDTH_FACTOR})`
			} : {
				width,
				height: APP_VIEWPORT_HEIGHT,
				transform: `scale(${scale * DEVICE_WIDTH_FACTOR}, ${scale}) translate(-14px, -14px)`
			}
		}) : null
	});
}
/**
* Product-visual wrapper. The PhoneX app already renders its own phone chrome
* on small viewports, so this only adds the ambient glow and drop shadow.
*/
function DeviceFrame({ className, glow = true, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative", className),
		children: [glow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mkt-device-glow pointer-events-none absolute -inset-12 -z-10 rounded-[50%] blur-3xl" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative drop-shadow-[0_40px_60px_oklch(0.25_0.08_285/0.22)]",
			children
		})]
	});
}
/** Convenience: framed real app screen. */
function DeviceScreen({ screen, className, glow, height, preview }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeviceFrame, {
		className,
		glow,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppScreen, {
			screen,
			height,
			preview
		})
	});
}
//#endregion
export { useReveal as i, DeviceFrame as n, DeviceScreen as r, AppScreen as t };
