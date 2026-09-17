import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ft as ChevronRight, It as ChevronLeft, S as Sparkles } from "../_libs/lucide-react.mjs";
import { a as NOTIFS } from "./router-g_PHrWan.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notifications-B_T2Cu9Z.js
var import_jsx_runtime = require_jsx_runtime();
var sections = [
	{
		key: "today",
		title: "Today",
		ids: [
			"wake-up",
			"salary",
			"meeting",
			"gym",
			"medicine"
		]
	},
	{
		key: "tomorrow",
		title: "Tomorrow",
		ids: [
			"doctor",
			"shopping",
			"date"
		]
	},
	{
		key: "upcoming",
		title: "Upcoming",
		ids: [
			"family",
			"license",
			"birthday",
			"flight"
		]
	},
	{
		key: "completed",
		title: "Completed",
		ids: ["wake-up", "salary"]
	},
	{
		key: "missed",
		title: "Missed",
		ids: ["call-mom"]
	}
];
var priorityDot = {
	high: "bg-rose-500",
	med: "bg-amber-400",
	low: "bg-emerald-400"
};
function Notifications() {
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
						children: "Notifications"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-[26px] font-bold tracking-tight",
					children: "Your Day, Planned"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: "AI-organized reminders and schedule"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 rounded-[24px] p-4 bg-gradient-ai text-white shadow-card relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-8 -right-8 w-32 h-32 rounded-full bg-white/20 blur-2xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative inline-flex items-center gap-1.5 text-[11px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3" }), " AI daily schedule"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "relative mt-2 text-sm",
						children: "You have 3 important items today. Best focus block: 9–11 AM."
					})
				]
			}),
			sections.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-wider text-muted-foreground font-medium",
					children: s.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 rounded-3xl bg-card border border-border/60 shadow-soft divide-y divide-border/60",
					children: s.ids.map((id) => {
						const n = NOTIFS[id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/notifications/$id",
							params: { id },
							className: "flex items-center gap-3 p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `w-2 h-2 rounded-full ${priorityDot[n.priority]}` }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex-1 min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium truncate",
										children: n.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[11px] text-muted-foreground",
										children: [
											n.date,
											" · ",
											n.time
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4 text-foreground/40" })
							]
						}, s.key + id);
					})
				})]
			}, s.key))
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})] });
}
//#endregion
export { Notifications as component };
