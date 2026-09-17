import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { v as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { a as SectionHeading, i as Section, n as Container, o as cn, t as CTALink } from "./_ssr/primitives-DGSZxQ5e.mjs";
import { i as useReveal, r as DeviceScreen } from "./_ssr/DeviceFrame-DkhGiBz3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_marketing.get-started-FH_ew1yz.js
var import_jsx_runtime = require_jsx_runtime();
var STEPS = [
	{
		n: "01",
		title: "Open PhoneX",
		body: "Start with the home screen — your day, your reminders and anything worth knowing right now, in one place."
	},
	{
		n: "02",
		title: "Tell it what matters",
		body: "Speak or type a task, a detail to remember, or something on your mind. PhoneX takes it from a sentence to something organised."
	},
	{
		n: "03",
		title: "Let it learn your rhythm",
		body: "The more you use PhoneX, the better it understands your routines — and the more useful its reminders and insights become."
	}
];
function GetStartedPage() {
	const steps = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			size: "hero",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				width: "wide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-[560px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
								eyebrow: "How it works",
								title: "Start in minutes. Improve every day.",
								description: "PhoneX learns quietly in the background — the longer you use it, the more personal it becomes."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-9 flex flex-col gap-3 sm:flex-row sm:items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTALink, {
									to: "/app",
									size: "lg",
									className: "w-full sm:w-auto",
									children: "Experience PhoneX"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/features",
									className: "inline-flex h-13 items-center justify-center rounded-xl border border-border bg-card px-7 text-[15px] font-semibold text-foreground transition-all duration-200 hover:border-foreground/25 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
									children: "See all features"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mkt-body mt-6 text-[13px]",
								children: "PhoneX is in early access. The live experience opens in your browser — no account or install needed yet."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto w-full max-w-[260px]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeviceScreen, {
							screen: "home",
							height: 800,
							glow: false
						})
					})]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			size: "compact",
			tone: "tint",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				width: "wide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: steps.ref,
					className: cn("mkt-inview mx-auto grid max-w-[1000px] gap-8 md:grid-cols-3 md:gap-10", steps.shown && "is-in"),
					children: STEPS.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-[340px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[13px] font-medium tracking-[0.12em] text-muted-foreground",
								children: s.n
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mkt-h3 mt-3",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mkt-body mt-2.5",
								children: s.body
							})
						]
					}, s.n))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			size: "compact",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				width: "wide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[620px] text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mkt-h2 text-balance",
							children: "Try it the way you would use it."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mkt-lead mx-auto mt-4 max-w-[480px]",
							children: "Open PhoneX and move through a normal day — plan something, save a detail, ask a question."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTALink, {
								to: "/app",
								size: "lg",
								children: "Experience PhoneX"
							})
						})
					]
				})
			})
		})
	] });
}
//#endregion
export { GetStartedPage as component };
