import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { It as ChevronLeft, Kt as Cake, Qt as BookOpen, S as Sparkles, Ut as CalendarHeart, Vt as Camera, yt as Film } from "../_libs/lucide-react.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/family-OxR0_S54.js
var import_jsx_runtime = require_jsx_runtime();
var tiles = [
	{
		label: "Timeline",
		sub: "120 moments",
		Icon: CalendarHeart,
		grad: "bg-gradient-lavender"
	},
	{
		label: "Family tree",
		sub: "4 generations",
		Icon: BookOpen,
		grad: "bg-gradient-sky"
	},
	{
		label: "Photos",
		sub: "2,140",
		Icon: Camera,
		grad: "bg-gradient-rose"
	},
	{
		label: "Videos",
		sub: "58",
		Icon: Film,
		grad: "bg-gradient-peach"
	}
];
var dates = [
	{
		label: "Mom's birthday",
		date: "Mar 12"
	},
	{
		label: "Parents' anniversary",
		date: "Jul 04"
	},
	{
		label: "Cousin Mia's birthday",
		date: "Sep 21"
	}
];
var questions = [
	"Who is my grandfather?",
	"Show family history from 90s",
	"When is cousin's birthday?"
];
function Family() {
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
						children: "Family"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-[28px] font-bold tracking-tight",
					children: "Family Memories"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: "Generations, preserved together"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-2 gap-3",
				children: tiles.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl p-4 bg-card border border-border/60 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `w-10 h-10 rounded-2xl ${t.grad} grid place-items-center text-white shadow-soft`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.Icon, { className: "w-[18px] h-[18px]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-semibold",
							children: t.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: t.sub
						})
					]
				}, t.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-7 text-sm font-semibold",
				children: "Important dates"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 rounded-3xl bg-card border border-border/60 shadow-soft divide-y divide-border/60",
				children: dates.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-9 h-9 rounded-xl bg-peach-soft grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cake, { className: "w-4 h-4 text-foreground/70" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "flex-1 text-sm font-medium",
							children: d.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted-foreground",
							children: d.date
						})
					]
				}, d.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-[28px] p-5 bg-gradient-ai text-white shadow-card relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative inline-flex items-center gap-1.5 text-[11px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3" }), " Ask PhoneX"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "relative mt-3 space-y-2",
						children: questions.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-sm bg-white/15 backdrop-blur-sm px-3 py-2.5 rounded-2xl",
							children: [
								"\"",
								q,
								"\""
							]
						}, q))
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})] });
}
//#endregion
export { Family as component };
