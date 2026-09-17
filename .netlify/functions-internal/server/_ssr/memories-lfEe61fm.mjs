import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as Search, Ct as Ellipsis, I as Plus, Vt as Camera, _ as Target, mt as Gift, q as MessageCircle, ut as Heart } from "../_libs/lucide-react.mjs";
import { s as useT } from "./router-g_PHrWan.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/memories-lfEe61fm.js
var import_jsx_runtime = require_jsx_runtime();
var memories = [
	{
		tone: "lavender",
		Icon: Gift,
		title: "Mom's birthday",
		date: "March 12",
		tag: "Important",
		note: "Don't forget to call her — she loves voice messages."
	},
	{
		tone: "rose",
		Icon: Target,
		title: "Fitness goal",
		date: "Ongoing",
		tag: "Health",
		note: "Run 5km three times a week. You're on a 12-day streak."
	},
	{
		tone: "sky",
		Icon: MessageCircle,
		title: "Conversation with Dad",
		date: "Last Sunday",
		tag: "Family",
		note: "He talked about the trip to Kyoto in spring."
	},
	{
		tone: "peach",
		Icon: Heart,
		title: "Things you love",
		date: "Auto",
		tag: "Personal",
		note: "Espresso at 7am, slow mornings, jazz at night."
	},
	{
		tone: "mint",
		Icon: Camera,
		title: "Weekend in Lisbon",
		date: "Jan 8",
		tag: "Travel",
		note: "Saved 24 photos and 3 voice notes from this trip."
	}
];
var stats = [
	{
		label: "Total memories",
		value: "128"
	},
	{
		label: "This week",
		value: "3"
	},
	{
		label: "Auto-captured",
		value: "41"
	}
];
function Memories() {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 pb-40 animate-fade-up lg:px-0 lg:pb-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-end gap-2 lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "w-10 h-10 rounded-full glass shadow-soft grid place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "w-[18px] h-[18px] text-foreground/70" })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7 lg:mt-0 lg:flex lg:items-end lg:justify-between lg:gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-[28px] font-bold tracking-tight",
					children: t("Memory timeline")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: t("Moments PhoneX is keeping for you")
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-ai px-4 py-2.5 text-[13px] font-semibold text-white shadow-soft transition-transform hover:scale-[1.02]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" }),
						" ",
						t("New memory")
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 lg:mt-6 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 rounded-full border border-border/60 bg-card px-4 py-2.5 shadow-soft",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "h-4 w-4 shrink-0 text-foreground/40" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						placeholder: t("Search memories"),
						className: "w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 hidden lg:mt-0 lg:flex lg:items-center lg:gap-4",
					children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border/60 bg-card px-4 py-2 text-right shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] uppercase tracking-wider text-muted-foreground",
							children: t(s.label)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-bold tracking-tight",
							children: s.value
						})]
					}, s.label))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex gap-2 overflow-x-auto scrollbar-none -mx-6 px-6 lg:mx-0 lg:flex-wrap lg:px-0",
				children: [
					"All",
					"Personal",
					"Family",
					"Health",
					"Travel",
					"Ideas"
				].map((tab, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: `whitespace-nowrap text-xs px-3.5 py-2 rounded-full border ${i === 0 ? "bg-foreground text-background border-foreground" : "bg-card border-border text-foreground/70"}`,
					children: t(tab)
				}, tab))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3 lg:gap-4 xl:grid-cols-4",
				children: memories.map((m, i) => {
					const toneBg = {
						lavender: "bg-lavender-soft",
						rose: "bg-rose-soft",
						sky: "bg-sky-soft",
						peach: "bg-peach-soft",
						mint: "bg-mint-soft"
					};
					const grad = {
						lavender: "bg-gradient-lavender",
						rose: "bg-gradient-rose",
						sky: "bg-gradient-sky",
						peach: "bg-gradient-peach",
						mint: "bg-gradient-sky"
					};
					const Icon = m.Icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "flex h-full flex-col rounded-3xl border border-border/60 bg-card p-4 shadow-soft transition-shadow hover:shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `w-11 h-11 rounded-2xl ${grad[m.tone]} grid place-items-center text-white shadow-soft shrink-0`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-semibold",
										children: m.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: m.date
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 flex-1 text-xs leading-relaxed text-foreground/70",
								children: m.note
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex items-center justify-between border-t border-border/60 pt-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: `inline-block text-[10px] font-medium px-2 py-0.5 rounded-full ${toneBg[m.tone]} text-foreground/70`,
									children: m.tag
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									"aria-label": t("More"),
									className: "grid h-7 w-7 place-items-center rounded-full text-foreground/40 transition-colors hover:bg-secondary hover:text-foreground",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })
								})]
							})
						]
					}, i);
				})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})] });
}
//#endregion
export { Memories as component };
