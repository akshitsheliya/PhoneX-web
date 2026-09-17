import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as Pencil, Ht as Calendar, It as ChevronLeft, Lt as Check, Mt as Clock, en as Bell, h as Trash2 } from "../_libs/lucide-react.mjs";
import { a as NOTIFS, i as Route$2 } from "./router-g_PHrWan.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notifications._id-gTXPkfwj.js
var import_jsx_runtime = require_jsx_runtime();
var priorityLabel = {
	high: "High priority",
	med: "Medium",
	low: "Low"
};
var priorityBg = {
	high: "bg-rose-soft text-rose-600",
	med: "bg-peach-soft text-amber-600",
	low: "bg-mint-soft text-emerald-600"
};
function NotifDetail() {
	const { id } = Route$2.useParams();
	const n = NOTIFS[id];
	if (!n) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 pt-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm",
			children: "Reminder not found."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/notifications",
			className: "text-primary text-sm mt-2 inline-block",
			children: "Back"
		})]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 pb-16 animate-fade-up",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between lg:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/notifications",
						className: "w-10 h-10 rounded-full glass shadow-soft grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-[18px] h-[18px]" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "Reminder"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-[28px] p-6 bg-gradient-ai text-white shadow-card relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/20 blur-3xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative w-14 h-14 rounded-2xl bg-white/25 backdrop-blur-md grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "w-6 h-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "relative mt-4 text-[22px] font-bold tracking-tight",
						children: n.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "relative text-[12px] text-white/85 mt-1",
						children: [
							n.date,
							" · ",
							n.time
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 rounded-3xl bg-card border border-border/60 shadow-soft p-4 space-y-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Time",
						value: `${n.date}, ${n.time}`
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Priority",
						value: priorityLabel[n.priority],
						pill: priorityBg[n.priority]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Status",
						value: n.status.charAt(0).toUpperCase() + n.status.slice(1)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[11px] text-muted-foreground",
						children: "Description"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm mt-1 leading-relaxed",
						children: n.desc
					})] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid grid-cols-2 gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
						Icon: Check,
						label: "Mark complete",
						grad: "bg-gradient-sky"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
						Icon: Clock,
						label: "Snooze",
						grad: "bg-gradient-peach"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
						Icon: Calendar,
						label: "Reschedule",
						grad: "bg-gradient-lavender"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ActionBtn, {
						Icon: Pencil,
						label: "Edit",
						grad: "bg-gradient-rose"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "mt-4 w-full flex items-center justify-center gap-2 p-4 rounded-3xl bg-rose-soft text-rose-600 font-semibold text-sm shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "w-4 h-4" }), " Delete"]
			})
		]
	}) });
}
function Row({ label, value, pill }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-[11px] text-muted-foreground",
			children: label
		}), pill ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `text-[11px] font-medium px-2 py-0.5 rounded-full ${pill}`,
			children: value
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm font-medium",
			children: value
		})]
	});
}
function ActionBtn({ Icon, label, grad }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		className: "rounded-3xl p-4 bg-card border border-border/60 shadow-soft text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: `w-9 h-9 rounded-2xl ${grad} grid place-items-center text-white shadow-soft`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-[18px] h-[18px]" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm font-semibold",
			children: label
		})]
	});
}
//#endregion
export { NotifDetail as component };
