import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { G as Mic, I as Plus, It as ChevronLeft, S as Sparkles, k as Send } from "../_libs/lucide-react.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/chat-DH1C_ELQ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var initial = [
	{
		from: "ai",
		text: "Hi Akshit, I'm here. What's on your mind today?"
	},
	{
		from: "me",
		text: "Remind me to call Mom this evening."
	},
	{
		from: "ai",
		text: "Done. I'll remind you at 7pm — and I'll keep her favourite topics nearby."
	}
];
var suggestions = [
	"Summarise my day",
	"Remind me to call Mom",
	"What should I focus on next?"
];
function Chat() {
	const [msgs, setMsgs] = (0, import_react.useState)(initial);
	const [text, setText] = (0, import_react.useState)("");
	const send = () => {
		if (!text.trim()) return;
		setMsgs((m) => [
			...m,
			{
				from: "me",
				text
			},
			{
				from: "ai",
				text: "Got it. I've saved that for you."
			}
		]);
		setText("");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-full flex flex-col px-5 pb-5 animate-fade-up lg:flex-row lg:gap-6 lg:px-0 lg:pb-0",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex h-full min-w-0 flex-1 flex-col lg:rounded-[28px] lg:border lg:border-border/60 lg:bg-card lg:p-5 lg:shadow-soft",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between pt-1 lg:pt-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/app",
							className: "w-10 h-10 rounded-full glass shadow-soft grid place-items-center lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-[18px] h-[18px]" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-9 h-9 rounded-full bg-gradient-ai grid place-items-center shadow-orb",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "w-4 h-4 text-white" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold leading-tight",
								children: "PhoneX"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] text-primary",
								children: "online"
							})] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/voice",
							"aria-label": "Voice",
							className: "w-10 h-10 rounded-full bg-gradient-ai shadow-orb grid place-items-center lg:hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "w-4 h-4 text-white" })
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex-1 mt-5 overflow-y-auto scrollbar-none space-y-2.5 lg:space-y-3 lg:pr-1",
					children: msgs.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: `flex ${m.from === "me" ? "justify-end" : "justify-start"}`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: `max-w-[78%] text-sm px-4 py-2.5 rounded-2xl shadow-soft lg:max-w-[62%] lg:px-5 lg:py-3 ${m.from === "me" ? "bg-gradient-ai text-white rounded-br-md" : "bg-card border border-border/60 text-foreground rounded-bl-md lg:bg-secondary/60"}`,
							children: m.text
						})
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex items-center gap-2 bg-card border border-border/60 shadow-card rounded-full pl-2 pr-1.5 py-1.5 lg:shadow-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							"aria-label": "Add",
							className: "w-9 h-9 rounded-full bg-secondary grid place-items-center transition-colors hover:bg-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "w-4 h-4 text-foreground/70" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: text,
							onChange: (e) => setText(e.target.value),
							onKeyDown: (e) => e.key === "Enter" && send(),
							placeholder: "Message PhoneX…",
							className: "flex-1 bg-transparent outline-none text-sm placeholder:text-muted-foreground"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/voice",
							"aria-label": "Voice input",
							className: "w-9 h-9 rounded-full bg-secondary grid place-items-center transition-colors hover:bg-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "w-4 h-4 text-foreground/70" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: send,
							"aria-label": "Send",
							className: "w-10 h-10 rounded-full bg-gradient-ai shadow-orb grid place-items-center transition-transform hover:scale-105",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "w-4 h-4 text-white" })
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "hidden lg:block lg:w-[320px] lg:shrink-0 lg:space-y-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[28px] border border-border/60 bg-card p-5 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Suggestions"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 space-y-2",
					children: suggestions.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setText(s),
						className: "w-full rounded-2xl bg-secondary px-4 py-2.5 text-left text-sm transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
						children: s
					}, s))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-[28px] border border-border/60 bg-card p-5 shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-semibold",
					children: "Continue elsewhere"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/voice",
						className: "flex items-center gap-3 rounded-2xl bg-secondary px-4 py-2.5 text-sm transition-colors hover:bg-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mic, { className: "h-4 w-4 text-foreground/70" }), " Talk with voice"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/memories",
						className: "flex items-center gap-3 rounded-2xl bg-secondary px-4 py-2.5 text-sm transition-colors hover:bg-accent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4 text-foreground/70" }), " Saved memories"]
					})]
				})]
			})]
		})]
	}) });
}
//#endregion
export { Chat as component };
