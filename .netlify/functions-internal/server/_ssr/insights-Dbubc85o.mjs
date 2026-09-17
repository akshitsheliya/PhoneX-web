import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { It as ChevronLeft, Jt as Briefcase, Kt as Cake, N as Repeat, R as Plane, W as Moon, _ as Target, a as Wallet, an as Activity, dt as HeartPulse, m as TrendingUp, p as TriangleAlert, pt as GraduationCap, v as Sun } from "../_libs/lucide-react.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/insights-Dbubc85o.js
var import_jsx_runtime = require_jsx_runtime();
var stats = [
	{
		label: "Productivity",
		value: "84%",
		trend: "+6%",
		Icon: Activity,
		tone: "bg-sky-soft",
		grad: "bg-gradient-sky"
	},
	{
		label: "Health",
		value: "Good",
		trend: "stable",
		Icon: HeartPulse,
		tone: "bg-rose-soft",
		grad: "bg-gradient-rose"
	},
	{
		label: "Finance",
		value: "$4,210",
		trend: "+12%",
		Icon: Wallet,
		tone: "bg-mint-soft",
		grad: "bg-gradient-sky"
	},
	{
		label: "Learning",
		value: "12h",
		trend: "+2h",
		Icon: GraduationCap,
		tone: "bg-lavender-soft",
		grad: "bg-gradient-lavender"
	},
	{
		label: "Travel",
		value: "3 trips",
		trend: "this yr",
		Icon: Plane,
		tone: "bg-peach-soft",
		grad: "bg-gradient-peach"
	}
];
var predictions = [
	{
		Icon: Target,
		label: "Goal forecast",
		text: "You'll hit Q1 fitness goal in 9 days"
	},
	{
		Icon: Briefcase,
		label: "Career growth",
		text: "Promotion-ready window: April"
	},
	{
		Icon: TriangleAlert,
		label: "Burnout warning",
		text: "Sleep down 18% — slow down next week"
	},
	{
		Icon: TrendingUp,
		label: "Financial trend",
		text: "Savings on track for +18% YoY"
	}
];
var weekly = [
	{
		day: "M",
		value: 62
	},
	{
		day: "T",
		value: 78
	},
	{
		day: "W",
		value: 84
	},
	{
		day: "T",
		value: 71
	},
	{
		day: "F",
		value: 90
	},
	{
		day: "S",
		value: 48
	},
	{
		day: "S",
		value: 56
	}
];
function Insights() {
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
						children: "Insights"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7 lg:mt-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-[28px] font-bold tracking-tight",
					children: "Life Insights"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: "AI analyzing patterns across your life"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-2 gap-3 lg:mt-6 lg:grid-cols-5 lg:gap-4",
				children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `rounded-3xl p-4 ${s.tone}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `w-9 h-9 rounded-2xl ${s.grad} grid place-items-center text-white shadow-soft`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.Icon, { className: "w-[18px] h-[18px]" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] font-medium px-2 py-0.5 rounded-full bg-white/70 text-foreground/70",
								children: s.trend
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-foreground/60",
							children: s.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-bold tracking-tight",
							children: s.value
						})
					]
				}, s.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:mt-8 lg:grid lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-6 lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 rounded-3xl border border-border/60 bg-card p-5 shadow-soft lg:mt-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Weekly life rhythm"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: "Energy & output balance"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-primary",
							children: "+6% vs last week"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 flex h-40 items-end gap-2.5",
						children: weekly.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex w-full flex-1 items-end",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-full rounded-t-xl rounded-b-md bg-gradient-ai",
									style: { height: `${w.value}%` }
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[10px] text-muted-foreground",
								children: w.day
							})]
						}, i))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-6 space-y-4 lg:mt-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[24px] p-5 bg-gradient-ai text-white shadow-card overflow-hidden relative",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-11 h-11 shrink-0 rounded-2xl bg-white/20 backdrop-blur-md grid place-items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cake, { className: "w-5 h-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-white/80",
										children: "Birthday · March 14"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-semibold",
										children: "28 years · 10,234 days lived"
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mt-4 h-1.5 rounded-full bg-white/20 overflow-hidden",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "h-full bg-white/80",
									style: { width: "35%" }
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "relative mt-2 text-[11px] text-white/80",
								children: "Life timeline · ~35% of average lifespan"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-3xl border border-border/60 bg-card p-5 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Personal patterns"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 space-y-2.5",
							children: [
								{
									Icon: Sun,
									label: "Most productive 9–11 AM"
								},
								{
									Icon: Moon,
									label: "Best sleep on Sun & Wed"
								},
								{
									Icon: Repeat,
									label: "You repeat workouts every 2 days"
								}
							].map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.Icon, { className: "h-4 w-4 text-foreground/70" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium",
									children: p.label
								})]
							}, p.label))
						})]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 lg:mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] uppercase tracking-wider text-muted-foreground font-semibold",
					children: "AI predictions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-4 lg:grid-cols-4 lg:gap-4",
					children: predictions.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex h-full items-start gap-3 rounded-3xl border border-border/60 bg-card p-4 shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-gradient-ai text-white shadow-soft",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.Icon, { className: "h-[18px] w-[18px]" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground",
								children: p.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 text-sm font-medium leading-snug",
								children: p.text
							})]
						})]
					}, p.label))
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})] });
}
//#endregion
export { Insights as component };
