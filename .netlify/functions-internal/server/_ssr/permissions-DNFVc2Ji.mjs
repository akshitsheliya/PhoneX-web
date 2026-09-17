import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ht as Calendar, It as ChevronLeft, K as MessageSquare, Y as MapPin, dt as HeartPulse, z as Phone } from "../_libs/lucide-react.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/permissions-DNFVc2Ji.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var permissions = [
	{
		Icon: Phone,
		label: "Phone access",
		sub: "Calls & contacts",
		on: true
	},
	{
		Icon: MessageSquare,
		label: "Messages",
		sub: "Send on your behalf",
		on: true
	},
	{
		Icon: Calendar,
		label: "Calendar",
		sub: "Read & create events",
		on: true
	},
	{
		Icon: HeartPulse,
		label: "Health data",
		sub: "Workouts & sleep",
		on: false
	},
	{
		Icon: MapPin,
		label: "Location",
		sub: "While using app",
		on: true
	}
];
function Permissions() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between lg:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/settings",
						className: "w-10 h-10 rounded-full glass shadow-soft grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-[18px] h-[18px] text-foreground/70" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: "Permissions"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-10" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-[26px] font-bold tracking-tight",
					children: "Permissions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: "Choose what PhoneX can access"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 rounded-3xl bg-card border border-border/60 shadow-soft divide-y divide-border/60",
				children: permissions.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, { ...p }, p.label))
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})] });
}
function Row({ Icon, label, sub, on: initial }) {
	const [on, setOn] = (0, import_react.useState)(initial);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3 p-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-9 h-9 rounded-xl bg-secondary grid place-items-center",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-4 h-4 text-foreground/70" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium",
					children: label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] text-muted-foreground",
					children: sub
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => setOn(!on),
				className: `relative w-11 h-6 rounded-full transition-colors ${on ? "bg-gradient-ai" : "bg-border"}`,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-0.5 ${on ? "left-[22px]" : "left-0.5"} w-5 h-5 rounded-full bg-white shadow-soft transition-all` })
			})
		]
	});
}
//#endregion
export { Permissions as component };
