import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { It as ChevronLeft, Lt as Check } from "../_libs/lucide-react.mjs";
import { o as useLang, s as useT } from "./router-g_PHrWan.mjs";
import { t as PhoneFrame } from "./PhoneFrame-BX0YUAy7.mjs";
import { t as BottomNav } from "./BottomNav-Dp5JNMH1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/language-B-zQ1cT0.js
var import_jsx_runtime = require_jsx_runtime();
var languages = [
	{
		code: "English",
		native: "English"
	},
	{
		code: "Hindi",
		native: "हिन्दी"
	},
	{
		code: "Gujarati",
		native: "ગુજરાતી"
	},
	{
		code: "Telugu",
		native: "తెలుగు"
	},
	{
		code: "Kannada",
		native: "ಕನ್ನಡ"
	},
	{
		code: "Arabic",
		native: "العربية"
	},
	{
		code: "Spanish",
		native: "Español"
	},
	{
		code: "French",
		native: "Français"
	},
	{
		code: "Chinese",
		native: "中文"
	},
	{
		code: "Japanese",
		native: "日本語"
	},
	{
		code: "German",
		native: "Deutsch"
	}
];
function LanguagePage() {
	const { lang, setLang } = useLang();
	const t = useT();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PhoneFrame, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-6 pb-40 animate-fade-up lg:px-0 lg:pb-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between lg:hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/settings",
						className: "w-10 h-10 rounded-full glass shadow-soft grid place-items-center",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-[18px] h-[18px] text-foreground/70" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold",
						children: t("Language")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-10" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-[26px] font-bold tracking-tight",
					children: t("Language")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground mt-1",
					children: t("Choose how PhoneX speaks with you")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-2 gap-2.5",
				children: languages.map((l) => {
					const active = l.code === lang;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => setLang(l.code),
						className: `flex items-center justify-between rounded-2xl px-4 py-3 text-left transition ${active ? "bg-gradient-lavender text-white shadow-soft" : "bg-card border border-border/60"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							"data-native-text": "true",
							children: l.native
						}), active && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
							className: "w-4 h-4",
							strokeWidth: 3
						})]
					}, l.code);
				})
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BottomNav, {})] });
}
//#endregion
export { LanguagePage as component };
