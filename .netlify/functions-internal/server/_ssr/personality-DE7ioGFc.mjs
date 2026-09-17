import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { It as ChevronLeft } from "../_libs/lucide-react.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/personality-DE7ioGFc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var personalities = [
	{
		id: "friendly",
		label: "Friendly",
		tone: "bg-gradient-peach"
	},
	{
		id: "motivational",
		label: "Motivational",
		tone: "bg-gradient-rose"
	},
	{
		id: "professional",
		label: "Professional",
		tone: "bg-gradient-sky"
	},
	{
		id: "calm",
		label: "Calm",
		tone: "bg-gradient-lavender"
	}
];
function PersonalityPage() {
	const [picked, setPicked] = (0, import_react.useState)("calm");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6",
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
						children: "Personality"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-10 h-10" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-[26px] font-bold tracking-tight",
					children: "PhoneX personality"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: "How your companion speaks to you"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-2 gap-2.5",
				children: personalities.map((p) => {
					const active = picked === p.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setPicked(p.id),
						className: `relative rounded-2xl p-4 text-left transition-all overflow-hidden ${active ? "ring-2 ring-primary shadow-card" : "bg-card border border-border"}`,
						children: [
							active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute inset-0 ${p.tone} opacity-90` }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `relative text-sm font-semibold ${active ? "text-white" : "text-foreground"}`,
								children: p.label
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: `relative block text-[10px] mt-1 ${active ? "text-white/80" : "text-muted-foreground"}`,
								children: "Tap to use"
							})
						]
					}, p.id);
				})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})] });
}
//#endregion
export { PersonalityPage as component };
