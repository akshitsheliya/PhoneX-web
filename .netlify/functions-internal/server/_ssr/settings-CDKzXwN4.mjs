import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Ft as ChevronRight, It as ChevronLeft, Q as Lock, Z as LogOut, rt as Languages } from "../_libs/lucide-react.mjs";
import { s as useT } from "./router-g_PHrWan.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-CDKzXwN4.js
var import_jsx_runtime = require_jsx_runtime();
function Settings() {
	const t = useT();
	const rows = [{
		to: "/permissions",
		label: t("Permissions"),
		sub: t("Access & privacy"),
		Icon: Lock,
		grad: "bg-gradient-lavender"
	}, {
		to: "/language",
		label: t("Language"),
		sub: t("App & voice language"),
		Icon: Languages,
		grad: "bg-gradient-sky"
	}];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 pb-16 animate-fade-up",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between lg:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/profile",
						className: "w-10 h-10 rounded-full glass shadow-soft grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-[18px] h-[18px] text-foreground/70" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: t("Settings")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-10 h-10" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-[26px] font-bold tracking-tight",
					children: t("Settings")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: t("Manage your PhoneX experience")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 space-y-3 lg:grid lg:grid-cols-2 lg:gap-4 lg:space-y-0",
				children: rows.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: r.to,
					className: "flex items-center gap-3 p-4 rounded-3xl bg-card border border-border/60 shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `w-10 h-10 rounded-2xl ${r.grad} grid place-items-center text-white shadow-soft`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(r.Icon, { className: "w-[18px] h-[18px]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: r.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[11px] text-muted-foreground",
								children: r.sub
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-4 h-4 text-foreground/40" })
					]
				}, r.to))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "mt-6 w-full flex items-center justify-center gap-2 p-4 rounded-3xl bg-rose-soft text-rose-600 font-semibold text-sm shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "w-4 h-4" }), t("Logout")]
			})
		]
	}) });
}
//#endregion
export { Settings as component };
