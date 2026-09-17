import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ft as ChevronRight, Ht as Calendar, I as Plus, It as ChevronLeft, Mt as Clock, Pt as CircleCheck, S as Sparkles, _t as Flag, g as Timer } from "../_libs/lucide-react.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tasks-D8g_Y8OE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var filters = [
	"All",
	"Completed",
	"In Progress",
	"New",
	"Today's",
	"High Priority"
];
var completed = [
	{
		name: "Morning Workout",
		time: "7:15 AM"
	},
	{
		name: "Reply to Sarah",
		time: "9:30 AM"
	},
	{
		name: "Review Design PRs",
		time: "10:45 AM"
	},
	{
		name: "Read 20 Pages",
		time: "11:20 AM"
	}
];
var inProgress = [{
	name: "Design Dashboard",
	progress: 65,
	remaining: "25 min remaining",
	priority: "High"
}, {
	name: "Weekly Report",
	progress: 40,
	remaining: "1h 10m remaining",
	priority: "Medium"
}];
var newTasks = [
	{
		name: "Driving License Exam",
		due: "30 July • 10:00 AM",
		category: "Personal",
		priority: "High"
	},
	{
		name: "Team Offsite Planning",
		due: "2 Aug • 3:00 PM",
		category: "Work",
		priority: "Medium"
	},
	{
		name: "Call Mom",
		due: "Today • 6:00 PM",
		category: "Family",
		priority: "Low"
	}
];
function Tasks() {
	const [active, setActive] = (0, import_react.useState)("All");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
							children: "Tasks"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 lg:mt-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-[26px] font-bold tracking-tight lg:text-[28px]",
						children: "Today's Tasks"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "8 of 10 completed · 80%"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex gap-2 overflow-x-auto scrollbar-none -mx-6 px-6 lg:mx-0 lg:flex-wrap lg:px-0",
					children: filters.map((f) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setActive(f),
							className: `shrink-0 px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all ${active === f ? "bg-gradient-ai text-white shadow-soft" : "glass text-foreground/70 border border-border/50"}`,
							children: f
						}, f);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 rounded-3xl p-4 bg-lavender-soft lg:max-w-[520px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-xs text-foreground/60",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Completion" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "80%" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 h-2 rounded-full bg-white/60 overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-full w-[80%] bg-gradient-ai rounded-full" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:grid lg:grid-cols-3 lg:gap-6 lg:items-start",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							emoji: "✅",
							title: "Completed",
							count: completed.length
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 rounded-3xl bg-card border border-border/60 shadow-soft divide-y divide-border/60 overflow-hidden",
							children: completed.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3 p-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-9 h-9 rounded-2xl grid place-items-center",
										style: { background: "oklch(0.94 0.05 155)" },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
											className: "w-[18px] h-[18px]",
											style: { color: "oklch(0.55 0.14 155)" }
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex-1 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-sm font-medium text-foreground/80 truncate",
											children: t.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-[11px] text-foreground/50 mt-0.5",
											children: ["Completed at ", t.time]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-2 h-2 rounded-full",
										style: { background: "oklch(0.65 0.15 155)" }
									})
								]
							}, t.name))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							emoji: "🟡",
							title: "In Progress",
							count: inProgress.length
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 space-y-3",
							children: inProgress.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl p-4 border border-border/60 shadow-soft",
								style: { background: "oklch(0.96 0.03 235)" },
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start justify-between gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-3 min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "w-9 h-9 rounded-2xl grid place-items-center",
												style: { background: "oklch(0.88 0.07 235)" },
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Timer, {
													className: "w-[18px] h-[18px]",
													style: { color: "oklch(0.45 0.14 235)" }
												})
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold truncate",
												children: t.name
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriorityBadge, { level: t.priority })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-3 flex items-center justify-between text-[11px] text-foreground/60",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Progress" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-semibold",
											style: { color: "oklch(0.45 0.14 235)" },
											children: [t.progress, "%"]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-1.5 h-2 rounded-full bg-white/70 overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "h-full rounded-full",
											style: {
												width: `${t.progress}%`,
												background: "linear-gradient(90deg, oklch(0.75 0.12 235), oklch(0.65 0.15 250))"
											}
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "mt-2 text-[11px] text-foreground/60 flex items-center gap-1.5",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-3 h-3" }),
											" ",
											t.remaining
										]
									})
								]
							}, t.name))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
							emoji: "🆕",
							title: "New Tasks",
							count: newTasks.length
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 space-y-3",
							children: newTasks.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-3xl p-4 border border-border/60 shadow-soft",
								style: { background: "oklch(0.96 0.03 295)" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-3 min-w-0",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "w-9 h-9 rounded-2xl grid place-items-center",
											style: { background: "oklch(0.88 0.08 295)" },
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, {
												className: "w-[18px] h-[18px]",
												style: { color: "oklch(0.45 0.16 295)" }
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "min-w-0",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm font-semibold truncate",
												children: t.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-[11px] text-foreground/55 mt-0.5",
												children: t.due
											})]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriorityBadge, { level: t.priority })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[11px] px-2 py-0.5 rounded-full bg-white/70 text-foreground/70",
										children: t.category
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "text-[11px] font-medium inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-ai text-white shadow-soft",
										children: ["Start ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-3 h-3" })]
									})]
								})]
							}, t.name))
						})] })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-[24px] p-5 bg-gradient-ai text-white shadow-card relative overflow-hidden lg:mt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative inline-flex items-center gap-1.5 text-[11px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3" }), " PhoneX Suggestion"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "relative mt-3 text-sm leading-relaxed",
							children: [
								"You have 3 remaining tasks today. Completing ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-semibold",
									children: "\"Driving License Exam Preparation\""
								}),
								" first will help you stay on schedule."
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			"aria-label": "Create new task",
			className: "absolute bottom-28 right-6 z-40 w-14 h-14 lg:bottom-8 lg:right-8 rounded-full bg-gradient-ai text-white grid place-items-center shadow-card active:scale-95 transition-transform",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-6 h-6" })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
	] });
}
function SectionHeader({ emoji, title, count }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-6 flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-[12px] uppercase tracking-wider text-muted-foreground font-semibold",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mr-1.5",
				children: emoji
			}), title]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-[11px] text-foreground/50",
			children: count
		})]
	});
}
function PriorityBadge({ level }) {
	const styles = {
		High: {
			bg: "oklch(0.94 0.05 20)",
			color: "oklch(0.55 0.16 20)"
		},
		Medium: {
			bg: "oklch(0.95 0.05 70)",
			color: "oklch(0.55 0.14 70)"
		},
		Low: {
			bg: "oklch(0.95 0.04 160)",
			color: "oklch(0.5 0.12 160)"
		}
	};
	const s = styles[level] ?? styles.Medium;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "shrink-0 inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full",
		style: {
			background: s.bg,
			color: s.color
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flag, { className: "w-2.5 h-2.5" }),
			" ",
			level
		]
	});
}
//#endregion
export { Tasks as component };
