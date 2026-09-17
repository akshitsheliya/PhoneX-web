import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { It as ChevronLeft, S as Sparkles, bt as FileType, ot as Image, xt as FileText, y as StickyNote, yt as Film } from "../_libs/lucide-react.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vault-BOT7Z2jE.js
var import_jsx_runtime = require_jsx_runtime();
var cards = [
	{
		label: "Documents",
		count: "124 files",
		Icon: FileText,
		grad: "bg-gradient-sky",
		tone: "bg-sky-soft"
	},
	{
		label: "Photos",
		count: "3,210",
		Icon: Image,
		grad: "bg-gradient-rose",
		tone: "bg-rose-soft"
	},
	{
		label: "Videos",
		count: "82",
		Icon: Film,
		grad: "bg-gradient-peach",
		tone: "bg-peach-soft"
	},
	{
		label: "PDFs",
		count: "47",
		Icon: FileType,
		grad: "bg-gradient-lavender",
		tone: "bg-lavender-soft"
	},
	{
		label: "Notes",
		count: "215",
		Icon: StickyNote,
		grad: "bg-gradient-sky",
		tone: "bg-mint-soft"
	}
];
var examples = [
	"What was my salary in 2022?",
	"Show my Goa trip photos",
	"What did I tell you about my startup?"
];
function Vault() {
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
						children: "Vault"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-10" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "text-[28px] font-bold tracking-tight",
					children: [
						"Your Knowledge",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Vault"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: "Everything PhoneX knows about your life"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 flex items-center gap-2 rounded-2xl bg-card border border-border/60 shadow-soft px-4 py-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					placeholder: "Ask PhoneX anything…",
					className: "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-2 gap-3",
				children: cards.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `rounded-3xl p-4 ${c.tone}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `w-10 h-10 rounded-2xl ${c.grad} grid place-items-center text-white shadow-soft`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.Icon, { className: "w-[18px] h-[18px]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm font-semibold",
							children: c.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[11px] text-foreground/55",
							children: c.count
						})
					]
				}, c.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-[28px] p-5 bg-gradient-ai text-white shadow-card relative overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white/20 blur-2xl" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative inline-flex items-center gap-1.5 text-[11px] bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-3 h-3" }), " Try asking"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "relative mt-3 space-y-2",
						children: examples.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "text-sm bg-white/15 backdrop-blur-sm px-3 py-2.5 rounded-2xl",
							children: [
								"\"",
								e,
								"\""
							]
						}, e))
					})
				]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})] });
}
//#endregion
export { Vault as component };
