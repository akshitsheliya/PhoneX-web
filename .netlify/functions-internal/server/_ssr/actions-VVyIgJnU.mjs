import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { It as ChevronLeft, K as MessageSquare, P as Receipt, R as Plane, St as FilePenLine, T as ShoppingCart, Wt as CalendarClock, X as Mail, lt as Hotel } from "../_libs/lucide-react.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/actions-VVyIgJnU.js
var import_jsx_runtime = require_jsx_runtime();
var items = [
	{
		label: "Send messages",
		sub: "Reply on your behalf",
		Icon: MessageSquare,
		status: "Active",
		grad: "bg-gradient-sky"
	},
	{
		label: "Send emails",
		sub: "Drafted with your tone",
		Icon: Mail,
		status: "Active",
		grad: "bg-gradient-lavender"
	},
	{
		label: "Book flights",
		sub: "Compare & confirm",
		Icon: Plane,
		status: "Ready",
		grad: "bg-gradient-peach"
	},
	{
		label: "Book hotels",
		sub: "Find best stays",
		Icon: Hotel,
		status: "Ready",
		grad: "bg-gradient-rose"
	},
	{
		label: "Schedule meetings",
		sub: "Calendar coordinated",
		Icon: CalendarClock,
		status: "Active",
		grad: "bg-gradient-sky"
	},
	{
		label: "Pay bills",
		sub: "Recurring & one-off",
		Icon: Receipt,
		status: "Paused",
		grad: "bg-gradient-peach"
	},
	{
		label: "Order groceries",
		sub: "Restock weekly",
		Icon: ShoppingCart,
		status: "Ready",
		grad: "bg-gradient-lavender"
	},
	{
		label: "Fill forms",
		sub: "Auto-complete data",
		Icon: FilePenLine,
		status: "Active",
		grad: "bg-gradient-rose"
	}
];
function statusTone(s) {
	if (s === "Active") return "text-emerald-700 bg-emerald-100/70";
	if (s === "Paused") return "text-amber-700 bg-amber-100/70";
	return "text-foreground/60 bg-white/70";
}
function Actions() {
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
						children: "Actions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-[28px] font-bold tracking-tight",
					children: "PhoneX Actions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: "Your AI agent, working for you"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 space-y-3 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0",
				children: items.map((it) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-3xl p-4 bg-card border border-border/60 shadow-soft flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `w-11 h-11 rounded-2xl ${it.grad} grid place-items-center text-white shadow-soft shrink-0`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(it.Icon, { className: "w-5 h-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: it.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground",
								children: it.sub
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `text-[10px] font-medium px-2 py-0.5 rounded-full ${statusTone(it.status)}`,
							children: it.status
						})
					]
				}, it.label))
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})] });
}
//#endregion
export { Actions as component };
