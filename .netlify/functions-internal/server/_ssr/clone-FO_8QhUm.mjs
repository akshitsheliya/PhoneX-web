import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $t as BookHeart, At as Compass, It as ChevronLeft, Yt as Brain, b as Star, nn as AudioLines } from "../_libs/lucide-react.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/clone-FO_8QhUm.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		label: "Personality learning",
		value: "72%",
		Icon: Brain,
		grad: "bg-gradient-lavender"
	},
	{
		label: "Voice clone",
		value: "Ready",
		Icon: AudioLines,
		grad: "bg-gradient-rose"
	},
	{
		label: "Decision style",
		value: "Analyzed",
		Icon: Compass,
		grad: "bg-gradient-sky"
	},
	{
		label: "Life experiences",
		value: "318",
		Icon: BookHeart,
		grad: "bg-gradient-peach"
	},
	{
		label: "Values",
		value: "12 mapped",
		Icon: Star,
		grad: "bg-gradient-lavender"
	}
];
function Clone() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between lg:hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/app",
					className: "w-10 h-10 rounded-full glass shadow-soft grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-[18px] h-[18px]" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "AI Clone"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10" })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "lg:grid lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-6 lg:items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 flex flex-col items-center text-center lg:mt-0 lg:rounded-[28px] lg:border lg:border-border/60 lg:bg-card lg:p-7 lg:shadow-soft",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative w-32 h-32 grid place-items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-gradient-ai opacity-30 blur-2xl animate-breathe" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative w-24 h-24 rounded-full bg-gradient-orb shadow-orb grid place-items-center animate-breathe",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-12 h-12 rounded-full bg-white/40 backdrop-blur-md" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-4 text-[24px] font-bold tracking-tight",
						children: "My AI Clone"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1 max-w-[260px]",
						children: "PhoneX is learning how you think, speak and decide"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 w-full rounded-3xl p-4 bg-card border border-border/60 shadow-soft text-left lg:mt-6 lg:border-0 lg:bg-secondary/50 lg:shadow-none",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: "Learning progress"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-primary font-medium",
									children: "72%"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 h-2 rounded-full bg-secondary overflow-hidden lg:bg-background",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-gradient-ai rounded-full",
									style: { width: "72%" }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[11px] text-muted-foreground",
								children: "Trained on 318 conversations & 1,240 moments"
							})
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 text-sm font-semibold lg:mt-0 lg:text-base",
				children: "What PhoneX has learned"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-3 lg:mt-4 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0",
				children: sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl p-4 bg-card border border-border/60 shadow-soft flex items-center gap-3 transition-shadow hover:shadow-card",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `w-11 h-11 shrink-0 rounded-2xl ${s.grad} grid place-items-center text-white shadow-soft`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.Icon, { className: "w-5 h-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "flex-1 min-w-0 truncate text-sm font-semibold",
							children: s.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs text-foreground/60 font-medium shrink-0",
							children: s.value
						})
					]
				}, s.label))
			})] })]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})] });
}
//#endregion
export { Clone as component };
