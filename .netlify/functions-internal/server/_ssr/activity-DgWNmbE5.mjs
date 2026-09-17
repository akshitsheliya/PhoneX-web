import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ct as Ellipsis, Ht as Calendar, Jt as Briefcase, Qt as BookOpen, S as Sparkles, _ as Target, c as Users, dt as HeartPulse, jt as Coffee, pt as GraduationCap, u as User, wt as Dumbbell } from "../_libs/lucide-react.mjs";
import { s as useT } from "./router-g_PHrWan.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/activity-DgWNmbE5.js
var import_jsx_runtime = require_jsx_runtime();
var days = [
	"M",
	"T",
	"W",
	"T",
	"F",
	"S",
	"S"
];
var timeline = [
	{
		id: "workout",
		time: "07:00",
		title: "Morning workout",
		sub: "45 min · upper body",
		tone: "rose",
		Icon: Dumbbell,
		badge: "Done"
	},
	{
		id: "meeting",
		time: "10:00",
		title: "Work meeting",
		sub: "Product sync · 1h",
		tone: "sky",
		Icon: Briefcase,
		badge: "Soon"
	},
	{
		id: "lunch",
		time: "13:00",
		title: "Lunch break",
		sub: "Bistrot 24",
		tone: "peach",
		Icon: Coffee,
		badge: "1h"
	},
	{
		id: "learning",
		time: "16:00",
		title: "Learning session",
		sub: "Design systems · 30 min",
		tone: "mint",
		Icon: BookOpen,
		badge: "Auto"
	},
	{
		id: "family",
		time: "19:00",
		title: "Family time",
		sub: "Dinner at Mom's",
		tone: "lavender",
		Icon: Users,
		badge: "Upcoming"
	},
	{
		id: null,
		time: "22:00",
		title: "Health tracking",
		sub: "Sleep coaching ready",
		tone: "rose",
		Icon: HeartPulse,
		badge: "Auto"
	}
];
var goals = [
	{
		label: "Fitness",
		value: "78%",
		sub: "Run 5km · 3×/week",
		tone: "rose",
		Icon: HeartPulse
	},
	{
		label: "Career",
		value: "Q1",
		sub: "Lead 2 launches",
		tone: "sky",
		Icon: Briefcase
	},
	{
		label: "Learning",
		value: "12h",
		sub: "this month",
		tone: "mint",
		Icon: GraduationCap
	},
	{
		label: "Personal",
		value: "Daily",
		sub: "Slow mornings",
		tone: "lavender",
		Icon: User
	}
];
var suggestions = [
	"Complete your workout today",
	"Review your weekly goals",
	"Schedule family time on Sunday"
];
function LifePage() {
	const t = useT();
	goals.map((g) => ({
		...g,
		labelT: t(g.label)
	}));
	const suggestionsT = suggestions.map((s) => t(s));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center justify-end",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "w-10 h-10 rounded-full glass shadow-soft grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "w-[18px] h-[18px] text-foreground/70" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "w-10 h-10 rounded-full glass shadow-soft grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "w-[18px] h-[18px] text-foreground/70" })
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted-foreground",
				children: t("Friday, January 17")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex items-center justify-between",
				children: days.map((d, i) => {
					const date = 13 + i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[11px] text-muted-foreground",
							children: d
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `w-10 h-10 rounded-full grid place-items-center text-sm font-semibold ${i === 4 ? "bg-gradient-ai text-white shadow-orb" : "bg-secondary text-foreground/70"}`,
							children: date
						})]
					}, i);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-7 text-sm font-semibold",
				children: t("Daily timeline")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3 relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-[42px] top-2 bottom-2 w-px bg-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-3 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0",
					children: timeline.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TimelineItem, {
						...item,
						tBadge: t(item.badge)
					}, i))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-7 text-sm font-semibold",
				children: t("Goals")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-2 gap-3",
				children: goals.map((g) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `rounded-3xl p-4 ${{
							rose: "bg-rose-soft",
							sky: "bg-sky-soft",
							mint: "bg-mint-soft",
							lavender: "bg-lavender-soft",
							peach: "bg-peach-soft"
						}[g.tone]}`,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `w-9 h-9 rounded-2xl ${{
										rose: "bg-gradient-rose",
										sky: "bg-gradient-sky",
										mint: "bg-gradient-sky",
										lavender: "bg-gradient-lavender",
										peach: "bg-gradient-peach"
									}[g.tone]} grid place-items-center text-white shadow-soft`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g.Icon, { className: "w-[18px] h-[18px]" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "w-3.5 h-3.5 text-foreground/40" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-foreground/60",
								children: t(g.label)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-lg font-bold tracking-tight",
								children: g.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-foreground/50",
								children: g.sub
							})
						]
					}, g.label);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-[28px] p-5 bg-gradient-ai text-white shadow-card relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative inline-flex items-center gap-1.5 text-[11px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3" }),
							" ",
							t("Smart suggestions")
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "relative mt-3 space-y-2",
						children: suggestionsT.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "text-sm bg-white/15 backdrop-blur-sm px-3 py-2.5 rounded-2xl",
							children: s
						}, s))
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})] });
}
function TimelineItem({ id, time, title, sub, tone, Icon, badge, tBadge }) {
	const statusBg = {
		Done: "bg-mint-soft",
		Soon: "bg-sky-soft",
		"1h": "bg-peach-soft",
		Upcoming: "bg-lavender-soft",
		Auto: "bg-rose-soft"
	};
	const statusBadge = {
		Done: "bg-mint/60 text-foreground/80",
		Soon: "bg-sky/60 text-foreground/80",
		"1h": "bg-peach/60 text-foreground/80",
		Upcoming: "bg-lavender/60 text-white",
		Auto: "bg-white/70 text-foreground/70"
	};
	const dot = {
		rose: "bg-gradient-rose",
		sky: "bg-gradient-sky",
		peach: "bg-gradient-peach",
		lavender: "bg-gradient-lavender",
		mint: "bg-gradient-sky"
	};
	const cardBg = statusBg[badge] ?? "bg-secondary";
	const badgeBg = statusBadge[badge] ?? "bg-white/70 text-foreground/70";
	const body = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex-1 rounded-2xl p-4 ${cardBg} ${id ? "active:scale-[0.99] transition" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `w-8 h-8 rounded-xl ${dot[tone]} grid place-items-center text-white shadow-soft`,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: title
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: `text-[10px] font-medium px-2 py-0.5 rounded-full ${badgeBg}`,
				children: tBadge
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs text-foreground/60 mt-2 pl-10",
			children: sub
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-start gap-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-10 text-[11px] text-muted-foreground text-right pt-4",
				children: time
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-10 w-5 mt-4 grid place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-3 h-3 rounded-full ${dot[tone]} ring-4 ring-background` })
			}),
			id ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/timeline/$id",
				params: { id },
				className: "flex-1",
				children: body
			}) : body
		]
	});
}
//#endregion
export { LifePage as component };
