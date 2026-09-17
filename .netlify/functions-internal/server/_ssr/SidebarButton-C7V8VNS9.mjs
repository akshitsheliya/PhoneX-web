import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { J as Menu, Ot as CreditCard, S as Sparkles, it as Info, n as X, ut as Heart } from "../_libs/lucide-react.mjs";
import { s as useT } from "./router-g_PHrWan.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SidebarButton-C7V8VNS9.js
var import_jsx_runtime = require_jsx_runtime();
function SideMenu({ open, onClose }) {
	const t = useT();
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			"aria-label": "Close menu",
			onClick: onClose,
			className: "absolute inset-0 bg-foreground/30 backdrop-blur-[2px] animate-fade-up"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "absolute top-0 bottom-0 left-0 w-[78%] glass border-r border-border/40 shadow-card p-5 pt-14 flex flex-col",
			style: { animation: "fade-up 0.35s ease-out both" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-9 h-9 rounded-2xl bg-gradient-ai grid place-items-center shadow-orb",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-white" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-semibold",
							children: "Akshit"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] text-muted-foreground",
							children: t("Your AI life companion")
						})] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						className: "w-9 h-9 rounded-full bg-card border border-border/60 grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-[16px] h-[16px] text-foreground/70" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 space-y-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/about",
							onClick: onClose,
							className: "w-full flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/60 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-9 h-9 rounded-xl bg-gradient-lavender grid place-items-center text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Info, { className: "w-4 h-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: t("About PhoneX")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/subscription",
							onClick: onClose,
							className: "w-full flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/60 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-9 h-9 rounded-xl bg-gradient-peach grid place-items-center text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "w-4 h-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: t("Subscription Details")
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/personality",
							onClick: onClose,
							className: "w-full flex items-center gap-3 p-4 rounded-2xl bg-card border border-border/60 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-9 h-9 rounded-xl bg-gradient-rose grid place-items-center text-white",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "w-4 h-4" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm font-semibold",
								children: t("PhoneX Personality")
							})]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-auto pt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-2xl p-4 bg-gradient-ai text-white text-[11px] leading-relaxed",
						children: t("PhoneX learns from you privately. Conversations stay encrypted on-device.")
					})
				})
			]
		})]
	});
}
function SidebarButton({ onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick,
		"aria-label": "Open menu",
		className: "w-10 h-10 rounded-full glass shadow-soft grid place-items-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
			className: "w-[18px] h-[18px] text-foreground/80",
			strokeWidth: 2.2
		})
	});
}
//#endregion
export { SidebarButton as n, SideMenu as t };
