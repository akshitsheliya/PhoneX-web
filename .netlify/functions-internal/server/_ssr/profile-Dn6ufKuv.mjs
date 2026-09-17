import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { $t as BookHeart, E as Shield, Ft as ChevronRight, G as Mic, O as Settings, S as Sparkles, _ as Target, an as Activity, et as Lightbulb, f as Trophy, i as WandSparkles, m as TrendingUp } from "../_libs/lucide-react.mjs";
import { s as useT } from "./router-g_PHrWan.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
import { n as SidebarButton, t as SideMenu } from "./SidebarButton-C7V8VNS9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-Dn6ufKuv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var features = [
	{
		Icon: Sparkles,
		label: "AI Assistant",
		sub: "Always with you",
		grad: "bg-gradient-lavender"
	},
	{
		Icon: BookHeart,
		label: "Personal Memory",
		sub: "Remembers your life",
		grad: "bg-gradient-rose"
	},
	{
		Icon: Mic,
		label: "Voice Companion",
		sub: "Talk naturally",
		grad: "bg-gradient-sky"
	},
	{
		Icon: Activity,
		label: "Life Tracking",
		sub: "Habits & wellbeing",
		grad: "bg-gradient-peach"
	},
	{
		Icon: Lightbulb,
		label: "Smart Recommendations",
		sub: "Personalized for you",
		grad: "bg-gradient-ai"
	}
];
var growth = [
	{
		Icon: Target,
		label: "Goals",
		value: "5 active",
		tone: "bg-lavender-soft",
		grad: "bg-gradient-lavender"
	},
	{
		Icon: Trophy,
		label: "Achievements",
		value: "12 earned",
		tone: "bg-peach-soft",
		grad: "bg-gradient-peach"
	},
	{
		Icon: TrendingUp,
		label: "Daily progress",
		value: "78%",
		tone: "bg-mint-soft",
		grad: "bg-gradient-sky"
	},
	{
		Icon: WandSparkles,
		label: "AI suggestions",
		value: "3 new",
		tone: "bg-rose-soft",
		grad: "bg-gradient-rose"
	}
];
function Profile() {
	const [menu, setMenu] = (0, import_react.useState)(false);
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarButton, { onClick: () => setMenu(true) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/settings",
						className: "w-10 h-10 rounded-full glass shadow-soft grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "w-[18px] h-[18px] text-foreground/70" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-20 h-20 rounded-full bg-gradient-lavender grid place-items-center text-white text-2xl font-semibold shadow-orb",
								children: "A"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-ai grid place-items-center ring-4 ring-background",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-2 h-2 rounded-full bg-white" })
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 text-xl font-bold tracking-tight",
							children: "Akshit Carter"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-muted-foreground",
							children: [t("PhoneX Premium"), " · since 2024"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-base font-semibold",
						children: t("Your PhoneX Dashboard")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs text-muted-foreground",
						children: t("Everything your companion can do")
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-wider text-muted-foreground font-medium",
						children: t("PhoneX features available")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 rounded-3xl bg-card border border-border/60 shadow-soft divide-y divide-border/60",
						children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-3 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `w-9 h-9 rounded-xl ${f.grad} grid place-items-center text-white shadow-soft`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.Icon, { className: "w-4 h-4" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: t(f.label)
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-muted-foreground",
										children: t(f.sub)
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px] font-medium px-2 py-0.5 rounded-full bg-accent text-primary",
									children: t("On")
								})
							]
						}, f.label))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] uppercase tracking-wider text-muted-foreground font-medium",
						children: t("Personal growth")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid grid-cols-2 gap-3",
						children: growth.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: `rounded-3xl p-4 ${g.tone}`,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: `w-9 h-9 rounded-2xl ${g.grad} grid place-items-center text-white shadow-soft`,
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(g.Icon, { className: "w-[18px] h-[18px]" })
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-xs text-foreground/60",
									children: t(g.label)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-base font-bold tracking-tight",
									children: t(g.value)
								})
							]
						}, g.label))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 rounded-3xl p-4 bg-gradient-ai text-white shadow-card overflow-hidden relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative flex items-start gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-11 h-11 rounded-2xl bg-white/20 backdrop-blur-md grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shield, { className: "w-5 h-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: t("Your data stays protected")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[11px] text-white/80 mt-1 leading-relaxed",
									children: t("Conversations are encrypted on-device. You decide what PhoneX remembers.")
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4 mt-1 opacity-80" })
						]
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideMenu, {
			open: menu,
			onClose: () => setMenu(false)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
	] });
}
//#endregion
export { Profile as component };
