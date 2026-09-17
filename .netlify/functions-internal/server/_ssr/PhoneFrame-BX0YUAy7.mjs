import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { d as useLocation, v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { At as Compass, C as Smile, D as ShieldCheck, G as Mic, H as PanelLeftOpen, Jt as Briefcase, Mt as Clock, O as Settings, Ot as CreditCard, Pt as CircleCheck, Q as Lock, Rt as ChartLine, S as Sparkles, U as PanelLeftClose, Xt as Boxes, Yt as Brain, c as Users, ct as Hourglass, en as Bell, it as Info, n as X, q as MessageCircle, rt as Languages, st as House, t as Zap, tt as Layers, u as User, ut as Heart } from "../_libs/lucide-react.mjs";
import { s as useT } from "./router-g_PHrWan.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PhoneFrame-BX0YUAy7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var navGroups = [
	{
		label: "Overview",
		items: [
			{
				to: "/app",
				label: "Home",
				icon: House
			},
			{
				to: "/activity",
				label: "Life",
				icon: Compass
			},
			{
				to: "/tasks",
				label: "Tasks",
				icon: CircleCheck
			},
			{
				to: "/memories",
				label: "Memories",
				icon: Sparkles
			}
		]
	},
	{
		label: "Companion",
		items: [
			{
				to: "/chat",
				label: "Chat",
				icon: MessageCircle
			},
			{
				to: "/voice",
				label: "Voice",
				icon: Mic
			},
			{
				to: "/clone",
				label: "AI Clone",
				icon: Brain
			},
			{
				to: "/insights",
				label: "Insights",
				icon: ChartLine
			}
		]
	},
	{
		label: "Ecosystem",
		items: [
			{
				to: "/app/features",
				label: "Features",
				icon: Layers
			},
			{
				to: "/ecosystem",
				label: "Ecosystem",
				icon: Boxes
			},
			{
				to: "/vault",
				label: "Vault",
				icon: Lock
			},
			{
				to: "/legacy",
				label: "Legacy",
				icon: Hourglass
			}
		]
	}
];
var bottomNavItems = [{
	to: "/profile",
	label: "Profile",
	icon: User
}, {
	to: "/settings",
	label: "Settings",
	icon: Settings
}];
/** Page titles for the desktop header, keyed by pathname. */
var pageMeta = {
	"/app": {
		title: "Home",
		icon: House
	},
	"/activity": {
		title: "Life Activity",
		icon: Compass
	},
	"/tasks": {
		title: "Tasks",
		icon: CircleCheck
	},
	"/memories": {
		title: "Memories",
		icon: Sparkles
	},
	"/chat": {
		title: "Chat with PhoneX",
		icon: MessageCircle
	},
	"/voice": {
		title: "Voice",
		icon: Mic
	},
	"/clone": {
		title: "AI Clone",
		icon: Brain
	},
	"/insights": {
		title: "Life Insights",
		icon: ChartLine
	},
	"/app/features": {
		title: "Features",
		icon: Layers
	},
	"/ecosystem": {
		title: "Ecosystem",
		icon: Boxes
	},
	"/vault": {
		title: "Vault",
		icon: Lock
	},
	"/legacy": {
		title: "Legacy",
		icon: Hourglass
	},
	"/profile": {
		title: "Profile",
		icon: User
	},
	"/settings": {
		title: "Settings",
		icon: Settings
	},
	"/fitness": {
		title: "Fitness",
		icon: Heart
	},
	"/mood": {
		title: "Mood",
		icon: Smile
	},
	"/notifications": {
		title: "Notifications",
		icon: Bell
	},
	"/family": {
		title: "Family",
		icon: Users
	},
	"/business": {
		title: "Business",
		icon: Briefcase
	},
	"/language": {
		title: "Language",
		icon: Languages
	},
	"/actions": {
		title: "Quick Actions",
		icon: Zap
	},
	"/subscription": {
		title: "Subscription",
		icon: CreditCard
	},
	"/about": {
		title: "About PhoneX",
		icon: Info
	},
	"/permissions": {
		title: "Permissions",
		icon: ShieldCheck
	},
	"/personality": {
		title: "PhoneX Personality",
		icon: Heart
	},
	"/life-summary": {
		title: "Life Summary",
		icon: Clock
	}
};
function DesktopSidebar({ collapsed, onToggle }) {
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: `hidden lg:flex lg:flex-col lg:h-screen lg:sticky lg:top-0 shrink-0 border-r border-border/60 bg-card/70 backdrop-blur-xl transition-[width] duration-200 ${collapsed ? "w-[76px]" : "w-[248px]"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `flex items-center gap-2.5 h-16 px-4 ${collapsed ? "justify-center" : ""}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/app",
					className: "flex items-center gap-2.5 min-w-0",
					"aria-label": "PhoneX home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-9 h-9 shrink-0 rounded-2xl bg-gradient-ai grid place-items-center shadow-orb",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-white" })
					}), !collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-sm font-semibold tracking-tight truncate",
							children: "PhoneX"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block text-[10px] text-muted-foreground truncate",
							children: t("Your AI life companion")
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex-1 overflow-y-auto px-3 pb-4 space-y-5",
				children: navGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-3 pb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/70",
					children: t(group.label)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-0.5",
					children: group.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarLink, {
						item,
						collapsed
					}) }, item.to))
				})] }, group.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-3 pb-3 pt-2 border-t border-border/60 space-y-0.5",
				children: [bottomNavItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarLink, {
					item,
					collapsed
				}, item.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: onToggle,
					"aria-label": collapsed ? "Expand sidebar" : "Collapse sidebar",
					className: `mt-1 w-full flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${collapsed ? "justify-center" : ""}`,
					children: collapsed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftOpen, { className: "w-[18px] h-[18px] shrink-0" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PanelLeftClose, { className: "w-[18px] h-[18px] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate",
						children: "Collapse"
					})] })
				})]
			})
		]
	});
}
function SidebarLink({ item, collapsed }) {
	const { pathname } = useLocation();
	const t = useT();
	const Icon = item.icon;
	const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: item.to,
		title: collapsed ? t(item.label) : void 0,
		"aria-label": t(item.label),
		className: `group relative flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${collapsed ? "justify-center" : ""} ${active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:bg-secondary hover:text-foreground"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
				className: "w-[18px] h-[18px] shrink-0",
				strokeWidth: 2.1
			}),
			!collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "truncate",
				children: t(item.label)
			}),
			collapsed && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "pointer-events-none absolute left-full ml-2 z-50 whitespace-nowrap rounded-xl bg-nav px-2.5 py-1.5 text-xs font-medium text-nav-foreground opacity-0 shadow-nav transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100",
				children: t(item.label)
			})
		]
	});
}
function PhonexAIOverlay({ open, onClose }) {
	const t = useT();
	const [state, setState] = (0, import_react.useState)("listening");
	const [mounted, setMounted] = (0, import_react.useState)(false);
	const startY = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		setMounted(false);
		setState("listening");
		const r1 = requestAnimationFrame(() => setMounted(true));
		const t1 = setTimeout(() => setState("thinking"), 2600);
		const t2 = setTimeout(() => setState("speaking"), 4600);
		const t3 = setTimeout(() => setState("listening"), 8e3);
		return () => {
			cancelAnimationFrame(r1);
			clearTimeout(t1);
			clearTimeout(t2);
			clearTimeout(t3);
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (e) => e.key === "Escape" && onClose();
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open, onClose]);
	if (!open) return null;
	const statusText = state === "listening" ? t("Listening…") : state === "thinking" ? t("Thinking…") : t("Speaking…");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-[60]",
		onTouchStart: (e) => startY.current = e.touches[0]?.clientY ?? null,
		onTouchMove: (e) => {
			if (startY.current == null) return;
			if ((e.touches[0]?.clientY ?? 0) - startY.current > 80) {
				startY.current = null;
				onClose();
			}
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: `absolute inset-0 bg-black/35 backdrop-blur-2xl transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`,
				onClick: onClose
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 pointer-events-none overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -top-24 -left-16 w-[70%] h-[70%] rounded-full opacity-60 blur-3xl",
					style: { background: "radial-gradient(circle, oklch(0.85 0.12 295) 0%, transparent 70%)" }
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute -bottom-32 -right-16 w-[80%] h-[80%] rounded-full opacity-50 blur-3xl",
					style: { background: "radial-gradient(circle, oklch(0.82 0.13 235) 0%, transparent 70%)" }
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: `relative h-full flex flex-col items-center px-6 pt-16 pb-10 transition-all duration-500 ${mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-95"}`,
				style: { transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] tracking-[0.3em] uppercase text-white/70 font-semibold",
							children: "PhoneX AI"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-2xl font-semibold text-white tracking-tight",
							children: statusText
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1 grid place-items-center w-full",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative w-[300px] h-[300px] grid place-items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full bg-gradient-ai opacity-40 blur-3xl animate-breathe" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-4 rounded-full border border-white/25 animate-shimmer-wave" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute inset-12 rounded-full border border-white/20 animate-shimmer-wave",
									style: {
										animationDirection: "reverse",
										animationDuration: state === "thinking" ? "14s" : "22s"
									}
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute inset-0 rounded-full bg-gradient-ai opacity-25 ${state === "speaking" ? "animate-pulse-ring" : "animate-pulse-ring"}` }),
								state === "thinking" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 animate-[spin_6s_linear_infinite]",
									children: Array.from({ length: 6 }).map((_, i) => {
										const a = i / 6 * Math.PI * 2;
										return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute w-1.5 h-1.5 rounded-full bg-white/90 shadow-[0_0_10px_rgba(255,255,255,0.9)]",
											style: {
												left: `calc(50% + ${Math.cos(a) * 130}px - 3px)`,
												top: `calc(50% + ${Math.sin(a) * 130}px - 3px)`
											}
										}, i);
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `relative w-44 h-44 rounded-full bg-gradient-orb shadow-orb grid place-items-center animate-breathe ${state === "thinking" ? "animate-[spin_10s_linear_infinite]" : ""}`,
									style: state === "speaking" ? {
										transform: "scale(1.05)",
										transition: "transform 400ms ease-out"
									} : void 0,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-3 rounded-full bg-white/30 backdrop-blur-md" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, {
										className: "relative w-10 h-10 text-white",
										strokeWidth: 2.2
									})]
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-end justify-center gap-1 h-12 mb-6",
						children: Array.from({ length: 36 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "w-[3px] rounded-full bg-white/85 animate-breathe",
							style: {
								height: `${20 + Math.sin(i * .5) * 22 + i % 5 * 5}%`,
								animationDelay: `${i * 55}ms`,
								animationDuration: state === "thinking" ? `${2.4 + i % 4 * .2}s` : state === "speaking" ? `${.9 + i % 4 * .15}s` : `${1.4 + i % 4 * .2}s`
							}
						}, i))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/chat",
							onClick: onClose,
							className: "inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-white text-sm font-medium shadow-soft active:scale-95 transition-transform",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "w-4 h-4" }),
								" ",
								t("Chat")
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: onClose,
							className: "inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white text-foreground text-sm font-medium shadow-card active:scale-95 transition-transform",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-4 h-4" }),
								" ",
								t("Close")
							]
						})]
					})
				]
			})
		]
	});
}
function DesktopHeader() {
	const { pathname } = useLocation();
	const t = useT();
	const [overlay, setOverlay] = (0, import_react.useState)(false);
	const title = pageMeta[pathname]?.title ?? "PhoneX";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "hidden lg:flex sticky top-0 z-40 h-16 shrink-0 items-center gap-4 border-b border-border/60 bg-background/80 px-6 backdrop-blur-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-muted-foreground",
					children: "PhoneX"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "truncate text-base font-semibold tracking-tight",
					children: t(title)
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: () => setOverlay(true),
				className: "inline-flex items-center gap-2 rounded-full bg-gradient-ai px-4 py-2 text-xs font-semibold text-white shadow-soft transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "h-4 w-4" }), t("Talk to PhoneX")]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderIcon, {
						to: "/notifications",
						label: t("Notifications"),
						icon: Bell
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderIcon, {
						to: "/language",
						label: t("Language"),
						icon: Languages
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeaderIcon, {
						to: "/settings",
						label: t("Settings"),
						icon: Settings
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/profile",
				className: "flex items-center gap-2.5 rounded-full border border-border/60 bg-card py-1 pl-1 pr-3 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-lavender text-sm font-semibold text-white",
					children: "A"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "min-w-0 text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate text-xs font-semibold leading-tight",
						children: "Akshit"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block truncate text-[10px] leading-tight text-muted-foreground",
						children: t("PhoneX Premium")
					})]
				})]
			})
		]
	}), overlay && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[70]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhonexAIOverlay, {
			open: true,
			onClose: () => setOverlay(false)
		})
	})] });
}
function HeaderIcon({ to, label, icon: Icon }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		"aria-label": label,
		title: label,
		className: "grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-[18px] w-[18px]" })
	});
}
var STORAGE_KEY = "phonex.sidebar.collapsed";
function PhoneFrame({ children }) {
	const [collapsed, setCollapsed] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			setCollapsed(window.localStorage.getItem(STORAGE_KEY) === "1");
		} catch {}
	}, []);
	const toggle = () => setCollapsed((prev) => {
		const next = !prev;
		try {
			window.localStorage.setItem(STORAGE_KEY, next ? "1" : "0");
		} catch {}
		return next;
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "phonex-shell-bg min-h-screen w-full flex items-center justify-center p-4 md:p-10 lg:items-stretch lg:justify-start lg:p-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopSidebar, {
			collapsed,
			onToggle: toggle
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full max-w-[400px] lg:flex lg:h-screen lg:min-w-0 lg:max-w-none lg:flex-1 lg:flex-col",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DesktopHeader, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative rounded-[3rem] bg-[oklch(0.12_0.02_280)] p-[10px] shadow-[0_40px_80px_-20px_oklch(0.2_0.06_285/0.4)] lg:min-h-0 lg:flex-1 lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-[820px] overflow-hidden rounded-[2.6rem] bg-background lg:h-full lg:rounded-none lg:bg-transparent",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-0 inset-x-0 z-30 flex items-center justify-between px-8 pt-3 text-xs font-semibold text-foreground lg:hidden",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "9:41" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1 opacity-80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px]",
									children: "●●●●"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[10px]",
									children: "􀙇"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-2 left-1/2 z-30 h-7 w-28 -translate-x-1/2 rounded-full bg-black lg:hidden" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-full overflow-y-auto scrollbar-none pt-12 lg:pt-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "desktop-main lg:mx-auto lg:w-full lg:max-w-[1360px] lg:px-4 lg:py-7",
								children
							})
						})
					]
				})
			})]
		})]
	});
}
//#endregion
export { PhonexAIOverlay as n, PhoneFrame as t };
