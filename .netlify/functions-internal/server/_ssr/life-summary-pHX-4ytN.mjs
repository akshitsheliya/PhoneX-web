import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Smile, It as ChevronLeft, Jt as Briefcase, Pt as CircleCheck, Rt as ChartLine, S as Sparkles, Zt as Bookmark, jt as Coffee, pt as GraduationCap, rn as ArrowUpRight, ut as Heart, wt as Dumbbell } from "../_libs/lucide-react.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/life-summary-pHX-4ytN.js
var import_jsx_runtime = require_jsx_runtime();
var cards = [
	{
		to: "/tasks",
		Icon: CircleCheck,
		label: "Tasks",
		value: "8/10",
		sub: "completed",
		tone: "bg-lavender-soft",
		grad: "bg-gradient-lavender"
	},
	{
		to: "/fitness",
		Icon: Heart,
		label: "Fitness",
		value: "6.4 km",
		sub: "walked today",
		tone: "bg-rose-soft",
		grad: "bg-gradient-rose"
	},
	{
		to: "/mood",
		Icon: Smile,
		label: "Mood",
		value: "Calm",
		sub: "balanced",
		tone: "bg-peach-soft",
		grad: "bg-gradient-peach"
	},
	{
		to: "/memories",
		Icon: Bookmark,
		label: "Memories",
		value: "3 saved",
		sub: "this week",
		tone: "bg-sky-soft",
		grad: "bg-gradient-sky"
	}
];
var domains = [
	{
		Icon: Dumbbell,
		label: "Fitness",
		value: "78%",
		note: "Run 5km · 3× / week",
		progress: 78,
		accent: "bg-gradient-rose"
	},
	{
		Icon: Briefcase,
		label: "Career",
		value: "Q1",
		note: "Lead 2 product launches",
		progress: 55,
		accent: "bg-gradient-lavender"
	},
	{
		Icon: GraduationCap,
		label: "Learning",
		value: "12h",
		note: "This month · +2h",
		progress: 64,
		accent: "bg-gradient-sky"
	},
	{
		Icon: Coffee,
		label: "Personal",
		value: "Daily",
		note: "Slow mornings, jazz at night",
		progress: 90,
		accent: "bg-gradient-peach"
	}
];
var analytics = [
	{
		label: "Productive hours",
		value: "6h 20m",
		sub: "+18% vs last week"
	},
	{
		label: "Focus sessions",
		value: "4",
		sub: "avg 45 min"
	},
	{
		label: "Sleep quality",
		value: "82%",
		sub: "consistent"
	},
	{
		label: "Social time",
		value: "2h 10m",
		sub: "with family"
	}
];
var suggestions = [
	{
		label: "Finish your evening walk",
		sub: "1.6 km to your goal",
		to: "/fitness"
	},
	{
		label: "Review weekly goals",
		sub: "2 goals off-track",
		to: "/tasks"
	},
	{
		label: "Save a memory from today",
		sub: "Nothing saved yet",
		to: "/memories"
	}
];
function LifeSummary() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 pb-40 animate-fade-up lg:px-0 lg:pb-8",
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
						children: "Life Summary"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 lg:mt-0 lg:flex lg:items-end lg:justify-between lg:gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-[26px] font-bold tracking-tight lg:text-[28px]",
					children: "Your Life, Today"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: "80% productive · balanced day"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:flex lg:items-center lg:gap-2",
					children: [
						"Today",
						"Week",
						"Month"
					].map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: `rounded-full px-3.5 py-1.5 text-[12px] font-medium ${i === 0 ? "bg-gradient-ai text-white shadow-soft" : "border border-border/60 bg-card text-foreground/70"}`,
						children: f
					}, f))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-2 gap-3 lg:mt-6 lg:grid-cols-4 lg:gap-4",
				children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: c.to,
					className: `rounded-3xl p-4 ${c.tone} transition-transform hover:scale-[1.01]`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `w-9 h-9 rounded-2xl ${c.grad} grid place-items-center text-white shadow-soft`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.Icon, { className: "w-[18px] h-[18px]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-foreground/60",
							children: c.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-bold tracking-tight",
							children: c.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-foreground/50",
							children: c.sub
						})
					]
				}, c.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:mt-8 lg:grid lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] lg:gap-6 lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 lg:mt-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[12px] uppercase tracking-wider text-muted-foreground font-semibold",
						children: "Life areas"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-4 lg:gap-4",
						children: domains.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-3xl border border-border/60 bg-card p-4 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex min-w-0 items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${d.accent} text-white shadow-soft`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d.Icon, { className: "h-[18px] w-[18px]" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-sm font-semibold",
											children: d.label
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "truncate text-[11px] text-muted-foreground",
											children: d.note
										})]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "shrink-0 text-base font-bold tracking-tight",
									children: d.value
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 h-1.5 overflow-hidden rounded-full bg-secondary",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full rounded-full bg-gradient-ai",
									style: { width: `${d.progress}%` }
								})
							})]
						}, d.label))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 lg:mt-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12px] uppercase tracking-wider text-muted-foreground font-semibold",
							children: "Analytics"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 grid grid-cols-2 gap-3 lg:mt-4 lg:gap-4",
							children: analytics.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl bg-card border border-border/60 shadow-soft p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: a.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-lg font-bold tracking-tight mt-1",
										children: a.value
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-foreground/50",
										children: a.sub
									})
								]
							}, a.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 rounded-[24px] p-4 bg-gradient-ai text-white shadow-card relative overflow-hidden lg:mt-4 lg:p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-start gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-white/20 backdrop-blur-md",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, { className: "h-5 w-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "inline-flex items-center gap-1.5 text-[10px] bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3" }), " AI overview"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-sm font-semibold",
											children: "You're 12% ahead of your weekly rhythm"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-white/80",
											children: "Keep evenings light — mornings are your peak."
										})
									]
								})]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 lg:mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] uppercase tracking-wider text-muted-foreground font-semibold",
					children: "✨ Smart suggestions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-4 lg:grid-cols-3 lg:gap-4",
					children: suggestions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: s.to,
						className: "group flex items-center gap-3 rounded-3xl border border-border/60 bg-card p-4 shadow-soft transition-shadow hover:shadow-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-sm font-semibold",
								children: s.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "truncate text-[11px] text-muted-foreground",
								children: s.sub
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 shrink-0 text-foreground/30 transition-colors group-hover:text-primary" })]
					}, s.label))
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})] });
}
//#endregion
export { LifeSummary as component };
