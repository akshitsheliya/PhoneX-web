import { r as __toESM } from "./_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "./_libs/react+tanstack__react-query.mjs";
import { m as Outlet, v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Container, o as cn, t as CTALink } from "./_ssr/primitives-DGSZxQ5e.mjs";
import { J as Menu, n as X } from "./_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_marketing-D8bpkXFo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		to: "/",
		label: "Home",
		exact: true
	},
	{
		to: "/features",
		label: "Features",
		exact: false
	},
	{
		to: "/get-started",
		label: "How it works",
		exact: false
	}
];
function SiteHeader() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("sticky top-0 z-50 transition-colors duration-300", scrolled ? "border-b border-border/70 bg-background/80 backdrop-blur-xl" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			className: "relative flex h-[72px] items-center justify-between gap-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-[10px] bg-gradient-lavender text-sm font-bold text-white shadow-soft",
						children: "X"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[17px] font-bold tracking-tight",
						children: "PhoneX"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex",
					children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeOptions: { exact: item.exact },
						className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:font-semibold data-[status=active]:text-foreground",
						children: item.label
					}, item.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-3 md:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app",
						className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
						children: "Open app"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTALink, {
						to: "/get-started",
						children: "Get PhoneX"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": open ? "Close menu" : "Open menu",
					"aria-expanded": open,
					onClick: () => setOpen((v) => !v),
					className: "grid h-10 w-10 place-items-center rounded-xl border border-border bg-card md:hidden",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-[18px] w-[18px]" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-[18px] w-[18px]" })
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border/70 bg-background/95 backdrop-blur-xl md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
				className: "flex flex-col gap-1 py-4",
				children: [
					NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						onClick: () => setOpen(false),
						className: "rounded-xl px-2 py-3 text-[15px] font-medium text-foreground/80 hover:bg-secondary",
						children: item.label
					}, item.to)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/app",
						onClick: () => setOpen(false),
						className: "rounded-xl px-2 py-3 text-[15px] font-medium text-foreground/80 hover:bg-secondary",
						children: "Open app"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTALink, {
						to: "/get-started",
						size: "lg",
						className: "mt-2 w-full",
						onClick: () => setOpen(false),
						children: "Get PhoneX"
					})
				]
			})
		}) : null]
	});
}
var GROUPS = [{
	title: "Product",
	links: [
		{
			to: "/features",
			label: "Features"
		},
		{
			to: "/get-started",
			label: "How it works"
		},
		{
			to: "/app",
			label: "Open app"
		}
	]
}, {
	title: "Legal",
	links: [{
		to: "/privacy",
		label: "Privacy"
	}, {
		to: "/terms",
		label: "Terms"
	}]
}];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "border-t border-border/70 bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			width: "wide",
			className: "grid gap-10 py-14 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "max-w-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid h-8 w-8 place-items-center rounded-[10px] bg-gradient-lavender text-sm font-bold text-white",
						children: "X"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[17px] font-bold tracking-tight",
						children: "PhoneX"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm text-muted-foreground",
					children: "Your personal AI companion for everyday life."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-10 sm:grid-cols-2 sm:gap-16",
				children: GROUPS.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": group.title,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-foreground/70",
						children: group.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5",
						children: group.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: l.to,
							className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
							children: l.label
						}) }, l.to))
					})]
				}, group.title))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
			width: "wide",
			className: "border-t border-border/60 py-6",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" PhoneX. All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/privacy",
						className: "hover:text-foreground",
						children: "Privacy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/terms",
						className: "hover:text-foreground",
						children: "Terms"
					})]
				})]
			})
		})]
	});
}
function MarketingLayout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mkt min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { MarketingLayout as component };
