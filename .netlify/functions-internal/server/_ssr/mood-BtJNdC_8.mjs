import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Smile, It as ChevronLeft, S as Sparkles } from "../_libs/lucide-react.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mood-BtJNdC_8.js
var import_jsx_runtime = require_jsx_runtime();
var week = [
	{
		d: "Mon",
		m: "Calm",
		tone: "bg-sky-soft"
	},
	{
		d: "Tue",
		m: "Focused",
		tone: "bg-lavender-soft"
	},
	{
		d: "Wed",
		m: "Tired",
		tone: "bg-peach-soft"
	},
	{
		d: "Thu",
		m: "Happy",
		tone: "bg-rose-soft"
	},
	{
		d: "Fri",
		m: "Calm",
		tone: "bg-sky-soft"
	},
	{
		d: "Sat",
		m: "Joyful",
		tone: "bg-mint-soft"
	},
	{
		d: "Sun",
		m: "Calm",
		tone: "bg-sky-soft"
	}
];
var journal = [
	{
		time: "Morning",
		note: "Woke up rested. Coffee, sunlight, a slow start."
	},
	{
		time: "Afternoon",
		note: "Solid deep-work block. Felt in flow around 3pm."
	},
	{
		time: "Evening",
		note: "Relaxed dinner with family. Grateful day."
	}
];
var insights = [
	"Your mood improves on days you walk more than 6km",
	"You feel calmest between 9 and 11 in the morning",
	"Consider a 5-minute breathing session before evening meetings"
];
function Mood() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6",
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
						children: "Mood"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-[28px] p-6 bg-gradient-ai text-white shadow-card relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-16 -right-16 w-52 h-52 rounded-full bg-white/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-16 h-16 rounded-full bg-white/25 backdrop-blur-md grid place-items-center animate-breathe",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Smile, { className: "w-7 h-7" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-white/80",
							children: "Today"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-2xl font-bold tracking-tight",
							children: "Calm"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-white/80",
							children: "Balanced · steady energy"
						})
					] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-3xl p-4 bg-card border border-border/60 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Weekly mood"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-7 gap-2",
					children: week.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-2xl p-2 text-center ${w.tone}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-foreground/60",
							children: w.d
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] font-semibold mt-1",
							children: w.m
						})]
					}, w.d))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-wider text-muted-foreground font-medium",
					children: "Mood journal"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 rounded-3xl bg-card border border-border/60 shadow-soft divide-y divide-border/60",
					children: journal.map((j) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: j.time
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm mt-1",
							children: j.note
						})]
					}, j.time))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-[24px] p-5 bg-gradient-ai text-white shadow-card relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative inline-flex items-center gap-1.5 text-[11px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3" }), " Emotional insights"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "relative mt-3 space-y-2",
						children: insights.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm bg-white/15 backdrop-blur-sm px-3 py-2.5 rounded-2xl",
							children: s
						}, s))
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})] });
}
//#endregion
export { Mood as component };
