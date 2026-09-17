import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { a as SectionHeading, i as Section, n as Container, o as cn, t as CTALink } from "./_ssr/primitives-DGSZxQ5e.mjs";
import { i as useReveal, r as DeviceScreen } from "./_ssr/DeviceFrame-DkhGiBz3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_marketing.features-BuWWkuyG.js
var import_jsx_runtime = require_jsx_runtime();
var FEATURES = [
	{
		id: "companion",
		title: "A companion you can talk to",
		question: "Somewhere to think out loud",
		body: "Ask PhoneX to plan something, remind you later, or simply help you make sense of a busy day. It answers in plain language and keeps the context of what you already told it.",
		points: [
			"Natural conversation",
			"Keeps context between chats",
			"Turns a request into a plan"
		],
		screen: "chat"
	},
	{
		id: "tasks",
		title: "Tasks that organise themselves",
		question: "What should I do next?",
		body: "Add something in a sentence and PhoneX sorts out the timing, priority and grouping — so your list stays short and honest instead of endless.",
		points: [
			"Add tasks in one line",
			"Grouped by moment of day",
			"Gentle, well-timed reminders"
		],
		screen: "tasks"
	},
	{
		id: "memories",
		title: "Memories you can actually find",
		question: "What was that thing again?",
		body: "Names, places, decisions, small details you meant to keep — PhoneX stores them the way you said them and brings them back when they matter.",
		points: [
			"Save a detail in seconds",
			"Search the way you speak",
			"Resurfaced in context"
		],
		screen: "memories"
	},
	{
		id: "voice",
		title: "Voice for hands-free moments",
		question: "When typing is not an option",
		body: "Walking, cooking, driving — speak to PhoneX and it captures the thought, sets the reminder or answers back without you touching the screen.",
		points: [
			"Speak instead of typing",
			"Quick capture on the move",
			"Replies read aloud"
		],
		screen: "voice"
	},
	{
		id: "insights",
		title: "Insights about your week",
		question: "How is my life actually going?",
		body: "PhoneX quietly notices patterns in your days — energy, focus, routines — and shows them back in a way that is easy to read and act on.",
		points: [
			"Weekly rhythm at a glance",
			"Patterns, not raw numbers",
			"Suggestions you can ignore"
		],
		screen: "insights"
	},
	{
		id: "personal",
		title: "An AI shaped around you",
		question: "Why does it feel personal?",
		body: "Tone, routines, priorities: PhoneX adapts to how you work rather than asking you to adapt to it. You stay in control of what it knows.",
		points: [
			"Learns your preferences",
			"Adjustable personality",
			"You decide what it keeps"
		],
		screen: "clone"
	}
];
function FeaturesPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			size: "hero",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				width: "wide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Features",
					title: "Everything PhoneX does for you.",
					description: "A closer look at how PhoneX listens, remembers and helps — built around the way you already live."
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			id: "how-it-works",
			size: "compact",
			className: "pt-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				width: "wide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1000px] space-y-20 md:space-y-24",
					children: FEATURES.map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FeatureRow, {
						feature,
						flip: i % 2 === 1
					}, feature.id))
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
			size: "compact",
			tone: "tint",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Container, {
				width: "wide",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-[620px] text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mkt-h2 text-balance",
							children: "Ready to try PhoneX?"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mkt-lead mx-auto mt-4 max-w-[480px]",
							children: "See how it fits into a normal day, then start with your own companion."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CTALink, {
								to: "/get-started",
								size: "lg",
								children: "Get PhoneX"
							})
						})
					]
				})
			})
		})
	] });
}
function FeatureRow({ feature, flip }) {
	const block = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		ref: block.ref,
		className: cn("mkt-inview grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_300px] md:gap-14", block.shown && "is-in"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("min-w-0 max-w-[520px]", flip && "md:order-2 md:justify-self-end"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[12px] font-medium uppercase tracking-[0.14em] text-muted-foreground",
					children: feature.question
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "mkt-h2 mt-3 text-[clamp(1.4rem,1.1rem+1vw,1.9rem)]",
					children: feature.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mkt-body mt-4 text-[15px]",
					children: feature.body
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-6 space-y-2.5",
					children: feature.points.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-start gap-3 text-sm text-foreground/80",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": "true",
							className: "mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/35"
						}), p]
					}, p))
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("mx-auto w-full max-w-[260px]", flip && "md:order-1"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DeviceScreen, {
				screen: feature.screen,
				height: 760,
				glow: false
			})
		})]
	});
}
//#endregion
export { FeaturesPage as component };
