import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { Et as Database, It as ChevronLeft, Jt as Briefcase, Rt as ChartLine, S as Sparkles, Yt as Brain, at as Infinity$1, kt as Cpu, l as UsersRound, t as Zap } from "../_libs/lucide-react.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
import { n as SidebarButton, t as SideMenu } from "./SidebarButton-C7V8VNS9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/app.features-BOpOHtfE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NODES = [
	{
		to: "/family",
		label: "Family AI",
		preview: "24 members",
		Icon: UsersRound,
		grad: "linear-gradient(140deg, oklch(0.92 0.06 15), oklch(0.78 0.12 10))",
		glow: "oklch(0.78 0.13 10 / 0.5)",
		x: -8,
		y: -175,
		size: 62,
		labelSide: "top"
	},
	{
		to: "/business",
		label: "Business Brain",
		preview: "5 projects",
		Icon: Briefcase,
		grad: "linear-gradient(140deg, oklch(0.92 0.06 200), oklch(0.78 0.11 205))",
		glow: "oklch(0.72 0.13 200 / 0.5)",
		x: -105,
		y: -108,
		size: 58,
		labelSide: "left"
	},
	{
		to: "/clone",
		label: "My AI Clone",
		preview: "Learning you",
		Icon: Brain,
		grad: "linear-gradient(140deg, oklch(0.92 0.07 295), oklch(0.76 0.13 295))",
		glow: "oklch(0.7 0.15 295 / 0.55)",
		x: 108,
		y: -100,
		size: 58,
		labelSide: "right"
	},
	{
		to: "/vault",
		label: "Knowledge Vault",
		preview: "2,431 memories",
		Icon: Database,
		grad: "linear-gradient(140deg, oklch(0.92 0.06 235), oklch(0.76 0.11 230))",
		glow: "oklch(0.7 0.13 230 / 0.55)",
		x: -128,
		y: 28,
		size: 66,
		labelSide: "left"
	},
	{
		to: "/insights",
		label: "Life Insights",
		preview: "Health 91",
		Icon: ChartLine,
		grad: "linear-gradient(140deg, oklch(0.94 0.07 55), oklch(0.8 0.12 45))",
		glow: "oklch(0.78 0.14 45 / 0.5)",
		x: 128,
		y: 35,
		size: 66,
		labelSide: "right"
	},
	{
		to: "/actions",
		label: "PhoneX Actions",
		preview: "6 automations",
		Icon: Zap,
		grad: "linear-gradient(140deg, oklch(0.95 0.07 95), oklch(0.84 0.13 90))",
		glow: "oklch(0.82 0.14 90 / 0.5)",
		x: -80,
		y: 148,
		size: 54,
		labelSide: "left"
	},
	{
		to: "/ecosystem",
		label: "PhoneX Everywhere",
		preview: "4 devices",
		Icon: Cpu,
		grad: "linear-gradient(140deg, oklch(0.9 0.06 275), oklch(0.72 0.14 270))",
		glow: "oklch(0.68 0.16 270 / 0.55)",
		x: 36,
		y: 170,
		size: 56,
		labelSide: "bottom"
	},
	{
		to: "/legacy",
		label: "Digital Legacy",
		preview: "1,200 preserved",
		Icon: Infinity$1,
		grad: "linear-gradient(140deg, oklch(0.92 0.05 345), oklch(0.8 0.1 340))",
		glow: "oklch(0.74 0.13 340 / 0.5)",
		x: 128,
		y: 152,
		size: 58,
		labelSide: "right"
	}
];
function Features() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [selected, setSelected] = (0, import_react.useState)(null);
	const [phase, setPhase] = (0, import_react.useState)("idle");
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		if (phase !== "converge" || selected === null) return;
		const t1 = setTimeout(() => setPhase("leaving"), 520);
		const t2 = setTimeout(() => navigate({ to: NODES[selected].to }), 880);
		return () => {
			clearTimeout(t1);
			clearTimeout(t2);
		};
	}, [
		phase,
		selected,
		navigate
	]);
	const tap = (i) => {
		if (selected !== null) return;
		setSelected(i);
		setPhase("converge");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-full w-full overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 pointer-events-none",
					style: { background: "radial-gradient(circle at 50% 46%, oklch(0.99 0.02 295), transparent 55%), radial-gradient(circle at 12% 88%, oklch(0.97 0.04 230 / 0.7), transparent 50%), radial-gradient(circle at 92% 8%, oklch(0.97 0.04 15 / 0.7), transparent 50%)" }
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Particles, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: `absolute inset-0 pointer-events-none transition-all duration-700 ${phase === "idle" ? "opacity-0" : "opacity-100"}`,
					style: {
						backdropFilter: "blur(16px)",
						WebkitBackdropFilter: "blur(16px)",
						background: "oklch(1 0 0 / 0.3)"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-30 px-6 pt-2 flex items-center justify-between lg:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarButton, { onClick: () => setOpen(true) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/profile",
							className: "w-10 h-10 rounded-full glass shadow-soft grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-[18px] h-[18px] text-foreground/70" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "inline-flex items-center gap-1.5 text-[10px] font-medium glass px-2.5 py-1 rounded-full shadow-soft",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3 text-primary" }), " AI OS"]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-30 px-6 mt-3 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-[22px] font-bold tracking-tight",
						children: "PhoneX Core"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground mt-0.5",
						children: "Your intelligence, orbiting"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 mx-auto mt-2 lg:mt-10 lg:scale-[1.35]",
					style: {
						width: 340,
						height: 540
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ring, {
							size: 210,
							dur: "50s"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ring, {
							size: 300,
							dur: "80s",
							reverse: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ring, {
							size: 380,
							dur: "120s",
							faint: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `relative transition-all duration-700 ease-out ${phase === "converge" ? "scale-[1.4]" : phase === "leaving" ? "scale-[2.6] opacity-90" : "scale-100"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 rounded-full animate-pulse-ring bg-gradient-orb opacity-40" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute inset-0 rounded-full animate-pulse-ring bg-gradient-orb opacity-30",
										style: { animationDelay: "1.2s" }
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "absolute -inset-4 rounded-full opacity-70",
										style: {
											background: "conic-gradient(from 0deg, transparent, oklch(0.85 0.14 295 / 0.75) 25%, transparent 50%, oklch(0.85 0.12 230 / 0.7) 75%, transparent)",
											filter: "blur(8px)",
											animation: "shimmer-wave 14s linear infinite"
										}
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative w-[120px] h-[120px] rounded-full bg-gradient-orb shadow-orb animate-breathe grid place-items-center",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "absolute inset-2 rounded-full",
											style: { background: "radial-gradient(circle at 32% 28%, oklch(1 0 0 / 0.85), transparent 45%)" }
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "relative w-7 h-7 text-white/95 drop-shadow" })]
									})
								]
							})
						}),
						NODES.map((n, i) => {
							const isSel = selected === i;
							const isOther = selected !== null && !isSel;
							const tx = isSel && phase !== "idle" ? 0 : n.x;
							const ty = isSel && phase !== "idle" ? 0 : n.y;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								onClick: () => tap(i),
								className: "absolute left-1/2 top-1/2 focus:outline-none group",
								style: {
									transform: `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(${isSel && phase !== "idle" ? .3 : 1})`,
									transition: "transform 800ms cubic-bezier(.4,0,.2,1), opacity 500ms ease",
									opacity: isOther ? 0 : 1,
									zIndex: isSel ? 25 : 15
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: { animation: phase === "idle" ? `float-slow ${5 + i % 4}s ease-in-out ${i * .35}s infinite` : void 0 },
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "absolute inset-0 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition",
											style: { background: n.glow }
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "relative rounded-full grid place-items-center text-foreground/85 border border-white/70 shadow-card group-active:scale-90 transition",
											style: {
												width: n.size,
												height: n.size,
												background: n.grad,
												boxShadow: `0 12px 32px -14px ${n.glow}, inset 0 0 0 1px oklch(1 0 0 / 0.55), inset 0 -8px 16px -8px oklch(0 0 0 / 0.08)`
											},
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "absolute inset-1 rounded-full pointer-events-none",
												style: { background: "radial-gradient(circle at 30% 25%, oklch(1 0 0 / 0.7), transparent 50%)" }
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(n.Icon, { className: "relative w-5 h-5" })]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabelBlock, {
										label: n.label,
										preview: n.preview,
										side: n.labelSide,
										size: n.size
									})]
								})
							}, n.to);
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute bottom-24 inset-x-0 text-center z-10 px-8 lg:bottom-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] text-muted-foreground",
						children: "One intelligence. Eight signals. Tap to enter."
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SideMenu, {
			open,
			onClose: () => setOpen(false)
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})
	] });
}
function LabelBlock({ label, preview, side, size }) {
	const base = "absolute pointer-events-none whitespace-nowrap";
	const half = size / 2;
	const pad = 8;
	if (side === "left") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${base} text-right`,
		style: {
			right: half + pad,
			top: "50%",
			transform: "translateY(-50%)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-semibold text-foreground/85 leading-tight",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[9.5px] text-foreground/55 leading-tight mt-0.5",
			children: preview
		})]
	});
	if (side === "right") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${base} text-left`,
		style: {
			left: half + pad,
			top: "50%",
			transform: "translateY(-50%)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-semibold text-foreground/85 leading-tight",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[9.5px] text-foreground/55 leading-tight mt-0.5",
			children: preview
		})]
	});
	if (side === "top") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${base} text-center`,
		style: {
			bottom: half + pad,
			left: "50%",
			transform: "translateX(-50%)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-semibold text-foreground/85 leading-tight",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[9.5px] text-foreground/55 leading-tight mt-0.5",
			children: preview
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `${base} text-center`,
		style: {
			top: half + pad,
			left: "50%",
			transform: "translateX(-50%)"
		},
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] font-semibold text-foreground/85 leading-tight",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[9.5px] text-foreground/55 leading-tight mt-0.5",
			children: preview
		})]
	});
}
function Ring({ size, dur, reverse, faint }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute left-1/2 top-1/2 rounded-full pointer-events-none",
		style: {
			width: size,
			height: size,
			marginLeft: -size / 2,
			marginTop: -size / 2,
			border: `1px dashed oklch(0.7 0.08 285 / ${faint ? .18 : .32})`,
			animation: `shimmer-wave ${dur} linear infinite ${reverse ? "reverse" : ""}`
		}
	});
}
function Particles() {
	const dots = Array.from({ length: 26 });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 pointer-events-none overflow-hidden",
		children: dots.map((_, i) => {
			const size = 2 + i % 4;
			const left = i * 41 % 100;
			const top = i * 67 % 100;
			const dur = 6 + i % 6;
			const delay = i % 7 * .35;
			const hue = 230 + i * 17 % 120;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute rounded-full",
				style: {
					width: size,
					height: size,
					left: `${left}%`,
					top: `${top}%`,
					background: `oklch(0.8 0.1 ${hue} / 0.35)`,
					filter: "blur(0.5px)",
					animation: `float-slow ${dur}s ease-in-out ${delay}s infinite`
				}
			}, i);
		})
	});
}
//#endregion
export { Features as component };
