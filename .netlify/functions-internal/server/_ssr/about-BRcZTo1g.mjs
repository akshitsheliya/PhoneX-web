import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { Et as Database, It as ChevronLeft, Jt as Briefcase, Rt as ChartLine, Yt as Brain, at as Infinity$1, kt as Cpu, l as UsersRound, t as Zap } from "../_libs/lucide-react.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BRcZTo1g.js
var import_jsx_runtime = require_jsx_runtime();
var explore = [
	{
		to: "/vault",
		label: "Knowledge Vault",
		sub: "Recall your life",
		Icon: Database,
		grad: "bg-gradient-sky"
	},
	{
		to: "/actions",
		label: "PhoneX Actions",
		sub: "Agent automations",
		Icon: Zap,
		grad: "bg-gradient-peach"
	},
	{
		to: "/family",
		label: "Family AI",
		sub: "Memories & tree",
		Icon: UsersRound,
		grad: "bg-gradient-rose"
	},
	{
		to: "/clone",
		label: "My AI Clone",
		sub: "Learning you",
		Icon: Brain,
		grad: "bg-gradient-lavender"
	},
	{
		to: "/business",
		label: "Business Brain",
		sub: "Work knowledge",
		Icon: Briefcase,
		grad: "bg-gradient-sky"
	},
	{
		to: "/insights",
		label: "Life Insights",
		sub: "Analytics",
		Icon: ChartLine,
		grad: "bg-gradient-peach"
	},
	{
		to: "/ecosystem",
		label: "PhoneX Everywhere",
		sub: "Devices",
		Icon: Cpu,
		grad: "bg-gradient-lavender"
	},
	{
		to: "/legacy",
		label: "Digital Legacy",
		sub: "For generations",
		Icon: Infinity$1,
		grad: "bg-gradient-rose"
	}
];
function About() {
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
						children: "About PhoneX"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-10" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-[26px] font-bold tracking-tight",
					children: "Features of PhoneX"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: "Your personal operating system"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-2 gap-3",
				children: explore.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: e.to,
					className: "group rounded-3xl p-4 bg-card border border-border/60 shadow-soft hover:shadow-card transition",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `w-10 h-10 rounded-2xl ${e.grad} grid place-items-center text-white shadow-soft`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(e.Icon, { className: "w-[18px] h-[18px]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-semibold leading-tight",
							children: e.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-muted-foreground mt-0.5",
							children: e.sub
						})
					]
				}, e.to))
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})] });
}
//#endregion
export { About as component };
