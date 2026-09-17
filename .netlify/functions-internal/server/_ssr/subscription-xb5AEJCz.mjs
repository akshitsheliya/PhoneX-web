import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Dt as Crown, It as ChevronLeft, Lt as Check, S as Sparkles, at as Infinity$1 } from "../_libs/lucide-react.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
import { n as SidebarButton, t as SideMenu } from "./SidebarButton-C7V8VNS9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/subscription-xb5AEJCz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var plans = [
	{
		name: "Free",
		price: "$0",
		tagline: "Get started with PhoneX",
		features: [
			"Basic AI",
			"Limited Memory",
			"Basic Chat",
			"5GB Storage",
			"Community Support"
		],
		cta: "Choose Plan",
		Icon: Sparkles,
		grad: "bg-gradient-sky"
	},
	{
		name: "PhoneX Premium",
		price: "$9.99 / mo",
		tagline: "Your everyday AI companion",
		features: [
			"Unlimited Chat",
			"Long-Term Memory",
			"Voice Assistant",
			"Advanced AI",
			"Personal Analytics",
			"Priority Support"
		],
		cta: "Upgrade",
		current: true,
		Icon: Crown,
		grad: "bg-gradient-lavender"
	},
	{
		name: "PhoneX Infinite",
		price: "$24.99 / mo",
		tagline: "Your personal AI operating system",
		features: [
			"Everything in Premium",
			"AI Clone",
			"Family Vault",
			"Business Brain",
			"Unlimited Cloud Storage",
			"Advanced Automations",
			"Future Digital Legacy"
		],
		cta: "Go Infinite",
		highlight: true,
		Icon: Infinity$1,
		grad: "bg-gradient-ai"
	}
];
function Subscription() {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneFrame, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center justify-between",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SidebarButton, { onClick: () => setOpen(true) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/profile",
							className: "w-10 h-10 rounded-full glass shadow-soft grid place-items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-[18px] h-[18px] text-foreground/70" })
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-[26px] font-bold tracking-tight",
						children: "Subscription"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground mt-1",
						children: "Choose the plan that fits your life"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 space-y-4",
					children: plans.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: `relative overflow-hidden rounded-[28px] p-5 shadow-card ${p.highlight ? "bg-gradient-ai text-white" : "bg-card border border-border/60"}`,
						children: [
							p.highlight && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/20 blur-2xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -bottom-16 -left-10 w-44 h-44 rounded-full bg-white/10 blur-3xl" })] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex items-center justify-between",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: `w-10 h-10 rounded-2xl grid place-items-center text-white shadow-soft ${p.highlight ? "bg-white/20 backdrop-blur-md" : p.grad}`,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(p.Icon, { className: "w-5 h-5" })
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: `text-[11px] ${p.highlight ? "text-white/80" : "text-muted-foreground"}`,
											children: p.current ? "Current Plan" : p.tagline
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-base font-semibold",
											children: p.name
										})] })]
									}),
									p.current && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] px-2 py-1 rounded-full bg-accent text-primary font-medium",
										children: "Active"
									}),
									p.highlight && !p.current && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[10px] px-2 py-1 rounded-full bg-white/20 text-white font-medium backdrop-blur-sm",
										children: "Best value"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `relative mt-3 text-xl font-bold tracking-tight ${p.highlight ? "" : ""}`,
								children: p.price
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "relative mt-4 space-y-2.5",
								children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: `w-6 h-6 rounded-full grid place-items-center shrink-0 ${p.highlight ? "bg-white/25 backdrop-blur-sm" : "bg-gradient-ai"}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
											className: "w-3.5 h-3.5 text-white",
											strokeWidth: 3
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm",
										children: f
									})]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: `relative mt-5 w-full py-3 rounded-full font-semibold text-sm ${p.current ? "bg-accent text-primary" : p.highlight ? "bg-white text-foreground" : "bg-foreground text-background"}`,
								children: p.current ? "Current Plan" : p.cta
							})
						]
					}, p.name))
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
//#endregion
export { Subscription as component };
