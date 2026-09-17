import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/timeline._id-WFpZT24Y.js
var import_jsx_runtime = require_jsx_runtime();
var SplitErrorComponent = ({ reset }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PhoneFrame, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
	className: "px-6 py-10 text-center",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-sm",
		children: "Something went wrong."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		onClick: reset,
		className: "mt-3 text-xs text-primary",
		children: "Retry"
	})]
}) });
//#endregion
export { SplitErrorComponent as errorComponent };
