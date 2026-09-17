import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Bt as Car, Ht as Calendar, It as ChevronLeft, S as Sparkles, X as Mail, _ as Target, nt as Laptop, r as Watch, st as House, w as Smartphone } from "../_libs/lucide-react.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ecosystem-BTD5kfqe.js
var import_jsx_runtime = require_jsx_runtime();
var devices = [
	{
		label: "Mobile",
		state: "Active",
		Icon: Smartphone,
		grad: "bg-gradient-lavender"
	},
	{
		label: "Laptop",
		state: "Synced",
		Icon: Laptop,
		grad: "bg-gradient-sky"
	},
	{
		label: "Watch",
		state: "Live",
		Icon: Watch,
		grad: "bg-gradient-rose"
	},
	{
		label: "Car",
		state: "Ready",
		Icon: Car,
		grad: "bg-gradient-peach"
	},
	{
		label: "Smart Home",
		state: "12 devices",
		Icon: House,
		grad: "bg-gradient-lavender"
	}
];
var actions = [
	{
		Icon: Calendar,
		text: "Check calendar — 4 events today"
	},
	{
		Icon: Mail,
		text: "Read emails — 2 need a reply"
	},
	{
		Icon: Target,
		text: "Track goals — workout & learning"
	}
];
function Ecosystem() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
						children: "Ecosystem"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-[28px] font-bold tracking-tight",
					children: [
						"PhoneX",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Everywhere"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: "One AI, across every device you own"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-[28px] p-6 bg-gradient-ai text-white shadow-card relative overflow-hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/20 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-20 h-20 rounded-full bg-white/25 backdrop-blur-md grid place-items-center animate-breathe",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10 h-10 rounded-full bg-white/80" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-medium",
							children: "\"PhoneX, manage my day\""
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-white/80 mt-1",
							children: "Active on 5 devices · synced now"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-6 text-sm font-semibold",
				children: "Connected devices"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 grid grid-cols-2 gap-3",
				children: devices.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl p-4 bg-card border border-border/60 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `w-10 h-10 rounded-2xl ${d.grad} grid place-items-center text-white shadow-soft`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(d.Icon, { className: "w-[18px] h-[18px]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-semibold",
							children: d.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground",
							children: d.state
						})
					]
				}, d.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
				className: "mt-6 text-sm font-semibold inline-flex items-center gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3.5 h-3.5 text-primary" }), " AI actions in flight"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 space-y-2",
				children: actions.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl p-3.5 bg-card border border-border/60 shadow-soft flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-8 h-8 rounded-xl bg-lavender-soft grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(a.Icon, { className: "w-4 h-4 text-primary" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm",
						children: a.text
					})]
				}, a.text))
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})] });
}
//#endregion
export { Ecosystem as component };
