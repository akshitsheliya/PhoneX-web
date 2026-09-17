import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/primitives-DGSZxQ5e.js
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
/** Max-width container used by every marketing section. */
function Container({ className, width = "default", children }) {
	const max = {
		narrow: "max-w-[880px]",
		default: "max-w-[1200px]",
		wide: "max-w-[1280px]"
	}[width];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mx-auto w-full px-6 md:px-10", max, className),
		children
	});
}
/** Vertical rhythm wrapper. `tone` paints an optional subtle background. */
function Section({ className, tone = "plain", size = "default", id, children }) {
	const toneClass = {
		plain: "",
		tint: "mkt-tint",
		soft: "mkt-soft"
	}[tone];
	const sizeClass = {
		compact: "py-16 md:py-20",
		default: "py-16 md:py-20 lg:py-24",
		hero: "py-16 md:py-20 lg:py-24"
	}[size];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id,
		className: cn("relative", toneClass, sizeClass, className),
		children
	});
}
function Eyebrow({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1 text-[12px] font-medium tracking-[0.02em] text-muted-foreground backdrop-blur-sm", className),
		children
	});
}
/** Section heading block: eyebrow + title + short supporting line. */
function SectionHeading({ eyebrow, title, description, align = "left", className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("max-w-[640px]", align === "center" && "mx-auto text-center", className),
		children: [
			eyebrow ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eyebrow, {
				className: "mb-5",
				children: eyebrow
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mkt-h2",
				children: title
			}),
			description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mkt-lead mt-4",
				children: description
			}) : null
		]
	});
}
function buttonClass({ variant = "primary", size = "md" }) {
	return cn("inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", size === "lg" ? "h-13 px-7 text-[15px]" : "h-11 px-5 text-sm", variant === "primary" && "bg-foreground text-background shadow-soft hover:-translate-y-0.5 hover:shadow-card", variant === "secondary" && "border border-border bg-card text-foreground hover:border-foreground/25 hover:bg-secondary", variant === "ghost" && "text-foreground/70 hover:text-foreground");
}
/** Marketing CTA rendered as a router link. */
function CTALink({ to, hash, onClick, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to,
		hash,
		onClick,
		className: buttonClass(props),
		children: props.children
	});
}
//#endregion
export { SectionHeading as a, Section as i, Container as n, cn as o, Eyebrow as r, CTALink as t };
