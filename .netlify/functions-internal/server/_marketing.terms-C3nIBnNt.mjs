import { n as require_jsx_runtime } from "./_libs/react+tanstack__react-query.mjs";
import { a as SectionHeading, i as Section, n as Container } from "./_ssr/primitives-DGSZxQ5e.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_marketing.terms-C3nIBnNt.js
var import_jsx_runtime = require_jsx_runtime();
function TermsPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
		size: "hero",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Container, {
			width: "narrow",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Terms",
				title: "Terms of use.",
				description: "PhoneX is in active development. These terms cover this website and early access to the app."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mkt-body mt-10 max-w-[640px] space-y-6 text-[15px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This website presents PhoneX and how it is intended to work. Features shown here may change as the product develops." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Early access is provided as-is, without guarantees of availability, and may be updated or paused while PhoneX is being built." }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The PhoneX name, design, and content on this site belong to PhoneX. Complete terms will be published here before general availability." })
				]
			})]
		})
	});
}
//#endregion
export { TermsPage as component };
