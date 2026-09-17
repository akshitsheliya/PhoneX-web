import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ct as Ellipsis, G as Mic, It as ChevronLeft, q as MessageCircle, x as Square } from "../_libs/lucide-react.mjs";
import { s as useT } from "./router-g_PHrWan.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/voice-BGvljXIX.js
var import_jsx_runtime = require_jsx_runtime();
function Voice() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full flex flex-col px-6 pb-10 animate-fade-up",
		style: { background: "radial-gradient(circle at 50% 35%, oklch(0.96 0.04 295) 0%, oklch(0.99 0.005 280) 70%)" },
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between lg:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app",
						className: "w-10 h-10 rounded-full glass shadow-soft grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-[18px] h-[18px]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "PhoneX"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "w-10 h-10 rounded-full glass shadow-soft grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "w-[18px] h-[18px]" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 grid place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative w-[280px] h-[280px] grid place-items-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-gradient-ai opacity-30 blur-3xl animate-breathe" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-6 rounded-full border border-primary/20 animate-shimmer-wave" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute inset-12 rounded-full border border-primary/15 animate-shimmer-wave",
							style: {
								animationDirection: "reverse",
								animationDuration: "22s"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-gradient-ai opacity-20 animate-pulse-ring" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-40 h-40 rounded-full bg-gradient-orb shadow-orb grid place-items-center animate-breathe",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-3 rounded-full bg-white/30 backdrop-blur-md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {
								className: "relative w-9 h-9 text-white",
								strokeWidth: 2.2
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center -mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xl font-semibold tracking-tight",
					children: t("Listening…")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: t("Hi Akshit, I'm here.")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex items-end justify-center gap-1 h-10",
				children: Array.from({ length: 32 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-[3px] rounded-full bg-gradient-ai animate-breathe",
					style: {
						height: `${20 + Math.sin(i * .6) * 18 + i % 5 * 4}%`,
						animationDelay: `${i * 60}ms`,
						animationDuration: `${1.4 + i % 4 * .2}s`
					}
				}, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex items-center justify-center gap-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex flex-col items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-14 h-14 rounded-full bg-white shadow-card grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "w-5 h-5 text-foreground/80" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground",
							children: t("Microphone")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/chat",
						className: "flex flex-col items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-16 h-16 rounded-full bg-gradient-ai shadow-orb grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-6 h-6 text-white" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground",
							children: t("Chat")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/app",
						className: "flex flex-col items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-14 h-14 rounded-full bg-white shadow-card grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Square, {
								className: "w-5 h-5 text-foreground/80",
								fill: "currentColor"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[10px] text-muted-foreground",
							children: t("Stop")
						})]
					})
				]
			})
		]
	}) });
}
//#endregion
export { Voice as component };
