import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { d as useLocation, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as Smile, Ht as Calendar, Mt as Clock, Pt as CircleCheck, Rt as ChartLine, S as Sparkles, Zt as Bookmark, _ as Target, c as Users, en as Bell, q as MessageCircle, rn as ArrowUpRight, ut as Heart, wt as Dumbbell } from "../_libs/lucide-react.mjs";
import { s as useT } from "./router-g_PHrWan.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app-CD5F_NWW.js
var import_jsx_runtime = require_jsx_runtime();
var schedule = [
	{
		time: "11:30",
		title: "Design review",
		sub: "Sarah & product team",
		tone: "bg-lavender-soft"
	},
	{
		time: "14:00",
		title: "Focus block",
		sub: "Dashboard layout",
		tone: "bg-sky-soft"
	},
	{
		time: "18:00",
		title: "Call Mom",
		sub: "Family",
		tone: "bg-peach-soft"
	}
];
function Home() {
	const t = useT();
	const { searchStr } = useLocation();
	const isHeroPreview = new URLSearchParams(searchStr).get("preview") === "hero-readable";
	const quickActions = [
		t("Plan my day"),
		t("Remember something"),
		t("Track my health"),
		t("Solve a problem")
	];
	const suggestions = [
		{
			Icon: Dumbbell,
			label: t("Complete your workout"),
			sub: t("20 min left today"),
			to: "/fitness",
			tone: "bg-rose-soft"
		},
		{
			Icon: Target,
			label: t("Review weekly goals"),
			sub: t("2 goals need attention"),
			to: "/tasks",
			tone: "bg-lavender-soft"
		},
		{
			Icon: Users,
			label: t("Schedule family time"),
			sub: t("Nothing planned this week"),
			to: "/family",
			tone: "bg-peach-soft"
		},
		{
			Icon: Bookmark,
			label: t("Save today's moment"),
			sub: t("3 memories this week"),
			to: "/memories",
			tone: "bg-sky-soft"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `px-6 pb-40 animate-fade-up lg:px-0 lg:pb-8${isHeroPreview ? " hero-phone-preview" : ""}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between lg:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-11 h-11 rounded-full bg-gradient-lavender grid place-items-center text-white font-semibold shadow-soft",
						children: "A"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "hero-phone-profile-name text-sm font-semibold flex items-center gap-1.5",
						children: ["Akshit", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "hero-phone-status inline-flex items-center gap-1 text-[10px] text-primary bg-accent px-1.5 py-0.5 rounded-full",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-primary animate-pulse" }),
								" ",
								t("active")
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-phone-premium text-[11px] text-muted-foreground",
						children: t("PhoneX Premium")
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/notifications",
						className: "w-10 h-10 rounded-full glass shadow-soft grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "w-[18px] h-[18px] text-foreground/70" })
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-7 rounded-[28px] p-5 bg-gradient-ai text-white shadow-card overflow-hidden lg:mt-0 lg:p-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-12 -right-12 w-44 h-44 rounded-full bg-white/20 blur-2xl lg:w-64 lg:h-64" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start justify-between gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "hero-phone-ai-status inline-flex items-center gap-1.5 text-[11px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3" }),
											" ",
											t("Your AI companion is active")
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "hero-phone-ai-heading mt-3 text-lg font-semibold leading-snug max-w-[220px] lg:text-[28px] lg:leading-tight lg:max-w-[460px]",
										children: t("How can I help you?")
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/voice",
									"aria-label": t("Talk"),
									className: "w-12 h-12 shrink-0 rounded-full bg-white/25 backdrop-blur-md grid place-items-center animate-breathe lg:hidden",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-7 h-7 rounded-full bg-white/80" })
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 grid grid-cols-2 gap-2 lg:mt-6 lg:flex lg:flex-wrap lg:gap-2.5",
								children: quickActions.map((q) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: "hero-phone-quick-action text-left text-xs font-medium bg-white/15 hover:bg-white/25 transition px-3 py-2.5 rounded-2xl backdrop-blur-sm lg:rounded-full lg:px-4 lg:py-2 lg:text-[13px]",
									children: q
								}, q))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-2 grid grid-cols-2 gap-2 lg:mt-6 lg:flex lg:gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/voice",
									className: "hero-phone-primary-action flex items-center justify-center gap-1.5 text-xs font-semibold bg-white text-foreground px-3 py-2.5 rounded-2xl lg:rounded-full lg:px-6 lg:py-3 lg:text-sm",
									children: [
										t("Talk"),
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-3.5 h-3.5" })
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/chat",
									className: "hero-phone-secondary-action flex items-center justify-center gap-1.5 text-xs font-semibold bg-white/20 backdrop-blur-md text-white px-3 py-2.5 rounded-2xl border border-white/30 lg:rounded-full lg:px-6 lg:py-3 lg:text-sm",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-3.5 h-3.5" }),
										" ",
										t("Chat")
									]
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/voice",
						"aria-label": t("Talk"),
						className: "hidden lg:grid relative h-[172px] w-[172px] shrink-0 place-items-center rounded-full",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-white/10 animate-pulse-ring" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-4 rounded-full border border-white/25" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "relative grid h-28 w-28 place-items-center rounded-full bg-white/25 backdrop-blur-md animate-breathe",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-16 w-16 rounded-full bg-white/80" })
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:mt-8 lg:grid lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-6 lg:items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex items-end justify-between lg:mt-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "hero-phone-summary-heading text-base font-semibold lg:text-lg",
							children: t("Today's life summary")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "hero-phone-productivity text-xs text-muted-foreground",
							children: t("80% productive")
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/life-summary",
							className: "hero-phone-see-all text-xs text-primary font-medium hover:underline",
							children: t("See all")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 grid grid-cols-2 gap-3 lg:mt-4 lg:grid-cols-4 lg:gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/tasks",
								className: "rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewCard, {
									tone: "lavender",
									Icon: CircleCheck,
									label: t("Tasks"),
									value: "8/10",
									sub: t("completed")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/fitness",
								className: "rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewCard, {
									tone: "rose",
									Icon: Heart,
									label: t("Fitness"),
									value: "6.4 km",
									sub: t("walked today")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/mood",
								className: "rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewCard, {
									tone: "peach",
									Icon: Smile,
									label: t("Mood"),
									value: t("Calm"),
									sub: t("balanced")
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/memories",
								className: "rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OverviewCard, {
									tone: "sky",
									Icon: Bookmark,
									label: t("Memories"),
									value: t("3 saved"),
									sub: t("this week")
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/insights",
						className: "mt-4 block rounded-[24px] p-4 bg-gradient-ai text-white shadow-card overflow-hidden relative transition-transform hover:scale-[1.005] lg:mt-5 lg:p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex items-center gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-11 h-11 shrink-0 rounded-2xl bg-white/20 backdrop-blur-md grid place-items-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, { className: "w-5 h-5" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "inline-flex items-center gap-1.5 text-[10px] bg-white/20 px-2 py-0.5 rounded-full backdrop-blur-sm",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3" }),
												" ",
												t("AI analyzing your life")
											]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 text-sm font-semibold",
											children: t("Life Insights")
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-[11px] text-white/80 truncate",
											children: t("Patterns, health, productivity & goals")
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "w-4 h-4 shrink-0 opacity-80" })
							]
						})]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "mt-6 lg:mt-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-base font-semibold lg:text-lg",
							children: t("Next up")
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/activity",
							className: "text-xs text-primary font-medium hover:underline",
							children: t("Open")
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 rounded-3xl border border-border/60 bg-card shadow-soft divide-y divide-border/60 overflow-hidden lg:mt-4",
						children: schedule.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${s.tone}`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-[18px] w-[18px] text-primary" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0 flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-sm font-semibold",
										children: t(s.title)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-[11px] text-muted-foreground",
										children: t(s.sub)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "shrink-0 inline-flex items-center gap-1 text-[11px] font-medium text-foreground/60",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-3 w-3" }),
										" ",
										s.time
									]
								})
							]
						}, s.time))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6 lg:mt-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-base font-semibold lg:text-lg inline-flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-primary" }),
							" ",
							t("Smart suggestions")
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-muted-foreground",
						children: t("Updated just now")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-4 lg:grid-cols-4 lg:gap-4",
					children: suggestions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: s.to,
						className: "group flex items-start gap-3 rounded-3xl border border-border/60 bg-card p-4 shadow-soft transition-shadow hover:shadow-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: `grid h-10 w-10 shrink-0 place-items-center rounded-2xl ${s.tone}`,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.Icon, { className: "h-[18px] w-[18px] text-primary" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold leading-snug",
									children: s.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-[11px] text-muted-foreground",
									children: s.sub
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "h-4 w-4 shrink-0 text-foreground/30 transition-colors group-hover:text-primary" })
						]
					}, s.label))
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})] });
}
function OverviewCard({ tone, Icon, label, value, sub }) {
	const toneClass = {
		lavender: "bg-lavender-soft",
		rose: "bg-rose-soft",
		peach: "bg-peach-soft",
		sky: "bg-sky-soft"
	}[tone];
	const iconBg = {
		lavender: "bg-gradient-lavender",
		rose: "bg-gradient-rose",
		peach: "bg-gradient-peach",
		sky: "bg-gradient-sky"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `relative h-full rounded-3xl p-4 ${toneClass} overflow-hidden`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `w-9 h-9 rounded-2xl ${iconBg} grid place-items-center text-white shadow-soft`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-[18px] h-[18px]" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hero-phone-card-label mt-3 text-xs text-foreground/60",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hero-phone-card-value text-lg font-bold tracking-tight",
				children: value
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "hero-phone-card-sub text-[11px] text-foreground/50",
				children: sub
			})
		]
	});
}
//#endregion
export { Home as component };
